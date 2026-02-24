import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import SalonLogo from '../../components/SalonLogo'
import BookingButton from '../../components/BookingButton'
import { cn } from '../../lib/cn'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Visit', href: '#location' },
]

export default function Navbar() {
  const scrollY = useScrollPosition()
  const isScrolled = scrollY > 80
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMobileOpen(false)
    }
  }

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <SalonLogo variant={isScrolled ? 'dark' : 'light'} size="sm" />

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  'font-body text-sm tracking-wide transition-colors duration-300',
                  isScrolled
                    ? 'text-charcoal hover:text-gold'
                    : 'text-cream/90 hover:text-white'
                )}
              >
                {link.label}
              </a>
            ))}
            <BookingButton size="sm" />
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              'lg:hidden flex flex-col gap-1.5 p-2',
              isScrolled ? 'text-charcoal-dark' : 'text-cream'
            )}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-current"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-current"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-current"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-charcoal-dark/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="font-display text-3xl text-cream hover:text-gold transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
            >
              <BookingButton size="lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
