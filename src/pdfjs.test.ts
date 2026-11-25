import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

// pdf.js reads JPEG 2000 and JBIG2 scans with decoders it loads from the site, by name, from
// static/pdfjs/ (the PDF page's `wasmUrl`). They're its plain JavaScript ones, since WebAssembly
// is off, copied from the installed pdfjs-dist: after a pdfjs-dist update, copy them again, or
// the page loads decoders from another version than the reader that calls them.
describe('static/pdfjs', () => {
	const files = [
		'openjpeg_nowasm_fallback.js',
		'jbig2_nowasm_fallback.js',
		'LICENSE_OPENJPEG',
		'LICENSE_JBIG2',
		'LICENSE_PDFJS_OPENJPEG',
		'LICENSE_PDFJS_JBIG2'
	];

	it.each(files)('has %s as pdfjs-dist ships it', (file) => {
		expect(readFileSync(`static/pdfjs/${file}`)).toEqual(
			readFileSync(`node_modules/pdfjs-dist/wasm/${file}`)
		);
	});
});
