/**
 * layout/Header — fixed nav bar.
 * Behavior (per the redesign brief):
 *   · transparent while at the top of the page
 *   · dark translucent + blur once the user scrolls (`.scrolled`)
 *   · desktop: "+ MENU" toggle · mobile: "OPEN MENU" (full-column overlay)
 *   · right side: note + grey avatar that lights up in color on hover
 */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { brand, nav } from '../../content/siteContent.js'
import NavOverlay from './NavOverlay.jsx'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    const onResize = () => setIsMobile(window.innerWidth <= 809)
    onScroll()
    onResize()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`} data-component="Header">
        <div className="header-inner">
          <Link to="/" className="header-logo" aria-label="ScaleMotion — home">
            <img src={brand.logoSrc} alt={`${brand.name} logo`} />
          </Link>

          <button
            className="header-menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
          >
            <span className="menu-icon">{menuOpen ? '×' : '+'}</span>
            <span>{isMobile ? nav.mobileMenuLabel : nav.menuLabel}</span>
          </button>

          <div className="header-note">
            <span>
              {nav.note[0]}
              <br />
              <strong>{nav.note[1]}</strong>
            </span>
            <Link to="/contact" className="header-avatar" aria-label="Contact us" />
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && <NavOverlay isMobile={isMobile} onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
