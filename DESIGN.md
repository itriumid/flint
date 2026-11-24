---
name: flint.itrium.id
description: The Rhodonite Specimen, put to work. Itrium's free tools, in the same stone as itrium.id, the two of them split edge to edge.
colors:
  graphite: '#2b2b2b'
  graphite-surface: '#343434'
  graphite-border: '#474747'
  graphite-raised: '#3e3e3e'
  graphite-raised-border: '#4f4f4f'
  off-white: '#f2f2f2'
  muted-gray-on-dark: '#aaaaaa'
  control-edge-on-dark: '#8a8a8a'
  pastel-pink: '#febfca'
  paper: '#fafafa'
  paper-surface: '#ffffff'
  paper-elevated: '#f1f1f1'
  paper-border: '#e4e4e4'
  muted-gray-on-light: '#6b6b6b'
  control-edge-on-light: '#767676'
  deep-rose: '#c46475'
  rose-text: '#a84d60'
typography:
  tool-name:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '4.5rem'
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: '-0.04em'
  display:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '4.5rem'
    fontWeight: 700
    lineHeight: 1
    letterSpacing: '-0.025em'
  index-name:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '3.75rem'
    fontWeight: 800
    lineHeight: 1
    letterSpacing: '-0.04em'
  headline:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '2.25rem'
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: '-0.025em'
  lead-line:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1.5rem'
    fontWeight: 400
    lineHeight: 1.375
  stays-heading:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1.5rem'
    fontWeight: 700
    lineHeight: 1.33
  fact:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1.125rem'
    fontWeight: 400
    lineHeight: 1.375
  start:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1.125rem'
    fontWeight: 700
    lineHeight: 1.55
  title:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1.125rem'
    fontWeight: 600
    lineHeight: 1.55
  nav:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1rem'
    fontWeight: 600
    lineHeight: 1.5
  minor-heading:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1rem'
    fontWeight: 700
    lineHeight: 1.5
  body:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.5
  leaves-heading:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '0.875rem'
    fontWeight: 700
    lineHeight: 1.43
  control:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '0.875rem'
    fontWeight: 400
    lineHeight: 1.43
  road-label:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '0.875rem'
    fontWeight: 600
    lineHeight: 1.43
  label:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '0.875rem'
    fontWeight: 500
    lineHeight: 1.43
  button:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '0.875rem'
    fontWeight: 600
    lineHeight: 1.43
rounded:
  none: '0px'
  focus: '4px'
  sm: '0.5rem'
  md: '0.75rem'
  lg: '1rem'
  xl: '1.5rem'
  full: '9999px'
spacing:
  gutter-panel: '0.75rem'
  gutter-phone: '1.25rem'
  gutter-wide: '2rem'
  card: '1.25rem'
  card-wide: '1.5rem'
  half-top-phone: '2.5rem'
  half-top: '2.5rem'
  half-seam-gutter: '3rem'
  half-seam-gutter-wide: '4rem'
  half-height: '35rem'
  kept-line: '3rem'
  section: '5rem'
  dot: '1rem'
  symbol-nav: '1.25rem'
  symbol-half-phone: '2rem'
  symbol-half: '2.5rem'
  node-width: '7rem'
  node-height-tool: '3rem'
  road-label-width-tool: '18rem'
  road-out-indent: '1.5rem'
  control-compact: '2.25rem'
  touch-target: '2.75rem'
  form-width: '36rem'
  tool-width: '42rem'
  content-width: '72rem'
components:
  button-primary:
    backgroundColor: '{colors.pastel-pink}'
    textColor: '{colors.graphite}'
    rounded: '{rounded.full}'
    padding: '0.75rem 1.5rem'
    typography: '{typography.button}'
  start:
    backgroundColor: '{colors.pastel-pink}'
    textColor: '{colors.graphite}'
    rounded: '{rounded.full}'
    padding: '1rem 1.75rem'
    typography: '{typography.start}'
  button-secondary:
    backgroundColor: 'transparent'
    textColor: '{colors.off-white}'
    rounded: '{rounded.full}'
    padding: '0.75rem 1.5rem'
    typography: '{typography.label}'
  button-secondary-hover:
    backgroundColor: '{colors.graphite}'
  button-small:
    backgroundColor: 'transparent'
    rounded: '{rounded.full}'
    padding: '0 1rem'
    height: '{spacing.control-compact}'
    typography: '{typography.label}'
  field:
    backgroundColor: '{colors.graphite}'
    textColor: '{colors.off-white}'
    rounded: '{rounded.sm}'
    padding: '0.625rem 0.75rem'
    typography: '{typography.control}'
  tag-chip:
    backgroundColor: 'transparent'
    rounded: '{rounded.full}'
    padding: '0 0.875rem'
    height: '{spacing.control-compact}'
    typography: '{typography.control}'
  tag-chip-selected:
    backgroundColor: '{colors.pastel-pink}'
    textColor: '{colors.graphite}'
    rounded: '{rounded.full}'
  card:
    backgroundColor: '{colors.graphite-surface}'
    rounded: '{rounded.lg}'
    padding: '{spacing.card}'
  inset-list:
    backgroundColor: '{colors.graphite}'
    rounded: '{rounded.md}'
  half-split-bill:
    backgroundColor: '{colors.graphite}'
    textColor: '{colors.off-white}'
    rounded: '{rounded.none}'
    padding: '3rem 4rem 3rem 2rem'
    height: '{spacing.half-height}'
  half-split-bill-dark:
    backgroundColor: '{colors.paper-elevated}'
    textColor: '{colors.graphite}'
  half-whatsapp:
    backgroundColor: '{colors.paper-elevated}'
    textColor: '{colors.graphite}'
    rounded: '{rounded.none}'
    padding: '3rem 2rem 3rem 4rem'
    height: '{spacing.half-height}'
  half-whatsapp-dark:
    backgroundColor: '{colors.graphite-surface}'
    textColor: '{colors.off-white}'
  tool-name:
    typography: '{typography.tool-name}'
  tool-symbol:
    size: '{spacing.symbol-half}'
  nav-link:
    typography: '{typography.nav}'
    height: '{spacing.touch-target}'
  road-out-label:
    typography: '{typography.road-label}'
    width: '{spacing.road-label-width-tool}'
  road-out-node:
    backgroundColor: '{colors.paper}'
    textColor: '{colors.muted-gray-on-light}'
    rounded: '{rounded.sm}'
    width: '{spacing.node-width}'
    height: '{spacing.node-height-tool}'
    typography: '{typography.control}'
  panel:
    backgroundColor: '{colors.graphite-surface}'
    textColor: '{colors.off-white}'
    rounded: '{rounded.xl}'
    width: '{spacing.content-width}'
  panel-light:
    backgroundColor: '{colors.paper-elevated}'
    textColor: '{colors.graphite}'
  place-mark:
    textColor: '{colors.graphite}'
    typography: '{typography.headline}'
  place-mark-dark:
    textColor: '{colors.off-white}'
  update-notice:
    backgroundColor: '{colors.graphite-surface}'
    textColor: '{colors.off-white}'
    rounded: '{rounded.lg}'
    padding: '0.625rem 0.625rem 0.625rem 1rem'
    typography: '{typography.control}'
  update-notice-light:
    backgroundColor: '{colors.paper-surface}'
    textColor: '{colors.graphite}'
  running-total:
    backgroundColor: '{colors.graphite-surface}'
    padding: '0.75rem 1.25rem'
  skip-link:
    backgroundColor: '{colors.pastel-pink}'
    textColor: '{colors.graphite}'
    rounded: '{rounded.sm}'
    padding: '0.5rem 1rem'
---

# Design System: flint.itrium.id

## Overview

**Creative North Star: "The Rhodonite Specimen, put to work"**

The tools are cut from the same stone as itrium.id. That site is The Rhodonite Specimen (`DESIGN.md`
in the `website` repository): a graphite matrix with a pink vein, where gray is the body and pink
marks what a visitor should find. Here the specimen leaves the display case and goes onto the
workbench. The world is the same: Plus Jakarta Sans for everything, graphite and paper, pastel pink
with its two deepenings, flat tonal surfaces, pills and soft corners, one drawn arrow. Only the job
changes. itrium.id persuades; a tool gets out of the way.

The index is Two halves: the two tools, split edge to edge, one half of the screen each. No
metaphor, no cards, no rounded boxes: the halves are the page. Two full-bleed fields with square
edges meet on one vertical seam. Split bill's half is always the inverse of the page (graphite on a
light page, paper elevated on a dark one), and WhatsApp click-to-chat's half is a tonal step off the
page, so the seam reads strongly in both themes. Each half carries its tool's symbol, its name at
poster scale, what it does, what leaves it, and one large pink start. Flint's name and its line sit
above the halves, a step below the tools' names, and what never leaves sits on the page below them.
It replaced the Rantang (#73), which replaced the Device Map (#71), which replaced the line-item
strip (#70). A tool page keeps the same plain header and, below it, the place mark and the road out
from the Device Map: the person using it is at a restaurant table with a phone in one hand and a
group waiting. Whether the tool pages follow the index is an open decision for the owner.

Components are soft and sure-footed, and tactile without being playful. Every control has a round,
generous target that a thumb finds the first time (2.75rem on touch screens) and an edge you can see
(3:1 against the page and the card). They feel good to press but never perform. Density on the
index is bold and wide; inside a tool it is calm and working: forms sit in a narrow column of 36 to
42rem, inset lists and notes nest one tonal step down inside cards, and the running total stays at
the bottom of a phone's screen while the bill is made.

Light and dark are equal. Each follows the visitor's system unless the footer says otherwise, and
neither is a courtesy version of the other: every new pairing is designed and checked in both. The
system refuses what itrium.id refuses: generic SaaS ornament (gradient text, icon-card rows,
invented numbers), drop shadows on anything but a floating list, pure black and white, decorative
pink, and small labels above headings. It refuses what only a tool can get wrong: a hero that pushes
the tool off a phone screen, and state shown by color alone. And on the index it refuses what the
owner has turned down four times over: anything that reads as a receipt (dashed lines, gray-on-paper
monochrome, a narrow column, rows of entries), any metaphor (a map, a food carrier), and a column of
stacked rounded boxes.

**Key Characteristics:**

- One stone with itrium.id: the same tokens, typeface, radii, button shapes and arrow.
- The index is two full-bleed halves, square-edged, meeting on one vertical seam from 768 px, their
  content lined up with the header's 72rem column.
- Split bill's half is the inverse of the page in both themes; WhatsApp's half is a tonal step off
  the page.
- The tools' names lead the page at every width, a step above Flint's own name.
- Each tool has one fixed symbol, drawn in the text color, the same in the header and in its half.
- Pink only at the two starts on the index (equal starts), and at one primary action per tool view.
- A tool page opens with a place mark, then the tool, with its one road out drawn under the control
  that takes it.
- Light and dark are equal. Both follow the system, unless System, Light or Dark is chosen in the
  footer.
- Flat surfaces with tonal steps. The only shadow is under the open searchable list.
- Every control has a 3:1 edge (`--control-border`), a target at least 2.75rem tall on touch
  screens, and 16px text on touch screens so iOS doesn't zoom.
- Motion is CSS only and off under reduced motion.

## Colors

Rhodonite, as itrium.id applies it, plus the two edge grays that the tools' controls need. The
tokens live in `src/app.css`: the palette's `--bg`, `--surface`, `--elevated`, `--border`, `--text`,
`--muted`, `--accent`, `--on-accent`, `--accent-edge` and `--focus` from `@itrium/palettes`, and the
site's own `--control-border` and `--accent-text`. Each swaps value between dark and light, by the
device's setting unless the footer's choice says otherwise. The `.inverse-field` scope sets them
again for Split bill's half, from the other theme. The binding rules are in the handbook's
`itrium/brand.md`.

### Primary

- **Pastel pink** (`pastel-pink`): the accent, always as a fill. The primary button, the index's
  two starts, the selected tag chip, the selection highlight and the skip link. On graphite
  (including Split bill's half on a light page) it's also the focus outline, the line of a state,
  and pink text.
- **Deep rose** (`deep-rose`): pink as a line on light backgrounds (`--accent-edge`). The edge of
  a selected chip, an unsure receipt line, a note's edge, the checked box or radio button, and the
  start's edge in any light field (including Split bill's half on a dark page). It reaches 3:1 on
  white.
- **Rose text** (`rose-text`): pink as text on light backgrounds (`--accent-text`). Action lines
  with the arrow, such as the tools elsewhere and a bill shared from this device. 4.8:1 on paper
  elevated, 5.4:1 on white: AA with little headroom, so never put it on a pink tint.

### Neutral

- **Graphite** (`graphite`): the dark page, the field fill and inset lists in dark mode, light
  mode's text, and the text on pink, always. On a light page it is also Split bill's half.
- **Graphite surface** (`graphite-surface`) and **graphite border** (`graphite-border`): cards and
  their dividing lines in dark mode, the running total's bar, the error page's panel in dark mode,
  and WhatsApp's half on a dark page.
- **Graphite raised** (`graphite-raised`, the palette's elevated gray) and **graphite raised
  border** (`graphite-raised-border`): inside the error page's panel in dark mode, what steps up
  from it and its dividing lines. The raised border (#4f4f4f) is the one structural gray outside the
  palette, used only there (`.band` in `src/app.css`), a step above graphite raised.
- **Off-white** (`off-white`): text on graphite, including Split bill's half on a light page.
- **Muted gray on dark** (`muted-gray-on-dark`) and **muted gray on light**
  (`muted-gray-on-light`): secondary text such as Flint's line, "What leaves it", introductions,
  hints, the footer. Each half takes the one for its own ground, not the page's.
- **Control edge on dark** (`control-edge-on-dark`) and **control edge on light**
  (`control-edge-on-light`): the border of every field, button, chip and floating list
  (`--control-border`). They reach 3:1 against both the page and a card, where the softer border
  colors don't.
- **Paper elevated** (`paper-elevated`, `--elevated`): a step down from paper. WhatsApp's half on
  a light page, Split bill's half on a dark page, and the error page's panel in light mode. Every
  text and line color still passes on it: text 12.5:1, muted 4.7:1, rose text 4.8:1, control edge
  4.0:1.
- **Paper** (`paper`), **paper surface** (`paper-surface`) and **paper border** (`paper-border`):
  light mode's page (and field fill, and the fill of a road out's box), cards, and dividing lines.
- **A tool page's map lines** are in the text color: the place mark's dot and the road out's 3 px
  dashed line. The box a road reaches is outlined in muted gray, since it is outside the device and
  not ours.

### Named Rules

**The Vein Rule.** Pink marks something: the primary action, focus, what's selected, or the way
onward. If you can't say what a pink element marks, it should be gray. Pink means one thing at a
time, which is not the same as one element. In a tool, one pink button per view. On the index, one
pink start in each tool's half, the two tools' equal starts ("Split a bill", "Chat with a number"):
one meaning, two pills. Rose-text action lines serve the tools elsewhere and a shared bill as their
way onward, and nothing else is pink. The seam, the fields, the tool symbols, a tool page's place
mark and its road out are never pink.

**The Inverse Field Rule.** Split bill's half (the `.inverse-field` scope) takes the colors of the
theme the page is not in, every one of them: on a light page graphite, with off-white text, muted
gray on dark, pink focus, pink edges and pink text, and the dark control edge; on a dark page paper
elevated, with graphite text, muted gray on light, deep-rose edges, rose text, graphite focus, and
the light control edge. Nothing inside it reads the page's own colors. The owner chose this on
2026-11-24 and accepted its cost: a bright band across a dark page, in exchange for a seam that
reads strongly in both themes. The contrast for each pairing is in the comment above the scope in
`src/app.css`.

**The Two Borders Rule.** `--border` is for lines nothing depends on, such as card edges and
dividers. Anything a person has to find in order to use it gets `--control-border`.

**The Graphite Text Rule.** Text on pink is graphite, never white. On light backgrounds pink text
is rose text and pink lines are deep rose. Pastel pink is never text or a line there.

**The Every-Surface Rule.** Contrast is checked on every surface text sits on: page, card, inset
list, note, running total, update notice, the error page's panel, and each half in both themes.
Text needs 4.5:1. Focus outlines, control edges and state lines need 3:1. The tightest are Split
bill's half on a light page (control edge 3.7:1) and on a dark page (muted 4.7:1, rose text 4.8:1).

## Typography

**Display Font:** Plus Jakarta Sans Variable (with `ui-sans-serif, system-ui, sans-serif`)
**Body Font:** Plus Jakarta Sans Variable, the same file

**Character:** One variable typeface from the Indonesian foundry Tokotype carries every role, the
same as on itrium.id. Hierarchy comes from weight and size alone: extra-bold, tightly tracked tool
names at poster scale, bold headings in sentence case, and plain, readable working text. It's
served from the site itself.

### Hierarchy

- **Tool name** (`tool-name`): a tool's name in its half, extra-bold at -0.04em, 0.95 line height,
  under its symbol. 2.5rem (40px) on phones, 3.75rem (60px) from 640 px, 3rem (48px) from 768 px
  where the halves sit side by side, 4rem (64px) from 1024 px, and the token size (72px) from 1280 px.
- **Display** (`display`): the error page's heading. 3rem on phones, the token size from 640 px.
- **Index name** (`index-name`): "Flint", the index's `h1`, extra-bold at -0.04em, always one step
  below the tools' names: 2.25rem (36px) on phones, 3rem (48px) from 640 px, 2.25rem (36px) from
  768 px, 3rem (48px) from 1024 px, and the token size (60px) from 1280 px.
- **Headline** (`headline`): a tool's title in its place mark, 1rem right of the place's 1rem dot,
  with the introduction under it. 1.875rem on phones, the token size from 640 px.
- **Lead line** (`lead-line`): Flint's muted line beside its name (under it when they don't fit),
  at most 36rem wide; and what a tool does, in its half. 1.125rem on phones, the token size from
  640 px.
- **Stays heading** (`stays-heading`): "Nothing else leaves", under the halves. 1.25rem on phones,
  the token size from 640 px.
- **Fact** (`fact`): what leaves a tool, in its half, at most 28rem wide, and the three facts under
  the halves. 1rem on phones, the token size from 640 px.
- **Start** (`start`): the label of a half's pink start, bold, never wrapping.
- **Title** (`title`): a section card's heading inside a tool (`cardHeading`), semibold.
- **Nav** (`nav`): the header's links to the tools, semibold, each with its symbol.
- **Minor heading** (`minor-heading`): the heading of the tools on sites of their own, under the
  facts, bold at body size.
- **Body** (`body`): a tool's introduction (at 1.625 line height under the place mark, muted, or in
  the text color at medium weight in a friend's view of a shared bill), and running prose.
- **Leaves heading** (`leaves-heading`): "What leaves it", bold and muted at 0.875rem, heading the
  fact it sits over in each tool's half.
- **Control** (`control`): field text, chips, notes, hints, amounts, a road out's box and the shared
  bill's line in Split bill's half, at 0.875rem. On touch screens field text rises to 1rem
  (`pointer-coarse:text-base`) so iOS Safari doesn't zoom the page.
- **Road label** (`road-label`): what a road out carries, semibold beside its line under a tool's
  control, at most 18rem wide (`road-label-width-tool`).
- **Label** (`label`): field labels, secondary and small button labels.
- **Button** (`button`): the primary button's label, semibold.

Amounts that line up or change in place (counts, the running total) use tabular figures.

### Named Rules

**The One Typeface Rule.** Plus Jakarta Sans does everything. Never add a second family, and never
load a font from another domain.

**The Tools Lead Rule.** On the index, the tools' names are the largest type at every width, and
Flint's own name steps down with them: 40 over 36 on phones, 60 over 48 from 640 px, 48 over 36
from 768 px, 64 over 48 from 1024 px, 72 over 60 from 1280 px. A new size for one is a new size for
the other.

**The No Kicker Rule.** A heading is the first thing in its block. No eyebrow, category label,
small uppercase heading or back link sits above it. Nothing here is set in uppercase. A line that
says more about a heading goes under it or beside it, as Flint's line does. A half's symbol sits
above the tool's name, but it is the tool's picture, not a label.

## Layout

- **Widths:** the header, the footer, Flint's name above the halves and the facts below them sit in
  the 72rem content column (`content-width`). The error page's panel is the same width, inset from
  the viewport by 0.75 to 1.25rem (`gutter-panel`). A tool sits in a narrow working column: 36rem
  (`form-width`) for a single form like WhatsApp click-to-chat, 42rem (`tool-width`) for Split bill.
- **Gutters:** 1.25rem on phones (`gutter-phone`), 2rem from 640 px (`gutter-wide`).
- **Rhythm:** a tool page ends with 5rem of space (`section`); the index with 4rem on phones and
  6rem from 1024 px. Within a tool, cards stack 1.25 to 1.5rem apart, and fields and their hints
  step in 0.5rem to 1rem.
- **The halves (index):** two fields, one per tool, Split bill first. On phones they stack full
  width, edge to edge, with no gap between them. From 768 px they sit side by side in two equal
  columns, at least 35rem tall (`half-height`), meeting on the seam. The fields run to the screen's
  edges, but their content lines up with the header's column: each half's outer padding is
  `max(2rem, calc((100cqw - 72rem) / 2 + 2rem))` (`100cqw` is `main`'s width, a size container, so
  no scrollbar's width spills over), and its inner padding, beside the seam, is 3rem from 768 px
  (`half-seam-gutter`) and 4rem from 1024 px (`half-seam-gutter-wide`). Each half is padded 2.5rem at
  the top (`half-top-phone`, `half-top`) and 3rem at the bottom.
- **Inside a half:** the symbol (2rem on phones, 2.5rem from 640 px), the name 1 to 1.25rem under
  it, what the tool does, "What leaves it" and the fact, a line kept for a shared bill, then the
  start. Side by side, each name keeps two lines of room (`min-height: 1.9em`), and "Split bill" is
  set as narrow as its longest word, so it breaks "Split / bill" and the rows of the two halves meet
  across the seam. The start drops to the bottom of the half (`margin-top: auto`) from 768 px.
- **Above and below the halves:** Flint's name and its line share one baseline, 2.5rem apart, and
  wrap when they don't fit. Under the halves, "Nothing else leaves" and its three facts, in three
  columns from 768 px, 2.5rem apart; then, past a hairline, the tools on sites of their own and
  "Read the source", side by side and wrapping.
- **What the browser remembers:** read after the page loads from what the browser already keeps,
  never stored or sent. A bill in progress in this tab lives on the device, so it is said in Split
  bill's half, in place of what the tool does ("Your bill in progress: 3 people, 5 items, Rp
  459.250."), and the start says "Continue your bill". A bill shared from this device is what left
  it, so it is said under what leaves it, with a rose-text action line to it. Both arrive into space
  already kept for them.
- **First viewport:** at 1440 by 900 and 1280 by 800, the header, Flint and its line, and both
  halves with both starts are on the first screen. On a phone, Split bill's start is. At 1024 by 768
  the starts end at 746 px, on the first screen too; Flint and its line sit tighter from 1024 px
  (1rem above, 2rem below) to make room.
- **Tool page:** the header, then a place mark (the dot, the title and the introduction, nothing
  else), lined up with the tool's own column, 1rem under the header on phones and 2rem from 640 px,
  then the tool 1.5rem under it. No closing panel, because the running total owns the bottom of the
  screen.
- **Split bill from 1024 px:** two columns in the 72rem width. The bill on the left; the split on
  the right in a 26rem column that stays in view (sticky, scrolling on its own when it's taller than
  the screen) and updates as the bill changes. Before any item, the column holds one muted line
  saying the split will show there. Below 1024 px it follows the bill in one column.
- **Phones:** every control is at least 2.75rem tall on touch screens (`touch-target`), and
  2.25rem (`control-compact`) with a fine pointer. Split bill's running total is sticky (not
  fixed) at the bottom below 1024 px, padded for the home indicator, and the page scrolls focused
  fields clear of it (`scroll-padding-bottom: 6rem`).
- **Breakpoints:** Tailwind's defaults, 640, 768, 1024 and 1280 px, plus `pointer-coarse` for touch
  sizing.

**The Two Halves Rule.** The index is the tools, one full-bleed field each, side by side from
768 px and meeting on one seam. A field holds its tool's symbol, name, what it does, what leaves it
and its own pink start, and nothing else. No cards inside or around them, no hero over them, no
column of boxes.

**The Kept Space Rule.** What the browser remembers arrives into a space already kept for it (what
a tool does keeps two lines, 2.75em; the shared bill's line keeps 3rem, `kept-line`, in both halves),
so nothing moves under a finger when it appears.

**The Slab Rule, for tools.** A tool page has no slab at either end: it opens with a place mark,
a dot and the tool's name, and never closes with a panel. On a phone, the tool comes before the
frame.

**The First Screen Rule.** On a phone, the first field of a tool is visible without scrolling, and
on the index Split bill's start is. If a new element would push either down, it belongs lower on
the page.

**The Answer In Reach Rule.** Wherever a tool is being filled in, its answer is one glance or one
tap away: the running total below 1024 px, the split's own column above. Someone opening a shared
result lands on it, not on the form that made it.

## Elevation & Depth

Surfaces are flat. Depth comes from tonal steps (page, then card, then an inset list or note one
step back down inside the card, then raised inside a panel) and from borders. The index has no
depth at all: its halves are two flat fields side by side, told apart by tone. The one shadow is
the floating list of the searchable select, which genuinely sits above the content and has to be
read against it. There are no glows, in either theme.

### Shadow Vocabulary

- **Floating list** (`box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`):
  the open option list of `SearchableSelect`, and anything else that floats over the page. Nothing
  else.

### Named Rules

**The Only Floating Things Cast Shadows Rule.** Halves, cards, buttons, chips, the error page's
panel, the road boxes and the running total never get a drop shadow. A control responds by filling
with the next tonal step, a header link by its underline, and an arrow by moving 4 px on.

## Shapes

Soft and rounded, with the radius growing with the size of the object, on the same scale as
itrium.id. Buttons, starts, chips and the info button are pills (`full`). Fields, notes and
floating lists get 0.5rem (`sm`), and options inside a list a little less (0.375rem). Inset lists,
receipt lines and the receipt photo get 0.75rem (`md`). Cards and the update notice get 1rem (`lg`).
The error page's panel gets 1.5rem (`xl`). The focus outline is 2 px at 4 px radius (`focus`), 3 px
away from the element. Headings and cards that the page itself moves focus to (`tabindex="-1"`)
show none: focus still moves and is announced, but a ring there read as a stray selection box. Edges
are 1 px hairlines, notes included.

The index's halves are the one exception to rounding: square edges (`none`), running to the
screen's edges and meeting on one vertical line, with no border, rim or rule along the seam. The
change of tone is the line. The detector runs with no ignores (`.impeccable/config.json`).

Each tool has one symbol, drawn as a 4-unit stroke on a 40-unit square in the text color: a circle
with its left half filled for Split bill, a speech mark for WhatsApp click-to-chat
(`src/lib/ToolSymbol.svelte`). 1.25rem in the header, 2rem in a half on phones and 2.5rem from
640 px. It repeats the tool's name, so it's hidden from screen readers.

On a tool page, a place mark's dot is a 1rem filled circle in the text color, and a road out is a 3
px dashed line in the text color to a 7 by 3rem box (`node-width`, `node-height-tool`) with 0.5rem
corners, a 2 px muted-gray outline and the page's fill. Dashed lines elsewhere in a tool mean
something else: the place a removed item was, and an empty state in WhatsApp click-to-chat. The
index has no dashed line.

The arrow is drawn, not typed: one SVG, the same as itrium.id's `Arrow.svelte`, with a 2-unit
round-capped stroke in the current color, sized to the text beside it. A selected chip carries a
check mark, so selection never rests on color alone.

**The Square Seam Rule.** The halves have square edges and meet on one straight line. No arcs,
rails, rims, dashes or shadows on the index.

## Components

### Buttons

Pressable pills, soft and sure-footed. There are three kinds, and pink is the main action.

- **Shape:** fully rounded (`full`), 0.75rem by 1.5rem of padding, label and icon centered with a
  0.5rem gap.
- **Primary:** pastel pink with graphite text, semibold, and a 1 px `--accent-edge` border: deep
  rose in light mode, where pastel pink alone is 1.5:1 on paper and the pill had no shape, and the
  fill itself in dark mode, where it doesn't show. One per view in a tool: "Read the receipt", "Add
  to the bill", "Open in WhatsApp" (messaging a number is the job most people come for; "Copy link"
  beside it is secondary).
- **Start:** the primary button at the scale of its half, 1rem by 1.75rem of padding and bold
  1.125rem (`start`), never wrapping, at the bottom of the half from 768 px. One per half: "Split a
  bill" (or "Continue your bill") and "Chat with a number". Its edge follows the half's ground, not
  the page's: pink on graphite, deep rose on paper elevated.
- **Secondary:** transparent, with a 1 px control-edge border and medium weight. Every other
  action beside the primary. On the page itself ("Read the source") it fills with the elevated
  step on hover.
- **Small:** the secondary's look at 2.25rem tall with 1rem of padding (2.75rem on touch screens).
  For actions inside a card, the running total and the update notice.
- **Hover:** the primary and the start fade to 85% opacity. Secondary and small fill with the page
  color.
- **Disabled:** a not-allowed cursor, with a line beside it saying why (`SPLIT_BILL.missing`).
  Small buttons keep their edge and turn their words muted, which stays above 4.5:1, including
  "Add person" and "Add item" while they're unavailable (`aria-disabled`); fading them to 50% took
  the words down to 3:1. The primary and secondary still fade to 50%.
- **Focus:** a 2 px outline 3 px away, pastel pink on graphite and graphite on light backgrounds,
  by the ground the button sits on (so in Split bill's half, the inverse of the page's).
- **Text actions:** small actions that aren't the point, such as "Everyone", "Nobody" and
  "Remove", are muted, underlined 4 px below the text, and turn to the text color on hover. They
  keep the touch target height.

### Tag chips (signature)

The people on a bill, tapped to say who had what.

- **Unselected:** a transparent pill with a control-edge border and 0.875rem text, at least 2.25rem
  tall (2.75rem on touch screens), with 0.875rem of side padding. Hover fills with the surface
  color.
- **Selected:** pastel pink fill, graphite text, medium weight, a deep-rose edge on light
  backgrounds, and a leading check mark. `aria-pressed` carries the state.
- **Counting:** when people had different numbers of an item, a counted chip looks like a
  selected one (pink, with the check mark) and holds round buttons with a drawn minus and plus
  (2rem, or 2.75rem on touch screens) around a tabular count.
- **Everyone:** an underlined text button on the line of the question, "Who had this?", at its
  right end, never in the row of names: at six people it took a row of its own under them on
  most items.

### Fields

- **Style:** a 1 px control-edge border, 0.5rem radius (`sm`), filled with the page color, so a
  field sits one step back inside a card. 0.625rem by 0.75rem of padding, and 0.875rem text that
  rises to 1rem on touch screens.
- **Label:** above, medium weight, 0.375rem away.
- **Feedback:** what we read or why we can't goes under the field, muted, as it's typed
  (`SPLIT_BILL.amounts`). Problems are said in words, never only in red.
- **Beside a field:** a button next to a field is as tall as it, 42 px (46 px on touch screens).
- **Never a native `<select>`:** use `SearchableSelect` or radio buttons.

### Searchable select

A field that opens a floating list: 0.5rem radius, control-edge border, the surface color, 0.25rem
inset, and the floating-list shadow. The active option, where keyboard focus is in the list, fills pink like any focus; hovering one
fills it with the page color. It's capped at
16rem tall and scrolls. What's typed matches anywhere in a choice, and choices with a word starting
with it come first: "mal" lists Malaysia before Guatemala (`src/lib/search.ts`). A
word that is exactly what's typed comes before both, and countries are found by the other names
they go by too, never shown: "uk", "usa", "uae", or their names in Indonesian ("Jepang"). Those
count only from a word's start: letters inside a name nobody can see would bring a choice with
nothing to say why ("uk" in "Luksemburg").

### Cards

- **Section cards (in a tool):** 1rem radius (`lg`), the surface color with a 1 px `--border`
  edge, 1.25rem of padding (1.5rem from 640 px), and a title-size heading 1rem above the content.
  They don't respond to hover, because they aren't links. Cards belong to the tools; the index
  has none.
- **Inset lists and receipt lines:** one tonal step back inside a card (page color), 0.75rem
  radius (`md`), divided by hairlines. A receipt line we couldn't check takes a pink edge and a
  "Check this" mark with an icon, not just the color.

### Two halves (signature, the index)

The index as the two tools, split edge to edge: one half of the screen each, with Flint's name
above and the facts below (`src/routes/+page.svelte`). It replaced the Rantang (#73), a stacked food
carrier the owner found still "a stack of boxes", whose metaphor got in the way; before that the
Device Map (#71) and the line-item strip (#70), both turned down as receipt-like.

- **Split bill's half:** the inverse of the page (`.inverse-field`): graphite with dark mode's
  colors on a light page, paper elevated with light mode's colors on a dark page.
- **WhatsApp click-to-chat's half:** paper elevated on a light page, graphite surface on a dark
  page, with the page's own colors.
- **Contents, top to bottom:** the tool's symbol; its name in tool-name type (the section's
  heading); what it does in lead-line type, or the bill in progress; "What leaves it" in
  leaves-heading type and the fact in fact type; a line kept for a bill shared from this device,
  with an action line to it (empty in WhatsApp's half, which keeps the same space); and the start.
- **Under the halves:** "Nothing else leaves" in stays-heading type, then three facts: what you
  type, your bill in progress and your theme stay on this device; no cookies, no analytics, no
  trackers; with no connection, both tools still open.
- **Motion:** none of its own. The starts fade on hover like any primary button, and the shared
  bill's action line nudges its arrow.

**The Pinned Fact Rule.** What leaves a tool is said in that tool's half, above its start, before
anyone presses it. What never leaves is said once, under the halves. Never collect them into a
legend or a list apart from the tools they concern.

**The Peer Rule.** The two halves are equal: the same type, the same rhythm, the same size of start.
Neither tool is a hero over the other; the inverse field gives Split bill the stronger tone only so
the seam shows, not to rank it.

### Road out (on a tool page)

Each tool's one way out of the device, drawn under the control that takes it, saying the same fact
as "What leaves it" in the tool's half on the index (`src/lib/RoadOut.svelte`, words from
`ROADS_OUT`). It is the Device Map's road, kept on the tool pages as they are; whether they follow
the index is the owner's open decision.

- **Place:** indented 1.5rem from the controls (`road-out-indent`), with about 1.5rem before the
  next control, so it reads as a note on the control, not as another button.
- **Road:** a 3 px dashed line in the text color, in a 1rem column, starting flush at the control's
  bottom edge and running down beside its label.
- **Label:** road-label type, at most 18rem wide (`road-label-width-tool`), 0.75rem right of the
  line.
- **Box:** under the label, 7 by 3rem, the page's fill, a 2 px muted-gray outline at 0.5rem
  corners, its name centered in muted control type ("Our server", "WhatsApp").
- **Where:** under "Copy a link to this bill" in Split bill, and under "Open in WhatsApp" in
  WhatsApp click-to-chat. The line is hidden from screen readers; the label and the box are read.

**The Hanging Road Rule.** A road out hangs from the one control that takes it, and only where the
site really makes the connection. A friend's "Copy the link" copies the link they opened, which
goes nowhere new, so no road is drawn under it.

### Notes

A tinted aside for what someone should know right now: an unchecked receipt, a total that doesn't
match. Page color, 0.5rem radius, 0.75rem of padding, and a 1 px pink edge all round (deep rose on
light backgrounds), the same edge an unsure receipt line takes. An explanation opened from a
toggletip uses the same form with a gray hairline.

**The Whole Edge Rule.** A note is marked by its whole edge, never by a thick bar down one side.

### Toggletip

A round ⓘ button (2rem, 2.75rem on touch screens) beside the setting it explains. Pressed, it
opens the explanation as a gray-barred note on the next line, never as a floating bubble.

### Chat result (WhatsApp click-to-chat)

The form asks for the country, the number and then the optional message, all before the result:
the message goes into the link, so typed after it, it changed a link and a QR code out of sight.
The answer is the number, as people read it, in groups: "+62 811-2345-678" in bold 1.5rem (written the way numbers are where they're from, for the
countries people most often message: Japan's "90-1234-5678", the United Kingdom's "7700-900123"), in an
inset with a hairline, with the country it's for in muted text under it. The same number is read
back in one muted line right under the field ("= +62 811-2345-678, Indonesia"), like an amount in
Split bill, in a slot two lines tall that the hint and any problem share, so the result under
it never moves: on a phone the keyboard covers the result while the number is typed, and this is the
line to check it against. Then anything decided on the person's behalf, each with the drawn warning sign in medium weight (letters
left out, an extension WhatsApp can't dial, a number at the short end for its country). Then "Open
in WhatsApp" and "Copy link" side by side, with the road out to WhatsApp under them, neither ever breaking onto two lines (on the narrowest
phones Copy moves under Open); Copy says "Copied" for three seconds after a press, where the
press was, as well as in the status line under the result, and the raw link in small muted monospace, selectable.
Under it, one muted line on using the link: in a profile or a message, or as a QR code checked once
before it's printed. Everything about the answer sits together, right under the field it comes from:
nothing floats over it, so nothing can cover it on a short phone. A number too short or too long for
its country is a problem in words, never a link. The problem starts with the drawn warning sign, and the
field takes the deep-rose edge, as a Split bill line to check does. A number with its country code
typed twice gets a button under the problem, "Use +62 812-3456-7890", when the number with the code
once works. "Too short" and "add the area code" wait until the
typing stops: every number is too short halfway through it.

### QR code to print (WhatsApp click-to-chat)

Under the line on using the link, "QR code to print" is a disclosure with the drawn arrow, closed by
default since most people came to message a number. Open, it shows the code drawn in the browser
(`src/lib/qr.ts`, encoded by qrcode-generator): graphite on white with its four-module margin in
both themes, because scanners read dark on light and that's what prints. "Save the QR code" hands
it over as a PNG made on the device, 24 pixels a module, with "Chat on WhatsApp" and the number
under the code, below its white margin, in Plus Jakarta Sans: a printed code can be checked by eye,
and used by someone without a camera. Nothing is sent anywhere to make either.
With a message, a muted line says the code includes it ("whoever scans it starts with it typed"),
with a "Leave the message out of the code" checkbox: a shop printing one code for everyone may not
want one customer's message on it, and a shorter link makes a coarser code that scans better. After Save, a line under it names the file ("Look for whatsapp-6281234567890.png in your
downloads."), since a download can land with nothing on screen saying so.

### Running total (signature)

Split bill's bar at the bottom of a phone screen while items exist: the surface color, a hairline
on top, the total in semibold, and what isn't in anyone's share yet (semibold when it isn't zero,
muted when it is), with a small "See the split" button. While something is in nobody's share, the
two lines are one button, with the drawn arrow after the amount: it goes to the first item that
amount comes from, the way through a long list of items on a big table. Sticky, not fixed, so it never hides the
end of the page. While the split itself is on screen it steps aside (invisible, keeping its space), since it has
nothing to add there. Hidden from 1024 px, where the split has its own column.

### The split (signature)

What each person hands over comes first and largest: one row per person, the name in medium weight
with a muted line under it ("To Budi", or what they ordered), and the amount in bold 1.5rem tabular
figures, right-aligned. Whoever paid hands nothing over, so their big number is what comes back to
them, labelled "comes back" beside it (on the same line, so choosing who paid never makes the row
taller), with "Paid the bill" in the muted line under their name. Every row keeps that muted line,
even empty, and every note in it is short, so choosing who paid never changes a row's height. What comes back to whoever paid is set apart from the debts: a plus, a size smaller and
muted ("+Rp 437.000").
Someone with nothing tagged gets "Nothing tagged yet" and a muted Rp 0, never "To Budi": the split
doesn't tell anyone to pay nothing. The "Not in anyone's share" note is gray until anything is
tagged, and pink once tagging has begun and something is still left out, and it names the items, up to three and then how many more, with one amount, their part of the
total with tax and service, adding who covers them once someone's paid ("Budi covers it for now.").
A friend reading the bill gets the items and the fact, with the warning sign and a gray edge, no
pink ("2× Kerupuk and Jus Alpukat (Rp 37.400) aren't in anyone's share: Budi covers them for
now."), and the copied text names them on a line under its own, as it does each person's. By the
share buttons one line says it again, with "Show it", which gives the item it goes to a pink edge
for three seconds: a state isn't an error
before anyone has started. The two lines under the rounding choice are kept even when empty, so
picking a step never shifts what's below it. Then two radio groups, "Who paid?" and "Round shares
up" (to two steps people actually hand over, Rp 500 and Rp 1.000 for rupiah), with a muted line
saying what rounding added and who gets it back. The breakdown (subtotal, charges, total)
comes last, in an inset list: it's how the answer was reached, not the answer. Each row with something
tagged opens, tapping anywhere on it, to what's in that share, in an inset: the items with the
person's part of each ("Es Teh, ½", "Jus, 3 of 4") and what they come to, then "Charges and
adjustments" and, when rounding added to it, "Rounded up", adding up to the big number. For whoever paid, the row shows the subtraction: "Rounding from the others" as a minus, "Not in
anyone's share, on Budi for now" while something is untagged, and "Budi pays in the end", with a muted line under it
that joins it to the row's "comes back" ("That's the Rp 427.900 Budi paid, less the Rp 300.000 that
comes back."). The drawn arrow follows the name, turning down when open; an indent before the
name would take the width the muted line under it needs. A shared link opens
with the split's heading focused, scrolled to on a phone.

### A bill shared with you

Someone who opens a shared bill that wasn't shared from their own device sees the split on its own,
centered. The introduction under the place mark says what this bill is instead of how to make one ("A bill shared with you:
Rp 459.250 in all, paid by Budi."), in the text color at medium weight, not muted: for someone
who arrived from a link, it's the only context there is, and one line above the split says where to look ("Find your
name, and tap it to see what's in your share."). A small "Make changes", with a muted note that
changes stay on the device until the bill is shared again, waits under the split, so the friend's own
row is on a phone's first screen. Who paid and rounding show only as their result in the rows;
there's no running total, since the split is already in view. "Copy the link", which copies the
link they opened, is secondary and has no road under it: reading their row and paying is the
friend's job, and there's no pink on the page. The note on what sharing keeps on our server is left out, since a long link keeps
nothing there. "Make changes" brings back the whole editor, focused on its first card. Whoever shared
the bill gets the editor straight away, as before.

### More on the receipt

The Charges card shows the two rates. What only some receipts say (prices that include tax or
service, tax on service, discounts and rounding) waits behind a disclosure, "More on the receipt",
with the drawn arrow turning down when open. It opens itself when a scan, a link or a choice puts
any of it on the bill, and only then: tax on service counts only when there's service and it isn't
the currency's usual way.

### Undo line

After removing a person or an item, or clearing who had an item with "Nobody" ("Cleared who had
Nasi Goreng."), one line says so, "Removed Citra.", with an underlined "Undo" beside it at
touch-target height. For a person it ends the People card. For an item it's where the change was:
a removed item leaves a dashed line in its place, and "Nobody" puts it inside the item, since on a
phone the end of a long list is screens away; a region that's always there announces it. It stays until the bill
changes some other way. There's no countdown and no confirmation dialog: one tap took it, one
tap brings it back. The split repeats the line, with its Undo, under its heading, since a removal
changes it and on a wide screen it's in the other column; only the card's own line is a live
region, so it's announced once. The split's copy is only for 1024px and up, where the split has a column of
its own; below that the card's line is right above it. Removing someone who had items alone says what's no longer in
anyone's share, as an amount: money leaving the split is the one thing that line must not hide.

### Where focus goes

A press that removes or replaces the control it was made on never leaves focus on nothing (which
drops a keyboard or a screen reader at the top of the page). Opening the scan form focuses its
first field, reading the receipt its review heading, adding it the People field when there's nobody
yet (scrolled to), or else the Items heading; removing focuses the Undo, and Undo the person or item brought back, each scrolled to the nearest
edge of the screen, clear of the bar at the bottom. "Copy a link to this bill" keeps focus while it
works (it's aria-disabled, not disabled, which would drop it) and says "Copied" for three seconds. "Yes, clear" takes the card it was in with it: focus goes to "The bill", and the
line at the top of the page says "Cleared.". Asking ("Clear everything", "Delete the shared copy") focuses
its "Yes, …", "Keep it" focuses the button that asked, and a deleted copy leaves focus on "Copy a
link to this bill". "Clear everything" itself sits apart from the share
buttons, under a hairline, as a quiet underlined button.

### Adding an item

An empty bill leads with "Scan or paste a receipt" as the pink primary, under a one-sentence
introduction; once there are items it steps back to secondary. With no items, the Items card is the form. Once there are items, they come first, and the form
waits under them behind "Add an item by hand": after a receipt is read, the items are what's next,
not an empty form above them. Items typed in by hand keep the form open under the list, with focus back in its Item field
for the next. With a quantity over one, the price asked for is for one, and the line under it says
what the line comes to ("= 4 × Rp 32.000 = Rp 128.000"), so a line total typed as "each" shows.

### Folded items

An item that's someone's folds to one line once the person moves on to another: its name, "·",
who had it in muted text (with counts when it was counted), "Everyone" when it's the whole table, and its price on the right with a muted pencil after it; a tap
opens it again, with focus on its first name, and screen readers hear "Change who had Nasi
Goreng". The item last touched stays open, so tagging a second person on it doesn't fold it under
the finger, and when items above fold or open, the one being worked on stays where it was on
screen (scrolled at once, not smoothly, with the browser's own anchoring off for the list). A bill
reopened from a draft starts with its tagged items folded.

### Links that can't open

A shared link cut off when it was pasted, or changed on the way, says so ("This link looks
incomplete…") with "Start a new bill", rather than opening an empty bill as if nothing were wrong. The page goes to the top
at once and focuses that line, so a link opened in a tab scrolled down doesn't show the bottom of an
empty bill and no reason. That line, and the ones for a bill
that's gone or a server out of reach, carry the warning sign in medium weight. A link that fails after
one that opened in the same tab clears the bill it showed, so the old one isn't left under the
error still headed as shared; someone's own bill stays.

### Place mark and panel

A tool page's title is a place mark (`src/lib/PlaceMark.svelte`): the place's 1rem dot in the text
color beside the tool's name in headline type, and the introduction under it, 0.5rem down and at
most 36rem wide, muted, or in the text color at medium weight in a friend's view of a shared bill.
It lines up with the tool's column: 42rem for Split bill (72rem from 1024 px, where the split has
its own column) and 36rem for WhatsApp click-to-chat. No band, no fill and nothing above the name.
Tool pages had a title band until the owner chose to carry the Device Map onto them (2026-11-19).
The index has moved on twice since; the place mark stays on the tool pages until the owner decides
whether they follow it.

The `.band` panel remains only on the error page, a step off the page in either theme: graphite
surface in dark mode (what steps up inside it is graphite raised, divided by graphite raised
border), paper elevated in light mode, both taken from the palette at the root (`--band-bg`,
`--band-raised`), since a band can't read `--surface` while redefining it. Rounded 1.5rem, 72rem
wide and inset from the viewport. It holds the heading in display type and a ruled list of where to
go instead, each row with the arrow.

### Navigation

The header is the same plain row on every page, in the 72rem column: Flint's mark and name on the
left, the tools on the right, so a person can go from one tool to the other in one press.

- **Mark:** the same tile in either theme; on a page as dark as the tile, the one with a faint rim.
  Beside it "Flint", bold, underlined on the index (`aria-current="page"`). Below 23rem the name is
  left to screen readers and the tools keep the room; the mark still links home.
- **Tool links:** each tool's symbol (1.25rem) and its short name ("Split bill", "WhatsApp") in nav
  type, 0.5rem apart, at least 2.75rem tall, in a list named "Tools". The page you're on is
  underlined (2 px, 6 px below the text, `aria-current="page"`); the others underline on hover.
- **Footer:** muted small text, in the same 72rem column. On the left, Itrium's lockup, leading to
  itrium.id and named "Flint is made by Itrium", in the version for the theme in use; the year; the
  no-tracking promise (except on the index, where the facts under the halves say it; only Split
  bill's mentions sharing a bill, the one thing that reaches us); and the theme choice. On the
  right, "About Itrium" (here rather than in the header, which holds the tools), the email address,
  GitHub, and the site's source (left out on the index, where "Read the source" is right above). The
  theme choice is one control: three options in a pill-edged group, the chosen one filled in the
  text color, so the choice shows by more than color. The footer's links stay small text but are
  2.75rem tall on touch screens.
- **Skip link:** pink, off screen, dropping in from the top on focus.

### Update notice

When a new version of Flint is installed and waiting, one line offers it: "A new version of Flint
is ready.", with a small outlined "Update" button (the small button). It sits over the header at
the top of the page, at most 28rem wide and 0.75rem in from the edges, so nothing on the page
moves when it appears, and it scrolls away with the header, so it never covers a field being
filled in. The surface color, a 1 px control-edge border, 1rem corners (`lg`), control-size text,
and no shadow: it is part of the top of the page, not floating over the work. Its button is
outlined, because pink stays for the page's own main action. Beside it, a muted text button,
"Later", puts the offer away until Flint is next opened, kept in memory only: on a phone the notice
covers the header's mark and tool links, and Later is the way past it. It's a status region, so
it's announced once.

## Do's and Don'ts

### Do:

- **Do** take tokens, radii, button shapes, the arrow and type roles from itrium.id's DESIGN.md
  before inventing anything. A difference between the two sites needs a reason a tool has and a
  page doesn't.
- **Do** add to the index as a half: a new tool is a new full-bleed field with square edges, its
  symbol, its name, what it does, what leaves it, and its own pink start, its content on the
  header's 72rem column.
- **Do** keep Split bill's half the inverse of the page in both themes, with every color inside it
  from the other theme (`.inverse-field`), and check each pairing in it when one is added.
- **Do** keep the tools' names a step above Flint's at every width, and each name two lines tall
  side by side, so the rows meet across the seam.
- **Do** give every tool one symbol and use it wherever the tool is named in the frame: the header
  and its half.
- **Do** keep a tool's first field, and Split bill's start on the index, on the first phone screen,
  and both starts on the first screen at 1280 by 800 and 1440 by 900.
- **Do** give every field, button and chip a `--control-border` edge and a touch target at least
  2.75rem tall on touch screens.
- **Do** show every state in two ways: a check mark with the pink fill, words with the pink edge,
  an underline on the current page's link, and the reason a button can't be pressed yet, said
  under it when someone presses or reaches it (not at rest, and not read out again after every add).
- **Do** design and check every new pairing in light and dark, on every surface it sits on.
- **Do** use the drawn arrow wherever a link points onward.
- **Do** keep motion in CSS, gated on `motion-safe` or `prefers-reduced-motion: no-preference`:
  page cross-fades, the theme cross-fade (a view transition, when someone picks a theme or the
  device switches under System), the 4 px arrow nudge, and the loading spinner. Nothing rises or
  reveals as it scrolls.
- **Do** open a tool page with its place mark, and hang the tool's road out from the control that
  takes it, saying the same fact as its half on the index.
- **Do** use Tailwind classes with the theme tokens and the shared classes in `src/lib/styles.ts`,
  never raw hex values in markup.

### Don't:

- **Don't** make the index read as a receipt, on any cue: no dashed lines, no gray-on-paper
  monochrome, no narrow column, no rows of entries. The owner turned down the line-item strip (#70)
  and the Device Map (#71) for exactly this.
- **Don't** give the index a metaphor: no map, no food carrier, no object for the tools to sit in.
  The owner turned down the Device Map (#71) and the Rantang (#73) for this.
- **Don't** draw the index as a column of stacked rounded boxes, or put cards, a legend or a hero
  over the halves.
- **Don't** round the halves, inset them from the screen's edges, or draw an arc, rail, rim, dash or
  shadow on the index.
- **Don't** use pink as decoration, or give pink two meanings in one view: a tool has one pink
  button, and the index's two starts are both the primary action, one in each half. The seam, the
  fields and the symbols are never pink.
- **Don't** add a structural gray outside the palette. Its one exception, the error panel's raised
  border in dark mode (#4f4f4f), is a structural step above a palette gray; a new one needs the same
  reason, and a color change otherwise belongs in `@itrium/palettes`.
- **Don't** put a small uppercase heading, eyebrow, kicker or back link above a heading.
- **Don't** type arrows or chevrons as characters.
- **Don't** give halves, cards, buttons, chips, the error panel or the running total a drop shadow.
- **Don't** use `#000000` or pure white text on pink. Graphite is `#2b2b2b`.
- **Don't** put pastel pink text or lines on a light background, including Split bill's half on a
  dark page; or rose text and deep-rose lines on graphite, including that half on a light page.
- **Don't** use a native `<select>`, inline styles, `data:` URLs, or anything from another domain.
- **Don't** add gradient text, icon-card rows, invented numbers, or a hero that pushes the tool off
  a phone screen.
- **Don't** set field text below 16px on touch screens.
- **Don't** put a band behind a tool's title: the band is the error page's alone.
