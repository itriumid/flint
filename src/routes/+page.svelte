<script lang="ts">
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import Arrow from '#lib/Arrow.svelte';
	import Seo from '#lib/Seo.svelte';
	import {
		DESCRIPTION,
		ELSEWHERE,
		ELSEWHERE_HEADING,
		HEADING,
		IN_PROGRESS,
		MAP,
		PROMISE_HEADING,
		SOURCE_LABEL,
		SOURCE_URL,
		SPLIT_BILL,
		TITLE,
		WHATSAPP
	} from '#lib/content.js';
	import { actionLine, primaryButton, secondaryButtonOnPage } from '#lib/styles.js';
	import { loadDraft } from '#lib/draft.js';
	import { calculateBill, formatMoney } from '#lib/split-bill.js';
	import { sharedFromHere } from '#lib/share.js';

	// What this visitor already has, read from what the browser keeps, after the page loads:
	// nothing new is kept, and nothing is sent anywhere. The page is the same for everyone until
	// then. A bill in progress lives on the device, so it appears inside the territory, at the Split
	// bill place; a bill shared from this device took the road out, so it is marked on that road.
	// The two are independent: someone can have both.
	let draft: string | undefined = $state();
	let shared: { text: string; action: string; href: string } | undefined = $state();
	onMount(() => {
		const kept = loadDraft();
		if (kept) {
			const { bill } = kept;
			const total = bill.items.length
				? formatMoney(calculateBill(bill).grandTotal, bill.currencyCode)
				: undefined;
			draft = IN_PROGRESS.draft(bill.people.length, bill.items.length, total);
		}
		const ids = sharedFromHere();
		if (ids.length) {
			shared = {
				text: IN_PROGRESS.shared(ids.length),
				action: ids.length === 1 ? IN_PROGRESS.openIt : IN_PROGRESS.openLatest,
				href: `${resolve('/split-bill')}#bill=${ids[0]}`
			};
		}
	});

	// The map's drawing. Every road is a dashed line in a 1rem column, the same column as its place's
	// dot, so it runs unbroken from the place, across the border, to what it reaches. WhatsApp's
	// place sits down and to the right of Split bill's (a stagger, as on a map), so Split bill's road
	// passes beside it. The place names are always underlined: they're the ways in.
	const placeName =
		'text-2xl font-bold tracking-tight underline decoration-2 underline-offset-[6px] hover:decoration-[3px] sm:text-3xl';
	// The same column as a place's dot, so a road keeps one line where it crosses the border.
	const roadColumn = 'flex w-4 shrink-0 flex-col items-center';
	const road = 'border-l-[3px] border-dashed border-text';
	const placeColumn = 'flex w-4 shrink-0 flex-col items-center';
	const dot = 'mt-3 size-4 shrink-0 rounded-full bg-text sm:mt-4';
	const stagger = 'ml-16 sm:ml-40';
	const roadLabel = 'py-4 text-sm font-semibold max-w-64';
	// Where a road ends: a node outside the line, in the page's color, outlined in muted gray.
	const node =
		'flex h-16 w-28 shrink-0 items-center justify-center rounded-lg border-2 border-muted bg-bg text-sm text-muted';
	const arrowMove = 'transition-transform duration-200 motion-safe:group-hover:translate-x-1';
</script>

<Seo title={TITLE} description={DESCRIPTION} path="/" />

<!-- Split bill's road label. On phones the bill shared from this device is marked under it, in
     a space kept for everyone so nothing below moves when it appears; from small screens up it sits
     beside our server instead, where the room is to the side, not below. -->
{#snippet shareLabel(withMark: boolean)}
	<div class={roadLabel}>
		<p>{MAP.roads.share.label}</p>
		{#if withMark}
			<p class="mt-2 min-h-10 font-normal">{@render sharedMark()}</p>
		{/if}
	</div>
{/snippet}

{#snippet sharedMark()}
	{#if shared}
		{shared.text}
		<a href={shared.href} class="group {actionLine}">{shared.action}<Arrow class={arrowMove} /></a>
	{/if}
{/snippet}

<!-- The index is one atlas plate: the visitor's device as a territory inside one border, the tools
     as places in it, and the only ways out drawn as roads, each labelled with what it carries; a
     legend says the same as facts. On the header's own grid: on wide screens the name and the
     legend sit on the left and the plate on the right; on phones, name, plate, then legend. -->
<div
	class="mx-auto grid max-w-5xl px-5 pt-6 pb-16 sm:px-8 sm:pt-10 lg:grid-cols-[minmax(0,1fr)_34rem] lg:grid-rows-[auto_1fr_auto] lg:gap-x-16 lg:pt-14 lg:pb-24"
>
	<div class="lg:col-start-1 lg:row-start-1">
		<h1 class="text-5xl font-bold tracking-tight sm:text-7xl">{HEADING}</h1>
		<p class="mt-3 max-w-sm text-lg leading-snug text-muted sm:text-xl">{MAP.intro}</p>
	</div>

	<section
		class="mt-10 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0"
		aria-labelledby="map-heading"
	>
		<!-- The territory: one border line around everything that stays on the device. -->
		<div
			class="rounded-[4rem_2rem_4.5rem_2.5rem] border-2 border-text bg-elevated px-6 pt-6 sm:px-8 dark:bg-surface"
		>
			<h2 id="map-heading" class="font-bold">{MAP.region}</h2>
			<div class="mt-6 flex gap-4">
				<span class={placeColumn} aria-hidden="true"
					><span class={dot}></span><span class="mt-2 flex-1 {road}"></span></span
				>
				<div class="min-w-0 flex-1">
					<h3><a href={resolve(SPLIT_BILL.path)} class={placeName}>{SPLIT_BILL.name}</a></h3>
					<!-- With a bill in progress, the place says that bill: it lives here, on the device.
					     The same three-line space either way, so nothing moves when it arrives. -->
					<p class="mt-2 min-h-18 max-w-xs text-muted">{draft ?? SPLIT_BILL.line}</p>
					<a href={resolve(SPLIT_BILL.path)} class="mt-4 {primaryButton}"
						>{draft ? IN_PROGRESS.continue : MAP.start}</a
					>
					<div class="mt-10 flex gap-4 {stagger}">
						<span class={placeColumn} aria-hidden="true"
							><span class={dot}></span><span class="mt-2 flex-1 {road}"></span></span
						>
						<div class="min-w-0 flex-1 pb-10">
							<h3><a href={resolve(WHATSAPP.path)} class={placeName}>{WHATSAPP.name}</a></h3>
							<p class="mt-2 max-w-xs text-muted">{WHATSAPP.line}</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Outside the line: the roads go on to what they reach, each labelled beside the line with
		     what it carries. WhatsApp's road ends first; Split bill's runs on past it to our server.
		     From small screens up, Split bill's label sits beside its road level with WhatsApp's
		     (the 9rem between the two roads holds it), so our server stays in the first viewport; on
		     phones, where that gap is too narrow, it follows WhatsApp's node. -->
		<!-- A transparent border as wide as the territory's, so the roads keep their line across it. -->
		<div class="border-x-2 border-transparent px-6 sm:px-8">
			<div class="flex gap-4">
				<span class={roadColumn} aria-hidden="true"><span class="flex-1 {road}"></span></span>
				<div class="min-w-0 flex-1 pb-8 sm:flex sm:gap-4 sm:pb-4">
					<div class="hidden w-36 shrink-0 sm:block">{@render shareLabel(false)}</div>
					<div class="ml-16 sm:ml-0">
						<div class="flex gap-4">
							<span class={roadColumn} aria-hidden="true"><span class="flex-1 {road}"></span></span>
							<p class={roadLabel}>{MAP.roads.chat.label}</p>
						</div>
						<p class={node}>{MAP.roads.chat.to}</p>
					</div>
				</div>
			</div>
			<div class="flex gap-4 sm:hidden">
				<span class={roadColumn} aria-hidden="true"><span class="flex-1 {road}"></span></span>
				{@render shareLabel(true)}
			</div>
			<div class="flex items-center gap-4">
				<p class={node}>{MAP.roads.share.to}</p>
				<p class="hidden max-w-sm text-sm sm:block">{@render sharedMark()}</p>
			</div>
		</div>
	</section>

	<!-- The legend, in the margin column: the drawing's marks, said as facts. -->
	<section
		class="mt-12 border-t-2 border-text pt-4 lg:col-start-1 lg:row-start-2 lg:mt-14 lg:self-start"
		aria-labelledby="legend-heading"
	>
		<h2 id="legend-heading" class="font-bold">{PROMISE_HEADING}</h2>
		<ul class="mt-4 space-y-3">
			<li class="grid grid-cols-[2.5rem_1fr] items-center gap-3">
				<span
					class="h-6 rounded-md border-2 border-text bg-elevated dark:bg-surface"
					aria-hidden="true"
				></span>
				{MAP.legend.inside}
			</li>
			<li class="grid grid-cols-[2.5rem_1fr] items-center gap-3">
				<span class="border-t-[3px] border-dashed border-text" aria-hidden="true"></span>
				{MAP.legend.road}
			</li>
			<li class="grid grid-cols-[2.5rem_1fr] items-center gap-3">
				<span class="border-t-2 border-muted" aria-hidden="true"></span>
				{MAP.legend.none}
			</li>
		</ul>
		<p class="mt-4 text-muted">{MAP.offline}</p>
	</section>

	<!-- Off the map: the bigger tools on sites of their own, and the source that proves the map. -->
	<div
		class="mt-12 flex flex-wrap items-end justify-between gap-x-10 gap-y-6 border-t border-border pt-6 lg:col-span-2 lg:row-start-3 lg:mt-16"
	>
		<div>
			<h2 class="font-bold">{ELSEWHERE_HEADING}</h2>
			{#each ELSEWHERE as app (app.url)}
				<p class="mt-2">
					<a href={app.url} rel="external" class="group {actionLine}"
						>{app.label}<Arrow class={arrowMove} /></a
					>
					<span class="block text-sm text-muted">{new URL(app.url).host}</span>
				</p>
			{/each}
		</div>
		<a href={SOURCE_URL} rel="external" class="group {secondaryButtonOnPage}"
			>{SOURCE_LABEL}<Arrow class={arrowMove} /></a
		>
	</div>
</div>
