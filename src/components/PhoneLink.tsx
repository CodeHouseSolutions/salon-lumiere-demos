import { salon } from '../data/salon'
import { cn } from '../lib/cn'

interface PhoneLinkProps {
  className?: string
}

export default function PhoneLink({ className }: PhoneLinkProps) {
  const tel = salon.phone.replace(/[^+\d]/g, '')
  return (
    <a href={`tel:${tel}`} className={cn('hover:text-gold transition-colors', className)}>
      {salon.phone}
    </a>
  )
}
