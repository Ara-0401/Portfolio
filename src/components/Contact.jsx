import { useEffect, useRef } from 'react'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

export default function Contact() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="py-24 px-6">
      <div ref={ref} className="fade-up max-w-3xl mx-auto text-center">
        {/* Label */}
        <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">
          Contact
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
          Get in touch
        </h2>
        <p className="text-text-muted text-base max-w-lg mx-auto mb-12 leading-relaxed">
          I&apos;m actively looking for internship opportunities. If you have a role or just want to chat, feel free to reach out.
        </p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {/* Email */}
          <a
            id="contact-email"
            href="mailto:kanishkadevi0401@gmail.com"
            className="glass-card rounded-2xl p-6 flex items-center gap-4 group hover:border-violet-500/30 hover:-translate-y-1 transition-all duration-300 text-left"
          >
            <span className="w-10 h-10 rounded-xl bg-violet-500/15 flex items-center justify-center text-violet-400 group-hover:bg-violet-500/25 transition-colors duration-200 shrink-0">
              <MailIcon />
            </span>
            <div>
              <p className="text-xs text-text-muted mb-1 font-medium uppercase tracking-wide">Email</p>
              <p className="text-text-primary text-sm font-semibold break-all group-hover:text-violet-300 transition-colors duration-200">
                kanishkadevi0401@gmail.com
              </p>
            </div>
          </a>

          {/* GitHub */}
          <a
            id="contact-github"
            href="https://github.com/Ara-0401"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-6 flex items-center gap-4 group hover:border-violet-500/30 hover:-translate-y-1 transition-all duration-300 text-left"
          >
            <span className="w-10 h-10 rounded-xl bg-violet-500/15 flex items-center justify-center text-violet-400 group-hover:bg-violet-500/25 transition-colors duration-200 shrink-0">
              <GithubIcon />
            </span>
            <div>
              <p className="text-xs text-text-muted mb-1 font-medium uppercase tracking-wide">GitHub</p>
              <p className="text-text-primary text-sm font-semibold group-hover:text-violet-300 transition-colors duration-200">
                github.com/Ara-0401
              </p>
            </div>
          </a>
        </div>


      </div>
    </section>
  )
}
