import CinematicHero from '../sections/CinematicHero'
import JourneyNarrative from '../sections/JourneyNarrative'
import GuidedBooking from '../sections/GuidedBooking'
import ClientSpotlight from '../sections/ClientSpotlight'
import SocialProofBar from '../sections/SocialProofBar'
import Reviews from '../sections/Reviews'
import EmailCapture from '../sections/EmailCapture'
import Location from '../sections/Location'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <>
      <CinematicHero />
      <JourneyNarrative />
      <GuidedBooking />
      <ClientSpotlight />
      <SocialProofBar />
      <Reviews />
      <EmailCapture />
      <Location />
      <Footer />
    </>
  )
}
