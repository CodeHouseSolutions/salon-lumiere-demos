import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
  bgImage?: string
}

export default function ParallaxSection({
  children,
  className,
  speed = 0.3,
  bgImage,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100])

  return (
    <div ref={ref} className={cn('relative overflow-hidden', className)}>
      {bgImage && (
        <motion.div
          className="absolute inset-0 -top-20 -bottom-20"
          style={{ y }}
        >
          <img
            src={bgImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
