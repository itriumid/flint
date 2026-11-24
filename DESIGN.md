---
name: flint.itrium.id
description: The Rhodonite Specimen, put to work. Itrium's free tools, in the same stone as itrium.id, the featured ones laid edge to edge.
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
    fontSize: '3.75rem'
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
    fontSize: '3rem'
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
  field-top-phone: '2.5rem'
  field-top: '1.5rem'
  field-inner-gutter: '2.5rem'
  field-height: '28rem'
  kept-line: '3rem'
  note-slot: '2.5rem'
  row: '3rem'
  section: '5rem'
  dot: '1rem'
  symbol-nav: '1.25rem'
  symbol-title-phone: '1.75rem'
  symbol-title: '2rem'
  symbol-field-phone: '2rem'
  symbol-field: '2.5rem'
  mark: '2.25rem'
  code-width-phone: '9.5rem'
  code-width-tablet: '11rem'
  code-width: '16rem'
  control-compact: '2.25rem'
  touch-target: '2.75rem'
  search-width: '24rem'
  menu-width: '32rem'
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
  field-inverse:
    backgroundColor: '{colors.graphite}'
    textColor: '{colors.off-white}'
    rounded: '{rounded.none}'
    padding: '1.5rem 2.5rem 2.5rem 2rem'
    height: '{spacing.field-height}'
  field-inverse-dark:
    backgroundColor: '{colors.paper-elevated}'
    textColor: '{colors.graphite}'
  field-step:
    backgroundColor: '{colors.paper-elevated}'
    textColor: '{colors.graphite}'
    rounded: '{rounded.none}'
    padding: '1.5rem 2.5rem 2.5rem 2.5rem'
    height: '{spacing.field-height}'
  field-step-dark:
    backgroundColor: '{colors.graphite-surface}'
    textColor: '{colors.off-white}'
  field-page:
    backgroundColor: '{colors.paper}'
    textColor: '{colors.graphite}'
    rounded: '{rounded.none}'
    padding: '1.5rem 2rem 2.5rem 2.5rem'
    height: '{spacing.field-height}'
  field-page-dark:
    backgroundColor: '{colors.graphite}'
    textColor: '{colors.off-white}'
  tool-name:
    typography: '{typography.tool-name}'
  tool-symbol:
    size: '{spacing.symbol-field}'
  nav-link:
    typography: '{typography.nav}'
    height: '{spacing.touch-target}'
  mark:
    height: '{spacing.mark}'
  tool-row:
    typography: '{typography.nav}'
    height: '{spacing.row}'
  tools-menu:
    backgroundColor: '{colors.paper}'
    textColor: '{colors.graphite}'
    rounded: '{rounded.lg}'
    padding: '1.25rem 1.5rem 1.5rem'
    width: '{spacing.menu-width}'
  tools-menu-dark:
    backgroundColor: '{colors.graphite}'
    textColor: '{colors.off-white}'
  search:
    backgroundColor: '{colors.paper}'
    textColor: '{colors.graphite}'
    rounded: '{rounded.sm}'
    padding: '0.625rem 0.75rem'
    width: '{spacing.search-width}'
    typography: '{typography.control}'
  kind-row:
    typography: '{typography.nav}'
    height: '{spacing.row}'
  code-sheet:
    backgroundColor: '{colors.paper-surface}'
    textColor: '{colors.graphite}'
    rounded: '{rounded.none}'
    width: '{spacing.code-width}'
  code-sheet-empty-dark:
    backgroundColor: '{colors.graphite-surface}'
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

The index is Featured, then the rest: the featured tools (three, `FEATURED_COUNT` in
`src/lib/tools.ts`) as full-bleed fields laid edge to edge, side by side from 1024px and stacked
below it. No metaphor, no cards, no rounded boxes: the fields are the page. They have square edges
and are told apart by tone alone. The first is always the inverse of the page (graphite on a light
page, paper elevated on a dark one), the second a tonal step off the page, and the third the page
itself, held between the row's two hairlines. Each field carries its tool's symbol, its name at
poster scale, what it does, what leaves it, and one large pink start. Flint's name, its line and a
search for a tool sit above them, a step below the tools' names, and what never leaves sits on the
page below. Once there are more tools than fields, every tool follows A to Z, under its initial.
It replaced Two halves (two tools, one seam), which replaced the Rantang (#73), the Device Map
(#71) and the line-item strip (#70).

Every page's header holds Flint's mark and name, the featured tools as direct links from 1024px,
and "All tools", one button that opens every tool with a search by name or task, the ones opened
lately on this device first. Switching tools stays one press and a word away however many there
are.

A tool page follows the index. It opens with the tool's title, said as its field says it: the
tool's symbol and its name in the same extra-bold type, the introduction under it. All three tools
are drawn in this world, with no cards. Split bill's parts are divided by plain lines under
extra-bold headings, items as rows between lines, and below 1024px the bill is made in three steps,
one on screen at a time, with a graphite bar fixed to the bottom of the screen holding the step's
count or total and the way on. The person using it is at a restaurant table with a phone in one
hand and a group waiting, so they do one job at a time and the answer is one tap away. WhatsApp
click-to-chat is the fields, then under a plain line the answer: "Your link", what it opens, a way
to make a QR code for the number, and "Open in WhatsApp" and "Copy link". QR code is a link or any
text, then under a plain line the bare code beside "Your code", redrawn as it's typed, its two
saves, and a short shelf of other kinds (Wi-Fi, contact, email, phone call) whose fields take the
first part's place when picked. From 1024px each tool's answer has its own column.

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
- The index leads with the featured tools as full-bleed fields, square-edged, side by side from
  1024px and stacked below, their content lined up with the header's 72rem column.
- The first field is the inverse of the page in both themes, the second a tonal step off it, the
  third the page itself between the row's hairlines.
- The tools' names lead the page at every width, a step above Flint's own name.
- Each tool has one fixed symbol, drawn in the text color, the same in the header, in "All tools",
  in its field and over its title.
- Pink only at the featured fields' starts on the index (equal starts), and at one primary action
  per tool view.
- The header is the mark, the featured tools from 1024px, and "All tools": a dialog with a search,
  "Opened lately" and A to Z.
- A tool page opens with its title: the tool's symbol and its name in extra-bold type, as in its
  field, and the introduction under it.
- Split bill has no cards: parts between plain lines, items as rows, three steps below 1024px with a
  graphite bar at the bottom, and two columns from 1024px.
- WhatsApp click-to-chat and QR code have no card: the fields, a plain line, then the answer, in its
  own column beside a vertical line from 1024px. Only QR code draws a code, bare, on a white sheet.
- Light and dark are equal. Both follow the system, unless System, Light or Dark is chosen in the
  footer.
- Flat surfaces with tonal steps. The only shadow is under the open searchable list; "All tools"
  is set apart by its backdrop, not a shadow.
- Every control has a 3:1 edge (`--control-border`), a target at least 2.75rem tall on touch
  screens, and 16px text on touch screens so iOS doesn't zoom.
- Motion is CSS only and off under reduced motion.

## Colors

Rhodonite, as itrium.id applies it, plus the two edge grays that the tools' controls need. The
tokens live in `src/app.css`: the palette's `--bg`, `--surface`, `--elevated`, `--border`, `--text`,
`--muted`, `--accent`, `--on-accent`, `--accent-edge` and `--focus` from `@itrium/palettes`, and the
site's own `--control-border` and `--accent-text`. Each swaps value between dark and light, by the
device's setting unless the footer's choice says otherwise. The `.inverse-field` scope sets them
again for the index's first featured field, from the other theme, and the `.graphite-bar` scope
sets them to dark mode's for Split bill's bottom bar on a light page. The binding rules are in the handbook's
`itrium/brand.md`.

### Primary

- **Pastel pink** (`pastel-pink`): the accent, always as a fill. The primary button, the index's
  starts, the selected tag chip, the selection highlight, the skip link, and Flint's mark, the
  stone itself. On graphite (including the first featured field on a light page) it's also the
  focus outline, the line of a state, and pink text.
- **Deep rose** (`deep-rose`): pink as a line on light backgrounds (`--accent-edge`). The edge of
  a selected chip, an unsure receipt line, a note's edge, a field with a problem in it, and the
  start's edge in any light field (including the first featured field on a dark page). It reaches
  3:1 on white.
- **Rose text** (`rose-text`): pink as text on light backgrounds (`--accent-text`). Action lines
  with the arrow, such as the tools elsewhere, a bill shared from this device, and WhatsApp
  click-to-chat's "Make a QR code for this number". 4.8:1 on paper elevated, 5.4:1 on white: AA
  with little headroom, so never put it on a pink tint.

### Neutral

- **Graphite** (`graphite`): the dark page, the field fill and inset lists in dark mode, light
  mode's text, the text on pink, always, and the ripples cut into Flint's mark. On a light page it
  is also the first featured field and Split bill's bottom bar.
- **Graphite surface** (`graphite-surface`) and **graphite border** (`graphite-border`): in dark
  mode, the floating list, the update notice, dividing lines, Split bill's bottom bar on a dark
  page, the error page's panel, the second featured field, a hovered button on the page, and QR
  code's empty sheet, which waits in this gray rather than glaring white.
- **Graphite raised** (`graphite-raised`, the palette's elevated gray) and **graphite raised
  border** (`graphite-raised-border`): inside the error page's panel in dark mode, what steps up
  from it and its dividing lines. The raised border (#4f4f4f) is the one structural gray outside the
  palette, used only there (`.band` in `src/app.css`), a step above graphite raised.
- **Off-white** (`off-white`): text on graphite, including the first featured field on a light
  page.
- **Muted gray on dark** (`muted-gray-on-dark`) and **muted gray on light**
  (`muted-gray-on-light`): secondary text such as Flint's line, "What leaves it", introductions,
  hints, what each tool does in a list of tools, what each kind is for on QR code's shelf, the
  footer. Each field takes the one for its own ground, not the page's.
- **Control edge on dark** (`control-edge-on-dark`) and **control edge on light**
  (`control-edge-on-light`): the border of every field, button, chip and floating list
  (`--control-border`). They reach 3:1 against the page and every surface on it, where the softer
  border colors don't.
- **Paper elevated** (`paper-elevated`, `--elevated`): a step down from paper. The second featured
  field on a light page, the first on a dark page, a hovered button on the page, and the error
  page's panel in light mode. Every text and line color still passes on it: text 12.5:1, muted
  4.7:1, rose text 4.8:1, control edge 4.0:1.
- **Paper** (`paper`), **paper surface** (`paper-surface`) and **paper border** (`paper-border`):
  light mode's page (and field fill, and the third featured field), the floating list and the
  update notice, and dividing lines, including the hairlines above and below the featured row, the
  lines between Split bill's parts and items, under its step bar, between a tool's fields and its
  answer, and between the rows of a list of tools or kinds.
- **"All tools":** the page's own colors (`tools-menu`), full screen on a phone and a panel with a
  `--border` hairline from 640px, over a backdrop of black at 40% that dims the page behind it.
- **The code's sheet:** QR code's code is graphite on a white sheet in both themes (`code-sheet`),
  the one white surface on the site, because scanners read dark on light and that is what prints.
  Until there is a code, in dark mode it waits in graphite surface (`code-sheet-empty-dark`) with a
  faint square where the code will be.
- **The text color as a line:** the current step's 3 px underline, and the underline under the
  current page's link.

### Named Rules

**The Vein Rule.** Pink marks something: the primary action, focus, what's selected, or the way
onward. If you can't say what a pink element marks, it should be gray. Pink means one thing at a
time, which is not the same as one element. In a tool, one pink button per view. On the index, one
pink start in each featured field, the tools' equal starts ("Split a bill", "Chat with a number",
"Make a code"): one meaning, three pills. Rose-text action lines serve the tools elsewhere, a shared
bill and WhatsApp's hand-off to QR code as their way onward, and nothing else is pink but the mark.
The fields, the search, "All tools", the tool symbols, a tool's title, the step bar, the shelf and
the code are never pink. On Split bill below 1024px the bar's "Next" counts toward
the view: it is outlined until the step's own work has started (nobody added on step 1, nothing on
the bill on step 2), so the step's own pink action ("Scan or paste a receipt") isn't doubled.

**The Inverse Field Rule.** The index's first featured field (the `.inverse-field` scope) takes the
colors of the theme the page is not in, every one of them: on a light page graphite, with off-white
text, muted gray on dark, pink focus, pink edges and pink text, and the dark control edge; on a dark
page paper elevated, with graphite text, muted gray on light, deep-rose edges, rose text, graphite
focus, and the light control edge. Nothing inside it reads the page's own colors. The owner chose
this on 2026-11-24 and accepted its cost: a bright band across a dark page, in exchange for fields
told apart strongly in both themes. The second field takes the page's own colors on a step off it
(paper elevated, or graphite surface on a dark page), and the third is the page. The contrast for
each pairing is in the comment above the scope in `src/app.css`.

**The Graphite Bar Rule.** Split bill's bar at the bottom of a phone's screen is graphite on a light
page, with every color inside it from dark mode (the `.graphite-bar` scope: off-white text, pink
focus and edges, the dark control edge), like the first featured field. On a dark page it does not invert:
it stays dark, a step up to graphite surface, because a bright band held under the thumb at a dim
table is too much.

**The Two Borders Rule.** `--border` is for lines nothing depends on, such as dividing lines and
the edges of inset lists, the code's sheet and the "All tools" panel. Anything a person has to find
in order to use it gets `--control-border`.

**The Graphite Text Rule.** Text on pink is graphite, never white. On light backgrounds pink text
is rose text and pink lines are deep rose. Pastel pink is never text or a line there. A checked box
or radio button takes the text color, not pink, so it never competes with the next action.

**The Every-Surface Rule.** Contrast is checked on every surface text sits on: page, inset
list, note, the bottom bar, update notice, the "All tools" panel, the error page's panel, and each
featured field in both themes. Text needs 4.5:1. Focus outlines, control edges and state lines need
3:1. The tightest are the first featured field on a light page (control edge 3.7:1) and on a dark
page (muted 4.7:1, rose text 4.8:1).

## Typography

**Display Font:** Plus Jakarta Sans Variable (with `ui-sans-serif, system-ui, sans-serif`)
**Body Font:** Plus Jakarta Sans Variable, the same file

**Character:** One variable typeface from the Indonesian foundry Tokotype carries every role, the
same as on itrium.id. Hierarchy comes from weight and size alone: extra-bold, tightly tracked tool
names at poster scale, bold headings in sentence case, and plain, readable working text. It's
served from the site itself.

### Hierarchy

- **Tool name** (`tool-name`): a tool's name in its featured field, extra-bold at -0.04em, 0.95
  line height, under its symbol. 2.5rem (40px) on phones, the token size (60px) from 640 px while
  the fields stack, 2.25rem (36px) from 1024 px where three sit side by side, and 3rem (48px) from
  1280 px. Shown with non-breaking hyphens, so "click-to-chat" never breaks at one (the name itself
  keeps plain ones, for search).
- **Display** (`display`): the error page's heading. 3rem on phones, the token size from 640 px.
- **Index name** (`index-name`): "Flint", the index's `h1`, extra-bold at -0.04em, always one step
  below the tools' names: 2.25rem (36px) on phones, the token size (48px) from 640 px, 2.25rem
  (36px) from 768 px, 1.875rem (30px) from 1024 px, and 2.25rem (36px) from 1280 px.
- **Tool title** (`tool-title`): a tool's name at the top of its page, the `h1`, extra-bold at
  -0.04em and 0.95 line height like its name in its field, 0.75rem under its symbol, with the
  introduction 0.75rem under it. 2.25rem (36px) on phones, the token size (48px) from 640 px.
- **Part heading** (`part-heading`): the heading of each of Split bill's parts ("The bill",
  "People", "Items", "Charges and adjustments", "The split"), "Your link" on WhatsApp
  click-to-chat, "Your code" and a picked kind's name on QR code, and "All tools" over its
  dialog, extra-bold at -0.03em, 1rem above the part (0.5rem above "Your link" and "Your code"). A
  count beside it ("People (4)") is muted and regular weight. QR code's shelf takes the same voice
  a size down (1.125rem, -0.02em): it's an offer, not a part.
- **Lead line** (`lead-line`): Flint's muted line beside its name (under it when they don't fit),
  at most 36rem wide; and what a tool does, in its field. 1.125rem on phones, the token size from
  640 px, and 1.125rem again from 1024 px inside the three fields side by side.
- **Stays heading** (`stays-heading`): "Nothing else leaves", under the fields, and "All tools"
  over the A-to-Z list there. 1.25rem on phones, the token size from 640 px.
- **Fact** (`fact`): what leaves a tool, in its field, at most 28rem wide, and the three facts under
  the fields. 1rem on phones, the token size from 640 px, 1rem again in the fields from 1024 px.
- **Start** (`start`): the label of a field's pink start, bold, never wrapping.
- **Step tab** (`step-tab`): the three steps' names in Split bill's step bar, semibold, never
  wrapping, 0.8125rem (13px) below 400 px so the three fit on the narrowest phones.
- **Nav** (`nav`): the header's links to the tools, semibold, each with its symbol; and a tool's
  name in a row of tools (the index's search, "All tools") and a kind's name on QR code's shelf.
- **Initial** (no token): the letter over each group in an A-to-Z list, extra-bold, 1.25rem in
  "All tools" and 1.875rem at -0.04em on the index; hidden from screen readers, since the names
  under it say it.
- **Minor heading** (`minor-heading`): the heading of the tools on sites of their own, under the
  facts, bold at body size.
- **Body** (`body`): a tool's introduction (at 1.625 line height under its title, muted, or in
  the text color at medium weight in a friend's view of a shared bill), and running prose.
- **Leaves heading** (`leaves-heading`): "What leaves it", bold and muted at 0.875rem, heading the
  fact it sits over in each featured field; and "Opened lately" and "A to Z", heading their lists
  in "All tools".
- **Control** (`control`): field text, chips, notes, hints, amounts, the bottom bar's lines and
  the shared bill's line in Split bill's field, at 0.875rem. On touch screens field
  text rises to 1rem (`pointer-coarse:text-base`) so iOS Safari doesn't zoom the page.
- **Label** (`label`): field labels, secondary and small button labels.
- **Button** (`button`): the primary button's label, semibold.

Amounts that line up or change in place (counts, the bottom bar's total, the shares) use tabular figures.

### Named Rules

**The One Typeface Rule.** Plus Jakarta Sans does everything. Never add a second family, and never
load a font from another domain.

**The Tools Lead Rule.** On the index, the tools' names are the largest type at every width, and
Flint's own name steps down with them: 40 over 36 on phones, 60 over 48 from 640 px, 60 over 36
from 768 px, 36 over 30 from 1024 px, 48 over 36 from 1280 px. A new size for one is a new size for
the other. From 1024 px the names are sized so the longest word ("click-to-chat") fits a third of
the column. On a tool page the tool's title is the largest type, in the same extra-bold voice.

**The No Kicker Rule.** A heading is the first thing in its block. No eyebrow, category label,
small uppercase heading or back link sits above it. Nothing here is set in uppercase. A line that
says more about a heading goes under it or beside it, as Flint's line does. A field's symbol sits
above the tool's name, but it is the tool's picture, not a label; an A-to-Z initial sits beside or
above the names it groups, and is hidden from screen readers.

## Layout

- **Widths:** the header, the footer, Flint's name above the fields and the facts below them sit in
  the 72rem content column (`content-width`). The error page's panel is the same width, inset from
  the viewport by 0.75 to 1.25rem (`gutter-panel`). Below 1024 px a tool sits in a narrow working
  column: 36rem (`form-width`) for WhatsApp click-to-chat and QR code, 42rem (`tool-width`) for
  Split bill. From 1024 px all three take the 72rem column, the answer in its own column beside the
  form.
- **Gutters:** 1.25rem on phones (`gutter-phone`), 2rem from 640 px (`gutter-wide`).
- **Header:** one row in the 72rem column, 1.5rem above and below: the mark and "Flint" on the
  left; on the right the featured tools' links, 2rem apart, from 1024 px only, then "All tools".
  Below 1024 px the row is the mark, the name and "All tools", nothing else.
- **"All tools":** a modal dialog. On phones it fills the screen (`100dvh`), padded 1.25rem; from
  640 px it is a centered panel 32rem wide (`menu-width`), at most 80% of the screen's height,
  padded 1.5rem at the sides. The heading and "Close" share the top row, the search under them,
  and the lists scroll on their own under the search.
- **Rhythm:** a tool page ends with 5rem of space (`section`); the index with 4rem on phones and
  6rem from 1024 px. Split bill's parts are 2rem above and below their dividing line (`part`),
  2.5rem from 1024 px (`part-wide`), the first with none above. WhatsApp click-to-chat's fields sit 1rem
  apart, with its answer 1.25rem under the line below them. Fields and their hints step in 0.5rem to
  1rem.
- **The featured fields (index):** one per featured tool, in the registry's order (Split bill,
  WhatsApp click-to-chat, QR code), in a row with a `--border` hairline above and below it. Below
  1024 px they stack full width, edge to edge, with no gap between them. From 1024 px they sit side
  by side in three equal columns, at least 28rem tall (`field-height`). The fields run to the
  screen's edges, but their content lines up with the header's column: the first field's left
  padding and the last's right padding are `max(2rem, calc((100cqw - 72rem) / 2 + 2rem))` (`100cqw`
  is `main`'s width, a size container, so no scrollbar's width spills over), and every padding
  between fields is 2.5rem (`field-inner-gutter`). Stacked, a field is padded 1.25rem (2rem from
  640 px) at the sides, 2.5rem at the top (`field-top-phone`) and 3rem at the bottom; side by side,
  1.5rem at the top (`field-top`) and 2.5rem at the bottom.
- **Inside a field:** the symbol (2rem on phones, 2.5rem from 640 px), the name 1 to 1.25rem under
  it, what the tool does, "What leaves it" and the fact, a line kept for a shared bill, then the
  start. Side by side, each name keeps two lines of room (`min-height: 1.9em`) and what each does
  keeps two lines (2.75em), so the fields' lines meet across them whichever name wraps. The start
  drops to the bottom of the field (`margin-top: auto`) from 1024 px.
- **Above the fields:** Flint's name and its line share one baseline, 2.5rem apart, and wrap when
  they don't fit; the search sits under them, at most 36rem wide. From 1024 px the search sits
  beside them on the right, 24rem wide (`search-width`), held at the top of the row, so the field
  stays put and its answers only ever grow downward.
- **Below the fields:** once there are more tools than `FEATURED_COUNT`, "All tools", every tool A
  to Z under its initial, in two columns from 768 px and three from 1024 px, each group under a
  hairline; it is not rendered while every tool is featured. Then "Nothing else leaves" and its
  three facts, in three columns from 768 px, 2.5rem apart; then, past a hairline, the tools on
  sites of their own and "Read the source", side by side and wrapping.
- **What the browser remembers:** read after the page loads from what the browser already keeps,
  never stored or sent. A bill in progress in this tab lives on the device, so it is said in Split
  bill's field, in place of what the tool does ("Your bill in progress: 3 people, 5 items, Rp
  459.250."), and the start says "Continue your bill". A bill shared from this device is what left
  it, so it is said under what leaves it, with a rose-text action line to it. Both arrive into space
  already kept for them. The tools opened lately (ids only, under `flint-recent-tools` in local
  storage) are read only when "All tools" opens.
- **First viewport:** at 1440 by 900, 1280 by 800 and 1024 by 768, the header, Flint, its line and
  the search, and all three featured fields with their starts, are on the first screen; Flint and
  its line sit tighter from 1024 px (1rem above, 1.5rem below) to make room. On a 390 by 844 phone,
  the header, Flint, its line, the search, and Split bill's field with its start are.
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
  the message), then a hairline, then the answer: "Your link", what it opens, the line to make a QR
  code for the number, then the two actions. On a 390 by 844 phone the fields and both actions are
  on the first screen. From 1024 px, two equal columns in the 72rem width, lined up with the
  header: the fields on the left, 4rem clear of a vertical hairline, and the answer on the right,
  4rem in from it.
- **QR code:** below 1024 px, the first part (a link or text, or the picked kind's fields), the
  note slot under "Link or text", then a hairline, then the code on the left (9.5rem wide on
  phones, 11rem from 640 px, `code-width-phone`, `code-width-tablet`) with "Your code" 1.25rem
  beside it, then Save as PNG and Save as SVG side by side and the status line under them, then
  the shelf. On a 390 by 844 phone the field, the code and both saves are on the first screen and
  the shelf starts above the fold. From 1024 px, two equal columns, as on WhatsApp click-to-chat:
  the first part and the shelf on the left, the code at 16rem (`code-width`) with 2rem to "Your
  code", its saves and the status line on the right.
- **A friend's view:** someone opening a bill shared with them sees only the split, with no steps
  and no bars, at every width.
- **Phones:** every control is at least 2.75rem tall on touch screens (`touch-target`), and
  2.25rem (`control-compact`) with a fine pointer. Split bill's bottom bar is fixed below 1024 px,
  padded for the home indicator; the body keeps 6.5rem under the page for it (`bar-clearance`), so
  it never sits over the last of the page, and the page scrolls focused fields clear of it
  (`scroll-padding-bottom: 6rem`).
- **Breakpoints:** Tailwind's defaults, 640, 768, 1024 and 1280 px, plus `pointer-coarse` for touch
  sizing.

**The Featured Fields Rule.** The index leads with the featured tools, one full-bleed field each,
side by side from 1024 px and told apart by tone. A field holds its tool's symbol, name, what it
does, what leaves it and its own pink start, and nothing else. No cards inside or around them, no
hero over them, no column of boxes. Every other tool waits in the A-to-Z list under them and in
"All tools", never as a smaller field or a card.

**The Kept Space Rule.** What the browser remembers arrives into a space already kept for it (what
Split bill does keeps two lines, 2.75em; the shared bill's line keeps 3rem, `kept-line`; side by
side every field keeps both), so nothing moves under a finger when it appears. The same holds inside
a tool: the code's empty sheet keeps its place, the line under a number and the note under "Link or
text" keep two lines (`note-slot`), Save as PNG and Save as SVG are there before there's a code,
the status line under them keeps two lines, and "Copy link" keeps its width when it says "Copied".

**The Slab Rule, for tools.** A tool page has no slab at either end: it opens with the tool's
title, its symbol and its name, and never closes with a panel. On a phone, the tool comes before
the frame.

**The One Job Rule.** Below 1024px Split bill shows one step at a time, and the steps are free: any
tab, in any order. Whatever a control sends focus to brings its own step on screen first
(`focusAfter`), so "Show it" from the split lands on the item in step 2. A step is a view, not a
gate: nothing is removed from the page, and nothing is checked before moving on.

**The First Screen Rule.** On a phone, the first field of a tool is visible without scrolling, and
on the index Split bill's start is; from 1024 px every featured field's start is. If a new element
would push any of them down, it belongs lower on the page.

**The Answer In Reach Rule.** Wherever a tool is being filled in, its answer is one glance or one
tap away: the step bar and the bottom bar's total below 1024 px, the split's own column above; on
WhatsApp click-to-chat, the line reading the number back under its field, and the answer right
under the fields, nothing floating over it. Someone opening a shared
result lands on it, not on the form that made it.

## Elevation & Depth

Surfaces are flat. Depth comes from tonal steps (page, then the floating list and the update
notice a step up, then raised inside the error page's panel) and from borders. The index has no
depth at all: its featured fields are flat and side by side, told apart by tone. WhatsApp
click-to-chat and QR code have none: their fields and answers lie on the page, divided by a
hairline, and QR code's sheet is flat with a hairline edge. Split bill has almost none: its parts
lie on the page between hairlines, and its bottom bar is told apart by tone alone (graphite, or
graphite surface on a dark page), with no line and no shadow over the page. "All tools" sits over
the page with no shadow either: the backdrop dims what's behind it (black at 40%), and from 640 px
its panel has a hairline edge. The one shadow is the floating list of the searchable select, which
genuinely sits above the content and has to be read against it. There are no glows, in either
theme.

### Shadow Vocabulary

- **Floating list** (`box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`):
  the open option list of `SearchableSelect`, and anything else that floats over the page. Nothing
  else.

### Named Rules

**The Only Floating Things Cast Shadows Rule.** Featured fields, buttons, chips, the "All tools"
panel, the error page's panel, the code's sheet and the bottom bar never get a drop shadow. A control responds by filling
with the next tonal step, a header link by its underline, and an arrow by moving 4 px on.

## Shapes

Soft and rounded, with the radius growing with the size of the object, on the same scale as
itrium.id. Buttons, starts, chips and the info button are pills (`full`). Fields, notes and
floating lists get 0.5rem (`sm`), and so do the undo line and the inset under an opened share;
options inside a list a little less (0.375rem). Inset lists, receipt lines and the receipt photo
get 0.75rem (`md`). The update notice and the "All tools" panel from 640 px get 1rem (`lg`). QR
code's sheet has square corners (`none`), as a printed sheet does. The error page's panel gets
1.5rem (`xl`). The focus outline is 2 px at 4 px radius (`focus`), 3 px
away from the element. Headings and items that the page itself moves focus to (`tabindex="-1"`)
show none: focus still moves and is announced, but a ring there read as a stray selection box. Edges
are 1 px hairlines, notes included.

The index's featured fields are the one exception to rounding: square edges (`none`), running to
the screen's edges and meeting on straight lines, with no border, rim or rule between them. The
change of tone is the line, and the third field, the page's own tone, is held by the hairlines
above and below the row. The detector runs with no ignores (`.impeccable/config.json`).

Each tool has one symbol, drawn as a 4-unit stroke on a 40-unit square in the text color: a circle
with its left half filled for Split bill, a speech mark for WhatsApp click-to-chat, and a code's
three corner squares (2-unit corners) with a filled module for QR code (`src/lib/ToolSymbol.svelte`).
1.25rem in the header and in a row of tools, 2rem in a field on phones and 2.5rem from 640 px
(`symbol-field-phone`, `symbol-field`), and 1.75rem over a tool's title on phones, 2rem from 640 px
(`symbol-title-phone`, `symbol-title`). It repeats the tool's name, so it's hidden from screen
readers.

Flint's mark is the knapped stone, a filled pastel-pink polygon with two ripples cut into it in
graphite, with no tile behind it (`src/lib/flint-mark-compact.svg`, 2.25rem tall in the header,
`mark`). One file serves both themes: pink and graphite read on paper and on graphite alike.

"All tools" carries the one drawn icon in the header: a magnifier, a 2-unit round-capped stroke on
a 20-unit square, 1rem, in the current color, before its words.

Split bill is drawn with lines, not boxes: 1 px `--border` hairlines between its parts and between
its items, a hairline on top of "How it adds up", and the step bar's hairline with the current
step's 3 px underline sitting on it. An item that "Show it" points to takes a 2 px deep-rose
outline, 4 px out, for three seconds.

WhatsApp click-to-chat and QR code are drawn with lines too: a 1 px `--border` hairline between
the fields and the answer below 1024 px, turning into a vertical one between the two columns from
1024 px. Lists of tools and QR code's shelf are rows between hairlines, never boxes. Nothing on the
site is dashed.

The arrow is drawn, not typed: one SVG, the same as itrium.id's `Arrow.svelte`, with a 2-unit
round-capped stroke in the current color, sized to the text beside it. A selected chip carries a
check mark, so selection never rests on color alone.

**The Square Field Rule.** The featured fields have square edges and meet on straight lines. No
arcs, rails, rims, dashes or shadows on the index.

## Components

### Buttons

Pressable pills, soft and sure-footed. There are three kinds, and pink is the main action.

- **Shape:** fully rounded (`full`), 0.75rem by 1.5rem of padding, label and icon centered with a
  0.5rem gap.
- **Primary:** pastel pink with graphite text, semibold, and a 1 px `--accent-edge` border: deep
  rose in light mode, where pastel pink alone is 1.5:1 on paper and the pill had no shape, and the
  fill itself in dark mode, where it doesn't show. One per view in a tool: "Scan or paste a
  receipt" on an empty bill, "Read the receipt", "Add to the bill", "Next" in Split bill's bottom
  bar once the step's work has started and no receipt is being read, "Copy a link to this bill",
  "Open in WhatsApp" (messaging a number is the job most people come for; "Copy link" beside it is
  secondary), and "Save as PNG" on QR code ("Save as SVG" beside it is secondary).
- **A pair of answer actions:** on WhatsApp click-to-chat and QR code the primary and the secondary
  sit side by side, each growing to share the row, at 1rem text with 0.875rem of padding above and
  below and 1rem at the sides, neither ever breaking onto two lines (on the narrowest phones the
  second moves under the first).
- **Start:** the primary button at the scale of its field, 1rem by 1.75rem of padding and bold
  1.125rem (`start`), never wrapping, at the bottom of the field from 1024 px. One per featured
  field: "Split a bill" (or "Continue your bill"), "Chat with a number" and "Make a code". Its edge
  follows the field's ground, not the page's: pink on graphite, deep rose on paper elevated and
  paper.
- **Secondary:** transparent, with a 1 px control-edge border and medium weight. Every other
  action beside the primary. On the page itself ("Read the source") it fills with the elevated
  step on hover.
- **Small:** the secondary's look at 2.25rem tall with 1rem of padding (2.75rem on touch screens).
  For actions inside a part, "Next" before a step's work has started, "Add a message" on WhatsApp
  click-to-chat, "All tools" in the header (with its magnifier) and "Close" in its dialog, and the
  update notice.
- **Hover:** the primary and the start fade to 85% opacity. Secondary and small fill with the page
  color on a surface; on the page itself (`secondaryButtonOnPage`, `smallButtonOnPage`) they fill
  with paper elevated, or graphite surface in dark mode.
- **Disabled:** a not-allowed cursor, with a line beside it saying why (`SPLIT_BILL.missing`).
  Small buttons keep their edge and turn their words muted, which stays above 4.5:1, including
  "Add person" and "Add item" while they're unavailable (`aria-disabled`); fading them to 50% took
  the words down to 3:1. The primary and secondary still fade to 50%. A button that has to stay
  reachable before it can act is `aria-disabled`, not disabled, and a press says why in the status
  line under it: QR code's two saves before there's a code ("There's no code to save yet: type what
  it should open first."), gone as soon as there is one.
- **Focus:** a 2 px outline 3 px away, pastel pink on graphite and graphite on light backgrounds,
  by the ground the button sits on (so in the first featured field, the inverse of the page's, and
  in the bottom bar, pink).
- **Text actions:** small actions that aren't the point, such as "Everyone", "Nobody", "Remove"
  and "Remove the message", are muted, underlined 4 px below the text, and turn to the text color
  on hover. A fix offered inside a line of text under a field ("Add https://") is in the text color
  at medium weight, since it is the next thing to do. They keep the touch target height.

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
  the page itself, in every tool, shaped by its edge alone. 0.625rem by 0.75rem of padding, and 0.875rem text that
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

No page has a card. The index's featured fields, Split bill's parts, and WhatsApp
click-to-chat's and QR code's forms and answers all lie on the page.

- **WhatsApp click-to-chat and QR code:** no card. The fields, a hairline, then the answer, as
  Split bill's parts are; from 1024 px a vertical hairline between them instead.
- **Split bill's parts:** no card. Each part is a stretch of the page under a part heading, 2rem
  above and below the hairline that divides it from the next (2.5rem from 1024 px). Items are rows
  between hairlines, 1rem above and below each, not boxes.
- **Inset lists and receipt lines:** the boxes that remain, because they are lists to check line by
  line: the receipt review's lines and the adjustments list. Page color with a 1 px `--border`
  edge, 0.75rem radius (`md`), divided by hairlines. A receipt line we couldn't check takes a pink
  edge and a "Check this" mark with an icon, not just the color.

### Featured, then the rest (signature, the index)

The index as its featured tools, laid edge to edge: one full-bleed field each, with Flint's name,
its line and a search above, and the facts below (`src/routes/+page.svelte`, reading the registry
in `src/lib/tools.ts`). It replaced Two halves, built for two tools; before that the Rantang (#73),
a stacked food carrier the owner found still "a stack of boxes", and the Device Map (#71) and the
line-item strip (#70), both turned down as receipt-like.

- **The tones, by position:** the first field is the inverse of the page (`.inverse-field`):
  graphite with dark mode's colors on a light page, paper elevated with light mode's colors on a
  dark page. The second is paper elevated on a light page and graphite surface on a dark one, with
  the page's own colors. The third is the page itself, between the hairlines above and below the
  row. A tone belongs to the position, not to the tool.
- **Contents, top to bottom:** the tool's symbol; its name in tool-name type (the section's
  heading); what it does in lead-line type, or the bill in progress; "What leaves it" in
  leaves-heading type and the fact in fact type; a line kept for a bill shared from this device,
  with an action line to it (in the other fields the same space is kept only side by side); and
  the start.
- **The search:** one field, "Find a tool, or what you need done", the same search as "All
  tools", by name or by what someone wants done ("wifi" finds QR code). Its answers come under it
  as it's typed: rows between hairlines, each the tool's symbol, its name in semibold (underlined
  on hover) and what it does, muted; "No tool for "…" yet." when nothing answers; Enter opens the
  best one. Nothing pink.
- **The rest:** once there are more tools than fields, "All tools", every tool A to Z, under
  extra-bold initials, each with its name in bold, what it does and what leaves it. Not rendered
  while every tool is featured.
- **Under the fields:** "Nothing else leaves" in stays-heading type, then three facts: what you
  type, your bill in progress, your theme and the tools you opened lately stay on this device; no
  cookies, no analytics, no trackers; with no connection, every tool still opens.
- **Motion:** none of its own. The starts fade on hover like any primary button, and the shared
  bill's action line nudges its arrow.

**The Pinned Fact Rule.** What leaves a tool is said in that tool's field, above its start, before
anyone presses it, and again beside it in the A-to-Z list. What never leaves is said once, under
the fields. Never collect them into a legend or a list apart from the tools they concern.

**The Peer Rule.** The featured fields are equal: the same type, the same rhythm, the same size of
start. No tool is a hero over the others; the inverse tone goes to the first field only so the
fields read apart, not to rank it.

### All tools (signature, the header)

One small button on every page's header, "All tools" with a drawn magnifier, that opens every tool
in a native `<dialog>` (`src/lib/ToolsMenu.svelte`): full screen on a phone, a 32rem panel from
640 px with a hairline edge and 1rem corners, over a dimmed page, in the page's own colors. Its
heading, "All tools" in part-heading type, shares the top row with a small "Close"; a press on the
backdrop or Escape closes it too, and so does going to a tool.

- **Search:** the same field and the same answers as the index's search, focused on opening with
  a fine pointer; on a touch screen focus waits on the heading, so the keyboard doesn't cover the
  list.
- **Opened lately:** the last three tools opened on this device, newest first, without the one
  that's open: recency, not frequency, so the list never reshuffles under a thumb. Only the ids are
  kept, in this browser (`flint-recent-tools`), and nothing when storage is blocked. Hidden while
  something is typed.
- **A to Z:** every tool under its initial, the letter in extra-bold 1.25rem in a narrow column on
  the left, each group under a hairline. The tool you're on is underlined, 2 px
  (`aria-current="page"`).
- **Rows:** at least 3rem tall (`row`): the symbol, the name in semibold, what it does under it in
  muted small text. The name underlines on hover.
- **Keyboard:** "/" opens it from any page unless a field is being typed in (`aria-keyshortcuts`),
  and a muted line under the search says so, shown only with a fine pointer ("Press / on any page
  to open this list.").

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
stays once it has words in it, until "Remove the message" takes it and its words back out. The
message comes before the answer because it goes into the link: typed after it, it changed a link
out of sight.

The number is read back in one muted line right under its field ("= +62 811-2345-678, Indonesia"),
written the way numbers are where they're from for the countries people most often message
(Japan's "90-1234-5678", the United Kingdom's "7700-900123"), like an amount in Split bill. It sits
in a slot two lines tall that the hint and any problem share, so nothing under it moves: on a phone
the keyboard covers the answer while the number is typed, and this is the line to check it against.
Before anything's typed, the slot holds the hint. A number too short or too long for its country
is a problem in words, never a link. The problem
starts with the drawn warning sign, and the field takes the deep-rose edge, as a Split bill line to
check does. A number with its country code typed twice gets a button under the problem, "Use +62
812-3456-7890", when the number with the code once works. "Too short" and "add the area code" wait
until the typing stops: every number is too short halfway through it.

The answer, under the hairline (beside a vertical one from 1024 px): "Your link" in part-heading
type. Under the heading, anything decided on the person's behalf, each with the drawn warning sign
in medium weight (letters left out, an extension WhatsApp can't dial, a number at the short end for
its country); then one muted line, "Opens a chat with this number."; then, under it, a rose-text
action line with the drawn arrow, "Make a QR code for this number", at touch-target height. It
opens QR code with the chat link, without the message, already in its field: the link travels after
the `#`, which never reaches a server, and a printed code is for everyone who scans it, not the one
customer a message was typed for. Before there is a number, the heading has one muted line saying
the link appears there. This page draws no code of its own.

Then "Open in WhatsApp" (pink) and "Copy link" side by side, a pair of answer actions. Copy says
"Copied" for three seconds where the press was, and keeps its width while it does: both words share
one cell. Under the actions, one status line says what a press did, where nothing below it can be
pushed away: "Link copied.", or that copying failed. The link itself is never shown as raw text,
except when copying fails: then the status line reads "We couldn't copy it. Here's the link to
select and copy yourself:" and a read-only field under it holds the link, selected when focused.

### Your code (signature, QR code)

The answer is the code itself, bare, beside "Your code" (`src/routes/qr-code/+page.svelte`, drawn
by `src/lib/qr.ts`, what goes in it decided by `src/lib/qr-code.ts`). The sheet is white with a 1 px
`--border` edge and square corners (`code-sheet`), 9.5rem wide on phones, 11rem from 640 px and
16rem from 1024 px, and the code's four-module margin is part of the drawing, as in the file:
graphite on white in both themes, because scanners read dark on light and that's what prints. No
words on it or under it: the code is named for screen readers by what it does ("QR code. Opens the
website itrium.id.").

- **Beside it:** "Your code" in part-heading type, then one muted line saying what scanning it
  does and "Scan it once before you print it."; before anything's typed, "Your code appears here
  as you type."; while what's typed has a problem, that it appears once the problem above is fixed.
- **Redrawn as typed:** the code redraws with each character, so the code on screen is always the
  one Save hands over. Text is encoded as UTF-8, and what's too long for one code is said at once,
  by about how many characters.
- **Empty:** the sheet keeps its size with a faint square where the code will be, and in dark mode
  it waits in graphite surface (`code-sheet-empty-dark`) rather than as a white sheet with nothing
  on it.
- **Saves:** "Save as PNG" (pink) and "Save as SVG" side by side, a pair of answer actions. PNG is
  the bare code drawn on the device, at least 1024 pixels wide and never under 8 pixels a module; SVG is the bare code,
  sharp at any size. Both are there before there's a code, `aria-disabled` and faded, so nothing
  moves when the first character makes one; a press then says why in the status line.
- **Status line:** under the saves, two lines kept (`note-slot`), saying the file's name after a
  save ("Look for qr-code-itrium.id.png in your downloads."), since a download can land with nothing on
  screen saying so, for as long as the code is still the one saved.

### Link or text, and its note slot (QR code)

The main job, first and alone: "Link or text", a two-line text area (`https://` as its
placeholder) that grows as it's dragged. Under it, one slot two lines tall (`note-slot`) for
whichever line has something to say, so the code under it never moves: at rest the hint ("Phones
open a link in their browser, and show anything else as text."), muted; for a web address typed
without `https://`, that phones will show it as text, with "Add https://" beside it as a text
action; and what's too long, with the drawn warning sign in medium weight, while the field takes
the deep-rose edge. A link handed over from another tool after the `#` fills the field, and is
taken out of the address so a reload starts clean.

### Kind shelf (signature, QR code)

The other kinds, quiet under everything until one is picked: Wi-Fi network, Contact, Email, Phone
call. A small extra-bold heading ("Something other than a link", or "Something else" once another
kind is picked), then rows between hairlines, each at least 3rem tall (`row`): the kind's name in
semibold, underlined at rest (1 px, 4 px below, 2 px on hover), and what its code is for, muted, on
the right. Picking one puts its fields where the first part's are, under its name in part-heading
type, scrolls them into view and focuses the first; the shelf then offers "A link or text" back.
What was typed in each kind is kept while the page is open, so switching back loses nothing. Fields
with a problem (an email, a phone number) wait until the typing stops to say so, under the field,
with the warning sign and the deep-rose edge. Nothing on the shelf is pink: it's an offer, not the
action.

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

A tool page's title (`src/lib/ToolTitle.svelte`, used by every tool) says the tool as its field
on the index does: its symbol in the text color, then its name in tool-title type 0.75rem under it,
then the introduction 0.75rem under that, at most 36rem wide, muted, or in the text color at
medium weight in a friend's view of a shared bill. Its padding sits inside the tool's width, so the
title lines up with the header and the content: 42rem for Split bill and 36rem for WhatsApp
click-to-chat and QR code on phones and tablets, and 72rem for all three from 1024 px, where each
tool's answer has its own column. No band, no fill and nothing above
the symbol. It replaced the place mark, the Device Map's dot beside a smaller bold name.

The `.band` panel remains only on the error page, a step off the page in either theme: graphite
surface in dark mode (what steps up inside it is graphite raised, divided by graphite raised
border), paper elevated in light mode, both taken from the palette at the root (`--band-bg`,
`--band-raised`), since a band can't read `--surface` while redefining it. Rounded 1.5rem, 72rem
wide and inset from the viewport. It holds the heading in display type and a ruled list of where to
go instead, each row with the arrow.

### Navigation

The header is the same plain row on every page, in the 72rem column: Flint's mark and name on the
left; on the right, the featured tools from 1024 px and "All tools" at every width, so a person can
go from one tool to any other in one press, or a press and a word.

- **Mark:** the knapped stone, filled pink with its ripples cut in graphite, and no tile: one file
  for either theme (the compact one, 2.25rem tall, its ripples heavier). Beside it "Flint", bold
  at 1.25rem, 0.625rem away, at every width, underlined on the index (2 px, 6 px below,
  `aria-current="page"`). Mark and name are one link home.
- **Tool links:** from 1024 px, each featured tool's symbol (1.25rem) and its short name ("Split
  bill", "WhatsApp", "QR code") in nav type, 0.5rem apart, at least 2.75rem tall, 2rem between
  them, in the list named "Tools". The page you're on is underlined (2 px, 6 px below the text,
  `aria-current="page"`); the others underline on hover. Below 1024 px they are left to "All
  tools".
- **All tools:** the small button, with its magnifier, last in the row; it opens the dialog (see
  All tools above). It never becomes pink.
- **Footer:** muted small text, in the same 72rem column. On the left, Itrium's lockup, leading to
  itrium.id and named "Flint is made by Itrium", in the version for the theme in use; the year; the
  no-tracking promise (except on the index, where the facts under the fields say it; only Split
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
- **Do** add a new tool to the registry (`src/lib/tools.ts`) once: its name, short name, line, what
  leaves it, its start and its search words. The index's fields, its A-to-Z list, the header and
  "All tools" all read from there.
- **Do** keep the first featured field the inverse of the page in both themes, with every color
  inside it from the other theme (`.inverse-field`), the second a tonal step off the page and the
  third the page between hairlines; and check each pairing when one is added.
- **Do** keep the tools' names a step above Flint's at every width, and each name two lines tall
  side by side, so the fields' lines meet across them.
- **Do** give every tool one symbol and use it wherever the tool is named in the frame: the header,
  a row in a list of tools, its field and its title.
- **Do** keep a tool's first field, and Split bill's start on the index, on the first phone screen,
  and every featured start on the first screen at 1024 by 768, 1280 by 800 and 1440 by 900.
- **Do** list tools as rows between hairlines (symbol, name, what it does), the same in the
  index's search, "All tools" and the A-to-Z list; and keep "Opened lately" by recency, ids only, on
  the device.
- **Do** keep a slot for what may appear (a note under a field, a status line under saves, a button
  that can't act yet) before it appears, so nothing moves under a finger.
- **Do** give every field, button and chip a `--control-border` edge and a touch target at least
  2.75rem tall on touch screens.
- **Do** show every state in two ways: a check mark with the pink fill, words with the pink edge,
  an underline on the current page's link, and the reason a button can't be pressed yet, said
  under it when someone presses or reaches it (not at rest, and not read out again after every add).
- **Do** design and check every new pairing in light and dark, on every surface it sits on, at
  level AA.
- **Do** hand a value from one tool to another after the `#`, which never reaches a server, and
  take it out of the address once it's read.
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
  monochrome, no narrow column, no rows of entries as its front door. The owner turned down the
  line-item strip (#70) and the Device Map (#71) for exactly this. Rows belong to finding a tool
  (the search's answers, the A-to-Z list under the fields), never in place of the fields.
- **Don't** give the index a metaphor: no map, no food carrier, no object for the tools to sit in.
  The owner turned down the Device Map (#71) and the Rantang (#73) for this.
- **Don't** draw the index as a column of stacked rounded boxes, or put cards, a legend or a hero
  over the featured fields; a tool beyond them is a row, never a smaller field or a card.
- **Don't** round the featured fields, inset them from the screen's edges, or draw an arc, rail,
  rim, dash or shadow on the index.
- **Don't** use pink as decoration, or give pink two meanings in one view: a tool has one pink
  button, and the index's starts are all the primary action, one in each featured field. The
  fields, the search, "All tools", the shelf, the code and the symbols are never pink.
- **Don't** list every tool in the header: it holds the featured ones from 1024 px and "All tools".
- **Don't** add a structural gray outside the palette. Its one exception, the error panel's raised
  border in dark mode (#4f4f4f), is a structural step above a palette gray; a new one needs the same
  reason, and a color change otherwise belongs in `@itrium/palettes`.
- **Don't** put a small uppercase heading, eyebrow, kicker or back link above a heading.
- **Don't** type arrows or chevrons as characters.
- **Don't** give featured fields, buttons, chips, the "All tools" panel, the code's sheet, the
  error panel or the bottom bar a drop shadow.
- **Don't** put Split bill's parts back in cards, or stack rounded boxes in a tool: the owner turned
  that down as "too many boxes".
- **Don't** put WhatsApp click-to-chat back in a card, draw a code on it again (it hands its link
  to QR code), put its message in a code it hands over, draw a dashed road under its actions, or
  show its link as raw monospace text.
- **Don't** put QR code's kinds in tabs above the main job, add words to the saved image, route a
  code through anything in between, or hide the code behind a disclosure.
- **Don't** gate Split bill's steps, number them, or mark one done: they are free, in any order.
- **Don't** invert the bottom bar on a dark page: it stays dark.
- **Don't** use `#000000` or pure white text on pink. Graphite is `#2b2b2b`.
- **Don't** put pastel pink text or lines on a light background, including the first featured field
  on a dark page; or rose text and deep-rose lines on graphite, including that field on a light
  page.
- **Don't** use a native `<select>`, inline styles, `data:` URLs, or anything from another domain.
- **Don't** add gradient text, icon-card rows, invented numbers, or a hero that pushes the tool off
  a phone screen.
- **Don't** set field text below 16px on touch screens.
- **Don't** put a band behind a tool's title: the band is the error page's alone.
