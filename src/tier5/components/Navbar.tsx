import { useState } from 'react'
import SalonLogo from '../../components/SalonLogo'
import BookingButton from '../../components/BookingButton'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { cn } from '../../lib/cn'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Location', href: '#location' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollY = useScrollPosition()
  const scrolled = scrollY > 50

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-body',
        scrolled ? 'bg-white shadow-md' : 'bg-white/95'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        <SalonLogo size="sm" />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-charcoal hover:text-gold transition-colors text-sm tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <BookingButton size="sm" />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              'block w-6 h-0.5 bg-charcoal transition-all duration-300',
              menuOpen && 'rotate-45 translate-y-2'
            )}
          />
          <span
            className={cn(
              'block w-6 h-0.5 bg-charcoal transition-all duration-300',
              menuOpen && 'opacity-0'
            )}
          />
          <span
            className={cn(
              'block w-6 h-0.5 bg-charcoal transition-all duration-300',
              menuOpen && '-rotate-45 -translate-y-2'
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 bg-white',
          menuOpen ? 'max-h-80 border-t border-cream-dark' : 'max-h-0'
        )}
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-charcoal hover:text-gold transition-colors text-sm tracking-wide uppercase py-2"
            >
              {link.label}
            </a>
          ))}
          <BookingButton size="sm" className="w-full" />
        </div>
      </div>
    </nav>
  )
}
