<script lang="ts">
	interface Props {
		/** What leaves, said plainly: the same words as the index says under "What leaves it". */
		label: string;
		/** Where it goes. */
		to: string;
	}

	const { label, to }: Props = $props();
</script>

<!-- A road out of the device, drawn as a road on a map, hanging from the control that takes it:
     a dashed line starting at the control's bottom edge, labelled with what it carries, to where it
     goes. Indented from the controls and with room before the next one, so it reads as a note on
     the control, not as another button. The line is a drawing; the label and the destination are
     read. -->
<div class="mb-3 ml-6">
	<div class="flex gap-3">
		<span class="flex w-4 shrink-0 flex-col items-center" aria-hidden="true"
			><span class="flex-1 border-l-[3px] border-dashed border-text"></span></span
		>
		<p class="max-w-72 py-2 text-sm font-semibold">{label}</p>
	</div>
	<p
		class="flex h-12 w-28 items-center justify-center rounded-lg border-2 border-muted bg-bg text-sm text-muted"
	>
		{to}
	</p>
</div>
