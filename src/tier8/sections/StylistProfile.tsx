import { motion, AnimatePresence } from 'framer-motion'
import type { Stylist } from '../../data/team'
import BookingButton from '../../components/BookingButton'

interface StylistProfileProps {
  stylist: Stylist | null
  onClose: () => void
}

export default function StylistProfile({ stylist, onClose }: StylistProfileProps) {
  return (
    <AnimatePresence>
      {stylist && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-charcoal-dark/80 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 text-charcoal-dark hover:bg-gold hover:text-white transition-colors text-xl"
              aria-label="Close"
            >
              &times;
            </button>

            <div className="grid md:grid-cols-2">
              <div className="aspect-square md:aspect-auto">
                <img
                  src={stylist.photo}
                  alt={stylist.name}
                  className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                />
              </div>
              <div className="p-8">
                <p className="font-body text-gold tracking-[0.2em] uppercase text-xs mb-1">
                  {stylist.specialty}
                </p>
                <h2 className="font-display text-3xl text-charcoal-dark mb-1">
                  {stylist.name}
                </h2>
                <p className="font-body text-charcoal-light text-sm mb-4">
                  {stylist.title} &middot; {stylist.yearsExperience} years experience
                </p>
                <p className="font-body text-charcoal-light leading-relaxed text-sm mb-6">
                  {stylist.bio}
                </p>
                <BookingButton url={stylist.bookingUrl} label={`Book with ${stylist.name.split(' ')[0]}`} />
              </div>
            </div>

            <div className="p-8 pt-0">
              <h3 className="font-display text-xl text-charcoal-dark mb-4">Portfolio</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {stylist.galleryPhotos.map((photo, i) => (
                  <div key={i} className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src={photo}
                      alt={`${stylist.name} work ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
