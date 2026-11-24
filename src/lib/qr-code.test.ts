import { describe, expect, it } from 'vitest';
import {
	codeFileName,
	codeFor,
	emptyEntries,
	fileStem,
	textFromHash,
	waitsForTyping,
	withScheme,
	type Entries
} from './qr-code';
import { QR_CAPACITY, qrModules } from './qr';

/** Entries with one kind's fields filled in. */
function entries(change: (entries: Entries) => void): Entries {
	const filled = emptyEntries();
	change(filled);
	return filled;
}

/** The code's text, when there is one. */
const dataFor = (...input: Parameters<typeof codeFor>) => {
	const made = codeFor(...input);
	return made && 'data' in made ? made.data : undefined;
};

describe('a link or text', () => {
	it('has no code until something is typed', () => {
		expect(codeFor('text', emptyEntries())).toBeUndefined();
		expect(
			codeFor(
				'text',
				entries((e) => (e.text = '   '))
			)
		).toBeUndefined();
	});

	it('holds a link exactly as typed, and says which website it opens', () => {
		const made = codeFor(
			'text',
			entries((e) => (e.text = 'https://www.itrium.id/about'))
		);
		expect(made).toEqual({
			data: 'https://www.itrium.id/about',
			does: { kind: 'website', host: 'itrium.id' },
			fileStem: 'itrium.id'
		});
	});

	it('holds other text as it is, and names its file after its first words', () => {
		const made = codeFor(
			'text',
			entries((e) => (e.text = 'Table 12: ask for Budi, please'))
		);
		expect(made).toEqual({
			data: 'Table 12: ask for Budi, please',
			does: { kind: 'text' },
			fileStem: 'table-12-ask-for'
		});
	});

	it('knows a pasted email, phone, Wi-Fi or contact code for what it is', () => {
		const does = (text: string) => {
			const made = codeFor(
				'text',
				entries((e) => (e.text = text))
			);
			return made && 'does' in made ? made.does : undefined;
		};
		expect(does('mailto:hello@itrium.id?subject=Hi')).toEqual({
			kind: 'email',
			address: 'hello@itrium.id'
		});
		expect(does('tel:+6281234567890')).toEqual({ kind: 'phone', number: '+6281234567890' });
		expect(does('WIFI:T:WPA;S:Kopi\\;Kita;P:secret;;')).toEqual({
			kind: 'wifi',
			name: 'Kopi;Kita',
			open: false
		});
		expect(does('BEGIN:VCARD\r\nVERSION:3.0\r\nFN:Ana\r\nEND:VCARD')).toEqual({
			kind: 'contact',
			name: 'Ana'
		});
	});

	it('is too long past what the largest code holds, counting bytes, not letters', () => {
		expect(
			dataFor(
				'text',
				entries((e) => (e.text = 'a'.repeat(QR_CAPACITY)))
			)
		).toBeDefined();
		expect(
			codeFor(
				'text',
				entries((e) => (e.text = 'a'.repeat(QR_CAPACITY + 1)))
			)
		).toEqual({
			problem: 'too-long',
			bytes: QR_CAPACITY + 1
		});
		// é is two bytes in UTF-8.
		expect(
			codeFor(
				'text',
				entries((e) => (e.text = 'é'.repeat(1166)))
			)
		).toEqual({
			problem: 'too-long',
			bytes: 2332
		});
	});

	it('makes a code for everything it lets through, accents and emoji included', () => {
		expect(() => qrModules('a'.repeat(QR_CAPACITY))).not.toThrow();
		expect(() => qrModules('Kopi susu ☕ untuk Zoë')).not.toThrow();
	});
});

describe('withScheme', () => {
	it('offers https:// for an address typed without it', () => {
		expect(withScheme('itrium.id')).toBe('https://itrium.id');
		expect(withScheme('www.example.com/menu')).toBe('https://www.example.com/menu');
	});

	it('offers nothing for a full link or for text', () => {
		expect(withScheme('https://itrium.id')).toBeUndefined();
		expect(withScheme('Hello there')).toBeUndefined();
		expect(withScheme('3.14')).toBeUndefined();
	});
});

describe('a Wi-Fi network', () => {
	it('needs a network name', () => {
		expect(
			codeFor(
				'wifi',
				entries((e) => (e.wifi.password = 'secret123'))
			)
		).toBeUndefined();
	});

	it('joins a network with its password, escaping what the format reserves', () => {
		const made = codeFor(
			'wifi',
			entries((e) => (e.wifi = { name: 'Kopi; Kita', password: 'a:b,c"d\\e' }))
		);
		expect(made).toEqual({
			data: 'WIFI:T:WPA;S:Kopi\\; Kita;P:a\\:b\\,c\\"d\\\\e;;',
			does: { kind: 'wifi', name: 'Kopi; Kita', open: false },
			fileStem: 'wifi-kopi-kita'
		});
	});

	it('joins an open network when there is no password', () => {
		expect(
			dataFor(
				'wifi',
				entries((e) => (e.wifi.name = 'Guests'))
			)
		).toBe('WIFI:T:nopass;S:Guests;;');
	});
});

describe('a contact', () => {
	it('is a vCard with what was given, the whole name kept as one', () => {
		expect(
			dataFor(
				'contact',
				entries(
					(e) =>
						(e.contact = {
							name: 'Siti Nurhaliza',
							country: 'Indonesia',
							phone: '0812-3456-7890',
							email: 'siti@example.com',
							website: 'example.com'
						})
				)
			)
		).toBe(
			[
				'BEGIN:VCARD',
				'VERSION:3.0',
				'N:;Siti Nurhaliza;;;',
				'FN:Siti Nurhaliza',
				'TEL;TYPE=CELL:+6281234567890',
				'EMAIL:siti@example.com',
				'URL:https://example.com',
				'END:VCARD'
			].join('\r\n')
		);
	});

	it('leaves out what was left empty, and escapes commas', () => {
		expect(
			dataFor(
				'contact',
				entries((e) => (e.contact.name = 'Toko Ana, Bandung'))
			)
		).toBe(
			'BEGIN:VCARD\r\nVERSION:3.0\r\nN:;Toko Ana\\, Bandung;;;\r\nFN:Toko Ana\\, Bandung\r\nEND:VCARD'
		);
	});

	it('says what is wrong with an email or a phone number', () => {
		expect(
			codeFor(
				'contact',
				entries((e) => (e.contact.email = 'siti@'))
			)
		).toEqual({
			problem: 'not-an-email'
		});
		expect(
			codeFor(
				'contact',
				entries((e) => (e.contact.phone = 'call me'))
			)
		).toEqual({
			problem: 'phone',
			phone: 'no-digits'
		});
	});
});

describe('an email', () => {
	it('starts an email, with a subject and a message when given', () => {
		expect(
			dataFor(
				'email',
				entries(
					(e) =>
						(e.email = { address: 'hello@itrium.id', subject: 'Order #12', body: 'Hi & thanks' })
				)
			)
		).toBe('mailto:hello@itrium.id?subject=Order%20%2312&body=Hi%20%26%20thanks');
		expect(
			dataFor(
				'email',
				entries((e) => (e.email.address = 'hello@itrium.id'))
			)
		).toBe('mailto:hello@itrium.id');
	});

	it('says when the address is not one', () => {
		expect(
			codeFor(
				'email',
				entries((e) => (e.email.address = 'hello'))
			)
		).toEqual({
			problem: 'not-an-email'
		});
	});
});

describe('a phone call', () => {
	it('calls the number in full, read in the country chosen, so it dials from anywhere', () => {
		expect(
			codeFor(
				'phone',
				entries((e) => (e.phone.number = '0812 3456 7890'))
			)
		).toEqual({
			data: 'tel:+6281234567890',
			does: { kind: 'phone', number: '+62 812-3456-7890' },
			fileStem: '6281234567890'
		});
		expect(
			dataFor(
				'phone',
				entries((e) => (e.phone = { country: 'United Kingdom', number: '07700 900123' }))
			)
		).toBe('tel:+447700900123');
	});

	it('keeps the country of a number typed with its own +', () => {
		expect(
			dataFor(
				'phone',
				entries((e) => (e.phone.number = '+44 7700 900123'))
			)
		).toBe('tel:+447700900123');
	});

	it('says what is wrong, the way WhatsApp click-to-chat does', () => {
		expect(
			codeFor(
				'phone',
				entries((e) => (e.phone.number = '0812 34'))
			)
		).toEqual({
			problem: 'phone',
			phone: 'too-short'
		});
	});
});

describe('waitsForTyping', () => {
	it('lets a half-typed address or number finish before saying it is wrong', () => {
		expect(waitsForTyping({ problem: 'not-an-email' })).toBe(true);
		expect(waitsForTyping({ problem: 'phone', phone: 'too-short' })).toBe(true);
		expect(waitsForTyping({ problem: 'phone', phone: 'several' })).toBe(false);
		expect(waitsForTyping({ problem: 'too-long' })).toBe(false);
	});
});

describe('file names', () => {
	it('are short, safe and sortable', () => {
		expect(fileStem('Kopi Kita — Café Ü!')).toBe('kopi-kita-cafe-u');
		expect(fileStem('東京')).toBe('');
		expect(codeFileName('itrium.id', 'png')).toBe('qr-code-itrium.id.png');
		expect(codeFileName('', 'svg')).toBe('qr-code.svg');
	});
});

describe('textFromHash', () => {
	it('reads a link handed over after the #', () => {
		expect(textFromHash('#text=https%3A%2F%2Fwa.me%2F6281234567890')).toBe(
			'https://wa.me/6281234567890'
		);
		expect(textFromHash('')).toBeUndefined();
		expect(textFromHash('#bill=abc')).toBeUndefined();
	});
});
