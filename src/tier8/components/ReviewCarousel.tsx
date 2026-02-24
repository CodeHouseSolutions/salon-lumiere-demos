import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import StarRating from '../../components/StarRating'
import { reviews } from '../../data/reviews'

export default function ReviewCarousel() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % reviews.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const review = reviews[current]

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="relative min-h-[200px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <StarRating rating={review.rating} size="lg" className="justify-center mb-4" />
            <blockquote className="font-body text-cream text-lg md:text-xl leading-relaxed mb-4 italic">
              &ldquo;{review.text}&rdquo;
            </blockquote>
            <p className="font-body text-gold font-semibold">{review.name}</p>
            {review.stylist && (
              <p className="font-body text-cream/50 text-sm mt-1">
                with {review.stylist}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-cream/30 text-cream/60 hover:border-gold hover:text-gold transition-colors flex items-center justify-center"
          aria-label="Previous review"
        >
          &#8592;
        </button>
        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-gold w-6' : 'bg-cream/30'
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-cream/30 text-cream/60 hover:border-gold hover:text-gold transition-colors flex items-center justify-center"
          aria-label="Next review"
        >
          &#8594;
        </button>
      </div>
    </div>
  )
}
