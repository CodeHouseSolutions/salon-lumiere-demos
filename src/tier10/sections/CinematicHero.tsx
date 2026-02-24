import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { salonPhotos } from '../../data/gallery'
import VideoBackground from '../components/VideoBackground'
import TextReveal from '../components/TextReveal'

export default function CinematicHero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.6, 0])

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <VideoBackground src={salonPhotos.heroVideo} overlay={false} />
      <motion.div
        className="absolute inset-0 bg-charcoal-dark"
        style={{ opacity: overlayOpacity }}
      />
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <TextReveal
          text="Salon Lumiere"
          as="h1"
          className="font-display text-5xl md:text-7xl lg:text-8xl text-cream mb-6"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="font-body text-cream/80 text-lg md:text-xl tracking-widest uppercase"
        >
          Where Confidence Begins
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-cream/60"
        >
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  )
}
