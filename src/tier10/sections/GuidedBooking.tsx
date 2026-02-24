import FadeInSection from '../components/FadeInSection'
import StylistMatcher from '../components/StylistMatcher'

export default function GuidedBooking() {
  return (
    <section className="py-32 px-6 bg-cream-light">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <FadeInSection>
          <span className="font-body text-gold text-sm uppercase tracking-[0.3em] block mb-4">
            Personalized
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal-dark mb-6">
            Find Your Perfect Stylist
          </h2>
          <p className="font-body text-walnut text-lg max-w-xl mx-auto">
            Answer a couple of quick questions and we will match you with the
            stylist who is the ideal fit for your hair goals.
          </p>
        </FadeInSection>
      </div>
      <StylistMatcher />
    </section>
  )
}
