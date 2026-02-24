import { motion } from 'framer-motion'
import FadeInSection from '../components/FadeInSection'
import { staggerContainer, fadeInUp } from '../animations/variants'

const pillars = [
  {
    icon: '◆',
    title: 'Consistency',
    description: 'Great work is not a one-time event. It is a promise we keep every single visit.',
  },
  {
    icon: '✦',
    title: 'Craft',
    description: 'Precision, technique, and continuing education drive everything we do behind the chair.',
  },
  {
    icon: '♡',
    title: 'Care',
    description: 'We listen first. Your hair goals, your lifestyle, your comfort all guide our approach.',
  },
  {
    icon: '⬡',
    title: 'Community',
    description: 'Salon Lumiere is more than a business. It is a gathering place for Middleburg and beyond.',
  },
]

export default function OurStandard() {
  return (
    <section className="py-24 md:py-32 bg-cream-light">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInSection className="text-center mb-16">
          <p className="font-body text-gold tracking-[0.2em] uppercase text-sm mb-3">
            What We Stand For
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal-dark">
            Our Standard
          </h2>
        </FadeInSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={fadeInUp}
              className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <span className="text-gold text-3xl block mb-4">{pillar.icon}</span>
              <h3 className="font-display text-xl text-charcoal-dark mb-3">
                {pillar.title}
              </h3>
              <p className="font-body text-sm text-charcoal-light leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
