import { salonPhotos } from '../../data/gallery'
import ParallaxSection from '../components/ParallaxSection'
import ImageReveal from '../components/ImageReveal'
import FadeInSection from '../components/FadeInSection'
import TextReveal from '../components/TextReveal'
import Footer from '../sections/Footer'

const stages = [
  {
    title: 'Arrival',
    description:
      'From the moment you step through our doors, you are enveloped in calm. The scent of premium products, soft music, and the warm greeting of our team set the tone for your experience.',
    image: salonPhotos.exterior,
  },
  {
    title: 'Consultation',
    description:
      'Your stylist sits with you, eye to eye. We talk about your hair, your lifestyle, your aspirations. This is not a formality -- it is the foundation of everything we do.',
    image: salonPhotos.details.chair,
  },
  {
    title: 'The Service',
    description:
      'Precision meets artistry. Every technique is intentional, every product hand-selected. Whether it is a cut, color, or texture transformation, you are in the hands of a true craftsperson.',
    image: salonPhotos.details.tools,
  },
  {
    title: 'Finishing Touches',
    description:
      'The final style, the mirror reveal, the feeling of complete transformation. We take our time with the details because we know this moment matters to you.',
    image: salonPhotos.details.products,
  },
]

export default function Experience() {
  return (
    <>
      <ParallaxSection
        bgImage={salonPhotos.interiorWide}
        className="h-[70vh] flex items-center justify-center"
      >
        <div className="text-center px-6">
          <TextReveal
            text="Your Visit"
            as="h1"
            className="font-display text-5xl md:text-7xl text-cream"
          />
          <FadeInSection delay={0.5}>
            <p className="font-body text-cream/80 text-lg mt-4 tracking-widest uppercase">
              A journey, not just an appointment
            </p>
          </FadeInSection>
        </div>
      </ParallaxSection>

      <div className="bg-cream">
        {stages.map((stage, i) => (
          <section key={stage.title} className="py-24 px-6">
            <div
              className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                i % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}>
                <FadeInSection>
                  <span className="font-body text-gold text-sm uppercase tracking-[0.3em] block mb-4">
                    Step {i + 1}
                  </span>
                  <h2 className="font-display text-4xl md:text-5xl text-charcoal-dark mb-6">
                    {stage.title}
                  </h2>
                  <p className="font-body text-walnut text-lg leading-relaxed max-w-lg">
                    {stage.description}
                  </p>
                </FadeInSection>
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}>
                <ImageReveal
                  src={stage.image}
                  alt={stage.title}
                  className="aspect-[4/5] rounded-lg"
                />
              </div>
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </>
  )
}
