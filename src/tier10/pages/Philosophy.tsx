import { salonPhotos } from '../../data/gallery'
import { owner } from '../../data/team'
import ParallaxSection from '../components/ParallaxSection'
import TextReveal from '../components/TextReveal'
import ImageReveal from '../components/ImageReveal'
import FadeInSection from '../components/FadeInSection'
import Footer from '../sections/Footer'

export default function Philosophy() {
  return (
    <>
      <ParallaxSection
        bgImage={salonPhotos.interior}
        className="h-[70vh] flex items-center justify-center"
      >
        <div className="text-center px-6">
          <TextReveal
            text="Our Philosophy"
            as="h1"
            className="font-display text-5xl md:text-7xl text-cream"
          />
        </div>
      </ParallaxSection>

      <section className="py-32 px-6 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <TextReveal
              text="We do not just style hair. We help people see themselves clearly."
              as="h2"
              className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal-dark leading-tight"
            />
          </FadeInSection>
        </div>
      </section>

      <section className="py-24 px-6 bg-cream-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ImageReveal
            src={owner.photo}
            alt={owner.name}
            className="aspect-square rounded-lg max-w-md mx-auto lg:mx-0"
          />
          <div className="space-y-6">
            <FadeInSection>
              <span className="font-body text-gold text-sm uppercase tracking-[0.3em] block mb-2">
                A Word From Our Founder
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-charcoal-dark mb-6">
                {owner.name}
              </h2>
              <p className="font-body text-walnut text-lg leading-relaxed mb-4">
                {owner.bio}
              </p>
              <p className="font-body text-walnut text-lg leading-relaxed">
                Every decision at Salon Lumiere comes back to one question: does
                this make our client feel more like themselves? If the answer is
                yes, we move forward. If not, we find another way.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-charcoal-dark">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {[
                {
                  title: 'Consistency',
                  desc: 'Great work is not a one-time event. It is a promise we keep every visit.',
                },
                {
                  title: 'Authenticity',
                  desc: 'We celebrate who you are, not who the trends say you should be.',
                },
                {
                  title: 'Craft',
                  desc: 'Every detail matters. Precision is not optional -- it is foundational.',
                },
              ].map((v) => (
                <div key={v.title}>
                  <h3 className="font-display text-2xl text-gold mb-4">
                    {v.title}
                  </h3>
                  <p className="font-body text-cream/70 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      <ParallaxSection
        bgImage={salonPhotos.town}
        className="h-[50vh] flex items-center justify-center"
      >
        <FadeInSection>
          <p className="font-display text-3xl md:text-5xl text-cream text-center px-6 max-w-3xl">
            Confidence is not something we give you. It is something we reveal.
          </p>
        </FadeInSection>
      </ParallaxSection>

      <Footer />
    </>
  )
}
