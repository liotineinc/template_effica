/**
 * ============================================================================
 * SITE CONTENT — single source of truth for every word on the site.
 * Edit text here; the components only render what this file provides.
 * Sections are keyed by their component label (S01…S18, C01…C04).
 * ============================================================================
 */

export const brand = {
  name: 'ScaleMotion',
  logoSrc: '/scalemotion-logo.gif', // header + footer logo (animated gif)
  email: 'hello@scalemotion.com',
  phone: '(555) 123-4567',
  phoneHref: 'tel:5551234567',
  basedIn: 'WE ARE US-BASED, ALL IN-HOUSE',
  socials: [
    { label: 'FB', href: 'https://www.facebook.com' },
    { label: 'IG', href: 'https://www.instagram.com' },
    { label: 'LI', href: 'https://www.linkedin.com' },
    { label: 'X', href: 'https://x.com' },
  ],
}

export const nav = {
  menuLabel: 'MENU',
  mobileMenuLabel: 'OPEN MENU',
  note: ['A 30-MINUTE CALL TO CLARIFY YOUR', 'NEXT STEPS. ZERO OBLIGATIONS'],
  links: [
    { label: 'HOME', href: '/' },
    { label: 'RESEARCH', href: '/#research' },
    { label: 'HOW IT WORKS', href: '/#path' },
    { label: 'TEAM', href: '/#team' },
    { label: 'PRICING', href: '/#pricing' },
    { label: 'CONTACT', href: '/contact' },
  ],
}

/* ── HOME ─────────────────────────────────────────────────────────────── */

export const hero = {
  // S01_Hero — the word `dropWord` starts on the top line and "falls" into
  // the second line (Newton's first law easter egg from the brief).
  reviews: { score: '4.9/5', caption: 'BASED ON 230 VERIFIED REVIEWS' },
  lineOne: 'AN OBJECT IN MOTION',
  dropWord: 'MOTION',
  lineTwo: 'STAYS IN',
  sub: 'The right customers should gravitate towards you. We don’t just get you found — we implement the strategies that draw them in.',
  ctaPrimary: { label: 'SCHEDULE A FREE ASSESSMENT', href: '/contact' },
  ctaSecondary: { label: 'SEE HOW IT WORKS', href: '/#path' },
}

export const logoMarquee = {
  // S02_LogoMarquee — client / platform strip. Swap for real client logos.
  items: ['GOOGLE ADS', 'GA4', 'SEMRUSH', 'FRAMER', 'HUBSPOT', 'META ADS', 'CALLRAIL', 'ZAPIER'],
}

export const manifesto = {
  // S03_Manifesto — big dark statement block.
  label: 'HOW WE WORK',
  kicker: 'MARKETING WITHOUT THE MYSTERY',
  statement:
    'IT’S NOT ROCKET SCIENCE — DESPITE HOW MOST AGENCIES FRAME IT. THE LIGHTS DON’T TURN ON UNTIL THE CONNECTION IS MADE BETWEEN THE SOURCE (YOUR CUSTOMERS) AND THE BULB (YOUR BUSINESS).',
  person: { name: 'JOHN', role: 'FOUNDER & STRATEGIST' },
}

export const services = {
  // S04_Services — numbered service rows (dark section).
  label: 'SERVICES',
  heading: ['TURNING CLICKS INTO', 'CUSTOMERS THAT STAY', 'IN MOTION.'],
  intro:
    'We run performance marketing end-to-end: research, ads, AI-era search, landing pages and the follow-up systems that close. Tailored, transparent, and measured against ROI — not vanity metrics.',
  cta: { label: 'ABOUT US', href: '/#team' },
  items: [
    {
      id: 'research',
      num: '/01',
      title: 'RESEARCH & STRATEGY',
      body: 'WE LEARN YOUR BUSINESS, YOUR SALES PROCESS AND YOUR IDEAL CUSTOMER BEFORE A DOLLAR IS SPENT. PROJECTIONS FIRST, SO YOU KNOW WHAT TO EXPECT.',
      tags: ['RESEARCHFIRST', 'NOGUESSING'],
    },
    {
      id: 'ppc',
      num: '/02',
      title: 'GOOGLE ADS & PPC',
      body: 'HIGHER-INTENT TARGETING, DAILY ANALYSIS AND CONSTANT OPTIMIZATION. THAT’S PERFORMANCE MARKETING — WE MONITOR AND ADJUST SEVEN DAYS A WEEK.',
      tags: ['PERFORMANCE', 'HIGHINTENT'],
    },
    {
      id: 'aeo',
      num: '/03',
      title: 'SEO & AI SEARCH (AEO)',
      body: 'STRONG SEO FUTURE-PROOFS YOUR SITE AND FEEDS YOUR AI VISIBILITY IN THE SAME MOTION. AI SEARCH GREW FROM 1% TO 18% OF ALL SEARCH VOLUME IN TWO YEARS — EARN THAT REAL ESTATE EARLY.',
      tags: ['AEO', 'FUTUREPROOF'],
    },
    {
      id: 'landing',
      num: '/04',
      title: 'WEBSITES & LANDING PAGES',
      body: 'BETTER CONTENT AND CONVERSION-BUILT PAGES: MORE CONVERSIONS AND A HIGHER CLOSE RATE FROM THE SAME OR LESS AD SPEND.',
      tags: ['CONVERSIONS', 'CRO'],
    },
    {
      id: 'crm',
      num: '/05',
      title: 'CRM, REVIEWS & RETENTION',
      body: '75% OF CLOSED DEALS HAPPEN AFTER 10+ TOUCHES. WE AUTOMATE FOLLOW-UP, REVIEWS, REFERRALS AND REPEAT-CUSTOMER CAMPAIGNS SO NO LEAD GOES COLD.',
      tags: ['AUTOMATION', 'RETENTION'],
    },
  ],
}

export const flipSwitch = {
  // S05_FlipTheSwitch — the section literally flips from dark to light.
  label: 'FLIP THE SWITCH',
  headingDark: ['LET’S FLIP', 'THE SWITCH.'],
  body: 'Your customers are the electrical source. Your business is the bulb. Marketing is just the wiring in between — when the connection is made, everything lights up.',
  hint: 'TAP THE SWITCH',
}

export const research = {
  // S06_Research — "99% of agencies fail at research" + highlighter rows.
  id: 'research',
  label: 'WHY US?',
  heading: ['99% OF AGENCIES FAIL', 'THE MOST CRUCIAL', 'STEP: RESEARCH'],
  sub: 'We research before you sign up — no obligation. If you think someone can do it better, you keep the research. We’ll still be here.',
  listTitle: 'WHAT OUR RESEARCH COVERS:',
  rows: [
    { num: '01', bold: 'YOUR BUSINESS,', rest: 'SERVICES & SALES PROCESS' },
    { num: '02', bold: 'IDEAL CUSTOMER PROFILE', rest: '& HIGHEST-CONVERTING DEMOGRAPHICS' },
    { num: '03', bold: 'TRENDS & SEASONALITY', rest: 'SO WE MARKET THE RIGHT SERVICE AT THE RIGHT TIME' },
    { num: '04', bold: 'HOW CUSTOMERS SEARCH', rest: '— GOOGLE? CHATGPT? MAPS? — AND WHAT CONVINCES THEM' },
    { num: '05', bold: 'THE COMPETITOR LANDSCAPE', rest: '— WHAT WORKS, GAPS & LOW-HANGING FRUIT' },
    { num: '06', bold: 'ACCURATE PROJECTIONS', rest: 'FOR BUDGET & LEAD VOLUME BEFORE WE START' },
  ],
  source: { left: 'SOURCE:', mid: 'SCALEMOTION RESEARCH PLAYBOOK', right: 'SEP 2026' },
  phone: {
    stats: [
      { value: '3x', caption: 'FASTER APPROVALS' },
      { value: '99%', caption: 'UPTIME' },
      { value: '+28%', caption: 'FASTER RESPONSES' },
    ],
    label: 'REAL-TIME CONTROL',
    heading: 'YOUR CAMPAIGNS, ALWAYS IN YOUR POCKET',
    body: 'A live dashboard and monthly reports — track performance, approve changes, and see lead value in real time from your phone.',
  },
}

export const wordCloud = {
  // S07_WhatBroughtYouHere — clickable thought-bubble word cloud.
  label: 'WHAT BROUGHT YOU HERE?',
  heading: 'CLICK WHAT SOUNDS LIKE YOU',
  hint: 'CLICK TO SEE HOW WE CAN HELP >>>',
  items: [
    { text: 'Last marketing team not cutting it?', size: 3, target: '#research', hook: 'We show our work — research first.' },
    { text: 'Not enough leads?', size: 3, target: '#path', hook: 'Higher-intent targeting, more volume.' },
    { text: 'Ready to scale?', size: 2, target: '#pricing', hook: 'Phased plans built to compound.' },
    { text: 'No marketing system in place?', size: 2, target: '#path', hook: 'We build the whole engine.' },
    { text: 'Just starting out?', size: 1, target: '#pricing', hook: 'Start smart, start small.' },
    { text: 'Need a website?', size: 2, target: '#work', hook: 'Conversion-built pages.' },
    { text: 'No visibility on Google?', size: 2, target: '#research', hook: 'SEO + AI search, one motion.' },
    { text: 'Lost access to your site or accounts?', size: 1, target: '#contact-cta', hook: 'We recover and rebuild.' },
    { text: 'I just have questions', size: 1, target: '#contact-cta', hook: 'Free audit & guidance.' },
  ],
}

export const phases = {
  // S08_Phases — anchor #path; the "fast track" numbered grid + delay pills.
  id: 'path',
  label: 'HOW WE DO IT',
  heading: ['GOALS, TIMELINES', '& SCALE — IN PHASES'],
  sub: 'No generic advice. No black boxes. Goals, objectives and timelines set up front.',
  steps: [
    { num: '01/', text: 'PHASE 1 · FIRST 2 WEEKS — ACCOUNT SETUP, TRACKING, AUTOMATIONS & PROCESSES IMPLEMENTED' },
    { num: '02/', text: 'PHASE 2 · WEEKS 2–4 — HEAVY ANALYTICS, A/B TESTING OF PAGES, COPY & HOOKS' },
    { num: '03/', text: 'PHASE 3 · WEEKS 4–8 — DOUBLE DOWN ON TOP PERFORMERS, REASSESS BUDGET' },
    { num: '04/', text: 'ROI BY WEEK 4. DOUBLED ROI BY WEEK 8 — THEN WE’RE LIQUID' },
  ],
  cta: { label: 'START YOUR ENGINE', href: '/contact' },
  chartCaption: 'AT LEAST 50% OF SALES IN HEALTHY BUSINESSES COME FROM REVIEWS, REFERRALS & REPEAT CUSTOMERS.',
  delay: {
    label: 'WHY DELAY HURTS',
    heading: ['THE LONGER YOU WAIT,', 'THE MORE EXPENSIVE IT', 'BECOMES TO CATCH UP.'],
    pills: [
      { num: '01/', textA: 'AI SEARCH VOLUME', textB: 'IN 2 YEARS', stat: '1%→18%', unit: '/SEARCH' },
      { num: '02/', textA: 'COMPETITORS', textB: 'MOVE FASTER', stat: '+55%', unit: '/GROWTH' },
      { num: '03/', textA: 'DEALS CLOSE AFTER', textB: '10+ TOUCHES', stat: '75%', unit: '/DEALS' },
      { num: '04/', textA: 'SALES FROM REVIEWS,', textB: 'REFERRALS & REPEATS', stat: '50%', unit: '/SALES' },
    ],
  },
}

export const caseStudy = {
  // S09_CaseStudy — light panel + dark stat tiles + big quote.
  label: 'RESULTS',
  heading: 'CASE STUDY',
  intro: 'A local service company partnered with ScaleMotion to rebuild its ads, landing pages and follow-up automation.',
  meta: [
    { k: 'DATE:', v: 'JUN 2026' },
    { k: 'INDUSTRY:', v: 'HOME SERVICES' },
    { k: 'CHALLENGE:', v: 'WASTED AD SPEND & LEADS GOING COLD' },
  ],
  cta: { label: 'READ THE FULL STORY', href: '/contact' },
  stats: [
    { caption: 'RETURN ON AD SPEND', value: '4x', suffix: '' },
    { caption: 'INCREASE IN BOOKED JOBS', value: '+38%', suffix: '' },
  ],
  quote:
    'THEY DIDN’T DROWN US IN JARGON OR REPORTS NOBODY READS. JUST A CLEAR PLAN, EXECUTED FAST. ROI SHOWED UP BY WEEK FOUR, LIKE THEY SAID IT WOULD.',
  person: { name: 'ROB M.', role: 'OWNER, HOME SERVICES CO.' },
}

export const portfolio = {
  // S10_Portfolio — anchor #work; hover-to-peek project list.
  id: 'work',
  label: 'MORE PROJECTS',
  items: [
    { name: 'BrightPath Plumbing', year: '2026' },
    { name: 'Northline Roofing', year: '2026' },
    { name: 'Cardinal Dental Group', year: '2025' },
    { name: 'Vantage Law', year: '2025' },
    { name: 'GreenScape Outdoor', year: '2025' },
    { name: 'Harbor HVAC', year: '2024' },
  ],
  blurb:
    'Screen recordings, SEMrush snapshots, CRM walk-throughs and AI-search examples available on the call — real accounts, real numbers.',
}

export const alwaysOn = {
  // S11_AlwaysOn — dark photo band.
  label: 'ALWAYS ON',
  heading: ['CUSTOMERS DON’T', 'TURN OFF. NEITHER', 'DO WE.'],
  body: 'We work 7 days a week and stay on call 16 hours a day. Constant monitoring, daily analysis and adjustments — that’s performance marketing.',
  person: { name: 'RYAN RAMBO', role: 'ACCOUNT MANAGEMENT' },
  imageNote: 'TEAM PHOTO — WE SHOW UP SO YOU SHOW UP',
}

export const team = {
  // S12_Team — anchor #team; four member cards + tagline.
  id: 'team',
  label: 'WHO WE ARE',
  heading: 'THE TEAM',
  members: [
    {
      role: 'FOUNDER & STRATEGIST',
      name: 'JOHN',
      tag: 'RESEARCH & GROWTH STRATEGY',
      skills: ['CAMPAIGN STRATEGY', 'MARKET RESEARCH', 'PROJECTIONS & BUDGETS'],
    },
    {
      role: 'ACCOUNT MANAGEMENT',
      name: 'RYAN RAMBO',
      tag: 'DAILY OPTIMIZATION',
      skills: ['GOOGLE ADS', 'DAILY ANALYSIS', 'A/B TESTING'],
    },
    {
      role: 'CONTENT & CREATIVE',
      name: 'DANIELLE',
      tag: 'HOOKS THAT CONVERT',
      skills: ['LANDING PAGE COPY', 'AD CREATIVE', 'BRAND CONTENT'],
    },
    {
      role: 'SYSTEMS & AUTOMATION',
      name: 'KEVIN',
      tag: 'CRM & INTEGRATIONS',
      skills: ['CRM AUTOMATION', 'TRACKING & ANALYTICS', 'API INTEGRATIONS'],
    },
  ],
  tagline: ['NO OUTSOURCING.', 'NO WHITELABELING.', '10 FEET AWAY, NOT', '10 TIMEZONES.'],
  cta: { label: 'START YOUR PROJECT', href: '/contact' },
  captionSmall: 'ALL IN-HOUSE, US-BASED',
}

export const stats = {
  // S13_Stats — light numeric tiles with count-up.
  label: 'WHY US?',
  heading: 'THE NUMBERS',
  intro: 'The quality bar is simple: the better the work, the more money our clients make.',
  tiles: [
    { title: 'ROI TIMELINE', body: 'ROI by week 4. Doubled ROI by week 8 — then we’re liquid.', stat: '/4', caption: 'WEEKS TO ROI' },
    { title: 'AVAILABILITY', body: 'On call 16 hours a day, 7 days a week. Customers don’t turn off.', stat: '/16', caption: 'HOURS ON CALL DAILY' },
    { title: 'FOLLOW-THROUGH', body: '75% of closed deals occur after 10+ outreach attempts — our automations never miss one.', stat: '/10', caption: 'TOUCHES TO CLOSE' },
  ],
}

export const pricing = {
  // S14_Pricing — anchor #pricing; dark section, monthly/annual toggle.
  id: 'pricing',
  heading: 'PRICING.',
  sub: 'You only pay for what you need — after we show you the research.',
  toggle: { monthly: 'MONTHLY', annual: 'ANNUAL', save: 'SAVE 20%' },
  plans: [
    {
      name: 'Ignition',
      caption: 'FOR BUSINESSES JUST STARTING OUT',
      monthly: 750,
      annual: 600,
      features: ['RESEARCH REPORT (YOURS TO KEEP)', 'GOOGLE ADS — 1 CAMPAIGN', 'CONVERSION TRACKING SETUP', 'MONTHLY REPORT & CALL'],
      cta: 'GET IGNITION',
      popular: false,
    },
    {
      name: 'Momentum',
      caption: 'FOR COMPANIES READY TO SCALE IN PHASES',
      monthly: 1800,
      annual: 1440,
      features: [
        'FULL RESEARCH & PROJECTIONS',
        'GOOGLE ADS + LANDING PAGES',
        'SEO + AI SEARCH (AEO)',
        'CRM & FOLLOW-UP AUTOMATION',
        'A/B TESTING & WEEKLY OPTIMIZATION',
        'LIVE DASHBOARD & MONTHLY REPORT',
      ],
      cta: 'BOOK FREE ASSESSMENT',
      popular: true,
    },
    {
      name: 'Overdrive',
      caption: 'FOR MULTI-LOCATION OR AGGRESSIVE GROWTH',
      monthly: 3900,
      annual: 3120,
      features: ['EVERYTHING IN MOMENTUM', 'MULTI-CHANNEL MEDIA BUYING', 'REVIEWS, REFERRALS & REPEAT CAMPAIGNS', 'DEDICATED MANAGER', '7-DAY SUPPORT'],
      cta: 'GET OVERDRIVE',
      popular: false,
    },
  ],
}

export const founderNote = {
  // S15_FounderNote — light quote block.
  label: 'WHAT WE BELIEVE',
  quote:
    'WE’RE A TIGHT GROUP FOR A REASON. I ONLY HIRE PEOPLE I TRUST TO WORK AS HARD AND CARE ABOUT RESULTS AS MUCH AS I DO. I WILL NEVER SACRIFICE QUALITY FOR PROFIT.',
  sub: 'The better the quality, the more money our clients make. It’s that simple.',
  person: { name: 'JOHN', role: 'FOUNDER & STRATEGIST' },
  timeline: [
    { year: '2023', text: 'FOUNDED TO FIX WHAT MOST AGENCIES SKIP: RESEARCH' },
    { year: '2024', text: 'BUILT OUR CRM + AUTOMATION DELIVERY SYSTEM' },
    { year: '2025', text: 'ADDED AI SEARCH (AEO) TO EVERY ENGAGEMENT' },
    { year: '2026', text: 'LAUNCHED THE LIVE CLIENT DASHBOARD' },
  ],
}

export const newsletter = {
  // S16_Newsletter — slim dark band.
  label: 'NEWSLETTER',
  body: 'OCCASIONAL UPDATES: NEW CASE STUDIES, AI SEARCH SHIFTS & USEFUL TIPS.',
  placeholder: 'YOUR EMAIL',
  cta: 'GET THE TIPS',
}

export const faq = {
  // S17_FAQ — accordion.
  label: 'HELP & INFO',
  heading: 'FAQ',
  items: [
    {
      q: 'Do I have to sign up before the research?',
      a: 'NO. WE RESEARCH BEFORE YOU SIGN — NO OBLIGATION. IF YOU FEEL SOMEONE CAN DO IT BETTER, YOU KEEP THE RESEARCH AND WE’LL STILL BE HERE.',
    },
    {
      q: 'How fast will I see results?',
      a: 'WE SET GOALS AND SCALE IN PHASES: SETUP IN WEEKS 1–2, TESTING IN WEEKS 2–4, ROI BY WEEK 4 AND DOUBLED ROI BY WEEK 8 ON A HEALTHY ACCOUNT.',
    },
    {
      q: 'Is SEO dead now that AI search is here?',
      a: 'NOT QUITE. STRONG SEO FUTURE-PROOFS YOUR SITE AND FEEDS AI VISIBILITY IN THE SAME MOTION — AND AI SEARCH HAS GROWN FROM 1% TO 18% OF VOLUME IN TWO YEARS. WE DO BOTH.',
    },
    {
      q: 'Do you outsource any of the work?',
      a: 'NEVER. WE’RE ALL IN-HOUSE AND US-BASED — 10 FEET AWAY FROM EACH OTHER, NOT 10 TIMEZONES. NO WHITELABELING.',
    },
    {
      q: 'What if I want to cancel?',
      a: 'YOU CAN CANCEL ANYTIME. NO LONG-TERM LOCK-INS — AND EVERYTHING WE’VE BUILT FOR YOU (RESEARCH INCLUDED) STAYS YOURS.',
    },
  ],
  still: { label: 'CONTACT US DIRECTLY', heading: 'STILL UNSURE?', cta: { label: 'ASK A QUESTION', href: '/contact' } },
  aside: { quote: 'My job is to make sure every client knows exactly what’s happening with their money.', name: 'RYAN RAMBO', role: 'ACCOUNT MANAGEMENT' },
}

export const getInTouch = {
  // S18_GetInTouch — shared pre-footer contact band (anchor #contact-cta).
  id: 'contact-cta',
  label: 'READY TO START?',
  heading: 'GET IN TOUCH',
  sub: 'Whether you have questions or just want an audit and guidance, we’re here.',
  nameLabel: 'NAME',
  namePlaceholder: 'YOUR NAME',
  emailLabel: 'EMAIL ADDRESS',
  emailPlaceholder: 'EMAIL@ADDRESS.COM',
  cta: 'LET’S TALK',
  legal: 'BY SUBMITTING, YOU AGREE TO OUR TERMS AND PRIVACY POLICY.',
  backToTop: 'BACK TO TOP',
}

export const footer = {
  // Footer — slim dark strip.
  legal: [
    { label: 'PRIVACY POLICY', href: '#' },
    { label: 'TERMS OF SERVICE', href: '#' },
  ],
  copyright: '© 2026 SCALEMOTION®. ALL RIGHTS RESERVED.',
  credit: { label: 'BUILT WITH REACT + FRAMER MOTION', href: '#' },
}

/* ── CONTACT PAGE ─────────────────────────────────────────────────────── */

export const contactHero = {
  // C01_ContactHero
  label: 'START WITH A SIMPLE STEP',
  heading: ['LET’S PUT YOUR', 'GROWTH IN MOTION'],
}

export const madLib = {
  // C02_MadLibForm — sentence-style form.
  greeting: 'HI, SCALEMOTION TEAM!',
  lines: {
    name: { before: 'MY NAME IS', placeholder: 'YOUR NAME' },
    company: { before: 'FROM', placeholder: 'COMPANY NAME / OPTIONAL', after: '.' },
    improve: { before: 'I WANT TO IMPROVE:', placeholder: 'LEADS, ADS, WEBSITE, VISIBILITY…', after: '.' },
    budget: { before: 'BUDGET:', placeholder: 'ENTER BUDGET', after: '$' },
    email: { before: 'CONTACT ME AT:', placeholder: 'YOUR EMAIL', after: '.' },
  },
  cta: 'SEND REQUEST',
  legal: 'BY SUBMITTING, YOU AGREE TO OUR TERMS AND PRIVACY POLICY.',
}

export const keepItSimple = {
  // C03_KeepItSimple
  label: 'LET’S KEEP IT SIMPLE',
  heading:
    'You don’t need slides or technical notes — just tell us what’s on your mind. A quick question or a big project, we’ll come back with a clear next step.',
  body:
    'Every message is read by a real person on our team — no chatbots, no outsourced support. Most of the time it’s John or Ryan who sees it first and gets it to the right specialist.',
  imageNote: 'OFFICE PHOTO — ALL OF US, 10 FEET APART',
}

export const bookCall = {
  // C04_BookACall
  label: 'YOUR FIRST STEP',
  heading: ['BOOK A FREE', '30-MINUTE CALL.'],
  cta: { label: 'BOOK A CALL', href: 'https://cal.com' },
  aside: { quote: 'You’ll leave the first call with a clear, actionable plan — whether you hire us or not.', name: 'JOHN', role: 'FOUNDER & STRATEGIST' },
}
