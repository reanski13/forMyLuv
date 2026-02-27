import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Story from './components/Story'
import Counter from './components/Counter'
import MemoryBoard from './components/MemoryBoard'
import Footer from './components/Footer'


function App() {
  return (
    <div className="min-h-screen bg-cream text-gray-800 overflow-x-hidden">
      <Hero />
      <Story />
      <Counter />
      <MemoryBoard />
      <Footer />
    </div>
  )
}

export default App
