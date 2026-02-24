import { cn } from '../lib/cn'

interface SalonLogoProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function SalonLogo({ variant = 'dark', size = 'md', className }: SalonLogoProps) {
  const textColor = variant === 'light' ? 'text-cream' : 'text-charcoal-dark'
  const accentColor = 'text-gold'
  const sizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
  }

  return (
    <div className={cn('font-display font-semibold tracking-wider', sizes[size], textColor, className)}>
      <span className={accentColor}>S</span>alon{' '}
      <span className={accentColor}>L</span>umiere
    </div>
  )
}
