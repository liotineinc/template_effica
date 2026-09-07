/**
 * home/S09_CaseStudy — light panel (meta table + CTA) beside a dark quote
 * panel; two dark stat tiles with count-up numbers.
 */
import Reveal from '../../components/ui/Reveal.jsx'
import SectionTag from '../../components/ui/SectionTag.jsx'
import GridLines from '../../components/ui/GridLines.jsx'
import LineButton from '../../components/ui/LineButton.jsx'
import Counter from '../../components/ui/Counter.jsx'
import { caseStudy } from '../../content/siteContent.js'

export default function S09_CaseStudy() {
  return (
    <section className="section case-study on-paper" data-component="S09_CaseStudy">
      <GridLines crosses />
      <div className="section-inner">
        <div className="cs-grid">
          <div className="cs-left">
            <SectionTag num="06" text={caseStudy.label} />
            <Reveal as="h2" className="display">{caseStudy.heading}</Reveal>
            <p className="cs-intro">{caseStudy.intro}</p>

            <div className="cs-meta">
              {caseStudy.meta.map((m) => (
                <div className="cs-meta-row" key={m.k}>
                  <span className="k">{m.k}</span>
                  <span className="v">{m.v}</span>
                </div>
              ))}
            </div>

            <LineButton label={caseStudy.cta.label} to={caseStudy.cta.href} />

            <div className="cs-stats">
              {caseStudy.stats.map((s, i) => (
                <Reveal className="cs-stat" key={s.caption} delay={i * 0.1} y={24}>
                  <span className="stat-caption">{s.caption}</span>
                  <span className="stat-value"><Counter value={s.value} /></span>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="cs-quote">
            <span className="quote-mark" aria-hidden="true">“</span>
            <Reveal as="blockquote" delay={0.1}>{caseStudy.quote}</Reveal>
            <div className="person-chip">
              <span className="chip-avatar">{caseStudy.person.name[0]}</span>
              <span>
                <span className="chip-name">{caseStudy.person.name}</span>
                <br />
                <span className="chip-role">{caseStudy.person.role}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
