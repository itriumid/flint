---
version: 1
slug: 'src-routes-page-svelte'
primary_target: 'src/routes/+page.svelte'
related_targets: []
---

# Surface brief: the index (/)

Scope: Flint's index, the front door to the tools. Mode: Persuade (a tool collection's landing page). Build path: code-led (no image generation in this environment).
Audience and job: someone at a table, phone in one hand, who wants to split a bill or message a number now; and a first visitor deciding whether to trust free tools with their data. Action: open a tool, or continue a bill in progress. Proof: what each tool yields, and what stays on the device, stated as facts.
Constraints: Rhodonite only (via @itrium/palettes), Plus Jakarta Sans only, pink for the primary action and focus, level AA in both themes, the Content-Security-Policy, copy in src/lib/content.ts and approved before commit. The other pages follow this world later.
Owner's steer: the struk sketch's look without being a receipt: keep one narrow column, line items, dashed dividers and a heavy closing row; drop torn edges, prices, TOTAL, shop header and thanks.
Resolved: the owner approved all the index's new wording (the closing row, the promise rows, the tool rows, the bill-in-progress row) on 2026-11-18.

## Direction contract

THESIS: The index is one narrow strip of line items: each tool, each promise and the point itself stated as a row with its value set right, in tabular figures. It refuses the category default of a hero over a row of equal cards, and refuses the receipt costume it came from.

OWN-WORLD: A single strip of surface (white in light, graphite surface in dark) down a quiet ground (paper elevated in light, the page in dark), hairline sides, groups split by dashed rules in muted gray, rows of name left and value right in tabular numerals, small section headings set inside the strip, one heavy closing row, one pink pill. No cards, no bands, no shadows.

STORY: The visitor learns what Flint is from its name and line, sees the two tools as rows that say what each yields, reads what stays on their device as plain facts with short values, then hits the closing row and the pink action to start.

FIRST VIEWPORT: Phone: name and line on top, then the strip: its first row (the tagline, or the bill in progress), both tool rows and the start of the promise group. Desktop: the name at display size with its line under it (1.25rem, muted), sticky in the left column under the header's logo; the strip, about 34rem wide, ends under "About Itrium" on the header's own grid, its first row the tagline at 1.5rem, tools and promises above the fold; the pink action sits at the strip's end. Amended after the finish review: the tagline stays in the strip, not the left column, because it is the row a bill in progress takes over (the signature interaction), and that row keeps its height so nothing shifts.

FORM: The Struk, de-costumed per the owner's steer: IMPECCABLE'S PICK, position 1 on the ordered list. seed:f3bd9235adcba39f. Signature interaction: with a bill in progress, the strip's first row becomes that bill, with Continue.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
