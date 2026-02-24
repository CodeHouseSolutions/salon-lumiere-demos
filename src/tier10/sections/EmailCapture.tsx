import { useState } from 'react'
import FadeInSection from '../components/FadeInSection'
import MagneticButton from '../components/MagneticButton'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className="py-32 px-6 bg-charcoal-dark">
      <div className="max-w-2xl mx-auto text-center">
        <FadeInSection>
          <span className="font-body text-gold text-sm uppercase tracking-[0.3em] block mb-4">
            Stay Connected
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-6">
            Get the Insider Guide to Your Best Hair Year
          </h2>
          <p className="font-body text-cream/70 text-lg mb-10">
            Tips, trends, and exclusive offers delivered straight to your inbox.
            No spam, just beautiful hair content.
          </p>
        </FadeInSection>

        {submitted ? (
          <FadeInSection>
            <p className="font-display text-2xl text-gold">
              Welcome to the inner circle.
            </p>
          </FadeInSection>
        ) : (
          <FadeInSection delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-6 py-4 bg-charcoal rounded border border-cream/20 text-cream font-body placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors"
              />
              <MagneticButton
                onClick={() => {}}
                className="whitespace-nowrap"
              >
                Subscribe
              </MagneticButton>
            </form>
          </FadeInSection>
        )}
      </div>
    </section>
  )
}
