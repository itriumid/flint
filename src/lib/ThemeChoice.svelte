<!-- Light or dark, or as the device is set: a real radio group, drawn as one control, the same as
     Amber's. Kept in this browser only (theme.ts), and applied before drawing by static/theme.js. -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { THEME } from '#lib/content.js';
	import { theme } from '#lib/theme.svelte.js';
	import type { Theme } from '#lib/theme.js';

	const name = $props.id();
	const themes: { value: Theme; label: string }[] = [
		{ value: 'system', label: THEME.system },
		{ value: 'light', label: THEME.light },
		{ value: 'dark', label: THEME.dark }
	];

	onMount(() => theme.load());
</script>

<fieldset class="flex flex-wrap items-center gap-x-3 gap-y-1.5">
	<legend class="float-left mr-3 text-sm">{THEME.legend}</legend>
	<div class="inline-flex gap-1 rounded-full border border-control-border p-1">
		{#each themes as each (each.value)}
			<label class="relative cursor-pointer">
				<input
					type="radio"
					{name}
					value={each.value}
					class="peer sr-only"
					checked={theme.current === each.value}
					onchange={() => theme.set(each.value)}
				/>
				<span
					class="flex min-h-8 items-center rounded-full px-3 text-sm transition-colors peer-checked:bg-text peer-checked:font-semibold peer-checked:text-bg peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-(--focus) hover:text-text motion-reduce:transition-none pointer-coarse:min-h-11"
					>{each.label}</span
				>
			</label>
		{/each}
	</div>
</fieldset>
