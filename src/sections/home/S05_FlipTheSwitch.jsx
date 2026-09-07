/**
 * home/S05_FlipTheSwitch — THE signature section from the redesign brief:
 * "The lights don't turn on until the connection is made… let's flip the
 * switch." Starts dark; when scrolled into view (or when the visitor taps
 * the switch) the whole section animates from black/white-text to
 * white/black-text, with an orange bulb glow. Fully reversible by tapping.
 */
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionTag from '../../components/ui/SectionTag.jsx'
import GridLines from '../../components/ui/GridLines.jsx'
import { flipSwitch } from '../../content/siteContent.js'

export default function S05_FlipTheSwitch() {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.55 })
  const [lit, setLit] = useState(false)
  const [userToggled, setUserToggled] = useState(false)

  // auto-flip the first time the section fills the viewport
  useEffect(() => {
    if (inView && !userToggled) setLit(true)
  }, [inView, userToggled])

  const toggle = () => {
    setUserToggled(true)
    setLit((v) => !v)
  }

  return (
    <section
      ref={ref}
      className={`section flip-switch ${lit ? 'lit on-paper' : 'on-deep'}`}
      data-component="S05_FlipTheSwitch"
      style={{ background: lit ? 'var(--paper)' : 'var(--ink-deep)', color: lit ? 'var(--ink)' : 'var(--paper)' }}
    >
      <div className="bulb-glow" aria-hidden="true" />
      <GridLines />
      <div className="section-inner">
        <div className="flip-inner">
          <div>
            <SectionTag num="03" text={flipSwitch.label} />
            <h2 className="display" style={{ marginTop: 18 }}>
              {flipSwitch.headingDark.map((l, i) => (
                <span key={i} style={{ display: 'block' }}>{l}</span>
              ))}
            </h2>
            <p className="flip-body">{flipSwitch.body}</p>
          </div>

          <div className="switch-zone">
            <button className="switch-plate" onClick={toggle} aria-pressed={lit} aria-label="Flip the light switch">
              <span className="switch-slot">
                <motion.span
                  className="switch-knob"
                  animate={{ top: lit ? 4 : 62 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 26 }}
                />
              </span>
            </button>
            <span className="switch-hint">{flipSwitch.hint}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
