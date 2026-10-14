import { useEffect, useRef } from 'react'

const skills = [
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'Tailwind CSS',
  'Java',
  'Python basics',
  'DSA (learning)',
  'Python backend (learning)',
]

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="fade-up max-w-5xl mx-auto">
        {/* Section label */}
        <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">
          About Me
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-10">
          Who I am
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="glass-card rounded-2xl p-8">
            <p className="text-text-muted leading-relaxed text-[0.95rem]">
              I&apos;m Kanishka Devi M, an engineering student who builds full-stack web apps.
              I started with frontend in my second semester and moved on to full-stack projects
              using React, Node.js, Express, MongoDB and Tailwind CSS, including chat apps,
              a meal tracker and an expense tracker. I enjoy the backend side most: APIs,
              authentication and databases. Right now I&apos;m learning DSA and Python backend,
              and I&apos;m looking for an internship where I can build real products and keep learning.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-5">Tech I work with</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 rounded-full text-sm font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20 hover:bg-violet-500/20 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
