import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { team } from '../../data/team'
import { cn } from '../../lib/cn'
import MagneticButton from './MagneticButton'

const questions = [
  {
    question: 'What are you looking for?',
    options: [
      { label: 'Color', value: 'color' },
      { label: 'Cut', value: 'cut' },
      { label: 'Texture', value: 'texture' },
      { label: 'Extensions', value: 'extensions' },
    ],
  },
  {
    question: "What's most important to you?",
    options: [
      { label: 'Precision', value: 'precision' },
      { label: 'Creativity', value: 'creativity' },
      { label: 'Natural Beauty', value: 'natural' },
      { label: 'Volume', value: 'volume' },
    ],
  },
]

function matchStylist(answers: string[]): (typeof team)[0] {
  const [service, priority] = answers
  if (service === 'color' || priority === 'creativity') return team[1] // Maya
  if (service === 'texture' || priority === 'natural') return team[2] // James
  if (service === 'extensions' || priority === 'volume') return team[3] // Sofia
  return team[0] // Dwight
}

export default function StylistMatcher() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)
    setStep((s) => s + 1)
  }

  const reset = () => {
    setStep(0)
    setAnswers([])
  }

  const matched = step >= questions.length ? matchStylist(answers) : null

  return (
    <div className="max-w-lg mx-auto">
      <AnimatePresence mode="wait">
        {step < questions.length ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-sm font-body text-walnut-light uppercase tracking-widest mb-2">
              Step {step + 1} of {questions.length}
            </p>
            <h3 className="font-display text-3xl text-charcoal-dark mb-8">
              {questions[step].question}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {questions[step].options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleAnswer(opt.value)}
                  className={cn(
                    'py-4 px-6 rounded border-2 border-gold/30 font-body text-sm uppercase tracking-wider',
                    'hover:border-gold hover:bg-gold/10 transition-all duration-300',
                    'text-charcoal-dark'
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </motion.div>
        ) : matched ? (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-sm font-body text-gold uppercase tracking-widest mb-4">
              Your perfect match
            </p>
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6">
              <img
                src={matched.photo}
                alt={matched.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-display text-3xl text-charcoal-dark mb-2">
              {matched.name}
            </h3>
            <p className="font-body text-walnut-light mb-2">{matched.title}</p>
            <p className="font-body text-walnut mb-8">{matched.specialty}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <MagneticButton href={matched.bookingUrl}>
                Book with {matched.name.split(' ')[0]}
              </MagneticButton>
              <button
                onClick={reset}
                className="font-body text-sm text-walnut-light underline hover:text-charcoal-dark transition-colors"
              >
                Try again
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
