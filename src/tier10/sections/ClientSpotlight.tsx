import { motion } from 'framer-motion'
import { beforeAfterPairs } from '../../data/gallery'
import { team } from '../../data/team'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import FadeInSection from '../components/FadeInSection'
import { staggerContainer, fadeInUp } from '../animations/variants'

const spotlights = beforeAfterPairs.map((pair) => ({
  ...pair,
  stylistData: team.find((s) => s.id === pair.stylist),
  quote:
    pair.stylist === 'maya'
      ? 'Maya completely transformed my hair. I have never felt more confident.'
      : pair.stylist === 'james'
        ? 'James understood my texture better than anyone. My curls have never looked this good.'
        : 'Sofia gave me the length and volume I always dreamed of. Absolute magic.',
  clientName:
    pair.stylist === 'maya'
      ? 'Priya S.'
      : pair.stylist === 'james'
        ? 'David K.'
        : 'Michelle L.',
}))

export default function ClientSpotlight() {
  return (
    <section className="py-32 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-20">
            <span className="font-body text-gold text-sm uppercase tracking-[0.3em] block mb-4">
              Transformations
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal-dark">
              Client Spotlights
            </h2>
          </div>
        </FadeInSection>

        <motion.div
          className="grid gap-20 md:gap-28"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {spotlights.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <BeforeAfterSlider
                before={item.before}
                after={item.after}
                alt={item.description}
                className="max-w-md mx-auto lg:mx-0"
              />
              <div className="space-y-6">
                <p className="font-body text-sm text-gold uppercase tracking-[0.3em]">
                  {item.description}
                </p>
                <blockquote className="font-display text-2xl md:text-3xl text-charcoal-dark italic leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <p className="font-body text-walnut">
                  -- {item.clientName}
                  {item.stylistData && (
                    <span className="text-walnut-light">
                      {' '}
                      | Styled by {item.stylistData.name}
                    </span>
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
