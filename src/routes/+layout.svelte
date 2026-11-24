<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import flintMark from '#lib/flint-mark-compact.svg';
	import lockupOnDark from '#lib/itrium-lockup-on-dark.svg';
	import lockupOnLight from '#lib/itrium-lockup-on-light.svg';
	import ThemeChoice from '#lib/ThemeChoice.svelte';
	import ToolSymbol from '#lib/ToolSymbol.svelte';
	import ToolsMenu from '#lib/ToolsMenu.svelte';
	import { featured } from '#lib/tools.js';
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
		UPDATE
	} from '#lib/content.js';
	import { smallButton } from '#lib/styles.js';

	const { children } = $props();

	/** The header's and footer's links: small text, but 44px tall to a finger. */
	const link = 'inline-flex items-center transition-colors hover:text-text pointer-coarse:min-h-11';
	/** The header's links between the tools: the page you're on is underlined. */
	const toolLink =
		'inline-flex min-h-11 items-center gap-2 underline-offset-[6px] decoration-2 hover:underline aria-[current=page]:underline';
	const home = $derived(page.url.pathname === '/');

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

<!-- Flint's mark and the way to every tool, on every page. On a desktop the tools the index leads
     with are a click away, the page you're on underlined; everywhere, "All tools" opens the whole
     collection with a search, and the tools opened lately first. -->
<header
	class="mx-auto flex max-w-6xl items-center justify-between gap-x-4 px-5 py-6 sm:gap-x-6 sm:px-8"
>
	<!-- The mark has no tile, so the same file sits on either theme: the pink stone with its
	     ripples cut in. At this size it's the compact one, its ripples heavier. -->
	<a
		href={resolve('/')}
		aria-current={home ? 'page' : undefined}
		class="flex shrink-0 items-center gap-2.5 text-xl font-bold tracking-tight"
	>
		<img src={flintMark} alt="" width="34" height="36" class="h-9 w-auto" />
		<span class={home ? 'underline decoration-2 underline-offset-[6px]' : ''}>{NAME}</span>
	</a>
	<nav aria-label={NAV.label} class="flex items-center gap-8">
		<ul class="hidden items-center gap-8 font-semibold whitespace-nowrap lg:flex">
			{#each featured() as tool (tool.id)}
				<li>
					<a
						href={resolve(tool.path as '/')}
						aria-current={page.url.pathname === resolve(tool.path as '/') ? 'page' : undefined}
						class={toolLink}><ToolSymbol tool={tool.id} class="size-5 shrink-0" />{tool.short}</a
					>
				</li>
			{/each}
		</ul>
		<ToolsMenu />
	</nav>
</header>

<!-- A size container, so a page can reach the screen's edges from inside its column (cqw), which
     100vw can't do without a desktop scrollbar's width of overflow. -->
<main id="main" class="@container">
	{@render children()}
</main>

<footer class="border-t border-border">
	<div
		class="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 text-sm text-muted sm:flex-row sm:justify-between sm:px-8"
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
			<!-- On the index, the facts under the featured fields say this in full, right above. -->
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
