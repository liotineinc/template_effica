/**
 * home/S01_Hero — full-viewport dark hero.
 * Animations:
 *   · headline lines rise in with a clip reveal
 *   · the word "MOTION" (hero.dropWord) starts on the top line and DROPS
 *     into its slot on the second line with a springy bounce — Newton's
 *     first law easter egg, nudging the visitor to scroll
 *   · a physics pendulum swings back and forth behind the headline
 *   · review badge + subcopy fade in, CTA pills slide up
 */
import { motion } from 'framer-motion'
import { hero } from '../../content/siteContent.js'
import GridLines from '../../components/ui/GridLines.jsx'
import PillButton from '../../components/ui/PillButton.jsx'

const lineReveal = {
  initial: { y: '110%' },
  animate: { y: 0 },
}

export default function S01_Hero() {
  return (
    <section className="section hero on-dark" data-component="S01_Hero">
      <GridLines />

      {/* swinging pendulum (brief: "physics ball that goes back & forth") */}
      <motion.div
        className="pendulum"
        aria-hidden="true"
        animate={{ rotate: [9, -9, 9] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="string" />
        <span className="bob" />
      </motion.div>

      <div className="hero-top">
        <motion.div
          className="hero-reviews"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <span className="review-dots" aria-hidden="true"><i /><i /><i /><i /><i /></span>
          <span className="mono-xs mono">
            <strong>{hero.reviews.score}</strong>
            <br />
            {hero.reviews.caption}
          </span>
        </motion.div>
      </div>

      <h1 className="display">
        <span className="drop-line" style={{ overflow: 'hidden', display: 'block' }}>
          <motion.span
            style={{ display: 'block' }}
            {...lineReveal}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            {hero.lineOne}
          </motion.span>
        </span>
        <span className="drop-line">
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.7 }}
          >
            {hero.lineTwo}&nbsp;
          </motion.span>
          {/* the falling word */}
          <motion.span
            className="drop-word"
            initial={{ y: '-1.1em', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              opacity: { delay: 0.5, duration: 0.01 },
              y: { delay: 0.9, type: 'spring', stiffness: 210, damping: 12, mass: 1.1 },
            }}
          >
            {hero.dropWord}
          </motion.span>
        </span>
      </h1>

      <motion.p
        className="hero-sub"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.15, duration: 0.7, ease: 'easeOut' }}
      >
        {hero.sub}
      </motion.p>

      <motion.div
        className="hero-ctas"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <PillButton label={hero.ctaPrimary.label} to={hero.ctaPrimary.href} variant="accent" />
        <PillButton label={hero.ctaSecondary.label} to={hero.ctaSecondary.href} variant="light" />
      </motion.div>
    </section>
  )
}
