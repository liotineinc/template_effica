/**
 * home/S02_LogoMarquee — infinite ticker of platforms/tools under the hero.
 */
import Marquee from '../../components/ui/Marquee.jsx'
import { logoMarquee } from '../../content/siteContent.js'

export default function S02_LogoMarquee() {
  return (
    <div className="on-dark logo-marquee" data-component="S02_LogoMarquee">
      <Marquee items={logoMarquee.items} speed={30} />
    </div>
  )
}
