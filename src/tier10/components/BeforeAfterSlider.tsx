import { useState, useRef, useCallback } from 'react'
import { cn } from '../../lib/cn'

interface BeforeAfterSliderProps {
  before: string
  after: string
  alt?: string
  className?: string
}

export default function BeforeAfterSlider({
  before,
  after,
  alt = 'Before and after comparison',
  className,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      isDragging.current = true
      ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
      updatePosition(e.clientX)
    },
    [updatePosition]
  )

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return
      updatePosition(e.clientX)
    },
    [updatePosition]
  )

  const handlePointerUp = useCallback(() => {
    isDragging.current = false
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn('relative w-full aspect-[3/4] overflow-hidden rounded-lg cursor-ew-resize select-none', className)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      role="slider"
      aria-label={alt}
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
    >
      <img src={after} alt={`After - ${alt}`} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <img
          src={before}
          alt={`Before - ${alt}`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: `${(100 / position) * 100}%`, maxWidth: 'none' }}
        />
      </div>

      <div
        className="absolute top-0 bottom-0 w-0.5 bg-cream shadow-lg"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-cream rounded-full flex items-center justify-center shadow-lg">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-charcoal-dark">
            <path d="M6 10L2 10M2 10L4 8M2 10L4 12M14 10L18 10M18 10L16 8M18 10L16 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <span className="absolute top-4 left-4 bg-charcoal-dark/70 text-cream text-xs font-body uppercase tracking-wider px-3 py-1 rounded">
        Before
      </span>
      <span className="absolute top-4 right-4 bg-charcoal-dark/70 text-cream text-xs font-body uppercase tracking-wider px-3 py-1 rounded">
        After
      </span>
    </div>
  )
}
