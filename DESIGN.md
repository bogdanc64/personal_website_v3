---
name: Bogdan Maftei
description: A broadsheet portfolio for a senior technical consultant, set like a newspaper on mint paper.
colors:
  sheet: "#f4f5f0"
  paper: "#ffffff"
  ink: "#414141"
  ink-press: "#2a2a2a"
  on-press: "#f4f5f0"
  rule: "#414141"
  flag: "#f38380"
  flag-ink: "#1a1c1b"
  mint: "#e4e5d9"
  focus: "#1b65c5"
  error: "#8c1d18"
  logo-plate: "#0a0a0a"
  night-sheet: "#1c1e1c"
  night-paper: "#262824"
  night-ink: "#f3f4ee"
  night-rule: "#a3a69e"
  night-focus: "#9ec1ff"
  night-error: "#ffb4ab"
  night-selection: "#fbd25f"
typography:
  nameplate:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(2.55rem, 6.4vw, 4.75rem)"
    fontWeight: 600
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  display:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(2.15rem, 4.4vw, 3.45rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  section:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(1.85rem, 3vw, 2.45rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0"
  caption:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "0.98rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0"
rounded:
  none: "0"
spacing:
  sheet: "min(68rem, calc(100% - 1.5rem))"
  field: "0.42rem"
  section-top: "3.75rem"
  section-bottom: "0.9rem"
components:
  button-send:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
    rounded: "{rounded.none}"
    padding: "0.65rem 1.05rem"
    height: "44px"
  button-send-hover:
    backgroundColor: "{colors.ink-press}"
    textColor: "{colors.on-press}"
    rounded: "{rounded.none}"
    padding: "0.65rem 1.05rem"
  field:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.55rem 0.65rem"
  flag:
    backgroundColor: "{colors.flag}"
    textColor: "{colors.flag-ink}"
    rounded: "{rounded.none}"
    padding: "0.28rem 0.42rem"
---

## Overview

**Creative North Star: "The front page of a practice."**

Bogdan Maftei’s site is one newspaper, not a stack of cards. The sheet is named for him. The lead is the appointment, Senior Technical Consultant, and the record of employers, projects, and skills continues in columns under hairline rules. The only filled control sends a message.

The day edition is mint paper read at a desk. The night edition is the same sheet with the ink reversed, chosen explicitly, not inherited from the operating system.

**Key Characteristics:**

- A serif nameplate and headlines, a grotesque for everything a person has to read
- Hairline rules that run through the sheet, including one vertical rule through the engagements
- Coral used once, as the flag on the current role
- Square corners, no shadow, no gradient
- Body copy held to a readable measure

## Colors

**The Ink Rule.** Gunmetal carries the reading. Coral is a status mark, never a decoration, a link, or a second button.

- **Sheet** (`#f4f5f0`): the page ground, a mint newsprint. Also the fill inside form fields, so the field sits in the sheet rather than on a floating card.
- **Paper** (`#ffffff`): the Write box only, so the form is a ruled inset on the sheet.
- **Ink** (`#414141`): text, rules, the day-edition send button, and focus-adjacent structure.
- **Ink press** (`#2a2a2a`): the send button while the pointer is over it.
- **Flag** (`#f38380`) with **flag ink** (`#1a1c1b`): the Present mark beside Softwire. The word is in the mark, so color is not the only signal.
- **Mint** (`#e4e5d9`): text selection on the day edition.
- **Focus** (`#1b65c5`): the keyboard ring. It is not used as a brand accent.
- **Error** (`#8c1d18`): the sentence shown when a message does not send.
- **Logo plate** (`#0a0a0a`): the small ground behind employer marks whose files are drawn on black.

Night edition swaps the sheet to `#1c1e1c`, the paper to `#262824`, and the ink to `#f3f4ee`. Rules lighten to `#a3a69e`. Selection becomes `#fbd25f`. The flag colors stay. Focus becomes `#9ec1ff` and the error becomes `#ffb4ab`.

## Typography

**The Two Voices Rule.** Source Serif 4, weight 600, sets the nameplate, the lead, section titles, roles, and project titles. Schibsted Grotesk sets navigation, body, labels, dates, and the send button. Italic Source Serif 4, weight 400, is reserved for the portrait caption.

Both faces are self-hosted in `public/fonts`. Tracking on display type stays at `-0.03em` or looser. Body size is `1.0625rem` on a `1.55` line height. Paragraphs stop at `68ch`.

Dates use tabular numerals.

## Layout

**The Sheet Rule.** Content lives in one centered sheet, `min(68rem, calc(100% - 1.5rem))`, widening its side margin from `900px`. The nameplate spans the sheet. A double rule sits under it: a 1px line and a 3px line. The dateline holds the date, the section index, and the edition control, closed by a 1px rule.

The lead headline spans the sheet. Under it, from `900px`, the portrait and biography occupy the wide column and the Write box occupies the narrow one. Below `900px` the Write box comes first, then the biography, so the message can be sent before the long copy.

Engagements hang on a 1px vertical rule. From `720px` the employer mark sits in a fixed first column. Projects place the picture and the description side by side from `900px`, with the title spanning both.

Section headings take more space above (`3.75rem`) than below (`0.9rem`).

**The One Motion Rule.** The masthead double rule draws once from the center, `720ms`, with an ease-out. Reduced motion removes it. Nothing else enters, fades, or hides until scroll.

## Elevation & Depth

**The Flat Sheet Rule.** The page has no drop shadow and no blur. Depth is the difference between sheet and the white Write box, plus the weight of the rules. The logo plate is a flat black field, not a raised tile.

## Shapes

**The Square Rule.** Corners are `0`. Buttons, fields, the Write box, the Present flag, and the logo plate are rectangles. The portrait is a straight photograph with a caption rule, not a circle.

## Components

**Nameplate.** The words “Bogdan Maftei” in the display serif, linking home. No underline until hover.

**Section index.** About me, Experience, Projects, Contact. The current section is underlined. Below `900px` the index is behind a Sections control that becomes Close when open. Targets are at least `44px` tall.

**Edition control.** A text button reading “Day edition” or “Night edition” for the edition on screen. It is not filled.

**Write box.** A 1px ruled rectangle on paper. It holds the existing contact sentence, with the email as a mailto link, then the form.

**Send button.** The only filled control. Ink ground, sheet-colored label, square, `44px` tall. While a message is in flight the fill drops and the label reads “Sending…”. Success reads “Message sent.” Failure keeps the typed text and reads “The message did not send. Try again in a moment.”

**Field.** A visible label (Name, Email, Subject, Your message) above a square input. The border is the ink color. Placeholder text is not used.

**Engagement.** Employer mark on the black plate, company name, Present flag when current, role in the serif, the date span, an optional “Joined as” line, hairline-marked keypoints, then a wrapping row of skill names with small icons.

**Project story.** A serif title, the screenshot, the existing description, the skill row, then either “View Code” or “Private repository”.

**Folio.** A still double rule, the copyright line, then email, GitHub, LinkedIn, and Resumé as underlined links.

## Do's and Don'ts

**Do**

- Keep the biography, employers, dates, keypoints, skills, project descriptions, email, and links as recorded facts.
- Put new reading on the same sheet: nameplate, double rule, dateline, then the story.
- Use the serif for titles and the grotesque for sentences.
- Keep coral on the Present flag.
- Leave the send button as the only filled control.

**Don't**

- Don’t add a kicker above a heading.
- Don’t turn engagements or projects into equal cards, circles, or icon tiles.
- Don’t invent a promotion date, a client, or a metric.
- Don’t put a second filled button beside Send message.
- Don’t hide body copy until an animation or a scroll trigger fires.
