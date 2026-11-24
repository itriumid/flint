// What goes into a code from the QR code tool, for each kind of code, and what scanning it does.
// The words for each are in content.ts; this file decides the text a code holds, which is what
// phones read when they scan it. Every code is static: it holds exactly what was typed, and nothing
// in between can count scans or point it somewhere else later.

import { COUNTRIES, DEFAULT_COUNTRY_NAME } from './countries';
import { bytesIn, QR_CAPACITY } from './qr';
import { chatTarget, waitsForTyping as numberWaits, type ChatProblem } from './whatsapp';

/** The kinds of code: a link or any text first, the rest offered under it. */
export const KINDS = ['text', 'wifi', 'contact', 'email', 'phone'] as const;
export type Kind = (typeof KINDS)[number];

/** What's been typed for each kind, kept for each so switching kinds loses nothing. */
export interface Entries {
	text: string;
	wifi: { name: string; password: string };
	contact: { name: string; country: string; phone: string; email: string; website: string };
	email: { address: string; subject: string; body: string };
	phone: { country: string; number: string };
}

export const emptyEntries = (): Entries => ({
	text: '',
	wifi: { name: '', password: '' },
	contact: { name: '', country: DEFAULT_COUNTRY_NAME, phone: '', email: '', website: '' },
	email: { address: '', subject: '', body: '' },
	phone: { country: DEFAULT_COUNTRY_NAME, number: '' }
});

/** What scanning the code does, for the line that says so: content.ts turns it into words. */
export type Does =
	| { kind: 'website'; host: string }
	| { kind: 'text' }
	| { kind: 'wifi'; name: string; open: boolean }
	| { kind: 'contact'; name: string }
	| { kind: 'email'; address: string }
	| { kind: 'phone'; number: string };

/** What's wrong: too long for a code, not an email address, or a phone number that can't be one. */
export type Problem = 'too-long' | 'not-an-email' | 'phone';

export type CodeFor =
	| { data: string; does: Does; fileStem: string }
	| { problem: Problem; bytes?: number; phone?: ChatProblem };

/** A web address, with its scheme: the only text phones open as a website without asking. */
function website(text: string): string | undefined {
	if (!/^https?:\/\/\S+$/i.test(text)) return undefined;
	try {
		return new URL(text).hostname.replace(/^www\./, '') || undefined;
	} catch {
		return undefined;
	}
}

/**
 * Text that looks like a web address but has no "https://": phones show it as text, or search
 * for it. The fix is to add the scheme, which the page offers.
 */
export function withScheme(text: string): string | undefined {
	const trimmed = text.trim();
	if (website(trimmed)) return undefined;
	if (!/^(www\.)?[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}(\/\S*)?$/i.test(trimmed)) return undefined;
	return `https://${trimmed}`;
}

/** Wi-Fi and contact codes mark their fields with these characters, so the text escapes them. */
const escapeWifi = (text: string) => text.replace(/([\\;,:"])/g, '\\$1');
const escapeVcard = (text: string) => text.replace(/([\\;,])/g, '\\$1').replace(/\r?\n/g, '\\n');

/**
 * A phone number read the way WhatsApp click-to-chat reads one, in the country chosen: "0812 …" in
 * Indonesia is +62 812 …, and a number with its own + or 00 keeps its country. A code dials it in
 * full, country code first, so it works whoever scans it, wherever they are.
 */
export function phoneNumber(
	country: string,
	typed: string
): { number: string; display: string; countryCode: string } | { phone: ChatProblem } | undefined {
	const code = COUNTRIES.find((found) => found.name === country)?.phoneCode ?? '';
	const read = chatTarget(code, typed, '');
	if (!read) return undefined;
	if ('problem' in read) return { phone: read.problem };
	return { number: `+${read.number}`, display: read.display, countryCode: read.countryCode };
}

const looksLikeEmail = (address: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address);

/**
 * A short, safe part of a file name from what the code holds, so a folder of saved codes sorts:
 * lower case, letters, digits, dots, @ and dashes, at most 40 characters.
 */
export function fileStem(text: string): string {
	return text
		.toLowerCase()
		.normalize('NFKD')
		.replace(/[̀-ͯ]/g, '')
		.replace(/[^a-z0-9.@]+/g, '-')
		.replace(/^[-.]+|[-.]+$/g, '')
		.slice(0, 40)
		.replace(/[-.]+$/, '');
}

/** The file a saved code goes in, as PNG or SVG. */
export const codeFileName = (stem: string, type: 'png' | 'svg') =>
	`qr-code${stem ? `-${stem}` : ''}.${type}`;

/** The first few words of a text, for its file name. */
const firstWords = (text: string) => text.split(/\s+/).slice(0, 4).join(' ');

/** What a pasted text does when it's already in one of the other kinds' forms. */
function textDoes(text: string): Does {
	const host = website(text);
	if (host) return { kind: 'website', host };
	if (/^mailto:/i.test(text)) return { kind: 'email', address: text.slice(7).split('?')[0] };
	if (/^tel:/i.test(text)) return { kind: 'phone', number: text.slice(4) };
	if (/^WIFI:/i.test(text)) {
		const name = /(?:^WIFI:|;)S:((?:\\.|[^;])*)/i.exec(text)?.[1]?.replace(/\\(.)/g, '$1') ?? '';
		return { kind: 'wifi', name, open: /(?:^WIFI:|;)T:nopass/i.test(text) };
	}
	if (/^BEGIN:VCARD/i.test(text)) {
		const name = /\nFN:(.*)/i.exec(text)?.[1]?.trim() ?? '';
		return { kind: 'contact', name };
	}
	return { kind: 'text' };
}

/**
 * The text a code holds for what's been typed in `kind`, what scanning it does, and a stem for
 * its file name. Undefined while there's nothing to make a code from yet.
 */
export function codeFor(kind: Kind, entries: Entries): CodeFor | undefined {
	const made = make(kind, entries);
	if (!made || 'problem' in made) return made;
	const bytes = bytesIn(made.data);
	return bytes > QR_CAPACITY ? { problem: 'too-long', bytes } : made;
}

function make(kind: Kind, entries: Entries): CodeFor | undefined {
	switch (kind) {
		case 'text': {
			const text = entries.text;
			if (!text.trim()) return undefined;
			const does = textDoes(text.trim());
			const stem = does.kind === 'website' ? does.host : fileStem(firstWords(text.trim()));
			return { data: text, does, fileStem: stem };
		}
		case 'wifi': {
			const name = entries.wifi.name;
			if (!name.trim()) return undefined;
			const password = entries.wifi.password;
			const open = password === '';
			const data = open
				? `WIFI:T:nopass;S:${escapeWifi(name)};;`
				: `WIFI:T:WPA;S:${escapeWifi(name)};P:${escapeWifi(password)};;`;
			return { data, does: { kind: 'wifi', name, open }, fileStem: fileStem(`wifi ${name}`) };
		}
		case 'contact': {
			const contact = entries.contact;
			const name = contact.name.trim();
			const phone = contact.phone.trim();
			const email = contact.email.trim();
			const site = contact.website.trim();
			if (!name && !phone && !email && !site) return undefined;
			if (email && !looksLikeEmail(email)) return { problem: 'not-an-email' };
			const read = phone ? phoneNumber(contact.country, phone) : undefined;
			if (read && 'phone' in read) return { problem: 'phone', phone: read.phone };
			const lines = ['BEGIN:VCARD', 'VERSION:3.0'];
			// The whole name as the given name: splitting it into first and last guesses wrong for
			// the many names that don't have one of each.
			lines.push(`N:;${escapeVcard(name)};;;`, `FN:${escapeVcard(name)}`);
			if (read) lines.push(`TEL;TYPE=CELL:${read.number}`);
			if (email) lines.push(`EMAIL:${escapeVcard(email)}`);
			if (site) lines.push(`URL:${escapeVcard(withScheme(site) ?? site)}`);
			lines.push('END:VCARD');
			return {
				data: lines.join('\r\n'),
				does: { kind: 'contact', name: name || phone || email || site },
				fileStem: fileStem(name || 'contact')
			};
		}
		case 'email': {
			const { address, subject, body } = entries.email;
			const to = address.trim();
			if (!to) return undefined;
			if (!looksLikeEmail(to)) return { problem: 'not-an-email' };
			const query = [
				subject.trim() && `subject=${encodeURIComponent(subject.trim())}`,
				body.trim() && `body=${encodeURIComponent(body.trim())}`
			].filter(Boolean);
			return {
				data: `mailto:${to}${query.length ? `?${query.join('&')}` : ''}`,
				does: { kind: 'email', address: to },
				fileStem: fileStem(to)
			};
		}
		case 'phone': {
			const read = phoneNumber(entries.phone.country, entries.phone.number);
			if (!read) return undefined;
			if ('phone' in read) return { problem: 'phone', phone: read.phone };
			return {
				data: `tel:${read.number}`,
				does: { kind: 'phone', number: read.display },
				fileStem: read.number.replace('+', '')
			};
		}
	}
}

/** Problems that every entry has halfway through typing it wait until the typing stops. */
export const waitsForTyping = (made: { problem: Problem; phone?: ChatProblem }) =>
	made.problem === 'not-an-email' ||
	(made.problem === 'phone' && made.phone !== undefined && numberWaits(made.phone));

/**
 * A link handed over in the address, after the #, as WhatsApp click-to-chat does: "#text=…".
 * After the # it stays in the browser and never reaches a server or its logs.
 */
export function textFromHash(hash: string): string | undefined {
	const text = new URLSearchParams(hash.replace(/^#/, '')).get('text');
	return text?.trim() ? text : undefined;
}
