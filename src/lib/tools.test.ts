import { describe, expect, it } from 'vitest';
import {
	aToZ,
	featured,
	findTools,
	needsLetters,
	readRecent,
	recentTools,
	theRest,
	toolAt,
	TOOLS,
	withOpened,
	type Tool
} from './tools';

const names = (tools: Tool[]) => tools.map((tool) => tool.name);

/** A tool for the tests, as a future one might be. */
const extra = (name: string, searchTerms = ''): Tool => ({
	id: 'qr-code',
	path: '/x',
	name,
	short: name,
	line: '',
	leaves: '',
	start: '',
	searchTerms
});

describe('the index', () => {
	it('leads with three tools, and the rest wait in the A-to-Z list', () => {
		expect(featured()).toHaveLength(3);
		expect(names(theRest())).toEqual(['Resize and convert images']);
		expect(theRest(TOOLS.slice(0, 3))).toEqual([]);
	});

	it('puts tools past the featured ones in the rest', () => {
		const more = [...TOOLS, extra('Word counter')];
		expect(names(theRest(more))).toEqual(['Resize and convert images', 'Word counter']);
	});

	it('gives every tool a path, a line, what leaves it and a start', () => {
		for (const tool of TOOLS) {
			expect(tool.path).toMatch(/^\//);
			expect(tool.line && tool.leaves && tool.start).toBeTruthy();
		}
	});
});

describe('aToZ', () => {
	it('groups tools by their first letter, in order', () => {
		const groups = aToZ([...TOOLS, extra('Stopwatch'), extra('Unit converter')]);
		expect(groups.map((group) => group.letter)).toEqual(['Q', 'R', 'S', 'U', 'W']);
		expect(names(groups[2].tools)).toEqual(['Split bill', 'Stopwatch']);
	});
});

describe('needsLetters', () => {
	it('waits until a letter holds two tools', () => {
		expect(needsLetters(aToZ())).toBe(false);
		expect(needsLetters(aToZ([...TOOLS, extra('Stopwatch')]))).toBe(true);
	});
});

describe('findTools', () => {
	it('is every tool, A to Z, with nothing typed', () => {
		expect(names(findTools(''))).toEqual([
			'QR code',
			'Resize and convert images',
			'Split bill',
			'WhatsApp click-to-chat'
		]);
	});

	it('finds a tool by its name, or by what someone wants done', () => {
		expect(names(findTools('split'))).toEqual(['Split bill']);
		expect(names(findTools('wifi'))).toEqual(['QR code']);
		expect(names(findTools('receipt'))).toEqual(['Split bill']);
		expect(names(findTools('200 kb'))).toEqual([]);
		expect(names(findTools('compress'))).toEqual(['Resize and convert images']);
		expect(names(findTools('webp'))).toEqual(['Resize and convert images']);
		expect(names(findTools('chat'))[0]).toBe('WhatsApp click-to-chat');
	});

	it('finds nothing for words no tool has', () => {
		expect(findTools('spreadsheet')).toEqual([]);
	});
});

describe('recent tools', () => {
	it('reads only known tool ids, and nothing from anything else', () => {
		expect(readRecent('["qr-code","nope","split-bill"]')).toEqual(['qr-code', 'split-bill']);
		expect(readRecent(null)).toEqual([]);
		expect(readRecent('not json')).toEqual([]);
		expect(readRecent('{"a":1}')).toEqual([]);
	});

	it('puts the tool just opened first, once, and keeps one more than it shows', () => {
		expect(withOpened(['split-bill', 'qr-code'], 'qr-code')).toEqual(['qr-code', 'split-bill']);
		expect(withOpened(['a', 'b', 'c', 'd'] as never, 'qr-code')).toHaveLength(4);
	});

	it('leaves out the tool that is open', () => {
		expect(names(recentTools(['qr-code', 'split-bill', 'whatsapp'], 'qr-code'))).toEqual([
			'Split bill',
			'WhatsApp click-to-chat'
		]);
	});

	it('knows which tool a path is', () => {
		expect(toolAt('/qr-code')?.id).toBe('qr-code');
		expect(toolAt('/')).toBeUndefined();
	});
});
