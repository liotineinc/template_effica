/**
 * home/S17_FAQ — accordion (numbered questions, animated height, "+"
 * rotates to "×"), plus the "STILL UNSURE?" aside with CTA and a team
 * quote.
 */
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '../../components/ui/Reveal.jsx'
import SectionTag from '../../components/ui/SectionTag.jsx'
import GridLines from '../../components/ui/GridLines.jsx'
import LineButton from '../../components/ui/LineButton.jsx'
import { faq } from '../../content/siteContent.js'

function FaqItem({ item, index, open, onToggle }) {
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-q" onClick={onToggle} aria-expanded={open}>
        <span className="q-num">{String(index + 1).padStart(2, '0')}</span>
        <span>{item.q}</span>
        <span className="q-plus" aria-hidden="true">+</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="faq-a"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function S17_FAQ() {
  const [openIdx, setOpenIdx] = useState(0)
  return (
    <section className="section faq on-paper" data-component="S17_FAQ">
      <GridLines crosses />
      <div className="section-inner">
        <div className="faq-grid">
          <div>
            <SectionTag num="11" text={faq.label} />
            <Reveal as="h2" className="display">{faq.heading}</Reveal>

            <div className="faq-still">
              <span className="mono mono-xs" style={{ color: 'var(--muted-dark)' }}>{faq.still.label}</span>
              <p className="still-h">{faq.still.heading}</p>
              <LineButton label={faq.still.cta.label} to={faq.still.cta.href} />
            </div>

            <div className="faq-aside-quote">
              <p>“{faq.aside.quote}”</p>
              <div className="person-chip">
                <span className="chip-avatar">{faq.aside.name[0]}</span>
                <span>
                  <span className="chip-name">{faq.aside.name}</span>
                  <br />
                  <span className="chip-role">{faq.aside.role}</span>
                </span>
              </div>
            </div>
          </div>

          <div>
            {faq.items.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                index={i}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
