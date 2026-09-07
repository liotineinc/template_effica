/**
 * ui/Counter — animated count-up for stats ("50+", "+15%", "4x"…).
 * Parses the numeric part of `value` and animates 0 → n when scrolled
 * into view; prefix/suffix (+, %, x, /) are preserved.
 * Props: value (string), duration (s)
 */
import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'

export default function Counter({ value, duration = 1.4 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const match = String(value).match(/(\d+(?:\.\d+)?)/)
  const target = match ? parseFloat(match[1]) : 0
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView || !match) return
    const controls = animate(0, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!match) return <span ref={ref}>{value}</span>
  const [before, after] = String(value).split(match[1])
  return (
    <span ref={ref}>
      {before}{n}{after}
    </span>
  )
}
