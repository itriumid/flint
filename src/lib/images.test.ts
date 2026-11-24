import { describe, expect, it } from 'vitest';
import {
	fit,
	formatBytes,
	hasQuality,
	limitScale,
	outputName,
	outputType,
	targetBytes,
	type Encode,
	type OutputType
} from './images';

const ALL: OutputType[] = ['image/jpeg', 'image/webp', 'image/png'];

/**
 * A pretend encoder: bytes grow with the area and with quality, as a photo's do, so the search
 * can be checked without a browser. Records every try.
 */
function photo(fullSize: number) {
	const tries: [number, number][] = [];
	const encode: Encode<string> = async (scale, quality) => {
		tries.push([scale, quality]);
		return { size: Math.round(fullSize * scale * scale * (0.2 + quality)), result: 'file' };
	};
	return { encode, tries };
}

describe('targetBytes', () => {
	it('reads a size in KB or MB, a kilobyte being 1,000 bytes, so it fits either way of counting', () => {
		expect(targetBytes('200', 'KB')).toBe(200000);
		expect(targetBytes('1,5', 'MB')).toBe(1500000);
		expect(targetBytes(' 0.5 ', 'MB')).toBe(500000);
	});

	it('is nothing for nothing, zero or words', () => {
		expect(targetBytes('', 'KB')).toBeUndefined();
		expect(targetBytes('0', 'KB')).toBeUndefined();
		expect(targetBytes('abc', 'KB')).toBeUndefined();
	});
});

describe('formatBytes', () => {
	it('says sizes the way the target is typed', () => {
		expect(formatBytes(200_000)).toBe('200 KB');
		expect(formatBytes(199_499)).toBe('199 KB');
		expect(formatBytes(3_400_000)).toBe('3.4 MB');
		expect(formatBytes(10)).toBe('1 KB');
	});
});

describe('outputType', () => {
	it('is the format chosen, or the file’s own with "Keep the format"', () => {
		expect(outputType('webp', 'image/png', ALL)).toBe('image/webp');
		expect(outputType('same', 'image/png', ALL)).toBe('image/png');
	});

	it('falls back to JPEG for what a browser can’t write', () => {
		expect(outputType('same', 'image/gif', ALL)).toBe('image/jpeg');
		expect(outputType('webp', 'image/png', ['image/jpeg', 'image/png'])).toBe('image/jpeg');
	});

	it('knows PNG has no quality to turn down', () => {
		expect(hasQuality('image/png')).toBe(false);
		expect(hasQuality('image/webp')).toBe(true);
	});
});

describe('outputName', () => {
	it('keeps the name, changes the extension, and numbers a clash', () => {
		const taken = new Set<string>();
		expect(outputName('KTP.png', 'image/jpeg', taken)).toBe('KTP.jpg');
		expect(outputName('KTP.webp', 'image/jpeg', taken)).toBe('KTP-2.jpg');
		expect(outputName('scan', 'image/png', taken)).toBe('scan.png');
		expect(outputName('.jpg', 'image/webp', taken)).toBe('image.webp');
	});
});

describe('limitScale', () => {
	it('fits within the width and height asked, keeping the shape, never enlarging', () => {
		expect(limitScale(4000, 3000, 1000)).toBe(0.25);
		expect(limitScale(4000, 3000, 2000, 600)).toBe(0.2);
		expect(limitScale(800, 600, 1600)).toBe(1);
		expect(limitScale(800, 600)).toBe(1);
	});
});

describe('fit', () => {
	it('makes one try with no target', async () => {
		const { encode, tries } = photo(1_000_000);
		const fitted = await fit(encode, { startScale: 0.5, quality: 0.8, lossless: false });
		expect(tries).toEqual([[0.5, 0.8]]);
		expect(fitted.fits).toBe(true);
	});

	it('keeps the full size and finds the highest quality under the target', async () => {
		const { encode } = photo(1_000_000);
		// Full size: 0.4 quality is 600,000 bytes, 0.92 is 1,120,000; 800,000 fits up to 0.6.
		const fitted = await fit(encode, {
			target: 800_000,
			startScale: 1,
			quality: 0.8,
			lossless: false
		});
		expect(fitted.scale).toBe(1);
		expect(fitted.fits).toBe(true);
		expect(fitted.size).toBeLessThanOrEqual(800_000);
		expect(fitted.quality).toBeGreaterThan(0.55);
	});

	it('scales down only when the lowest quality is still too big', async () => {
		const { encode } = photo(5_000_000);
		const fitted = await fit(encode, {
			target: 200_000,
			startScale: 1,
			quality: 0.8,
			lossless: false
		});
		expect(fitted.fits).toBe(true);
		expect(fitted.size).toBeLessThanOrEqual(200_000);
		expect(fitted.scale).toBeLessThan(1);
	});

	it('scales a PNG, which has no quality, until it fits', async () => {
		const { encode, tries } = photo(2_000_000);
		const fitted = await fit(encode, {
			target: 300_000,
			startScale: 1,
			quality: 1,
			lossless: true
		});
		expect(fitted.fits).toBe(true);
		expect(tries.every(([, quality]) => quality === 1)).toBe(true);
	});

	it('says when even the smallest try is over, and gives the smallest', async () => {
		const { encode } = photo(100_000_000);
		const fitted = await fit(encode, {
			target: 1_000,
			startScale: 1,
			quality: 0.8,
			lossless: false
		});
		expect(fitted.fits).toBe(false);
		expect(fitted.scale).toBe(0.25);
	});
});
