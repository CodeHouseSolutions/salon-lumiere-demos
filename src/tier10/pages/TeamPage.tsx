import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { team } from '../../data/team'
import { salonPhotos } from '../../data/gallery'
import ParallaxSection from '../components/ParallaxSection'
import TextReveal from '../components/TextReveal'
import FadeInSection from '../components/FadeInSection'
import { staggerContainer, fadeInUp } from '../animations/variants'
import Footer from '../sections/Footer'

export default function TeamPage() {
  return (
    <>
      <ParallaxSection
        bgImage={salonPhotos.interiorWide}
        className="h-[60vh] flex items-center justify-center"
      >
        <div className="text-center px-6">
          <TextReveal
            text="Meet the Team"
            as="h1"
            className="font-display text-5xl md:text-7xl text-cream"
          />
          <FadeInSection delay={0.5}>
            <p className="font-body text-cream/80 text-lg mt-4 tracking-widest uppercase">
              Artists. Craftspeople. Your people.
            </p>
          </FadeInSection>
        </div>
      </ParallaxSection>

      <section className="py-32 px-6 bg-cream">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {team.map((member) => (
            <motion.div key={member.id} variants={fadeInUp}>
              <Link
                to={`/tier10/team/${member.id}`}
                className="group block"
              >
                <div className="overflow-hidden rounded-lg mb-6">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h2 className="font-display text-2xl md:text-3xl text-charcoal-dark group-hover:text-gold transition-colors duration-300">
                  {member.name}
                </h2>
                <p className="font-body text-gold text-sm uppercase tracking-wider mt-1">
                  {member.title}
                </p>
                <p className="font-body text-walnut mt-3">{member.shortBio}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </>
  )
}
