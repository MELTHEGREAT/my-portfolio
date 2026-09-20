import { useEffect, useRef } from 'react'
import { X, Github, ExternalLink } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  const closeBtnRef = useRef(null)

  useEffect(() => {
    closeBtnRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null
  const { title, image, technologies, features, github, demo, detail } = project

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start sm:items-center justify-center bg-ink/50 p-0 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-paper w-full sm:max-w-2xl sm:rounded-lg border border-line max-h-full sm:max-h-[85vh] overflow-y-auto thin-scroll">
        <div className="sticky top-0 bg-paper/95 backdrop-blur flex items-center justify-between px-6 py-4 border-b border-line">
          <h3 id="project-modal-title" className="font-display font-semibold text-ink">
            {title}
          </h3>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Close project details"
            className="p-1.5 text-ink-soft hover:text-ink rounded-md hover:bg-ink/5"
          >
            <X size={20} />
          </button>
        </div>

        <div className="aspect-[16/9] bg-ink/[0.04] border-b border-line overflow-hidden">
          <img
            src={image}
            alt={`${title} screenshot`}
            className="w-full h-full object-cover"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
        </div>

        <div className="p-6 space-y-6">
          <Block label="Overview" text={detail.overview} />
          <Block label="Problem" text={detail.problem} />
          <Block label="Solution" text={detail.solution} />

          <div>
            <p className="font-mono text-xs text-ink-faint mb-2">Features</p>
            <ul className="space-y-1.5">
              {features.map((f) => (
                <li key={f} className="text-sm text-ink-soft flex gap-2">
                  <span className="text-signal">—</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs text-ink-faint mb-2">Technologies</p>
            <div className="flex flex-wrap gap-1.5">
              {technologies.map((t) => (
                <span key={t} className="font-mono text-[11px] px-2 py-1 rounded border border-line text-ink-faint">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <Block label="Challenges" text={detail.challenges} />
          <Block label="What I learned" text={detail.learned} />

          <div className="flex items-center gap-4 pt-2">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium border border-line px-4 py-2 rounded-md text-ink hover:border-ink"
              >
                <Github size={16} />
                Repository
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium bg-ink text-paper px-4 py-2 rounded-md hover:bg-signal"
              >
                <ExternalLink size={16} />
                Live demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function Block({ label, text }) {
  if (!text) return null
  return (
    <div>
      <p className="font-mono text-xs text-ink-faint mb-2">{label}</p>
      <p className="text-sm text-ink-soft leading-relaxed">{text}</p>
    </div>
  )
}
