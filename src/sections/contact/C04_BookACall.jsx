/**
 * contact/C04_BookACall — light band with orange radial visual:
 * "BOOK A FREE 30-MINUTE CALL." + scheduling link + founder quote.
 */
import Reveal from '../../components/ui/Reveal.jsx'
import SectionTag from '../../components/ui/SectionTag.jsx'
import GridLines from '../../components/ui/GridLines.jsx'
import LineButton from '../../components/ui/LineButton.jsx'
import { bookCall } from '../../content/siteContent.js'

export default function C04_BookACall() {
  return (
    <section className="section book-call on-paper" data-component="C04_BookACall">
      <GridLines crosses />
      <div className="bc-visual" aria-hidden="true" />
      <div className="section-inner">
        <div className="bc-grid">
          <div>
            <SectionTag text={bookCall.label} />
            <Reveal as="h2" className="display">
              {bookCall.heading.map((l) => (
                <span key={l} style={{ display: 'block' }}>{l}</span>
              ))}
            </Reveal>
            <LineButton label={bookCall.cta.label} href={bookCall.cta.href} />
          </div>
          <div className="bc-aside">
            <Reveal as="p" delay={0.1}>“{bookCall.aside.quote}”</Reveal>
            <div className="person-chip">
              <span className="chip-avatar">{bookCall.aside.name[0]}</span>
              <span>
                <span className="chip-name">{bookCall.aside.name}</span>
                <br />
                <span className="chip-role">{bookCall.aside.role}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
