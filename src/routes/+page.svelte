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
	// then. A bill in progress is already packed in Split bill's tier, since it lives on the device;
	// a bill shared from this device is what left that tier, so it is said under what leaves.
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

	const tools = $derived([
		{
			id: 'split-bill',
			name: SPLIT_BILL.name,
			path: SPLIT_BILL.path,
			does: draft ?? SPLIT_BILL.line,
			leaves: INDEX.leaves.splitBill,
			start: draft ? IN_PROGRESS.continue : INDEX.starts.splitBill
		},
		{
			id: 'whatsapp',
			name: WHATSAPP.name,
			path: WHATSAPP.path,
			does: WHATSAPP.line,
			leaves: INDEX.leaves.whatsapp,
			start: INDEX.starts.whatsapp
		}
	] as const);

	/** A tier: graphite enamel, the same in both themes, with room for its rim. */
	const tier = 'enamel relative rounded-3xl px-6 sm:px-12';
	/**
	 * The rim along a tier's top edge, a step lighter than the enamel. Pressing toward a tier's
	 * start lifts it, as a latch lifts a lid, by half the 8px seam between tiers, so the seam still
	 * shows. It holds nothing, so nothing moves under a finger, and with reduced motion it stays put.
	 */
	const rim =
		'pointer-events-none absolute inset-0 rounded-3xl border-t-8 border-tier-rim transition-transform duration-300 ease-out';
	const lift =
		'motion-safe:group-has-[a:hover]:-translate-y-1 motion-safe:group-has-[a:focus-visible]:-translate-y-1';
	const arrowMove = 'transition-transform duration-200 motion-safe:group-hover:translate-x-1';
	/** A tier's start, at the scale of the tier it latches, in the primary button's colors. */
	const latch = primaryButton.replace(
		'px-6 py-3 text-sm font-semibold',
		'px-7 py-4 text-lg font-bold'
	);
</script>

<Seo title={TITLE} description={DESCRIPTION} path="/" />

<!-- The index is a rantang, a stacked food carrier, seen from the front: the header's arc is its
     handle, and two rails down the sides hold the tiers. The lid carries the name; each tool is a
     tier that says what it does and what leaves it, with its start; the base says what never
     leaves. -->
<div class="relative mx-auto max-w-5xl px-2 sm:px-8">
	<span
		class="absolute top-0 -bottom-3 left-2 w-2.5 rounded-b-full bg-frame sm:left-8 sm:w-3.5"
		aria-hidden="true"
	></span>
	<span
		class="absolute top-0 right-2 -bottom-3 w-2.5 rounded-b-full bg-frame sm:right-8 sm:w-3.5"
		aria-hidden="true"
	></span>

	<div class="space-y-2 px-3 pt-4 sm:px-4 sm:pt-6">
		<div class="{tier} flex flex-col gap-x-12 gap-y-3 pt-9 pb-7 md:flex-row md:items-center">
			<span class={rim} aria-hidden="true"></span>
			<h1 class="text-6xl font-extrabold tracking-[-0.04em] sm:text-8xl">{HEADING}</h1>
			<p class="max-w-md text-lg leading-snug text-muted sm:text-2xl">{INDEX.intro}</p>
		</div>

		{#each tools as tool (tool.id)}
			<section
				class="{tier} group grid gap-y-6 pt-10 pb-8 md:min-h-[18.5rem] md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] md:gap-x-12 md:py-7"
				aria-labelledby="{tool.id}-name"
			>
				<span class="{rim} {lift}" aria-hidden="true"></span>
				<div class="flex flex-col">
					<ToolSymbol tool={tool.id} class="size-9 sm:size-11" />
					<h2
						id="{tool.id}-name"
						class="mt-4 text-4xl leading-none font-extrabold tracking-[-0.035em] sm:text-5xl"
					>
						{tool.name}
					</h2>
					<!-- With a bill in progress, Split bill says that bill: two lines kept either way, so
					     nothing moves when it arrives. -->
					<p class="mt-4 min-h-14 text-lg leading-snug sm:text-xl md:mt-auto md:pt-6">
						{tool.does}
					</p>
				</div>
				<div
					class="flex flex-col border-t-2 border-border pt-5 md:border-t-0 md:border-l-2 md:pt-0 md:pl-10"
				>
					<h3 class="text-sm font-bold text-muted">{INDEX.leavesHeading}</h3>
					<p class="mt-2 text-lg leading-snug sm:text-xl">{tool.leaves}</p>
					{#if tool.id === 'split-bill'}
						<!-- A bill shared from this device, in a space kept for everyone, which on phones is
						     also the room above the start. -->
						<p class="mt-2 min-h-12 text-sm md:mb-4 md:min-h-10">
							{#if shared}
								{shared.text}
								<a href={shared.href} class="group/shared {actionLine}"
									>{shared.action}<Arrow
										class="transition-transform duration-200 motion-safe:group-hover/shared:translate-x-1"
									/></a
								>
							{/if}
						</p>
					{/if}
					<a
						href={resolve(tool.path)}
						class="self-start whitespace-nowrap md:mt-auto {tool.id === 'split-bill'
							? ''
							: 'mt-14'} {latch}">{tool.start}</a
					>
				</div>
			</section>
		{/each}

		<section class="{tier} rounded-b-[2.5rem] pt-9 pb-9" aria-labelledby="stays-heading">
			<span class="{rim} rounded-b-[2.5rem]" aria-hidden="true"></span>
			<h2 id="stays-heading" class="text-xl font-bold sm:text-2xl">{INDEX.stays.heading}</h2>
			<ul class="mt-4 grid gap-x-10 gap-y-3 sm:text-lg md:grid-cols-3">
				{#each INDEX.stays.facts as fact (fact)}
					<li class="leading-snug">{fact}</li>
				{/each}
			</ul>
		</section>
	</div>
</div>

<!-- Off the rantang: the bigger tools on sites of their own, and the source that proves it. -->
<div
	class="mx-auto mt-14 flex max-w-5xl flex-wrap items-end justify-between gap-x-10 gap-y-6 px-5 pb-16 sm:px-8 lg:mt-20 lg:pb-24"
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
