import useReveal from '../hooks/useReveal'

const skillGroups = [
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'PHP'],
  },
  {
    category: 'Database',
    items: ['MySQL'],
  },
  {
    category: 'Programming',
    items: ['JavaScript', 'Python', 'C++'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Canva', 'Microsoft 365', 'Google Workspace'],
  },
  {
    category: 'IT',
    items: [
      'Technical Support',
      'PC Troubleshooting',
      'Network Troubleshooting',
      'Hardware/Software Maintenance',
    ],
  },
]

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-line">
      <div className="max-w-content mx-auto px-6">
        <p className="font-mono text-xs text-ink-faint mb-3">02 — Skills</p>
        <h2 className="font-display text-3xl font-semibold text-ink tracking-tight mb-12">
          What I work with.
        </h2>

        <div ref={ref} className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-lg overflow-hidden">
          {skillGroups.map((group) => (
            <div key={group.category} className="bg-white/60 p-6">
              <h3 className="font-display font-semibold text-ink mb-4">{group.category}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-ink-soft flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-signal shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
