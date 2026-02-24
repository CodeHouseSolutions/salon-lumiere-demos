export interface Service {
  name: string
  price: string
  description?: string
}

export interface ServiceCategory {
  id: string
  name: string
  icon: string
  services: Service[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'cuts',
    name: 'Cuts & Styling',
    icon: '✂️',
    services: [
      { name: "Women's Haircut", price: '$65+', description: 'Includes consultation, shampoo & style' },
      { name: "Men's Haircut", price: '$40+', description: 'Precision cut with hot towel finish' },
      { name: "Children's Cut", price: '$30+', description: 'Ages 12 and under' },
      { name: 'Blowout & Style', price: '$55+', description: 'Shampoo, blow dry & style' },
      { name: 'Special Occasion Style', price: '$85+', description: 'Updos, braids & event styling' },
    ],
  },
  {
    id: 'color',
    name: 'Color Services',
    icon: '🎨',
    services: [
      { name: 'Single Process Color', price: '$95+', description: 'All-over color application' },
      { name: 'Balayage / Highlights', price: '$150+', description: 'Hand-painted or foil highlights' },
      { name: 'Full Highlight', price: '$175+', description: 'Full head of foils' },
      { name: 'Color Correction', price: '$200+', description: 'Multi-step correction — consultation required' },
      { name: 'Gloss Treatment', price: '$45+', description: 'Shine-boosting tonal refresh' },
    ],
  },
  {
    id: 'texture',
    name: 'Texture & Natural Hair',
    icon: '🌀',
    services: [
      { name: 'Natural Hair Styling', price: '$75+', description: 'Twist-outs, wash & go, defined curls' },
      { name: 'Protective Styles', price: '$120+', description: 'Braids, locs maintenance, silk press' },
      { name: 'Keratin Treatment', price: '$250+', description: 'Smoothing treatment — lasts 3-4 months' },
      { name: 'Deep Conditioning', price: '$40+', description: 'Intensive moisture & repair treatment' },
    ],
  },
  {
    id: 'extensions',
    name: 'Extensions',
    icon: '💫',
    services: [
      { name: 'Tape-In Extensions', price: '$350+', description: 'Seamless, natural-looking volume & length' },
      { name: 'Hand-Tied Extensions', price: '$500+', description: 'Premium method for finest blend' },
      { name: 'Extension Maintenance', price: '$150+', description: 'Move-up & refresh appointment' },
    ],
  },
]
