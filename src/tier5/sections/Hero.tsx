import { salon } from '../../data/salon'
import { salonPhotos } from '../../data/gallery'
import BookingButton from '../../components/BookingButton'

export default function Hero() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${salonPhotos.interior})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-charcoal-dark/60" />
      <div className="relative z-10 text-center px-4 py-20">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream font-semibold tracking-wide">
          {salon.name}
        </h1>
        <p className="font-body text-lg md:text-xl text-cream/90 mt-4 tracking-wide">
          {salon.tagline}
        </p>
        <div className="mt-8">
          <BookingButton size="lg" />
        </div>
      </div>
    </section>
  )
}
