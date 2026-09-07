/**
 * home/S10_Portfolio — anchor #work. Simple hover-shift project list
 * ("MORE PROJECTS" pattern) with year superscripts.
 */
import Reveal from '../../components/ui/Reveal.jsx'
import SectionTag from '../../components/ui/SectionTag.jsx'
import GridLines from '../../components/ui/GridLines.jsx'
import { portfolio } from '../../content/siteContent.js'

export default function S10_Portfolio() {
  return (
    <section className="section portfolio on-paper" data-component="S10_Portfolio" id={portfolio.id}>
      <GridLines />
      <div className="section-inner">
        <div className="pf-grid">
          <SectionTag text={portfolio.label} />
          <div>
            <div className="pf-list">
              {portfolio.items.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.05} y={20}>
                  <a className="pf-item" href="/contact">
                    <span>{p.name}</span>
                    <span className="pf-year">{p.year}</span>
                  </a>
                </Reveal>
              ))}
            </div>
            <p className="pf-blurb">{portfolio.blurb}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
