import FadeInSection from '../components/FadeInSection'
import { owner } from '../../data/team'
import BookingButton from '../../components/BookingButton'

export default function OwnerStory() {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <FadeInSection direction="left">
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
                <img
                  src={owner.photo}
                  alt={owner.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold rounded-lg" />
            </div>
          </FadeInSection>

          <FadeInSection direction="right" delay={0.2}>
            <p className="font-body text-gold tracking-[0.2em] uppercase text-sm mb-3">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal-dark mb-6">
              Built on a Simple Belief
            </h2>
            <div className="space-y-4 font-body text-charcoal-light leading-relaxed">
              <p>
                Every person who walks through our door deserves to feel like the
                most important person in the room.
              </p>
              <p>{owner.bio}</p>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <BookingButton label="Meet the Team" variant="outline" url="#team" />
              <div className="text-sm font-body text-charcoal-light">
                <span className="block font-semibold text-charcoal-dark">{owner.name}</span>
                {owner.title}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
