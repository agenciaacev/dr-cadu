import Hero from './components/Hero'
import About from './components/About'
import PainPoints from './components/PainPoints'
import GoldContent from './components/GoldContent'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <main className="bg-brand-dark overflow-x-hidden">
      <Hero />
      <About />
      <PainPoints />
      <GoldContent />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}

export default App
