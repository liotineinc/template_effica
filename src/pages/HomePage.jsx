/**
 * HomePage — assembles the home sections in order. Comment a line out to
 * hide a section; reorder lines to reorder the page.
 */
import S01_Hero from '../sections/home/S01_Hero.jsx'
import S02_LogoMarquee from '../sections/home/S02_LogoMarquee.jsx'
import S03_Manifesto from '../sections/home/S03_Manifesto.jsx'
import S04_Services from '../sections/home/S04_Services.jsx'
import S05_FlipTheSwitch from '../sections/home/S05_FlipTheSwitch.jsx'
import S06_Research from '../sections/home/S06_Research.jsx'
import S07_WordCloud from '../sections/home/S07_WordCloud.jsx'
import S08_Phases from '../sections/home/S08_Phases.jsx'
import S09_CaseStudy from '../sections/home/S09_CaseStudy.jsx'
import S10_Portfolio from '../sections/home/S10_Portfolio.jsx'
import S11_AlwaysOn from '../sections/home/S11_AlwaysOn.jsx'
import S12_Team from '../sections/home/S12_Team.jsx'
import S13_Stats from '../sections/home/S13_Stats.jsx'
import S14_Pricing from '../sections/home/S14_Pricing.jsx'
import S15_FounderNote from '../sections/home/S15_FounderNote.jsx'
import S16_Newsletter from '../sections/home/S16_Newsletter.jsx'
import S17_FAQ from '../sections/home/S17_FAQ.jsx'
import GetInTouch from '../components/layout/GetInTouch.jsx'
import Footer from '../components/layout/Footer.jsx'

export default function HomePage() {
  return (
    <main data-page="Home">
      <S01_Hero />
      <S02_LogoMarquee />
      <S03_Manifesto />
      <S04_Services />
      <S05_FlipTheSwitch />
      <S06_Research />
      <S07_WordCloud />
      <S08_Phases />
      <S09_CaseStudy />
      <S10_Portfolio />
      <S11_AlwaysOn />
      <S12_Team />
      <S13_Stats />
      <S14_Pricing />
      <S15_FounderNote />
      <S16_Newsletter />
      <S17_FAQ />
      <GetInTouch />
      <Footer />
    </main>
  )
}
