import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import SalonLogo from '../../components/SalonLogo'
import BookingButton from '../../components/BookingButton'
import { navOverlay, navLink, staggerContainer } from '../animations/variants'

const links = [
  { label: 'Home', to: '/tier10' },
  { label: 'Experience', to: '/tier10/experience' },
  { label: 'Philosophy', to: '/tier10/philosophy' },
  { label: 'Team', to: '/tier10/team' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex items-center justify-between">
        <Link to="/tier10" onClick={() => setOpen(false)}>
          <SalonLogo variant="light" size="sm" />
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <motion.span
            className="block w-6 h-[2px] bg-cream"
            animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-6 h-[2px] bg-cream"
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-6 h-[2px] bg-cream"
            animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-charcoal-dark/95 flex items-center justify-center"
            variants={navOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="flex flex-col items-center gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {links.map((link) => (
                <motion.div key={link.to} variants={navLink}>
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl md:text-6xl text-cream hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={navLink} className="mt-4">
                <BookingButton size="lg" variant="outline" className="border-cream text-cream hover:bg-cream hover:text-charcoal-dark" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
