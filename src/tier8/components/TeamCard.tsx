import { motion } from 'framer-motion'
import type { Stylist } from '../../data/team'

interface TeamCardProps {
  stylist: Stylist
  onSelect: (stylist: Stylist) => void
}

export default function TeamCard({ stylist, onSelect }: TeamCardProps) {
  return (
    <motion.button
      onClick={() => onSelect(stylist)}
      className="group relative overflow-hidden rounded-lg shadow-md text-left w-full"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-[3/4]">
        <img
          src={stylist.photo}
          alt={stylist.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <p className="font-body text-gold text-xs tracking-[0.15em] uppercase mb-1">
          {stylist.specialty}
        </p>
        <p className="font-body text-cream text-sm">View Portfolio</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-charcoal-dark/70 to-transparent group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="font-display text-xl text-cream">{stylist.name}</h3>
        <p className="font-body text-cream/70 text-sm">{stylist.title}</p>
      </div>
    </motion.button>
  )
}
