import { useEffect, useRef } from 'react'
import { featuredProjects, otherProjects } from '../data/projects'
import ProjectCard from './ProjectCard'
import OtherProjects from './OtherProjects'

export default function Projects() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-24 px-6 bg-[#111]/50">
      <div ref={ref} className="fade-up max-w-6xl mx-auto">
        {/* Header */}
        <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">
          Projects
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
          Things I&apos;ve built
        </h2>
        <p className="text-text-muted text-sm max-w-xl mb-12">
          A mix of full-stack apps and frontend experiments. Each one taught me something new.
        </p>

        {/* Featured grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Other projects compact list */}
        <OtherProjects projects={otherProjects} />
      </div>
    </section>
  )
}
