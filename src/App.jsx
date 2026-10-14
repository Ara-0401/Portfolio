import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="bg-surface-dark text-text-primary font-sans antialiased">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="text-center py-8 text-text-muted text-sm border-t border-white/5">
        <p>Designed &amp; built by Kanishka Devi M · {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
