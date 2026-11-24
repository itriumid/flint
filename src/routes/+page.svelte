<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
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
		NAV,
		SOURCE_URL,
		TITLE
	} from '#lib/content.js';
	import { actionLine, field, primaryButton, secondaryButtonOnPage } from '#lib/styles.js';
	import { aToZ, featured, findTools, theRest } from '#lib/tools.js';
	import { loadDraft } from '#lib/draft.js';
	import { calculateBill, formatMoney } from '#lib/split-bill.js';
	import { sharedFromHere } from '#lib/share.js';

	// What this visitor already has, read from what the browser keeps, after the page loads:
	// nothing new is kept, and nothing is sent anywhere. The page is the same for everyone until
	// then. A bill in progress is said in Split bill's field, since it lives on the device; a bill
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

	// The featured tools as full-width fields, the first in the page's inverse, the next a step off
	// the page, the third on the page itself between two hairlines, in either theme. The fields run
	// to the screen's edges, but what's in them lines up with the header's 72rem column: from 1024px,
	// side by side, the outer padding is whatever lies beyond that column (100cqw is the page's width
	// without a scrollbar). Written out in full, so Tailwind finds the classes.
	const fieldLook = [
		'inverse-field lg:pr-10 lg:pl-[max(2rem,calc((100cqw_-_72rem)/2_+_2rem))]',
		'bg-elevated dark:bg-surface lg:px-10',
		'bg-bg lg:pl-10 lg:pr-[max(2rem,calc((100cqw_-_72rem)/2_+_2rem))]'
	];
	const fields = $derived(
		featured().map((tool, index) => ({
			...tool,
			line: tool.id === 'split-bill' && draft ? draft : tool.line,
			start: tool.id === 'split-bill' && draft ? IN_PROGRESS.continue : tool.start,
			look: fieldLook[index % fieldLook.length]
		}))
	);
	// Once there are more tools than fields, every tool, A to Z, under them.
	const hasRest = theRest().length > 0;

	// The search under Flint's name: the tools that answer it, under the field, as it's typed.
	let typed = $state('');
	const found = $derived(typed.trim() ? findTools(typed) : []);
	function go(event: SubmitEvent) {
		event.preventDefault();
		if (found[0]) void goto(resolve(found[0].path as '/'));
	}

	/** A field's start, at the scale of the field, in the primary button's colors. */
	const start = primaryButton.replace(
		'px-6 py-3 text-sm font-semibold',
		'px-7 py-4 text-lg font-bold'
	);
	const arrowMove = 'transition-transform duration-200 motion-safe:group-hover:translate-x-1';
</script>

<Seo title={TITLE} description={DESCRIPTION} path="/" />

<!-- The index leads with its featured tools, as full-width fields edge to edge, with Flint's name,
     its line and a search above them, and what never leaves the device below. -->
<div
	class="mx-auto max-w-6xl px-5 pt-2 pb-8 sm:px-8 sm:pt-6 sm:pb-10 lg:flex lg:items-start lg:justify-between lg:gap-10 lg:pt-4 lg:pb-6"
>
	<div class="flex flex-wrap items-baseline gap-x-10 gap-y-2">
		<!-- A step below the tools' names at every width, so the fields lead the page. -->
		<h1
			class="text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl md:text-4xl lg:text-3xl xl:text-4xl"
		>
			{HEADING}
		</h1>
		<p class="max-w-xl text-lg leading-snug text-muted sm:text-2xl">{INDEX.intro}</p>
	</div>
	<!-- The same search as "All tools": by name, or by what someone wants done. Beside Flint's line
	     from 1024px, so every start stays on the first screen, held at the top of the row, so the
	     field stays put and its answers only ever grow downward. -->
	<form class="mt-5 max-w-xl lg:mt-3 lg:w-96 lg:shrink-0 xl:mt-5" onsubmit={go} role="search">
		<label for="index-search" class="sr-only">{NAV.search}</label>
		<input
			id="index-search"
			type="search"
			bind:value={typed}
			placeholder={NAV.search}
			autocomplete="off"
			spellcheck="false"
			enterkeyhint="go"
			class={field}
		/>
		<ul aria-live="polite" class="empty:hidden">
			{#each found as tool (tool.id)}
				<li class="border-b border-border">
					<a href={resolve(tool.path as '/')} class="group flex min-h-12 items-start gap-3 py-2.5">
						<ToolSymbol tool={tool.id} class="mt-0.5 size-5 shrink-0" />
						<span>
							<span class="block font-semibold underline-offset-4 group-hover:underline"
								>{tool.name}</span
							>
							<span class="block text-sm text-muted">{tool.line}</span>
						</span>
					</a>
				</li>
			{/each}
		</ul>
		{#if typed.trim() && !found.length}
			<p class="mt-2 text-sm text-muted">{NAV.noMatch(typed.trim())}</p>
		{/if}
	</form>
</div>

<div class="grid border-y border-border lg:grid-cols-3">
	{#each fields as tool (tool.id)}
		<section
			class="flex flex-col px-5 pt-10 pb-12 sm:px-8 lg:min-h-[28rem] lg:pt-6 lg:pb-10 {tool.look}"
			aria-labelledby="{tool.id}-name"
		>
			<ToolSymbol tool={tool.id} class="size-8 sm:size-10" />
			<!-- Side by side, each name keeps two lines' room, so the fields' lines meet across them
			     whichever name wraps; a word is never broken at its hyphens ("click-to-chat", shown with hyphens that
			     don't break; the name itself, for search, keeps plain ones), and the
			     size leaves the longest word room in a third of the column. -->
			<h2
				id="{tool.id}-name"
				class="mt-4 text-[2.5rem] leading-[0.95] font-extrabold tracking-[-0.04em] sm:mt-5 sm:text-6xl lg:mt-4 lg:min-h-[1.9em] lg:text-4xl xl:text-5xl"
			>
				{tool.name.replaceAll('-', '\u2011')}
			</h2>
			<!-- With a bill in progress, Split bill says that bill here: two lines kept either way, so
			     nothing moves when it arrives. The others keep the room only side by side, where the
			     fields' lines meet across them. -->
			<p
				class="mt-4 {tool.id === 'split-bill'
					? 'min-h-[2.75em]'
					: 'lg:min-h-[2.75em]'} text-lg leading-snug sm:mt-5 sm:text-2xl lg:mt-3 lg:text-lg"
			>
				{tool.line}
			</p>
			<h3 class="mt-5 text-sm font-bold text-muted lg:mt-4">{INDEX.leavesHeading}</h3>
			<p class="mt-2 max-w-md leading-snug sm:text-lg lg:text-base">{tool.leaves}</p>
			<!-- Under Split bill's, a bill shared from this device, in space kept for it so nothing moves
			     when it arrives; the others keep the same space only side by side, for one rhythm. -->
			<p
				class="mt-2 {tool.id === 'split-bill'
					? 'min-h-12'
					: 'lg:min-h-12'} max-w-md text-sm empty:mt-0 lg:empty:mt-2"
			>
				{#if tool.id === 'split-bill' && shared}
					{shared.text}
					<a href={shared.href} class="group/shared {actionLine}"
						>{shared.action}<Arrow
							class="transition-transform duration-200 motion-safe:group-hover/shared:translate-x-1"
						/></a
					>
				{/if}
			</p>
			<a
				href={resolve(tool.path as '/')}
				class="{tool.id === 'split-bill'
					? 'mt-2'
					: 'mt-14'} self-start whitespace-nowrap lg:mt-auto {start}">{tool.start}</a
			>
		</section>
	{/each}
</div>

{#if hasRest}
	<!-- Every tool, A to Z, once there are more than the fields hold: name, what it does and what
	     leaves it, under its initial. -->
	<section aria-labelledby="all-heading" class="mx-auto max-w-6xl px-5 pt-12 sm:px-8 lg:pt-16">
		<h2 id="all-heading" class="text-xl font-bold sm:text-2xl">{NAV.menuHeading}</h2>
		<div class="mt-4 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
			{#each aToZ() as group (group.letter)}
				<div class="border-t border-border pt-3 pb-4">
					<p class="text-3xl font-extrabold tracking-[-0.04em]" aria-hidden="true">
						{group.letter}
					</p>
					<ul>
						{#each group.tools as tool (tool.id)}
							<li class="mt-3">
								<a href={resolve(tool.path as '/')} class="group flex items-start gap-3">
									<ToolSymbol tool={tool.id} class="mt-1 size-5 shrink-0" />
									<span>
										<span class="block text-lg font-bold underline-offset-4 group-hover:underline"
											>{tool.name}</span
										>
										<span class="block text-sm">{tool.line}</span>
										<span class="block text-sm text-muted">{tool.leaves}</span>
									</span>
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</section>
{/if}

<!-- Under the fields: what never leaves the device, then the bigger tools on sites of their own,
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
