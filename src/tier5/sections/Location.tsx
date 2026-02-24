import { salon } from '../../data/salon'
import MapEmbed from '../../components/MapEmbed'
import PhoneLink from '../../components/PhoneLink'

export default function Location() {
  return (
    <section id="location" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-charcoal-dark">Visit Us</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Info */}
          <div className="font-body space-y-8">
            <div>
              <h3 className="font-display text-xl text-charcoal-dark mb-2">Address</h3>
              <p className="text-charcoal text-sm">{salon.address.street}</p>
              <p className="text-charcoal text-sm">
                {salon.address.city}, {salon.address.state} {salon.address.zip}
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-charcoal-dark mb-2">Phone</h3>
              <PhoneLink className="text-sm text-charcoal" />
            </div>
            <div>
              <h3 className="font-display text-xl text-charcoal-dark mb-3">Hours</h3>
              <ul className="space-y-1.5">
                {salon.hours.map(({ day, hours }) => (
                  <li key={day} className="flex justify-between text-sm max-w-xs">
                    <span className="text-charcoal-dark font-medium">{day}</span>
                    <span className={hours === 'Closed' ? 'text-charcoal-light' : 'text-charcoal'}>
                      {hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Map */}
          <MapEmbed className="h-72 lg:h-full lg:min-h-[360px]" height="" />
        </div>
      </div>
    </section>
  )
}
