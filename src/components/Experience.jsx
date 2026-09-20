import useReveal from '../hooks/useReveal'

const timeline = [
  {
    role: 'Technical Support Specialist',
    period: 'Current',
    points: [
      'Troubleshooting networking and connectivity issues for customers',
      'Diagnosing hardware, software, and network-related problems',
      'Following structured, step-by-step troubleshooting procedures',
      'Communicating technical solutions in plain, non-technical language',
    ],
  },
  {
    role: 'On-the-Job Training (OJT)',
    period: 'During BS Information Technology',
    points: [
      'Applied classroom IT knowledge in a real work environment',
      'Assisted with day-to-day technical and administrative tasks',
      'Built foundational experience in troubleshooting and support workflows',
      'Recognized with a "Best in OJT" award on completion',
    ],
  },
]

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" className="py-20 md:py-28 border-t border-line">
      <div className="max-w-content mx-auto px-6">
        <p className="font-mono text-xs text-ink-faint mb-3">04 — Experience</p>
        <h2 className="font-display text-3xl font-semibold text-ink tracking-tight mb-12">
          Where I've worked.
        </h2>

        <div ref={ref} className="reveal max-w-prose">
          <ol className="relative border-l border-line pl-8 space-y-12">
            {timeline.map((item) => (
              <li key={item.role} className="relative">
                <span className="absolute -left-[calc(2rem+4.5px)] top-1.5 w-2.5 h-2.5 rounded-full bg-signal ring-4 ring-signal-dim" />
                <p className="font-mono text-xs text-ink-faint mb-1">{item.period}</p>
                <h3 className="font-display text-lg font-semibold text-ink mb-3">{item.role}</h3>
                <ul className="space-y-1.5">
                  {item.points.map((p) => (
                    <li key={p} className="text-sm text-ink-soft flex gap-2">
                      <span className="text-signal">—</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
