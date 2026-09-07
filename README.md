# ScaleMotion — Marketing Agency Site

A React + Vite + **Framer Motion** rebuild of the two-page structure you asked for
(home + contact), re-implemented from scratch and populated with the **Motion /
ScaleMotion** content from the redesign brief. Desktop **and** mobile layouts are
built in (breakpoints at 810px / 1200px, matching the reference).

```bash
npm install     # once
npm run dev     # local dev server (hot reload) → http://localhost:5173
npm run build   # production build → dist/
npm run preview # serve the production build locally
```

---

## Site diagram

```mermaid
flowchart TD
    subgraph CHROME["Persistent chrome (every page)"]
        H[Header — transparent → dark sticky on scroll]
        N[NavOverlay — desktop card / mobile right-slide column]
        H --> N
    end

    subgraph HOME["/ (HomePage)"]
        S01[S01_Hero · 'AN OBJECT IN MOTION' + falling word + pendulum]
        S02[S02_LogoMarquee · platform ticker]
        S03[S03_Manifesto · scroll-lit statement wall]
        S04[S04_Services · /01–/05 service rows]
        S05[S05_FlipTheSwitch · dark→light switch section]
        S06[S06_Research · #research · highlighter rows + phone band]
        S07[S07_WordCloud · 'What brought you here?' clickable cloud]
        S08[S08_Phases · #path · phase grid + delay pills]
        S09[S09_CaseStudy · stats + big quote]
        S10[S10_Portfolio · #work · project list]
        S11[S11_AlwaysOn · 7-days-a-week band]
        S12[S12_Team · #team · member cards]
        S13[S13_Stats · count-up tiles]
        S14[S14_Pricing · #pricing · monthly/annual toggle]
        S15[S15_FounderNote · quote + timeline]
        S16[S16_Newsletter · slim dark band]
        S17[S17_FAQ · accordion]
        S01-->S02-->S03-->S04-->S05-->S06-->S07-->S08-->S09-->S10-->S11-->S12-->S13-->S14-->S15-->S16-->S17
    end

    subgraph CONTACT["/contact (ContactPage)"]
        C01[C01_ContactHero]
        C02[C02_MadLibForm · sentence-style intake]
        C03[C03_KeepItSimple · reassurance + office photo]
        C04[C04_BookACall · cal.com link]
        C01-->C02-->C03-->C04
    end

    subgraph SHARED["Shared pre-footer (both pages)"]
        S18[S18_GetInTouch · #contact-cta · quick form + rolling nav]
        F[Footer · legal strip]
        S18-->F
    end

    HOME --> SHARED
    CONTACT --> SHARED

    S01 -- "SEE HOW IT WORKS" --> S08
    S07 -- "chip click scrolls to" --> S06 & S08 & S10 & S14 & S18
    S01 -- "SCHEDULE A FREE ASSESSMENT" --> CONTACT
```

## File tree

```
template_effica/
├── index.html                     # fonts (Sora / IBM Plex Mono / Geist), meta
├── package.json                   # react, react-router-dom, framer-motion, vite
├── vite.config.js
├── public/
│   └── scalemotion-logo.gif       # animated brand logo (header/footer/pricing)
├── docs/
│   └── COMPONENT-GUIDE.md         # per-component editing notes + animation map
└── src/
    ├── main.jsx                   # ReactDOM + BrowserRouter bootstrap
    ├── App.jsx                    # routes, scroll manager, grain overlay
    ├── content/
    │   └── siteContent.js         # ★ ALL site text lives here — edit copy here
    ├── styles/
    │   ├── tokens.css             # ★ brand colors, fonts, type scale
    │   └── global.css             # all component styles (searchable by label)
    ├── components/
    │   ├── layout/
    │   │   ├── Header.jsx         # fixed nav (transparent → dark sticky)
    │   │   ├── NavOverlay.jsx     # menu panel (desktop card / mobile column)
    │   │   ├── GetInTouch.jsx     # S18 shared pre-footer contact band
    │   │   └── Footer.jsx         # slim dark legal strip
    │   └── ui/
    │       ├── Reveal.jsx         # scroll-appear wrapper (slide-up + fade)
    │       ├── SectionTag.jsx     # "● 01 WHO WE ARE" labels
    │       ├── GridLines.jsx      # vertical hairlines + corner crosses
    │       ├── PillButton.jsx     # big rounded CTA, label rolls on hover
    │       ├── LineButton.jsx     # underlined CTA with sliding arrow
    │       ├── RollingLink.jsx    # per-letter roll-up hover links
    │       ├── Marquee.jsx        # infinite ticker
    │       └── Counter.jsx        # count-up stat numbers
    ├── pages/
    │   ├── HomePage.jsx           # section order for /
    │   └── ContactPage.jsx        # section order for /contact
    └── sections/
        ├── home/                  # S01_Hero.jsx … S17_FAQ.jsx (see diagram)
        └── contact/               # C01_ContactHero.jsx … C04_BookACall.jsx
```

## How to edit (Claude Code / VS Code)

| I want to change… | Edit this |
| --- | --- |
| Any text, headline, price, FAQ answer, nav link | `src/content/siteContent.js` (keyed by section label) |
| Brand colors / fonts / type sizes | `src/styles/tokens.css` |
| A section's layout or styling | `src/styles/global.css` — search for the label (e.g. `S05_FlipTheSwitch`) |
| A section's behavior/animation | `src/sections/home/<Label>.jsx` — every file has a header comment |
| Section order, hide a section | `src/pages/HomePage.jsx` / `ContactPage.jsx` — reorder/comment the lines |
| The logo | replace `public/scalemotion-logo.gif` (keep the filename) |
| Placeholder photos | search source for `imageNote` / `tc-photo` / `fn-photo` comments |

Every section renders with `data-component="S0X_Name"` on its root element, so in
browser DevTools you can inspect any part of the page and immediately know which
file to open.

## Animations implemented (Framer Motion)

- **Header**: transparent at top → dark translucent + blur on scroll (brief)
- **Mobile menu**: full-height column sliding right→left; desktop: drop-down card; staggered links, letter-roll hovers
- **Hero**: clip-reveal headline, the word *MOTION* **drops with a spring bounce** into "stays in&nbsp;motion" (Newton easter egg, brief), swinging **pendulum ball** in the background (brief), staggered CTAs
- **Flip the Switch**: section auto-flips dark→light on scroll (or tap the switch) with bulb glow (brief)
- **Research rows**: orange **highlighter sweep** as rows cross the viewport (brief)
- **Word cloud**: floating chips sized by frequency, hover hooks, click-to-scroll (brief)
- **Everywhere**: scroll reveals, count-up stats, marquee, delay pills sliding in with popped stat bubbles, scroll-linked "lighting up" quote walls, FAQ accordion, pricing toggle with crossfading prices, pill/link hover rolls

## Wiring forms

All three forms (mad-lib intake, quick contact, newsletter) currently do a
`mailto:` compose or local success state — swap the `onSubmit` handlers for your
CRM/webhook endpoint (search `onSubmit` in `C02_MadLibForm.jsx`,
`GetInTouch.jsx`, `S16_Newsletter.jsx`).
