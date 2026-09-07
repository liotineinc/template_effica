/**
 * home/S16_Newsletter — slim dark band: label · blurb · email + pill CTA.
 */
import { useState } from 'react'
import GridLines from '../../components/ui/GridLines.jsx'
import PillButton from '../../components/ui/PillButton.jsx'
import { newsletter } from '../../content/siteContent.js'

export default function S16_Newsletter() {
  const [sent, setSent] = useState(false)
  return (
    <section className="section newsletter on-deep" data-component="S16_Newsletter">
      <GridLines />
      <div className="section-inner" style={{ paddingBlock: 0 }}>
        <div className="nl-inner">
          <span className="nl-label">{newsletter.label}</span>
          <span className="nl-body">{newsletter.body}</span>
          {sent ? (
            <span className="nl-label" style={{ color: 'var(--accent)' }}>YOU’RE ON THE LIST.</span>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
              <input type="email" required placeholder={newsletter.placeholder} aria-label="Email address" />
              <PillButton label={newsletter.cta} variant="light" type="submit" />
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
