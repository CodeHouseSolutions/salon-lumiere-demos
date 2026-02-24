import { cn } from '../../lib/cn'
import ImageReveal from '../components/ImageReveal'
import FadeInSection from '../components/FadeInSection'

interface JourneyStepProps {
  title: string
  description: string
  imageUrl: string
  index: number
}

export default function JourneyStep({ title, description, imageUrl, index }: JourneyStepProps) {
  const isEven = index % 2 === 0

  return (
    <section className="min-h-screen flex items-center py-20 px-6">
      <div
        className={cn(
          'max-w-7xl mx-auto grid gap-12 lg:gap-20 items-center',
          'grid-cols-1 lg:grid-cols-2',
          isEven ? '' : 'lg:direction-rtl'
        )}
      >
        <div className={cn('space-y-6', isEven ? 'lg:order-1' : 'lg:order-2')}>
          <FadeInSection>
            <span className="font-body text-gold text-sm uppercase tracking-[0.3em]">
              Act {index + 1}
            </span>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal-dark">
              {title}
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="font-body text-walnut text-lg leading-relaxed max-w-lg">
              {description}
            </p>
          </FadeInSection>
        </div>
        <div className={cn(isEven ? 'lg:order-2' : 'lg:order-1')}>
          <ImageReveal
            src={imageUrl}
            alt={title}
            className="aspect-[4/5] rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
