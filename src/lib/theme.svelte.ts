// The theme chosen here, applied to the page as it changes. The rules are in theme.ts.
//
// A change of look cross-fades, a quarter of a second, instead of flashing the whole screen from
// one theme to the other in a single frame: when someone picks System, Light or Dark, and when the
// device itself switches while System is chosen. The browser's view transition photographs the
// page before the change and fades into it after, as one image, so nothing on the page changes at
// its own pace. Without view transitions, or for anyone who asked for less motion, it switches at
// once, as before.
//
// To fade a switch the device makes, the page has to still look as it did when it hears about it.
// So the look on screen is always held on the root (`data-theme`), System included: the device's
// setting can't repaint the page under it, and the page moves to the new look itself, faded.
// static/theme.js sets it only for Light or Dark; until this runs, the device's setting shows the
// same look, so holding it changes nothing on screen.

import { THEME_KEY, barColor, readTheme, shownTheme, type Theme } from './theme';

const DEVICE_DARK = '(prefers-color-scheme: dark)';

/** Runs a change of look as a cross-fade where the browser can and the person hasn't asked for less motion. */
function fade(change: () => void) {
	if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) {
		change();
		return;
	}
	// The browser drops the fade, not the change, when something like the window's size changes
	// halfway through; it says so by rejecting `ready`, which is no error of ours.
	document.startViewTransition(change).ready.catch(() => {});
}

class ThemeChoice {
	current = $state<Theme>('system');
	private device: MediaQueryList | undefined;

	/** What static/theme.js already applied, so the radio buttons match it; then follows the device. */
	load() {
		try {
			this.current = readTheme(localStorage.getItem(THEME_KEY));
		} catch {
			// Storage blocked: the device's setting holds.
		}
		if (this.device) return;
		this.device = matchMedia(DEVICE_DARK);
		this.hold();
		this.device.addEventListener('change', () => {
			if (this.current === 'system') fade(() => this.hold());
		});
	}

	set(theme: Theme) {
		const before = this.shown();
		this.current = theme;
		const change = () => {
			this.hold();
			document
				.querySelector('meta[name="color-scheme"]')
				?.setAttribute('content', theme === 'system' ? 'dark light' : theme);
			for (const meta of document.querySelectorAll('meta[name="theme-color"]')) {
				meta.setAttribute('content', barColor(theme, meta.getAttribute('media')));
			}
		};
		// Picking System on a device already showing the same look changes nothing to fade.
		if (this.shown() === before) change();
		else fade(change);
		try {
			if (theme === 'system') localStorage.removeItem(THEME_KEY);
			else localStorage.setItem(THEME_KEY, theme);
		} catch {
			// It still holds until the page is reloaded.
		}
	}

	private shown() {
		return shownTheme(this.current, this.device?.matches ?? matchMedia(DEVICE_DARK).matches);
	}

	/** Holds the look on screen on the root. */
	private hold() {
		document.documentElement.dataset.theme = this.shown();
	}
}

export const theme = new ThemeChoice();
