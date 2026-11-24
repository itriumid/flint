import { describe, expect, it } from 'vitest';
import { crc32, readExif, uprightExif, writeExif } from './metadata';

/** A small Exif block (little-endian TIFF): IFD0 with Orientation 6 (turned) and one other tag. */
function tiff(orientation = 6): Uint8Array {
	const bytes = new Uint8Array(8 + 2 + 2 * 12 + 4);
	const view = new DataView(bytes.buffer);
	bytes.set([0x49, 0x49, 0x2a, 0x00]); // "II", 42
	view.setUint32(4, 8, true);
	view.setUint16(8, 2, true);
	// Make (0x010f), ASCII, 4 bytes inline: "Abc"
	view.setUint16(10, 0x010f, true);
	view.setUint16(12, 2, true);
	view.setUint32(14, 4, true);
	bytes.set([0x41, 0x62, 0x63, 0], 18);
	// Orientation (0x0112), SHORT, 1
	view.setUint16(22, 0x0112, true);
	view.setUint16(24, 3, true);
	view.setUint32(26, 1, true);
	view.setUint16(30, orientation, true);
	return bytes;
}

const orientationOf = (block: Uint8Array) =>
	new DataView(block.buffer, block.byteOffset).getUint16(30, true);

/** A JPEG as a canvas writes one, reduced to its markers: start, JFIF, a table, image data, end. */
const canvasJpeg = () =>
	Uint8Array.from([
		0xff, 0xd8, 0xff, 0xe0, 0x00, 0x06, 0x4a, 0x46, 0x49, 0x46, 0xff, 0xdb, 0x00, 0x03, 0x00, 0xff,
		0xda, 0x00, 0x02, 0x11, 0x22, 0xff, 0xd9
	]);

/** A PNG reduced to its chunks: signature, IHDR, IDAT, IEND (checksums not checked here). */
function png(): Uint8Array {
	const chunk = (type: string, data: number[]) => {
		const bytes = new Uint8Array(12 + data.length);
		new DataView(bytes.buffer).setUint32(0, data.length);
		bytes.set(
			Array.from(type, (letter) => letter.charCodeAt(0)),
			4
		);
		bytes.set(data, 8);
		return [...bytes];
	};
	return Uint8Array.from([
		0x89,
		0x50,
		0x4e,
		0x47,
		0x0d,
		0x0a,
		0x1a,
		0x0a,
		...chunk('IHDR', Array(13).fill(0)),
		...chunk('IDAT', [1, 2, 3]),
		...chunk('IEND', [])
	]);
}

/** A simple WebP: RIFF, WEBP, one lossy VP8 chunk of three bytes (padded). */
function webp(): Uint8Array {
	const data = [9, 8, 7];
	const bytes = new Uint8Array(12 + 8 + 4);
	const view = new DataView(bytes.buffer);
	bytes.set([0x52, 0x49, 0x46, 0x46]);
	view.setUint32(4, bytes.length - 8, true);
	bytes.set([0x57, 0x45, 0x42, 0x50, 0x56, 0x50, 0x38, 0x20], 8);
	view.setUint32(16, data.length, true);
	bytes.set(data, 20);
	return bytes;
}

describe('uprightExif', () => {
	it('sets the orientation to "as stored", and leaves the rest', () => {
		const upright = uprightExif(tiff(6));
		expect(orientationOf(upright)).toBe(1);
		expect(upright[18]).toBe(0x41);
		expect(orientationOf(tiff(6))).toBe(6);
	});

	it('leaves a block it can’t read as it is', () => {
		expect(uprightExif(Uint8Array.from([1, 2, 3]))).toEqual(Uint8Array.from([1, 2, 3]));
	});
});

describe('Exif in a JPEG', () => {
	it('is written after the JFIF segment and read back the same', () => {
		const written = writeExif(canvasJpeg(), 'image/jpeg', tiff(), { width: 1, height: 1 });
		expect([...written.subarray(10, 12)]).toEqual([0xff, 0xe1]);
		expect(readExif(written, 'image/jpeg')).toEqual(tiff());
		expect(written.at(-1)).toBe(0xd9);
	});

	it('is nothing in a file without it', () => {
		expect(readExif(canvasJpeg(), 'image/jpeg')).toBeUndefined();
	});
});

describe('Exif in a PNG', () => {
	it('is an eXIf chunk before the image data, with a correct checksum', () => {
		const written = writeExif(png(), 'image/png', tiff(), { width: 1, height: 1 });
		expect(readExif(written, 'image/png')).toEqual(tiff());
		const at = 8 + 25; // after the signature and IHDR
		expect(String.fromCharCode(...written.subarray(at + 4, at + 8))).toBe('eXIf');
		const crc = new DataView(written.buffer).getUint32(at + 8 + tiff().length);
		expect(crc).toBe(crc32(written.subarray(at + 4, at + 8 + tiff().length)));
	});

	it('checksums the way PNG does: every PNG ends with IEND and AE426082', () => {
		expect(crc32(Uint8Array.from('IEND', (letter) => letter.charCodeAt(0)))).toBe(0xae426082);
	});
});

describe('Exif in a WebP', () => {
	it('adds the extended header the simple format needs, sized to the image, and the chunk', () => {
		const written = writeExif(webp(), 'image/webp', tiff(), { width: 1600, height: 1008 });
		expect(String.fromCharCode(...written.subarray(12, 16))).toBe('VP8X');
		const view = new DataView(written.buffer);
		expect(written[20] & 0x08).toBe(0x08);
		expect((view.getUint16(24, true) | (written[26] << 16)) + 1).toBe(1600);
		expect((view.getUint16(27, true) | (written[29] << 16)) + 1).toBe(1008);
		expect(view.getUint32(4, true)).toBe(written.length - 8);
		expect(readExif(written, 'image/webp')).toEqual(tiff());
	});

	it('reads a block written with the JPEG-style header in front', () => {
		const prefixed = Uint8Array.from([0x45, 0x78, 0x69, 0x66, 0, 0, ...tiff()]);
		const written = writeExif(webp(), 'image/webp', prefixed, { width: 2, height: 2 });
		expect(readExif(written, 'image/webp')).toEqual(tiff());
	});
});

describe('other formats', () => {
	it('have nothing read and nothing written', () => {
		expect(readExif(Uint8Array.from([1, 2]), 'image/gif')).toBeUndefined();
		expect(
			writeExif(Uint8Array.from([1, 2]), 'image/gif', tiff(), { width: 1, height: 1 })
		).toEqual(Uint8Array.from([1, 2]));
	});
});
