/**
 * contact/C01_ContactHero — light page header with clip-reveal headline.
 */
import { motion } from 'framer-motion'
import SectionTag from '../../components/ui/SectionTag.jsx'
import GridLines from '../../components/ui/GridLines.jsx'
import { contactHero } from '../../content/siteContent.js'

export default function C01_ContactHero() {
  return (
    <section className="section contact-hero on-dim" data-component="C01_ContactHero">
      <GridLines />
      <div className="section-inner" style={{ paddingBlock: '0 40px' }}>
        <div className="ch-label">
          <SectionTag text={contactHero.label} />
        </div>
        <h1 className="display">
          {contactHero.heading.map((line, i) => (
            <span key={line} style={{ display: 'block', overflow: 'hidden' }}>
              <motion.span
                style={{ display: 'block' }}
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
      </div>
    </section>
  )
}
