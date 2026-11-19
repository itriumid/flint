<script lang="ts">
	interface Props {
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

	const { title, introduction, width, essential = false }: Props = $props();
</script>

<!-- The top of a tool page, drawn as a place on the index's map: the place's dot beside the tool's
     name, and what the tool does under it. No band and nothing above the title, so the tool's first
     field stays on a phone's first screen. -->
<section class="px-5 sm:px-8">
	<div class="mx-auto {width} pt-4 pb-2 sm:pt-8">
		<div class="flex gap-4">
			<span class="mt-3 size-4 shrink-0 rounded-full bg-text sm:mt-4" aria-hidden="true"></span>
			<div class="min-w-0">
				<h1 class="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
				<p class="mt-2 max-w-xl leading-relaxed {essential ? 'font-medium' : 'text-muted'}">
					{introduction}
				</p>
			</div>
		</div>
	</div>
</section>
