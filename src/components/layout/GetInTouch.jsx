/**
 * layout/GetInTouch (S18) — big pre-footer contact band shared by both
 * pages: "GET IN TOUCH" heading, name/email quick form, vertical nav with
 * rolling letters, gradient arc blob, back-to-top.
 */
import { useState } from 'react'
import Reveal from '../ui/Reveal.jsx'
import SectionTag from '../ui/SectionTag.jsx'
import GridLines from '../ui/GridLines.jsx'
import LineButton from '../ui/LineButton.jsx'
import RollingLink from '../ui/RollingLink.jsx'
import { brand, getInTouch, nav } from '../../content/siteContent.js'

export default function GetInTouch() {
  const [sent, setSent] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true) // wire to your CRM/webhook here
  }

  return (
    <section className="section git on-dim" id={getInTouch.id} data-component="S18_GetInTouch">
      <GridLines crosses />
      <div className="git-blob" aria-hidden="true" />
      <div className="section-inner">
        <div className="git-grid">
          <div>
            <SectionTag num="13" text={getInTouch.label} />
            <Reveal as="h2" className="display">{getInTouch.heading}</Reveal>
            <p className="git-sub">{getInTouch.sub}</p>
          </div>
          <nav className="git-nav">
            {nav.links.map((l) => (
              <RollingLink key={l.label} label={l.label} to={l.href} />
            ))}
          </nav>
        </div>

        {sent ? (
          <p className="mono" style={{ marginTop: 48, color: 'var(--accent)' }}>
            THANKS — WE’LL BE IN TOUCH WITHIN ONE BUSINESS DAY.
          </p>
        ) : (
          <form onSubmit={onSubmit}>
            <div className="git-field">
              <label htmlFor="git-name">{getInTouch.nameLabel}</label>
              <input id="git-name" name="name" placeholder={getInTouch.namePlaceholder} required />
            </div>
            <div className="git-field">
              <label htmlFor="git-email">{getInTouch.emailLabel}</label>
              <input id="git-email" name="email" type="email" placeholder={getInTouch.emailPlaceholder} required />
            </div>
            <div>
              <LineButton label={getInTouch.cta} type="submit" />
              <p className="git-legal">{getInTouch.legal}</p>
            </div>
          </form>
        )}

        <p className="git-based">{brand.basedIn}</p>

        <div className="git-bottom">
          <a className="git-logo" href="/" aria-label="ScaleMotion — home">
            <img src={brand.logoSrc} alt={`${brand.name} logo`} />
          </a>
          <div className="git-contact">
            <a className="git-phone" href={brand.phoneHref}>{brand.phone}</a>
            <a className="git-email" href={`mailto:${brand.email}`}>{brand.email.toUpperCase()}</a>
          </div>
          <div className="git-socials">
            {brand.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
            ))}
          </div>
          <button className="git-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {getInTouch.backToTop} ↑
          </button>
        </div>
      </div>
    </section>
  )
}
