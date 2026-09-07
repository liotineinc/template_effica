/**
 * contact/C03_KeepItSimple — reassurance copy, office-photo placeholder,
 * direct phone/email + socials.
 */
import Reveal from '../../components/ui/Reveal.jsx'
import SectionTag from '../../components/ui/SectionTag.jsx'
import GridLines from '../../components/ui/GridLines.jsx'
import { brand, keepItSimple } from '../../content/siteContent.js'

export default function C03_KeepItSimple() {
  return (
    <section className="section keep-simple on-dim" data-component="C03_KeepItSimple">
      <GridLines />
      <div className="section-inner">
        <div className="ks-grid">
          <SectionTag text={keepItSimple.label} />
          <Reveal as="h2">{keepItSimple.heading}</Reveal>
          <Reveal as="p" className="ks-body" delay={0.1}>{keepItSimple.body}</Reveal>
        </div>
        <div className="ks-photo">{keepItSimple.imageNote /* ← replace with office photo */}</div>
        <div className="ks-contact">
          <a className="ks-phone" href={brand.phoneHref}>{brand.phone}</a>
          <a className="ks-email" href={`mailto:${brand.email}`}>{brand.email.toUpperCase()}</a>
          <div className="ks-socials">
            {brand.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
