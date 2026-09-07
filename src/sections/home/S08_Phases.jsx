/**
 * home/S08_Phases — anchor #path ("SEE HOW IT WORKS" scrolls here).
 * Top: 2×2 numbered phase grid (01/–04/). Middle: pie note + CTA.
 * Bottom: "WHY DELAY HURTS" stat pills that slide in from alternating
 * sides, with counters in the dark pills.
 */
import { motion } from 'framer-motion'
import Reveal from '../../components/ui/Reveal.jsx'
import SectionTag from '../../components/ui/SectionTag.jsx'
import GridLines from '../../components/ui/GridLines.jsx'
import LineButton from '../../components/ui/LineButton.jsx'
import { phases } from '../../content/siteContent.js'

function Pie() {
  // simple 50% pie — "50% of sales come from reviews/referrals/repeats"
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" aria-hidden="true" style={{ flex: 'none' }}>
      <circle cx="36" cy="36" r="34" fill="var(--white)" stroke="var(--line-dark)" />
      <path d="M36 2 A34 34 0 0 1 36 70 L36 36 Z" fill="var(--ink)" />
    </svg>
  )
}

export default function S08_Phases() {
  return (
    <section className="section phases on-dim" data-component="S08_Phases" id={phases.id}>
      <GridLines crosses />
      <div className="section-inner">
        <div className="phases-head">
          <SectionTag num="05" text={phases.label} />
          <Reveal as="h2" className="display" delay={0.05}>
            {phases.heading.map((l, i) => (
              <span key={i} style={{ display: 'block' }}>{l}</span>
            ))}
          </Reveal>
          <p className="phases-sub">{phases.sub}</p>
        </div>

        <div className="steps-grid">
          {phases.steps.map((s, i) => (
            <Reveal className="phase-step" key={s.num} delay={i * 0.08} y={26}>
              <span className="step-num display">{s.num}</span>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>

        <div className="phases-mid">
          <LineButton label={phases.cta.label} to={phases.cta.href} />
          <div className="pie-note">
            <Pie />
            <p><strong>{phases.chartCaption}</strong></p>
          </div>
        </div>

        <div className="delay-head">
          <SectionTag text={phases.delay.label} />
          <h3 className="display" style={{ marginTop: 14 }}>
            {phases.delay.heading.map((l, i) => (
              <span key={i} style={{ display: 'block' }} className={i === 2 ? 'accent' : ''}>{l}</span>
            ))}
          </h3>
        </div>

        {phases.delay.pills.map((p, i) => (
          <motion.div
            className="delay-pill-row"
            key={p.num}
            initial={{ opacity: 0, x: i % 2 ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="dp-num">{p.num}</span>
            <span className="dp-text">
              {p.textA} <strong>{p.textB}</strong>
            </span>
            <motion.span
              className="dp-stat"
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: 0.25, type: 'spring', stiffness: 300, damping: 18 }}
            >
              {p.stat}
            </motion.span>
            <span className="dp-unit">{p.unit}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
