---
name: Bogdan Maftei
description: A light practice site for a senior technical consultant, set in one grotesque on cool paper.
colors:
  ground: "#f4f6f3"
  ink: "#17211c"
  muted: "#3e4a44"
  line: "#d5ddd6"
  surface: "#ffffff"
  action: "#17211c"
  action-ink: "#f4f6f3"
  action-hover: "#0c1411"
  focus: "#0b57d0"
  error: "#8c1d18"
  plate: "#101412"
  selection: "#d5e4da"
  portrait-well: "#d7ddd8"
  night-ground: "#121614"
  night-ink: "#f3f5f2"
  night-muted: "#c5cfc8"
  night-line: "#2c3530"
  night-surface: "#1b221e"
  night-focus: "#9ec1ff"
  night-error: "#ffb4ab"
  night-selection: "#234237"
  opening: "#0c0f0e"
typography:
  display:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, sans-serif"
    fontSize: "clamp(2.7rem, 7.4vw, 5.5rem)"
    fontWeight: 600
    lineHeight: 0.96
    letterSpacing: "-0.035em"
  role:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, sans-serif"
    fontSize: "clamp(1.3rem, 2vw, 1.65rem)"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  section:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, sans-serif"
    fontSize: "clamp(1.85rem, 3vw, 2.35rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, sans-serif"
    fontSize: "clamp(1.55rem, 2.4vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  label:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0"
rounded:
  control: "8px"
  photo: "12px"
spacing:
  page: "min(72rem, calc(100% - 2rem))"
  header: "4.25rem"
  section: "5.5rem"
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.action-ink}"
    rounded: "{rounded.control}"
    padding: "0 1.05rem"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
    textColor: "{colors.action-ink}"
    rounded: "{rounded.control}"
    padding: "0 1.05rem"
    height: "44px"
  field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0.7rem 0.8rem"
    height: "48px"
---

# Design System: Bogdan Maftei

## Overview

**Creative North Star: "A practice, not a publication."**

The site is the page a client opens between meetings. Home is one dark screen: the name, the appointment, the photograph, and a filled button. The record lives on its own pages, on cool paper. Softwire’s clarity and Cursor’s restraint are the craft bar. Their identities are not copied.

The broadsheet was rejected: no masthead, dateline, edition language, column rules, or coral flag. Light is the default, because the scene is a desk in daylight. Dark mode is the same layout with the ink reversed.

**Key Characteristics:**

- Home is a dark opening; Experience, Work, About, and Contact stay on cool paper
- A short ink bar under the name, drawn once
- Photographs with a 12px radius and one soft shadow
- Records separated by hairlines, never by cards
- One filled control

## Colors

**The Ink Rule.** Near-black does the reading and the action. Color does not decorate a status.

- **Ground** (`#f4f6f3`): the page, a cool office paper.
- **Ink** (`#17211c`): text and the filled button.
- **Muted** (`#3e4a44`): dates, the Softwire line, skill names, and resting navigation.
- **Line** (`#d5ddd6`): header, footer, and the rules between roles and keypoints.
- **Surface** (`#ffffff`): the projects band and form fields.
- **Action hover** (`#0c1411`): the button while the pointer is over it.
- **Focus** (`#0b57d0`): the keyboard ring. It is not a brand accent.
- **Error** (`#8c1d18`): the sentence when a message does not send.
- **Plate** (`#101412`): the ground behind employer marks drawn on black.
- **Selection** (`#d5e4da`): selected text on the light ground.
- **Portrait well** (`#d7ddd8`): the ground behind the photograph before it paints.

**Opening** (`#0c0f0e`): the home screen and its header. The photograph meets it on a 1px line.

Night mode sets the ground to `#121614`, the ink to `#f3f5f2`, muted text to `#c5cfc8`, lines to `#2c3530`, and surfaces to `#1b221e`. The button fills with the night ink and labels with the night ground. Focus becomes `#9ec1ff`, the error `#ffb4ab`, and selection `#234237`.

## Typography

**The One Voice Rule.** Schibsted Grotesk sets every word. Weight and size make the hierarchy. There is no second face and no italic.

The face is self-hosted at 400, 500, and 600 in `public/fonts`. Display tracking is `-0.03em`. Body copy stops at `68ch`. Dates use tabular numerals.

### Hierarchy

- **Display** (600, `clamp(2.7rem, 6.2vw, 4.5rem)`, 1.05): the name on the home page.
- **Role** (500, `clamp(1.25rem, 2vw, 1.5rem)`, 1.25): “Senior Technical Consultant”.
- **Section** (600, `clamp(1.85rem, 3vw, 2.35rem)`, 1.05): page titles and section headings.
- **Title** (600, `1.35rem`, 1.2): an employer or a project.
- **Body** (400, `1.0625rem`, 1.6): biography, keypoints, and the contact sentence.
- **Label** (500, `0.95rem`): form labels and compact navigation.

## Layout

**The Page Rule.** Reading pages sit in `min(72rem, calc(100% - 2rem))`, widening the side margin from `720px`. The header is sticky, `4.25rem`, with a hairline under it. On home the header matches the opening, `#0c0f0e`.

Home is one viewport. The name, the ink bar, the role, the Softwire line, and Get in touch sit on the dark ground. From `960px` the photograph fills the right side, edge to edge, divided by a 1px light line. On a phone the type and the button come first, then the photograph.

Experience is two chapters on a 1px path, Software Business Partners then Softwire. The current stop is filled. Work gives each project a full-width screenshot. About holds the biography, the portrait, the skill lines, and the résumé. The contact form is at most `38rem` wide.

## Elevation & Depth

**The Quiet Lift Rule.** The page is flat. A shadow appears only under a photograph: `0 18px 40px rgba(23, 33, 28, 0.1)` in daylight, and `0 18px 40px rgba(0, 0, 0, 0.4)` at night. Nothing else lifts.

## Shapes

**The Soft Corner Rule.** Controls, fields, and the logo plate use `8px`. Photographs use `12px`. Nothing is a pill, and nothing is a hard square.

## Components

### Buttons

The filled button reads “Get in touch” or “Send message”. It is `44px` tall, ink on ground-colored type, radius `8px`. Hover darkens the fill. While a message is sending, the label is “Sending…” and the control is dimmed. Text links stay underlined: Resumé, the email, View Code.

### Inputs

A label sits above a white field with a `1px` line, `8px` radius, and at least `48px` of height. Focus keeps the keyboard ring and darkens the border to the ink. There is no placeholder. Failure keeps the typed text and says “The message did not send. Try again in a moment.” Success says “Message sent.” and clears the fields.

### Navigation

The wordmark is the name. About, Experience, and Projects are quiet links; the current one is ink and underlined. “Get in touch” is the filled button. “Dark mode” or “Light mode” names the switch. Below `860px` those links sit in a Menu panel. Targets are at least `44px` tall.

### Practice record

An employer mark sits on the dark plate. The company and the date share a row. The role, the “Joined as” line, the keypoints, and a comma-separated skill line follow. No icons.

### Project

A screenshot with a `12px` radius and the quiet shadow, then the title, the existing description, the technologies, and either “View Code” or “Private repository”. From `860px` the rows alternate which side holds the picture.

## Do's and Don'ts

### Do

- **Do** keep the biography, employers, dates, keypoints, skills, project descriptions, email, and links as recorded facts.
- **Do** let the name, the photograph, and Get in touch lead the first screen.
- **Do** use one grotesque and one filled button.

### Don't

- **Don't** rebuild the broadsheet: no masthead, dateline, edition, column rule, or coral flag.
- **Don't** put a kicker above a heading.
- **Don't** turn roles, projects, or skills into equal cards or rainbow icons.
- **Don't** invent a promotion date, a client, or a metric.
