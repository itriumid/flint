---
name: flint.itrium.id
description: The Rhodonite Specimen, put to work. Itrium's free tools, in the same stone as itrium.id.
colors:
  graphite: '#2b2b2b'
  graphite-surface: '#343434'
  graphite-border: '#474747'
  graphite-raised: '#3d3d3d'
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
  display:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '4.5rem'
    fontWeight: 700
    lineHeight: 1
    letterSpacing: '-0.025em'
  headline:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '2.25rem'
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: '-0.025em'
  place-name:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1.875rem'
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: '-0.025em'
  name-line:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1.25rem'
    fontWeight: 400
    lineHeight: 1.375
  title:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1.125rem'
    fontWeight: 600
    lineHeight: 1.55
  map-heading:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1rem'
    fontWeight: 700
    lineHeight: 1.5
  body:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.5
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
  full: '9999px'
  territory: '4rem 2rem 4.5rem 2.5rem'
spacing:
  gutter-panel: '0.75rem'
  gutter-phone: '1.25rem'
  gutter-wide: '2rem'
  card: '1.25rem'
  card-wide: '1.5rem'
  section: '5rem'
  plate-width: '34rem'
  plate-gap: '4rem'
  place-stagger-phone: '4rem'
  place-stagger: '10rem'
  dot: '1rem'
  node-width: '7rem'
  node-height: '4rem'
  control-compact: '2.25rem'
  touch-target: '2.75rem'
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
  territory:
    backgroundColor: '{colors.paper-elevated}'
    textColor: '{colors.graphite}'
    rounded: '{rounded.territory}'
    padding: '1.5rem 2rem 0'
    width: '{spacing.plate-width}'
  territory-dark:
    backgroundColor: '{colors.graphite-surface}'
    textColor: '{colors.off-white}'
  place-name:
    typography: '{typography.place-name}'
  place-dot:
    size: '{spacing.dot}'
    rounded: '{rounded.full}'
  road-label:
    typography: '{typography.road-label}'
  node:
    backgroundColor: '{colors.paper}'
    textColor: '{colors.muted-gray-on-light}'
    rounded: '{rounded.sm}'
    width: '{spacing.node-width}'
    height: '{spacing.node-height}'
    typography: '{typography.control}'
  node-dark:
    backgroundColor: '{colors.graphite}'
    textColor: '{colors.muted-gray-on-dark}'
  panel:
    backgroundColor: '{colors.graphite-surface}'
    textColor: '{colors.off-white}'
    rounded: '{rounded.xl}'
    width: '{spacing.panel-width}'
  title-band:
    backgroundColor: '{colors.graphite-surface}'
    textColor: '{colors.off-white}'
    rounded: '{rounded.xl}'
    typography: '{typography.headline}'
  title-band-light:
    backgroundColor: '{colors.paper-elevated}'
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

The tools are cut from the same stone as itrium.id. That site is The Rhodonite Specimen (`DESIGN.md` in the `website` repository): a graphite matrix with a pink vein, where gray is
the body and pink marks what a visitor should find. Here the specimen leaves the display case and
goes onto the workbench. The world is the same: Plus Jakarta Sans for everything, graphite and
paper, pastel pink with its two deepenings, flat tonal surfaces, pills and soft corners, one drawn
arrow. Only the job changes. itrium.id persuades; a tool gets out of the way. The index is The
Device Map, one calm atlas plate: the visitor's device drawn as a single territory inside one
border line in the text color, the two tools as places in it (a filled dot and an underlined bold
name), and the only ways out drawn as dashed roads that cross the border to small outlined boxes,
each labelled with what it carries. A legend in the margin column says the same as facts. Privacy
is shown as geography, not claimed in a list. On a tool page the stone keeps its earlier form, a
slim title band with the work directly under it, because the person using it is at a restaurant
table with a phone in one hand and a group waiting.

Components are soft and sure-footed, and tactile without being playful. Every control has a
round, generous target that a thumb finds the first time (2.75rem on touch screens) and an edge
you can see (3:1 against the page and the card). They feel good to press but never perform.
Density is calm but working: forms sit in a narrow column of 36 to 42rem, inset lists and notes
nest one tonal step down inside cards, and the running total stays at the bottom of a phone's
screen while the bill is made.

Light and dark are equal. Each follows the visitor's system, and neither is a courtesy version of
the other: every new pairing is designed and checked in both. The system refuses what itrium.id
refuses: generic SaaS ornament (gradient text, icon-card rows, invented numbers), drop shadows on
anything but a floating list, pure black and white, decorative pink, and small labels above
headings. It also refuses what only a tool can get wrong: a hero that pushes the tool off a phone
screen, and state shown by color alone.

**Key Characteristics:**

- One stone with itrium.id: the same tokens, typeface, radii, button shapes and arrow.
- The index is one map: the device as a territory with an irregular soft border, the tools as
  places in it, the roads out as dashed lines to outlined boxes, and the one pink pill at the
  Split bill place. A tool page opens with a slim title band, then the tool. Territory and band
  follow the theme: a step off the page, never the other theme's color.
- Light and dark are equal. Both follow the system, unless System, Light or Dark is chosen in the
  footer.
- Flat surfaces with tonal steps. The only shadow is under the open searchable list.
- Every control has a 3:1 edge (`--control-border`), a target at least 2.75rem tall on touch
  screens, and 16px text on touch screens so iOS doesn't zoom.
- Pink marks the primary action, focus, what's selected, and the way onward, and nothing else.
- Motion is CSS only and off under reduced motion.

## Colors

Rhodonite, as itrium.id applies it, plus the two edge grays that the tools' controls need. The
tokens live in `src/app.css` as `--bg`, `--surface`, `--border`, `--text`, `--muted`, `--accent`,
`--on-accent`, `--accent-edge`, `--control-border` and `--focus`. Each swaps value between the
dark default and `prefers-color-scheme: light`. The binding rules are in the handbook's
`itrium/brand.md`.

### Primary

- **Pastel pink** (`pastel-pink`): the accent, always as a fill. The primary button, the selected
  tag chip, the selection highlight and the skip link. On graphite it's also the focus outline,
  the line of a state, and pink text.
- **Deep rose** (`deep-rose`): pink as a line on light backgrounds (`--accent-edge`). The edge of
  a selected chip, an unsure receipt line, a note's edge, a card's hover edge, and the checked
  box or radio button. It reaches 3:1 on white.
- **Rose text** (`rose-text`): pink as text on light backgrounds (`--accent-text`). Action lines
  with the arrow, such as "Open Split bill". 4.8:1 on paper, 5.4:1 on
  white: AA with little headroom, so never put it on a pink tint.

### Neutral

- **Graphite** (`graphite`): the dark page, the field fill and inset lists in dark mode, light
  mode's text, and the text on pink, always.
- **Graphite surface** (`graphite-surface`) and **graphite border** (`graphite-border`): cards and
  their dividing lines in dark mode, and the running total's bar. Inside a panel in dark mode, the
  panel steps up to graphite surface and its cards to **graphite raised** (`graphite-raised`) with
  **graphite raised border** (`graphite-raised-border`), as on itrium.id.
- **Off-white** (`off-white`): text on graphite.
- **Paper elevated** (`paper-elevated`, `--elevated`): the panels and title bands in light mode,
  and the index's territory, from `@itrium/palettes`. A step down from paper, where everything a
  band or the territory holds still passes: text 12.5:1, muted 4.7:1, rose text 4.8:1, control
  edge 4.0:1, focus 12.5:1. In dark mode the territory is graphite surface, a step up from the page.
- **The map's lines** are all in the text color (graphite in light mode, off-white in dark): the
  territory's 2 px border, the 3 px dashed roads, the dots and the legend's 2 px top rule. The
  boxes the roads reach are outlined in muted gray instead, since they are outside the device and
  are not ours.
- **Muted gray on dark** (`muted-gray-on-dark`) and **muted gray on light**
  (`muted-gray-on-light`): secondary text such as introductions, hints, legends, the footer and the
  navigation. The lighter one stays at 4.6:1 even on graphite raised.
- **Control edge on dark** (`control-edge-on-dark`) and **control edge on light**
  (`control-edge-on-light`): the border of every field, button, chip and floating list
  (`--control-border`). They reach 3:1 against both the page and a card, where the softer border
  colors don't.
- **Paper** (`paper`), **paper surface** (`paper-surface`) and **paper border** (`paper-border`):
  light mode's page (and field fill, and the fill of the boxes the roads reach), cards, and
  dividing lines (the rule above the index's tools elsewhere).

### Named Rules

**The Vein Rule.** Pink marks something: the primary action, focus, what's selected, or the way
onward. If you can't say what a pink element marks, it should be gray. In a tool, one pink button
per view; on the index, one pink pill, at the Split bill place, with rose-text action lines for
the tools elsewhere and a shared bill as their way onward, and nothing else pink. The map's
places, roads and border are never pink.

**The Two Borders Rule.** `--border` is for lines nothing depends on, such as card edges and
dividers. Anything a person has to find in order to use it gets `--control-border`.

**The Graphite Text Rule.** Text on pink is graphite, never white. On light backgrounds pink text
is rose text and pink lines are deep rose. Pastel pink is never text or a line there.

**The Every-Surface Rule.** Contrast is checked on every surface text sits on: page, card, inset
list, note, running total, the index's territory and the page around it, in both themes. Text needs 4.5:1. Focus outlines, control edges and
state lines need 3:1.

## Typography

**Display Font:** Plus Jakarta Sans Variable (with `ui-sans-serif, system-ui, sans-serif`)
**Body Font:** Plus Jakarta Sans Variable, the same file

**Character:** One variable typeface from the Indonesian foundry Tokotype carries every role, the
same as on itrium.id. Hierarchy comes from weight and size alone: bold, tightly tracked headings
in sentence case and plain, readable working text. It's served from the site itself.

### Hierarchy

- **Display** (`display`): Flint's name at the top of the index, in the margin column on wide
  screens and above the map on phones. 3rem on phones, the token size from 640 px. The error
  page's heading uses it too.
- **Name line** (`name-line`): the muted line under the index's name, saying what Flint is. 1.125rem
  on phones, the token size from 640 px. It sits under the name, never above it.
- **Headline** (`headline`): a tool's title in its title band. 1.875rem on phones, the token size
  from 640 px.
- **Place name** (`place-name`): a tool's name at its place on the map, bold, tightly tracked and
  always underlined (2 px, 6 px below the text, 3 px on hover): the place names are the ways in.
  1.5rem on phones, the token size from 640 px.
- **Title** (`title`): a section card's heading inside a tool (`cardHeading`), semibold.
- **Map heading** (`map-heading`): the region's name inside the territory ("Your device"), the
  legend's heading and the heading of the tools elsewhere, bold at body size.
- **Road label** (`road-label`): what a road carries, semibold beside the road, at most 16rem wide.
- **Body** (`body`): a tool's introduction (at 1.625 line height in the title band), running prose,
  the muted line under a place's name, and the legend's facts.
- **Control** (`control`): field text, chips, notes, hints, amounts and the boxes the roads reach,
  at 0.875rem. On touch
  screens field text rises to 1rem (`pointer-coarse:text-base`) so iOS Safari doesn't zoom the
  page.
- **Label** (`label`): field labels, secondary and small button labels, navigation.
- **Button** (`button`): the primary button's label, semibold.

Amounts that line up or change in place (counts, the running total) use tabular figures.

### Named Rules

**The One Typeface Rule.** Plus Jakarta Sans does everything. Never add a second family, and never
load a font from another domain.

**The No Kicker Rule.** A heading is the first thing in its block. No eyebrow, category label,
small uppercase heading or back link sits above it. Nothing here is set in uppercase. A line that
says more about a heading goes under it, as the index's name line and a place's line do.

## Layout

- **Widths:** header, footer and the index sit in the 64rem content column (`content-width`). The
  index's map plate is 34rem (`plate-width`) from 1024 px and the column's full width under it. Panels
  and title bands are wider, at 72rem (`panel-width`), and inset from the viewport by 0.75 to
  1.25rem (`gutter-panel`). A tool sits in a narrow working column: 36rem (`form-width`) for a
  single form like WhatsApp click-to-chat, 42rem (`tool-width`) for Split bill.
- **Gutters:** 1.25rem on phones (`gutter-phone`), 2rem from 640 px (`gutter-wide`).
- **Rhythm:** a tool page ends with 5rem of space (`section`); the index with 4rem on phones and 6rem from 1024 px. Within a tool, cards stack 1.25 to 1.5rem
  apart, and fields and their hints step in 0.5rem to 1rem.
- **Index:** one atlas plate on the header's own grid. From 1024 px, two columns 4rem apart
  (`plate-gap`): on the left, the name and its line, then the legend under them; on the right, the
  34rem plate, ending under "About Itrium". Under 1024 px: name and line, the plate 2.5rem under
  them, then the legend. The tools on sites of their own and "Read the source" close the page
  across both columns, under a hairline in `--border`.
- **The plate:** the territory first, 1.5rem in on phones and 2rem from 640 px, open at the bottom
  so its roads run straight out. Inside it, the region's name, then Split bill's place: a 1rem dot
  (`dot`) in a 1rem column with the road starting under it, 1rem from the name, its line (or the
  bill in progress) and the pink "Split a bill". WhatsApp click-to-chat's place sits 2.5rem lower
  and staggered right, 4rem on phones (`place-stagger-phone`) and 10rem from 640 px
  (`place-stagger`), so Split bill's road passes beside it, as on a map. Outside the border, a
  transparent border as wide as the territory's keeps each road on its own line across it.
  WhatsApp's road ends first at its box; Split bill's runs on past it to "Our server". From 640 px
  Split bill's road label sits beside its road, level with WhatsApp's, in a 9rem column, so "Our
  server" stays in the first viewport; on phones it follows WhatsApp's box.
- **What the browser remembers:** read after the page loads from what the browser already keeps,
  never stored or sent. A bill in progress in this tab lives on the device, so it appears inside
  the territory, at the Split bill place, in place of the place's line ("Your bill in progress: 3
  people, 5 items, Rp 459.250."), and the pink pill says "Continue your bill". A bill shared from
  this device took the road out, so it is marked on that road with an action line to it: under
  the road's label on phones, beside "Our server" from 640 px. Both arrive into space already kept
  for them.
- **Tool page:** a slim title band (title and introduction only, about 2rem of padding on phones),
  then the tool immediately. No closing panel, because the running total owns the bottom of the
  screen.
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

**The One Map Rule.** The index is one map: the device as one territory, the tools as places in
it, and every way out as a road crossing the border to an outlined box, labelled with what it
carries. No cards, no bands, no rows of entries. A new tool is a new place; a new connection is a
new road, drawn only when the site really makes one.

**The Kept Space Rule.** What the browser remembers arrives into a space already kept for it (the
place's line holds three lines, 4.5rem, and the shared mark on phones 2.5rem), so nothing moves
under a finger when it appears.

**The Slab Rule, for tools.** A tool page opens with a title band and never closes with one: on
a phone, the tool comes before the frame.

**The First Screen Rule.** On a phone, the first field of a tool is visible without scrolling.
If a new element would push it down, it belongs lower on the page.

**The Answer In Reach Rule.** Wherever a tool is being filled in, its answer is one glance or one
tap away: the running total below 1024 px, the split's own column above. Someone opening a shared
result lands on it, not on the form that made it.

## Elevation & Depth

Surfaces are flat. Depth comes from tonal steps (page, then card, then an inset list or note one
step back down inside the card, then raised inside a panel; on the index, page then territory) and
from borders. The one shadow
is the floating list of the searchable select, which genuinely sits above the content and has to
be read against it. There are no glows, in either theme.

### Shadow Vocabulary

- **Floating list** (`box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`):
  the open option list of `SearchableSelect`, and anything else that floats over the page. Nothing
  else.

### Named Rules

**The Only Floating Things Cast Shadows Rule.** Cards, buttons, chips, bands, the territory, the
road boxes and the running total never get a drop shadow. A control responds by filling with the
next tonal step, a place name by thickening its underline, and an arrow by moving 4 px on.

## Shapes

Soft and rounded, with the radius growing with the size of the object, on the same scale as
itrium.id. Buttons, chips and the info button are pills (`full`). Fields, notes and floating lists
get 0.5rem (`sm`), and options inside a list a little less (0.375rem). Inset lists, receipt lines
and the receipt photo get 0.75rem (`md`). Cards get 1rem (`lg`). Panels and title bands get 1.5rem
(`xl`). The focus outline is 2 px at 4 px radius (`focus`), 3 px away from the element. Headings and
cards that the page itself moves focus to (`tabindex="-1"`) show none: focus still moves and is
announced, but a ring there read as a stray selection box, pink in dark mode. Edges are
1 px hairlines, notes included.

The index's map has its own shapes. The territory is the one irregular shape on the site: a
soft region with four different corners (`territory`: 4rem, 2rem, 4.5rem, 2.5rem from the top
left), bounded by a 2 px line in the text color, open of padding at the bottom so the roads leave
it. Places are 1rem filled dots in the text color. Roads are 3 px dashed lines in the text color,
running unbroken from a dot across the border. The boxes they reach are 7 by 4rem (`node-width`,
`node-height`), 0.5rem (`sm`) corners, a 2 px muted-gray outline and the page's fill: square and
plain against the territory's soft edge, because they're outside it. The legend draws the same
marks as swatches in a 2.5rem column: a small territory (0.375rem corners), a dashed road, and a
plain muted line for "no road at all". Dashed lines elsewhere mean something else: the place a
removed item was, and an empty state in WhatsApp click-to-chat.

The arrow is drawn, not typed: one SVG, the same as itrium.id's `Arrow.svelte`, with a 2-unit
round-capped stroke in the current color, sized to the text beside it. A selected chip carries a
check mark, so selection never rests on color alone.

## Components

### Buttons

Pressable pills, soft and sure-footed. There are three kinds, and pink is the main action.

- **Shape:** fully rounded (`full`), 0.75rem by 1.5rem of padding, label and icon centered with a
  0.5rem gap.
- **Primary:** pastel pink with graphite text, semibold, and a 1 px `--accent-edge` border: deep
  rose in light mode, where pastel pink alone is 1.5:1 on paper and the pill had no shape, and the
  fill itself in dark mode, where it doesn't show. One per view: "Read the receipt", "Add to
  the bill", "Open in WhatsApp" (messaging a number is the job most people come for; "Copy link"
  beside it is secondary).
- **Secondary:** transparent, with a 1 px control-edge border and medium weight. Every other
  action beside the primary.
- **Small:** the secondary's look at 2.25rem tall with 1rem of padding (2.75rem on touch screens).
  For actions inside a card or the running total.
- **Hover:** the primary fades to 85% opacity. Secondary and small fill with the page color.
- **Disabled:** a not-allowed cursor, with a line beside it saying why (`SPLIT_BILL.missing`).
  Small buttons keep their edge and turn their words muted, which stays above 4.5:1, including
  "Add person" and "Add item" while they're unavailable (`aria-disabled`); fading them to 50% took
  the words down to 3:1. The primary and secondary still fade to 50%.
- **Focus:** a 2 px outline 3 px away, pastel pink on graphite and graphite on light backgrounds.
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

### The Device Map (signature, the index)

The visitor's device drawn as one place, with the tools in it and the only ways out drawn as
roads. Privacy shown as geography, not claimed in a list.

- **Territory:** paper elevated in light mode, graphite surface in dark, a 2 px border in the text
  color and the four irregular corners (`territory`). The region's name ("Your device") in map
  heading type at its top left. No shadow, no fill pattern, no second border.
- **Place:** a filled 1rem dot in the text color, 1rem left of the place's name, which is the link
  to the tool: place-name type, always underlined, the underline thickening from 2 to 3 px on
  hover. Under the name, the place's line in muted body text, at most 20rem wide. The Split bill
  place holds the one pink pill, 1rem under its line.
- **Road:** a 3 px dashed line in the text color, in the same 1rem column as its place's dot, from
  just under the dot, down through the territory, across its border, to the box it reaches. Its
  label sits beside it in road-label type ("A bill you share, encrypted. Deleted 30 days after
  the last share.").
- **Box:** where a road ends, outside the line: 7 by 4rem, the page's fill, a 2 px muted-gray
  outline at 0.5rem corners, its name centered in muted control type ("Our server", "WhatsApp").
- **Legend:** in the margin column, under a 2 px rule in the text color: the heading, then each
  mark drawn as a swatch in a 2.5rem column beside the fact it stands for, 0.75rem apart, then one
  muted line on working offline. Swatches are hidden from screen readers; the facts say it all.
- **Marks of the visitor's own:** see Layout. A bill in progress takes the Split bill place's line;
  a bill shared from this device is marked on its road, with a rose-text action line and the
  drawn arrow.

**The Inside The Line Rule.** Whatever stays on the device is drawn inside the territory, and
whatever leaves it is drawn on a road outside it. Never put something that reaches a server
inside the line, or draw a road the site doesn't take.

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
in WhatsApp" and "Copy link" side by side, neither ever breaking onto two lines (on the narrowest
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
centered. The title band says what this bill is instead of how to make one ("A bill shared with you:
Rp 459.250 in all, paid by Budi."), in the text color at medium weight, not muted: for someone
who arrived from a link, it's the only context there is, and one line above the split says where to look ("Find your
name, and tap it to see what's in your share."). A small "Make changes", with a muted note that
changes stay on the device until the bill is shared again, waits under the split, so the friend's own
row is on a phone's first screen. Who paid and rounding show only as their result in the rows;
there's no running total, since the split is already in view. "Copy the link", which copies the
link they opened, is secondary: reading their row and paying is the friend's job, and there's no
pink on the page. The note on what sharing keeps on our server is left out, since a long link keeps
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

### Panel and title band

The `.band`, a step off the page in either theme: graphite surface in dark mode (its cards step up
to graphite raised), paper elevated in light mode. It was graphite in both themes, like
itrium.id's, until that made the title the heaviest shape on every light page, above the pink
action and with dark mode's pink focus ring inside it. Rounded 1.5rem, inset and wider than the
content. The index has none: its map replaced the opening and closing panels.
The error page is one panel: its heading in display type and a ruled list of where to go instead,
each row with the arrow. On a tool
page it's a title band holding just the title and the introduction. The band is a little wider than the
tool under it: Split bill's goes to 72rem, where the split has its own column, and WhatsApp
click-to-chat's to its form card's 32rem, so their edges line up and on a wide screen the form
isn't a small card under a long slab.

### Navigation

The header holds Flint's mark and name on the left, one link, the way back to the index from any
tool (`aria-current="page"` on the index), and "About Itrium" on the right, muted, turning to the
text color on hover. The mark is the same tile in either theme; on a dark page it's the one with a
faint rim. Itrium's lockup sits in the footer and leads to itrium.id, named "Flint is made by
Itrium", in the version for the theme in use. A pink skip link sits off screen and drops in from
the top on focus. The footer is muted small text: the lockup, the no-tracking promise (except on
the index, where the map's legend says it; only Split bill's mentions sharing a bill, the
one thing that reaches us) and the theme choice on the left, contact and source links on the
right. On the index, where the page ends with "Read the source" just above, the footer leaves its
own source link out. The theme choice is one control: three options in a pill-edged group, the
chosen one filled in the text color, so the choice shows by more than color. The header's and
footer's links stay small text but are 2.75rem tall on touch screens, like every other control.

## Do's and Don'ts

### Do:

- **Do** take tokens, radii, button shapes, the arrow and type roles from itrium.id's DESIGN.md
  before inventing anything. A difference between the two sites needs a reason a tool has and a
  page doesn't.
- **Do** keep a tool's first field on the first phone screen.
- **Do** give every field, button and chip a `--control-border` edge and a touch target at least
  2.75rem tall on touch screens.
- **Do** show every state in two ways: a check mark with the pink fill, words with the pink edge,
  and the reason a
  button can't be pressed yet, said under it when someone presses or reaches it (not at rest, and
  not read out again after every add).
- **Do** design and check every new pairing in light and dark, on every surface it sits on.
- **Do** use the drawn arrow wherever a link points onward.
- **Do** keep motion in CSS, gated on `motion-safe` or `prefers-reduced-motion: no-preference`:
  page cross-fades, the 4 px arrow nudge, and the loading spinner. Nothing in a tool
  rises or reveals as it scrolls.
- **Do** add to the index as the map: a tool as a place inside the territory, a connection as a
  labelled road out to an outlined box, a fact as a line of the legend with its drawn swatch.
- **Do** use Tailwind classes with the theme tokens and the shared classes in `src/lib/styles.ts`,
  never raw hex values in markup.

### Don't:

- **Don't** use pink as decoration, or put two pink buttons in one view.
- **Don't** put a small uppercase heading, eyebrow, kicker or back link above a heading.
- **Don't** type arrows or chevrons as characters.
- **Don't** give cards, buttons, chips, bands or the running total a drop shadow.
- **Don't** use `#000000` or pure white text on pink. Graphite is `#2b2b2b`.
- **Don't** put pastel pink text or lines on a light background.
- **Don't** use a native `<select>`, inline styles, `data:` URLs, or anything from another domain.
- **Don't** add gradient text, icon-card rows, invented numbers, or a hero that pushes the tool off
  a phone screen.
- **Don't** set field text below 16px on touch screens.
- **Don't** put cards, bands, a hero or rows of entries on the index, or color the map's
  border, places or roads pink.
