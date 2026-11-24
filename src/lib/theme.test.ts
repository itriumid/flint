import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { BAR_COLOR, THEME_KEY, barColor, readTheme, shownTheme } from './theme';

describe('readTheme', () => {
	it('keeps Light and Dark', () => {
		expect(readTheme('light')).toBe('light');
		expect(readTheme('dark')).toBe('dark');
	});

	it('follows the device for anything else, including nothing kept and an old value', () => {
		expect(readTheme(null)).toBe('system');
		expect(readTheme('system')).toBe('system');
		expect(readTheme('sepia')).toBe('system');
	});
});

describe('barColor', () => {
	it('takes the chosen theme for both tags', () => {
		expect(barColor('light', '(prefers-color-scheme: dark)')).toBe(BAR_COLOR.light);
		expect(barColor('dark', '(prefers-color-scheme: light)')).toBe(BAR_COLOR.dark);
	});

	it("gives each tag its own scheme's color with System", () => {
		expect(barColor('system', '(prefers-color-scheme: light)')).toBe(BAR_COLOR.light);
		expect(barColor('system', '(prefers-color-scheme: dark)')).toBe(BAR_COLOR.dark);
	});
});

describe('shownTheme', () => {
	it('shows the chosen theme whatever the device says', () => {
		expect(shownTheme('light', true)).toBe('light');
		expect(shownTheme('dark', false)).toBe('dark');
	});

	it("shows the device's look with System", () => {
		expect(shownTheme('system', true)).toBe('dark');
		expect(shownTheme('system', false)).toBe('light');
	});
});

// static/theme.js runs before the page's own code can, so it can't import these. It has to agree.
describe('static/theme.js', () => {
	const script = readFileSync('static/theme.js', 'utf8');

	it('reads the same key', () => {
		expect(script).toContain(`'${THEME_KEY}'`);
	});

	it('sets the same bar colors', () => {
		expect(script).toContain(`'${BAR_COLOR.light}'`);
		expect(script).toContain(`'${BAR_COLOR.dark}'`);
	});
});
