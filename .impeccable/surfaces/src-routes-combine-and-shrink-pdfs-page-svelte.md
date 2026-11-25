---
version: 1
slug: 'src-routes-combine-and-shrink-pdfs-page-svelte'
primary_target: 'src/routes/combine-and-shrink-pdfs/+page.svelte'
related_targets: []
---

# Surface brief: the PDF tool (working name "Combine and shrink PDFs", /combine-and-shrink-pdfs; name and address to confirm with the wording)

Scope: a new tool page, Flint's fifth, whole page, inside the established world (Resize and convert images' settings and pills, its rows and save pattern). Mode: Operate. Build path: code-led.
Audience and job: someone who has to send several scans, photos and PDFs as one PDF, often under a size a form set ("max 1 MB"), usually on a phone; also taking some pages out of a PDF, or saving each page on its own.
Owner's answers (2026-11-25): one tool; photos inside typed pages are made smaller, their text kept, when the scans alone can't reach the limit; a choice to keep the files' details (off by default) and a password choice for the saved file (none, the one a locked file had, or a new one) were added after the first build; for all of it; with a size limit, only pages that are scans or photos become pictures, typed pages stay as they are, and the result says which pages changed; a PDF that needs a password asks for it on the device, and the saved file has none, which it says. Libraries approved: @cantoo/pdf-lib 2.11.1 (writing) and pdfjs-dist 6.5.438 (reading, previews, drawing pages), chosen after a measured comparison.
Constraints: made entirely on the device, no new connections, Content-Security-Policy unchanged (pdf.js with isEvalSupported off, its worker and fallbacks served from the site); copy in src/lib/content.ts approved before commit; what the tool decides in src/lib with tests; pink for one meaning (Save); level AA in both themes; nothing moves under a finger; a file the writer refuses but pdf.js can read may still be saved as pictures of its pages, said plainly.

## Direction contract

THESIS: The arrangement people already know from every PDF tool, done carefully: the settings first, then every page as a numbered thumbnail with its own Turn and Remove, and one Save whose line says the size before and after. It refuses an upload, an account, a separate tool per job and a wizard.

OWN-WORLD: The tools' world: symbol and name in extra bold over the introduction; no cards; "Make it under" as the images tool's number with KB/MB pills, "Save as" One PDF / Each page on its own, chosen pills graphite, never pink; pages as white sheets with a hairline edge in a grid, a graphite page number on each, two round outlined controls under each; one pink Save in a footer line.

STORY: The person adds PDFs and photos, sees every page in the order picked, turns or removes what's wrong, moves a page by pressing it and then pressing where it goes, sets the limit if the form has one, reads "10 pages · 940 KB, was 3.1 MB" (or, when it can't fit, "Over 1 MB: the smallest it would go is …"), chooses whether to keep the files' details and whether the saved file has a password (none, the one a locked file had, or a new one), and saves one file, or each page on its own.

FIRST VIEWPORT: Phone 390 by 844: header, symbol, title and introduction; "Make it under" with the number and KB/MB; "Save as" pills; under a plain line "Your pages" with "Add more", a grid of three thumbnails a row with Turn and Remove under each; a footer line fixed to the bottom with the page count and size before and after, and the pink Save. Before any file: the settings and one large "Add PDFs or photos". From 1024px the settings on the left and the pages in a wider grid on the right.

FORM: Arrange the pages: dealt (7 on my ordered list), chosen by the owner. seed:f25c100789930530. Signature interaction: press a page and it lifts, tilted, while every other page becomes a place to put it ("Put it before page 2", or "Put it at the end"); press one and it's moved, the numbers following. One hand, no dragging, and the same by keyboard; with a mouse a page can also be dragged. (Revised before the build: a press-and-hold drag fights scrolling on a phone.) Changing the limit redoes the size a moment later, the footer saying "Working…" and then the new size, so the number always matches what Save hands over.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
