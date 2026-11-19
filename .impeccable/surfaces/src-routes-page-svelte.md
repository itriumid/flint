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
Owner's steer (2026-11-19): the line-item strip built on 2026-11-18 still read as a receipt, because its kept traits (narrow column, right-aligned line items, dashed dividers, heavy closing row) are a receipt's anatomy. Keep only "calm and focused" and "facts up front"; no rows of entries.
History: round 1 (2026-11-18) built the Struk-derived strip (flint #70); this re-roll replaces it.

## Direction contract

THESIS: Flint's index is one calm atlas plate: your device drawn as a single territory inside one border line, the two tools as places within it, and the only ways out drawn as roads, each labelled with what it carries. Privacy is shown as geography, not claimed in a list. It refuses the category's hero over equal cards, and any rows of entries.

OWN-WORLD: Paper ground (graphite in dark); the territory a soft irregular rounded region in paper elevated (graphite surface in dark) bounded by one 2px line in the text color; places marked by a filled dot with a bold name; roads as 3px dashed lines in the text color that cross the border to small outlined destination boxes in muted gray; a legend in a margin column with drawn swatches. One pink pill. No cards, no bands, no shadows, no table rows.

STORY: The visitor reads the name and one line, sees their device as a bounded place holding Split bill and WhatsApp click-to-chat, sees exactly two roads out (a shared bill to our server, encrypted; a chat opened in WhatsApp), reads the legend's facts, and starts a bill from inside the territory.

FIRST VIEWPORT: Desktop: the name at display size with its line under the logo, the legend below it in the left column; the plate on the right on the header's grid: the territory with both places, the pink Split a bill at the Split bill place, the two roads leaving its bottom edge to Our server and WhatsApp with their labels. Phone: name and line, then the territory with both places and the pink action, the roads beginning at the fold; the legend follows.

FORM: The Device Map: the assigned direction, position 5 on the re-rolled ordered list (round 1 re-roll). seed:f3bd9235adcba39f. Signature interaction: a bill in progress appears inside the territory, at the Split bill place, as that bill (people, items, total) with Continue your bill, because it lives on the device; a bill shared from this device appears on its road.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
