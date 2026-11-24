---
version: 1
slug: 'src-routes-page-svelte'
primary_target: 'src/routes/+page.svelte'
related_targets: []
---

# Surface brief: the index (/)

Scope: Flint's index, the front door to the tools, plus the header every page shares and its "All tools" menu. Mode: Persuade (a tool collection's landing page). Build path: code-led (no image generation in this environment).
Audience and job: a first visitor deciding what Flint is and whether to trust free tools with their data; someone who knows which tool they want, often on a phone. Action: open a tool, find one by what they need done, or continue a bill in progress. Proof: what each tool does and what leaves the device, said on the tool, and what never leaves.
Constraints: Rhodonite only (via @itrium/palettes), Plus Jakarta Sans only, pink for the primary action and focus, level AA in both themes, the Content-Security-Policy, copy in src/lib/content.ts and approved before commit.
Owner's steer (2026-11-24): with a third tool (QR code), the index and the way between tools must work for 20 tools or more, with search and an A-to-Z, and switching tools must be easy. A to Z alone "leaves newcomers blind" and makes three tools look like "a tiny, unfinished product"; Search first was liked, but Flint's image is still being built. Each tool keeps its "What leaves it" line. Recent tools approved (the last three opened, by recency, ids only in local storage); favourites deferred until there are enough real tools.
History: #70 strip, #71 Device Map, #73 Rantang, Two halves (round four); this round replaces Two halves.

## Direction contract

THESIS: The index leads with Flint's featured tools as full-width fields edge to edge, each saying what it does, what leaves it and its own pink start, so three tools read as a collection, not a stub; the rest of the catalogue joins below as an A to Z only once there's a rest. It refuses a plain list as the front door and a header that lists every tool.

OWN-WORLD: The halves' world stretched to a row: square-edged full-bleed fields in the theme's own steps (the page's inverse, a step off the page, the page between hairlines), extra-bold names at poster scale, Plus Jakarta Sans, graphite and paper, pink only for each field's start and focus; search as a plain field; "All tools" as a sheet with an A to Z of initials and rows between hairlines.

STORY: A newcomer reads three tools at full size and what each keeps private, and presses a start; someone who knows what they want types it into the search ("wifi", "receipt") or presses "All tools" (or "/") from any page, where the tools they opened lately come first.

FIRST VIEWPORT: Phone 390 by 844: the header with the mark, "Flint" and "All tools"; Flint and its line; the search; then Split bill's field (inverse) with its start on the first screen. From 1024px the three fields side by side under the search, every start on the first screen at 1280 by 800 and 1440 by 900; the header adds the featured tools as direct links.

FORM: Featured, then the rest: the owner's middle way after the dealt hand (A to Z, Search first, Tools rail), chosen over Big by purpose. seed:7c40307dd6e3fe71. Signature interaction: "All tools" opens on any page, from the header or "/", searching by what's needed and leading with the tools opened lately; the index's search answers under the field as it's typed.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
