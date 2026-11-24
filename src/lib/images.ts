// What "Resize and convert images" decides: the size a file has to fit, the format and name it
// gets, and the search for the best quality that fits. The drawing itself (decoding, the canvas,
// encoding) is the browser's, in the page; here it's passed in as `encode`, so it can be tested.
// Nothing is uploaded: every image is changed on the device.

export type Format = 'jpeg' | 'webp' | 'png' | 'same';
export type Unit = 'KB' | 'MB';
export type OutputType = 'image/jpeg' | 'image/webp' | 'image/png';

/**
 * A kilobyte here is 1,000 bytes, the smaller of the two ways sites count one: a file under the
 * limit counted this way is under it counted in 1,024s too, so it fits whichever a form uses.
 */
const KILOBYTE = 1000;

/** The size to fit, in bytes, from what was typed: undefined for nothing, or nothing sensible. */
export function targetBytes(typed: string, unit: Unit): number | undefined {
	const amount = Number(typed.trim().replace(',', '.'));
	if (!typed.trim() || !Number.isFinite(amount) || amount <= 0) return undefined;
	return Math.round(amount * (unit === 'MB' ? KILOBYTE * KILOBYTE : KILOBYTE));
}

/** A file size for people: "196 KB", "3.4 MB", in the same kilobytes as the target. */
export function formatBytes(bytes: number): string {
	if (bytes < KILOBYTE * KILOBYTE) return `${Math.max(1, Math.round(bytes / KILOBYTE))} KB`;
	return `${(bytes / KILOBYTE / KILOBYTE).toFixed(1)} MB`;
}

const ENCODABLE: OutputType[] = ['image/jpeg', 'image/webp', 'image/png'];

/**
 * The type a file is saved as: the one chosen, or with "Keep the format" its own, when the browser
 * can write it (a GIF or an AVIF can't be written by a canvas, so it becomes a JPEG). A type the
 * browser can't write falls back to JPEG, which every browser can.
 */
export function outputType(format: Format, inputType: string, canWrite: OutputType[]): OutputType {
	const wanted =
		format === 'same'
			? (ENCODABLE.find((type) => type === inputType) ?? 'image/jpeg')
			: (`image/${format}` as OutputType);
	return canWrite.includes(wanted) ? wanted : 'image/jpeg';
}

const EXTENSIONS: Record<OutputType, string> = {
	'image/jpeg': 'jpg',
	'image/webp': 'webp',
	'image/png': 'png'
};

/** Whether quality means anything for the type: PNG is lossless, so only size makes it smaller. */
export const hasQuality = (type: OutputType) => type !== 'image/png';

/**
 * The saved file's name: the original's, with the new type's extension, and a number when two
 * files would end up with the same name ("photo.jpg" and "photo.png" both saved as JPEG).
 */
export function outputName(original: string, type: OutputType, taken: Set<string>): string {
	const stem = original.replace(/\.[^./\\]+$/, '') || 'image';
	const extension = EXTENSIONS[type];
	let name = `${stem}.${extension}`;
	for (let count = 2; taken.has(name); count++) name = `${stem}-${count}.${extension}`;
	taken.add(name);
	return name;
}

/**
 * How much to scale an image so it's no wider or taller than asked, keeping its shape. Never
 * larger than it is: enlarging adds bytes and no detail.
 */
export function limitScale(
	width: number,
	height: number,
	maxWidth?: number,
	maxHeight?: number
): number {
	const byWidth = maxWidth && maxWidth > 0 ? maxWidth / width : 1;
	const byHeight = maxHeight && maxHeight > 0 ? maxHeight / height : 1;
	return Math.min(1, byWidth, byHeight);
}

/** One try: the image drawn at `scale` and saved at `quality`, and how many bytes that made. */
export type Encode<T> = (scale: number, quality: number) => Promise<{ size: number; result: T }>;

export interface Fitted<T> {
	result: T;
	size: number;
	scale: number;
	quality: number;
	/** Whether it's under the target. False means this is as small as it would go. */
	fits: boolean;
}

/** The quality range searched: under 0.4, a JPEG's blocks show before the bytes drop much. */
const LOWEST_QUALITY = 0.4;
const HIGHEST_QUALITY = 0.92;
/** The smallest an image is scaled to while fitting: a quarter of its width and height. */
const SMALLEST_SCALE = 0.25;

/**
 * The best version under `target` bytes: at the largest scale it can keep (`startScale`, from
 * "More control", or full size), the highest quality that fits, found by halving the range; and
 * only when even the lowest quality doesn't fit, a smaller scale, worked out from how far over it
 * is. With no target, one try at `startScale` and `quality`.
 */
export async function fit<T>(
	encode: Encode<T>,
	options: { target?: number; startScale: number; quality: number; lossless: boolean }
): Promise<Fitted<T>> {
	const { target, startScale, quality, lossless } = options;
	if (target === undefined) {
		const tried = await encode(startScale, quality);
		return { ...tried, scale: startScale, quality, fits: true };
	}

	let scale = startScale;
	let best: Fitted<T> | undefined;
	for (let round = 0; round < 8; round++) {
		const floor = await encode(scale, lossless ? 1 : LOWEST_QUALITY);
		if (floor.size <= target) {
			if (lossless) return { ...floor, scale, quality: 1, fits: true };
			// Something fits at this scale: find the highest quality that still does.
			let found = { ...floor, scale, quality: LOWEST_QUALITY, fits: true };
			const top = await encode(scale, HIGHEST_QUALITY);
			if (top.size <= target) return { ...top, scale, quality: HIGHEST_QUALITY, fits: true };
			let low = LOWEST_QUALITY;
			let high = HIGHEST_QUALITY;
			for (let step = 0; step < 6; step++) {
				const middle = (low + high) / 2;
				const tried = await encode(scale, middle);
				if (tried.size <= target) {
					found = { ...tried, scale, quality: middle, fits: true };
					low = middle;
				} else {
					high = middle;
				}
			}
			return found;
		}
		if (!best || floor.size < best.size) {
			best = { ...floor, scale, quality: lossless ? 1 : LOWEST_QUALITY, fits: false };
		}
		if (scale <= SMALLEST_SCALE) break;
		// Bytes go roughly with the area, so the side shrinks by the square root of how far over.
		scale = Math.max(SMALLEST_SCALE, scale * Math.sqrt(target / floor.size) * 0.95);
	}
	return best!;
}
