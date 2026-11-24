// QR codes drawn in the browser, for WhatsApp click-to-chat's link and the QR code tool: nothing is
// sent anywhere to make one, and no image is loaded. The encoding (error correction, masking,
// version) is qrcode-generator's; what this file decides is how a code is drawn and saved.

import qrcode from 'qrcode-generator';

// Text goes into a code as UTF-8, which phones read, so accents, other alphabets and emoji survive.
// The library's own default keeps only each character's lowest byte, which mangles them.
qrcode.stringToBytes = (text: string) => Array.from(new TextEncoder().encode(text));

/**
 * The most a code holds, in bytes of UTF-8, at error correction M: the largest code, 177 modules a
 * side. A letter of the English alphabet is one byte, an accented one two, most emoji four.
 */
export const QR_CAPACITY = 2331;

/** How many bytes `text` takes in a code. */
export const bytesIn = (text: string) => new TextEncoder().encode(text).length;

/**
 * The white margin a scanner needs around a code, in modules: the standard asks for four. It's
 * part of the drawing, so a code printed on anything keeps it.
 */
export const QUIET_ZONE = 4;

/**
 * The code's modules, row by row: true for dark. Error correction is M (about 15% of it can be
 * lost), enough for a printed card that gets scuffed, and still a small code for a short link.
 */
export function qrModules(text: string): boolean[][] {
	const code = qrcode(0, 'M');
	code.addData(text, 'Byte');
	code.make();
	const size = code.getModuleCount();
	return Array.from({ length: size }, (_, row) =>
		Array.from({ length: size }, (_, column) => code.isDark(row, column))
	);
}

/** How wide the drawing is, in modules, margin included: the SVG's viewBox and the PNG's grid. */
export const drawnSize = (modules: boolean[][]) => modules.length + QUIET_ZONE * 2;

/**
 * The dark modules as one SVG path, a run of dark modules in a row drawn as one rectangle: a far
 * shorter path than a square for each, and no gaps between them when it's scaled.
 */
export function qrPath(modules: boolean[][]): string {
	let path = '';
	modules.forEach((row, y) => {
		let x = 0;
		while (x < row.length) {
			if (!row[x]) {
				x++;
				continue;
			}
			const start = x;
			while (x < row.length && row[x]) x++;
			path += `M${start + QUIET_ZONE} ${y + QUIET_ZONE}h${x - start}v1h-${x - start}z`;
		}
	});
	return path;
}

/**
 * The code as an SVG file: a white square, its margin included, and the dark modules in graphite,
 * 10 units a module so it opens at a useful size. Nothing else: no words, no frame.
 */
export function qrSvg(modules: boolean[][]): string {
	const size = drawnSize(modules);
	return [
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size * 10}" height="${size * 10}" shape-rendering="crispEdges">`,
		`<rect width="${size}" height="${size}" fill="#ffffff"/>`,
		`<path d="${qrPath(modules)}" fill="#2b2b2b"/>`,
		'</svg>',
		''
	].join('\n');
}

/**
 * How many pixels a module takes in a saved PNG: enough that the image is at least 1,024 pixels
 * wide, sharp on a printed page, and whole pixels, so every module's edge is crisp.
 */
export const pngScale = (modules: boolean[][]) => Math.max(8, Math.ceil(1024 / drawnSize(modules)));
