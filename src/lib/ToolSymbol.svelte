<script lang="ts">
	import type { ToolId } from '#lib/tools.js';
	interface Props {
		/** Which tool: each has one symbol, the same wherever it appears. */
		tool: ToolId;
		class?: string;
	}

	const { tool, class: className = '' }: Props = $props();
</script>

<!-- A tool's symbol: a circle shared in half for Split bill, a speech mark for WhatsApp
     click-to-chat, and a code's three corner squares and a module for QR code,
     a picture's frame, hills and sun for Resize and convert images, and two sheets, one over the
     other, for Combine and shrink PDFs. Drawn in the text
     color; it repeats the tool's name, so screen readers skip it. -->
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
	{:else if tool === 'images'}
		<rect x="5" y="7" width="30" height="26" rx="3" />
		<path d="M5 28l9-9 7 7 5-5 9 9" stroke-linejoin="round" />
		<circle cx="27" cy="15" r="2.5" fill="currentColor" stroke="none" />
	{:else if tool === 'pdf'}
		<path d="M11 9V5h19l6 6v20h-5" stroke-linejoin="round" />
		<path d="M6 11h19l5 5v19H6Z" stroke-linejoin="round" />
		<path d="M12 23h12M12 29h8" />
	{:else if tool === 'qr-code'}
		<rect x="5" y="5" width="12" height="12" rx="2" />
		<rect x="23" y="5" width="12" height="12" rx="2" />
		<rect x="5" y="23" width="12" height="12" rx="2" />
		<rect x="24" y="24" width="10" height="10" rx="1" fill="currentColor" stroke="none" />
	{:else}
		<path d="M20 4a16 16 0 1 1-8.6 29.5L4 36l2.5-7.4A16 16 0 0 1 20 4Z" stroke-linejoin="round" />
	{/if}
</svg>
