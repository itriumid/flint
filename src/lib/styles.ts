// Class lists shared by every page. Pink (the primary button) marks the one main action, and
// every control has an edge that reaches 3:1, so people can find it.
/** The pink fill has a deep rose edge in light mode, where pastel pink alone is 1.5:1 on the page. */
export const primaryButton =
	'inline-flex items-center justify-center gap-2 rounded-full border border-accent-edge bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-50';
export const secondaryButton =
	'inline-flex items-center justify-center gap-2 rounded-full border border-control-border px-6 py-3 text-sm font-medium transition-colors hover:bg-bg disabled:cursor-not-allowed disabled:opacity-50';
/** The secondary button on the page itself, where filling with the page color would show no hover. */
export const secondaryButtonOnPage = secondaryButton.replace(
	'hover:bg-bg',
	'hover:bg-elevated dark:hover:bg-surface'
);
/** Disabled, its words go muted rather than the whole button fading: still 4.5:1 or more. */
export const smallButton =
	'inline-flex min-h-9 items-center justify-center rounded-full border border-control-border px-4 text-sm font-medium transition-colors hover:bg-bg disabled:cursor-not-allowed disabled:text-muted pointer-coarse:min-h-11';
/** The small button on the page itself, as with the secondary one. */
export const smallButtonOnPage = smallButton.replace(
	'hover:bg-bg',
	'hover:bg-elevated dark:hover:bg-surface'
);
/** On touch screens the text is 16px: Safari on iOS zooms the page into anything smaller. */
const touchText = 'pointer-coarse:text-base';
export const field = `w-full rounded-lg border border-control-border bg-bg px-3 py-2.5 text-sm ${touchText} text-text placeholder:text-muted`;
/** A button beside a field, as tall as the field: taller on touch screens, like its text. */
export const besideField = 'h-[42px] pointer-coarse:h-[46px]';
export const label = 'mb-1.5 block text-sm font-medium';
/**
 * A checkbox or radio button with its words beside it: the whole row takes the press, and on touch
 * screens it's 44px tall, though the box itself stays its size.
 */
export const checkRow =
	'inline-flex min-h-9 cursor-pointer items-center gap-2.5 text-sm pointer-coarse:min-h-11';
/** Checked in the text color, graphite on light and off-white on dark: pink is kept for the next action. */
export const checkbox = 'size-5 shrink-0 accent-text disabled:cursor-not-allowed';
/** A link's way onward, in pink text with the drawn arrow, which moves right when hovered. */
export const actionLine = 'inline-flex items-center gap-1.5 font-medium text-accent-text';
