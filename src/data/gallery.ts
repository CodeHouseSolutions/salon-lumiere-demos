export interface GalleryImage {
  id: string
  url: string
  alt: string
  category: string
  stylist?: string
}

export const galleryImages: GalleryImage[] = [
  { id: 'g1', url: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&h=600&fit=crop', alt: 'Balayage hair coloring', category: 'color', stylist: 'maya' },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=600&fit=crop', alt: 'Precision men\'s haircut', category: 'cuts', stylist: 'dwight' },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1595959183082-7b570b7e1e51?w=800&h=600&fit=crop', alt: 'Natural hair styling', category: 'texture', stylist: 'james' },
  { id: 'g4', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop', alt: 'Blowout styling', category: 'styling', stylist: 'sofia' },
  { id: 'g5', url: 'https://images.unsplash.com/photo-1605980776566-0486c3b394f2?w=800&h=600&fit=crop', alt: 'Creative color work', category: 'color', stylist: 'maya' },
  { id: 'g6', url: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=600&fit=crop', alt: 'Classic men\'s style', category: 'cuts', stylist: 'dwight' },
  { id: 'g7', url: 'https://images.unsplash.com/photo-1580501170888-80668882ca0c?w=800&h=600&fit=crop', alt: 'Textured curls', category: 'texture', stylist: 'james' },
  { id: 'g8', url: 'https://images.unsplash.com/photo-1554519515-242161756769?w=800&h=600&fit=crop', alt: 'Hair extensions', category: 'extensions', stylist: 'sofia' },
  { id: 'g9', url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&h=600&fit=crop', alt: 'Highlights and dimension', category: 'color', stylist: 'maya' },
  { id: 'g10', url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=600&fit=crop', alt: 'Fade haircut', category: 'cuts', stylist: 'dwight' },
  { id: 'g11', url: 'https://images.unsplash.com/photo-1636208615683-5cd21e24bceb?w=800&h=600&fit=crop', alt: 'Protective styling', category: 'texture', stylist: 'james' },
  { id: 'g12', url: 'https://images.unsplash.com/photo-1617896848219-5ec29577cc26?w=800&h=600&fit=crop', alt: 'Volume blowout', category: 'styling', stylist: 'sofia' },
]

export const salonPhotos = {
  interior: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1600&h=900&fit=crop',
  interiorWide: 'https://images.unsplash.com/photo-1633681926035-ec1ac984418a?w=1920&h=1080&fit=crop',
  exterior: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=800&fit=crop',
  details: {
    tools: 'https://images.unsplash.com/photo-1585747860186-6faab436f8cc?w=800&h=600&fit=crop',
    chair: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=600&fit=crop',
    products: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?w=800&h=600&fit=crop',
  },
  town: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=800&fit=crop',
  heroVideo: 'https://videos.pexels.com/video-files/3993070/3993070-uhd_2560_1440_25fps.mp4',
}

export const beforeAfterPairs = [
  {
    id: 'ba1',
    before: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&h=800&fit=crop',
    after: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=800&fit=crop',
    description: 'Full balayage transformation',
    stylist: 'maya',
  },
  {
    id: 'ba2',
    before: 'https://images.unsplash.com/photo-1580501170888-80668882ca0c?w=600&h=800&fit=crop',
    after: 'https://images.unsplash.com/photo-1595959183082-7b570b7e1e51?w=600&h=800&fit=crop',
    description: 'Natural curl definition',
    stylist: 'james',
  },
  {
    id: 'ba3',
    before: 'https://images.unsplash.com/photo-1554519515-242161756769?w=600&h=800&fit=crop',
    after: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=800&fit=crop',
    description: 'Volume and length with extensions',
    stylist: 'sofia',
  },
]
