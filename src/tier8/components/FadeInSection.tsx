import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'

interface FadeInSectionProps {
  children: React.ReactNode
  direction?: 'up' | 'left' | 'right'
  delay?: number
  className?: string
}

const directionMap = {
  up: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
}

export default function FadeInSection({
  children,
  direction = 'up',
  delay = 0,
  className,
}: FadeInSectionProps) {
  const variants = directionMap[direction]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        hidden: variants.hidden,
        visible: {
          ...variants.visible,
          transition: { duration: 0.6, ease: 'easeOut', delay },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
