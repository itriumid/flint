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
  tool-title:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '3rem'
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: '-0.04em'
  part-heading:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1.5rem'
    fontWeight: 800
    lineHeight: 1.33
    letterSpacing: '-0.03em'
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
  step-tab:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '0.875rem'
    fontWeight: 600
    lineHeight: 1.43
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
  part: '2rem'
  part-wide: '2.5rem'
  bar-clearance: '6.5rem'
  half-top-phone: '2.5rem'
  half-top: '2.5rem'
  half-seam-gutter: '3rem'
  half-seam-gutter-wide: '4rem'
  half-height: '35rem'
  kept-line: '3rem'
  section: '5rem'
  dot: '1rem'
  symbol-nav: '1.25rem'
  symbol-title-phone: '1.75rem'
  symbol-title: '2rem'
  symbol-half-phone: '2rem'
  symbol-half: '2.5rem'
  print-width-phone: '9rem'
  print-width-tablet: '11rem'
  print-width: '14rem'
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
  print:
    backgroundColor: '{colors.paper-surface}'
    textColor: '{colors.graphite}'
    rounded: '{rounded.none}'
    width: '{spacing.print-width}'
  print-empty-dark:
    backgroundColor: '{colors.graphite-surface}'
    textColor: '{colors.muted-gray-on-dark}'
  panel:
    backgroundColor: '{colors.graphite-surface}'
    textColor: '{colors.off-white}'
    rounded: '{rounded.xl}'
    width: '{spacing.content-width}'
  panel-light:
    backgroundColor: '{colors.paper-elevated}'
    textColor: '{colors.graphite}'
  tool-title:
    textColor: '{colors.graphite}'
    typography: '{typography.tool-title}'
  tool-title-dark:
    textColor: '{colors.off-white}'
  part:
    padding: '{spacing.part} 0'
    typography: '{typography.part-heading}'
  step-tab:
    textColor: '{colors.muted-gray-on-light}'
    padding: '0 0.25rem'
    height: '{spacing.touch-target}'
    typography: '{typography.step-tab}'
  step-tab-current:
    textColor: '{colors.graphite}'
  update-notice:
    backgroundColor: '{colors.graphite-surface}'
    textColor: '{colors.off-white}'
    rounded: '{rounded.lg}'
    padding: '0.625rem 0.625rem 0.625rem 1rem'
    typography: '{typography.control}'
  update-notice-light:
    backgroundColor: '{colors.paper-surface}'
    textColor: '{colors.graphite}'
  bottom-bar:
    backgroundColor: '{colors.graphite}'
    textColor: '{colors.off-white}'
    padding: '0.75rem 1.25rem'
  bottom-bar-dark:
    backgroundColor: '{colors.graphite-surface}'
    textColor: '{colors.off-white}'
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
strip (#70).

A tool page follows the index. It opens with the tool's title, said as its half says it: the
tool's symbol and its name in the same extra-bold type, the introduction under it. Both tools are
now drawn in this world (the owner's rounds of 2026-11-24), with no cards. Split bill's parts are
divided by plain lines under extra-bold headings, items as rows between lines, and below 1024px
the bill is made in three steps, one on screen at a time, with a graphite bar fixed to the bottom
of the screen holding the step's count or total and the way on. The person using it is at a
restaurant table with a phone in one hand and a group waiting, so they do one job at a time and the
answer is one tap away. WhatsApp click-to-chat is the fields, then under a plain line the answer
shown as what it becomes: the QR code as it will print, in the open beside "Your link", with "Open
in WhatsApp" and "Copy link" under it. From 1024px each tool's answer has its own column.

Components are soft and sure-footed, and tactile without being playful. Every control has a round,
generous target that a thumb finds the first time (2.75rem on touch screens) and an edge you can see
(3:1 against every surface they sit on). They feel good to press but never perform. Density on the
index is bold and wide; inside a tool it is calm and working: below 1024px forms sit in a narrow
column of 36 to 42rem, from 1024px a tool takes the 72rem column with its answer beside the form,
and the few things that really are boxes (receipt lines, the adjustments list, a note) sit
one step back with a hairline round them.

Light and dark are equal. Each follows the visitor's system unless the footer says otherwise, and
neither is a courtesy version of the other: every new pairing is designed and checked in both. The
system refuses what itrium.id refuses: generic SaaS ornament (gradient text, icon-card rows,
invented numbers), drop shadows on anything but a floating list, pure black and white, decorative
pink, and small labels above headings. It refuses what only a tool can get wrong: a hero that pushes
the tool off a phone screen, and state shown by color alone. And on the index it refuses what the
owner has turned down four times over: anything that reads as a receipt (dashed lines, gray-on-paper
monochrome, a narrow column, rows of entries), any metaphor (a map, a food carrier), and a column of
stacked rounded boxes. On Split bill the owner turned down the same stack: "too many boxes".

**Key Characteristics:**

- One stone with itrium.id: the same tokens, typeface, radii, button shapes and arrow.
- The index is two full-bleed halves, square-edged, meeting on one vertical seam from 768 px, their
  content lined up with the header's 72rem column.
- Split bill's half is the inverse of the page in both themes; WhatsApp's half is a tonal step off
  the page.
- The tools' names lead the page at every width, a step above Flint's own name.
- Each tool has one fixed symbol, drawn in the text color, the same in the header and in its half.
- Pink only at the two starts on the index (equal starts), and at one primary action per tool view.
- A tool page opens with its title: the tool's symbol and its name in extra-bold type, as in its
  half, and the introduction under it.
- Split bill has no cards: parts between plain lines, items as rows, three steps below 1024px with a
  graphite bar at the bottom, and two columns from 1024px.
- WhatsApp click-to-chat has no card: the fields, a plain line, then the answer shown as the print
  it makes, in its own column beside a vertical line from 1024px.
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
again for Split bill's half, from the other theme, and the `.graphite-bar` scope sets them to dark
mode's for Split bill's bottom bar on a light page. The binding rules are in the handbook's
`itrium/brand.md`.

### Primary

- **Pastel pink** (`pastel-pink`): the accent, always as a fill. The primary button, the index's
  two starts, the selected tag chip, the selection highlight and the skip link. On graphite
  (including Split bill's half on a light page) it's also the focus outline, the line of a state,
  and pink text.
- **Deep rose** (`deep-rose`): pink as a line on light backgrounds (`--accent-edge`). The edge of
  a selected chip, an unsure receipt line, a note's edge, and the
  start's edge in any light field (including Split bill's half on a dark page). It reaches 3:1 on
  white.
- **Rose text** (`rose-text`): pink as text on light backgrounds (`--accent-text`). Action lines
  with the arrow, such as the tools elsewhere and a bill shared from this device. 4.8:1 on paper
  elevated, 5.4:1 on white: AA with little headroom, so never put it on a pink tint.

### Neutral

- **Graphite** (`graphite`): the dark page, the field fill and inset lists in dark mode, light
  mode's text, and the text on pink, always. On a light page it is also Split bill's half and Split
  bill's bottom bar.
- **Graphite surface** (`graphite-surface`) and **graphite border** (`graphite-border`): in dark
  mode, the floating list, the update notice, dividing lines, Split bill's bottom bar on a dark
  page, the error page's panel, WhatsApp's half, and the empty print on WhatsApp click-to-chat,
  which waits in this gray rather than glaring white.
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
  (`--control-border`). They reach 3:1 against the page and every surface on it, where the softer
  border colors don't.
- **Paper elevated** (`paper-elevated`, `--elevated`): a step down from paper. WhatsApp's half on
  a light page, Split bill's half on a dark page, and the error page's panel in light mode. Every
  text and line color still passes on it: text 12.5:1, muted 4.7:1, rose text 4.8:1, control edge
  4.0:1.
- **Paper** (`paper`), **paper surface** (`paper-surface`) and **paper border** (`paper-border`):
  light mode's page (and field fill), the floating list and the update notice, and dividing lines,
  including the lines between Split bill's parts and items, under its step bar, and between
  WhatsApp click-to-chat's fields and its answer.
- **The print:** WhatsApp click-to-chat's QR code is a white sheet with graphite on it in both
  themes (`print`), the one white surface on the site, because scanners read dark on light and that
  is what prints. Until there is a number, in dark mode it waits in graphite surface with muted text
  (`print-empty-dark`).
- **The text color as a line:** the current step's 3 px underline.

### Named Rules

**The Vein Rule.** Pink marks something: the primary action, focus, what's selected, or the way
onward. If you can't say what a pink element marks, it should be gray. Pink means one thing at a
time, which is not the same as one element. In a tool, one pink button per view. On the index, one
pink start in each tool's half, the two tools' equal starts ("Split a bill", "Chat with a number"):
one meaning, two pills. Rose-text action lines serve the tools elsewhere and a shared bill as their
way onward, and nothing else is pink. The seam, the fields, the tool symbols, a tool's title, the
step bar and the print are never pink. On Split bill below 1024px the bar's "Next" counts toward
the view: it is outlined until the step's own work has started (nobody added on step 1, nothing on
the bill on step 2), so the step's own pink action ("Scan or paste a receipt") isn't doubled.

**The Inverse Field Rule.** Split bill's half (the `.inverse-field` scope) takes the colors of the
theme the page is not in, every one of them: on a light page graphite, with off-white text, muted
gray on dark, pink focus, pink edges and pink text, and the dark control edge; on a dark page paper
elevated, with graphite text, muted gray on light, deep-rose edges, rose text, graphite focus, and
the light control edge. Nothing inside it reads the page's own colors. The owner chose this on
2026-11-24 and accepted its cost: a bright band across a dark page, in exchange for a seam that
reads strongly in both themes. The contrast for each pairing is in the comment above the scope in
`src/app.css`.

**The Graphite Bar Rule.** Split bill's bar at the bottom of a phone's screen is graphite on a light
page, with every color inside it from dark mode (the `.graphite-bar` scope: off-white text, pink
focus and edges, the dark control edge), like Split bill's half. On a dark page it does not invert:
it stays dark, a step up to graphite surface, because a bright band held under the thumb at a dim
table is too much.

**The Two Borders Rule.** `--border` is for lines nothing depends on, such as dividing lines and
the edges of inset lists and the print. Anything a person has to find in order to use it gets `--control-border`.

**The Graphite Text Rule.** Text on pink is graphite, never white. On light backgrounds pink text
is rose text and pink lines are deep rose. Pastel pink is never text or a line there. A checked box
or radio button takes the text color, not pink, so it never competes with the next action.

**The Every-Surface Rule.** Contrast is checked on every surface text sits on: page, inset
list, note, the print, the bottom bar, update notice, the error page's panel, and each half in both themes.
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
- **Tool title** (`tool-title`): a tool's name at the top of its page, the `h1`, extra-bold at
  -0.04em and 0.95 line height like its name in its half, 0.75rem under its symbol, with the
  introduction 0.75rem under it. 2.25rem (36px) on phones, the token size (48px) from 640 px.
- **Part heading** (`part-heading`): the heading of each of Split bill's parts ("The bill",
  "People", "Items", "Charges and adjustments", "The split") and "Your link" on WhatsApp
  click-to-chat, extra-bold at -0.03em, 1rem above the part (0.5rem above "Your link"). A count beside it ("People (4)") is muted and regular weight.
- **Lead line** (`lead-line`): Flint's muted line beside its name (under it when they don't fit),
  at most 36rem wide; and what a tool does, in its half. 1.125rem on phones, the token size from
  640 px.
- **Stays heading** (`stays-heading`): "Nothing else leaves", under the halves. 1.25rem on phones,
  the token size from 640 px.
- **Fact** (`fact`): what leaves a tool, in its half, at most 28rem wide, and the three facts under
  the halves. 1rem on phones, the token size from 640 px.
- **Start** (`start`): the label of a half's pink start, bold, never wrapping.
- **Step tab** (`step-tab`): the three steps' names in Split bill's step bar, semibold, never
  wrapping, 0.8125rem (13px) below 400 px so the three fit on the narrowest phones.
- **Nav** (`nav`): the header's links to the tools, semibold, each with its symbol.
- **Minor heading** (`minor-heading`): the heading of the tools on sites of their own, under the
  facts, bold at body size.
- **Body** (`body`): a tool's introduction (at 1.625 line height under its title, muted, or in
  the text color at medium weight in a friend's view of a shared bill), and running prose.
- **Leaves heading** (`leaves-heading`): "What leaves it", bold and muted at 0.875rem, heading the
  fact it sits over in each tool's half.
- **Control** (`control`): field text, chips, notes, hints, amounts, the bottom bar's lines and
  the shared bill's line in Split bill's half, at 0.875rem. On touch screens field
  text rises to 1rem (`pointer-coarse:text-base`) so iOS Safari doesn't zoom the page.
- **Label** (`label`): field labels, secondary and small button labels.
- **Button** (`button`): the primary button's label, semibold.

Amounts that line up or change in place (counts, the bottom bar's total, the shares) use tabular figures.

### Named Rules

**The One Typeface Rule.** Plus Jakarta Sans does everything. Never add a second family, and never
load a font from another domain.

**The Tools Lead Rule.** On the index, the tools' names are the largest type at every width, and
Flint's own name steps down with them: 40 over 36 on phones, 60 over 48 from 640 px, 48 over 36
from 768 px, 64 over 48 from 1024 px, 72 over 60 from 1280 px. A new size for one is a new size for
the other. On a tool page the tool's title is the largest type, in the same extra-bold voice.

**The No Kicker Rule.** A heading is the first thing in its block. No eyebrow, category label,
small uppercase heading or back link sits above it. Nothing here is set in uppercase. A line that
says more about a heading goes under it or beside it, as Flint's line does. A half's symbol sits
above the tool's name, but it is the tool's picture, not a label.

## Layout

- **Widths:** the header, the footer, Flint's name above the halves and the facts below them sit in
  the 72rem content column (`content-width`). The error page's panel is the same width, inset from
  the viewport by 0.75 to 1.25rem (`gutter-panel`). Below 1024 px a tool sits in a narrow working
  column: 36rem (`form-width`) for WhatsApp click-to-chat, 42rem (`tool-width`) for Split bill. From
  1024 px both take the 72rem column, the answer in its own column beside the form.
- **Gutters:** 1.25rem on phones (`gutter-phone`), 2rem from 640 px (`gutter-wide`).
- **Rhythm:** a tool page ends with 5rem of space (`section`); the index with 4rem on phones and
  6rem from 1024 px. Split bill's parts are 2rem above and below their dividing line (`part`),
  2.5rem from 1024 px (`part-wide`), the first with none above. WhatsApp click-to-chat's fields sit 1rem
  apart, with its answer 1.25rem under the line below them. Fields and their hints step in 0.5rem to
  1rem.
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
- **Tool page:** the header, then the tool's title (its symbol, its name and the introduction,
  nothing else), its padding inside the tool's own width so it lines up with the header and the
  tool, 0.5rem under the header on phones and 1.5rem from 640 px, then the tool 1.5rem under it. No
  closing panel.
- **Split bill below 1024 px:** three steps, one on screen at a time: "Who's here" (People), "What
  you had" (The bill's receipt button, Items, then Charges and adjustments, the currency last), and
  "Everyone's share" (the split, who paid on top, and the share buttons). Under the title, the step
  bar; at the bottom of the screen, the bar with the way on. Each part says its step
  (`data-step`) and the others are only hidden (`max-lg:hidden`): nothing leaves the page, so a
  field keeps what's typed in it across steps. Within step 2 the receipt button leads straight into
  the items, with no line between. A step shows from its top: going to one focuses its first
  heading and scrolls to the top.
- **Split bill from 1024 px:** two columns in the 72rem width, no step bar and no bottom bar. The
  bill on the left (The bill, People, Items, Charges and adjustments, between lines); the split on
  the right in a 26rem column that stays in view (sticky, scrolling on its own when it's taller than
  the screen) and updates as the bill changes. Before any item, the column holds one muted line
  saying the split will show there.
- **WhatsApp click-to-chat:** below 1024 px, the fields (country, number, and "Add a message" or
  the message), then a hairline, then the answer: the print on the left (9rem wide on phones, 11rem
  from 640 px, `print-width-phone`, `print-width-tablet`) and "Your link" beside it, then the
  checkbox when there is a message, then the two actions. On a 390 by 844 phone the fields, the
  print and both actions are on the first screen. From 1024 px, two equal columns in the 72rem
  width, lined up with the header: the fields on the left, 4rem clear of a vertical hairline, and
  the answer on the right, 4rem in from it, with a 14rem print (`print-width`) and 2rem between the
  print and "Your link".
- **A friend's view:** someone opening a bill shared with them sees only the split, with no steps
  and no bars, at every width.
- **Phones:** every control is at least 2.75rem tall on touch screens (`touch-target`), and
  2.25rem (`control-compact`) with a fine pointer. Split bill's bottom bar is fixed below 1024 px,
  padded for the home indicator; the body keeps 6.5rem under the page for it (`bar-clearance`), so
  it never sits over the last of the page, and the page scrolls focused fields clear of it
  (`scroll-padding-bottom: 6rem`).
- **Breakpoints:** Tailwind's defaults, 640, 768, 1024 and 1280 px, plus `pointer-coarse` for touch
  sizing.

**The Two Halves Rule.** The index is the tools, one full-bleed field each, side by side from
768 px and meeting on one seam. A field holds its tool's symbol, name, what it does, what leaves it
and its own pink start, and nothing else. No cards inside or around them, no hero over them, no
column of boxes.

**The Kept Space Rule.** What the browser remembers arrives into a space already kept for it (what
a tool does keeps two lines, 2.75em; the shared bill's line keeps 3rem, `kept-line`, in both halves),
so nothing moves under a finger when it appears. The same holds inside a tool: the empty print keeps
its place, the line under the number keeps two lines, "Copy link" keeps its width when it says
"Copied", and what the code holds is said in one line that swaps its words when the box is ticked.

**The Slab Rule, for tools.** A tool page has no slab at either end: it opens with the tool's
title, its symbol and its name, and never closes with a panel. On a phone, the tool comes before
the frame.

**The One Job Rule.** Below 1024px Split bill shows one step at a time, and the steps are free: any
tab, in any order. Whatever a control sends focus to brings its own step on screen first
(`focusAfter`), so "Show it" from the split lands on the item in step 2. A step is a view, not a
gate: nothing is removed from the page, and nothing is checked before moving on.

**The First Screen Rule.** On a phone, the first field of a tool is visible without scrolling, and
on the index Split bill's start is. If a new element would push either down, it belongs lower on
the page.

**The Answer In Reach Rule.** Wherever a tool is being filled in, its answer is one glance or one
tap away: the step bar and the bottom bar's total below 1024 px, the split's own column above; on
WhatsApp click-to-chat, the line reading the number back under its field, and the answer right
under the fields, nothing floating over it. Someone opening a shared
result lands on it, not on the form that made it.

## Elevation & Depth

Surfaces are flat. Depth comes from tonal steps (page, then the floating list and the update
notice a step up, then raised inside the error page's panel) and from borders. The index has no
depth at all: its halves are two flat fields side by side, told apart by tone. WhatsApp click-to-chat has none: its fields and its answer lie on the page,
divided by a hairline, and its print is a flat sheet with a hairline edge. Split bill has
almost none: its parts lie on the page between hairlines, and its bottom bar is told apart by tone
alone (graphite, or graphite surface on a dark page), with no line and no shadow over the page. The one shadow is
the floating list of the searchable select, which genuinely sits above the content and has to be
read against it. There are no glows, in either theme.

### Shadow Vocabulary

- **Floating list** (`box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`):
  the open option list of `SearchableSelect`, and anything else that floats over the page. Nothing
  else.

### Named Rules

**The Only Floating Things Cast Shadows Rule.** Halves, buttons, chips, the error page's panel,
the print and the bottom bar never get a drop shadow. A control responds by filling
with the next tonal step, a header link by its underline, and an arrow by moving 4 px on.

## Shapes

Soft and rounded, with the radius growing with the size of the object, on the same scale as
itrium.id. Buttons, starts, chips and the info button are pills (`full`). Fields, notes and
floating lists get 0.5rem (`sm`), and so do the undo line and the inset under an opened share;
options inside a list a little less (0.375rem). Inset lists, receipt lines and the receipt photo
get 0.75rem (`md`). The update notice gets 1rem (`lg`). WhatsApp click-to-chat's print has square
corners (`none`), as a printed sheet does.
The error page's panel gets 1.5rem (`xl`). The focus outline is 2 px at 4 px radius (`focus`), 3 px
away from the element. Headings and items that the page itself moves focus to (`tabindex="-1"`)
show none: focus still moves and is announced, but a ring there read as a stray selection box. Edges
are 1 px hairlines, notes included.

The index's halves are the one exception to rounding: square edges (`none`), running to the
screen's edges and meeting on one vertical line, with no border, rim or rule along the seam. The
change of tone is the line. The detector runs with no ignores (`.impeccable/config.json`).

Each tool has one symbol, drawn as a 4-unit stroke on a 40-unit square in the text color: a circle
with its left half filled for Split bill, a speech mark for WhatsApp click-to-chat
(`src/lib/ToolSymbol.svelte`). 1.25rem in the header, 2rem in a half on phones and 2.5rem from
640 px, and 1.75rem over a tool's title on phones, 2rem from 640 px (`symbol-title-phone`,
`symbol-title`). It repeats the tool's name, so it's hidden from screen readers.

Split bill is drawn with lines, not boxes: 1 px `--border` hairlines between its parts and between
its items, a hairline on top of "How it adds up", and the step bar's hairline with the current
step's 3 px underline sitting on it. An item that "Show it" points to takes a 2 px deep-rose
outline, 4 px out, for three seconds.

WhatsApp click-to-chat is drawn with lines too: a 1 px `--border` hairline between the fields and
the answer below 1024 px, turning into a vertical one between the two columns from 1024 px. Nothing
on the site is dashed.

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
  fill itself in dark mode, where it doesn't show. One per view in a tool: "Scan or paste a
  receipt" on an empty bill, "Read the receipt", "Add to the bill", "Next" in Split bill's bottom
  bar once the step's work has started and no receipt is being read, "Copy a link to this bill", "Open in WhatsApp" (messaging a
  number is the job most people come for; "Copy link" beside it is secondary).
- **Start:** the primary button at the scale of its half, 1rem by 1.75rem of padding and bold
  1.125rem (`start`), never wrapping, at the bottom of the half from 768 px. One per half: "Split a
  bill" (or "Continue your bill") and "Chat with a number". Its edge follows the half's ground, not
  the page's: pink on graphite, deep rose on paper elevated.
- **Secondary:** transparent, with a 1 px control-edge border and medium weight. Every other
  action beside the primary. On the page itself ("Read the source") it fills with the elevated
  step on hover.
- **Small:** the secondary's look at 2.25rem tall with 1rem of padding (2.75rem on touch screens).
  For actions inside a part, "Next" before a step's work has started, "Add a message" and "Save
  the QR code" on WhatsApp click-to-chat, and the update notice.
- **Hover:** the primary and the start fade to 85% opacity. Secondary and small fill with the page
  color on a surface; on the page itself (`secondaryButtonOnPage`, `smallButtonOnPage`) they fill
  with paper elevated, or graphite surface in dark mode.
- **Disabled:** a not-allowed cursor, with a line beside it saying why (`SPLIT_BILL.missing`).
  Small buttons keep their edge and turn their words muted, which stays above 4.5:1, including
  "Add person" and "Add item" while they're unavailable (`aria-disabled`); fading them to 50% took
  the words down to 3:1. The primary and secondary still fade to 50%.
- **Focus:** a 2 px outline 3 px away, pastel pink on graphite and graphite on light backgrounds,
  by the ground the button sits on (so in Split bill's half, the inverse of the page's, and in the
  bottom bar, pink).
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

- **Style:** a 1 px control-edge border, 0.5rem radius (`sm`), filled with the page color: on
  the page itself, in both tools, shaped by its edge alone. 0.625rem by 0.75rem of padding, and 0.875rem text that
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

No page has a card. The index's halves, Split bill's parts and WhatsApp click-to-chat's form and
answer all lie on the page.

- **WhatsApp click-to-chat:** no card. The fields, a hairline, then the answer, as Split bill's
  parts are; from 1024 px a vertical hairline between them instead.
- **Split bill's parts:** no card. Each part is a stretch of the page under a part heading, 2rem
  above and below the hairline that divides it from the next (2.5rem from 1024 px). Items are rows
  between hairlines, 1rem above and below each, not boxes.
- **Inset lists and receipt lines:** the boxes that remain, because they are lists to check line by
  line: the receipt review's lines and the adjustments list. Page color with a 1 px `--border`
  edge, 0.75rem radius (`md`), divided by hairlines. A receipt line we couldn't check takes a pink
  edge and a "Check this" mark with an icon, not just the color.

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

### Notes

An aside for what someone should know right now: an unchecked receipt, a total that doesn't
match, what's in nobody's share. Page color, 0.5rem radius, 0.75rem of padding, and a 1 px pink
edge all round (deep rose on light backgrounds), the same edge an unsure receipt line takes; on the
page itself the edge is what makes it a box, and it stays one because it asks for attention. An explanation opened from a
toggletip uses the same form with a gray hairline.

**The Whole Edge Rule.** A note is marked by its whole edge, never by a thick bar down one side.

### Toggletip

A round ⓘ button (2rem, 2.75rem on touch screens) beside the setting it explains. Pressed, it
opens the explanation as a gray-barred note on the next line, never as a floating bubble.

### Chat result (WhatsApp click-to-chat)

No card: the fields, then under a plain line the answer, as Split bill's parts are. The form asks
for the country and the number, then offers "Add a message", a small button, since most people
don't send one. Pressed, it gives way to the message field and moves focus into it, and the field
stays once it has words in it. The message comes before the answer because it goes into the link:
typed after it, it changed a link and a code out of sight.

The number is read back in one muted line right under its field ("= +62 811-2345-678, Indonesia"),
written the way numbers are where they're from for the countries people most often message
(Japan's "90-1234-5678", the United Kingdom's "7700-900123"), like an amount in Split bill. It sits
in a slot two lines tall that the hint and any problem share, so nothing under it moves: on a phone
the keyboard covers the answer while the number is typed, and this is the line to check it against.
A number too short or too long for its country is a problem in words, never a link. The problem
starts with the drawn warning sign, and the field takes the deep-rose edge, as a Split bill line to
check does. A number with its country code typed twice gets a button under the problem, "Use +62
812-3456-7890", when the number with the code once works. "Too short" and "add the area code" wait
until the typing stops: every number is too short halfway through it.

The answer, under the hairline (beside a vertical one from 1024 px): the print on the left and,
beside it, "Your link" in part-heading type. Under the heading, anything decided on the person's
behalf, each with the drawn warning sign in medium weight (letters left out, an extension WhatsApp
can't dial, a number at the short end for its country); then one muted line, "Opens a chat with
this number. Scan the code once before you print it."; then "Save the QR code", a small button.
Before there is a number, the heading has one muted line saying the link appears there, and the
print holds its place with an empty sheet.

With a message, the checkbox comes first, "Leave the message out of the code", and one muted line
under it says what the code holds. Ticking the box swaps the line's words ("This code includes your
message" becomes "This code leaves your message out: whoever scans it starts a chat with nothing
typed.") in the same single line, so nothing under the finger moves.

Then "Open in WhatsApp" (pink) and "Copy link" side by side, each growing to share the row, at 1rem
text with 0.875rem of padding above and below, neither ever breaking onto two lines (on the
narrowest phones Copy moves under Open). Copy says "Copied" for three seconds where the press was,
and keeps its width while it does: both words share one cell. Under the actions, one status line
says what a press did, where nothing below it can be pushed away: "Link copied.", that copying
failed, or after Save the file's name ("Look for whatsapp-6281234567890.png in your downloads."),
since a download can land with nothing on screen saying so. The link itself is never shown as raw
text, except when copying fails: then the status line reads "We couldn't copy it. Here's the link
to select and copy yourself:" and a read-only field under it holds the link, selected when focused.

### QR code to print (WhatsApp click-to-chat)

The answer is shown as what it becomes: the code as it will print, in the open beside "Your link",
not behind a disclosure. The print is a white sheet with a 1 px `--border` edge and square corners
(`print`), padded 0.5rem with 0.75rem under its lines, 9rem wide on phones, 11rem from 640 px and
14rem from 1024 px. On it, the code drawn in the browser (`src/lib/qr.ts`, encoded by
qrcode-generator), graphite on white with its four-module margin in both themes, because scanners
read dark on light and that's what prints; under the code, the saved image's two lines, "Chat on
WhatsApp" in semibold 0.75rem and the number in extra-bold (0.875rem from 1024 px). Those lines are
hidden from screen readers: the code is already named ("QR code that opens a chat with …").

The code redraws as the number and message are typed, so the code on screen is always the one Save
hands over; leaving the message out of the code redraws it coarser, since a shorter link makes a
code that scans better and a shop printing one code for everyone may not want one customer's
message on it. "Save the QR code" hands it over as a PNG made on the device, 24 pixels a module,
with "Chat on WhatsApp" and the number under the code, below its white margin, in Plus Jakarta
Sans: a printed code can be checked by eye, and used by someone without a camera. Nothing is sent
anywhere to make either. Empty, the sheet keeps its size with a faint square where the code will
be, and in dark mode it waits in graphite surface with muted lines (`print-empty-dark`) rather than
a white sheet with nothing on it.

### Step bar (signature, Split bill)

Three plain tabs under the tool's title, below 1024 px: "Who's here", "What you had", "Everyone's
share" (`SPLIT_BILL.steps`), in a list named "Steps". One row, never wrapping, spread across the
column, step-tab type (13px below 400 px). Each is a button at least 2.75rem tall with 0.25rem of
side padding; the current one is in the text color with a 3 px underline in the text color, sitting
on the row's 1 px `--border` line, and carries `aria-current="step"`; the others are muted and turn
to the text color on hover. No numbers, no pink, no check marks: the steps can be taken in any
order, so none is "done". A friend reading a shared bill has none. Hidden from 1024 px.

### Bottom bar (signature, Split bill)

The way on, fixed to the bottom of a phone's screen on steps 1 and 2, edge to edge, its contents in
line with the column: graphite on a light page, graphite surface on a dark one (The Graphite Bar
Rule), padded 0.75rem on top and for the home indicator below. On the left, the step's own count:
"4 people" on step 1; on step 2 the total in semibold and what isn't in anyone's share yet
(semibold when it isn't zero, muted when it is), and nothing while the bill is empty. While
something is in nobody's share, the two lines are one button, with the drawn arrow after the
amount: it goes to the first item that amount comes from. On the right, "Next", never wrapping:
the small outlined button until the step's own work has started (nobody added, nothing on the
bill), then the pink primary. Not on step 3, where the split is the answer, not for a friend
reading a shared bill, and not from 1024 px.

### The split (signature)

"Who paid?" comes first, a radio group above the rows, since it decides who hands what to whom
(not shown to a friend reading the bill). Then what each person hands over, largest: one row per
person, the name in medium weight
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
now."), and the copied text names them on a line under its own, as it does each person's. The
note, said once, carries "Show it", which brings step 2 on screen and gives the item it goes to a
2 px deep-rose outline for three seconds; the note is gray before anyone has started, since a state
isn't an error then. Under the rows, "Round shares up" (to two steps people actually hand over, Rp
500 and Rp 1.000 for rupiah), with a muted line saying what rounding added and who gets it back;
the two lines under it are kept even when empty, so picking a step never shifts what's below it.
The breakdown, "How it adds up" (subtotal, charges, total), comes last, a plain list under a
hairline: it's how the answer was reached, not the answer. Each row with something
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
centered, with no step bar and no bottom bar. The introduction under the tool's title says what this bill is instead of how to make one ("A bill shared with you:
Rp 459.250 in all, paid by Budi."), in the text color at medium weight, not muted: for someone
who arrived from a link, it's the only context there is, and one line above the split says where to look ("Find your
name, and tap it to see what's in your share."). A small "Make changes", with a muted note that
changes stay on the device until the bill is shared again, waits under the split, so the friend's own
row is on a phone's first screen. Who paid and rounding show only as their result in the rows.
"Copy the link", which copies the link they opened, is secondary: reading their row and paying is
the friend's job, and there's no pink on the page. The note on what sharing keeps on our server is
left out, since a long link keeps nothing there. "Make changes" brings back the whole editor, on
step 2 below 1024 px, focused on "The bill". Whoever shared the bill gets the editor straight away,
as before.

### More on the receipt

"Charges and adjustments" shows the two rates, and ends with the currency, set once if at all. What only some receipts say (prices that include tax or
service, tax on service, discounts and rounding) waits behind a disclosure, "More on the receipt",
with the drawn arrow turning down when open. It opens itself when a scan, a link or a choice puts
any of it on the bill, and only then: tax on service counts only when there's service and it isn't
the currency's usual way.

### Undo line

After removing a person or an item, or clearing who had an item with "Nobody" ("Cleared who had
Nasi Goreng."), one line says so, "Removed Citra.", with an underlined "Undo" beside it at
touch-target height. For a person it ends the People part. For an item it's where the change was:
a removed item leaves the line in its place, at least 2.75rem tall, rounded 0.5rem on the elevated
gray (graphite surface on a dark page), and "Nobody" puts it inside the item, since on a phone the
end of a long list is screens away; a region that's always there announces it. It stays until the
bill changes some other way. There's no countdown and no confirmation dialog: one tap took it, one
tap brings it back. From 1024 px the split repeats the line, with its Undo, under its heading,
since a removal changes it and it's in the other column; only the part's own line is a live
region, so it's announced once. Removing someone who had items alone says what's no longer in
anyone's share, as an amount: money leaving the split is the one thing that line must not hide.

### Where focus goes

A press that removes or replaces the control it was made on never leaves focus on nothing (which
drops a keyboard or a screen reader at the top of the page). Below 1024 px, wherever focus goes
first brings its step on screen (`focusAfter`), and a step bar tab or "Next" focuses the step's
first heading at the top of the page. Opening the scan form focuses its
first field, reading the receipt its review heading, adding it the People field when there's nobody
yet (scrolled to), or else the Items heading; removing focuses the Undo, and Undo the person or item brought back, each scrolled to the nearest
edge of the screen, clear of the bar at the bottom. "Copy a link to this bill" keeps focus while it
works (it's aria-disabled, not disabled, which would drop it) and says "Copied" for three seconds. "Yes, clear" takes the line it was in with it and goes back to step 1: focus goes to "People", and the
line at the top of the page says "Cleared.". Asking ("Clear everything", "Delete the shared copy") focuses
its "Yes, …", "Keep it" focuses the button that asked, and a deleted copy leaves focus on "Copy a
link to this bill". "Clear everything" itself sits apart from the share
buttons, under a hairline, as a quiet underlined button.

### Adding an item

An empty bill leads with "Scan or paste a receipt" as the pink primary, under a one-sentence
introduction; once there are items it steps back to secondary. With no items, the Items part is the form. Once there are items, they come first, and the form
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

### Tool title and panel

A tool page's title (`src/lib/ToolTitle.svelte`, used by both tools) says the tool as its half on
the index does: its symbol in the text color, then its name in tool-title type 0.75rem under it,
then the introduction 0.75rem under that, at most 36rem wide, muted, or in the text color at
medium weight in a friend's view of a shared bill. Its padding sits inside the tool's width, so the
title lines up with the header and the content: 42rem for Split bill and 36rem for WhatsApp
click-to-chat on phones and tablets, and 72rem for both from 1024 px, where each tool's answer has
its own column. No band, no fill and nothing above
the symbol. It replaced the place mark, the Device Map's dot beside a smaller bold name.

The `.band` panel remains only on the error page, a step off the page in either theme: graphite
surface in dark mode (what steps up inside it is graphite raised, divided by graphite raised
border), paper elevated in light mode, both taken from the palette at the root (`--band-bg`,
`--band-raised`), since a band can't read `--surface` while redefining it. Rounded 1.5rem, 72rem
wide and inset from the viewport. It holds the heading in display type and a ruled list of where to
go instead, each row with the arrow.

### Navigation

The header is the same plain row on every page, in the 72rem column: Flint's mark and name on the
left, the tools on the right, so a person can go from one tool to the other in one press.

- **Mark:** the knapped stone, filled pink with its ripples cut in graphite, and no tile: one file
  for either theme (the compact one, 36px tall, its ripples heavier).
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
- **Do** open a tool page with its title: its symbol, its name in extra-bold tool-title type, and
  the introduction under it, lined up with the header and the tool.
- **Do** divide a tool's parts with plain hairlines under extra-bold part headings, and set items
  as rows between lines; keep a box only for a list checked line by line or a note asking for
  attention.
- **Do** keep every step of Split bill in the page, shown or hidden by its step, and bring a step on
  screen before focusing anything in it.
- **Do** count the bottom bar's "Next" in a view's one pink action: outlined until the step's own
  work has started.
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
- **Don't** give halves, buttons, chips, the print, the error panel or the bottom bar a drop shadow.
- **Don't** put Split bill's parts back in cards, or stack rounded boxes in a tool: the owner turned
  that down as "too many boxes".
- **Don't** put WhatsApp click-to-chat back in a card, hide its code behind a disclosure, draw a
  dashed road under its actions, or show its link as raw monospace text.
- **Don't** gate Split bill's steps, number them, or mark one done: they are free, in any order.
- **Don't** invert the bottom bar on a dark page: it stays dark.
- **Don't** use `#000000` or pure white text on pink. Graphite is `#2b2b2b`.
- **Don't** put pastel pink text or lines on a light background, including Split bill's half on a
  dark page; or rose text and deep-rose lines on graphite, including that half on a light page.
- **Don't** use a native `<select>`, inline styles, `data:` URLs, or anything from another domain.
- **Don't** add gradient text, icon-card rows, invented numbers, or a hero that pushes the tool off
  a phone screen.
- **Don't** set field text below 16px on touch screens.
- **Don't** put a band behind a tool's title: the band is the error page's alone.
