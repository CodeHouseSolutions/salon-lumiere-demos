import { cn } from '../../lib/cn'

interface VideoBackgroundProps {
  src: string
  className?: string
  overlay?: boolean
}

export default function VideoBackground({ src, className, overlay = true }: VideoBackgroundProps) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      {overlay && (
        <div className="absolute inset-0 bg-charcoal-dark/40" />
      )}
    </div>
  )
}
