<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import flintMark from '#lib/flint-mark.svg';
	import flintMarkOnDark from '#lib/flint-mark-on-dark.svg';
	import lockupOnDark from '#lib/itrium-lockup-on-dark.svg';
	import lockupOnLight from '#lib/itrium-lockup-on-light.svg';
	import ThemeChoice from '#lib/ThemeChoice.svelte';
	import ToolSymbol from '#lib/ToolSymbol.svelte';
	import { updates } from '#lib/updates.svelte.js';
	import {
		ABOUT_ITRIUM,
		EMAIL,
		GITHUB_URL,
		MADE_BY,
		MAIN_SITE_URL,
		NAME,
		NAV,
		NO_TRACKING,
		NO_TRACKING_BILLS,
		SOURCE_URL,
		SPLIT_BILL,
		UPDATE,
		WHATSAPP
	} from '#lib/content.js';
	import { smallButton } from '#lib/styles.js';

	const { children } = $props();

	/** The header's and footer's links: small text, but 44px tall to a finger. */
	const link = 'inline-flex items-center transition-colors hover:text-text pointer-coarse:min-h-11';
	/** The header's links between the tools: the page you're on is underlined. */
	const toolLink =
		'inline-flex min-h-11 items-center gap-2 underline-offset-[6px] decoration-2 hover:underline aria-[current=page]:underline';
	const home = $derived(page.url.pathname === '/');
	const tools = [
		{ id: 'split-bill', path: SPLIT_BILL.path, label: NAV.splitBill },
		{ id: 'whatsapp', path: WHATSAPP.path, label: NAV.whatsapp }
	] as const;

	// A new version of Flint, installed and waiting, is offered rather than switched to silently.
	onMount(() => updates.watch());

	// Pages cross-fade into each other, like itrium.id's, for people who haven't asked for less
	// motion and in browsers that can.
	onNavigate((navigation) => {
		if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) {
			return;
		}
		return new Promise((done) => {
			document.startViewTransition(async () => {
				done();
				await navigation.complete;
			});
		});
	});
</script>

<!-- The offer of a new version sits over the header at the top of the page, so nothing on the page
     moves when it appears, and scrolls away with the header, so it never covers a field being
     filled in (Split bill's running total holds the bottom of a phone's screen). Its button is
     outlined: pink stays for the page's own main action. -->
<div class="absolute inset-x-3 top-3 z-30 mx-auto max-w-md" role="status">
	{#if updates.ready && !updates.later}
		<div
			class="flex items-center justify-between gap-4 rounded-2xl border border-control-border bg-surface py-2.5 pr-2.5 pl-4 text-sm"
		>
			<p>{UPDATE.ready}</p>
			<!-- Later puts it away until Flint is next opened, so the header it covers is reachable. -->
			<div class="flex shrink-0 items-center gap-1">
				<button
					type="button"
					class="inline-flex min-h-9 items-center rounded-full px-3 font-medium text-muted hover:text-text pointer-coarse:min-h-11"
					onclick={() => (updates.later = true)}>{UPDATE.later}</button
				>
				<button type="button" class={smallButton} onclick={() => updates.apply()}
					>{UPDATE.action}</button
				>
			</div>
		</div>
	{/if}
</div>

<a
	href="#main"
	class="absolute -top-full left-4 z-20 rounded-b-lg bg-accent px-4 py-2 font-semibold text-on-accent focus:top-0"
>
	Skip to content
</a>

<!-- Flint's mark and the tools, on every page, so a person can go from one tool to the other in
     one press. On the index the header is the rantang's carrying handle: centred, under the arc
     whose two ends become the page's rails. -->
<header
	class="relative mx-auto flex max-w-5xl items-center gap-x-6 px-5 sm:gap-x-10 sm:px-8 {home
		? 'justify-center pt-9 pb-3 sm:pt-11'
		: 'justify-between py-6'}"
>
	{#if home}
		<span
			class="pointer-events-none absolute inset-x-2 top-3 bottom-0 rounded-[50%_50%_0_0/100%_100%_0_0] border-[10px] border-b-0 border-frame sm:inset-x-8 sm:border-[14px] sm:border-b-0"
			aria-hidden="true"
		></span>
	{/if}
	<!-- The mark is the same tile in either theme; on a page as dark as the tile, the one with a
	     faint rim keeps its edge. -->
	<a
		href={resolve('/')}
		aria-current={home ? 'page' : undefined}
		class="relative flex shrink-0 items-center gap-2.5 text-xl font-bold tracking-tight"
	>
		<img src={flintMark} alt="" width="40" height="40" class="size-10 dark:hidden" />
		<img src={flintMarkOnDark} alt="" width="40" height="40" class="hidden size-10 dark:block" />
		<span
			class={home ? 'sr-only decoration-2 underline-offset-[6px] sm:not-sr-only sm:underline' : ''}
			>{NAME}</span
		>
	</a>
	<nav aria-label={NAV.label} class="relative">
		<ul class="flex items-center gap-5 font-semibold whitespace-nowrap sm:gap-8">
			{#each tools as tool (tool.path)}
				<li>
					<a
						href={resolve(tool.path)}
						aria-current={page.url.pathname === resolve(tool.path) ? 'page' : undefined}
						class={toolLink}><ToolSymbol tool={tool.id} class="size-5 shrink-0" />{tool.label}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<!-- A size container, so a page can reach the screen's edges from inside its column (cqw), which
     100vw can't do without a desktop scrollbar's width of overflow. -->
<main id="main" class="@container">
	{@render children()}
</main>

<footer class="border-t border-border">
	<div
		class="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-10 text-sm text-muted sm:flex-row sm:justify-between sm:px-8"
	>
		<div class="space-y-4">
			<!-- Who makes Flint: Itrium's lockup, drawn for whichever theme is in use. -->
			<a href={MAIN_SITE_URL} class="inline-block" aria-label={MADE_BY}>
				<img src={lockupOnLight} alt="" width="131" height="40" class="h-10 w-auto dark:hidden" />
				<img
					src={lockupOnDark}
					alt=""
					width="131"
					height="40"
					class="hidden h-10 w-auto dark:block"
				/>
			</a>
			<p>© {new Date().getFullYear()} Itrium</p>
			<!-- On the index, the rantang's base tier says this in full, right above. -->
			{#if page.url.pathname === resolve('/split-bill')}<p>{NO_TRACKING_BILLS}</p>
			{:else if page.url.pathname !== '/'}<p>{NO_TRACKING}</p>{/if}
			<ThemeChoice />
		</div>
		<!-- Itrium's site, here rather than in the header, which holds the tools. -->
		<ul class="flex shrink-0 flex-wrap gap-x-5 gap-y-2 sm:flex-col sm:gap-2 sm:text-right">
			<li><a href={MAIN_SITE_URL} class={link}>{ABOUT_ITRIUM}</a></li>
			<li><a href="mailto:{EMAIL}" class={link}>{EMAIL}</a></li>
			<li>
				<a href={GITHUB_URL} rel="external" class={link}>GitHub</a>
			</li>
			<!-- On the index, "Read the source" is right above. -->
			{#if page.url.pathname !== '/'}
				<li>
					<a href={SOURCE_URL} rel="external" class={link}> This site's source </a>
				</li>
			{/if}
		</ul>
	</div>
</footer>
