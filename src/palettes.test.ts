import { readFileSync, readdirSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { STYLESHEET_URL, accentLineProblems, paletteProblems } from '@itrium/palettes/check';

// Rhodonite as this site uses it: the package's colors with our stylesheet on top, checked by the
// package's own checker, the way decision 0001 in the handbook asks every application to. Since
// 0.3.0 the checker reads theme rules in either quote and pink lines drawn with Tailwind classes,
// which is how this site writes both.

const ours = () =>
	[
		'src/app.css',
		...readdirSync('src', { recursive: true, encoding: 'utf8' })
			.filter((file) => file.endsWith('.svelte') || file === 'lib/styles.ts')
			.map((file) => `src/${file}`)
	].map((name) => ({ name, text: readFileSync(name, 'utf8') }));

describe('colors', () => {
	const css = () => readFileSync(STYLESHEET_URL, 'utf8') + readFileSync('src/app.css', 'utf8');

	it('meet level AA in every theme state: the device, and Light or Dark chosen against it', () => {
		expect(paletteProblems(css())).toEqual([]);
	});

	it('draw pink lines in --accent-edge, which reaches 3:1 in light mode', () => {
		expect(accentLineProblems(ours())).toEqual([]);
	});

	// The checks above only count if they can fail on this site's own way of writing things.
	it("catch a light color of ours that's too pale, in single quotes as we write them", () => {
		const pale = css() + ":root[data-theme='light'] { --muted: #aaaaaa; }";
		expect(paletteProblems(pale)).not.toEqual([]);
	});

	it('catch a pink line drawn as a Tailwind class, and let --accent-edge through', () => {
		expect(
			accentLineProblems([{ name: 'x.svelte', text: '<p class="border-b border-accent">' }])
		).not.toEqual([]);
		expect(
			accentLineProblems([
				{ name: 'x.svelte', text: '<p class="border-accent-edge bg-accent text-accent-text">' }
			])
		).toEqual([]);
	});
});
