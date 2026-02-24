import { Routes, Route } from 'react-router-dom'
import SmoothScroll from './components/SmoothScroll'
import CursorFollower from './components/CursorFollower'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Philosophy from './pages/Philosophy'
import TeamPage from './pages/TeamPage'
import StylistDetail from './pages/StylistDetail'

export default function Tier10App() {
  return (
    <SmoothScroll>
      <CursorFollower />
      <ScrollProgress />
      <Navbar />
      <main className="bg-cream min-h-screen">
        <Routes>
          <Route index element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="philosophy" element={<Philosophy />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="team/:id" element={<StylistDetail />} />
        </Routes>
      </main>
    </SmoothScroll>
  )
}
