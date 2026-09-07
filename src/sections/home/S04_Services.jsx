/**
 * home/S04_Services — dark section, numbered service rows (/01 … /05) with
 * hover shift + hashtag tags. Rows stagger-reveal on scroll.
 */
import Reveal from '../../components/ui/Reveal.jsx'
import SectionTag from '../../components/ui/SectionTag.jsx'
import GridLines from '../../components/ui/GridLines.jsx'
import LineButton from '../../components/ui/LineButton.jsx'
import { services } from '../../content/siteContent.js'

export default function S04_Services() {
  return (
    <section className="section services on-dark" data-component="S04_Services" id="services">
      <GridLines />
      <div className="section-inner">
        <div className="services-head">
          <div>
            <SectionTag num="02" text={services.label} />
            <Reveal as="h2" className="display" delay={0.05}>
              {services.heading.map((l, i) => (
                <span key={i} style={{ display: 'block' }}>{l}</span>
              ))}
            </Reveal>
          </div>
          <div className="services-intro">
            <Reveal as="p" delay={0.15}>{services.intro}</Reveal>
            <LineButton label={services.cta.label} to={services.cta.href} />
          </div>
        </div>

        {services.items.map((s, i) => (
          <Reveal key={s.id} className="service-row" delay={i * 0.05} y={30} id={`svc-${s.id}`}>
            <span className="svc-num">{s.num}</span>
            <h3 className="display">{s.title}</h3>
            <div>
              <p className="svc-body">{s.body}</p>
              <div className="svc-tags">
                {s.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
