import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Purpose from './components/sections/Purpose'
import Features from './components/sections/Features'
import Benefits from './components/sections/Benefits'
import UseCases from './components/sections/UseCases'
import FutureVision from './components/sections/FutureVision'
import CommunityLeaderCTA from './components/sections/CommunityLeaderCTA'

export default function App() {
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
        <CommunityLeaderCTA />
      </main>
      <Footer />
    </>
  )
}
