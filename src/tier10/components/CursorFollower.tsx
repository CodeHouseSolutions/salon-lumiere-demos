import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CursorFollower() {
  const [isTouch, setIsTouch] = useState(false)
  const [hovering, setHovering] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { stiffness: 500, damping: 30 })
  const springY = useSpring(cursorY, { stiffness: 500, damping: 30 })

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true)
      return
    }

    function onMove(e: MouseEvent) {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    function onOver(e: MouseEvent) {
      const target = e.target as HTMLElement
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('[data-magnetic]')
      ) {
        setHovering(true)
      }
    }

    function onOut(e: MouseEvent) {
      const target = e.target as HTMLElement
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('[data-magnetic]')
      ) {
        setHovering(false)
      }
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [cursorX, cursorY])

  if (isTouch) return null

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference rounded-full bg-gold"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        width: hovering ? 48 : 16,
        height: hovering ? 48 : 16,
        opacity: 0.8,
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    />
  )
}
