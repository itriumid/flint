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
Change (2026-11-24): the QR code moved to its own tool. This page no longer draws or saves a code, and the message-in-the-code checkbox went with it; under "Opens a chat with this number." a rose action line, "Make a QR code of this link", opens /qr-code with the link after the # (never sent to a server).

## Direction contract

THESIS: The answer is the link, said plainly under the fields: what it does, anything decided on the person's behalf, a way to a printed code, and the two actions. It refuses the card inside a card, the dashed road, the raw link set in monospace, and (since 2026-11-24) a second QR code maker inside this tool: printing is the QR code tool's job.

OWN-WORLD: The tools' world: the symbol and the name in extra bold over the introduction; no cards; parts divided by plain lines under extra-bold headings; Plus Jakarta Sans, graphite and paper; one pink Open in WhatsApp; the way to a printed code as a rose action line with the drawn arrow.

STORY: The person picks the country, pastes the number, checks the line that reads it back, adds a message only if they ask for the field, then opens the chat or copies the link; someone who wants it printed follows "Make a QR code of this link" to the QR code tool, which opens with the chat link already in it (without the message, since a printed code is for everyone).

FIRST VIEWPORT: Phone 390 by 844: header, symbol, title and introduction; country and number fields with the read-back line and a quiet "Add a message" button; under a plain line "Your link", one line on what it does, the rose "Make a QR code of this link", then Open in WhatsApp (pink) and Copy link. From 1024px, the fields on the left and "Your link" with its actions in its own column on the right.

FORM: The code, shown (seed:d4ea45f7c0faf9c8), changed by the owner on 2026-11-24: the code itself moved to the QR code tool, leaving this page's answer as the link and its hand-off. Signature interaction: the read-back line under the number, which says the number as the link will have it while it's typed, and the hand-off that carries the link to the QR code tool after the # so it never reaches a server.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
