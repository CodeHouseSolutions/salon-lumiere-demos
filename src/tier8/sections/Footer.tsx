import SalonLogo from '../../components/SalonLogo'
import SocialLinks from '../../components/SocialLinks'
import PhoneLink from '../../components/PhoneLink'
import { salon } from '../../data/salon'

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <SalonLogo variant="light" size="sm" className="mb-4" />
            <p className="font-body text-cream/60 text-sm leading-relaxed">
              {salon.description}
            </p>
          </div>

          <div>
            <h4 className="font-display text-cream text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Services', 'Team', 'Gallery', 'Reviews'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block font-body text-cream/60 text-sm hover:text-gold transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-cream text-lg mb-4">Contact</h4>
            <div className="space-y-2 font-body text-cream/60 text-sm">
              <p>{salon.address.street}</p>
              <p>{salon.address.city}, {salon.address.state} {salon.address.zip}</p>
              <PhoneLink className="text-cream/60 text-sm" />
              <p>{salon.email}</p>
            </div>
          </div>

          <div>
            <h4 className="font-display text-cream text-lg mb-4">Follow Us</h4>
            <SocialLinks className="text-cream/60" />
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 text-center">
          <p className="font-body text-cream/40 text-sm">
            &copy; {new Date().getFullYear()} {salon.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
