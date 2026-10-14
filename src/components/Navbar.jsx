import { useState, useEffect } from 'react'

const links = [
  { label: 'Home',     href: '#home'     },
  { label: 'About',    href: '#about'    },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0d0d0d]/90 backdrop-blur-md border-b border-white/5 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-lg font-bold gradient-text tracking-tight">
          KD.
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-text-muted text-sm font-medium hover:text-white transition-colors duration-200 relative group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-violet-500 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          id="nav-menu-toggle"
          className="md:hidden flex flex-col gap-1.5 p-1 group"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span className={`block h-0.5 bg-text-muted transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
          <span className={`block h-0.5 bg-text-muted transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : 'w-5'}`} />
          <span className={`block h-0.5 bg-text-muted transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-4'}`} />
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } bg-[#0d0d0d]/95 backdrop-blur-md border-b border-white/5`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={handleNavClick}
                className="text-text-muted text-sm font-medium hover:text-white transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
