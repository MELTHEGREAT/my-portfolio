import { useState } from 'react'
import { projects, filterCategories } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import useReveal from '../hooks/useReveal'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selected, setSelected] = useState(null)
  const ref = useReveal()

  const visible =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter))

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-line">
      <div className="max-w-content mx-auto px-6">
        <p className="font-mono text-xs text-ink-faint mb-3">03 — Projects</p>
        <h2 className="font-display text-3xl font-semibold text-ink tracking-tight mb-8">
          Selected work.
        </h2>

        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter projects by category">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeFilter === cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-sm px-3.5 py-1.5 rounded-md border transition-colors ${
                activeFilter === cat
                  ? 'bg-ink text-paper border-ink'
                  : 'border-line text-ink-soft hover:border-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div ref={ref} className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} onOpenDetail={setSelected} />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-sm text-ink-faint py-12 text-center">
            No projects in this category yet.
          </p>
        )}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
