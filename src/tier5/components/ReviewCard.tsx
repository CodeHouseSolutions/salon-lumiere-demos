import type { Review } from '../../data/reviews'
import StarRating from '../../components/StarRating'
import { cn } from '../../lib/cn'

interface ReviewCardProps {
  review: Review
  className?: string
}

export default function ReviewCard({ review, className }: ReviewCardProps) {
  return (
    <div className={cn('bg-white rounded-lg p-6 shadow-sm', className)}>
      <StarRating rating={review.rating} size="sm" />
      <p className="font-body text-sm text-charcoal mt-3 leading-relaxed italic">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="mt-4">
        <p className="font-body text-sm font-semibold text-charcoal-dark">{review.name}</p>
        {review.stylist && (
          <p className="font-body text-xs text-charcoal-light mt-0.5">with {review.stylist}</p>
        )}
      </div>
    </div>
  )
}
