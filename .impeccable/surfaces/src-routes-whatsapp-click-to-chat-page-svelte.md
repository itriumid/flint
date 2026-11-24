---
version: 1
slug: 'src-routes-whatsapp-click-to-chat-page-svelte'
primary_target: 'src/routes/whatsapp-click-to-chat/+page.svelte'
related_targets: []
---

# Surface brief: WhatsApp click-to-chat (/whatsapp-click-to-chat)

Scope: the WhatsApp click-to-chat tool page, whole-page structure, in the index's world (the two halves) and matching Split bill's three steps. Mode: Operate. Build path: code-led.
Audience and job: someone messaging a number without saving it as a contact; someone making a link or a printed QR code that opens a chat with their own number (a shop, a profile, a card).
Owner's steer (2026-11-24): the tool pages "don't match the index", are "too many boxes" and "hard to use at the table". Structure round: owner chose The code, shown, and asked that the optional message not be shown by default, "only by request".
Constraints: everything the page does today keeps working (country search, number reading and problems, the doubled-code fix, notes, open, copy, the code with or without the message, saving it as a PNG); copy in src/lib/content.ts approved before commit; pink for one meaning per view; level AA both themes; nothing moves under a finger.
Wording approved by the owner (2026-11-24): "Add a message"; copy failed now reads "We couldn't copy it. Here's the link to select and copy yourself:" with the link in a field under it, shown only then; the road out under Open in WhatsApp removed with its words; the line beside the code shortened to "Opens a chat with this number. Scan the code once before you print it."; and, with the box ticked, "This code leaves your message out: whoever scans it starts a chat with nothing typed."
Open: the Flint mark is to be redrawn next.

## Direction contract

THESIS: The answer is shown as what it becomes: the code as it will print, with "Chat on WhatsApp" and the number under it, in the open beside "Your link", not behind a disclosure. It refuses the card inside a card, the dashed road, and the raw link set in monospace.

OWN-WORLD: The index's and Split bill's world: the symbol and the name in extra bold over the introduction; no cards; parts divided by plain lines under extra-bold headings; Plus Jakarta Sans, graphite and paper; one pink Open in WhatsApp; the print as a white sheet with a hairline, graphite code, in both themes, since that is what prints.

STORY: The person picks the country, pastes the number, checks the line that reads it back, adds a message only if they ask for the field, then opens the chat, copies the link, or saves the code to print.

FIRST VIEWPORT: Phone 390 by 844: header, symbol, title and introduction; country and number fields with the read-back line and a quiet "Add a message" button; under a plain line, the print (about 10rem wide) on the left and "Your link" with one line on using it on the right; then Open in WhatsApp (pink) and Copy link. Empty, the print holds its place with an empty sheet. From 1024px, the fields on the left and "Your link" with a larger print in its own column on the right.

FORM: The code, shown: dealt lead (4 on my ordered list), chosen by the owner. seed:d4ea45f7c0faf9c8. Signature interaction: the print redraws as the number and message are typed, so the code on screen is always the one Save hands over; leaving the message out of the code redraws it coarser.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
