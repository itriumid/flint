<script lang="ts">
	interface Props {
		/** Which tool: each has one symbol, the same wherever it appears. */
		tool: 'split-bill' | 'whatsapp';
		class?: string;
	}

	const { tool, class: className = '' }: Props = $props();
</script>

<!-- A tool's symbol: a circle shared in half for Split bill, a speech mark for WhatsApp
     click-to-chat. Drawn in the text color; it repeats the tool's name, so screen readers skip it. -->
<svg
	viewBox="0 0 40 40"
	fill="none"
	stroke="currentColor"
	stroke-width="4"
	aria-hidden="true"
	class={className}
>
	{#if tool === 'split-bill'}
		<circle cx="20" cy="20" r="16" />
		<path d="M20 4a16 16 0 0 0 0 32Z" fill="currentColor" />
	{:else}
		<path d="M20 4a16 16 0 1 1-8.6 29.5L4 36l2.5-7.4A16 16 0 0 1 20 4Z" stroke-linejoin="round" />
	{/if}
</svg>
