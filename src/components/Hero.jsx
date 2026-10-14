import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const t = setTimeout(() => el.classList.add('visible'), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient blobs */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/4 w-[480px] h-[480px] rounded-full bg-violet-700/10 blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 right-1/4 w-[360px] h-[360px] rounded-full bg-indigo-700/10 blur-[100px] pointer-events-none"
      />

      {/* Grid pattern overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div ref={ref} className="fade-up relative z-10 text-center max-w-4xl mx-auto px-6">

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 leading-[1.1]">
          Hi, I&apos;m{' '}
          <span className="gradient-text">Kanishka Devi M</span>
        </h1>

        {/* Headline */}
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-text-primary/90 mb-4">
          Full Stack Developer with solid backends
        </p>

        {/* Sub-line */}
        <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          I build chat apps, trackers and more with React, Node.js and MongoDB.
          Currently learning DSA and Python backend.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a id="hero-projects-btn" href="#projects" className="btn-accent">
            View Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a id="hero-contact-btn" href="#contact" className="btn-outline">
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30">
        <span className="text-xs text-text-muted tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-violet-500 to-transparent animate-bounce" />
      </div>
    </section>
  )
}
