<script lang="ts">
	import type { ToolId } from '#lib/tools.js';
	import ToolSymbol from '#lib/ToolSymbol.svelte';

	interface Props {
		/** Which tool: its symbol, the same as in the header and on the index. */
		tool: ToolId;
		title: string;
		introduction: string;
		/** The width of the tool under the title, so the title lines up with it: a max-w-* class. */
		width: string;
		/**
		 * The introduction is what someone needs to know, not a description: a bill shared with them,
		 * opened from a link with no other context. It takes the text color, not muted.
		 */
		essential?: boolean;
	}

	const { tool, title, introduction, width, essential = false }: Props = $props();
</script>

<!-- The top of a tool page, as the tool's half on the index says it: its symbol, its name in the
     same extra-bold type, and what it does under it. Nothing above the title, so the tool's first
     field stays on a phone's first screen. -->
<section class="mx-auto {width} px-5 pt-2 pb-2 sm:px-8 sm:pt-6">
	<div>
		<ToolSymbol {tool} class="size-7 sm:size-8" />
		<h1 class="mt-3 text-4xl leading-[0.95] font-extrabold tracking-[-0.04em] sm:text-5xl">
			{title}
		</h1>
		<p class="mt-3 max-w-xl leading-relaxed {essential ? 'font-medium' : 'text-muted'}">
			{introduction}
		</p>
	</div>
</section>
