// The theme chosen here, applied to the page as it changes. The rules are in theme.ts.

import { THEME_KEY, barColor, readTheme, type Theme } from './theme';

class ThemeChoice {
	current = $state<Theme>('system');

	/** What static/theme.js already applied, so the radio buttons match it. */
	load() {
		try {
			this.current = readTheme(localStorage.getItem(THEME_KEY));
		} catch {
			// Storage blocked: the device's setting holds.
		}
	}

	set(theme: Theme) {
		this.current = theme;
		const root = document.documentElement;
		if (theme === 'system') delete root.dataset.theme;
		else root.dataset.theme = theme;
		document
			.querySelector('meta[name="color-scheme"]')
			?.setAttribute('content', theme === 'system' ? 'dark light' : theme);
		for (const meta of document.querySelectorAll('meta[name="theme-color"]')) {
			meta.setAttribute('content', barColor(theme, meta.getAttribute('media')));
		}
		try {
			if (theme === 'system') localStorage.removeItem(THEME_KEY);
			else localStorage.setItem(THEME_KEY, theme);
		} catch {
			// It still holds until the page is reloaded.
		}
	}
}

export const theme = new ThemeChoice();
