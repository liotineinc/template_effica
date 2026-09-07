/**
 * layout/NavOverlay — the dark menu panel.
 *   · desktop: compact dark card dropping from under the "+ MENU" button
 *   · mobile: full-height column sliding in from the RIGHT (brief: like Norda)
 * Links use RollingLink (letters roll up on hover) and stagger in.
 */
import { motion } from 'framer-motion'
import { brand, nav } from '../../content/siteContent.js'
import RollingLink from '../ui/RollingLink.jsx'

const panelDesktop = {
  initial: { opacity: 0, y: -16, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -12, scale: 0.98 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
}
const panelMobile = {
  initial: { x: '100%' },
  animate: { x: 0 },
  exit: { x: '100%' },
  transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] },
}

export default function NavOverlay({ isMobile, onClose }) {
  const panel = isMobile ? panelMobile : panelDesktop
  return (
    <>
      <motion.div
        className="nav-overlay-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div className="nav-overlay" data-component="NavOverlay" {...panel} style={isMobile ? {} : { x: '-50%' }}>
        <button className="overlay-close" onClick={onClose}>× CLOSE</button>
        <div className="overlay-logo">
          <img src={brand.logoSrc} alt={`${brand.name} logo`} />
        </div>
        <nav>
          {nav.links.map((l, i) => (
            <motion.span
              key={l.label}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 + i * 0.05, duration: 0.4, ease: 'easeOut' }}
            >
              <RollingLink label={l.label} to={l.href} onClick={onClose} />
            </motion.span>
          ))}
        </nav>
        <a className="overlay-email" href={`mailto:${brand.email}`}>{brand.email.toUpperCase()}</a>
        <a className="overlay-phone" href={brand.phoneHref}>{brand.phone}</a>
        <div className="overlay-socials">
          {brand.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
          ))}
        </div>
      </motion.div>
    </>
  )
}
