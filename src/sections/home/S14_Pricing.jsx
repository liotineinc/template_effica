/**
 * home/S14_Pricing — anchor #pricing. Darkest band; three plan cards with
 * a monthly/annual toggle (prices crossfade), popular card gets the orange
 * radial glow and an accent pill CTA.
 */
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '../../components/ui/Reveal.jsx'
import GridLines from '../../components/ui/GridLines.jsx'
import PillButton from '../../components/ui/PillButton.jsx'
import { brand, pricing } from '../../content/siteContent.js'

function Price({ amount }) {
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.span
        key={amount}
        className="p-num"
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -18, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        ${amount.toLocaleString()}
      </motion.span>
    </AnimatePresence>
  )
}

export default function S14_Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section className="section pricing on-deep" data-component="S14_Pricing" id={pricing.id}>
      <GridLines />
      <div className="section-inner">
        <div className="pricing-head">
          <div className="pricing-logo">
            <img src={brand.logoSrc} alt={`${brand.name} logo`} />
          </div>
          <Reveal as="h2" className="display">{pricing.heading}</Reveal>
          <p className="pricing-sub">{pricing.sub}</p>
        </div>

        <div className="toggle-row">
          <button className={`t-label ${!annual ? 'active' : ''}`} onClick={() => setAnnual(false)}>
            {pricing.toggle.monthly}
          </button>
          <button
            className={`toggle-pill ${annual ? 'annual' : ''}`}
            onClick={() => setAnnual((v) => !v)}
            aria-label="Toggle annual pricing"
          >
            <motion.span layout className="knob" transition={{ type: 'spring', stiffness: 500, damping: 32 }} />
          </button>
          <button className={`t-label ${annual ? 'active' : ''}`} onClick={() => setAnnual(true)}>
            {pricing.toggle.annual}
          </button>
          <span className="save">{pricing.toggle.save}</span>
        </div>

        <div className="plans-grid">
          {pricing.plans.map((p, i) => (
            <Reveal className={`plan-card ${p.popular ? 'popular' : ''}`} key={p.name} delay={i * 0.08} y={34}>
              <div className="plan-name">
                {p.name}
                {p.popular && <span className="plan-pop">POPULAR</span>}
              </div>
              <p className="plan-caption">{p.caption}</p>
              <div className="plan-price">
                <Price amount={annual ? p.annual : p.monthly} />
                <span className="p-per">/MONTH</span>
              </div>
              <ul>
                {p.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <PillButton label={p.cta} to="/contact" variant={p.popular ? 'accent' : 'outline'} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
