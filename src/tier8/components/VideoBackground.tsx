import { useState, useRef, useEffect } from 'react'
import { salonPhotos } from '../../data/gallery'
import { cn } from '../../lib/cn'

interface VideoBackgroundProps {
  children?: React.ReactNode
  overlayOpacity?: number
  className?: string
}

export default function VideoBackground({
  children,
  overlayOpacity = 0.5,
  className,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoFailed, setVideoFailed] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setVideoFailed(true)
      return
    }
    videoRef.current?.play().catch(() => setVideoFailed(true))
  }, [])

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {videoFailed ? (
        <img
          src={salonPhotos.interiorWide}
          alt=""
          className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
        />
      ) : (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setVideoFailed(true)}
        >
          <source src={salonPhotos.heroVideo} type="video/mp4" />
        </video>
      )}
      <div
        className="absolute inset-0 bg-charcoal-dark"
        style={{ opacity: overlayOpacity }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
