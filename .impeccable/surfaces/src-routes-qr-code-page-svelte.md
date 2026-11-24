---
version: 1
slug: 'src-routes-qr-code-page-svelte'
primary_target: 'src/routes/qr-code/+page.svelte'
related_targets: []
---

# Surface brief: QR code (/qr-code)

Scope: a new tool page, Flint's third tool, whole page, inside the established world (the index's halves, Split bill's steps, WhatsApp click-to-chat's print). Mode: Operate. Build path: code-led.
Audience and job: someone who needs a code that opens something when scanned: a link for a menu, a poster or a slide; plain text; a Wi-Fi network for guests; a contact card; an email; a phone call. Usually typed or pasted on a phone or a laptop, then saved to print or post.
Owner's answers (2026-11-24): a link or any text is the main job; Wi-Fi, contact, email and phone are there but never overwhelming, offered below as other kinds, shown only when asked for; the saved code is raw, with no words added to the image, unless the owner asks for that later; save as PNG and SVG; WhatsApp click-to-chat will later drop its own code and hand its link to this tool filled in, after a # in the address so it never reaches the server.
Constraints: made entirely on the device, no new connections, no data: URLs, no inline styles; the code is static and points straight at what was typed, nothing in between; copy in src/lib/content.ts approved by the owner before commit; what the tool decides lives in src/lib with tests; pink for one meaning per view; level AA in both themes; nothing moves under a finger.
Open: the index still shows two halves; adding this tool to it is the next round. WhatsApp's hand-off comes after that.

## Direction contract

THESIS: A code for anything, with a link or text as the job everyone sees and the other kinds on a short shelf below, each a few plain fields only once it's picked. It refuses the menu of tabs every QR generator opens with, the dynamic code that routes through a tracker, and words baked into the image.

OWN-WORLD: The tools' world: symbol and name in extra bold over the introduction; no cards; parts divided by plain hairlines under extra-bold headings; Plus Jakarta Sans, graphite and paper; one pink Save as PNG; the code on a white square with a hairline edge, graphite modules, in both themes, as WhatsApp's print is, but bare; the shelf as rows between lines, each kind's name in semibold and what it does muted at the right.

STORY: The person pastes a link or types text, reads the line saying what the code will do, sees the code redraw beside "Your code", and saves it as PNG or SVG. Someone who needs Wi-Fi or a contact picks it from the shelf; its fields take the first part's place, and the shelf offers "A link or text" back.

FIRST VIEWPORT: Phone 390 by 844: header with three tools, symbol, title and introduction; the "Link or text" field; under a plain line the code (about 9.5rem) on the left, "Your code" and what it does on the right; Save as PNG (pink) and Save as SVG side by side; then "Something other than a link" with its rows starting above the fold. From 1024px the field and the shelf on the left, the code larger with its heading and saves in the right column.

FORM: Kinds on a shelf: dealt (7 on my ordered list), chosen by the owner. seed:44acc6f743e80122. Signature interaction: the code redraws as each character is typed, so the code on screen is always the one Save hands over; picking a kind on the shelf swaps the first part's fields in place and moves focus into them, and what was typed in each kind is kept if the person switches back.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
