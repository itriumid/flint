// A photo's details (when it was taken, the camera, often where), for "Resize and convert images"
// when someone chooses to keep them. Drawing an image on a canvas leaves them all out, which is
// the default; keeping them means copying the block they live in (Exif, a TIFF structure) from the
// original file into the new one, in whichever of JPEG, PNG or WebP it's saved as.

/** The Exif block in a JPEG, PNG or WebP file, as its TIFF bytes; undefined when there's none. */
export function readExif(bytes: Uint8Array, type: string): Uint8Array | undefined {
	if (type === 'image/jpeg') return readJpeg(bytes);
	if (type === 'image/png') return readChunk(pngChunks(bytes), 'eXIf');
	if (type === 'image/webp') {
		const found = readChunk(webpChunks(bytes), 'EXIF');
		// Some writers put the JPEG-style "Exif\0\0" in front; the TIFF starts after it.
		return found && startsWithExifHeader(found) ? found.subarray(6) : found;
	}
	return undefined;
}

/**
 * The block with its orientation set to "as stored". The page draws a sideways phone photo
 * upright already, so keeping the original's orientation would turn it a second time.
 */
export function uprightExif(tiff: Uint8Array): Uint8Array {
	const copy = tiff.slice();
	const view = new DataView(copy.buffer, copy.byteOffset, copy.byteLength);
	if (copy.length < 8) return copy;
	const little = copy[0] === 0x49 && copy[1] === 0x49; // "II"
	if (!little && !(copy[0] === 0x4d && copy[1] === 0x4d)) return copy; // not "MM" either
	const ifd = view.getUint32(4, little);
	if (ifd + 2 > copy.length) return copy;
	const entries = view.getUint16(ifd, little);
	for (let index = 0; index < entries; index++) {
		const entry = ifd + 2 + index * 12;
		if (entry + 12 > copy.length) break;
		if (view.getUint16(entry, little) === 0x0112) view.setUint16(entry + 8, 1, little);
	}
	return copy;
}

/**
 * The new file with the block written into it, in its format's own place: an APP1 segment in a
 * JPEG, an eXIf chunk in a PNG, an EXIF chunk (with the extended header that announces it) in a
 * WebP. A block too big for a JPEG segment can't go in, and the file comes back without it.
 */
export function writeExif(
	bytes: Uint8Array,
	type: string,
	tiff: Uint8Array,
	size: { width: number; height: number }
): Uint8Array {
	if (type === 'image/jpeg') return writeJpeg(bytes, tiff);
	if (type === 'image/png') return writePng(bytes, tiff);
	if (type === 'image/webp') return writeWebp(bytes, tiff, size);
	return bytes;
}

// --- JPEG ---------------------------------------------------------------------------------------

const EXIF_HEADER = [0x45, 0x78, 0x69, 0x66, 0, 0]; // "Exif\0\0"
const startsWithExifHeader = (bytes: Uint8Array) =>
	EXIF_HEADER.every((byte, index) => bytes[index] === byte);

/** The segments before the image data: marker, and where its contents start and end. */
function jpegSegments(bytes: Uint8Array) {
	const segments: { marker: number; start: number; end: number }[] = [];
	if (bytes[0] !== 0xff || bytes[1] !== 0xd8) return segments;
	let at = 2;
	while (at + 4 <= bytes.length && bytes[at] === 0xff) {
		const marker = bytes[at + 1];
		if (marker === 0xda) break; // the image data starts
		const length = (bytes[at + 2] << 8) | bytes[at + 3];
		segments.push({ marker, start: at + 4, end: at + 2 + length });
		at += 2 + length;
	}
	return segments;
}

function readJpeg(bytes: Uint8Array): Uint8Array | undefined {
	for (const { marker, start, end } of jpegSegments(bytes)) {
		const contents = bytes.subarray(start, end);
		if (marker === 0xe1 && startsWithExifHeader(contents)) return contents.subarray(6);
	}
	return undefined;
}

function writeJpeg(bytes: Uint8Array, tiff: Uint8Array): Uint8Array {
	const length = 2 + EXIF_HEADER.length + tiff.length;
	if (length > 0xffff) return bytes;
	// After the JFIF segment a canvas writes, if there is one; otherwise straight after the start.
	const jfif = jpegSegments(bytes).find((segment) => segment.marker === 0xe0);
	const at = jfif ? jfif.end : 2;
	const segment = new Uint8Array(2 + length);
	segment.set([0xff, 0xe1, length >> 8, length & 0xff, ...EXIF_HEADER]);
	segment.set(tiff, 2 + 2 + EXIF_HEADER.length);
	return concat(bytes.subarray(0, at), segment, bytes.subarray(at));
}

// --- PNG ----------------------------------------------------------------------------------------

interface Chunk {
	type: string;
	/** Where the chunk starts (its length field) and ends (after its checksum or padding). */
	start: number;
	end: number;
	data: Uint8Array;
}

const text = (bytes: Uint8Array) => String.fromCharCode(...bytes);
const ascii = (value: string) => Uint8Array.from(value, (letter) => letter.charCodeAt(0));

function pngChunks(bytes: Uint8Array): Chunk[] {
	const chunks: Chunk[] = [];
	const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
	let at = 8;
	while (at + 12 <= bytes.length) {
		const length = view.getUint32(at);
		const type = text(bytes.subarray(at + 4, at + 8));
		chunks.push({
			type,
			start: at,
			end: at + 12 + length,
			data: bytes.subarray(at + 8, at + 8 + length)
		});
		at += 12 + length;
	}
	return chunks;
}

const readChunk = (chunks: Chunk[], type: string) =>
	chunks.find((chunk) => chunk.type === type)?.data;

/** CRC-32 as PNG uses it, over a chunk's type and data. */
export function crc32(bytes: Uint8Array): number {
	let crc = 0xffffffff;
	for (const byte of bytes) {
		crc ^= byte;
		for (let bit = 0; bit < 8; bit++) crc = crc & 1 ? (crc >>> 1) ^ 0xedb88320 : crc >>> 1;
	}
	return (crc ^ 0xffffffff) >>> 0;
}

function writePng(bytes: Uint8Array, tiff: Uint8Array): Uint8Array {
	const firstData = pngChunks(bytes).find((chunk) => chunk.type === 'IDAT');
	if (!firstData) return bytes;
	const chunk = new Uint8Array(12 + tiff.length);
	const view = new DataView(chunk.buffer);
	view.setUint32(0, tiff.length);
	chunk.set(ascii('eXIf'), 4);
	chunk.set(tiff, 8);
	view.setUint32(8 + tiff.length, crc32(chunk.subarray(4, 8 + tiff.length)));
	return concat(bytes.subarray(0, firstData.start), chunk, bytes.subarray(firstData.start));
}

// --- WebP ---------------------------------------------------------------------------------------

function webpChunks(bytes: Uint8Array): Chunk[] {
	const chunks: Chunk[] = [];
	if (text(bytes.subarray(0, 4)) !== 'RIFF' || text(bytes.subarray(8, 12)) !== 'WEBP')
		return chunks;
	const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
	let at = 12;
	while (at + 8 <= bytes.length) {
		const length = view.getUint32(at + 4, true);
		const type = text(bytes.subarray(at, at + 4));
		const end = at + 8 + length + (length % 2);
		chunks.push({ type, start: at, end, data: bytes.subarray(at + 8, at + 8 + length) });
		at = end;
	}
	return chunks;
}

function riffChunk(type: string, data: Uint8Array): Uint8Array {
	const chunk = new Uint8Array(8 + data.length + (data.length % 2));
	chunk.set(ascii(type));
	new DataView(chunk.buffer).setUint32(4, data.length, true);
	chunk.set(data, 8);
	return chunk;
}

const EXIF_FLAG = 0x08;
const ALPHA_FLAG = 0x10;

function writeWebp(
	bytes: Uint8Array,
	tiff: Uint8Array,
	{ width, height }: { width: number; height: number }
): Uint8Array {
	const chunks = webpChunks(bytes);
	if (!chunks.length) return bytes;
	let body: Uint8Array[];
	const extended = chunks.find((chunk) => chunk.type === 'VP8X');
	if (extended) {
		// Already the extended format: say it carries Exif, and add the block at the end.
		const header = extended.data.slice();
		header[0] |= EXIF_FLAG;
		body = chunks.map((chunk) =>
			chunk === extended ? riffChunk('VP8X', header) : bytes.subarray(chunk.start, chunk.end)
		);
	} else {
		// The simple format can't hold anything else: put the extended header in front, sized to
		// the image, with the alpha flag for a lossless image that may have transparency.
		const header = new Uint8Array(10);
		header[0] = EXIF_FLAG | (chunks.some((chunk) => chunk.type === 'VP8L') ? ALPHA_FLAG : 0);
		const view = new DataView(header.buffer);
		view.setUint16(4, (width - 1) & 0xffff, true);
		header[6] = ((width - 1) >> 16) & 0xff;
		view.setUint16(7, (height - 1) & 0xffff, true);
		header[9] = ((height - 1) >> 16) & 0xff;
		body = [
			riffChunk('VP8X', header),
			...chunks.map((chunk) => bytes.subarray(chunk.start, chunk.end))
		];
	}
	body.push(riffChunk('EXIF', tiff));
	const contents = concat(ascii('WEBP'), ...body);
	const file = new Uint8Array(8 + contents.length);
	file.set(ascii('RIFF'));
	new DataView(file.buffer).setUint32(4, contents.length, true);
	file.set(contents, 8);
	return file;
}

function concat(...parts: Uint8Array[]): Uint8Array {
	const joined = new Uint8Array(parts.reduce((sum, part) => sum + part.length, 0));
	let at = 0;
	for (const part of parts) {
		joined.set(part, at);
		at += part.length;
	}
	return joined;
}
