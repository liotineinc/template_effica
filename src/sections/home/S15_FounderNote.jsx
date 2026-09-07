/**
 * home/S15_FounderNote — light section: founder photo placeholder, ghosted
 * quote that lights up on scroll, and the company timeline rows.
 */
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from '../../components/ui/Reveal.jsx'
import SectionTag from '../../components/ui/SectionTag.jsx'
import GridLines from '../../components/ui/GridLines.jsx'
import { founderNote } from '../../content/siteContent.js'

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.22, 1])
  return <motion.span style={{ opacity }}>{children} </motion.span>
}

export default function S15_FounderNote() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.5'] })
  const words = founderNote.quote.split(' ')

  return (
    <section className="section founder-note on-paper" data-component="S15_FounderNote" ref={ref}>
      <GridLines crosses />
      <div className="section-inner">
        <div className="fn-grid">
          <div>
            <div className="fn-photo">{founderNote.person.name[0] /* ← founder headshot */}</div>
            <div className="fn-person">
              <span className="chip-name mono">{founderNote.person.name}</span>
              <br />
              <span className="chip-role mono mono-xs" style={{ opacity: 0.55 }}>{founderNote.person.role}</span>
            </div>
          </div>
          <div>
            <SectionTag num="10" text={founderNote.label} />
            <blockquote style={{ marginTop: 22 }}>
              {words.map((w, i) => (
                <Word key={i} progress={scrollYProgress} range={[i / words.length, Math.min(1, (i + 5) / words.length)]}>
                  {w}
                </Word>
              ))}
            </blockquote>
            <Reveal as="p" className="fn-sub">{founderNote.sub}</Reveal>
            <div className="fn-timeline">
              {founderNote.timeline.map((t) => (
                <div className="fn-tl-row" key={t.year}>
                  <span className="y">{t.year}</span>
                  <span className="t">{t.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
