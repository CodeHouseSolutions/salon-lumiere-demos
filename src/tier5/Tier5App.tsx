import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Team from './sections/Team'
import Reviews from './sections/Reviews'
import Location from './sections/Location'
import Footer from './sections/Footer'

export default function Tier5App() {
  return (
    <div className="min-h-screen bg-cream font-body text-charcoal">
      <Navbar />
      <Hero />
      <Services />
      <Team />
      <Reviews />
      <Location />
      <Footer />
    </div>
  )
}
