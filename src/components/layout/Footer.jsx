/**
 * layout/Footer — slim dark legal strip (both pages).
 */
import { footer } from '../../content/siteContent.js'

export default function Footer() {
  return (
    <footer className="site-footer" data-component="Footer">
      <div className="footer-inner">
        <div className="footer-left">
          {footer.legal.map((l) => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
        </div>
        <span>{footer.copyright}</span>
        <a href={footer.credit.href}>{footer.credit.label}</a>
      </div>
    </footer>
  )
}
