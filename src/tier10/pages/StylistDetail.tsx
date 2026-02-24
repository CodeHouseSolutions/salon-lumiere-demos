import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { team } from '../../data/team'
import ImageReveal from '../components/ImageReveal'
import FadeInSection from '../components/FadeInSection'
import MagneticButton from '../components/MagneticButton'
import { staggerContainer, fadeInUp } from '../animations/variants'
import Footer from '../sections/Footer'

export default function StylistDetail() {
  const { id } = useParams<{ id: string }>()
  const stylist = team.find((s) => s.id === id)

  if (!stylist) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-charcoal-dark mb-4">
            Stylist Not Found
          </h1>
          <Link
            to="/tier10/team"
            className="font-body text-gold hover:text-gold-dark transition-colors"
          >
            Back to Team
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <Link
              to="/tier10/team"
              className="inline-flex items-center gap-2 font-body text-sm text-walnut-light hover:text-charcoal-dark transition-colors mb-12"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Team
            </Link>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ImageReveal
              src={stylist.photo}
              alt={stylist.name}
              className="aspect-[3/4] rounded-lg"
            />
            <div className="lg:pt-12">
              <FadeInSection>
                <span className="font-body text-gold text-sm uppercase tracking-[0.3em] block mb-2">
                  {stylist.title}
                </span>
                <h1 className="font-display text-5xl md:text-6xl text-charcoal-dark mb-2">
                  {stylist.name}
                </h1>
                <p className="font-body text-walnut-light text-sm mb-8">
                  {stylist.yearsExperience} years of experience
                </p>
              </FadeInSection>

              <FadeInSection delay={0.1}>
                <p className="font-body text-walnut text-lg leading-relaxed mb-6">
                  {stylist.bio}
                </p>
              </FadeInSection>

              <FadeInSection delay={0.2}>
                <div className="mb-8">
                  <h3 className="font-display text-xl text-charcoal-dark mb-2">
                    Specialty
                  </h3>
                  <p className="font-body text-walnut">{stylist.specialty}</p>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.3}>
                <MagneticButton href={stylist.bookingUrl}>
                  Book with {stylist.name.split(' ')[0]}
                </MagneticButton>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {stylist.galleryPhotos.length > 0 && (
        <section className="py-24 px-6 bg-cream-light">
          <div className="max-w-7xl mx-auto">
            <FadeInSection>
              <h2 className="font-display text-3xl text-charcoal-dark mb-12 text-center">
                Portfolio
              </h2>
            </FadeInSection>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stylist.galleryPhotos.map((photo, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="overflow-hidden rounded-lg"
                >
                  <img
                    src={photo}
                    alt={`${stylist.name} portfolio ${i + 1}`}
                    className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      <Footer />
    </>
  )
}
