import { cn } from '../lib/cn'

interface BookingButtonProps {
  url?: string
  label?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function BookingButton({
  url = 'https://square.site/book/DEMO',
  label = 'Book Now',
  variant = 'primary',
  size = 'md',
  className,
}: BookingButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-block font-body font-semibold tracking-wide uppercase rounded transition-all duration-300 text-center',
        {
          'bg-gold text-charcoal-dark hover:bg-gold-dark': variant === 'primary',
          'bg-walnut text-cream hover:bg-walnut-dark': variant === 'secondary',
          'border-2 border-gold text-gold hover:bg-gold hover:text-charcoal-dark': variant === 'outline',
        },
        {
          'px-4 py-2 text-xs': size === 'sm',
          'px-6 py-3 text-sm': size === 'md',
          'px-8 py-4 text-base': size === 'lg',
        },
        className
      )}
    >
      {label}
    </a>
  )
}
