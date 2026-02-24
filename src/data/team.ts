export interface Stylist {
  id: string
  name: string
  title: string
  specialty: string
  bio: string
  shortBio: string
  photo: string
  galleryPhotos: string[]
  bookingUrl: string
  yearsExperience: number
  instagram?: string
}

export const team: Stylist[] = [
  {
    id: 'dwight',
    name: 'Dwight Mitchell',
    title: 'Owner & Master Barber',
    specialty: 'Precision Cuts & Classic Styles',
    bio: "With 25 years behind the chair, Dwight built Salon Lumiere on a simple belief: every person who walks through the door deserves to feel like the most important person in the room. His precision cuts and timeless styles have made him a trusted name across Loudoun County. Dwight's philosophy is rooted in consistency — the idea that great work isn't a one-time event, but a promise you keep every single visit.",
    shortBio: '25 years of precision cuts and the vision behind Salon Lumiere.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face',
    galleryPhotos: [
      'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=800&h=600&fit=crop',
    ],
    bookingUrl: 'https://square.site/book/DEMO-DWIGHT',
    yearsExperience: 25,
    instagram: 'https://instagram.com/dwightcuts',
  },
  {
    id: 'maya',
    name: 'Maya Chen',
    title: 'Senior Colorist',
    specialty: 'Balayage & Vivid Color',
    bio: "Maya's eye for color is unmatched. Trained in Los Angeles and New York, she brings a fashion-forward approach to Middleburg while keeping things wearable and personal. Whether it's a sun-kissed balayage or a bold creative color, Maya tailors every formula to complement your skin tone and lifestyle. Her clients don't just leave with great hair — they leave feeling seen.",
    shortBio: 'Fashion-forward color tailored to your unique beauty.',
    photo: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=600&fit=crop&crop=face',
    galleryPhotos: [
      'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1605980776566-0486c3b394f2?w=800&h=600&fit=crop',
    ],
    bookingUrl: 'https://square.site/book/DEMO-MAYA',
    yearsExperience: 12,
    instagram: 'https://instagram.com/mayacolors',
  },
  {
    id: 'james',
    name: 'James Okafor',
    title: 'Style Director',
    specialty: 'Natural Hair & Textured Styles',
    bio: "James is a natural hair specialist who believes texture is a gift, not a problem to solve. With over 15 years of experience, he's become the go-to stylist for protective styles, locs, twist-outs, and everything in between. James's approach is education-first — he wants you to understand and love your hair as much as he does. His chair is where transformation meets self-acceptance.",
    shortBio: 'Celebrating natural texture with expertise and care.',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=600&fit=crop&crop=face',
    galleryPhotos: [
      'https://images.unsplash.com/photo-1595959183082-7b570b7e1e51?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1580501170888-80668882ca0c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1636208615683-5cd21e24bceb?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&h=600&fit=crop',
    ],
    bookingUrl: 'https://square.site/book/DEMO-JAMES',
    yearsExperience: 15,
    instagram: 'https://instagram.com/jamesstyles',
  },
  {
    id: 'sofia',
    name: 'Sofia Reyes',
    title: 'Stylist & Extensions Specialist',
    specialty: 'Blowouts & Hair Extensions',
    bio: "Sofia brings warmth and energy to every appointment. Known for her flawless blowouts and seamless extensions work, she has a talent for making clients feel instantly at ease. Sofia trained in Miami's top salons before joining Salon Lumiere, and she brings that vibrant, detail-obsessed energy to the Virginia countryside. Her specialty? Making you feel like you just stepped off a magazine cover.",
    shortBio: 'Flawless blowouts and seamless extensions with Miami flair.',
    photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=600&fit=crop&crop=face',
    galleryPhotos: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1554519515-242161756769?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1617896848219-5ec29577cc26?w=800&h=600&fit=crop',
    ],
    bookingUrl: 'https://square.site/book/DEMO-SOFIA',
    yearsExperience: 8,
    instagram: 'https://instagram.com/sofiahair',
  },
]

export const owner = team[0]
