import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, type ElementType } from 'react'
import { cn } from '../../lib/cn'

interface TextRevealProps {
  text: string
  className?: string
  as?: ElementType
}

export default function TextReveal({ text, className, as: Tag = 'p' }: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.3'],
  })

  const chars = text.split('')

  return (
    <div ref={ref}>
      <Tag className={cn('inline', className)} aria-label={text}>
        {chars.map((char, i) => (
          <CharReveal
            key={`${i}-${char}`}
            char={char}
            index={i}
            total={chars.length}
            progress={scrollYProgress}
          />
        ))}
      </Tag>
    </div>
  )
}

function CharReveal({
  char,
  index,
  total,
  progress,
}: {
  char: string
  index: number
  total: number
  progress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const start = index / total
  const end = start + 1 / total
  const opacity = useTransform(progress, [start, end], [0.15, 1])

  return (
    <motion.span style={{ opacity }} className="inline" aria-hidden="true">
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  )
}
