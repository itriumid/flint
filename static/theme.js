// The theme chosen in Flint (System, Light or Dark), set before the page is drawn so it never
// flashes the other one. An external file: the Content-Security-Policy allows no inline script.
// The key and the colors are the same as in src/lib/theme.ts.
try {
	const theme = localStorage.getItem('flint-theme');
	if (theme === 'light' || theme === 'dark') {
		document.documentElement.dataset.theme = theme;
		document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', theme);
		// The browser's own bar takes the chosen page color, whatever the device is set to.
		for (const meta of document.querySelectorAll('meta[name="theme-color"]'))
			meta.setAttribute('content', theme === 'light' ? '#FAFAFA' : '#2B2B2B');
	}
} catch {
	// Storage blocked: the device's setting holds.
}
