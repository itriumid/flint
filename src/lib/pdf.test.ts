import { describe, expect, it } from 'vitest';
import { degrees, PDFDocument, PDFName, StandardFonts } from '@cantoo/pdf-lib';
import {
	assemble,
	bestFit,
	canCopy,
	coverage,
	fileName,
	fingerprint,
	isPicture,
	LADDER,
	makeFiles,
	move,
	photoPage,
	remembered,
	turnedOnce,
	type PageItem,
	type Source
} from './pdf';

// A 12 × 8 JPEG, small enough to keep here.
const JPEG = Uint8Array.from(
	atob(
		'/9j/4AAQSkZJRgABAQAASABIAAD/4QEeRXhpZgAATU0AKgAAAAgACgEGAAMAAAABAAIAAAESAAMAAAABAAEAAAEaAAUAAAABAAAAhgEbAAUAAAABAAAAjgEoAAMAAAABAAIAAAExAAIAAAAhAAAAlgEyAAIAAAAUAAAAuAFCAAQAAAABAAAEAAFDAAQAAAABAAAEAIdpAAQAAAABAAAAzAAAAAAAAABIAAAAAQAAAEgAAAABQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkAADIwMjQ6MDU6MjMgMTY6MzA6MDgAAASQBAACAAAAFAAAAQKgAQADAAAAAQABAACgAgAEAAAAAQAAAAygAwAEAAAAAQAAAAgAAAAAMjAyNDowMToyNiAyMToxMDozMgD/wAARCAAIAAwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9sAQwACAgICAgIEAgIEBgQEBAYIBgYGBggKCAgICAgKDAoKCgoKCgwMDAwMDAwMDg4ODg4OEBAQEBASEhISEhISEhIS/9sAQwEDAwMFBAUIBAQIEw0LDRMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMT/90ABAAB/9oADAMBAAIRAxEAPwD6W1WS0iMt3BsW2jkjkktYxkIgJwDnn5mHPc8Ve0y7tZrNZb7VYbFmyVhxyF7E8dT3zXK3n+q1v/cg/wDQ64/Wf+PlP+uafyr9fmvcVj4GC11P/9k='
	),
	(character) => character.charCodeAt(0)
);

/** A PDF of typed pages, each saying its own name, and with an author that mustn't be carried over. */
async function typed(names: string[], options: { rotate?: number; password?: string } = {}) {
	const document = await PDFDocument.create();
	document.setAuthor('Someone');
	const font = await document.embedFont(StandardFonts.Helvetica);
	for (const name of names) {
		const page = document.addPage([595, 842]);
		page.drawText(name, { x: 50, y: 700, size: 24, font });
		if (options.rotate) page.setRotation(degrees(options.rotate));
	}
	if (options.password) {
		document.encrypt({ userPassword: options.password, ownerPassword: 'owner' });
	}
	return document.save();
}

/** What a saved file holds: what it says about itself, and each page's turn and size. */
async function read(bytes: Uint8Array) {
	const document = await PDFDocument.load(bytes, { updateMetadata: false });
	return {
		author: document.getAuthor(),
		producer: document.getProducer(),
		pages: document.getPages().map((page) => ({
			turn: page.getRotation().angle,
			size: page.getSize()
		}))
	};
}

const page = (id: number, file: number, index: number, turn: PageItem['turn'] = 0): PageItem => ({
	id,
	file,
	index,
	turn
});

describe('turnedOnce', () => {
	it('turns a quarter clockwise, round to upright again', () => {
		expect([0, 90, 180, 270].map((turn) => turnedOnce(turn as PageItem['turn']))).toEqual([
			90, 180, 270, 0
		]);
	});
});

describe('move', () => {
	const list = ['a', 'b', 'c', 'd'];
	it('puts an item down before another', () => {
		expect(move(list, 3, 0)).toEqual(['d', 'a', 'b', 'c']);
		expect(move(list, 0, 2)).toEqual(['b', 'a', 'c', 'd']);
		expect(move(list, 1, 3)).toEqual(['a', 'c', 'b', 'd']);
	});
	it('puts an item at the end', () => {
		expect(move(list, 0, 4)).toEqual(['b', 'c', 'd', 'a']);
	});
	it('leaves the list as it was when nothing would change, or the places are wrong', () => {
		expect(move(list, 1, 1)).toEqual(list);
		expect(move(list, 1, 2)).toEqual(list);
		expect(move(list, 7, 0)).toEqual(list);
		expect(move(list, 0, 9)).toEqual(list);
	});
	it("doesn't change the list it was given", () => {
		const original = [...list];
		move(list, 0, 4);
		expect(list).toEqual(original);
	});
});

describe('isPicture', () => {
	it('is a scan or a photo: an image and next to no text', () => {
		expect(isPicture({ characters: 0, images: 1, coverage: 0.3 })).toBe(true);
		expect(isPicture({ characters: 12, images: 3, coverage: 1 })).toBe(true);
	});
	it('is a scan with the words a scanning app read laid over it', () => {
		expect(isPicture({ characters: 2400, images: 1, coverage: 0.98 })).toBe(true);
	});
	it("isn't a page of typed text, even with a logo or a photo on it", () => {
		expect(isPicture({ characters: 900, images: 1, coverage: 0.02 })).toBe(false);
		expect(isPicture({ characters: 900, images: 1, coverage: 0.3 })).toBe(false);
		expect(isPicture({ characters: 0, images: 0, coverage: 0 })).toBe(false);
	});
});

describe('coverage', () => {
	// pdf.js's numbers for these operations, as its OPS has them.
	const ops = {
		save: 10,
		restore: 11,
		transform: 12,
		paintFormXObjectBegin: 74,
		paintFormXObjectEnd: 75,
		images: [85, 86, 83]
	};
	const page = 595 * 842;

	it('measures an image stretched over the whole page', () => {
		const result = coverage(
			{
				fnArray: [10, 12, 85, 11],
				argsArray: [null, [595, 0, 0, 842, 0, 0], ['img1', 595, 842], null]
			},
			ops,
			page
		);
		expect(result).toEqual({ images: 1, coverage: 1 });
	});

	it('measures a small logo, scaled and moved', () => {
		const result = coverage(
			{
				fnArray: [10, 12, 12, 85, 11],
				argsArray: [null, [1, 0, 0, 1, 400, 700], [100, 0, 0, 50, 0, 0], ['logo'], null]
			},
			ops,
			page
		);
		expect(result.images).toBe(1);
		expect(result.coverage).toBeCloseTo(5000 / page);
	});

	it('restores the transform after each image, so the next is measured on its own', () => {
		const result = coverage(
			{
				fnArray: [10, 12, 85, 11, 10, 12, 85, 11],
				argsArray: [
					null,
					[200, 0, 0, 200, 0, 0],
					['a'],
					null,
					null,
					[100, 0, 0, 100, 0, 0],
					['b'],
					null
				]
			},
			ops,
			page
		);
		expect(result.coverage).toBeCloseTo(50_000 / page);
	});

	it('follows a form, whose own matrix scales what it paints', () => {
		const result = coverage(
			{
				fnArray: [74, 12, 85, 75, 85],
				argsArray: [
					[
						[2, 0, 0, 2, 0, 0],
						[0, 0, 1, 1]
					],
					[100, 0, 0, 100, 0, 0],
					['a'],
					null,
					['b']
				]
			},
			ops,
			page
		);
		// Inside the form: 200 by 200. After it, the page's own transform again: a unit square.
		expect(result.images).toBe(2);
		expect(result.coverage).toBeCloseTo(40_001 / page);
	});

	it('is 1 at most, however many images lie on top of each other', () => {
		const full = [10, 12, 85, 11];
		const args = [null, [595, 0, 0, 842, 0, 0], ['a'], null];
		expect(
			coverage({ fnArray: [...full, ...full], argsArray: [...args, ...args] }, ops, page).coverage
		).toBe(1);
	});
});

describe('LADDER', () => {
	it('goes down at every step, in size and in quality', () => {
		for (let step = 1; step < LADDER.length; step++) {
			expect(LADDER[step].side).toBeLessThan(LADDER[step - 1].side);
			expect(LADDER[step].quality).toBeLessThan(LADDER[step - 1].quality);
		}
	});
});

describe('bestFit', () => {
	// A file that halves at every step: 1,600 KB, 800, 400 … in bytes.
	const sizes = LADDER.map((_, step) => 1_600_000 / 2 ** step);

	it('takes the best step that fits', async () => {
		const result = await bestFit(async (step) => sizes[step], 500_000);
		expect(result).toEqual({ step: 2, size: 400_000, fits: true });
	});
	it('takes the first step when it fits', async () => {
		expect(await bestFit(async (step) => sizes[step], 2_000_000)).toMatchObject({
			step: 0,
			fits: true
		});
	});
	it('says when even the last step is too big', async () => {
		expect(await bestFit(async (step) => sizes[step], 1_000)).toEqual({
			step: LADDER.length - 1,
			size: sizes.at(-1),
			fits: false
		});
	});
	it('tries a few steps, not every one', async () => {
		const tried: number[] = [];
		await bestFit(async (step) => {
			tried.push(step);
			return sizes[step];
		}, 500_000);
		expect(tried.length).toBeLessThanOrEqual(4);
	});
});

describe('photoPage', () => {
	it('makes a photo the size of an A4 page on its longer side', () => {
		expect(photoPage(4000, 3000)).toEqual({ width: 842, height: 631.5 });
		expect(photoPage(1000, 2000)).toEqual({ width: 421, height: 842 });
	});
});

describe('fileName', () => {
	it("keeps one file's name", () => {
		expect(fileName(['surat.pdf'], 'combined')).toBe('surat.pdf');
		expect(fileName(['surat.pdf', 'surat.pdf'], 'combined')).toBe('surat.pdf');
	});
	it("says it's combined when there are several", () => {
		expect(fileName(['surat.pdf', 'KTP.jpg'], 'combined')).toBe('surat-combined.pdf');
	});
	it('numbers a page saved on its own', () => {
		expect(fileName(['surat.pdf'], 'combined', 3)).toBe('surat-3.pdf');
	});
	it('names a file with no name', () => {
		expect(fileName(['.pdf'], 'combined')).toBe('document.pdf');
	});
});

describe('canCopy', () => {
	it('opens a PDF, and one with an empty password, like a bank statement', async () => {
		expect(await canCopy(await typed(['one']))).toBe(true);
	});
	it('needs the password a PDF asks for', async () => {
		const locked = await typed(['one'], { password: 'secret' });
		expect(await canCopy(locked)).toBe(false);
		expect(await canCopy(locked, 'wrong')).toBe(false);
		expect(await canCopy(locked, 'secret')).toBe(true);
	});
	it("can't open what isn't a PDF", async () => {
		expect(await canCopy(new TextEncoder().encode('not a pdf'))).toBe(false);
	});
});

describe('assemble', () => {
	it('puts pages from several files in the order given, turned as asked', async () => {
		const sources: Source[] = [
			{ kind: 'pdf', bytes: await typed(['a1', 'a2', 'a3']) },
			{ kind: 'pdf', bytes: await typed(['b1'], { rotate: 90 }) }
		];
		const saved = await read(
			await assemble(sources, [page(1, 1, 0, 90), page(2, 0, 2), page(3, 0, 0, 270)])
		);
		expect(saved.pages.map((each) => each.turn)).toEqual([180, 0, 270]);
		expect(saved.pages).toHaveLength(3);
	});

	it('leaves out what the files said about themselves, and says nothing about itself', async () => {
		const saved = await read(
			await assemble([{ kind: 'pdf', bytes: await typed(['a']) }], [page(1, 0, 0)])
		);
		expect(saved.author).toBeUndefined();
		expect(saved.producer).toBeUndefined();
	});

	it('opens a locked file with its password, and saves it without one', async () => {
		const bytes = await typed(['a'], { password: 'secret' });
		const saved = await assemble([{ kind: 'pdf', bytes, password: 'secret' }], [page(1, 0, 0)]);
		expect(await canCopy(saved)).toBe(true);
	});

	it('makes a photo a page of its own, the size of an A4 page', async () => {
		const sources: Source[] = [
			{ kind: 'image', bytes: JPEG, type: 'image/jpeg', width: 12, height: 8 }
		];
		const saved = await read(await assemble(sources, [page(1, 0, 0, 90)]));
		expect(saved.pages[0].size.width).toBe(842);
		expect(saved.pages[0].size.height).toBeCloseTo(842 * (8 / 12));
		expect(saved.pages[0].turn).toBe(90);
	});

	it('puts a picture in place of a page, the same size, still turned', async () => {
		const sources: Source[] = [{ kind: 'pdf', bytes: await typed(['a', 'b']) }];
		const pictures = new Map([[2, { jpeg: JPEG, width: 595, height: 842 }]]);
		const saved = await read(await assemble(sources, [page(1, 0, 0), page(2, 0, 1, 90)], pictures));
		expect(saved.pages[1].size).toEqual({ width: 595, height: 842 });
		expect(saved.pages[1].turn).toBe(90);
	});

	it("doesn't open a file whose every page is a picture", async () => {
		// A file pdf-lib can't open still goes in, as pictures pdf.js drew.
		const sources: Source[] = [{ kind: 'pdf', bytes: new TextEncoder().encode('broken') }];
		const pictures = new Map([[1, { jpeg: JPEG, width: 595, height: 842 }]]);
		const saved = await read(await assemble(sources, [page(1, 0, 0)], pictures));
		expect(saved.pages).toHaveLength(1);
	});

	it('copies what pages share once, not once for each page', async () => {
		// Ten pages showing the same 50 KB logo: the logo is copied once.
		const document = await PDFDocument.create();
		const logo = await document.embedJpg(new Uint8Array([...JPEG, ...new Uint8Array(50_000)]));
		for (let index = 0; index < 10; index++) {
			document.addPage([595, 842]).drawImage(logo, { x: 0, y: 0, width: 12, height: 8 });
		}
		const bytes = await document.save();
		const one = await assemble([{ kind: 'pdf', bytes }], [page(1, 0, 0)]);
		const all = await assemble(
			[{ kind: 'pdf', bytes }],
			Array.from({ length: 10 }, (_, index) => page(index, 0, index))
		);
		expect(one.length).toBeGreaterThan(50_000);
		expect(all.length).toBeLessThan(one.length * 1.2);
	});
});

describe('remembered', () => {
	it('works each key out once', async () => {
		let calls = 0;
		const double = remembered(
			(n: number) => String(n),
			async (n: number) => {
				calls++;
				return n * 2;
			}
		);
		expect(await Promise.all([double(2), double(2), double(3)])).toEqual([4, 4, 6]);
		expect(calls).toBe(2);
	});
	it('tries again after a failure', async () => {
		let calls = 0;
		const flaky = remembered(
			() => 'key',
			async () => {
				calls++;
				if (calls === 1) throw new Error('first');
				return 'second';
			}
		);
		await expect(flaky()).rejects.toThrow('first');
		expect(await flaky()).toBe('second');
	});
});

describe('makeFiles', () => {
	// A scan: a page with only a big image on it, which pdf-lib copies as it is.
	async function scans(count: number) {
		const document = await PDFDocument.create();
		const image = await document.embedJpg(new Uint8Array([...JPEG, ...new Uint8Array(200_000)]));
		for (let index = 0; index < count; index++) {
			// Each page its own large image, as a scan is.
			const own =
				index === 0
					? image
					: await document.embedJpg(new Uint8Array([...JPEG, ...new Uint8Array(200_000 + index)]));
			document.addPage([595, 842]).drawImage(own, { x: 0, y: 0, width: 595, height: 842 });
		}
		return document.save();
	}
	const small = { jpeg: JPEG, width: 595, height: 842 };
	const making = (over: Partial<Parameters<typeof makeFiles>[0]>) => ({
		sources: [] as Source[],
		pages: [] as PageItem[],
		each: false,
		copies: () => true,
		picture: async () => true,
		pictureAt: async () => small,
		...over
	});

	it('leaves the pages as they are with no size to fit', async () => {
		const sources: Source[] = [{ kind: 'pdf', bytes: await scans(2) }];
		const drawn: number[] = [];
		const made = await makeFiles(
			making({
				sources,
				pages: [page(1, 0, 0), page(2, 0, 1)],
				pictureAt: async (_, step) => (drawn.push(step), small)
			})
		);
		expect(made!.files).toHaveLength(1);
		expect(made!.before).toBeUndefined();
		expect(made!.pictures).toEqual([]);
		expect(drawn).toEqual([]);
	});

	it('draws scans again as pictures to fit, and says which pages', async () => {
		const sources: Source[] = [{ kind: 'pdf', bytes: await scans(3) }];
		const made = await makeFiles(
			making({
				sources,
				pages: [page(1, 0, 0), page(2, 0, 1), page(3, 0, 2)],
				// Three 200 KB scans; the middle one is called typed, so it stays as it is.
				target: 300_000,
				picture: async (each) => each.index !== 1
			})
		);
		expect(made!.pictures).toEqual([1, 3]);
		expect(made!.before).toBeGreaterThan(made!.size);
		expect(made!.tooBig).toBeUndefined();
	});

	it('says when nothing could be made smaller', async () => {
		const sources: Source[] = [{ kind: 'pdf', bytes: await scans(1) }];
		const made = await makeFiles(
			making({ sources, pages: [page(1, 0, 0)], target: 1_000, picture: async () => false })
		);
		expect(made!.typedOnly).toBe(true);
		expect(made!.pictures).toEqual([]);
	});

	it('says how small it would go when even the last step is too big', async () => {
		const sources: Source[] = [{ kind: 'pdf', bytes: await scans(1) }];
		const made = await makeFiles(making({ sources, pages: [page(1, 0, 0)], target: 10 }));
		expect(made!.tooBig).toBe(made!.size);
	});

	it('makes a file for each page, numbered by its place', async () => {
		const sources: Source[] = [{ kind: 'pdf', bytes: await typed(['a', 'b', 'c']) }];
		const made = await makeFiles(
			making({ sources, pages: [page(1, 0, 2), page(2, 0, 0)], each: true })
		);
		expect(made!.files.map((file) => file.pages)).toEqual([[1], [2]]);
	});

	it("puts a file pdf-lib can't open in as pictures, whatever the size", async () => {
		const sources: Source[] = [{ kind: 'pdf', bytes: new TextEncoder().encode('broken') }];
		const drawn: number[] = [];
		const made = await makeFiles(
			making({
				sources,
				pages: [page(1, 0, 0)],
				copies: () => false,
				pictureAt: async (_, step) => (drawn.push(step), small)
			})
		);
		expect(made!.files).toHaveLength(1);
		expect(drawn).toEqual([0]);
	});

	it('stops when a newer round has started', async () => {
		const sources: Source[] = [{ kind: 'pdf', bytes: await typed(['a']) }];
		expect(
			await makeFiles(making({ sources, pages: [page(1, 0, 0)], stale: () => true }))
		).toBeUndefined();
	});
});

describe('photos inside typed pages', () => {
	// A typed page with a big photo and a small PNG logo on it: a letter, a CV.
	const PNG = Uint8Array.from(
		atob(
			'iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAP0lEQVQIHQE0AMv/AXim4g4HCPn5+xYTCwIwHgr09PkGBQPu7/AC4vABDQ8K7vP6HhQFBP76/Pn5+wL//9vi9l7GGvtZEAmDAAAAAElFTkSuQmCC'
		),
		(character) => character.charCodeAt(0)
	);
	async function letter() {
		const document = await PDFDocument.create();
		const font = await document.embedFont(StandardFonts.Helvetica);
		const page = document.addPage([595, 842]);
		page.drawText('Curriculum vitae', { x: 50, y: 780, size: 24, font });
		const photo = await document.embedJpg(new Uint8Array([...JPEG, ...new Uint8Array(200_000)]));
		page.drawImage(photo, { x: 50, y: 500, width: 120, height: 80 });
		page.drawImage(await document.embedPng(PNG), { x: 400, y: 780, width: 20, height: 20 });
		return document.save();
	}
	const tinier = { jpeg: JPEG, width: 12, height: 8 };

	it('makes the photo smaller and leaves the text and the logo as they are', async () => {
		const shrunk = new Set<number>();
		const asked: number[] = [];
		const bytes = await assemble(
			[{ kind: 'pdf', bytes: await letter() }],
			[page(1, 0, 0)],
			new Map(),
			{
				photos: {
					pages: new Set([1]),
					step: 3,
					shrink: async (jpeg, step) => {
						asked.push(jpeg.length, step);
						return tinier;
					},
					shrunk
				}
			}
		);
		expect(bytes.length).toBeLessThan(50_000);
		expect(shrunk).toEqual(new Set([1]));
		// Only the JPEG was asked about, at the step given: the PNG logo isn't a JPEG.
		expect(asked).toEqual([JPEG.length + 200_000, 3]);
		const saved = await PDFDocument.load(bytes);
		const fonts = saved.getPage(0).node.Resources()?.lookup(PDFName.of('Font'));
		expect(fonts).toBeDefined();
	});

	it("keeps a photo whose smaller copy wouldn't be smaller", async () => {
		const shrunk = new Set<number>();
		const big = {
			jpeg: new Uint8Array([...JPEG, ...new Uint8Array(300_000)]),
			width: 12,
			height: 8
		};
		const bytes = await assemble(
			[{ kind: 'pdf', bytes: await letter() }],
			[page(1, 0, 0)],
			new Map(),
			{
				photos: { pages: new Set([1]), step: 0, shrink: async () => big, shrunk }
			}
		);
		expect(shrunk.size).toBe(0);
		expect(bytes.length).toBeGreaterThan(200_000);
	});

	it('makes them smaller only when the scans alone are not enough', async () => {
		const made = await makeFiles({
			sources: [{ kind: 'pdf', bytes: await letter() }],
			pages: [page(1, 0, 0)],
			each: false,
			target: 100_000,
			copies: () => true,
			picture: async () => false,
			pictureAt: async () => ({ jpeg: JPEG, width: 595, height: 842 }),
			shrinkPhoto: async () => tinier
		});
		expect(made!.photos).toEqual([1]);
		expect(made!.pictures).toEqual([]);
		expect(made!.typedOnly).toBe(false);
		expect(made!.tooBig).toBeUndefined();
	});
});

describe('details and passwords', () => {
	it("keeps the first PDF's details when asked", async () => {
		const bytes = await assemble(
			[
				{ kind: 'image', bytes: JPEG, type: 'image/jpeg', width: 12, height: 8 },
				{ kind: 'pdf', bytes: await typed(['a']) }
			],
			[page(1, 0, 0), page(2, 1, 0)],
			new Map(),
			{ details: true }
		);
		expect((await read(bytes)).author).toBe('Someone');
	});

	it("keeps a photo's camera and location only when asked", async () => {
		const exif = new TextEncoder().encode('MM\0*camera and place');
		const source: Source = {
			kind: 'image',
			bytes: JPEG,
			type: 'image/jpeg',
			width: 12,
			height: 8,
			exif
		};
		const has = (bytes: Uint8Array) =>
			new TextDecoder('latin1').decode(bytes).includes('camera and place');
		expect(has(await assemble([source], [page(1, 0, 0)]))).toBe(false);
		expect(has(await assemble([source], [page(1, 0, 0)], new Map(), { details: true }))).toBe(true);
	});

	it('gives the new file a password when asked, and none otherwise', async () => {
		const sources: Source[] = [
			{ kind: 'pdf', bytes: await typed(['a'], { password: 'old' }), password: 'old' }
		];
		const open = await assemble(sources, [page(1, 0, 0)]);
		expect(await canCopy(open)).toBe(true);
		const locked = await assemble(sources, [page(1, 0, 0)], new Map(), { password: 'new' });
		expect(await canCopy(locked)).toBe(false);
		expect(await canCopy(locked, 'old')).toBe(false);
		expect(await canCopy(locked, 'new')).toBe(true);
	});
});

describe('fingerprint', () => {
	it('is the same for the same bytes, and differs for others', () => {
		expect(fingerprint(new Uint8Array([1, 2, 3]))).toBe(fingerprint(new Uint8Array([1, 2, 3])));
		expect(fingerprint(new Uint8Array([1, 2, 3]))).not.toBe(fingerprint(new Uint8Array([1, 2, 4])));
		expect(fingerprint(new Uint8Array([1, 2]))).not.toBe(fingerprint(new Uint8Array([1, 2, 0])));
	});
});
