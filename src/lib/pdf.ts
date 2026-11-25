// What the PDF tool decides: the order and turn of the pages, which pages are pictures (scans and
// photos, which can be made smaller by saving them again) and which are typed text (left as they
// are), how small the pictures have to go to fit a size, and putting the new file together.
// Reading and drawing pages is pdf.js's, in the page; here a picture arrives already drawn, so all
// of this can be tested. Nothing is uploaded: every file is opened and made on the device.

import {
	degrees,
	PDFArray,
	PDFDict,
	PDFDocument,
	PDFName,
	PDFNumber,
	PDFRawStream,
	PDFRef,
	type PDFPage
} from '@cantoo/pdf-lib';
import { writeExif } from './metadata';

export type Turn = 0 | 90 | 180 | 270;

/** One page of the new file: which file it comes from, which page of it, and how far it's turned. */
export interface PageItem {
	id: number;
	file: number;
	/** The page's place in its own file, from 0. A photo is one page: 0. */
	index: number;
	/** Turned clockwise, on top of however the page was already turned. */
	turn: Turn;
}

/** A file added: a PDF (with its password, when it needs one), or a photo made upright. */
export type Source =
	| { kind: 'pdf'; bytes: Uint8Array; password?: string }
	| {
			kind: 'image';
			/** The photo made upright, with no details in it. */
			bytes: Uint8Array;
			type: 'image/jpeg' | 'image/png';
			width: number;
			height: number;
			/** Its camera and location details, marked upright, written back in when they're kept. */
			exif?: Uint8Array;
	  };

/** A page drawn as a picture, to stand in for the page itself: a JPEG, and the page's size in points. */
export interface Picture {
	jpeg: Uint8Array;
	/** The page's size as it's seen, in points (1/72 inch), whatever size the picture is drawn at. */
	width: number;
	height: number;
}

/** A quarter turn clockwise more. */
export const turnedOnce = (turn: Turn): Turn => ((turn + 90) % 360) as Turn;

/**
 * The list with the item at `from` taken out and put down before the item that was at `before`
 * (or at the end, for `before` equal to the list's length). The list itself isn't changed.
 */
export function move<T>(list: readonly T[], from: number, before: number): T[] {
	const result = [...list];
	if (from < 0 || from >= list.length || before < 0 || before > list.length) return result;
	const [item] = result.splice(from, 1);
	result.splice(before > from ? before - 1 : before, 0, item);
	return result;
}

/**
 * Whether a page of a PDF is a picture: a scan or a photo. That's an image with next to no typed
 * text, or an image covering most of the page, since scanning apps often lay the words they read
 * over a scan, invisibly, to make it searchable. Only these are saved again as pictures to make a
 * file smaller; a page of typed text is small already, and as a picture its text could no longer
 * be selected or searched.
 */
export function isPicture(page: { characters: number; images: number; coverage: number }): boolean {
	return page.images > 0 && (page.characters < 80 || page.coverage >= 0.75);
}

/** The drawing operations that matter to `coverage`, by their numbers in pdf.js's `OPS`. */
export interface Operations {
	save: number;
	restore: number;
	transform: number;
	paintFormXObjectBegin: number;
	paintFormXObjectEnd: number;
	/** Every operation that paints an image. */
	images: readonly number[];
}

type Matrix = [number, number, number, number, number, number];
const times = (m: Matrix, n: Matrix): Matrix => [
	n[0] * m[0] + n[1] * m[2],
	n[0] * m[1] + n[1] * m[3],
	n[2] * m[0] + n[3] * m[2],
	n[2] * m[1] + n[3] * m[3],
	n[4] * m[0] + n[5] * m[2] + m[4],
	n[4] * m[1] + n[5] * m[3] + m[5]
];

/**
 * How much of a page its images cover, from 0 to 1, read from the page's drawing operations (pdf.js's
 * operator list): each image fills a unit square, placed by the transforms in force when it's
 * painted. Images on top of each other count twice, so this is the most it could be, capped at 1.
 */
export function coverage(
	operations: { fnArray: readonly number[]; argsArray: readonly unknown[] },
	ops: Operations,
	pageArea: number
): { images: number; coverage: number } {
	let current: Matrix = [1, 0, 0, 1, 0, 0];
	const kept: Matrix[] = [];
	let images = 0;
	let area = 0;
	operations.fnArray.forEach((operation, at) => {
		const args = operations.argsArray[at] as unknown[] | null;
		if (operation === ops.save) kept.push(current);
		else if (operation === ops.restore) current = kept.pop() ?? current;
		else if (operation === ops.transform && args) current = times(current, args as Matrix);
		else if (operation === ops.paintFormXObjectBegin) {
			kept.push(current);
			const matrix = args?.[0] as Matrix | null | undefined;
			if (matrix) current = times(current, matrix);
		} else if (operation === ops.paintFormXObjectEnd) current = kept.pop() ?? current;
		else if (ops.images.includes(operation)) {
			images++;
			area += Math.abs(current[0] * current[3] - current[1] * current[2]);
		}
	});
	return { images, coverage: pageArea > 0 ? Math.min(1, area / pageArea) : 0 };
}

/**
 * How small the pictures are drawn, from the best to the least: the longer side in pixels, and
 * the JPEG quality. The first is about 240 pixels to the inch on an A4 page, the last about 70,
 * still readable on a screen. Each step makes a smaller file than the one before.
 */
export const LADDER: readonly { side: number; quality: number }[] = [
	{ side: 2800, quality: 0.85 },
	{ side: 2200, quality: 0.8 },
	{ side: 1800, quality: 0.75 },
	{ side: 1500, quality: 0.7 },
	{ side: 1250, quality: 0.65 },
	{ side: 1050, quality: 0.6 },
	{ side: 900, quality: 0.55 },
	{ side: 800, quality: 0.5 }
];

/**
 * The best step of the ladder whose file fits under the target, found by halving, since each step
 * is smaller than the one before: a few tries, not one for every step. When even the last step is
 * too big, the last step, with `fits` false.
 */
export async function bestFit(
	sizeAt: (step: number) => Promise<number>,
	target: number,
	steps = LADDER.length
): Promise<{ step: number; size: number; fits: boolean }> {
	const tried = new Map<number, number>();
	const size = async (step: number) => {
		if (!tried.has(step)) tried.set(step, await sizeAt(step));
		return tried.get(step)!;
	};
	let low = 0;
	let high = steps - 1;
	if ((await size(high)) > target) return { step: high, size: await size(high), fits: false };
	// The last step fits; find the first that does.
	while (low < high) {
		const middle = Math.floor((low + high) / 2);
		if ((await size(middle)) <= target) high = middle;
		else low = middle + 1;
	}
	return { step: low, size: await size(low), fits: true };
}

/** Whether pdf-lib can open a PDF to copy its pages; when it can't, its pages go in as pictures. */
export async function canCopy(bytes: Uint8Array, password?: string): Promise<boolean> {
	try {
		await PDFDocument.load(bytes, { password: password ?? '', updateMetadata: false });
		return true;
	} catch {
		return false;
	}
}

/**
 * A photo's page size in points: its longer side as long as an A4 page's (842 points), so a photo
 * comes out the size of a page, not the size of a wall at 72 pixels to the inch.
 */
export function photoPage(width: number, height: number): { width: number; height: number } {
	const scale = 842 / Math.max(width, height, 1);
	return { width: width * scale, height: height * scale };
}

/**
 * A photo inside a page, drawn again smaller at a step of the ladder: its new JPEG and size in
 * pixels, or undefined to leave it as it is. The page does the drawing; pdf.js isn't needed, since
 * the photo is a JPEG the browser can open itself.
 */
export type ShrinkPhoto = (
	jpeg: Uint8Array,
	step: number
) => Promise<{ jpeg: Uint8Array; width: number; height: number } | undefined>;

/** What else the new file is made with, besides its pages. */
export interface Options {
	/**
	 * Photos inside these pages (by id) are drawn again smaller at `step`, their text and drawing
	 * left exactly as they are. Only JPEG photos in plain colours are: CMYK, masks and other kinds
	 * of image stay as they were. `shrunk` collects the pages whose photos were made smaller.
	 */
	photos?: { pages: ReadonlySet<number>; step: number; shrink: ShrinkPhoto; shrunk?: Set<number> };
	/**
	 * Keep the details: the first PDF's title, author, subject, keywords, the app that made it and
	 * its dates, and each photo's camera and location. Left out otherwise.
	 */
	details?: boolean;
	/** A password the new file asks for when it's opened. None otherwise. */
	password?: string;
}

/**
 * The new file: the pages in their order, each copied from its file and turned, or, where a
 * picture stands in for it, that picture on a page of the same size. Unless `details` says to keep
 * them, nothing about the files it came from is carried over but their pages: no author or title.
 * It has a password only if `password` gives one, whatever the files it came from had.
 */
export async function assemble(
	sources: readonly Source[],
	pages: readonly PageItem[],
	pictures: ReadonlyMap<number, Picture> = new Map(),
	options: Options = {}
): Promise<Uint8Array> {
	const out = await PDFDocument.create({ updateMetadata: false });

	// Each file's pages are copied in one go, so what they share (a font, a logo) is copied once.
	const copied = new Map<number, Map<number, PDFPage>>();
	const opened = new Map<number, PDFDocument>();
	for (const [file, source] of sources.entries()) {
		if (source.kind !== 'pdf') continue;
		const wanted = [
			...new Set(
				pages
					.filter((page) => page.file === file && !pictures.has(page.id))
					.map((page) => page.index)
			)
		];
		const named = options.details && pages.some((page) => page.file === file);
		if (!wanted.length && !named) continue;
		let document: PDFDocument;
		try {
			document = await PDFDocument.load(source.bytes, {
				password: source.password ?? '',
				updateMetadata: false
			});
		} catch (problem) {
			// Only its details were wanted, and a file pdf-lib can't open has none to give.
			if (!wanted.length) continue;
			throw problem;
		}
		opened.set(file, document);
		if (!wanted.length) continue;
		const result = await out.copyPages(document, wanted);
		copied.set(file, new Map(wanted.map((index, at) => [index, result[at]])));
	}

	for (const page of pages) {
		const picture = pictures.get(page.id);
		const source = sources[page.file];
		// A photo keeps its camera and location only when the details are kept.
		const exif = options.details && source.kind === 'image' ? source.exif : undefined;
		if (picture) {
			const jpeg = exif ? writeExif(picture.jpeg, 'image/jpeg', exif, picture) : picture.jpeg;
			const image = await out.embedJpg(jpeg);
			const added = out.addPage([picture.width, picture.height]);
			added.drawImage(image, { x: 0, y: 0, width: picture.width, height: picture.height });
			added.setRotation(degrees(page.turn));
		} else if (source.kind === 'image') {
			const image =
				source.type === 'image/png'
					? await out.embedPng(source.bytes)
					: await out.embedJpg(
							exif ? writeExif(source.bytes, 'image/jpeg', exif, source) : source.bytes
						);
			const size = photoPage(source.width, source.height);
			const added = out.addPage([size.width, size.height]);
			added.drawImage(image, { x: 0, y: 0, ...size });
			added.setRotation(degrees(page.turn));
		} else {
			const from = copied.get(page.file)?.get(page.index);
			if (!from) throw new Error(`Page ${page.index} of file ${page.file} wasn't copied`);
			// A page copied twice would be the same page object; the tool never asks for that.
			const added = out.addPage(from);
			added.setRotation(degrees((added.getRotation().angle + page.turn) % 360));
			if (options.photos?.pages.has(page.id)) {
				if (await shrinkPhotos(out, added, options.photos.step, options.photos.shrink, done)) {
					options.photos.shrunk?.add(page.id);
				}
			}
		}
	}

	if (options.details) {
		const first = pages.find((page) => opened.has(page.file));
		if (first) copyDetails(opened.get(first.file)!, out);
	}
	if (options.password) {
		out.encrypt({ userPassword: options.password, ownerPassword: options.password });
	}
	return out.save();
}

/** Photos already drawn again in this file, by their place in it, so a shared one is done once. */
const done = new WeakMap<PDFDocument, Set<string>>();

/**
 * Draws the JPEG photos on a page again smaller, in the file, leaving everything else on the page
 * as it is. Looks inside forms on the page too, where an app often puts a picture. Whether any was
 * made smaller.
 */
async function shrinkPhotos(
	out: PDFDocument,
	page: PDFPage,
	step: number,
	shrink: ShrinkPhoto,
	seen: WeakMap<PDFDocument, Set<string>>
): Promise<boolean> {
	if (!seen.has(out)) seen.set(out, new Set());
	const handled = seen.get(out)!;
	const context = out.context;
	let smaller = false;
	const visit = async (resources: PDFDict | undefined, depth: number) => {
		const objects = resources?.lookupMaybe(PDFName.of('XObject'), PDFDict);
		if (!objects || depth > 8) return;
		for (const [, value] of objects.entries()) {
			if (!(value instanceof PDFRef)) continue;
			const stream = context.lookup(value);
			if (!(stream instanceof PDFRawStream)) continue;
			const subtype = stream.dict.get(PDFName.of('Subtype'));
			if (subtype === PDFName.of('Form')) {
				await visit(stream.dict.lookupMaybe(PDFName.of('Resources'), PDFDict), depth + 1);
				continue;
			}
			const key = value.toString();
			if (subtype !== PDFName.of('Image') || handled.has(key) || !isPlainJpeg(stream, context)) {
				continue;
			}
			handled.add(key);
			const result = await shrink(stream.contents, step);
			if (!result || result.jpeg.length >= stream.contents.length) continue;
			const dict = stream.dict.clone(context);
			dict.set(PDFName.of('Width'), PDFNumber.of(result.width));
			dict.set(PDFName.of('Height'), PDFNumber.of(result.height));
			// The browser saves every JPEG in colour, grey ones included.
			dict.set(PDFName.of('ColorSpace'), PDFName.of('DeviceRGB'));
			context.assign(value, PDFRawStream.of(dict, result.jpeg));
			smaller = true;
		}
	};
	await visit(page.node.Resources(), 0);
	return smaller;
}

/**
 * Whether an image is a JPEG the browser can open and save again as it is: eight bits a colour,
 * in RGB or grey (or the ICC profile of either), no decode array, not a mask. CMYK JPEGs are left
 * alone: browsers draw some of them inverted.
 */
function isPlainJpeg(stream: PDFRawStream, context: PDFDocument['context']): boolean {
	const dict = stream.dict;
	const filter = dict.lookup(PDFName.of('Filter'));
	const only =
		filter instanceof PDFArray && filter.size() === 1 ? filter.lookup(0) : (filter ?? undefined);
	if (only !== PDFName.of('DCTDecode')) return false;
	if (dict.lookup(PDFName.of('BitsPerComponent'))?.toString() !== '8') return false;
	if (
		dict.has(PDFName.of('Decode')) ||
		dict.lookup(PDFName.of('ImageMask'))?.toString() === 'true'
	) {
		return false;
	}
	const space = dict.lookup(PDFName.of('ColorSpace'));
	if (space === PDFName.of('DeviceRGB') || space === PDFName.of('DeviceGray')) return true;
	if (space instanceof PDFArray && space.lookup(0) === PDFName.of('ICCBased')) {
		const profile = context.lookup(space.get(1));
		const components =
			profile instanceof PDFRawStream ? profile.dict.lookup(PDFName.of('N')) : undefined;
		return components?.toString() === '1' || components?.toString() === '3';
	}
	return false;
}

/** The details a PDF says about itself, copied to another: the document information and its XMP. */
function copyDetails(from: PDFDocument, to: PDFDocument) {
	const title = from.getTitle();
	const author = from.getAuthor();
	const subject = from.getSubject();
	const keywords = from.getKeywords();
	const creator = from.getCreator();
	const producer = from.getProducer();
	const created = from.getCreationDate();
	const modified = from.getModificationDate();
	if (title) to.setTitle(title);
	if (author) to.setAuthor(author);
	if (subject) to.setSubject(subject);
	if (keywords) to.setKeywords([keywords]);
	if (creator) to.setCreator(creator);
	if (producer) to.setProducer(producer);
	if (created) to.setCreationDate(created);
	if (modified) to.setModificationDate(modified);
	// The same details as XMP, where an app put them: copied as they are, unless the file was
	// encrypted, when they'd still be in its encryption.
	const xmp = from.catalog.lookup(PDFName.of('Metadata'));
	if (xmp instanceof PDFRawStream && !from.isEncrypted) {
		to.catalog.set(
			PDFName.of('Metadata'),
			to.context.register(PDFRawStream.of(xmp.dict.clone(to.context), xmp.contents))
		);
	}
}

/**
 * The saved file's name. One file in: its own name, so "surat.pdf" stays "surat.pdf". Several: the
 * first one's, with "and more" left to the words the page uses (`combined`). Each page on its own:
 * the name and the page's number, "surat-3.pdf".
 */
export function fileName(names: readonly string[], combined: string, page?: number): string {
	const stems = [...new Set(names.map((name) => name.replace(/\.[^./\\]+$/, '') || 'document'))];
	const stem = stems.length === 1 ? stems[0] : `${stems[0]}-${combined}`;
	return page === undefined ? `${stem}.pdf` : `${stem}-${page}.pdf`;
}

/** A function that works something out once for each key, and gives the same answer after. */
export function remembered<A extends unknown[], V>(
	keyOf: (...args: A) => string,
	work: (...args: A) => Promise<V>
): (...args: A) => Promise<V> {
	const answers = new Map<string, Promise<V>>();
	return (...args) => {
		const key = keyOf(...args);
		if (!answers.has(key)) {
			const answer = work(...args);
			answers.set(key, answer);
			// A failure isn't remembered: the next ask tries again.
			answer.catch(() => answers.delete(key));
		}
		return answers.get(key)!;
	};
}

/** What the page needs to make the files: the pages, and how to look at and draw them. */
export interface Making {
	sources: readonly Source[];
	/** The pages in their order. */
	pages: readonly PageItem[];
	/** One file of every page, or one file for each page. */
	each: boolean;
	/** The size each file has to fit, in bytes, if any. */
	target?: number;
	/** Whether pdf-lib can copy a file's pages; when not, they always go in as pictures. */
	copies: (file: number) => boolean;
	/** Whether a page is a scan or a photo, which can be saved again smaller. */
	picture: (page: PageItem) => Promise<boolean>;
	/** A page drawn as a picture, at a step of the ladder. */
	pictureAt: (page: PageItem, step: number) => Promise<Picture>;
	/** A photo inside a typed page drawn again smaller; without it, typed pages stay as they are. */
	shrinkPhoto?: ShrinkPhoto;
	/** Keep the files' details. */
	details?: boolean;
	/** A password for the saved files. */
	password?: string;
	/** Whether a newer round has started, so this one can stop. */
	stale?: () => boolean;
}

export interface Made {
	/** Each file, with the pages it holds, by their place in the whole list from 1. */
	files: { bytes: Uint8Array; pages: number[] }[];
	size: number;
	/** The size with every page as it was, when the files were made smaller. */
	before?: number;
	/** The pages saved as pictures to make the files smaller, by their place from 1. */
	pictures: number[];
	/** The typed pages whose photos were made smaller, their text kept, by their place from 1. */
	photos: number[];
	/** The size of the largest file that couldn't be made to fit, if any. */
	tooBig?: number;
	/** Whether a file was too big with nothing in it that could be made smaller. */
	typedOnly: boolean;
}

/**
 * The files Save hands over. Each is first put together with its pages as they are. Only when it's
 * over the size to fit are its scans and photos drawn again as pictures, at the best step of the
 * ladder that fits, its typed pages left alone; and only when that isn't enough are the photos
 * inside typed pages made smaller too, their text kept. A file pdf-lib can't open has its pages
 * drawn by pdf.js, at the best step, whatever the size. Undefined when a newer round has started.
 */
export async function makeFiles(making: Making): Promise<Made | undefined> {
	const { sources, pages, target, stale = () => false } = making;
	const options: Options = { details: making.details, password: making.password };
	const place = new Map(pages.map((page, at) => [page.id, at + 1]));
	const groups = making.each ? pages.map((page) => [page]) : [pages];
	const made: Made = { files: [], size: 0, pictures: [], photos: [], typedOnly: false };
	let plain = 0;
	let shrunk = false;

	for (const group of groups) {
		const always = new Map<number, Picture>();
		for (const page of group) {
			if (!making.copies(page.file)) always.set(page.id, await making.pictureAt(page, 0));
		}
		if (stale()) return undefined;
		let bytes = await assemble(sources, group, always, options);
		plain += bytes.length;

		if (target && bytes.length > target) {
			const smaller: PageItem[] = [];
			for (const page of group) if (await making.picture(page)) smaller.push(page);
			if (stale()) return undefined;
			const typed = group.filter(
				(page) =>
					!smaller.includes(page) && sources[page.file].kind === 'pdf' && making.copies(page.file)
			);
			const pictured = async (step: number) => {
				const pictures = new Map(always);
				for (const page of smaller) pictures.set(page.id, await making.pictureAt(page, step));
				return pictures;
			};

			// First the scans and photos alone.
			let fit: { step: number; fits: boolean } | undefined;
			let photos: Set<number> | undefined;
			if (smaller.length) {
				const tried = new Map<number, Uint8Array>();
				fit = await bestFit(async (step) => {
					const result = await assemble(sources, group, await pictured(step), options);
					tried.set(step, result);
					return result.length;
				}, target);
				bytes = tried.get(fit.step)!;
			}
			// Then, if that isn't enough, the photos inside typed pages too.
			if ((!fit || !fit.fits) && typed.length && making.shrinkPhoto) {
				const tried = new Map<number, { bytes: Uint8Array; shrunk: Set<number> }>();
				const photoFit = await bestFit(async (step) => {
					const shrunkHere = new Set<number>();
					const result = await assemble(sources, group, await pictured(step), {
						...options,
						photos: {
							pages: new Set(typed.map((page) => page.id)),
							step,
							shrink: making.shrinkPhoto!,
							shrunk: shrunkHere
						}
					});
					tried.set(step, { bytes: result, shrunk: shrunkHere });
					return result.length;
				}, target);
				const chosen = tried.get(photoFit.step)!;
				if (chosen.shrunk.size && chosen.bytes.length < bytes.length) {
					bytes = chosen.bytes;
					photos = chosen.shrunk;
					fit = photoFit;
				}
			}
			if (stale()) return undefined;
			if (!fit) made.typedOnly = true;
			else {
				shrunk = true;
				if (!fit.fits) made.tooBig = Math.max(made.tooBig ?? 0, bytes.length);
				made.pictures.push(...smaller.map((page) => place.get(page.id)!));
				made.photos.push(...[...(photos ?? [])].map((id) => place.get(id)!));
			}
		}
		made.files.push({ bytes, pages: group.map((page) => place.get(page.id)!) });
		made.size += bytes.length;
	}
	if (shrunk) made.before = plain;
	made.pictures.sort((a, b) => a - b);
	made.photos.sort((a, b) => a - b);
	return made;
}

/**
 * A short name for some bytes, to remember work done on them: their length and a 32-bit FNV-1a
 * hash. Two different photos sharing one is possible but rare enough for a cache on one device.
 */
export function fingerprint(bytes: Uint8Array): string {
	let hash = 0x811c9dc5;
	for (const byte of bytes) hash = Math.imul(hash ^ byte, 0x01000193);
	return `${bytes.length}:${(hash >>> 0).toString(16)}`;
}
