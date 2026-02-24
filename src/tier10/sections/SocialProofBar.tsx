import { motion } from 'framer-motion'
import { salon } from '../../data/salon'
import StarRating from '../../components/StarRating'
import { fadeIn } from '../animations/variants'

export default function SocialProofBar() {
  return (
    <motion.section
      className="py-16 px-6 bg-charcoal-dark"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
        <div>
          <p className="font-display text-4xl text-gold mb-1">{salon.averageRating}</p>
          <StarRating rating={salon.averageRating} size="md" />
        </div>
        <div className="w-px h-12 bg-cream/20 hidden md:block" />
        <div>
          <p className="font-display text-4xl text-cream">{salon.reviewCount}+</p>
          <p className="font-body text-cream/60 text-sm uppercase tracking-wider">
            5-Star Reviews
          </p>
        </div>
        <div className="w-px h-12 bg-cream/20 hidden md:block" />
        <div>
          <p className="font-display text-4xl text-cream">{salon.yearsInBusiness}</p>
          <p className="font-body text-cream/60 text-sm uppercase tracking-wider">
            Years of Excellence
          </p>
        </div>
      </div>
    </motion.section>
  )
}
