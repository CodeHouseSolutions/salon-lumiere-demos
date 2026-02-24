export interface Review {
  id: string
  name: string
  rating: number
  text: string
  service?: string
  stylist?: string
  date?: string
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Caroline M.',
    rating: 5,
    text: "Dwight has been cutting my husband's hair for over 10 years. We wouldn't go anywhere else. The attention to detail and genuine care is unmatched.",
    stylist: 'Dwight Mitchell',
    date: '2 weeks ago',
  },
  {
    id: '2',
    name: 'Priya S.',
    rating: 5,
    text: 'Maya completely transformed my hair with the most beautiful balayage. She really listened to what I wanted and delivered beyond my expectations.',
    service: 'Balayage',
    stylist: 'Maya Chen',
    date: '1 month ago',
  },
  {
    id: '3',
    name: 'David K.',
    rating: 5,
    text: "Finally found a salon that understands textured hair. James is incredibly knowledgeable and my locs have never looked better. It's clear he loves what he does.",
    service: 'Locs Maintenance',
    stylist: 'James Okafor',
    date: '3 weeks ago',
  },
  {
    id: '4',
    name: 'Rachel B.',
    rating: 5,
    text: "Sofia's blowouts are legendary. I always leave feeling like a completely different person. The whole team makes you feel welcome from the moment you walk in.",
    service: 'Blowout',
    stylist: 'Sofia Reyes',
    date: '1 week ago',
  },
  {
    id: '5',
    name: 'Thomas W.',
    rating: 5,
    text: "Best barbershop experience I've ever had. Clean, professional, and Dwight takes his time to get it perfect every single visit. Consistency is their superpower.",
    stylist: 'Dwight Mitchell',
    date: '2 months ago',
  },
  {
    id: '6',
    name: 'Aisha J.',
    rating: 4,
    text: 'Drove 45 minutes to get here and it was absolutely worth it. The vibe is warm and welcoming, and my color came out exactly how I envisioned it.',
    service: 'Color',
    stylist: 'Maya Chen',
    date: '1 month ago',
  },
  {
    id: '7',
    name: 'Michelle L.',
    rating: 5,
    text: "I've been to salons all over DC and nothing compares to Salon Lumiere. There's a level of care here that you just don't find anymore. My whole family comes here now.",
    date: '3 weeks ago',
  },
  {
    id: '8',
    name: 'Robert G.',
    rating: 5,
    text: "The extensions work Sofia did is absolutely seamless — nobody can tell they're not my natural hair. She's a true artist and makes the whole process comfortable.",
    service: 'Hand-Tied Extensions',
    stylist: 'Sofia Reyes',
    date: '2 weeks ago',
  },
]
