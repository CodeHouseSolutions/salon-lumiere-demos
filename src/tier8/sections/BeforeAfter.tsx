import { motion } from 'framer-motion'
import FadeInSection from '../components/FadeInSection'
import BeforeAfterCard from '../components/BeforeAfterCard'
import { beforeAfterPairs } from '../../data/gallery'
import { staggerContainer, fadeInUp } from '../animations/variants'

export default function BeforeAfter() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInSection className="text-center mb-16">
          <p className="font-body text-gold tracking-[0.2em] uppercase text-sm mb-3">
            Transformations
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal-dark">
            Before & After
          </h2>
          <p className="font-body text-charcoal-light mt-4 max-w-md mx-auto">
            Hover to reveal the transformation
          </p>
        </FadeInSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {beforeAfterPairs.map((pair) => (
            <motion.div key={pair.id} variants={fadeInUp}>
              <BeforeAfterCard
                before={pair.before}
                after={pair.after}
                description={pair.description}
                stylist={pair.stylist}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
