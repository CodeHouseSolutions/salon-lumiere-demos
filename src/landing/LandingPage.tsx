import { Link } from 'react-router-dom'

const tiers = [
  {
    path: '/tier5',
    label: 'Tier 5',
    name: 'The Solid Foundation',
    price: '$5,000',
    description:
      'Clean, professional, reliable. Your digital front door — built to establish trust and make booking easy.',
    features: [
      'Responsive single-page design',
      'Service menu with pricing',
      'Team profiles with booking links',
      'Reviews & star ratings',
      'Location with map & hours',
      'Mobile-friendly navigation',
    ],
    accent: 'border-walnut/30',
    badge: 'bg-walnut/10 text-walnut',
  },
  {
    path: '/tier8',
    label: 'Tier 8',
    name: 'The Confident Standard',
    price: '$8,000',
    description:
      'Motion, storytelling, individual stylist presence. A brand, not just a listing. This is how you stand out.',
    features: [
      'Everything in Tier 5',
      'Scroll-triggered animations',
      'Owner story & brand pillars',
      'Video-capable hero section',
      'Before & after gallery',
      'Auto-advancing review carousel',
      'Individual stylist portfolios',
      'Social proof metrics bar',
    ],
    accent: 'border-gold',
    badge: 'bg-gold/10 text-gold-dark',
    recommended: true,
  },
  {
    path: '/tier10',
    label: 'Tier 10',
    name: 'The VIP Experience',
    price: '$10,000',
    description:
      'Cinematic. Immersive. Every client is the most important person in the room from the moment they land.',
    features: [
      'Everything in Tier 8',
      'Multi-page experience',
      'Cinematic full-screen video hero',
      'Scroll-driven narrative journey',
      'Interactive stylist matcher quiz',
      'Draggable before/after slider',
      'Smooth scroll (Lenis)',
      'Micro-interactions & cursor effects',
      'Email capture with personality',
      'Individual stylist portfolio pages',
    ],
    accent: 'border-charcoal',
    badge: 'bg-charcoal text-cream',
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-cream-light">
      <header className="py-12 text-center">
        <p className="text-sm font-body uppercase tracking-[0.3em] text-walnut/60 mb-3">
          Website Concept Preview
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-charcoal-dark mb-4">
          Salon Lumiere
        </h1>
        <p className="text-walnut/80 font-body max-w-xl mx-auto px-4">
          Three levels of website design, same brand story. Click into each tier to experience the
          difference in quality, detail, and impact.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <Link
              key={tier.path}
              to={tier.path}
              className={`group relative bg-white rounded-2xl border-2 ${tier.accent} p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col`}
            >
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-charcoal-dark text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                  Recommended
                </div>
              )}

              <div className="mb-4">
                <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${tier.badge}`}>
                  {tier.label}
                </span>
              </div>

              <h2 className="font-display text-2xl text-charcoal-dark mb-1">{tier.name}</h2>
              <p className="font-display text-3xl text-gold font-semibold mb-4">{tier.price}</p>
              <p className="text-walnut/70 text-sm leading-relaxed mb-6">{tier.description}</p>

              <ul className="space-y-2 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-charcoal/80">
                    <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4 border-t border-cream-dark">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-walnut group-hover:text-gold transition-colors">
                  View Demo
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-center text-walnut/50 text-sm mt-12">
          All demos use placeholder branding ("Salon Lumiere") and stock photography.
          <br />
          Final site will feature your real photos, content, and Square booking integration.
        </p>
      </main>
    </div>
  )
}
