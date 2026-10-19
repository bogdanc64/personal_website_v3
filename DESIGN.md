---
name: Bogdan Maftei
description: A personal site set in warm paper and quiet ink, in both light and dark.
colors:
  paper: "#f7f7f4"
  paper-elevated: "#ebeae5"
  ink: "#26251e"
  ink-secondary-light: "#5c5b56"
  night: "#14120b"
  night-elevated: "#1d1b15"
  ivory: "#edecec"
  ivory-secondary: "#a3a29c"
  signal: "#f54e00"
  danger-light: "#a61e3c"
  danger-dark: "#ff8fa8"
typography:
  display:
    fontFamily: "Switzer, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "3rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Switzer, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Switzer, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Switzer, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.011em"
  label:
    fontFamily: "Switzer, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.011em"
rounded:
  control: "6px"
  pill: "9999px"
spacing:
  page-mobile: "24px"
  page-desktop: "256px"
components:
  button:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "8px 16px"
  button-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "8px 16px"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "6px 12px"
---

# Design System: Bogdan Maftei

## Overview

**Creative North Star: "Warm paper, quiet ink"**

The site should feel as quiet as cursor.com and softwire.com: a warm sheet of paper, type that sits on it without shouting, and almost no color. Light and dark are two finished rooms, not a mechanical invert. Light is a warm sheet (`#f7f7f4`) with warm-black ink (`#26251e`). Dark is a warm night (`#14120b`) with ivory type (`#edecec`).

The old cool gray and purple system is retired. Purple avatar rings, teal accent text, and the Chakra-style slate text colors do not belong in later passes.

**Key Characteristics:**

- One grotesque family, Switzer, at regular and medium weights.
- Ink does the hierarchy. Orange appears a few times per page at most.
- Structure is a hairline, not a shadow or a filled card.
- Secondary text is the same hue as the ink, stepped quieter.
- Skill-icon brand colors are content, not chrome.

## Colors

The neutrals are the overlapping palette of cursor.com and softwire.com. The accent is Cursor’s signal orange. Softwire’s mint (`#80ced0`) was considered and rejected: it cannot carry text or a focus ring, and it has no dark pair.

### Primary

- **Signal Orange** (`#f54e00`): Focus rings, the route progress bar, button and field hover borders, and the short rule under a role on the experience page. Its rarity is the point.

### Neutral

- **Paper** (`#f7f7f4`): Light canvas. The page background.
- **Raised Paper** (`#ebeae5`): Light elevated surface, available as `bg-secondary`.
- **Ink** (`#26251e`): Light primary text, headings, names, and inline actions.
- **Quieter Ink** (`#5c5b56`): Light secondary text. Nav links, the role line, company names, dates, footer, placeholders. Contrast on Paper is 6.3:1.
- **Night** (`#14120b`): Dark canvas.
- **Raised Night** (`#1d1b15`): Dark elevated surface.
- **Ivory** (`#edecec`): Dark primary text. Contrast on Night is 15.9:1.
- **Quieter Ivory** (`#a3a29c`): Dark secondary text. Contrast on Night is 7.3:1.
- **Hairline** (`rgba(38, 37, 30, 0.16)` in light, `rgba(237, 236, 236, 0.16)` in dark): Dividers, input borders, avatar rings at still lower opacities.
- **Light Danger** (`#a61e3c`) and **Dark Danger** (`#ff8fa8`): Form errors only. Both clear 6:1 on their canvas.

**The One Accent Rule.** Signal Orange is not a theme color. Do not use it for body copy, headings, or large fills. On Paper it is 3.3:1, enough for a control or a large mark, not for small text.

**The Same-Hue Text Rule.** Secondary text is a step of the active ink. Do not introduce cool gray, blue-gray, or Tailwind `gray-*` for type or borders.

## Typography

**Display Font:** Switzer (with Helvetica Neue, Helvetica, Arial, sans-serif)
**Body Font:** Switzer (same stack)
**Label/Mono Font:** none. Do not add a monospace voice for decoration.

**Character:** Switzer is a Swiss grotesk, in the same family as Neue Haas Grotesk and Cursor Gothic, with straight terminals and a high x-height. It replaced Geist, which was too close to the rounded Manrope it had already replaced. The files are self-hosted. Regular for reading, medium for headings and emphasis. Bold is retired as the default heading weight.

### Hierarchy

- **Display** (500, 3rem from the `md` heading scale, 1.2, `-0.03em`): Page-level headings. The home name is set smaller, at `text-2xl` / `sm:text-3xl`, and stays medium.
- **Headline** (500, 2.25rem, 1.2, `-0.03em`): Section titles such as Experience.
- **Title** (500, 1.25rem on role titles, 1.2, `-0.03em`): Role titles. The nav wordmark is smaller on purpose, 15px medium at `-0.02em`.
- **Body** (400, 1rem base, often `text-xl` in prose, 1.6, `-0.011em`): Paragraphs and lists. Keep prose in a comfortable measure; do not add a second tracking value.
- **Label** (400, 14px, secondary color, `-0.01em`): Nav items, metadata, footer, placeholders. The current page is the same size in primary ink.

### Named Rules

**The Two Weights Rule.** Use 400 and 500. Reach for 600 only when a single word must separate from a medium heading. Do not set headings in 700 or 800.

**The One Family Rule.** Load Switzer only, weights 400, 500, and 600, from `public/fonts`. Do not add Geist, Roboto, Open Sans, Manrope, or a display serif unless the task explicitly changes the type system.

## Layout

Horizontal padding is 24px on small screens and steps up through Tailwind’s `md` and `lg` to 256px at `xl`, then wider at the `bigger-desktops` breakpoint (1650px). Inner pages stay a single centered column. Later layout work should keep the wide, quiet margins.

### Home

The first view is a hiring pitch in two columns, still on the same hairlines and type. The headline is the offer, up to 3.75rem, tracking `-0.04em`, max about 14 characters wide so it stacks into a block: “From the first technical decision to the release.” The name, the Softwire role, and one proof line sit under it: advise clients, shape the roadmap, and lead the build. Earlier employers stay on the experience page. The action is “Let’s get in touch”, with “See the work” as a text link. The portrait is a circle, 22rem from the `lg` breakpoint, on the right, inside the original three hairline rings. On small screens the portrait comes first, at 11rem and up. The hero fills the viewport above the footer, so the first view does not scroll. Entrance is one rise and fade. Do not go back to a name-only lockup, a tiny baseline circle, a wave emoji, or a single ring. Do not add a metric row.

## Elevation & Depth

Depth is tonal. Light pages sit on Paper; a raised area, when needed, uses Raised Paper. Dark pages sit on Night and raise to Raised Night. Shadows are a 1px resting shade on fields and buttons only (`--shadow-rest`), warm in light and black in dark. The home portrait keeps three 1px ink rings, each a step quieter, with 8px of canvas between them. They are strokes around the photo, not a drop shadow.

**The Flat Sheet Rule.** Do not add drop shadows to cards, portraits, or sections to create depth. A hairline or a one-step surface change is the depth system.

## Shapes

Controls use a small radius (6px, Tailwind `rounded-md`). The portrait is a circle. Dividers are 1px rules. Do not introduce large radii, pills for every button, or decorative blobs.

## Components

### Buttons

- **Shape:** Gently rounded (6px).
- **Primary:** Paper fill, ink label, 1px hairline, medium weight, 8px 16px. In dark, Night fill and ivory label.
- **Hover / Focus:** The border becomes Signal Orange. Focus also shows a 2px orange outline, 3px outside the control.
- **Disabled:** The same button at 50% opacity.

### Inputs / Fields

- **Style:** Paper (or Night) fill, hairline border, 6px radius, ink text, quieter-ink placeholder.
- **Focus:** Border shifts to Signal Orange, plus the shared focus outline.
- **Error:** The message uses the theme’s danger color. The copy is unchanged.

### Navigation

- **Style:** A fixed 56px bar, flush to the viewport, with a hairline along the bottom and the canvas color behind it. The wordmark is 15px medium ink. Desktop links are 14px quieter ink; the current page and the hover state are full ink, with no underline. The theme toggle sits in the bar. Below `md`, the links move into a full-screen canvas sheet, 20px medium, left aligned.

### Experience mark

- **Style:** A 48px by 4px Signal Orange rule under the company name. It is the accent’s one repeated appearance. Do not add more rules in orange.

## Do's and Don'ts

### Do:

- **Do** keep both themes, and set every new color as a pair on `.light` and `.dark` in `styles/globals.css`.
- **Do** use `text-primary` for anything the reader must read, and `text-secondary` for chrome and metadata.
- **Do** use `border-line` and `bg-line` for structure.
- **Do** append a dated iteration to `AGENTS.md` after a design pass, and update this file when a token changes.
- **Do** check body text at 4.5:1 and large text or controls at 3:1 in both themes.

### Don't:

- **Don't** bring back purple, teal, or cool slate as the site palette.
- **Don't** use Signal Orange for paragraphs, links in running text, or large backgrounds.
- **Don't** load a second font for headings.
- **Don't** restyle layout, spacing, or copy during a color or type pass.
- **Don't** recolor skill icons or employer logos. Their brand hues are content.
