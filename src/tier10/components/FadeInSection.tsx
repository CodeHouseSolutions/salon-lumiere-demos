import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { fadeInUp } from '../animations/variants'

interface FadeInSectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function FadeInSection({ children, className, delay = 0 }: FadeInSectionProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
