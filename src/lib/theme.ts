// Light or dark, or whatever the device is set to. The choice is kept in this browser's local
// storage, apart from everything else, and static/theme.js applies it before the page is drawn.
// It's a preference about how the site looks, not anything someone typed, and it's never sent.

export type Theme = 'system' | 'light' | 'dark';

/** In local storage. static/theme.js reads the same key. */
export const THEME_KEY = 'flint-theme';

/** The page's background in each theme: the browser's own bar takes it. */
export const BAR_COLOR = { light: '#FAFAFA', dark: '#2B2B2B' } as const;

/** What was kept, as a theme: anything but Light or Dark means the device's setting. */
export function readTheme(stored: string | null): Theme {
	return stored === 'light' || stored === 'dark' ? stored : 'system';
}

/**
 * The color for one of the page's theme-color tags: the chosen theme's, or with System, the one
 * for the scheme the tag's media query names.
 */
export function barColor(theme: Theme, media: string | null): string {
	const light = theme === 'light' || (theme === 'system' && Boolean(media?.includes('light')));
	return light ? BAR_COLOR.light : BAR_COLOR.dark;
}

/**
 * The look on screen: the chosen theme, or with System, the device's. The page holds it on the
 * root even with System, so when the device switches, the page can still be photographed as it
 * was before the switch and the two cross-faded (see theme.svelte.ts).
 */
export function shownTheme(theme: Theme, deviceDark: boolean): 'light' | 'dark' {
	if (theme !== 'system') return theme;
	return deviceDark ? 'dark' : 'light';
}
