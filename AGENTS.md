# Agent notes

Before any visual change, read `DESIGN.md`. It is the source of truth for color, type, and text color. `.impeccable/design.json` mirrors the same tokens for design tooling.

This site is moving toward the cleanliness of [cursor.com](https://cursor.com) and [softwire.com](https://www.softwire.com) in small passes. After each design iteration, append a new entry to the log below. Future prompts should follow the latest entry and must not reintroduce a pattern an earlier entry retired.

## Standing rules

- Keep light and dark. Compose each theme. Do not invert one from the other.
- Change only what the current iteration asks for. Leave layout, copy, and component structure alone unless the task says otherwise.
- Technology brand colors stay on skill icons. Employer logos keep their own color. Neither is part of the site palette.
- Verify both themes in the browser after a visual change.

## Iteration log

### 1. Color, type, and text color

Direction: warm paper and quiet ink. Neutrals are the shared palette of cursor.com and softwire.com. The single accent is Cursor orange, because Softwire’s mint cannot hold text or focus contrast and the site must keep a dark theme.

- Light canvas `#f7f7f4`, elevated `#ebeae5`, ink `#26251e`, secondary ink `#5c5b56`.
- Dark canvas `#14120b`, elevated `#1d1b15`, ink `#edecec`, secondary ink `#a3a29c`.
- Accent `#f54e00` is rare: focus rings, the route progress bar, hover borders, and the short experience mark. It is not for small body text on light surfaces (3.3:1 on paper).
- Secondary text is a quieter step of the same ink. Cool grays (`#2d3748`, `#4a5568`, Tailwind `gray-*`) are retired.
- One family: Geist, with Helvetica Neue, Helvetica, Arial, sans-serif as fallback. Weights in use are 400 (body), 500 (headings and emphasis), and 600 (available, not the default). Roboto, Open Sans, and Manrope are retired.
- Headings are medium, not bold, with tracking `-0.03em`. Body tracking is `-0.011em` and line height is 1.6.
- Hairlines use `--color-border`. Avatar rings are ink at low opacity, not purple.
- Chrome (nav links, role line, company, dates, footer) uses secondary text. Names, headings, and inline actions stay primary.
- The teal Softwire wordmark is the logo image, not site text. Do not recolor it.
- Tokens live on `.light` and `.dark` in `styles/globals.css` and are mapped in `tailwind.config.js`.
