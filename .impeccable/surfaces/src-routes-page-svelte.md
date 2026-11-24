---
version: 1
slug: 'src-routes-page-svelte'
primary_target: 'src/routes/+page.svelte'
related_targets: []
---

# Surface brief: the index (/)

Scope: Flint's index, the front door to the tools, plus the header every page shares. Mode: Persuade (a tool collection's landing page). Build path: code-led (no image generation in this environment).
Audience and job: someone at a table, phone in one hand, who wants to split a bill or message a number now; and a first visitor deciding whether to trust free tools with their data. Both jobs weigh equally. Action: open a tool, or continue a bill in progress. Proof: what each tool does and what leaves the device, said on the tool, and what never leaves.
Constraints: Rhodonite only (via @itrium/palettes), Plus Jakarta Sans only, pink for the primary action and focus, level AA in both themes, the Content-Security-Policy, copy in src/lib/content.ts and approved before commit.
Owner's steer (2026-11-24): the Rantang (#73) was still "a stack of boxes", and the metaphor itself got in the way. Earlier: the Device Map (#71) and the Struk strip (#70) read as receipts (dashed lines, gray-on-paper monochrome, a narrow column, rows of entries). No metaphor, no column of stacked rounded boxes, no dashes, no maps, no receipts. Keep: the two equal pink starts, the facts, the links between the tools in the header. Round four was rolled in the safer register at the owner's request ("not sure, show options"); the owner chose Two halves over Try it here, The sentence and the category standard.
History: #70 strip, #71 Device Map, #73 Rantang; this round replaces the Rantang.
Open: the tool pages still carry the Device Map's place mark and dashed road out; whether they follow is the owner's next call.

## Direction contract

THESIS: The index is the two tools, split edge to edge: one half of the screen each, at full height, with nothing around them but Flint's name above and the facts below. No metaphor, no cards, no rounded boxes: the halves are the page. It refuses the hero over equal cards and any stacked column of boxes.

OWN-WORLD: Two full-bleed fields with square edges meeting on one vertical line: Split bill's half is always the inverse of the page (owner's choice, 2026-11-24): graphite with dark colors on a light page, paper elevated with light colors on a dark page; WhatsApp click-to-chat's half is paper elevated in light and graphite surface in dark. So the seam reads strongly in both themes. Tool names at poster scale, a clear step above Flint's 60px: 72px from 1280 wide, extra bold, tight, two lines each side by side ("Split / bill") so the halves carry equal mass, the line under each at 24px, "What leaves it" and its sentence small, one large pink start per half. Content aligns with the header's 72rem column (widened from 64rem for this, which also lines the header up with Split bill's wide layout) even though the fields run to the screen's edges. The header is plain: Flint's mark and name left, the two tools with their symbols right, the current page underlined. Facts sit on the page ground below the halves in three columns. No arcs, rails, rims, dashes or shadows.

STORY: The visitor reads Flint and its line, sees two tools as two halves of one screen, reads what each does and what leaves it, presses either start; below, reads what never leaves.

FIRST VIEWPORT: Desktop 1440 by 900 and 1280 by 800: header, then Flint (60px, a step below the tool names) with its line on one baseline, then the two halves filling the rest of the screen, each with its symbol, name, line, what leaves it and its start, both starts above the fold. Phone: header, Flint and its line, then Split bill's field full width with its start above the fold; WhatsApp's field follows directly, edge to edge, no gap.

FORM: Two halves: grounded candidate 3 of 3 in a safer-register re-roll (round four), chosen by the owner. seed:5714cbf60c331228. Signature interaction: a bill in progress already sits in Split bill's half (people, items, total) with Continue your bill, in space kept for everyone, so nothing moves when it arrives.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
