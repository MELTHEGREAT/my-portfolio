import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project, onOpenDetail }) {
  const {
    title,
    tagline,
    image,
    technologies,
    github,
    demo,
  } = project

  return (
    <article className="group border border-line rounded-lg bg-white/60 overflow-hidden flex flex-col transition-shadow hover:shadow-[0_4px_24px_-8px_rgba(20,24,28,0.12)]">

      {/* PROJECT IMAGE */}
      <div className="aspect-[16/10] bg-ink/[0.04] border-b border-line overflow-hidden relative">

        {image ? (
          <img
            src={image}
            alt={`${title} screenshot`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            onError={(e) => {
              e.currentTarget.style.display = 'none'

              const fallback = e.currentTarget.nextElementSibling

              if (fallback) {
                fallback.style.display = 'flex'
              }
            }}
          />
        ) : null}

        {/* IMAGE FALLBACK */}
        <div
          className={`${
            image ? 'hidden' : 'flex'
          } w-full h-full items-center justify-center font-mono text-xs text-ink-faint`}
        >
          preview image goes here
        </div>

      </div>

      {/* PROJECT CONTENT */}
      <div className="p-6 flex flex-col flex-1">

        <h3 className="font-display text-lg font-semibold text-ink">
          {title}
        </h3>

        <p className="mt-2 text-sm text-ink-soft leading-relaxed flex-1">
          {tagline}
        </p>

        {/* TECHNOLOGIES */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {technologies?.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] px-2 py-1 rounded border border-line text-ink-faint"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="mt-6 flex items-center gap-4 pt-4 border-t border-line">

          <button
            onClick={() => onOpenDetail(project)}
            className="text-sm font-medium text-ink hover:text-signal inline-flex items-center gap-1 transition-colors"
          >
            View details
            <ArrowUpRight size={14} />
          </button>

          <div className="ml-auto flex items-center gap-3">

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${title} GitHub repository`}
                className="text-ink-soft hover:text-ink transition-colors"
              >
                <Github size={18} />
              </a>
            )}

            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${title} live demo`}
                className="text-ink-soft hover:text-ink transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            )}

          </div>

        </div>
      </div>

    </article>
  )
}