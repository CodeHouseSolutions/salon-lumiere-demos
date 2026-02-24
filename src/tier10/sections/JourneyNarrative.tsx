import { salonPhotos } from '../../data/gallery'
import JourneyStep from './JourneyStep'

const steps = [
  {
    title: 'Welcome',
    description:
      'The moment you step through the door, you feel it. The calm. The warmth. A quiet confidence that says: you belong here. We greet you by name, offer you something to drink, and let you settle in.',
    imageUrl: salonPhotos.exterior,
  },
  {
    title: 'Consultation',
    description:
      'This is where the magic starts. We listen -- really listen. Your stylist sits with you, understands your lifestyle, your hair history, and your vision. No rush. No assumptions. Just genuine conversation.',
    imageUrl: salonPhotos.details.chair,
  },
  {
    title: 'The Craft',
    description:
      'Every cut, every color, every texture is a deliberate act of artistry. Our stylists bring decades of combined experience and a shared obsession with precision. You can feel the difference in every detail.',
    imageUrl: salonPhotos.details.tools,
  },
  {
    title: 'The Reveal',
    description:
      'That moment in the mirror when it all comes together. When you see yourself the way we see you. This is the moment we live for, and the one you will carry with you long after you leave.',
    imageUrl: salonPhotos.interior,
  },
  {
    title: 'You, Elevated',
    description:
      'You walk out different. Not because we changed who you are, but because we helped you see what was always there. Confidence is not something we give you. It is something we reveal.',
    imageUrl: salonPhotos.town,
  },
]

export default function JourneyNarrative() {
  return (
    <div className="bg-cream">
      {steps.map((step, i) => (
        <JourneyStep
          key={step.title}
          title={step.title}
          description={step.description}
          imageUrl={step.imageUrl}
          index={i}
        />
      ))}
    </div>
  )
}
