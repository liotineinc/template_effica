# Component Guide

Every component's root element carries `data-component="<Label>"` — inspect in
DevTools, then open the matching file. All copy comes from
`src/content/siteContent.js` under the export named in each row.

## Chrome (both pages)

| Label | File | Content key | Notes |
| --- | --- | --- | --- |
| Header | `components/layout/Header.jsx` | `nav`, `brand` | `.scrolled` class = dark sticky state; avatar greyscale→color on hover |
| NavOverlay | `components/layout/NavOverlay.jsx` | `nav`, `brand` | `panelMobile` variant = right-slide column (≤809px) |
| S18_GetInTouch | `components/layout/GetInTouch.jsx` | `getInTouch` | anchor `#contact-cta`; quick form; rolling nav links; gradient blob |
| Footer | `components/layout/Footer.jsx` | `footer` | legal strip |

## Home sections

| Label | File | Content key | Key animation to tweak |
| --- | --- | --- | --- |
| S01_Hero | `sections/home/S01_Hero.jsx` | `hero` | drop-word spring (`stiffness: 210, damping: 12`); pendulum swing (`rotate: [9,-9,9]`, 5.2s) |
| S02_LogoMarquee | `sections/home/S02_LogoMarquee.jsx` | `logoMarquee` | `speed` prop (s/loop) |
| S03_Manifesto | `sections/home/S03_Manifesto.jsx` | `manifesto` | scroll-linked word opacity via `useScroll` offsets |
| S04_Services | `sections/home/S04_Services.jsx` | `services` | row hover shift in `.service-row:hover` |
| S05_FlipTheSwitch | `sections/home/S05_FlipTheSwitch.jsx` | `flipSwitch` | auto-flip threshold `useInView(…, { amount: 0.55 })` |
| S06_Research | `sections/home/S06_Research.jsx` | `research` | highlighter sweep viewport margin `-35%` (fires near screen center) |
| S07_WordCloud | `sections/home/S07_WordCloud.jsx` | `wordCloud` | chip float duration `4 + (i % 5)`s; `target` = scroll anchor |
| S08_Phases | `sections/home/S08_Phases.jsx` | `phases` | pills slide from alternating sides; stat bubble spring pop |
| S09_CaseStudy | `sections/home/S09_CaseStudy.jsx` | `caseStudy` | count-up stats (`Counter`) |
| S10_Portfolio | `sections/home/S10_Portfolio.jsx` | `portfolio` | hover shift `.pf-item:hover` |
| S11_AlwaysOn | `sections/home/S11_AlwaysOn.jsx` | `alwaysOn` | replace `.ao-photo` placeholder with team photo |
| S12_Team | `sections/home/S12_Team.jsx` | `team` | `.tc-photo` greyscale→color on hover; swap initials for headshots |
| S13_Stats | `sections/home/S13_Stats.jsx` | `stats` | count-up tiles |
| S14_Pricing | `sections/home/S14_Pricing.jsx` | `pricing` | annual toggle state; price crossfade in `<Price/>` |
| S15_FounderNote | `sections/home/S15_FounderNote.jsx` | `founderNote` | scroll-lit quote; timeline rows |
| S16_Newsletter | `sections/home/S16_Newsletter.jsx` | `newsletter` | local success state — wire `onSubmit` |
| S17_FAQ | `sections/home/S17_FAQ.jsx` | `faq` | accordion height animation; first item open by default (`useState(0)`) |

## Contact sections

| Label | File | Content key | Notes |
| --- | --- | --- | --- |
| C01_ContactHero | `sections/contact/C01_ContactHero.jsx` | `contactHero` | clip-reveal headline |
| C02_MadLibForm | `sections/contact/C02_MadLibForm.jsx` | `madLib` | sentence-style inputs; `onSubmit` → mailto (swap for CRM) |
| C03_KeepItSimple | `sections/contact/C03_KeepItSimple.jsx` | `keepItSimple` | office-photo placeholder |
| C04_BookACall | `sections/contact/C04_BookACall.jsx` | `bookCall` | scheduling href (`cal.com` placeholder) |

## Shared UI primitives (`components/ui/`)

- **Reveal** — default scroll-appear (y+fade, `once: true`). Props: `delay`, `y`, `as`.
- **PillButton** — variants `dark | light | accent | outline`; label roll on hover.
- **LineButton** — gradient-underline CTA with arrow nudge.
- **RollingLink** — per-letter roll-up (nav + footer links).
- **SectionTag** — `● num text` mono label.
- **GridLines** — 4-column hairlines (2 on mobile) + optional `+` crosses.
- **Marquee** — duplicated track, CSS keyframe loop.
- **Counter** — parses digits out of any stat string and counts up in view.

## Anchors

`#research` (S06) · `#path` (S08) · `#work` (S10) · `#team` (S12) ·
`#pricing` (S14) · `#contact-cta` (S18) — used by the nav, hero CTA, and the
word-cloud chips.
