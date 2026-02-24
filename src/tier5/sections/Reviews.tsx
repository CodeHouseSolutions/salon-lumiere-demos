import { reviews } from '../../data/reviews'
import { salon } from '../../data/salon'
import StarRating from '../../components/StarRating'
import ReviewCard from '../components/ReviewCard'

export default function Reviews() {
  const displayedReviews = reviews.slice(0, 3)

  return (
    <section id="reviews" className="py-16 md:py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-charcoal-dark">
            What Our Clients Say
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        <div className="text-center mt-10 flex flex-col items-center gap-2">
          <StarRating rating={salon.averageRating} size="lg" />
          <p className="font-body text-sm text-charcoal-light">
            {salon.averageRating} stars from {salon.reviewCount}+ reviews
          </p>
        </div>
      </div>
    </section>
  )
}
