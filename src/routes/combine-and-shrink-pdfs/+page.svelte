<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { flip } from 'svelte/animate';
	import type { PDFDocumentProxy } from 'pdfjs-dist';
	import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
	import Caution from '#lib/Caution.svelte';
	import Seo from '#lib/Seo.svelte';
	import ToolTitle from '#lib/ToolTitle.svelte';
	import { PDF, SITE_URL, TITLE_SUFFIX } from '#lib/content.js';
	import { formatBytes, targetBytes, type Unit } from '#lib/images.js';
	import { readExif, uprightExif } from '#lib/metadata.js';
	import {
		canCopy,
		coverage,
		fileName,
		fingerprint,
		isPicture,
		LADDER,
		makeFiles,
		move,
		photoPage,
		remembered,
		turnedOnce,
		type PageItem,
		type Picture,
		type Source
	} from '#lib/pdf.js';
	import {
		checkbox,
		checkRow,
		field,
		label,
		primaryButton,
		secondaryButtonOnPage,
		smallButtonOnPage
	} from '#lib/styles.js';

	// The settings.
	let amount = $state('');
	let unit: Unit = $state('MB');
	let saveAs: 'one' | 'each' = $state('one');
	const target = $derived(targetBytes(amount, unit));
	let keepDetails = $state(false);
	let protect = $state<'none' | 'keep' | 'new'>('none');
	let newPassword = $state('');

	// pdf.js, loaded the first time a PDF is added: it reads the files and draws their pages, in a
	// worker served from this site. WebAssembly stays off; the few scans that need a decoder pdf.js
	// doesn't carry (JPEG 2000, JBIG2) get its plain JavaScript one, from /pdfjs/.
	// One worker for every file, not one each: a phone with six PDFs open shouldn't run six. The
	// loading is kept, not its result, so files added at once all wait for the same one.
	let loading: Promise<typeof import('pdfjs-dist') & { worker: import('pdfjs-dist').PDFWorker }>;
	function pdfjs() {
		loading ??= import('pdfjs-dist').then((reader) => {
			reader.GlobalWorkerOptions.workerSrc = workerUrl;
			return {
				...reader,
				worker: new reader.PDFWorker({ verbosity: reader.VerbosityLevel.ERRORS })
			};
		});
		return loading;
	}

	interface Added {
		name: string;
		size: number;
		state: 'reading' | 'locked' | 'ready' | 'failed';
		source?: Source;
		/** The file as pdf.js reads it, to draw its pages. */
		document?: PDFDocumentProxy;
		/** A photo, to draw again smaller: it's decoded again each time rather than kept in memory. */
		photo?: File;
		/** Whether pdf-lib can copy its pages; when it can't, they go in as pictures pdf.js drew. */
		copies: boolean;
		/** While locked: whether the last password tried was wrong, and how to try another. */
		wrong?: boolean;
		tryPassword?: (password: string) => void;
		typed?: string;
	}
	interface Page extends PageItem {
		/** Its picture on screen, drawn small: a link to it in this page's memory, never sent. */
		thumbnail?: string;
		/** Its sheet's shape, as drawn: an A4 page, a landscape one, or square. */
		shape: Shape;
	}

	type Shape = 'portrait' | 'landscape' | 'square';
	const shapeOf = (width: number, height: number): Shape =>
		width > height * 1.15 ? 'landscape' : height > width * 1.15 ? 'portrait' : 'square';

	// Added files are only ever added to, so a page's `file` stays its place in this list.
	let files: Added[] = $state([]);
	let pages: Page[] = $state([]);
	let nextId = 0;

	/**
	 * A file's pages, put in after the pages of every file picked before it, and before those of
	 * any picked after: files finish reading in any order (a locked one only when it's unlocked),
	 * and the pages follow the order they were picked in.
	 */
	function place(file: number, added: Page[]) {
		const before = pages.findIndex((page) => page.file > file);
		if (before === -1) pages.push(...added);
		else pages.splice(before, 0, ...added);
	}

	const isPdf = (file: File) => file.type === 'application/pdf' || /\.pdf$/i.test(file.name);

	async function add(picked: FileList | File[] | null) {
		for (const file of picked ?? []) {
			if (isPdf(file)) void addPdf(file);
			else if (file.type.startsWith('image/') || file.type === '') void addPhoto(file);
		}
	}

	async function addPdf(file: File) {
		const at =
			files.push({ name: file.name, size: file.size, state: 'reading', copies: false }) - 1;
		const entry = files[at];
		try {
			const bytes = new Uint8Array(await file.arrayBuffer());
			const { getDocument, PasswordResponses, worker } = await pdfjs();
			// pdf.js takes over the bytes it's given, so it gets its own copy.
			const task = getDocument({
				data: bytes.slice(),
				worker,
				useWasm: false,
				wasmUrl: '/pdfjs/',
				enableXfa: false,
				verbosity: 0
			});
			let password: string | undefined;
			task.onPassword = (answer: (password: string) => void, reason: number) => {
				entry.state = 'locked';
				entry.wrong = reason === PasswordResponses.INCORRECT_PASSWORD;
				entry.tryPassword = (typed: string) => {
					password = typed;
					entry.wrong = false;
					answer(typed);
				};
			};
			const document = await task.promise;
			entry.document = document;
			entry.source = { kind: 'pdf', bytes, password };
			entry.copies = await canCopy(bytes, password);
			entry.state = 'ready';
			const added: Page[] = Array.from({ length: document.numPages }, (_, index) => ({
				id: nextId++,
				file: at,
				index,
				turn: 0,
				shape: 'portrait'
			}));
			place(at, added);
			for (const page of added) await drawThumbnail(page.id);
		} catch {
			entry.state = 'failed';
		}
	}

	async function addPhoto(file: File) {
		const at = files.push({ name: file.name, size: file.size, state: 'reading', copies: true }) - 1;
		const entry = files[at];
		try {
			// Turned upright as the camera recorded it; a PDF has no way to say a photo is sideways.
			const bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' });
			const { width, height } = bitmap;
			let bytes: Uint8Array;
			let type: 'image/jpeg' | 'image/png';
			if (file.type === 'image/png') {
				bytes = new Uint8Array(await file.arrayBuffer());
				type = 'image/png';
			} else {
				// JPEG for everything else (a JPEG, a HEIC, a WebP), drawn upright, at a high quality.
				bytes = await encode(bitmap, width, height, 0.92);
				type = 'image/jpeg';
			}
			// Its camera and location, marked upright like the photo, to write back in if they're kept.
			const found = readExif(new Uint8Array(await file.arrayBuffer()), file.type);
			const exif = found && type === 'image/jpeg' ? uprightExif(found) : undefined;
			entry.source = { kind: 'image', bytes, type, width, height, exif };
			entry.photo = file;
			entry.state = 'ready';
			const page: Page = {
				id: nextId++,
				file: at,
				index: 0,
				turn: 0,
				shape: shapeOf(width, height)
			};
			place(at, [page]);
			const small = await encode(bitmap, ...thumbnailSize(width, height), 0.8);
			bitmap.close();
			// Looked up again: what was pushed is now the page's state, which the screen follows.
			const now = pages.find((each) => each.id === page.id);
			if (now)
				now.thumbnail = URL.createObjectURL(
					new Blob([new Uint8Array(small)], { type: 'image/jpeg' })
				);
		} catch {
			entry.state = 'failed';
		}
	}

	/** A thumbnail's size: 320 pixels on its longer side, sharp at three thumbnails across a phone. */
	const thumbnailSize = (width: number, height: number): [number, number] => {
		const scale = 320 / Math.max(width, height);
		return [Math.max(1, Math.round(width * scale)), Math.max(1, Math.round(height * scale))];
	};

	/** A picture drawn on a canvas, saved as a JPEG. */
	async function encode(
		drawable: CanvasImageSource,
		width: number,
		height: number,
		quality: number
	): Promise<Uint8Array> {
		const canvas = new OffscreenCanvas(width, height);
		const context = canvas.getContext('2d');
		if (!context) throw new Error('No canvas');
		context.fillStyle = '#ffffff';
		context.fillRect(0, 0, width, height);
		context.drawImage(drawable, 0, 0, width, height);
		const blob = await canvas.convertToBlob({ type: 'image/jpeg', quality });
		return new Uint8Array(await blob.arrayBuffer());
	}

	/** A page of a PDF drawn on a canvas, `side` pixels on its longer side, as it's seen. */
	async function drawPage(document: PDFDocumentProxy, index: number, side: number) {
		const page = await document.getPage(index + 1);
		const seen = page.getViewport({ scale: 1 });
		const viewport = page.getViewport({ scale: side / Math.max(seen.width, seen.height) });
		const canvas = window.document.createElement('canvas');
		canvas.width = Math.max(1, Math.round(viewport.width));
		canvas.height = Math.max(1, Math.round(viewport.height));
		await page.render({ canvas, viewport }).promise;
		return { canvas, width: seen.width, height: seen.height };
	}

	async function drawThumbnail(id: number) {
		const page = pages.find((each) => each.id === id);
		const document = page && files[page.file].document;
		if (!page || !document) return;
		try {
			const drawn = await drawPage(document, page.index, 320);
			const blob = await new Promise<Blob | null>((done) =>
				drawn.canvas.toBlob(done, 'image/jpeg', 0.8)
			);
			if (!blob) return;
			// Looked up again: the page may have moved, or gone, while it was drawn.
			const now = pages.find((each) => each.id === id);
			if (now) {
				now.thumbnail = URL.createObjectURL(blob);
				now.shape = shapeOf(drawn.width, drawn.height);
			}
		} catch {
			// A page pdf.js can't draw keeps its blank sheet; saving it is pdf-lib's job.
		}
	}

	function remove(id: number) {
		const at = pages.findIndex((page) => page.id === id);
		if (at === -1) return;
		if (pages[at].thumbnail) URL.revokeObjectURL(pages[at].thumbnail!);
		pages.splice(at, 1);
		if (lifted === id) lifted = undefined;
	}

	function turn(id: number) {
		const page = pages.find((each) => each.id === id);
		if (page) page.turn = turnedOnce(page.turn);
	}

	// Moving a page: pressing it lifts it, and pressing another puts it down before that one, or at
	// the end. One hand, no dragging; with a mouse it can be dragged as well.
	let lifted: number | undefined = $state();
	const liftedNumber = $derived(
		lifted === undefined ? undefined : pages.findIndex((page) => page.id === lifted) + 1
	);
	function press(id: number) {
		if (lifted === undefined) lifted = id;
		else if (lifted === id) lifted = undefined;
		else putBefore(pages.findIndex((page) => page.id === id));
	}
	function putBefore(before: number) {
		const from = pages.findIndex((page) => page.id === lifted);
		if (from !== -1) pages = move(pages, from, before);
		lifted = undefined;
	}

	// What a page is, for pictures: a scan or a photo, which can be saved again smaller; typed pages
	// are left as they are. Read from pdf.js once per page.
	const picture = remembered(
		(page: PageItem) => `${page.file}:${page.index}`,
		async (page: PageItem): Promise<boolean> => {
			const file = files[page.file];
			if (file.source?.kind === 'image' || !file.copies) return true;
			const { OPS } = await pdfjs();
			const read = await file.document!.getPage(page.index + 1);
			const text = await read.getTextContent();
			const characters = text.items.reduce(
				(sum, item) => sum + ('str' in item ? item.str.trim().length : 0),
				0
			);
			const view = read.getViewport({ scale: 1 });
			const found = coverage(
				await read.getOperatorList(),
				{
					save: OPS.save,
					restore: OPS.restore,
					transform: OPS.transform,
					paintFormXObjectBegin: OPS.paintFormXObjectBegin,
					paintFormXObjectEnd: OPS.paintFormXObjectEnd,
					images: [
						OPS.paintImageXObject,
						OPS.paintInlineImageXObject,
						OPS.paintImageXObjectRepeat,
						OPS.paintImageMaskXObject,
						OPS.paintInlineImageXObjectGroup,
						OPS.paintImageMaskXObjectGroup,
						OPS.paintImageMaskXObjectRepeat
					]
				},
				view.width * view.height
			);
			return isPicture({ characters, ...found });
		}
	);

	/** A page drawn as a picture at a step of the ladder: kept, since the same step is asked again. */
	const pictureAt = remembered(
		(page: PageItem, step: number) => `${page.file}:${page.index}:${step}`,
		async (page: PageItem, step: number): Promise<Picture> => {
			const file = files[page.file];
			const { side, quality } = LADDER[step];
			if (file.source?.kind === 'image') {
				const bitmap = await createImageBitmap(file.photo!, { imageOrientation: 'from-image' });
				try {
					const scale = Math.min(1, side / Math.max(bitmap.width, bitmap.height));
					const width = Math.max(1, Math.round(bitmap.width * scale));
					const height = Math.max(1, Math.round(bitmap.height * scale));
					const jpeg = await encode(bitmap, width, height, quality);
					const page = photoPage(bitmap.width, bitmap.height);
					return { jpeg, ...page };
				} finally {
					bitmap.close();
				}
			}
			const drawn = await drawPage(file.document!, page.index, side);
			const jpeg = await encode(drawn.canvas, drawn.canvas.width, drawn.canvas.height, quality);
			return { jpeg, width: drawn.width, height: drawn.height };
		}
	);

	/**
	 * A photo inside a typed page, drawn again smaller: the browser opens the JPEG itself. Kept by
	 * what the photo is, since every round copies it afresh.
	 */
	const shrinkPhoto = remembered(
		(jpeg: Uint8Array, step: number) => `${fingerprint(jpeg)}:${step}`,
		async (jpeg: Uint8Array, step: number) => {
			const { side, quality } = LADDER[step];
			let bitmap: ImageBitmap;
			try {
				bitmap = await createImageBitmap(new Blob([new Uint8Array(jpeg)], { type: 'image/jpeg' }));
			} catch {
				return undefined;
			}
			try {
				const scale = Math.min(1, side / Math.max(bitmap.width, bitmap.height));
				const width = Math.max(1, Math.round(bitmap.width * scale));
				const height = Math.max(1, Math.round(bitmap.height * scale));
				return { jpeg: await encode(bitmap, width, height, quality), width, height };
			} finally {
				bitmap.close();
			}
		}
	);

	/** The first locked file added, whose password the saved file can keep. */
	const locked = $derived(
		files.find((file) => file.source?.kind === 'pdf' && file.source.password)
	);
	const password = $derived(
		protect === 'new'
			? newPassword || undefined
			: protect === 'keep' && locked?.source?.kind === 'pdf'
				? locked.source.password
				: undefined
	);
	/** "The one it had" is offered only when a file had one. */
	const protections = $derived<('none' | 'keep' | 'new')[]>(
		locked ? ['none', 'keep', 'new'] : ['none', 'new']
	);
	/** A new password chosen and not typed yet: nothing to save until it is. */
	const needsPassword = $derived(protect === 'new' && !newPassword);

	// What Save hands over, made again a moment after anything changes, so typing "1.5" doesn't
	// make three rounds; an older round stops as soon as a newer one starts.
	interface Ready {
		files: { bytes: Uint8Array; name: string }[];
		size: number;
		/** The size with every page as it was, when pictures made it smaller. */
		before?: number;
		/** The smallest a file would go, when that's still over the size to fit. */
		tooBig?: number;
		notes: string[];
	}
	let made: Ready | undefined = $state();
	let working = $state(false);
	let round = 0;
	let timer: ReturnType<typeof setTimeout> | undefined;

	const readyPages = $derived(pages.filter((page) => files[page.file]?.state === 'ready'));
	$effect(() => {
		// What the file is made from: read here, so changing any of it makes it again.
		void [
			target,
			saveAs,
			keepDetails,
			password,
			readyPages.map((page) => `${page.id}:${page.turn}`).join()
		];
		working = true;
		clearTimeout(timer);
		timer = setTimeout(() => void make(++round), 300);
	});

	async function make(current: number) {
		const order = readyPages.map(({ id, file, index, turn }) => ({ id, file, index, turn }));
		const stale = () => current !== round;
		if (!order.length) {
			made = undefined;
			working = false;
			return;
		}
		let result;
		try {
			result = await makeFiles({
				sources: files.map((file) => file.source ?? { kind: 'pdf', bytes: new Uint8Array() }),
				pages: order,
				each: saveAs === 'each',
				target,
				copies: (file) => files[file].copies,
				picture,
				pictureAt,
				shrinkPhoto,
				details: keepDetails,
				password,
				stale
			});
		} catch {
			// Never a part of the file: Save hands over nothing, and the page says why.
			if (stale()) return;
			made = { files: [], size: 0, notes: [PDF.notes.failed] };
			working = false;
			return;
		}
		if (!result || stale()) return;
		const notes: string[] = [];
		if (result.pictures.length) notes.push(PDF.notes.pictures(PDF.pageList(result.pictures)));
		if (result.photos.length) notes.push(PDF.notes.photos(PDF.pageList(result.photos)));
		if (result.typedOnly) notes.push(PDF.notes.typedOnly);
		const damaged = new Set(
			order.filter((page) => !files[page.file].copies).map((page) => page.file)
		);
		for (const file of damaged) notes.push(PDF.notes.damaged(files[file].name));
		made = {
			files: result.files.map((file) => ({
				bytes: file.bytes,
				name: fileName(
					file.pages.map((number) => files[order[number - 1].file].name),
					PDF.combined,
					saveAs === 'each' ? file.pages[0] : undefined
				)
			})),
			size: result.size,
			before: result.before,
			tooBig: result.tooBig,
			notes
		};
		working = false;
	}

	// On a touch screen that can share files, Save opens the share sheet, said before the tap.
	let canShareFiles = $state(false);
	onMount(() => {
		const probe = new File([new Uint8Array(1)], 'probe.pdf', { type: 'application/pdf' });
		canShareFiles =
			matchMedia('(pointer: coarse)').matches && Boolean(navigator.canShare?.({ files: [probe] }));
		return () => {
			for (const page of pages) if (page.thumbnail) URL.revokeObjectURL(page.thumbnail);
		};
	});

	let status = $state('');
	function download(bytes: Uint8Array, name: string) {
		const url = URL.createObjectURL(new Blob([new Uint8Array(bytes)], { type: 'application/pdf' }));
		Object.assign(document.createElement('a'), { href: url, download: name }).click();
		setTimeout(() => URL.revokeObjectURL(url), 1000);
	}
	async function save() {
		if (working || needsPassword || !made?.files.length) return;
		const saving = made.files;
		const asFiles = saving.map(
			(file) => new File([new Uint8Array(file.bytes)], file.name, { type: 'application/pdf' })
		);
		if (canShareFiles && navigator.canShare?.({ files: asFiles })) {
			try {
				await navigator.share({ files: asFiles });
				status = PDF.shared;
				return;
			} catch (problem) {
				if ((problem as Error).name === 'AbortError') return;
			}
		}
		for (const [index, file] of saving.entries()) {
			setTimeout(() => download(file.bytes, file.name), index * 300);
		}
		status = saving.length === 1 ? PDF.saved(saving[0].name) : PDF.savedAll(saving.length);
	}

	// Dropped on the pages from a desktop: files are added; a page dragged is put down where it's dropped.
	let dropping = $state(false);
	function drop(event: DragEvent) {
		event.preventDefault();
		dropping = false;
		if (event.dataTransfer?.files.length) void add(event.dataTransfer.files);
	}

	const problems = $derived(
		files.filter((file) => file.state === 'failed' || file.state === 'locked')
	);
	const readingAny = $derived(files.some((file) => file.state === 'reading'));

	// Once the first files are read, the pages are brought up the screen, so a phone shows them
	// with their controls, not only the settings. Only then: the picker has closed, and nothing
	// moves under a finger.
	let pagesHeading: HTMLElement | undefined = $state();
	let shownPages = false;
	$effect(() => {
		if (!pages.length || shownPages) return;
		shownPages = true;
		void tick().then(() =>
			pagesHeading?.scrollIntoView({
				behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
				block: 'start'
			})
		);
	});
	/** Moves of a page glide to their new place, unless motion is reduced. */
	const moving = () =>
		matchMedia('(prefers-reduced-motion: reduce)').matches ? { duration: 0 } : { duration: 220 };

	/** A choice in a row of pills, the images tool's: graphite when chosen, not pink. */
	const pill =
		'flex min-h-9 items-center rounded-full px-3.5 max-[25rem]:px-2.5 text-sm transition-colors peer-checked:bg-text peer-checked:font-semibold peer-checked:text-bg peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-(--focus) hover:text-text motion-reduce:transition-none pointer-coarse:min-h-11';
	/** A round control under a page: Turn or Remove, with its name for a screen reader. */
	const control =
		'flex size-9 items-center justify-center rounded-full border border-control-border transition-colors hover:bg-elevated focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--focus) dark:hover:bg-surface pointer-coarse:size-11';
	const turns = { 0: '', 90: 'rotate-90', 180: 'rotate-180', 270: '-rotate-90' } as const;
	/** The number on a turned sheet, turned back so it reads upright. */
	const counter = { 0: '', 90: '-rotate-90', 180: 'rotate-180', 270: 'rotate-90' } as const;
</script>

<Seo
	title="{PDF.name}{TITLE_SUFFIX}"
	description={PDF.description}
	path={PDF.path}
	structuredData={{
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		name: PDF.name,
		description: PDF.description,
		url: `${SITE_URL}${PDF.path}`,
		applicationCategory: 'UtilitiesApplication',
		operatingSystem: 'Any',
		isAccessibleForFree: true,
		offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
		publisher: { '@type': 'Organization', name: 'Itrium', url: 'https://itrium.id' }
	}}
/>

<ToolTitle
	tool="pdf"
	title={PDF.name}
	introduction={PDF.introduction}
	width="max-w-xl lg:max-w-6xl"
/>

<!-- No card: the settings, then under a plain line the pages, each a sheet with its number, and
     Turn and Remove under it. From 1024px the pages have their own, wider column. -->
<form
	class="mx-auto max-w-xl px-5 pt-4 sm:px-8 lg:grid lg:max-w-6xl lg:grid-cols-[22rem_1fr] lg:items-start"
	onsubmit={(event) => event.preventDefault()}
>
	<div class="space-y-5 pb-6 lg:sticky lg:top-6 lg:pr-12 lg:pb-0">
		<div>
			<label for="amount" class={label}>
				{saveAs === 'each' ? PDF.target.labelEach : PDF.target.label}
			</label>
			<div class="flex items-center gap-3">
				<input
					id="amount"
					bind:value={amount}
					inputmode="decimal"
					autocomplete="off"
					aria-describedby="amount-hint"
					class="{field} max-w-40 tabular-nums"
				/>
				<fieldset class="inline-flex gap-1 rounded-full border border-control-border p-1">
					<legend class="sr-only">{PDF.target.unitsLabel}</legend>
					{#each ['KB', 'MB'] as const as each (each)}
						<label class="relative cursor-pointer">
							<input type="radio" bind:group={unit} value={each} class="peer sr-only" />
							<span class={pill}>{PDF.target.units[each]}</span>
						</label>
					{/each}
				</fieldset>
			</div>
			<p id="amount-hint" class="mt-1.5 text-sm text-muted">{PDF.target.hint}</p>
		</div>

		<fieldset>
			<legend class={label}>{PDF.saveAs.label}</legend>
			<div class="inline-flex flex-wrap gap-1 rounded-3xl border border-control-border p-1">
				{#each ['one', 'each'] as const as each (each)}
					<label class="relative cursor-pointer">
						<input type="radio" bind:group={saveAs} value={each} class="peer sr-only" />
						<span class={pill}>{PDF.saveAs[each]}</span>
					</label>
				{/each}
			</div>
		</fieldset>

		<div>
			<label class={checkRow}>
				<input type="checkbox" bind:checked={keepDetails} class={checkbox} />
				{PDF.details.keep}
			</label>
			<!-- One line either way, so ticking the box moves nothing under the finger. -->
			<p class="text-sm text-muted">{keepDetails ? PDF.details.kept : PDF.details.removed}</p>
		</div>

		<fieldset>
			<legend class={label}>{PDF.password.label}</legend>
			<div class="inline-flex flex-wrap gap-1 rounded-3xl border border-control-border p-1">
				{#each protections as each (each)}
					<label class="relative cursor-pointer">
						<input type="radio" bind:group={protect} value={each} class="peer sr-only" />
						<span class={pill}>{PDF.password[each]}</span>
					</label>
				{/each}
			</div>
			{#if protect === 'new'}
				<label class="sr-only" for="new-password">{PDF.password.field}</label>
				<input
					id="new-password"
					type="password"
					autocomplete="new-password"
					placeholder={PDF.password.field}
					bind:value={newPassword}
					aria-describedby="password-hint"
					class="{field} mt-2 max-w-72"
				/>
			{/if}
			<p id="password-hint" class="mt-1.5 text-sm text-muted">
				{#if protect === 'keep' && locked}{PDF.password.hints.keep(
						locked.name
					)}{:else if protect === 'new'}{needsPassword
						? PDF.password.hints.empty
						: PDF.password.hints.new}{:else}{PDF.password.hints.none}{/if}
			</p>
		</fieldset>
	</div>

	<!-- The pages: added, or dropped anywhere in this part from a desktop. -->
	<section
		aria-labelledby="pages-heading"
		class="border-t border-border pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12 {dropping
			? 'outline-2 outline-offset-8 outline-(--focus)'
			: ''}"
		ondragover={(event) => {
			if (event.dataTransfer?.types.includes('Files')) {
				event.preventDefault();
				dropping = true;
			}
		}}
		ondragleave={() => (dropping = false)}
		ondrop={drop}
	>
		<div class="flex items-center justify-between gap-4">
			<h2
				id="pages-heading"
				bind:this={pagesHeading}
				class="scroll-mt-4 text-2xl font-extrabold tracking-[-0.03em]"
			>
				{PDF.pages.heading}
			</h2>
			{#if files.length}
				<label
					class="{smallButtonOnPage} cursor-pointer has-focus-visible:outline-2 has-focus-visible:outline-offset-3 has-focus-visible:outline-(--focus)"
				>
					{PDF.pages.addMore}
					<input
						type="file"
						accept="application/pdf,.pdf,image/*"
						multiple
						class="sr-only"
						onchange={(event) => {
							void add(event.currentTarget.files);
							event.currentTarget.value = '';
						}}
					/>
				</label>
			{/if}
		</div>

		{#if !files.length}
			<p class="mt-3 text-sm text-muted">
				{PDF.pages.empty}
				<span class="hidden pointer-fine:inline">{PDF.pages.drop}</span>
			</p>
			<label
				class="{secondaryButtonOnPage} mt-5 w-full cursor-pointer py-3.5 text-base has-focus-visible:outline-2 has-focus-visible:outline-offset-3 has-focus-visible:outline-(--focus)"
			>
				{PDF.pages.add}
				<input
					type="file"
					accept="application/pdf,.pdf,image/*"
					multiple
					class="sr-only"
					onchange={(event) => {
						void add(event.currentTarget.files);
						event.currentTarget.value = '';
					}}
				/>
			</label>
		{/if}

		<!-- A file that needs its password, or couldn't be opened: said where its pages would be. -->
		{#each problems as file (file)}
			<div class="mt-4 border-t border-border pt-4">
				{#if file.state === 'locked'}
					<p class="flex gap-2 text-sm font-medium">
						<Caution class="mt-0.5 shrink-0" />{PDF.locked.needs(file.name)}
					</p>
					<div class="mt-2 flex gap-2">
						<label class="sr-only" for="password-{files.indexOf(file)}">{PDF.locked.label}</label>
						<input
							id="password-{files.indexOf(file)}"
							type="password"
							autocomplete="off"
							placeholder={PDF.locked.label}
							bind:value={file.typed}
							onkeydown={(event) => {
								if (event.key === 'Enter') {
									event.preventDefault();
									file.tryPassword?.(file.typed ?? '');
								}
							}}
							class="{field} max-w-60"
						/>
						<button
							type="button"
							onclick={() => file.tryPassword?.(file.typed ?? '')}
							class={smallButtonOnPage}>{PDF.locked.open}</button
						>
					</div>
					<p class="mt-1.5 text-sm {file.wrong ? 'font-medium' : 'text-muted'}" aria-live="polite">
						{file.wrong ? PDF.locked.wrong : PDF.locked.note}
					</p>
				{:else}
					<p class="flex gap-2 text-sm font-medium">
						<Caution class="mt-0.5 shrink-0" />{PDF.notes.notOpened(file.name)}
					</p>
				{/if}
			</div>
		{/each}

		{#if pages.length || readingAny}
			<p class="mt-3 min-h-5 text-sm text-muted" aria-live="polite">
				{#if liftedNumber}{PDF.pages.moving(liftedNumber)}{:else if readingAny}{PDF.pages
						.reading}{:else if pages.length > 1}{PDF.pages.howToMove}{/if}
			</p>
			<ol class="mt-2 grid grid-cols-3 gap-x-3 gap-y-5 sm:grid-cols-4 xl:grid-cols-5">
				{#each pages as page, at (page.id)}
					{@const from = files[page.file].name}
					<li class="flex flex-col items-center" animate:flip={moving()}>
						<!-- The page itself: pressing it lifts it to be moved; while another is lifted, pressing
						     it puts that one down here. -->
						<button
							type="button"
							draggable="true"
							ondragstart={(event) => {
								lifted = page.id;
								event.dataTransfer?.setData('text/plain', String(page.id));
							}}
							ondragover={(event) => {
								if (lifted !== undefined && !event.dataTransfer?.types.includes('Files'))
									event.preventDefault();
							}}
							ondrop={(event) => {
								if (lifted === undefined || event.dataTransfer?.files.length) return;
								event.preventDefault();
								event.stopPropagation();
								if (lifted !== page.id) putBefore(at);
								else lifted = undefined;
							}}
							ondragend={() => (lifted = undefined)}
							onclick={() => press(page.id)}
							aria-pressed={lifted === page.id}
							aria-label={lifted !== undefined && lifted !== page.id
								? PDF.pages.putBefore(at + 1)
								: `${PDF.pages.page(at + 1, from)}. ${PDF.pages.lift}`}
							class="relative flex aspect-[210/297] w-full cursor-pointer items-center justify-center rounded-sm transition-transform duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--focus) motion-reduce:transition-none {lifted ===
							page.id
								? '-translate-y-1.5 -rotate-3'
								: ''} {lifted !== undefined && lifted !== page.id
								? 'outline-2 outline-offset-2 outline-control-border outline-dashed'
								: ''}"
						>
							<!-- The sheet, the page's own shape, with its number on it; turned as a whole, the
							     number kept upright. -->
							<span
								class="relative block border border-border transition-transform duration-200 ease-out motion-reduce:transition-none {page.shape ===
								'landscape'
									? 'aspect-[297/210] w-full'
									: page.shape === 'square'
										? 'aspect-square w-full'
										: 'aspect-[210/297] h-full'} {page.thumbnail
									? 'bg-white'
									: 'bg-elevated'} {turns[page.turn]} {(page.turn === 90 || page.turn === 270) &&
								page.shape === 'portrait'
									? 'scale-[0.71]'
									: ''} {lifted === page.id ? 'shadow-xl' : ''}"
							>
								{#if page.thumbnail}
									<img
										src={page.thumbnail}
										alt=""
										draggable="false"
										class="size-full object-contain"
									/>
								{/if}
								<!-- Graphite, like Split bill's bar: dark on the white sheet in either theme. -->
								<span
									class="graphite-bar absolute bottom-1 left-1 rounded-full px-2 text-xs font-bold tabular-nums {counter[
										page.turn
									]}"
									aria-hidden="true">{at + 1}</span
								>
							</span>
						</button>
						<div class="mt-2 flex gap-2">
							<button type="button" onclick={() => turn(page.id)} class={control}>
								<svg
									viewBox="0 0 20 20"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									class="size-4"
									aria-hidden="true"
								>
									<path d="M15.5 9.5A6 6 0 1 1 13 4.6" stroke-linecap="round" />
									<path d="M13.5 1.5v3.5H17" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
								<span class="sr-only">{PDF.pages.turn}: {PDF.pages.page(at + 1, from)}</span>
							</button>
							<button type="button" onclick={() => remove(page.id)} class={control}>
								<svg
									viewBox="0 0 20 20"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									class="size-4"
									aria-hidden="true"
								>
									<path d="M5 5l10 10M15 5L5 15" stroke-linecap="round" />
								</svg>
								<span class="sr-only">{PDF.pages.remove}: {PDF.pages.page(at + 1, from)}</span>
							</button>
						</div>
					</li>
				{/each}
				{#if lifted !== undefined}
					<li class="flex flex-col items-center">
						<button
							type="button"
							onclick={() => putBefore(pages.length)}
							class="flex aspect-[210/297] w-full items-center justify-center rounded-sm px-2 text-center text-sm font-medium outline-2 outline-offset-2 outline-control-border outline-dashed focus-visible:outline-(--focus) focus-visible:outline-solid"
						>
							{PDF.pages.putAtEnd}
						</button>
						<button
							type="button"
							onclick={() => (lifted = undefined)}
							class="mt-2 min-h-9 text-sm font-medium text-muted underline underline-offset-4 hover:text-text pointer-coarse:min-h-11"
							>{PDF.pages.cancel}</button
						>
					</li>
				{/if}
			</ol>
		{/if}

		{#each made?.notes ?? [] as note (note)}
			<p class="mt-4 flex gap-2 text-sm font-medium"><Caution class="mt-0.5 shrink-0" />{note}</p>
		{/each}

		<!-- What will be saved and Save, held at the bottom of the screen while the pages scroll. -->
		{#if pages.length}
			<div
				class="sticky bottom-0 z-10 -mx-5 mt-6 flex items-center gap-4 border-t border-border bg-bg px-5 pt-3.5 pb-[max(1rem,env(safe-area-inset-bottom))] sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0"
			>
				<div class="min-w-0 flex-1" aria-live="polite">
					<p class="font-bold tabular-nums">
						{saveAs === 'each'
							? PDF.result.files(readyPages.length)
							: PDF.result.pages(readyPages.length)}
						·
						{#if working || !made}{PDF.result.working}{:else}{formatBytes(made.size)}{/if}
					</p>
					<p
						class="min-h-5 text-sm tabular-nums {made?.tooBig && !working
							? 'font-medium'
							: 'text-muted'}"
					>
						{#if !working && made?.tooBig}{PDF.result.over(
								`${amount.trim()} ${unit}`,
								formatBytes(made.tooBig)
							)}{:else if !working && made?.before}{PDF.result.was(formatBytes(made.before))}{/if}
					</p>
				</div>
				<button
					type="button"
					onclick={() => void save()}
					aria-disabled={working || needsPassword || !made?.files.length}
					class="{primaryButton} px-7 py-3.5 text-base aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
				>
					{saveAs === 'each' ? PDF.result.saveEach(readyPages.length) : PDF.result.save}
				</button>
			</div>
		{/if}
		<p class="mt-1 min-h-10 pb-16 text-sm" role="status">
			{status || (canShareFiles && pages.length ? PDF.shareHint : '')}
		</p>
	</section>
</form>
