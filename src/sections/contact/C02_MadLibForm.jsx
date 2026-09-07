/**
 * contact/C02_MadLibForm — the sentence-style ("mad-lib") intake form:
 * "HI, SCALEMOTION TEAM! MY NAME IS ___ FROM ___. I WANT TO IMPROVE ___."
 * Submits via mailto by default — swap `onSubmit` for your CRM endpoint.
 */
import { useState } from 'react'
import Reveal from '../../components/ui/Reveal.jsx'
import GridLines from '../../components/ui/GridLines.jsx'
import LineButton from '../../components/ui/LineButton.jsx'
import { brand, madLib } from '../../content/siteContent.js'

export default function C02_MadLibForm() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const f = new FormData(e.target)
    const body = [
      `Name: ${f.get('name')}`,
      `Company: ${f.get('company')}`,
      `Wants to improve: ${f.get('improve')}`,
      `Budget: $${f.get('budget')}`,
      `Contact at: ${f.get('email')}`,
    ].join('\n')
    window.location.href = `mailto:${brand.email}?subject=New project request&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const L = madLib.lines
  return (
    <section className="section madlib on-dim" data-component="C02_MadLibForm">
      <GridLines />
      <div className="section-inner" style={{ paddingTop: 20 }}>
        <Reveal>
          <p className="ml-greeting">{madLib.greeting}</p>
          <form onSubmit={onSubmit}>
            <div className="ml-line">
              <span>{L.name.before}</span>
              <input name="name" required placeholder={L.name.placeholder} />
              <span>{L.company.before}</span>
              <input name="company" placeholder={L.company.placeholder} />
              <span>{L.company.after}</span>
            </div>
            <div className="ml-line">
              <span>{L.improve.before}</span>
              <input name="improve" required placeholder={L.improve.placeholder} style={{ minWidth: 320 }} />
              <span>{L.improve.after}</span>
            </div>
            <div className="ml-line">
              <span>{L.budget.before}</span>
              <input name="budget" placeholder={L.budget.placeholder} />
              <span>{L.budget.after}</span>
            </div>
            <div className="ml-line">
              <span>{L.email.before}</span>
              <input name="email" type="email" required placeholder={L.email.placeholder} />
              <span>{L.email.after}</span>
            </div>

            <div className="ml-actions">
              <LineButton label={madLib.cta} type="submit" />
              <p className="ml-legal">{madLib.legal}</p>
            </div>
            {sent && <p className="ml-sent">REQUEST OPENED IN YOUR EMAIL CLIENT — HIT SEND & WE’RE ON IT.</p>}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
