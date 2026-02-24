import type { Stylist } from '../../data/team'
import { cn } from '../../lib/cn'

interface TeamCardProps {
  stylist: Stylist
  className?: string
}

export default function TeamCard({ stylist, className }: TeamCardProps) {
  return (
    <div className={cn('flex flex-col items-center text-center', className)}>
      <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-4">
        <img
          src={stylist.photo}
          alt={stylist.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <h3 className="font-display text-xl md:text-2xl text-charcoal-dark">{stylist.name}</h3>
      <p className="text-gold text-sm font-body mt-1">{stylist.title}</p>
      <p className="text-charcoal-light text-sm font-body mt-2">{stylist.specialty}</p>
      <a
        href={stylist.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-sm font-body font-semibold text-walnut hover:text-gold transition-colors uppercase tracking-wide"
      >
        Book with {stylist.name.split(' ')[0]}
      </a>
    </div>
  )
}
