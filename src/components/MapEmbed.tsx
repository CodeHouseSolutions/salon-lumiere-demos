import { salon } from '../data/salon'
import { cn } from '../lib/cn'

interface MapEmbedProps {
  className?: string
  height?: string
}

export default function MapEmbed({ className, height = 'h-80' }: MapEmbedProps) {
  return (
    <div className={cn('rounded-lg overflow-hidden', height, className)}>
      <iframe
        src={salon.mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Salon Lumiere location"
      />
    </div>
  )
}
