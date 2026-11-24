<script lang="ts">
	import { afterNavigate, goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { onMount, tick } from 'svelte';
	import ToolSymbol from '#lib/ToolSymbol.svelte';
	import { NAV } from '#lib/content.js';
	import { field, smallButtonOnPage } from '#lib/styles.js';
	import {
		aToZ,
		findTools,
		readRecent,
		RECENT_KEY,
		recentTools,
		toolAt,
		withOpened,
		type Tool,
		type ToolId
	} from '#lib/tools.js';

	// "All tools": every tool, A to Z, with a search that finds them by what they do, and the ones
	// opened lately on this device first. One button in the header on every page, and "/" from the
	// keyboard, so switching tools is a press and a word away however many there are.

	let dialog: HTMLDialogElement | undefined = $state();
	let typed = $state('');
	let recent: ToolId[] = $state([]);

	const current = $derived(toolAt(page.url.pathname)?.id);
	const found = $derived(findTools(typed));
	const lately = $derived(typed.trim() ? [] : recentTools(recent, current));

	// The tool opened is noted when its page is reached, by any way: a link, the address bar, a
	// bookmark. Only its id is kept, in this browser; storage that's blocked or full keeps nothing.
	function note(path: string) {
		const tool = toolAt(path);
		try {
			recent = readRecent(localStorage.getItem(RECENT_KEY));
			if (!tool) return;
			localStorage.setItem(RECENT_KEY, JSON.stringify(withOpened(recent, tool.id)));
		} catch {
			// Nothing kept, nothing lost: the list just has no "Opened lately".
		}
	}
	afterNavigate(({ to }) => {
		dialog?.close();
		if (to) note(to.url.pathname);
	});

	async function open() {
		typed = '';
		try {
			recent = readRecent(localStorage.getItem(RECENT_KEY));
		} catch {
			recent = [];
		}
		dialog?.showModal();
		await tick();
		// With a keyboard, straight into the search; on a touch screen the keyboard would cover the
		// list, so focus waits on the heading and the search is a tap away.
		if (matchMedia('(pointer: fine)').matches) document.getElementById('tools-search')?.focus();
		else document.getElementById('tools-heading')?.focus();
	}

	// "/" opens it from anywhere, unless it's being typed into a field.
	onMount(() => {
		function onKey(event: KeyboardEvent) {
			if (event.key !== '/' || event.metaKey || event.ctrlKey || event.altKey) return;
			const target = event.target as HTMLElement | null;
			if (target?.closest('input, textarea, select, [contenteditable="true"]')) return;
			if (dialog?.open) return;
			event.preventDefault();
			void open();
		}
		addEventListener('keydown', onKey);
		return () => removeEventListener('keydown', onKey);
	});

	// Enter in the search opens the best match.
	function go(event: SubmitEvent) {
		event.preventDefault();
		const first = found[0];
		if (first) void goto(resolve(first.path as '/'));
	}

	// A press on the backdrop, outside the panel, closes it.
	function backdrop(event: MouseEvent) {
		if (event.target === dialog) dialog?.close();
	}
</script>

{#snippet row(tool: Tool)}
	<li>
		<a
			href={resolve(tool.path as '/')}
			aria-current={tool.id === current ? 'page' : undefined}
			class="group flex min-h-12 items-start gap-3 py-2.5"
		>
			<ToolSymbol tool={tool.id} class="mt-0.5 size-5 shrink-0" />
			<span class="min-w-0">
				<span
					class="block font-semibold underline-offset-4 group-hover:underline group-aria-[current=page]:underline group-aria-[current=page]:decoration-2"
					>{tool.name}</span
				>
				<span class="block text-sm text-muted">{tool.line}</span>
			</span>
		</a>
	</li>
{/snippet}

<button
	type="button"
	onclick={() => void open()}
	class="{smallButtonOnPage} gap-2"
	aria-haspopup="dialog"
	aria-keyshortcuts="/"
>
	<svg
		viewBox="0 0 20 20"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		aria-hidden="true"
		class="size-4 shrink-0"><circle cx="8.5" cy="8.5" r="5.5" /><path d="m13 13 4 4" /></svg
	>{NAV.allTools}
</button>

<!-- Full screen on a phone, a panel over the page from 640px. No shadow: the backdrop sets it apart. -->
<dialog
	bind:this={dialog}
	onclick={backdrop}
	aria-labelledby="tools-heading"
	class="m-0 h-dvh max-h-none w-full max-w-none bg-bg text-text backdrop:bg-black/40 sm:m-auto sm:h-auto sm:max-h-[80dvh] sm:max-w-lg sm:rounded-2xl sm:border sm:border-border"
>
	<div class="flex h-full flex-col px-5 pt-5 pb-6 sm:px-6">
		<div class="flex items-center justify-between gap-4">
			<h2 id="tools-heading" tabindex="-1" class="text-2xl font-extrabold tracking-[-0.03em]">
				{NAV.menuHeading}
			</h2>
			<button type="button" onclick={() => dialog?.close()} class={smallButtonOnPage}
				>{NAV.close}</button
			>
		</div>
		<form class="mt-4" onsubmit={go} role="search">
			<label for="tools-search" class="sr-only">{NAV.search}</label>
			<input
				id="tools-search"
				type="search"
				bind:value={typed}
				placeholder={NAV.search}
				autocomplete="off"
				spellcheck="false"
				enterkeyhint="go"
				class={field}
			/>
		</form>
		<!-- For a keyboard: the way back here from any page. Not on touch screens, which have none. -->
		<p class="mt-2 hidden text-sm text-muted pointer-fine:block">{NAV.shortcut}</p>

		<div class="mt-2 min-h-0 flex-1 overflow-y-auto overscroll-contain">
			{#if lately.length}
				<h3 class="mt-4 text-sm font-bold text-muted">{NAV.recent}</h3>
				<ul class="mt-1">
					{#each lately as tool (tool.id)}{@render row(tool)}{/each}
				</ul>
			{/if}
			{#if typed.trim()}
				<ul class="mt-2" aria-live="polite">
					{#each found as tool (tool.id)}{@render row(tool)}{/each}
				</ul>
				{#if !found.length}<p class="mt-4 text-sm text-muted">{NAV.noMatch(typed.trim())}</p>{/if}
			{:else}
				<h3 class="mt-4 text-sm font-bold text-muted">{NAV.aToZ}</h3>
				{#each aToZ() as group (group.letter)}
					<div class="mt-2 flex gap-4 border-t border-border pt-2">
						<p class="w-6 shrink-0 pt-2 text-xl font-extrabold" aria-hidden="true">
							{group.letter}
						</p>
						<ul class="min-w-0 flex-1">
							{#each group.tools as tool (tool.id)}{@render row(tool)}{/each}
						</ul>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</dialog>
