import { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { salon } from '../../data/salon'

function AnimatedNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1500
    const startTime = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      start = Math.floor(eased * target * 10) / 10
      setValue(start)
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target])

  return (
    <span ref={ref}>
      {Number.isInteger(target) ? Math.round(value) : value.toFixed(1)}
      {suffix}
    </span>
  )
}

export default function SocialProofBar() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-charcoal-dark py-6 border-t border-b border-gold/20"
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 text-center">
        <div className="font-display text-xl text-cream">
          <span className="text-gold font-semibold">
            <AnimatedNumber target={salon.averageRating} />
          </span>{' '}
          Stars
        </div>
        <span className="hidden sm:block text-gold/40">|</span>
        <div className="font-display text-xl text-cream">
          <span className="text-gold font-semibold">
            <AnimatedNumber target={salon.reviewCount} suffix="+" />
          </span>{' '}
          Reviews
        </div>
        <span className="hidden sm:block text-gold/40">|</span>
        <div className="font-display text-xl text-cream">
          <span className="text-gold font-semibold">
            <AnimatedNumber target={salon.yearsInBusiness} />
          </span>{' '}
          Years of Excellence
        </div>
      </div>
    </motion.section>
  )
}
