import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeInSection from '../components/FadeInSection'
import TeamCard from '../components/TeamCard'
import StylistProfile from './StylistProfile'
import { team, type Stylist } from '../../data/team'
import { staggerContainer, fadeInUp } from '../animations/variants'

export default function Team() {
  const [selectedStylist, setSelectedStylist] = useState<Stylist | null>(null)

  return (
    <>
      <section id="team" className="py-24 md:py-32 bg-cream-light">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInSection className="text-center mb-16">
            <p className="font-body text-gold tracking-[0.2em] uppercase text-sm mb-3">
              The Artists
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal-dark">
              Meet the Team
            </h2>
          </FadeInSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {team.map((stylist) => (
              <motion.div key={stylist.id} variants={fadeInUp}>
                <TeamCard stylist={stylist} onSelect={setSelectedStylist} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <StylistProfile
        stylist={selectedStylist}
        onClose={() => setSelectedStylist(null)}
      />
    </>
  )
}
