<script lang="ts">
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import Arrow from '#lib/Arrow.svelte';
	import Seo from '#lib/Seo.svelte';
	import {
		CLOSING,
		DESCRIPTION,
		EXAMPLE,
		IN_PROGRESS,
		ELSEWHERE,
		ELSEWHERE_HEADING,
		HEADING,
		KICKER,
		PROMISE_HEADING,
		PROMISE_ROWS,
		SOURCE_LABEL,
		SOURCE_URL,
		SPLIT_BILL,
		TAGLINE,
		TITLE,
		TOOLS,
		TOOLS_LABEL
	} from '#lib/content.js';
	import { actionLine, primaryButton, secondaryButton } from '#lib/styles.js';
	import { loadDraft } from '#lib/draft.js';
	import { calculateBill, formatMoney } from '#lib/split-bill.js';
	import { sharedFromHere } from '#lib/share.js';

	// A bill this visitor was in the middle of: the draft in this tab, or else the bills this
	// device shared. Read from what the browser already keeps, after the page loads: nothing new is
	// kept, and nothing is sent anywhere. The page is the same for everyone until then.
	// A draft becomes the strip's first row as a line item: the bill itself, its people and items,
	// and what it comes to, set right; the whole row goes back to it. A shared bill is said, with
	// its own way in, since it opens that bill.
	let draft: { detail: string; total?: string } | undefined = $state();
	let shared: { text: string; action: string; href: string } | undefined = $state();
	onMount(() => {
		const kept = loadDraft();
		if (kept) {
			const { bill } = kept;
			draft = {
				detail: IN_PROGRESS.draftDetail(bill.people.length, bill.items.length),
				total: bill.items.length
					? formatMoney(calculateBill(bill).grandTotal, bill.currencyCode)
					: undefined
			};
			return;
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

	// The strip's grammar: groups split by a dashed rule, each a small heading over its rows, and a
	// row is a name on the left with its value set on the right, in tabular figures.
	const group = 'border-t-2 border-dashed border-muted/55 px-5 py-6 sm:px-8';
	const groupHeading = 'mb-3 text-lg font-bold';
	const row = 'flex items-baseline justify-between gap-4';
	// A row that is a link: the whole row takes the press, fills with the ground on hover, and its
	// arrow moves on, for people who haven't asked for less motion.
	const rowLink =
		'group -mx-3 block rounded-lg px-3 py-3 transition-colors hover:bg-bg pointer-coarse:py-3.5';
	const arrowMove = 'transition-transform duration-200 motion-safe:group-hover:translate-x-1';
</script>

<Seo title={TITLE} description={DESCRIPTION} path="/" />

<!-- The index is one strip of line items down a quiet ground: the tools, what stays on your device
     and the point itself, each as a row with its value on the right. On the header's own grid: on
     wide screens the name sits under the logo and the strip ends under "About Itrium"; on phones
     the name is above the strip. -->
<div class="bg-elevated dark:bg-bg">
	<div class="mx-auto max-w-5xl px-3 sm:px-8 lg:grid lg:grid-cols-[1fr_34rem] lg:gap-x-12">
		<div class="px-2 pt-6 pb-6 sm:px-0 sm:pt-10 lg:pt-14">
			<div class="lg:sticky lg:top-10">
				<h1 class="text-5xl font-bold tracking-tight sm:text-7xl">{HEADING}</h1>
				<p class="mt-2 text-lg font-medium text-muted sm:text-xl">{KICKER}</p>
			</div>
		</div>

		<div class="border-x border-border bg-surface tabular-nums">
			<!-- The strip's first row: what Flint does, or, for someone in the middle of a bill, that
			     bill. It's here for everyone and as tall as the two-line tagline, so nothing moves under a
			     finger when a returning visitor's shorter line arrives after the page loads. -->
			<div
				class="flex min-h-28 items-center px-5 py-6 sm:min-h-[7.25rem] sm:px-8 [@media(max-height:44rem)]:min-h-24 [@media(max-height:44rem)]:py-4"
			>
				{#if draft}
					<div class="w-full">
						<!-- The row link without its own vertical padding: the first row's padding is enough,
						     and more would make this taller than the tagline it replaces. -->
						<a
							href={resolve(SPLIT_BILL.path)}
							class="group -mx-3 block rounded-lg px-3 py-1 transition-colors hover:bg-bg"
						>
							<!-- Two lines, like the tagline it replaces: the bill and the way back to it, then
							     its people and items with what it comes to set on the right. -->
							<span class={row}>
								<span class="text-xl font-semibold sm:text-2xl">{IN_PROGRESS.draftLabel}</span>
								<Arrow class="{arrowMove} shrink-0 text-accent-text" />
							</span>
							<span class="{row} mt-1">
								<span class="text-muted">{draft.detail}</span>
								{#if draft.total}<span class="font-semibold">{draft.total}</span>{/if}
							</span>
						</a>
					</div>
				{:else if shared}
					<p class="{row} w-full text-lg font-medium">
						<span>{shared.text}</span>
						<a href={shared.href} class="group {actionLine} shrink-0"
							>{shared.action}<Arrow class={arrowMove} /></a
						>
					</p>
				{:else}
					<p class="text-xl leading-snug font-medium sm:text-2xl">{TAGLINE}</p>
				{/if}
			</div>

			<section class={group} aria-label={TOOLS_LABEL}>
				<ul class="space-y-1">
					{#each TOOLS as tool (tool.path)}
						{@const quiet = draft && tool.path === SPLIT_BILL.path}
						<li>
							<a href={resolve(tool.path)} class={rowLink}>
								<span class={row}>
									<span class="text-lg font-semibold whitespace-nowrap">{tool.name}</span>
									<span class="flex shrink-0 items-center gap-2 font-semibold"
										>{tool.yields}<Arrow class="{arrowMove} text-accent-text" /></span
									>
								</span>
								<span class="mt-1 block text-muted">{tool.line}</span>
								<!-- What the tool makes, as indented sub-rows of its own line, marked as an example:
								     a picture, so screen readers skip it, since the line already says it. It gives
								     way under 36rem of height, and on Split bill while a bill is in progress, where
								     a made-up bill beside theirs reads as theirs. -->
								<span
									class="mt-2 block pl-4 text-sm [@media(max-height:36rem)]:hidden {quiet
										? 'hidden'
										: ''}"
									aria-hidden="true"
								>
									<span class="block py-0.5 text-muted">{EXAMPLE}</span>
									{#each tool.sample as line (line.value)}
										<span class="{row} py-0.5">
											{#if line.label}<span class="text-muted">{line.label}</span>{/if}
											<span class={line.label ? 'font-semibold' : 'min-w-0 truncate'}
												>{line.value}</span
											>
										</span>
									{/each}
								</span>
							</a>
						</li>
					{/each}
				</ul>
			</section>

			<section class={group} aria-labelledby="promise-heading">
				<h2 id="promise-heading" class={groupHeading}>{PROMISE_HEADING}</h2>
				<dl class="space-y-2.5">
					{#each PROMISE_ROWS as fact (fact.label)}
						<div class={row}>
							<dt class="shrink-0 whitespace-nowrap text-muted">{fact.label}</dt>
							<dd class="text-right font-semibold">{fact.value}</dd>
						</div>
					{/each}
				</dl>
			</section>

			<section class={group} aria-labelledby="elsewhere-heading">
				<h2 id="elsewhere-heading" class={groupHeading}>{ELSEWHERE_HEADING}</h2>
				<ul>
					{#each ELSEWHERE as app (app.url)}
						<li>
							<a href={app.url} rel="external" class={rowLink}>
								<span class={row}>
									<span class="font-semibold">{app.name}</span>
									<!-- Where it goes, shown: a site of its own. To a screen reader it only
									     lengthened the link's name, and the summary already names it. -->
									<span class="{actionLine} shrink-0 text-sm" aria-hidden="true"
										>{new URL(app.url).host}<Arrow class={arrowMove} /></span
									>
								</span>
								<span class="mt-1 block text-muted">{app.summary}</span>
							</a>
						</li>
					{/each}
				</ul>
			</section>

			<!-- The closing row states the point, heavy, under a solid rule; then the one pink action. -->
			<section class="px-5 pt-2 pb-10 sm:px-8" aria-label={CLOSING.label}>
				<div class="{row} border-t-2 border-text pt-5">
					<span class="text-2xl font-extrabold sm:text-3xl">{CLOSING.label}</span>
					<span class="text-2xl font-extrabold sm:text-3xl">{CLOSING.value}</span>
				</div>
				<a href={resolve(SPLIT_BILL.path)} class="mt-7 w-full {primaryButton}">{CLOSING.action}</a>
				<a href={SOURCE_URL} rel="external" class="group mt-3 w-full {secondaryButton}"
					>{SOURCE_LABEL}<Arrow class={arrowMove} /></a
				>
			</section>
		</div>
	</div>
</div>
