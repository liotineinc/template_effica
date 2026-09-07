/**
 * home/S11_AlwaysOn — dark gradient photo band:
 * "Customers don't turn off. Neither do we." 7-days-a-week promise.
 * The photo block is a labeled placeholder — drop the real office/team
 * photo in and remove the note.
 */
import Reveal from '../../components/ui/Reveal.jsx'
import SectionTag from '../../components/ui/SectionTag.jsx'
import { alwaysOn } from '../../content/siteContent.js'

export default function S11_AlwaysOn() {
  return (
    <section className="section always-on" data-component="S11_AlwaysOn">
      <div className="section-inner">
        <div className="ao-grid">
          <div className="ao-photo">
            {alwaysOn.imageNote /* ← replace with <img src=…/> office photo */}
          </div>
          <div>
            <SectionTag num="07" text={alwaysOn.label} />
            <Reveal as="h2" className="display" delay={0.05}>
              {alwaysOn.heading.map((l, i) => (
                <span key={i} style={{ display: 'block' }}>{l}</span>
              ))}
            </Reveal>
            <p className="ao-body">{alwaysOn.body}</p>
            <div className="person-chip">
              <span className="chip-avatar">{alwaysOn.person.name[0]}</span>
              <span>
                <span className="chip-name">{alwaysOn.person.name}</span>
                <br />
                <span className="chip-role">{alwaysOn.person.role}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
