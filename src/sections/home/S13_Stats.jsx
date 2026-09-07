/**
 * home/S13_Stats — light three-tile numbers band (ROI timeline /
 * availability / follow-through) with count-up stats.
 */
import Reveal from '../../components/ui/Reveal.jsx'
import SectionTag from '../../components/ui/SectionTag.jsx'
import GridLines from '../../components/ui/GridLines.jsx'
import Counter from '../../components/ui/Counter.jsx'
import { stats } from '../../content/siteContent.js'

export default function S13_Stats() {
  return (
    <section className="section stats on-paper" data-component="S13_Stats">
      <GridLines />
      <div className="section-inner">
        <div style={{ textAlign: 'center' }}>
          <SectionTag num="09" text={stats.label} />
        </div>
        <Reveal as="h2" className="display">{stats.heading}</Reveal>
        <p className="stats-intro">{stats.intro}</p>

        <div className="stats-grid">
          {stats.tiles.map((t, i) => (
            <Reveal className="stat-tile" key={t.title} delay={i * 0.08} y={28}>
              <span className="st-title">{t.title}</span>
              <p className="st-body">{t.body}</p>
              <div className="st-foot">
                <span className="st-stat"><Counter value={t.stat} /></span>
                <span className="st-caption">{t.caption}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
