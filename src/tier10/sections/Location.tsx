import { salon } from '../../data/salon'
import MapEmbed from '../../components/MapEmbed'
import PhoneLink from '../../components/PhoneLink'
import FadeInSection from '../components/FadeInSection'

export default function Location() {
  return (
    <section className="py-32 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="font-body text-gold text-sm uppercase tracking-[0.3em] block mb-4">
              Visit Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal-dark">
              Find Salon Lumiere
            </h2>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeInSection>
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl text-charcoal-dark mb-2">
                  Address
                </h3>
                <p className="font-body text-walnut">{salon.address.full}</p>
              </div>
              <div>
                <h3 className="font-display text-xl text-charcoal-dark mb-2">
                  Phone
                </h3>
                <PhoneLink className="font-body text-walnut" />
              </div>
              <div>
                <h3 className="font-display text-xl text-charcoal-dark mb-2">
                  Hours
                </h3>
                <div className="space-y-1">
                  {salon.hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between font-body text-walnut max-w-xs"
                    >
                      <span>{h.day}</span>
                      <span>{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <MapEmbed height="h-96" className="rounded-lg shadow-lg" />
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
