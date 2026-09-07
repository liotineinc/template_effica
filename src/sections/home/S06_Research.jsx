/**
 * home/S06_Research — light section (anchor #research).
 * "99% of agencies fail the most crucial step: research."
 * Each research row gets an ORANGE HIGHLIGHTER sweep as it crosses the
 * viewport (brief: "orange overlay… like a highlighter as they go down the
 * list"). Below: the 3-stat + phone-dashboard sub-band.
 */
import { motion } from 'framer-motion'
import Reveal from '../../components/ui/Reveal.jsx'
import SectionTag from '../../components/ui/SectionTag.jsx'
import GridLines from '../../components/ui/GridLines.jsx'
import Counter from '../../components/ui/Counter.jsx'
import { research } from '../../content/siteContent.js'

function HighlightRow({ row, i }) {
  return (
    <motion.div
      className="research-row"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: i * 0.04 }}
    >
      {/* highlighter sweep */}
      <motion.span
        className="row-highlight"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-35% 0px -35% 0px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      />
      <span className="row-num">{row.num}</span>
      <span>
        <strong>{row.bold}</strong> <span className="row-rest">{row.rest}</span>
      </span>
    </motion.div>
  )
}

export default function S06_Research() {
  return (
    <section className="section research on-paper" data-component="S06_Research" id={research.id}>
      <GridLines crosses />
      <div className="section-inner">
        <div className="research-grid">
          <div>
            <SectionTag num="04" text={research.label} />
            <Reveal as="h2" className="display" delay={0.05}>
              {research.heading.map((l, i) => (
                <span key={i} style={{ display: 'block' }} className={i === 2 ? 'accent' : ''}>{l}</span>
              ))}
            </Reveal>
            <Reveal as="p" className="research-sub" delay={0.15}>{research.sub}</Reveal>
          </div>

          <div>
            <p className="adv-title">{research.listTitle}</p>
            {research.rows.map((r, i) => (
              <HighlightRow row={r} i={i} key={r.num} />
            ))}
            <div className="research-source">
              <span>{research.source.left}</span>
              <span style={{ fontWeight: 600 }}>{research.source.mid}</span>
              <span>{research.source.right}</span>
            </div>
          </div>
        </div>

        {/* phone / live-dashboard sub-band */}
        <div className="phone-band">
          {research.phone.stats.map((s) => (
            <div className="phone-stat" key={s.caption}>
              <div className="stat-v"><Counter value={s.value} /></div>
              <div className="stat-c">{s.caption}</div>
            </div>
          ))}
          <div className="phone-visual" aria-hidden="true">
            <motion.div
              className="phone-mock"
              initial={{ y: 40, opacity: 0, rotate: -12 }}
              whileInView={{ y: 0, opacity: 1, rotate: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ translateY: '-50%' }}
            >
              <i />
            </motion.div>
          </div>
          <div className="phone-copy">
            <SectionTag text={research.phone.label} />
            <Reveal as="h3" className="display">{research.phone.heading}</Reveal>
            <p>{research.phone.body}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
