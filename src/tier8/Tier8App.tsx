import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import SocialProofBar from './sections/SocialProofBar'
import OwnerStory from './sections/OwnerStory'
import OurStandard from './sections/OurStandard'
import Services from './sections/Services'
import Team from './sections/Team'
import BeforeAfter from './sections/BeforeAfter'
import Reviews from './sections/Reviews'
import Location from './sections/Location'
import Footer from './sections/Footer'

export default function Tier8App() {
  return (
    <div className="bg-cream font-body text-charcoal-dark">
      <Navbar />
      <Hero />
      <SocialProofBar />
      <OwnerStory />
      <OurStandard />
      <Services />
      <Team />
      <BeforeAfter />
      <Reviews />
      <Location />
      <Footer />
    </div>
  )
}
