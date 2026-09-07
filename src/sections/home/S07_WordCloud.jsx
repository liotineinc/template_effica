/**
 * home/S07_WordCloud — "WHAT BROUGHT YOU HERE?" (from the redesign brief).
 * A thought-bubble cloud of common visitor problems:
 *   · bigger font = more common reason (data-size 1–3)
 *   · chips float with a slow, subtle bob (staggered durations)
 *   · hover reveals the hook line; click smooth-scrolls to the matching
 *     section on the page
 */
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTag from '../../components/ui/SectionTag.jsx'
import GridLines from '../../components/ui/GridLines.jsx'
import Reveal from '../../components/ui/Reveal.jsx'
import { brand, wordCloud } from '../../content/siteContent.js'

function Chip({ item, i }) {
  const [hover, setHover] = useState(false)
  const go = () => {
    const el = document.querySelector(item.target)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <motion.button
      className="cloud-chip"
      data-size={item.size}
      onClick={go}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      animate={{ y: [0, i % 2 ? -7 : 7, 0] }}
      transition={{ duration: 4 + (i % 5), repeat: Infinity, ease: 'easeInOut' }}
    >
      {item.text}
      <AnimatePresence>
        {hover && (
          <motion.span
            className="chip-hook"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.22 }}
          >
            {item.hook}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

export default function S07_WordCloud() {
  return (
    <section className="section word-cloud on-dim" data-component="S07_WordCloud">
      <GridLines />
      <div className="section-inner">
        <SectionTag text={wordCloud.label} />
        <Reveal as="h2" className="display" delay={0.05} style={{ fontSize: 'var(--h3)', marginTop: 16 }}>
          {wordCloud.heading}
        </Reveal>
        <div className="cloud-wrap">
          {wordCloud.items.map((item, i) => (
            <Chip item={item} i={i} key={item.text} />
          ))}
        </div>
        <p className="cloud-hint">{wordCloud.hint}</p>
        <span className="cloud-logo">
          <img src={brand.logoSrc} alt={`${brand.name} logo`} />
        </span>
      </div>
    </section>
  )
}
