import { cn } from '../../lib/cn'

interface BeforeAfterCardProps {
  before: string
  after: string
  description: string
  stylist: string
  className?: string
}

export default function BeforeAfterCard({
  before,
  after,
  description,
  stylist,
  className,
}: BeforeAfterCardProps) {
  return (
    <div className={cn('group relative rounded-lg overflow-hidden shadow-md cursor-pointer', className)}>
      <div className="aspect-[3/4] relative">
        <img
          src={before}
          alt={`Before: ${description}`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <img
          src={after}
          alt={`After: ${description}`}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out"
          style={{ clipPath: 'inset(0 100% 0 0)' }}
          onMouseEnter={(e) => {
            ;(e.target as HTMLElement).style.clipPath = 'inset(0 0 0 0)'
          }}
          onMouseLeave={(e) => {
            ;(e.target as HTMLElement).style.clipPath = 'inset(0 100% 0 0)'
          }}
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-charcoal-dark/70 backdrop-blur-sm text-cream text-xs font-body px-3 py-1 rounded-full">
          Before
        </div>
        <div className="absolute top-3 right-3 bg-gold/90 backdrop-blur-sm text-charcoal-dark text-xs font-body font-semibold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          After
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal-dark/80 to-transparent">
        <p className="font-body text-cream text-sm font-medium">{description}</p>
        <p className="font-body text-cream/60 text-xs capitalize">by {stylist}</p>
      </div>
    </div>
  )
}
