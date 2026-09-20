import { Award } from 'lucide-react'
import useReveal from '../hooks/useReveal'

export default function Education() {
  const ref = useReveal()

  return (
    <section id="education" className="py-20 md:py-28 border-t border-line">
      <div className="max-w-content mx-auto px-6">
        <p className="font-mono text-xs text-ink-faint mb-3">05 — Education</p>
        <h2 className="font-display text-3xl font-semibold text-ink tracking-tight mb-10">
          Academic background.
        </h2>

        <div ref={ref} className="reveal border border-line rounded-lg bg-white/60 p-6 sm:p-8 max-w-prose">
          <p className="font-mono text-xs text-signal mb-2">Bachelor's Degree</p>
          <h3 className="font-display text-xl font-semibold text-ink">
            Information Technology
          </h3>
          <p className="text-ink-soft mt-1">
            Polytechnic University of the Philippines — Unisan, Quezon
          </p>

          <div className="mt-6 pt-6 border-t border-line">
            <p className="font-mono text-xs text-ink-faint mb-3">Awards</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-ink-soft">
                <Award size={16} className="text-amber shrink-0" />
                Best in Capstone
              </li>
              <li className="flex items-center gap-2 text-sm text-ink-soft">
                <Award size={16} className="text-amber shrink-0" />
                Best in OJT
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
