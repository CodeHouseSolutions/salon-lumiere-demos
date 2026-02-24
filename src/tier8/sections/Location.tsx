import FadeInSection from '../components/FadeInSection'
import MapEmbed from '../../components/MapEmbed'
import PhoneLink from '../../components/PhoneLink'
import BookingButton from '../../components/BookingButton'
import { salon } from '../../data/salon'

export default function Location() {
  return (
    <section id="location" className="py-24 md:py-32 bg-cream-light">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInSection className="text-center mb-16">
          <p className="font-body text-gold tracking-[0.2em] uppercase text-sm mb-3">
            Find Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal-dark">
            Visit the Salon
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-12">
          <FadeInSection direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl text-charcoal-dark mb-3">Location</h3>
                <p className="font-body text-charcoal-light">{salon.address.full}</p>
              </div>

              <div>
                <h3 className="font-display text-xl text-charcoal-dark mb-3">Phone</h3>
                <PhoneLink className="font-body text-charcoal-light" />
              </div>

              <div>
                <h3 className="font-display text-xl text-charcoal-dark mb-3">Hours</h3>
                <div className="space-y-2">
                  {salon.hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between font-body text-sm"
                    >
                      <span className="text-charcoal-dark font-medium">{h.day}</span>
                      <span className={h.hours === 'Closed' ? 'text-charcoal-light/50' : 'text-charcoal-light'}>
                        {h.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <BookingButton size="lg" label="Book Your Visit" />
            </div>
          </FadeInSection>

          <FadeInSection direction="right" delay={0.2}>
            <MapEmbed height="h-96" className="shadow-lg" />
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
