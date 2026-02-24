import FadeInSection from '../components/FadeInSection'
import ParallaxSection from '../components/ParallaxSection'
import ReviewCarousel from '../components/ReviewCarousel'
import { salonPhotos } from '../../data/gallery'

export default function Reviews() {
  return (
    <ParallaxSection
      imageUrl={salonPhotos.interior}
      overlayOpacity={0.7}
      className="py-24 md:py-32"
    >
      <section id="reviews">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInSection className="text-center mb-12">
            <p className="font-body text-gold tracking-[0.2em] uppercase text-sm mb-3">
              Testimonials
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-cream">
              What Our Clients Say
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <ReviewCarousel />
          </FadeInSection>
        </div>
      </section>
    </ParallaxSection>
  )
}
