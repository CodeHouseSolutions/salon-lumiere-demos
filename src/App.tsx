import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './landing/LandingPage'

const Tier5App = lazy(() => import('./tier5/Tier5App'))
const Tier8App = lazy(() => import('./tier8/Tier8App'))
const Tier10App = lazy(() => import('./tier10/Tier10App'))

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-2 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="font-display text-xl text-walnut">Loading...</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tier5" element={<Tier5App />} />
        <Route path="/tier8" element={<Tier8App />} />
        <Route path="/tier10/*" element={<Tier10App />} />
      </Routes>
    </Suspense>
  )
}
