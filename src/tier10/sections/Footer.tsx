import { Link } from 'react-router-dom'
import SalonLogo from '../../components/SalonLogo'
import SocialLinks from '../../components/SocialLinks'
import PhoneLink from '../../components/PhoneLink'
import { salon } from '../../data/salon'

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <SalonLogo variant="light" size="md" className="mb-4" />
            <p className="font-body text-cream/60 text-sm max-w-xs">
              {salon.description}
            </p>
          </div>

          <div>
            <h4 className="font-display text-cream text-lg mb-4">Navigate</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: 'Home', to: '/tier10' },
                { label: 'Experience', to: '/tier10/experience' },
                { label: 'Philosophy', to: '/tier10/philosophy' },
                { label: 'Team', to: '/tier10/team' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-body text-cream/60 hover:text-gold transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-display text-cream text-lg mb-4">Contact</h4>
            <div className="space-y-2 font-body text-cream/60 text-sm">
              <p>{salon.address.full}</p>
              <PhoneLink className="text-cream/60 hover:text-gold" />
              <p>{salon.email}</p>
            </div>
            <SocialLinks className="mt-6 text-cream/60" iconSize="sm" />
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 text-center">
          <p className="font-body text-cream/40 text-xs">
            &copy; {new Date().getFullYear()} {salon.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
