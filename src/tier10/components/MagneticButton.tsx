import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface MagneticButtonProps {
  children: ReactNode
  href?: string
  className?: string
  strength?: number
  onClick?: () => void
}

export default function MagneticButton({
  children,
  href,
  className,
  strength = 0.3,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  function handleMouse(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * strength)
    y.set((e.clientY - cy) * strength)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  const Tag = href ? 'a' : 'button'
  const linkProps = href
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className="inline-block"
    >
      <Tag
        {...linkProps}
        onClick={onClick}
        className={cn(
          'inline-block font-body font-semibold tracking-wide uppercase transition-colors duration-300',
          'bg-gold text-charcoal-dark hover:bg-gold-dark px-8 py-4 text-sm rounded',
          className
        )}
      >
        {children}
      </Tag>
    </motion.div>
  )
}
