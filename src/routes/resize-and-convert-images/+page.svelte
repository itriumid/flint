<script lang="ts">
	import { onMount } from 'svelte';
	import Caution from '#lib/Caution.svelte';
	import Seo from '#lib/Seo.svelte';
	import ToolTitle from '#lib/ToolTitle.svelte';
	import { IMAGES, SITE_URL, TITLE_SUFFIX } from '#lib/content.js';
	import {
		fit,
		formatBytes,
		hasQuality,
		limitScale,
		outputName,
		outputType,
		targetBytes,
		type Format,
		type OutputType,
		type Unit
	} from '#lib/images.js';
	import { readExif, uprightExif, writeExif } from '#lib/metadata.js';
	import {
		checkbox,
		checkRow,
		field,
		label,
		primaryButton,
		smallButtonOnPage
	} from '#lib/styles.js';

	// The settings, the same for every image.
	let amount = $state('');
	let unit: Unit = $state('KB');
	let format: Format = $state('jpeg');
	let keepDetails = $state(false);
	let maxWidth = $state('');
	let maxHeight = $state('');
	let quality = $state(85);

	const target = $derived(targetBytes(amount, unit));
	const limits = $derived({
		width: Number(maxWidth) || undefined,
		height: Number(maxHeight) || undefined
	});

	// What this browser can write: JPEG and PNG always; WebP only where a canvas really makes one
	// (it quietly hands back a PNG where it can't), so the choice is offered only where it works.
	let canWrite: OutputType[] = $state(['image/jpeg', 'image/png']);
	onMount(() => {
		const probe = document.createElement('canvas');
		probe.width = probe.height = 1;
		probe.toBlob((blob) => {
			if (blob?.type === 'image/webp') canWrite = ['image/jpeg', 'image/webp', 'image/png'];
		}, 'image/webp');
	});
	const formats = $derived(
		(['jpeg', 'webp', 'png', 'same'] as const).filter(
			(each) => each === 'same' || canWrite.includes(`image/${each}`)
		)
	);

	interface Item {
		id: number;
		file: File;
		/** The original, for its thumbnail: a link to it in this page's memory, never sent. */
		preview: string;
		state: 'working' | 'done' | 'failed';
		output?: {
			blob: Blob;
			name: string;
			size: number;
			width: number;
			height: number;
			fits: boolean;
		};
		notes: string[];
	}
	let items: Item[] = $state([]);
	let nextId = 0;

	function add(files: FileList | File[] | null) {
		for (const file of files ?? []) {
			if (!file.type.startsWith('image/') && file.type !== '') continue;
			items.push({
				id: nextId++,
				file,
				preview: URL.createObjectURL(file),
				state: 'working',
				notes: []
			});
		}
		redo();
	}

	function remove(id: number) {
		const index = items.findIndex((item) => item.id === id);
		if (index === -1) return;
		URL.revokeObjectURL(items[index].preview);
		items.splice(index, 1);
		redo();
	}

	// Every change of settings redoes every image, one at a time, a moment after the last change,
	// so typing "200" doesn't make three rounds; an older round stops as soon as a newer one starts.
	let round = 0;
	let timer: ReturnType<typeof setTimeout> | undefined;
	function redo() {
		// At once, not when the round starts: until then the rows' results are for the old settings,
		// and Save mustn't hand those over.
		for (const item of items) item.state = 'working';
		clearTimeout(timer);
		timer = setTimeout(() => void work(++round), 300);
	}
	$effect(() => {
		// The settings each image is made with: read here, so changing any of them redoes them all.
		void [target, format, keepDetails, limits.width, limits.height, quality, canWrite];
		redo();
	});

	async function work(current: number) {
		const taken = new Set<string>();
		for (const item of items) item.state = 'working';
		for (const item of items) {
			if (current !== round) return;
			try {
				const made = await make(item.file, taken);
				if (current !== round) return;
				item.output = made.output;
				item.notes = made.notes;
				item.state = 'done';
			} catch {
				if (current !== round) return;
				item.output = undefined;
				item.notes = [IMAGES.notes.notOpened];
				item.state = 'failed';
			}
		}
	}

	/**
	 * One image, made the way the settings say: decoded and turned upright, drawn on a canvas at
	 * the scale the limits allow, saved as the format chosen at the best quality under the target,
	 * with the original's details written back in only if asked.
	 */
	async function make(file: File, taken: Set<string>) {
		const bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' });
		try {
			const type = outputType(format, file.type, canWrite);
			const notes: string[] = [];

			let details: Uint8Array | undefined;
			if (keepDetails) {
				const found = readExif(new Uint8Array(await file.arrayBuffer()), file.type);
				if (found) details = uprightExif(found);
				else notes.push(IMAGES.notes.noDetails);
			}
			// Kept in its own format, an image already under the size to fit isn't made larger by
			// being saved again: its own size is the ceiling. The details take room too, with a little to spare.
			const ceiling = target && type === file.type ? Math.min(target, file.size) : target;
			const room = ceiling && details ? ceiling - details.length - 64 : ceiling;

			const canvas = document.createElement('canvas');
			const context = canvas.getContext('2d');
			if (!context) throw new Error('No canvas');
			const draw = (scale: number) => {
				canvas.width = Math.max(1, Math.round(bitmap.width * scale));
				canvas.height = Math.max(1, Math.round(bitmap.height * scale));
				context.clearRect(0, 0, canvas.width, canvas.height);
				// A JPEG has no see-through parts: they'd come out black, so they're made white first.
				if (type === 'image/jpeg') {
					context.fillStyle = '#ffffff';
					context.fillRect(0, 0, canvas.width, canvas.height);
				}
				context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
			};
			const encode = (scale: number, tried: number) =>
				new Promise<{ size: number; result: Blob }>((done, fail) => {
					draw(scale);
					canvas.toBlob(
						(blob) => (blob ? done({ size: blob.size, result: blob }) : fail(new Error('No blob'))),
						type,
						tried
					);
				});

			const startScale = limitScale(bitmap.width, bitmap.height, limits.width, limits.height);
			const fitted = await fit(encode, {
				target: room !== undefined && room > 0 ? room : ceiling,
				startScale,
				quality: quality / 100,
				lossless: !hasQuality(type)
			});
			const width = Math.max(1, Math.round(bitmap.width * fitted.scale));
			const height = Math.max(1, Math.round(bitmap.height * fitted.scale));

			let blob = fitted.result;
			if (details) {
				const bytes = writeExif(new Uint8Array(await blob.arrayBuffer()), type, details, {
					width,
					height
				});
				blob = new Blob([new Uint8Array(bytes)], { type });
			}

			if (type === 'image/jpeg' && file.type !== 'image/jpeg' && (await seeThrough(bitmap))) {
				notes.push(IMAGES.notes.transparent);
			}
			if (target && !fitted.fits && blob.size > target) {
				notes.push(IMAGES.notes.tooBig(formatBytes(blob.size)));
			} else if (blob.size > file.size) {
				notes.push(IMAGES.notes.larger);
			}

			return {
				output: {
					blob,
					name: outputName(file.name, type, taken),
					size: blob.size,
					width,
					height,
					fits: fitted.fits
				},
				notes
			};
		} finally {
			bitmap.close();
		}
	}

	/** Whether any of an image is see-through, checked on a small copy so it's quick. */
	async function seeThrough(bitmap: ImageBitmap): Promise<boolean> {
		const side = 64;
		const canvas = new OffscreenCanvas(side, side);
		const context = canvas.getContext('2d');
		if (!context) return false;
		context.drawImage(bitmap, 0, 0, side, side);
		const { data } = context.getImageData(0, 0, side, side);
		for (let at = 3; at < data.length; at += 4) if (data[at] < 255) return true;
		return false;
	}

	const ready = $derived(items.filter((item) => item.state === 'done' && item.output));
	/** The images that will be saved: every one but those this browser couldn't open. */
	const saving = $derived(items.filter((item) => item.state !== 'failed').length);

	// On a touch screen that can share files, Save all opens the share sheet: said before the tap,
	// in the line under it, since afterwards is too late to say which choice keeps them.
	let canShareFiles = $state(false);
	onMount(() => {
		const probe = new File([new Uint8Array(1)], 'probe.jpg', { type: 'image/jpeg' });
		canShareFiles =
			matchMedia('(pointer: coarse)').matches && Boolean(navigator.canShare?.({ files: [probe] }));
	});
	const working = $derived(items.some((item) => item.state === 'working'));

	// What a save did, said under the buttons: a download can land with nothing on screen saying so.
	let status = $state('');
	function download(blob: Blob, name: string) {
		const url = URL.createObjectURL(blob);
		Object.assign(document.createElement('a'), { href: url, download: name }).click();
		setTimeout(() => URL.revokeObjectURL(url), 1000);
	}
	function saveOne(item: Item) {
		// Only a finished image: while it's being redone, what it holds is for the old settings.
		if (item.state !== 'done' || !item.output) return;
		download(item.output.blob, item.output.name);
		status = IMAGES.saved(item.output.name);
	}
	/**
	 * Every finished image. On a touch screen that can share files, through the share sheet, where
	 * "Save Image" puts them in the phone's photos at once; elsewhere, one download each.
	 */
	async function saveAll() {
		if (working || !ready.length) return;
		const files = ready.map(
			(item) => new File([item.output!.blob], item.output!.name, { type: item.output!.blob.type })
		);
		if (ready.length > 1 && canShareFiles && navigator.canShare?.({ files })) {
			try {
				await navigator.share({ files });
				status = IMAGES.shared;
				return;
			} catch (problem) {
				if ((problem as Error).name === 'AbortError') return;
			}
		}
		for (const [index, item] of ready.entries()) {
			setTimeout(() => download(item.output!.blob, item.output!.name), index * 300);
		}
		status =
			ready.length === 1 ? IMAGES.saved(ready[0].output!.name) : IMAGES.savedAll(ready.length);
	}

	// Dropped on the page from a desktop, as well as picked.
	let dragging = $state(false);
	function drop(event: DragEvent) {
		event.preventDefault();
		dragging = false;
		add(event.dataTransfer?.files ?? null);
	}

	/** A choice in a row of pills, the footer's theme choice's look: graphite when chosen, not pink. */
	const pill =
		'flex min-h-9 items-center rounded-full px-3.5 max-[25rem]:px-2.5 text-sm transition-colors peer-checked:bg-text peer-checked:font-semibold peer-checked:text-bg peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-(--focus) hover:text-text motion-reduce:transition-none pointer-coarse:min-h-11';
</script>

<Seo
	title="{IMAGES.name}{TITLE_SUFFIX}"
	description={IMAGES.description}
	path={IMAGES.path}
	structuredData={{
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		name: IMAGES.name,
		description: IMAGES.description,
		url: `${SITE_URL}${IMAGES.path}`,
		applicationCategory: 'MultimediaApplication',
		operatingSystem: 'Any',
		isAccessibleForFree: true,
		offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
		publisher: { '@type': 'Organization', name: 'Itrium', url: 'https://itrium.id' }
	}}
/>

<ToolTitle
	tool="images"
	title={IMAGES.name}
	introduction={IMAGES.introduction}
	width="max-w-xl lg:max-w-6xl"
/>

<!-- No card: the settings, then under a plain line the images, each a row between hairlines. From
     1024px the images have their own column beside the settings. -->
<form
	class="mx-auto max-w-xl px-5 pt-4 pb-20 sm:px-8 lg:grid lg:max-w-6xl lg:grid-cols-2 lg:items-start"
	onsubmit={(event) => event.preventDefault()}
>
	<div class="space-y-5 pb-6 lg:pr-16 lg:pb-0">
		<div>
			<label for="amount" class={label}>{IMAGES.target.label}</label>
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
					<legend class="sr-only">{IMAGES.target.unitsLabel}</legend>
					{#each ['KB', 'MB'] as const as each (each)}
						<label class="relative cursor-pointer">
							<input type="radio" bind:group={unit} value={each} class="peer sr-only" />
							<span class={pill}>{IMAGES.target.units[each]}</span>
						</label>
					{/each}
				</fieldset>
			</div>
			<p id="amount-hint" class="mt-1.5 text-sm text-muted">{IMAGES.target.hint}</p>
		</div>

		<fieldset>
			<legend class={label}>{IMAGES.format.label}</legend>
			<div class="inline-flex flex-wrap gap-1 rounded-3xl border border-control-border p-1">
				{#each formats as each (each)}
					<label class="relative cursor-pointer">
						<input type="radio" bind:group={format} value={each} class="peer sr-only" />
						<span class={pill}>{IMAGES.format[each]}</span>
					</label>
				{/each}
			</div>
		</fieldset>

		<div>
			<label class={checkRow}>
				<input type="checkbox" bind:checked={keepDetails} class={checkbox} />
				{IMAGES.details.keep}
			</label>
			<!-- One line either way, so ticking the box moves nothing under the finger. -->
			<p class="text-sm text-muted">
				{keepDetails ? IMAGES.details.kept : IMAGES.details.removed}
			</p>
		</div>

		<details class="group">
			<summary
				class="inline-flex min-h-9 cursor-pointer list-none items-center gap-2 text-sm font-medium underline underline-offset-4 pointer-coarse:min-h-11"
			>
				{IMAGES.more.label}
			</summary>
			<div class="mt-3 grid grid-cols-2 gap-3">
				<div>
					<label for="max-width" class={label}>{IMAGES.more.width}</label>
					<input
						id="max-width"
						bind:value={maxWidth}
						inputmode="numeric"
						autocomplete="off"
						placeholder={IMAGES.more.pixels}
						class="{field} tabular-nums"
					/>
				</div>
				<div>
					<label for="max-height" class={label}>{IMAGES.more.height}</label>
					<input
						id="max-height"
						bind:value={maxHeight}
						inputmode="numeric"
						autocomplete="off"
						placeholder={IMAGES.more.pixels}
						class="{field} tabular-nums"
					/>
				</div>
			</div>
			<div class="mt-4">
				<label for="quality" class={label}>{IMAGES.more.quality}</label>
				{#if target}
					<p class="text-sm text-muted">{IMAGES.more.qualityFound}</p>
				{:else}
					<div class="flex items-center gap-3">
						<input
							id="quality"
							type="range"
							min="40"
							max="100"
							bind:value={quality}
							class="w-full accent-text"
						/>
						<span class="w-10 text-right text-sm tabular-nums">{quality}%</span>
					</div>
				{/if}
			</div>
		</details>
	</div>

	<!-- The images: picked, or dropped anywhere in this part from a desktop. -->
	<section
		aria-labelledby="images-heading"
		class="border-t border-border pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-16 {dragging
			? 'outline-2 outline-offset-8 outline-(--focus)'
			: ''}"
		ondragover={(event) => {
			event.preventDefault();
			dragging = true;
		}}
		ondragleave={() => (dragging = false)}
		ondrop={drop}
	>
		<div class="flex items-center justify-between gap-4">
			<h2 id="images-heading" class="text-2xl font-extrabold tracking-[-0.03em]">
				{IMAGES.images.heading}
			</h2>
			<label
				class="{smallButtonOnPage} cursor-pointer has-focus-visible:outline-2 has-focus-visible:outline-offset-3 has-focus-visible:outline-(--focus)"
			>
				{items.length ? IMAGES.images.addMore : IMAGES.images.add}
				<input
					type="file"
					accept="image/*"
					multiple
					class="sr-only"
					onchange={(event) => {
						add(event.currentTarget.files);
						event.currentTarget.value = '';
					}}
				/>
			</label>
		</div>

		{#if !items.length}
			<p class="mt-3 text-sm text-muted">
				{IMAGES.images.empty}
				<span class="hidden pointer-fine:inline">{IMAGES.images.drop}</span>
			</p>
		{:else}
			<ul class="mt-3 border-t border-border">
				{#each items as item (item.id)}
					<!-- At least as tall as its Save and Remove and one note, so a row doesn't grow or shrink
					     when its image is done or redone. -->
					<li
						class="flex min-h-[7.25rem] items-start gap-3 border-b border-border py-3 pointer-coarse:min-h-[7.75rem]"
					>
						<!-- A file the browser couldn't open has no picture to show: an empty tile, not the
						     browser's broken-image icon. -->
						{#if item.state === 'failed'}
							<div class="size-14 shrink-0 rounded-md bg-elevated"></div>
						{:else}
							<img
								src={item.preview}
								alt=""
								class="size-14 shrink-0 rounded-md bg-elevated object-cover"
							/>
						{/if}
						<div class="min-w-0 flex-1">
							<p class="truncate text-sm font-semibold">{item.file.name}</p>
							<p class="text-sm text-muted tabular-nums">
								{#if item.state === 'working'}
									{formatBytes(item.file.size)} → {IMAGES.images.working}
								{:else if item.output}
									{formatBytes(item.file.size)} →
									<span class="font-semibold text-text">{formatBytes(item.output.size)}</span>
									· {item.output.width} × {item.output.height}
								{/if}
							</p>
							<!-- Something to check, with the warning sign; or, plainly, that there was nothing to keep.
						     Only for a finished image: a note about the old settings would mislead. -->
							{#each item.state === 'working' ? [] : item.notes as note (note)}
								{#if note === IMAGES.notes.noDetails}
									<p class="mt-1 text-sm text-muted">{note}</p>
								{:else}
									<p class="mt-1 flex gap-2 text-sm font-medium">
										<Caution class="mt-0.5 shrink-0" />{note}
									</p>
								{/if}
							{/each}
						</div>
						<div class="flex shrink-0 flex-col items-end gap-1">
							<!-- There from the first moment, so nothing moves when the image is done; it can't
							     be pressed until then. -->
							{#if items.length > 1}
								<button
									type="button"
									onclick={() => saveOne(item)}
									aria-disabled={item.state !== 'done'}
									class="{smallButtonOnPage} h-8! aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
								>
									{IMAGES.images.save}<span class="sr-only"> {item.file.name}</span>
								</button>
							{/if}
							<button
								type="button"
								onclick={() => remove(item.id)}
								class="min-h-9 text-sm font-medium text-muted underline underline-offset-4 hover:text-text pointer-coarse:min-h-11"
							>
								{IMAGES.images.remove}<span class="sr-only"> {item.file.name}</span>
							</button>
						</div>
					</li>
				{/each}
			</ul>
			<button
				type="button"
				onclick={() => void saveAll()}
				aria-disabled={working || !ready.length}
				class="{primaryButton} mt-5 w-full py-3.5 text-base aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
			>
				{IMAGES.images.saveAll(saving)}
			</button>
		{/if}
		<p class="mt-3 min-h-10 text-sm" role="status">
			{status || (canShareFiles && items.length > 1 ? IMAGES.shareHint : '')}
		</p>
	</section>
</form>
