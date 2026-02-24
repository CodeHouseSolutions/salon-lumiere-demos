import { cn } from '../lib/cn'

interface StarRatingProps {
  rating: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function StarRating({ rating, size = 'md', className }: StarRatingProps) {
  const sizes = { sm: 'text-sm', md: 'text-lg', lg: 'text-2xl' }

  return (
    <div className={cn('flex gap-0.5 text-gold', sizes[size], className)} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= Math.round(rating) ? 'opacity-100' : 'opacity-30'}>
          ★
        </span>
      ))}
    </div>
  )
}
