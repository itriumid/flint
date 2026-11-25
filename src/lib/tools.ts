// Flint's tools, in one list: the index's fields, its A-to-Z list and the header's "All tools" all
// read from here, so a new tool is added once. The words are in content.ts; this file decides the
// order, which tools the index leads with, and how a search finds them.

import { IMAGES, INDEX, NAV, PDF, QR_CODE, SPLIT_BILL, WHATSAPP } from './content';
import { matchChoices } from './search';

export type ToolId = 'split-bill' | 'whatsapp' | 'qr-code' | 'images' | 'pdf';

export interface Tool {
	id: ToolId;
	path: string;
	name: string;
	/** Its name in the header, where a long one is shortened. */
	short: string;
	/** What it does, in one line. */
	line: string;
	/** What leaves the device when it's used. */
	leaves: string;
	/** Its start on the index, when it's featured. */
	start: string;
	/** Words people might search for that aren't in its name or line: what they want done. */
	searchTerms: string;
}

/** Every tool, in the order the index leads with them. */
export const TOOLS: Tool[] = [
	{
		id: 'split-bill',
		path: SPLIT_BILL.path,
		name: SPLIT_BILL.name,
		short: NAV.splitBill,
		line: SPLIT_BILL.line,
		leaves: INDEX.leaves.splitBill,
		start: INDEX.starts.splitBill,
		searchTerms: 'bill receipt restaurant share pay owe money divide tax service'
	},
	{
		id: 'whatsapp',
		path: WHATSAPP.path,
		name: WHATSAPP.name,
		short: NAV.whatsapp,
		line: WHATSAPP.line,
		leaves: INDEX.leaves.whatsapp,
		start: INDEX.starts.whatsapp,
		searchTerms: 'chat message phone number link wa.me contact'
	},
	{
		id: 'qr-code',
		path: QR_CODE.path,
		name: QR_CODE.name,
		short: NAV.qrCode,
		line: QR_CODE.line,
		leaves: INDEX.leaves.qrCode,
		start: INDEX.starts.qrCode,
		searchTerms: 'qr code scan link url wifi wi-fi password menu contact card vcard email print'
	},
	{
		id: 'images',
		path: IMAGES.path,
		name: IMAGES.name,
		short: NAV.images,
		line: IMAGES.line,
		leaves: INDEX.leaves.images,
		start: INDEX.starts.images,
		searchTerms:
			'image photo picture compress shrink reduce resize smaller kb mb size jpg jpeg png webp heic convert format exif location metadata'
	},
	{
		id: 'pdf',
		path: PDF.path,
		name: PDF.name,
		short: NAV.pdf,
		line: PDF.line,
		leaves: INDEX.leaves.pdf,
		start: INDEX.starts.pdf,
		searchTerms:
			'pdf merge join combine scan document compress shrink reduce smaller kb mb size split extract pages rotate turn reorder delete password'
	}
];

/**
 * How many tools the index leads with, as full-width fields. The rest wait in the A-to-Z list
 * under them, which only appears once there's a rest.
 */
export const FEATURED_COUNT = 3;

export const featured = (tools: Tool[] = TOOLS) => tools.slice(0, FEATURED_COUNT);
export const theRest = (tools: Tool[] = TOOLS) => tools.slice(FEATURED_COUNT);

/** Tools A to Z by name, under their first letter. */
export function aToZ(tools: Tool[] = TOOLS): { letter: string; tools: Tool[] }[] {
	const sorted = [...tools].sort((a, b) => a.name.localeCompare(b.name, 'en'));
	const groups: { letter: string; tools: Tool[] }[] = [];
	for (const tool of sorted) {
		const letter = tool.name[0].toUpperCase();
		const group = groups.at(-1);
		if (group?.letter === letter) group.tools.push(tool);
		else groups.push({ letter, tools: [tool] });
	}
	return groups;
}

/**
 * Whether the A to Z needs its letters: only once a letter holds two tools or more. Until then
 * each letter heads one tool, and the letters weigh more than the names they sort.
 */
export const needsLetters = (groups: { tools: Tool[] }[]) =>
	groups.some((group) => group.tools.length > 1);

/**
 * The tools that answer what's typed, best first: by name, by what they do, or by the words for
 * what people want done ("wifi" finds QR code). Nothing typed is every tool, A to Z.
 */
export function findTools(typed: string, tools: Tool[] = TOOLS): Tool[] {
	const sorted = aToZ(tools).flatMap((group) => group.tools);
	if (!typed.trim()) return sorted;
	const searchable = sorted.map((tool) => ({
		tool,
		label: tool.name,
		searchTerms: `${tool.line} ${tool.searchTerms}`
	}));
	const found = matchChoices(searchable, typed).map((match) => match.tool);
	// A tool named by what's typed comes before one that only lists it among its words: "split"
	// finds Split bill before the PDF tool, which can split a PDF.
	const query = typed.trim().toLowerCase();
	const named = (tool: Tool) =>
		tool.name
			.toLowerCase()
			.split(/[\s-]+/)
			.includes(query);
	return [...found.filter(named), ...found.filter((tool) => !named(tool))];
}

// The tools opened last on this device, for the top of "All tools": their ids only, newest first,
// in this browser's local storage beside the theme. No times, no counts, and never sent. Recency,
// not frequency, so the list doesn't reshuffle under a thumb: the tool just left comes first.

/** In local storage. */
export const RECENT_KEY = 'flint-recent-tools';

/** How many recent tools "All tools" shows, besides the one that's open. */
export const RECENT_SHOWN = 3;

/** What was kept, as tool ids: anything that isn't a list of known tools is nothing. */
export function readRecent(stored: string | null, tools: Tool[] = TOOLS): ToolId[] {
	try {
		const ids: unknown = JSON.parse(stored ?? '[]');
		if (!Array.isArray(ids)) return [];
		return ids.filter((id): id is ToolId => tools.some((tool) => tool.id === id));
	} catch {
		return [];
	}
}

/** The list after opening `id`: it moves to the front, and one more than is shown is kept. */
export const withOpened = (recent: ToolId[], id: ToolId) =>
	[id, ...recent.filter((other) => other !== id)].slice(0, RECENT_SHOWN + 1);

/** The recent tools to show, leaving out the one that's open. */
export function recentTools(recent: ToolId[], current?: ToolId, tools: Tool[] = TOOLS): Tool[] {
	return recent
		.filter((id) => id !== current)
		.slice(0, RECENT_SHOWN)
		.map((id) => tools.find((tool) => tool.id === id))
		.filter((tool): tool is Tool => Boolean(tool));
}

/** The tool a path belongs to, if any. */
export const toolAt = (path: string, tools: Tool[] = TOOLS) =>
	tools.find((tool) => path === tool.path || path.startsWith(`${tool.path}/`));
