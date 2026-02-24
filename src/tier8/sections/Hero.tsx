import { motion } from 'framer-motion'
import VideoBackground from '../components/VideoBackground'
import BookingButton from '../../components/BookingButton'
import { salon } from '../../data/salon'
import { staggerContainer, fadeInUp } from '../animations/variants'

export default function Hero() {
  return (
    <VideoBackground className="h-screen min-h-[600px]" overlayOpacity={0.45}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="h-screen min-h-[600px] flex flex-col items-center justify-center text-center px-6"
      >
        <motion.p
          variants={fadeInUp}
          className="font-body text-gold tracking-[0.3em] uppercase text-sm mb-4"
        >
          Middleburg, Virginia
        </motion.p>
        <motion.h1
          variants={fadeInUp}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream font-semibold leading-tight"
        >
          {salon.name}
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="font-body text-cream/80 text-lg md:text-xl mt-4 max-w-lg"
        >
          {salon.tagline}
        </motion.p>
        <motion.div variants={fadeInUp} className="mt-8">
          <BookingButton size="lg" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-cream/60 rounded-full" />
        </motion.div>
      </motion.div>
    </VideoBackground>
  )
}
