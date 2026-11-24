<script lang="ts">
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import Arrow from '#lib/Arrow.svelte';
	import Seo from '#lib/Seo.svelte';
	import ToolSymbol from '#lib/ToolSymbol.svelte';
	import {
		DESCRIPTION,
		ELSEWHERE,
		ELSEWHERE_HEADING,
		HEADING,
		INDEX,
		IN_PROGRESS,
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
	// then. A bill in progress is said in Split bill's half, since it lives on the device; a bill
	// shared from this device is what left it, so it is said under what leaves.
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

	// The two halves. The fields run to the screen's edges, but what's in them lines up with the
	// header's 72rem column: the outer padding is whatever lies beyond that column (100cqw is the
	// page's width without a scrollbar), the inner one a gutter either side of the seam. Written out
	// in full, so Tailwind finds the classes.
	const tools = $derived([
		{
			id: 'split-bill',
			name: SPLIT_BILL.name,
			path: SPLIT_BILL.path,
			does: draft ?? SPLIT_BILL.line,
			leaves: INDEX.leaves.splitBill,
			start: draft ? IN_PROGRESS.continue : INDEX.starts.splitBill,
			field: 'inverse-field md:pr-12 lg:pr-16 md:pl-[max(2rem,calc((100cqw_-_72rem)/2_+_2rem))]'
		},
		{
			id: 'whatsapp',
			name: WHATSAPP.name,
			path: WHATSAPP.path,
			does: WHATSAPP.line,
			leaves: INDEX.leaves.whatsapp,
			start: INDEX.starts.whatsapp,
			field:
				'bg-elevated dark:bg-surface md:pl-12 lg:pl-16 md:pr-[max(2rem,calc((100cqw_-_72rem)/2_+_2rem))]'
		}
	] as const);

	/** A half's start, at the scale of the half, in the primary button's colors. */
	const start = primaryButton.replace(
		'px-6 py-3 text-sm font-semibold',
		'px-7 py-4 text-lg font-bold'
	);
	const arrowMove = 'transition-transform duration-200 motion-safe:group-hover:translate-x-1';
</script>

<Seo title={TITLE} description={DESCRIPTION} path="/" />

<!-- The index is the two tools, split edge to edge: one half of the screen each, with Flint's name
     above and what never leaves the device below. -->
<div
	class="mx-auto flex max-w-6xl flex-wrap items-baseline gap-x-10 gap-y-2 px-5 pt-2 pb-8 sm:px-8 sm:pt-6 sm:pb-10 lg:pt-4 lg:pb-8"
>
	<!-- A step below the tools' names at every width, so the two halves lead the page. -->
	<h1
		class="text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl"
	>
		{HEADING}
	</h1>
	<p class="max-w-xl text-lg leading-snug text-muted sm:text-2xl">{INDEX.intro}</p>
</div>

<div class="grid md:grid-cols-2">
	{#each tools as tool (tool.id)}
		<section
			class="flex flex-col px-5 pt-10 pb-12 sm:px-8 md:min-h-[35rem] md:pt-10 md:pb-12 {tool.field}"
			aria-labelledby="{tool.id}-name"
		>
			<ToolSymbol tool={tool.id} class="size-8 sm:size-10" />
			<h2
				id="{tool.id}-name"
				class="mt-4 text-[2.5rem] leading-[0.95] font-extrabold tracking-[-0.04em] sm:mt-5 sm:text-6xl md:min-h-[1.9em] md:text-5xl lg:text-[4rem] xl:text-7xl {tool.id ===
				'split-bill'
					? 'md:w-min'
					: ''}"
			>
				{tool.name}
			</h2>
			<!-- Side by side, each name above keeps two lines' room, so the halves' lines meet across the
			     seam whichever name wraps. With a bill in progress, Split bill says that bill here: two
			     lines kept either way, so nothing moves when it arrives. -->
			<p class="mt-4 min-h-[2.75em] text-lg leading-snug sm:mt-5 sm:text-2xl">
				{tool.does}
			</p>
			<h3 class="mt-5 text-sm font-bold text-muted">{INDEX.leavesHeading}</h3>
			<p class="mt-2 max-w-md leading-snug sm:text-lg">{tool.leaves}</p>
			<!-- Under Split bill's, a bill shared from this device; the same space under WhatsApp's,
			     so both halves keep one rhythm and nothing moves when it arrives. -->
			<p class="mt-2 min-h-12 max-w-md text-sm">
				{#if tool.id === 'split-bill' && shared}
					{shared.text}
					<a href={shared.href} class="group/shared {actionLine}"
						>{shared.action}<Arrow
							class="transition-transform duration-200 motion-safe:group-hover/shared:translate-x-1"
						/></a
					>
				{/if}
			</p>
			<a href={resolve(tool.path)} class="mt-2 self-start whitespace-nowrap md:mt-auto {start}"
				>{tool.start}</a
			>
		</section>
	{/each}
</div>

<!-- Under the halves: what never leaves the device, then the bigger tools on sites of their own,
     and the source that proves it all. -->
<div class="mx-auto max-w-6xl px-5 pt-12 pb-16 sm:px-8 lg:pt-16 lg:pb-24">
	<section aria-labelledby="stays-heading">
		<h2 id="stays-heading" class="text-xl font-bold sm:text-2xl">{INDEX.stays.heading}</h2>
		<ul class="mt-4 grid gap-x-10 gap-y-3 sm:text-lg md:grid-cols-3">
			{#each INDEX.stays.facts as fact (fact)}
				<li class="leading-snug">{fact}</li>
			{/each}
		</ul>
	</section>

	<div
		class="mt-12 flex flex-wrap items-end justify-between gap-x-10 gap-y-6 border-t border-border pt-6 lg:mt-16"
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
