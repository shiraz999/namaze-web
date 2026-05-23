import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Purpose from './components/sections/Purpose'
import Features from './components/sections/Features'
import Benefits from './components/sections/Benefits'
import UseCases from './components/sections/UseCases'
import FutureVision from './components/sections/FutureVision'
import CommunityLeaderCTA from './components/sections/CommunityLeaderCTA'
import DownloadQR from './components/sections/DownloadQR'
import VideoGuide from './pages/VideoGuide'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Purpose />
        <Features />
        <Benefits />
        <UseCases />
        <FutureVision />
        <DownloadQR />
        <CommunityLeaderCTA />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video-guide" element={<VideoGuide />} />
      </Routes>
    </BrowserRouter>
  )
}
