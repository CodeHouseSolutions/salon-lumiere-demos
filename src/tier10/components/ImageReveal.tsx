import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '../../lib/cn'

interface ImageRevealProps {
  src: string
  alt: string
  className?: string
}

export default function ImageReveal({ src, alt, className }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.4'],
  })
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ['inset(100% 0 0 0)', 'inset(0% 0 0 0)']
  )

  return (
    <div ref={ref} className={cn('overflow-hidden', className)}>
      <motion.img
        src={src}
        alt={alt}
        style={{ clipPath }}
        className="w-full h-full object-cover"
      />
    </div>
  )
}
