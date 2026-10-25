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

### 2. Navbar and a visible type change

Geist was already in place, and it was close enough to Manrope that it read as the old font. The family is now Switzer, a Swiss grotesk nearer to Neue Haas Grotesk and Cursor Gothic, self-hosted from `public/fonts` so it cannot fall back silently.

- One family still: Switzer, weights 400, 500, and 600. Geist is retired.
- The nav is a fixed 56px bar with a hairline, canvas fill, and the same horizontal inset as the page.
- Wordmark is 15px medium ink. Links are 14px quieter ink. The current page is full ink. No growing underline.
- The theme toggle stays in the bar, including on small screens. Below `md`, links open in a full-screen canvas sheet.
- Do not bring back the tall `h-28` bar or the center-out underline on nav links. The homepage sentence can still use that underline.

### 3. Home lockup

The home page is no longer a centered profile card. The first viewport is a left-aligned lockup in the same quiet register as a Softwire hero, with the portrait as part of the name rather than the subject of the page.

- The name is two lines, large, medium weight, tracking `-0.04em`. Do not go tighter than that, and do not exceed 6rem.
- The portrait is one hairline circle, aligned to the baseline of the name, on the right. No triple ring, no wave emoji.
- Under the lockup: the role in secondary ink, then the existing invitation, then the social links. Do not invent a new biography on this page.
- Invitation links draw a 1px underline on hover. Social icons change color only. No size jump.
- One entrance: a 14px rise and fade, staggered, power3 out. Skip it when `prefers-reduced-motion` is set. Do not add a second animation on the home page.

### 4. A pitch that can book the work

The name-only lockup left a gap between the type and a small portrait. The home page now asks to be hired, using only facts already on the experience page.

- The headline is the offer: “From the first technical decision to the release.” It fills the left column. The name and “Software Developer II at Softwire” sit under it, then one proof line: advise clients, shape the roadmap, and lead the build, then the previous title, Full-stack Developer at Software Business Partners.
- Primary action is “Let’s get in touch” (contact). Secondary is “See the work” (experience). Social icons stay in that row.
- The portrait is still one hairline circle, at 11rem on small screens, 16rem from `sm`, and 22rem from `lg`, on the right. On small screens it leads.
- Do not return to a tiny circle, a centered profile card, a metric strip, or a new biography that is not already on the site.

### 5. Rings back, previous role off the home page

The three hairline rings around the portrait stay. They were the original surround: a 1px stroke on the photo, then two quieter strokes, 8px apart. A single ring is retired again.

- The proof line is only “I advise clients, shape the roadmap, and lead the build.” The Software Business Partners sentence does not belong on the home page.
- The portrait size is unchanged: 11rem, 16rem from `sm`, 22rem from `lg`. The rings sit outside that circle.
- The home hero fills the space above the footer. Do not give it a min-height of nearly `100dvh` as well: that stacks on the nav offset and the footer and leaves a short extra scroll.

### 7. The offer is wider than the technical decision

The headline is no longer only about technical decisions and a release. It names a client's problem, or a new idea, and the outcome: something real. The proof line still carries the client conversation and making life easier.

- Headline: “From a client's problem, or a new idea, to something real.”
- Proof line: “I talk with clients, find what’s in the way, and build what makes life easier.”
- Keep it to those two lines. Do not put the earlier employer back on the home page, and do not add a metric row.

### 8. About is how the work happens

The about page was a justified bio plus two skill grids. That read as a junior profile. It is now an opening, three hairline rows, and a close, in the same voice as the home offer.

- The rows are the first conversation, a build from nothing, and a system already in use. They come from the experience page. Do not turn them into skill icons.
- No “Proficient at” or “Other skills” on this page. Skill icons stay on the experience cards.
- The résumé stays, as a text link. Do not center a button under the writing.
- Do not add a metric, a years count, or a self-applied “senior” title. The seniority is the scope of the work.

### 9. Experience a client can read

The experience page was a two-column résumé card: a logo, an orange dash, a calendar glyph, disc bullets, and a skill-icon grid. A client had to translate it.

- Each role is a hairline block. Title and dates on one line, company under the title, then plain sentences, then the tools as words.
- The sentences paraphrase the existing bullets. Do not add a client, a metric, or a project that is not already there.
- Do not bring back the icon grid, the emoji, or the orange dash on this page. Skill icons still exist for the projects page.
- The company logo stays with the role. Do not put a rule between the page title and the first role.
- The open role is the date that ends in “Present”. Do not add a separate “Current” label beside the title.
- Each point is its own line, with an ink dot and clear space between lines. Each tool has its skill icon before the name.

### 11. Contact a client can use

The contact page was a centered title, a centered email sentence, and a narrow stack of placeholder-only fields.

- Same column as about: an opening line, an email row, and GitHub and LinkedIn as text links. The address stays `maftei.bogdan@outlook.com`.
- Every field has a visible label. Name and email sit side by side from `sm`. The button says “Send the message”.
- Success keeps the words “Message sent.” Failure names the recovery: write to the same email. Do not clear the form when the send fails.
- Do not bring back the 40% centered column, placeholder-only fields, or the spinner under the button.

### 6. Color headshot

The home portrait is `assets/images/portrait.jpg`, the square color photo against the brick wall. The older grayscale outdoor portrait is retired. Keep the circular crop centered. Do not switch back to `portrait-min2.jpg`.
