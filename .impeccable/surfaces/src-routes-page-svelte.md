---
version: 1
slug: 'src-routes-page-svelte'
primary_target: 'src/routes/+page.svelte'
related_targets: []
---

# Surface brief: the index (/)

Scope: Flint's index, the front door to the tools, plus the header navigation every page shares. Mode: Persuade (a tool collection's landing page). Build path: code-led (no image generation in this environment).
Audience and job: someone at a table, phone in one hand, who wants to split a bill or message a number now; and a first visitor deciding whether to trust free tools with their data. Both jobs weigh equally (owner, 2026-11-23). Action: open a tool, or continue a bill in progress. Proof: what each tool yields, and what leaves the device, stated as facts on the tool they concern.
Constraints: Rhodonite only (via @itrium/palettes), Plus Jakarta Sans only, pink for the primary action and focus, level AA in both themes, the Content-Security-Policy, copy in src/lib/content.ts and approved before commit.
Owner's steer (2026-11-23): the Device Map (#71) still read as a receipt, on every cue: dashed lines, gray-on-paper monochrome, a narrow stacked column, and the overall feel. Keep the two equal pink starts and the legend's facts. Add a navigation bar so people can switch tools. No rows of entries, receipts, ledgers, departure boards, maps, dashed lines or a paper-gray page with black ink.
History: round 1 (2026-11-18) the Struk strip (#70); round 2 (2026-11-19) the Device Map (#71); this round replaces it.
Open: the tool pages still carry the Device Map's place mark and dashed road out; whether they take the Rantang is the owner's next call.

## Direction contract

THESIS: Flint is a rantang, a stacked enamel food carrier: the tools are latched tiers in one frame that you carry, and nothing leaves a tier unless you open it. Privacy is the object's construction, said on each tier. It refuses the hero over equal cards, the map, and any rows of entries.

OWN-WORLD: Graphite enamel owns the viewport in both themes (raise from Neo-Tokyo): tiers are wide graphite bands (graphite surface on a graphite page in dark) with a rolled rim, a lighter top edge, on one measured module (raise from the oscilloscope). The carrying handle is the page's only curve (raise from the crease shell): a thick graphite arc that holds the navigation, Flint, Split bill, WhatsApp. Two side rails frame the tiers. Off-white display type at tier scale. Each tool has one fixed symbol (a half-filled circle for Split bill, a speech mark for WhatsApp), reused in the handle and the tier (raise from Toyism). Pink burns only at the latches, the two equal starts. No dashes, no cards, no shadows, no legend.

STORY: The visitor reads Flint and one line on the lid, sees two tiers, reads what each does and, before pressing (raise from algorave), what leaves it (pinned to that tier: raise from tensegrity), reads the base tier's facts (nothing else leaves: no cookies, analytics or trackers; works offline), and starts either tool at its latch, or switches from the handle on any page.

FIRST VIEWPORT: Desktop 1440: the handle arcs across the top with the three links centred under it; the lid (Flint at 96px with its line) then the Split bill and WhatsApp tiers, each 270px tall, name at display size left, what leaves it and the pink latch right of a rim divider; rails down both sides. Phone: the handle shrinks to the header's arc; lid, then each tier full width, edge to edge, name, what leaves, latch; the first tier's latch above the fold.

FORM: The Rantang: the assigned direction, position 5 on the ordered list (round 3). seed:5714cbf60c331228. Signature interaction: the tiers sit latched; hovering or focusing a tier's latch lifts that tier's lid edge a few pixels (none under reduced motion). A bill in progress already sits packed in the Split bill tier: people, items, total and Continue your bill, because it lives on the device.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
