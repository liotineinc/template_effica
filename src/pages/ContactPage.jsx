/**
 * ContactPage — assembles the contact sections in order.
 */
import C01_ContactHero from '../sections/contact/C01_ContactHero.jsx'
import C02_MadLibForm from '../sections/contact/C02_MadLibForm.jsx'
import C03_KeepItSimple from '../sections/contact/C03_KeepItSimple.jsx'
import C04_BookACall from '../sections/contact/C04_BookACall.jsx'
import GetInTouch from '../components/layout/GetInTouch.jsx'
import Footer from '../components/layout/Footer.jsx'

export default function ContactPage() {
  return (
    <main data-page="Contact">
      <C01_ContactHero />
      <C02_MadLibForm />
      <C03_KeepItSimple />
      <C04_BookACall />
      <GetInTouch />
      <Footer />
    </main>
  )
}
