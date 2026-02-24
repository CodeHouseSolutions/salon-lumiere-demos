import SalonLogo from '../../components/SalonLogo'
import SocialLinks from '../../components/SocialLinks'

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Location', href: '#location' },
]

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-charcoal-dark py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6">
          <SalonLogo variant="light" size="md" />
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-cream/70 hover:text-gold transition-colors text-sm font-body tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <SocialLinks className="text-cream/70" />
          <p className="font-body text-xs text-cream/50">
            &copy; 2025 Salon Lumiere. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
