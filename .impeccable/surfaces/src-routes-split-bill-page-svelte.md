---
version: 1
slug: 'src-routes-split-bill-page-svelte'
primary_target: 'src/routes/split-bill/+page.svelte'
related_targets: []
---

# Surface brief: Split bill (/split-bill)

Scope: the Split bill tool page, whole-page structure, in the index's world (the two halves). Mode: Operate. Build path: code-led.
Audience and job: a group at a restaurant table, one person holding a phone, turning a receipt into what each person's share is, then sending it to the group; and a friend opening a shared link to see their share.
Owner's steer (2026-11-24): the tool pages "don't match the index", are "too many boxes" and "hard to use at the table". Whole-page redesign. Structure round: owner chose Three steps. Wording approved: steps "Who's here", "What you had", "Everyone's share", and a plain pink "Next"; the share button keeps "Copy a link to this bill" (owner declined "Send to the group"). Be careful with button wording: it "can easily feel too much". After the finish review, the owner approved removing two lines (2026-11-24): the road out's words under "Copy a link to this bill" ("Drop it": the privacy note under the buttons says it in full) and the repeated "isn't in anyone's share yet" line above the buttons ("Drop the duplicate": the split's own warning carries Show it).
Constraints: everything the page does today keeps working (receipt scanning and review, people, items with counts, charges and adjustments, who paid, rounding, sharing, opened links, a friend's view, undo, the draft); copy in src/lib/content.ts approved before commit; pink for one meaning per view; level AA both themes.
Open: WhatsApp click-to-chat's own structure round comes next; the Flint mark is to be redrawn.

## Direction contract

THESIS: On a phone the bill is made in three steps, one on screen at a time, Who's here, What you had, Everyone's share, so the person at the table does one job at a time and the answer is one tap away. It refuses the stack of five white cards and the answer buried 2,300 pixels down.

OWN-WORLD: The index's world: the tool's symbol and its name in extra-bold type over the introduction; no cards, parts divided by plain lines; headings in extra bold; items as rows between lines, not boxes; a step bar of three plain tabs, the current one underlined in the text color; a bar fixed to the bottom of a phone's screen, graphite on a light page and the surface gray on a dark one, with the step's count or the total and a pink Next. One pink action per view. No dashes.

STORY: The person adds who's at the table, presses Next, scans or types what they had and taps who had each, presses Next, and sees everyone's share with who paid on top, then copies a link for the group. A friend opening the link sees only the split.

FIRST VIEWPORT: Phone 390 by 844: header, the symbol and "Split bill" with the introduction, the step bar, then the current step: step 1 the name field and the people; step 2 the receipt button, then the items with their people; step 3 who paid and each person's share in large type; the bar at the bottom on steps 1 and 2. From 1024px: both columns at once (the bill on the left, the split on the right), no step bar, no bottom bar.

FORM: Three steps: dealt structure 3 of the round, chosen by the owner. seed:71b6872ac1fca258. Signature interaction: the steps are free (any tab, any order), and whatever a control sends focus to brings its own step on screen first (focusAfter), so "Show it" from the split lands on the untagged item in step 2.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
