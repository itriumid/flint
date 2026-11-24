---
version: 1
slug: 'src-routes-resize-and-convert-images-page-svelte'
primary_target: 'src/routes/resize-and-convert-images/+page.svelte'
related_targets: []
---

# Surface brief: Resize and convert images (/resize-and-convert-images)

Scope: a new tool page, Flint's fourth, whole page, inside the established world (the QR code page's parts, Split bill's rows, the index's All tools). Mode: Operate. Build path: code-led.
Audience and job: someone who has to fit a photo, a scan or a screenshot under a size someone else set ("max 200 KB" on a form or upload), or needs it in another format, often several at once and usually on a phone; in Indonesia, the KTP, pas foto and ijazah for applications.
Owner's answers (2026-11-24): the main control is a size target, with width, height and quality under "More control"; several images at once with the same settings; formats JPEG, WebP (where the browser can make it) and PNG, plus keeping each one's own; a choice to keep or remove the location and camera details, removed by default; the name combines both jobs ("Resize and convert images" proposed, to be confirmed with the wording).
Constraints: made entirely on the device, no new connections or dependencies, no inline styles; copy in src/lib/content.ts approved before commit; what the tool decides in src/lib with tests; pink for one meaning per view (Save all only; selected choices take the theme choice's graphite pill); level AA in both themes; nothing moves under a finger.

## Direction contract

THESIS: The limit someone else set is the first thing asked, and every image answers it as a row saying what it was and what it became ("3.4 MB → 196 KB"), so the job is checked at a glance before anything is saved. It refuses the drop-zone hero, the per-image editor and the upload every other compressor does.

OWN-WORLD: The tools' world: symbol and name in extra bold over the introduction; no cards; settings as plain fields and the footer's segmented pills (graphite when chosen, never pink); images as rows between hairlines with a small thumbnail, the size after in semibold; one pink "Save all" (or "Save it"); the drawn warning sign for what's worth a look.

STORY: The person types the limit, picks a format if they need another, adds images, reads each row's before and after, and saves them all; someone who needs the location kept ticks the box and reads that anyone they send to can see it.

FIRST VIEWPORT: Phone 390 by 844: header, symbol, title and introduction; "Make each image under" with the number and KB/MB; "Save as" pills; the details box with its line; "More control"; under a plain line "Your images" with "Add images". From 1024px the settings on the left and the images with Save all in their own column on the right.

FORM: Target, then rows: dealt (4 on my ordered list), chosen by the owner. seed:03e34b45f72b9030. Signature interaction: changing any setting redoes every image a moment later, each row saying "Working…" at once and then its new size, so the numbers always match what Save hands over; with a target, the best quality under it is searched for, and an image is only made smaller in pixels when the lowest quality still doesn't fit.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
