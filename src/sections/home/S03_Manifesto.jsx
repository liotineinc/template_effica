/**
 * home/S03_Manifesto — dark section with a giant ghosted statement that
 * "lights up" word-by-word as it scrolls into view (scroll-linked color
 * fill, like the reference's WHO WE ARE wall of text).
 */
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionTag from '../../components/ui/SectionTag.jsx'
import GridLines from '../../components/ui/GridLines.jsx'
import { manifesto } from '../../content/siteContent.js'

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.16, 1])
  return (
    <motion.span style={{ opacity }}>
      {children}{' '}
    </motion.span>
  )
}

export default function S03_Manifesto() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] })
  const words = manifesto.statement.split(' ')

  return (
    <section className="section manifesto on-dark" data-component="S03_Manifesto" ref={ref}>
      <GridLines crosses />
      <div className="section-inner">
        <div className="manifesto-head">
          <SectionTag num="01" text={manifesto.label} />
          <span className="mono mono-xs" style={{ opacity: 0.5 }}>{manifesto.kicker}</span>
        </div>
        <blockquote>
          {words.map((w, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, Math.min(1, (i + 4) / words.length)]}>
              {w}
            </Word>
          ))}
        </blockquote>
        <div className="manifesto-person person-chip">
          <span className="chip-avatar">{manifesto.person.name[0]}</span>
          <span>
            <span className="chip-name">{manifesto.person.name}</span>
            <br />
            <span className="chip-role">{manifesto.person.role}</span>
          </span>
        </div>
      </div>
    </section>
  )
}
