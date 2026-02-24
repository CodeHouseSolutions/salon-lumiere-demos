import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '../../lib/cn'

interface ParallaxSectionProps {
  imageUrl: string
  speed?: number
  children?: React.ReactNode
  overlayOpacity?: number
  className?: string
}

export default function ParallaxSection({
  imageUrl,
  speed = 0.3,
  children,
  overlayOpacity = 0.4,
  className,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}px`, `${speed * 100}px`])

  return (
    <div ref={ref} className={cn('relative overflow-hidden', className)}>
      <motion.div
        className="absolute inset-0 -top-20 -bottom-20"
        style={{ y }}
      >
        <img
          src={imageUrl}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
      <div
        className="absolute inset-0 bg-charcoal-dark"
        style={{ opacity: overlayOpacity }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
