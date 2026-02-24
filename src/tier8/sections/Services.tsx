import { motion } from 'framer-motion'
import FadeInSection from '../components/FadeInSection'
import BookingButton from '../../components/BookingButton'
import { serviceCategories } from '../../data/services'
import { staggerContainer, fadeInUp } from '../animations/variants'

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInSection className="text-center mb-16">
          <p className="font-body text-gold tracking-[0.2em] uppercase text-sm mb-3">
            What We Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal-dark">
            Our Services
          </h2>
        </FadeInSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 gap-8"
        >
          {serviceCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={fadeInUp}
              className="bg-white rounded-lg p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="font-display text-2xl text-charcoal-dark">
                  {category.name}
                </h3>
              </div>
              <div className="space-y-4">
                {category.services.map((service) => (
                  <div
                    key={service.name}
                    className="flex justify-between items-start gap-4 pb-3 border-b border-cream-dark last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="font-body font-medium text-charcoal-dark">
                        {service.name}
                      </p>
                      {service.description && (
                        <p className="font-body text-sm text-charcoal-light mt-0.5">
                          {service.description}
                        </p>
                      )}
                    </div>
                    <span className="font-body font-semibold text-gold whitespace-nowrap">
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <FadeInSection className="text-center mt-12">
          <BookingButton size="lg" label="Book a Service" />
        </FadeInSection>
      </div>
    </section>
  )
}
