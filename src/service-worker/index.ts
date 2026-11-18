/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

// Keeps this version of Flint on the device, so the tools open with no connection at all: a bill
// split in a restaurant with no signal. Everything the pages need is stored when it installs, and
// served from there first: the pages, their scripts and styles, the fonts and icons. Nothing
// anyone types is here. Shared bills (/api/) are never stored or answered from here; with no
// connection, sharing falls back to the long link that holds the whole bill.
//
// A new version takes over as soon as it's installed, and the old files go. A page still open
// with the old version keeps the code it has; if it then needs a file that's gone, SvelteKit
// loads the page afresh, with the new version.

import { version } from '$app/env';
import { assets, immutable, prerendered } from '$app/manifest';
import { self } from '$app/service-worker';

const CACHE = `flint-${version}`;
// The manifest's paths are relative to where Flint is served; requests are matched by full path.
const at = (path: string) => new URL(path, self.registration.scope).pathname;
const KEPT = new Set([...immutable, ...assets, ...prerendered].map((file) => at(file.path)));

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches
			.open(CACHE)
			.then((cache) => cache.addAll([...KEPT]))
			.then(() => self.skipWaiting())
	);
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((keys) =>
				Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))
			)
			.then(() => self.clients.claim())
	);
});

self.addEventListener('fetch', (event) => {
	const request = event.request;
	if (request.method !== 'GET') return;
	const url = new URL(request.url);
	if (url.origin !== self.location.origin || !KEPT.has(url.pathname)) return;
	event.respondWith(
		caches
			.open(CACHE)
			.then((cache) => cache.match(url.pathname))
			.then((response) => response ?? fetch(request))
	);
});
