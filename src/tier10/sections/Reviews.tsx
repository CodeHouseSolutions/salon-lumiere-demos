import { motion } from 'framer-motion'
import { reviews } from '../../data/reviews'
import StarRating from '../../components/StarRating'
import FadeInSection from '../components/FadeInSection'
import { staggerContainer, fadeInUp } from '../animations/variants'

export default function Reviews() {
  return (
    <section className="py-32 px-6 bg-cream-light">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="font-body text-gold text-sm uppercase tracking-[0.3em] block mb-4">
              Testimonials
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal-dark">
              What Our Clients Say
            </h2>
          </div>
        </FadeInSection>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {reviews.slice(0, 6).map((review) => (
            <motion.div
              key={review.id}
              variants={fadeInUp}
              className="bg-cream p-8 rounded-lg"
            >
              <StarRating rating={review.rating} size="sm" className="mb-4" />
              <p className="font-body text-walnut mb-6 leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <div>
                <p className="font-body font-semibold text-charcoal-dark">
                  {review.name}
                </p>
                {review.stylist && (
                  <p className="font-body text-sm text-walnut-light">
                    with {review.stylist}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
