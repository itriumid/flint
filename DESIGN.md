---
name: flint.itrium.id
description: The Rhodonite Specimen, put to work. Itrium's free tools, in the same stone as itrium.id, carried in one graphite rantang.
colors:
  graphite: '#2b2b2b'
  graphite-surface: '#343434'
  graphite-border: '#474747'
  graphite-raised: '#3e3e3e'
  graphite-raised-border: '#4f4f4f'
  enamel-rim-on-dark: '#575757'
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
  lid-name:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '6rem'
    fontWeight: 800
    lineHeight: 1
    letterSpacing: '-0.04em'
  display:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '4.5rem'
    fontWeight: 700
    lineHeight: 1
    letterSpacing: '-0.025em'
  tier-name:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '3rem'
    fontWeight: 800
    lineHeight: 1
    letterSpacing: '-0.035em'
  headline:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '2.25rem'
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: '-0.025em'
  lid-line:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1.5rem'
    fontWeight: 400
    lineHeight: 1.375
  base-heading:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1.5rem'
    fontWeight: 700
    lineHeight: 1.33
  tier-line:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1.25rem'
    fontWeight: 400
    lineHeight: 1.375
  latch:
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
  focus: '4px'
  sm: '0.5rem'
  md: '0.75rem'
  lg: '1rem'
  xl: '1.5rem'
  base: '2.5rem'
  full: '9999px'
  handle: '50% 50% 0 0 / 100% 100% 0 0'
spacing:
  rail-gap: '2px'
  tier-seam: '0.5rem'
  tier-rim: '0.5rem'
  rim-lift: '0.25rem'
  rail-width-phone: '0.625rem'
  rail-width: '0.875rem'
  gutter-panel: '0.75rem'
  gutter-phone: '1.25rem'
  gutter-wide: '2rem'
  card: '1.25rem'
  card-wide: '1.5rem'
  tier-inset-phone: '1.5rem'
  tier-inset: '3rem'
  latch-rhythm-phone: '3.5rem'
  section: '5rem'
  dot: '1rem'
  symbol-nav: '1.25rem'
  symbol-tier: '2.75rem'
  node-width: '7rem'
  node-height-tool: '3rem'
  road-label-width-tool: '18rem'
  road-out-indent: '1.5rem'
  control-compact: '2.25rem'
  touch-target: '2.75rem'
  tier-module: '18.5rem'
  form-width: '36rem'
  tool-width: '42rem'
  content-width: '64rem'
  panel-width: '72rem'
components:
  button-primary:
    backgroundColor: '{colors.pastel-pink}'
    textColor: '{colors.graphite}'
    rounded: '{rounded.full}'
    padding: '0.75rem 1.5rem'
    typography: '{typography.button}'
  latch:
    backgroundColor: '{colors.pastel-pink}'
    textColor: '{colors.graphite}'
    rounded: '{rounded.full}'
    padding: '1rem 1.75rem'
    typography: '{typography.latch}'
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
  tier:
    backgroundColor: '{colors.graphite-raised}'
    textColor: '{colors.off-white}'
    rounded: '{rounded.xl}'
    padding: '2.5rem 3rem 2rem'
    height: '{spacing.tier-module}'
  tier-light:
    backgroundColor: '{colors.graphite}'
    textColor: '{colors.off-white}'
  tier-rim:
    backgroundColor: '{colors.enamel-rim-on-dark}'
    height: '{spacing.tier-rim}'
  tier-rim-light:
    backgroundColor: '{colors.graphite-border}'
  base-tier:
    backgroundColor: '{colors.graphite-raised}'
    textColor: '{colors.off-white}'
    rounded: '{rounded.base}'
    padding: '2.25rem 3rem'
  handle:
    backgroundColor: '{colors.enamel-rim-on-dark}'
    rounded: '{rounded.handle}'
  handle-light:
    backgroundColor: '{colors.graphite}'
  rail:
    backgroundColor: '{colors.enamel-rim-on-dark}'
    rounded: '{rounded.full}'
    width: '{spacing.rail-width}'
  rail-light:
    backgroundColor: '{colors.graphite}'
  tool-symbol:
    size: '{spacing.symbol-tier}'
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
    width: '{spacing.panel-width}'
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

The index is The Rantang: a stacked enamel food carrier seen from the front. Graphite enamel owns
the page in both themes. The header's thick arc is the carrying handle, its two ends run down into
the rails that frame the tiers, and the tiers stack on one measured module with a lighter rolled
rim along each top edge. The lid carries Flint's name and one line. Each tool is a tier: its symbol,
its name at display size, what it does, and, before anyone presses, what leaves it, with its pink
start, the latch. The base tier says what never leaves. Privacy is the object's construction, said
on the tier it concerns, not claimed in a list. A tool page keeps the header (the handle's links,
without the arc) and below it is unchanged from the map that came before: a place mark for a title,
the work directly under it, and the tool's one road out hanging from the control that takes it,
because the person using it is at a restaurant table with a phone in one hand and a group waiting.
Whether the tool pages take the Rantang too is an open decision for the owner.

Components are soft and sure-footed, and tactile without being playful. Every control has a round,
generous target that a thumb finds the first time (2.75rem on touch screens) and an edge you can see
(3:1 against the page and the card). They feel good to press but never perform. Density on the
index is bold and wide, a carrier you hold; inside a tool it is calm and working: forms sit in a
narrow column of 36 to 42rem, inset lists and notes nest one tonal step down inside cards, and the
running total stays at the bottom of a phone's screen while the bill is made.

Light and dark are equal. Each follows the visitor's system unless the footer says otherwise, and
neither is a courtesy version of the other: every new pairing is designed and checked in both. The
system refuses what itrium.id refuses: generic SaaS ornament (gradient text, icon-card rows,
invented numbers), drop shadows on anything but a floating list, pure black and white, decorative
pink, and small labels above headings. It refuses what only a tool can get wrong: a hero that pushes
the tool off a phone screen, and state shown by color alone. And on the index it refuses anything
that reads as a receipt: the owner turned down the line-item strip (#70) and the Device Map (#71)
for dashed lines, gray-on-paper monochrome, a narrow stacked column, and the feel as a whole.

**Key Characteristics:**

- One stone with itrium.id: the same tokens, typeface, radii, button shapes and arrow.
- The index is one carrier: a handle arc (the page's only arc), two rails, and graphite tiers on an
  18.5rem module, 8px apart, each with a rolled rim. Graphite in both themes, with dark mode's text
  colors inside it.
- Each tool has one fixed symbol, drawn in the text color, the same in the header and on its tier.
- Pink only at the two latches on the index (equal starts), and at one primary action per tool view.
- A tool page opens with a place mark, then the tool, with its one road out drawn under the control
  that takes it.
- Light and dark are equal. Both follow the system, unless System, Light or Dark is chosen in the
  footer.
- Flat surfaces with tonal steps. The only shadow is under the open searchable list.
- Every control has a 3:1 edge (`--control-border`), a target at least 2.75rem tall on touch
  screens, and 16px text on touch screens so iOS doesn't zoom.
- Motion is CSS only and off under reduced motion.

## Colors

Rhodonite, as itrium.id applies it, plus the two edge grays that the tools' controls need and the
enamel's three tokens. The tokens live in `src/app.css`: the palette's `--bg`, `--surface`,
`--elevated`, `--border`, `--text`, `--muted`, `--accent`, `--on-accent`, `--accent-edge` and
`--focus` from `@itrium/palettes`, and the site's own `--control-border`, `--accent-text`, `--tier`,
`--tier-rim` and `--frame`. Each swaps value between dark and light, by the device's setting unless
the footer's choice says otherwise. The binding rules are in the handbook's `itrium/brand.md`.

### Primary

- **Pastel pink** (`pastel-pink`): the accent, always as a fill. The primary button, the index's
  two latches, the selected tag chip, the selection highlight and the skip link. On graphite
  (including every tier, in both themes) it's also the focus outline, the line of a state, and pink
  text.
- **Deep rose** (`deep-rose`): pink as a line on light backgrounds (`--accent-edge`). The edge of
  a selected chip, an unsure receipt line, a note's edge, and the checked box or radio button. It
  reaches 3:1 on white. Never inside a tier: the enamel is graphite.
- **Rose text** (`rose-text`): pink as text on light backgrounds (`--accent-text`). Action lines
  with the arrow, such as the tools elsewhere. 4.8:1 on paper, 5.4:1 on white: AA with little
  headroom, so never put it on a pink tint.

### Neutral

- **Graphite** (`graphite`): the dark page, the field fill and inset lists in dark mode, light
  mode's text, and the text on pink, always. In light mode it is also the enamel: every tier, the
  handle and the rails (`--tier`, `--frame`).
- **Graphite surface** (`graphite-surface`) and **graphite border** (`graphite-border`): cards and
  their dividing lines in dark mode, and the running total's bar. Graphite border is also light
  mode's tier rim (`--tier-rim`), and the line inside a tier between what a tool does and what
  leaves it.
- **Graphite raised** (`graphite-raised`, the palette's elevated gray): dark mode's tiers
  (`--tier`), a step up from the page so the carrier still reads as an object; and, inside the
  error page's panel, its cards, with **graphite raised border** (`graphite-raised-border`).
- **Enamel rim** (`enamel-rim-on-dark`): dark mode's tier rim, handle and rails (`--tier-rim`,
  `--frame`), a step above the tier. Like the raised border, it is not in the palette: the two
  are the only structural grays here outside it, each one step above a palette gray.
- **Off-white** (`off-white`): text on graphite, and all text inside a tier.
- **Muted gray on dark** (`muted-gray-on-dark`) and **muted gray on light**
  (`muted-gray-on-light`): secondary text such as the lid's line, "What leaves it", introductions,
  hints, the footer. Inside a tier it is always the dark one: 4.6:1 on dark mode's lighter tier.
- **Control edge on dark** (`control-edge-on-dark`) and **control edge on light**
  (`control-edge-on-light`): the border of every field, button, chip and floating list
  (`--control-border`). They reach 3:1 against both the page and a card, where the softer border
  colors don't. Inside a tier it is always the dark one: 3.1:1 on dark mode's tier.
- **Paper elevated** (`paper-elevated`, `--elevated`): the error page's panel in light mode, a step
  down from paper, where everything it holds still passes: text 12.5:1, muted 4.7:1, rose text
  4.8:1, control edge 4.0:1, focus 12.5:1. In dark mode the panel is graphite surface.
- **Paper** (`paper`), **paper surface** (`paper-surface`) and **paper border** (`paper-border`):
  light mode's page (and field fill, and the fill of a road out's box), cards, and dividing lines.
  On the index in light mode, paper is only the ground the carrier stands on.
- **A tool page's map lines** are in the text color: the place mark's dot and the road out's 3 px
  dashed line. The box a road reaches is outlined in muted gray, since it is outside the device and
  not ours.

### Named Rules

**The Vein Rule.** Pink marks something: the primary action, focus, what's selected, or the way
onward. If you can't say what a pink element marks, it should be gray. Pink means one thing at a
time, which is not the same as one element. In a tool, one pink button per view. On the index, one
pink latch on each tool's tier, the two tools' equal starts ("Split a bill", "Chat with a number"):
one meaning, two pills. Rose-text action lines serve the tools elsewhere and a shared bill as their
way onward, and nothing else is pink. The handle, rails, rims, tool symbols, a tool page's place
mark and its road out are never pink.

**The Enamel Rule.** Inside a tier (the `.enamel` scope), dark mode's colors apply in both themes:
off-white text, muted gray on dark, pink focus and pink edges, and the dark control edge. The enamel
is graphite either way, so its contents never take light mode's graphite text, rose text or deep-rose
edges.

**The Two Borders Rule.** `--border` is for lines nothing depends on, such as card edges and
dividers. Anything a person has to find in order to use it gets `--control-border`.

**The Graphite Text Rule.** Text on pink is graphite, never white. On light backgrounds pink text
is rose text and pink lines are deep rose. Pastel pink is never text or a line there.

**The Every-Surface Rule.** Contrast is checked on every surface text sits on: page, card, inset
list, note, running total, update notice, each tier and the page around the carrier, in both themes.
Text needs 4.5:1. Focus outlines, control edges and state lines need 3:1. Dark mode's tier
(`graphite-raised`) is the tightest: text 12.5:1, muted 4.6:1, pink 8.0:1, control edge 3.1:1.

## Typography

**Display Font:** Plus Jakarta Sans Variable (with `ui-sans-serif, system-ui, sans-serif`)
**Body Font:** Plus Jakarta Sans Variable, the same file

**Character:** One variable typeface from the Indonesian foundry Tokotype carries every role, the
same as on itrium.id. Hierarchy comes from weight and size alone: extra-bold, tightly tracked names
on the enamel, bold headings in sentence case, and plain, readable working text. It's served from
the site itself.

### Hierarchy

- **Lid name** (`lid-name`): "Flint" on the index's lid, extra-bold at -0.04em. 3.75rem on phones,
  the token size (96px) from 640 px.
- **Display** (`display`): the error page's heading. 3rem on phones, the token size from 640 px.
- **Tier name** (`tier-name`): a tool's name on its tier, extra-bold at -0.035em, under its symbol.
  2.25rem on phones, the token size (48px) from 640 px.
- **Headline** (`headline`): a tool's title in its place mark, 1rem right of the place's 1rem dot,
  with the introduction under it. 1.875rem on phones, the token size from 640 px.
- **Lid line** (`lid-line`): the muted line beside Flint's name (under it on phones), at most 28rem
  wide, saying what Flint is. 1.125rem on phones, the token size from 640 px.
- **Base heading** (`base-heading`): "Nothing else leaves", heading the base tier. 1.25rem on
  phones, the token size from 640 px.
- **Tier line** (`tier-line`): what a tool does and what leaves it, on its tier. 1.125rem on phones,
  the token size from 640 px.
- **Latch** (`latch`): the label of a tier's pink start, bold, never wrapping.
- **Title** (`title`): a section card's heading inside a tool (`cardHeading`), semibold.
- **Nav** (`nav`): the header's links to the tools, semibold, each with its symbol.
- **Minor heading** (`minor-heading`): the heading of the tools on sites of their own, under the
  carrier, bold at body size.
- **Body** (`body`): a tool's introduction (at 1.625 line height under the place mark, muted, or in
  the text color at medium weight in a friend's view of a shared bill), running prose, and the base
  tier's facts (1.125rem from 640 px).
- **Leaves heading** (`leaves-heading`): "What leaves it", bold and muted at 0.875rem, heading the
  fact it sits over on each tool's tier.
- **Control** (`control`): field text, chips, notes, hints, amounts, a road out's box and the shared
  bill's line on Split bill's tier, at 0.875rem. On touch screens field text rises to 1rem
  (`pointer-coarse:text-base`) so iOS Safari doesn't zoom the page.
- **Road label** (`road-label`): what a road out carries, semibold beside its line under a tool's
  control, at most 18rem wide (`road-label-width-tool`).
- **Label** (`label`): field labels, secondary and small button labels.
- **Button** (`button`): the primary button's label, semibold.

Amounts that line up or change in place (counts, the running total) use tabular figures.

### Named Rules

**The One Typeface Rule.** Plus Jakarta Sans does everything. Never add a second family, and never
load a font from another domain.

**The No Kicker Rule.** A heading is the first thing in its block. No eyebrow, category label,
small uppercase heading or back link sits above it. Nothing here is set in uppercase. A line that
says more about a heading goes under it or beside it, as the lid's line does. A tier's symbol sits
above its name, but it is the tool's picture, not a label.

## Layout

- **Widths:** header, footer and the index's carrier sit in the 64rem content column
  (`content-width`). The error page's panel is wider, at 72rem (`panel-width`), and inset from the
  viewport by 0.75 to 1.25rem (`gutter-panel`). A tool sits in a narrow working column: 36rem
  (`form-width`) for a single form like WhatsApp click-to-chat, 42rem (`tool-width`) for Split bill.
- **Gutters:** 1.25rem on phones (`gutter-phone`), 2rem from 640 px (`gutter-wide`). The carrier
  goes nearer the edge: its handle and rails sit 0.5rem in on phones and 2rem from 640 px.
- **Rhythm:** a tool page ends with 5rem of space (`section`); the index with 4rem on phones and
  6rem from 1024 px. Within a tool, cards stack 1.25 to 1.5rem apart, and fields and their hints
  step in 0.5rem to 1rem.
- **The carrier (index):** the header's arc, then the lid, the two tool tiers and the base tier,
  stacked 8px apart (`tier-seam`), inside two rails that stand 2px off the tiers (`rail-gap`) and run
  0.75rem past the base. The stack starts 1rem under the handle on phones and 1.5rem from 640 px.
  Tiers are inset 1.5rem on phones (`tier-inset-phone`) and 3rem from 640 px (`tier-inset`).
- **A tool tier:** one module, at least 18.5rem tall from 768 px (`tier-module`, about 296px at
  1440). From 768 px two columns, 1.25 to 1, 3rem apart: on the left the symbol, the name and,
  pushed to the bottom, what it does; on the right, past a 2 px divider in the rim's color, "What
  leaves it", the fact, and the latch at the bottom. Under 768 px it stacks full width: symbol,
  name, what it does, the divider on top, what leaves, then the latch.
- **The lid:** Flint's name and its line side by side from 768 px, 3rem apart; stacked on phones.
- **The base tier:** its heading, then the three facts in three columns from 768 px, 2.5rem apart,
  one under another on phones. Its bottom corners are rounder (`base`).
- **Phone latch rhythm:** each latch sits 3.5rem under the fact above it (`latch-rhythm-phone`): on
  WhatsApp's tier as space, on Split bill's as the shared bill's kept line and its margin.
- **Off the carrier:** the tools on sites of their own and "Read the source" close the page, 3.5rem
  under the rails (5rem from 1024 px), side by side and wrapping, with no rule above them.
- **What the browser remembers:** read after the page loads from what the browser already keeps,
  never stored or sent. A bill in progress in this tab lives on the device, so it sits packed in
  Split bill's tier, in place of what the tool does ("Your bill in progress: 3 people, 5 items, Rp
  459.250."), and the latch says "Continue your bill". A bill shared from this device is what left
  that tier, so it is said under what leaves it, with a rose-text action line to it. Both arrive into
  space already kept for them.
- **Tool page:** the header (mark left, tool links right), then a place mark (the dot, the title and
  the introduction, nothing else), lined up with the tool's own column, 1rem under the header on
  phones and 2rem from 640 px, then the tool 2rem under it. No closing panel, because the running
  total owns the bottom of the screen.
- **Split bill from 1024 px:** two columns in the 72rem width. The bill on the left; the split on
  the right in a 26rem column that stays in view (sticky, scrolling on its own when it's taller than
  the screen) and updates as the bill changes. Before any item, the column holds one muted line
  saying the split will show there. Below 1024 px it follows the bill in one column.
- **Phones:** every control is at least 2.75rem tall on touch screens (`touch-target`), and
  2.25rem (`control-compact`) with a fine pointer. Split bill's running total is sticky (not
  fixed) at the bottom below 1024 px, padded for the home indicator, and the page scrolls focused
  fields clear of it (`scroll-padding-bottom: 6rem`).
- **Breakpoints:** Tailwind's defaults, 640, 768 and 1024 px, plus `pointer-coarse` for touch
  sizing.

**The One Carrier Rule.** The index is one carrier: a handle, two rails, and tiers on one module. A
new tool is a new tier, the same height as the others, with its symbol, its name, what it does,
what leaves it and its own pink latch. No cards, no rows of entries, no hero over equal tiers.

**The Kept Space Rule.** What the browser remembers arrives into a space already kept for it (what
a tool does keeps two lines, 3.5rem; the shared bill's line keeps 3rem on phones and 2.5rem from
768 px), so nothing moves under a finger when it appears.

**The Slab Rule, for tools.** A tool page has no slab at either end: it opens with a place mark,
a dot and the tool's name, and never closes with a panel. On a phone, the tool comes before the
frame.

**The First Screen Rule.** On a phone, the first field of a tool is visible without scrolling, and
on the index the first tier's latch is. If a new element would push either down, it belongs lower
on the page.

**The Answer In Reach Rule.** Wherever a tool is being filled in, its answer is one glance or one
tap away: the running total below 1024 px, the split's own column above. Someone opening a shared
result lands on it, not on the form that made it.

## Elevation & Depth

Surfaces are flat. Depth comes from tonal steps (page, then card, then an inset list or note one
step back down inside the card, then raised inside a panel; on the index, page then tier then rim)
and from borders. The carrier reads as an object by tone alone: dark mode's tiers step up from the
page, and the rim, handle and rails step up again. The one shadow is the floating list of the
searchable select, which genuinely sits above the content and has to be read against it. There are
no glows, in either theme.

### Shadow Vocabulary

- **Floating list** (`box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`):
  the open option list of `SearchableSelect`, and anything else that floats over the page. Nothing
  else.

### Named Rules

**The Only Floating Things Cast Shadows Rule.** Tiers, rims, the handle, cards, buttons, chips,
bands, the road boxes and the running total never get a drop shadow. A control responds by filling
with the next tonal step, a tier by lifting its rim, a header link by its underline, and an arrow by
moving 4 px on.

## Shapes

Soft and rounded, with the radius growing with the size of the object, on the same scale as
itrium.id. Buttons, latches, chips and the info button are pills (`full`). Fields, notes and
floating lists get 0.5rem (`sm`), and options inside a list a little less (0.375rem). Inset lists,
receipt lines and the receipt photo get 0.75rem (`md`). Cards and the update notice get 1rem (`lg`).
Tiers and the error page's panel get 1.5rem (`xl`), and the base tier's bottom corners 2.5rem
(`base`). The focus outline is 2 px at 4 px radius (`focus`), 3 px away from the element. Headings
and cards that the page itself moves focus to (`tabindex="-1"`) show none: focus still moves and is
announced, but a ring there read as a stray selection box, pink in dark mode. Edges are 1 px
hairlines, notes included.

The carrier has its own shapes. The handle is a thick half-ellipse (`handle`) drawn as a 10px border
on phones and 14px from 640 px, open at the bottom, its two ends landing exactly on the rails, which
are the same width (`rail-width-phone`, `rail-width`) with rounded feet. Each tier's rim is an 8px
top edge (`tier-rim`) that follows the tier's rounded top corners: a rolled lip, a tonal step of the
tier, not an accent color. The finish review read it that way, so the detector's
`border-accent-on-rounded` rule is set to ignore `src/routes/+page.svelte`
(`.impeccable/config.json`).

Each tool has one symbol, drawn as a 4-unit stroke on a 40-unit square in the text color: a circle
with its left half filled for Split bill, a speech mark for WhatsApp click-to-chat
(`src/lib/ToolSymbol.svelte`). 1.25rem in the header, 2.25rem on a tier on phones and 2.75rem from
640 px. It repeats the tool's name, so it's hidden from screen readers.

On a tool page, a place mark's dot is a 1rem filled circle in the text color, and a road out is a 3
px dashed line in the text color to a 7 by 3rem box (`node-width`, `node-height-tool`) with 0.5rem
corners, a 2 px muted-gray outline and the page's fill. Dashed lines elsewhere in a tool mean
something else: the place a removed item was, and an empty state in WhatsApp click-to-chat. The
index has no dashed line.

The arrow is drawn, not typed: one SVG, the same as itrium.id's `Arrow.svelte`, with a 2-unit
round-capped stroke in the current color, sized to the text beside it. A selected chip carries a
check mark, so selection never rests on color alone.

**The One Arc Rule.** The handle is the index's only arc. Corners are rounded and the rails have
rounded feet, but no other element on the page sweeps a curve.

## Components

### Buttons

Pressable pills, soft and sure-footed. There are three kinds, and pink is the main action.

- **Shape:** fully rounded (`full`), 0.75rem by 1.5rem of padding, label and icon centered with a
  0.5rem gap.
- **Primary:** pastel pink with graphite text, semibold, and a 1 px `--accent-edge` border: deep
  rose in light mode, where pastel pink alone is 1.5:1 on paper and the pill had no shape, and the
  fill itself in dark mode and on every tier, where it doesn't show. One per view in a tool: "Read
  the receipt", "Add to the bill", "Open in WhatsApp" (messaging a number is the job most people
  come for; "Copy link" beside it is secondary).
- **Latch:** the primary button at the scale of the tier it latches, 1rem by 1.75rem of padding and
  bold 1.125rem (`latch`), never wrapping, at the bottom of a tool tier's right column. One per tool
  tier: "Split a bill" (or "Continue your bill") and "Chat with a number".
- **Secondary:** transparent, with a 1 px control-edge border and medium weight. Every other
  action beside the primary. On the page itself ("Read the source") it fills with the elevated
  step on hover.
- **Small:** the secondary's look at 2.25rem tall with 1rem of padding (2.75rem on touch screens).
  For actions inside a card, the running total and the update notice.
- **Hover:** the primary and the latch fade to 85% opacity. Secondary and small fill with the page
  color.
- **Disabled:** a not-allowed cursor, with a line beside it saying why (`SPLIT_BILL.missing`).
  Small buttons keep their edge and turn their words muted, which stays above 4.5:1, including
  "Add person" and "Add item" while they're unavailable (`aria-disabled`); fading them to 50% took
  the words down to 3:1. The primary and secondary still fade to 50%.
- **Focus:** a 2 px outline 3 px away, pastel pink on graphite (and on every tier) and graphite on
  light backgrounds.
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

### The Rantang (signature, the index)

The index as a stacked enamel food carrier: the tools are latched tiers in one frame that you carry,
and nothing leaves a tier unless you open it. It replaced the Device Map (#71), which replaced the
line-item strip (#70); the owner turned both down as receipt-like. It shipped after the finish
review's two rounds of fixes.

- **Handle:** the header on the index, drawn as a thick arc in the frame color across the top, with
  Flint's mark and the two tool links centred under it. On phones the name beside the mark is left
  to screen readers; from 640 px it shows, underlined as the current page.
- **Rails:** two upright bars in the frame color, continuing the handle's ends down both sides,
  2px off the tiers, with rounded feet 0.75rem below the base tier. Decoration, hidden from screen
  readers.
- **Tier:** graphite enamel in both themes (`.enamel`, `--tier`), 1.5rem corners, with the rim along
  its top. Nothing on it is a card: no border, no fill change, no shadow.
- **Rim:** an 8px top edge in `--tier-rim`, a step lighter than the tier. When a link on the tier,
  its latch, is hovered or focused, the rim lifts 4px (300ms, easing out), half the seam, so the seam
  still shows, as a latch lifts a lid. With reduced motion it stays put. It holds nothing, so
  nothing moves under a finger.
- **Lid:** the first tier: Flint in lid-name type and the lid line. Its rim never lifts.
- **Tool tier:** the tool's symbol, its name in tier-name type (the section's heading), what it does
  in tier-line type; past the divider, "What leaves it" in leaves-heading type, the fact in tier-line
  type, and the latch. On Split bill's tier, a line kept between the fact and the latch holds a bill
  shared from this device, with an action line to it.
- **Base tier:** "Nothing else leaves" in base-heading type, then three facts: what you type, your
  bill in progress and your theme stay on this device; no cookies, no analytics, no trackers; with
  no connection, both tools still open.
- **Ceiling notes, not fixes:** in dark mode the carrier reads gray on gray (graphite raised on
  graphite, with a lighter frame); and the carrier could take more hardware, such as brackets
  where the rails meet the tiers, or a foot under the base. Both are open, not rules.

**The Pinned Fact Rule.** What leaves a tool is said on that tool's tier, beside its latch, before
anyone presses it. What never leaves is said once, on the base. Never collect them into a legend or
a list apart from the tools they concern.

### Road out (on a tool page)

Each tool's one way out of the device, drawn under the control that takes it, saying the same fact
as "What leaves it" on the tool's tier (`src/lib/RoadOut.svelte`, words from `ROADS_OUT`). It is
the Device Map's road, kept on the tool pages until the owner decides whether they take the Rantang.

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
The index has since become the Rantang; the place mark stays on the tool pages until the owner
decides whether they take the Rantang too.

The `.band` panel remains only on the error page, a step off the page in either theme: graphite
surface in dark mode (its cards step up to graphite raised), paper elevated in light mode, both
taken from the palette at the root (`--band-bg`, `--band-raised`), since a band can't read
`--surface` while redefining it. Rounded 1.5rem, inset and wider than the content. It holds the
heading in display type and a ruled list of where to go instead, each row with the arrow.

### Navigation

The header is the same on every page: Flint's mark (and name), then the tools, so a person can go
from one tool to the other in one press. On the index it is the Rantang's handle, centred under the
arc; on a tool page the mark sits left and the links right, with no arc.

- **Tool links:** each tool's symbol (1.25rem) and its short name ("Split bill", "WhatsApp") in nav
  type, 0.5rem apart, at least 2.75rem tall, in a list named "Tools". The page you're on is
  underlined (2 px, 6 px below the text, `aria-current="page"`); the others underline on hover.
- **Mark:** the same tile in either theme; on a page as dark as the tile, the one with a faint rim.
  It is the way back to the index (`aria-current="page"` there).
- **Footer:** muted small text. On the left, Itrium's lockup, leading to itrium.id and named "Flint
  is made by Itrium", in the version for the theme in use; the year; the no-tracking promise
  (except on the index, where the base tier says it; only Split bill's mentions sharing a bill,
  the one thing that reaches us); and the theme choice. On the right, "About Itrium" (moved here
  from the header, which holds the tools), the email address, GitHub, and the site's source (left
  out on the index, where "Read the source" is right above). The theme choice is one control: three
  options in a pill-edged group, the chosen one filled in the text color, so the choice shows by
  more than color. The footer's links stay small text but are 2.75rem tall on touch screens.
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
- **Do** add to the index as the Rantang: a new tool is a new tier on the same 18.5rem module, 8px
  from the next, with its symbol, its name, what it does, what leaves it, and its own pink latch.
- **Do** keep the enamel graphite in both themes, with dark mode's text, muted, focus and control
  edge colors inside it (`.enamel`).
- **Do** give every tool one symbol and use it wherever the tool is named in the frame: the header
  and its tier.
- **Do** keep the rim's lift to 4px, motion-safe only, on a tier whose latch is hovered or focused.
- **Do** keep a tool's first field, and the index's first latch, on the first phone screen.
- **Do** give every field, button and chip a `--control-border` edge and a touch target at least
  2.75rem tall on touch screens.
- **Do** show every state in two ways: a check mark with the pink fill, words with the pink edge,
  an underline on the current page's link, and the reason a button can't be pressed yet, said
  under it when someone presses or reaches it (not at rest, and not read out again after every add).
- **Do** design and check every new pairing in light and dark, on every surface it sits on.
- **Do** use the drawn arrow wherever a link points onward.
- **Do** keep motion in CSS, gated on `motion-safe` or `prefers-reduced-motion: no-preference`:
  page cross-fades, the rim's lift, the 4 px arrow nudge, and the loading spinner. Nothing rises or
  reveals as it scrolls.
- **Do** open a tool page with its place mark, and hang the tool's road out from the control that
  takes it, saying the same fact as its tier on the index.
- **Do** use Tailwind classes with the theme tokens and the shared classes in `src/lib/styles.ts`,
  never raw hex values in markup.

### Don't:

- **Don't** make the index read as a receipt, on any cue: no dashed lines, no gray-on-paper
  monochrome, no narrow stacked column, no rows of entries, ledgers, departure boards or maps. The
  owner turned down the line-item strip (#70) and the Device Map (#71) for exactly this.
- **Don't** put cards, a legend, a hero over equal tiers, or a second arc on the index.
- **Don't** use pink as decoration, or give pink two meanings in one view: a tool has one pink
  button, and the index's two latches are both the primary action, one on each tool's tier. The
  handle, rails, rims and symbols are never pink.
- **Don't** add a structural gray outside the palette. Its two exceptions, the band's raised border (#4f4f4f)
  and the enamel's rim and frame in dark mode (#575757), are each a structural step above a palette
  gray; a new one needs the same reason, and a color change otherwise belongs in
  `@itrium/palettes`.
- **Don't** put a small uppercase heading, eyebrow, kicker or back link above a heading.
- **Don't** type arrows or chevrons as characters.
- **Don't** give tiers, cards, buttons, chips, bands or the running total a drop shadow.
- **Don't** use `#000000` or pure white text on pink. Graphite is `#2b2b2b`.
- **Don't** put pastel pink text or lines on a light background, or rose text and deep-rose lines
  inside a tier.
- **Don't** use a native `<select>`, inline styles, `data:` URLs, or anything from another domain.
- **Don't** add gradient text, icon-card rows, invented numbers, or a hero that pushes the tool off
  a phone screen.
- **Don't** set field text below 16px on touch screens.
- **Don't** put a band behind a tool's title: the band is the error page's alone.
