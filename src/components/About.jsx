import useReveal from '../hooks/useReveal'

const focusAreas = [
  'Technical Support',
  'Web Development',
  'Frontend Development',
  'Backend Development',
  'Database Management',
  'Basic Networking',
  'Business & Admin Tools',
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="py-20 md:py-28 border-t border-line">
      <div className="max-w-content mx-auto px-6">
        <div ref={ref} className="reveal grid md:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-16">
          <div>
            <p className="font-mono text-xs text-ink-faint mb-3">01 — About</p>
            <h2 className="font-display text-3xl font-semibold text-ink tracking-tight">
              A support background that shapes how I build.
            </h2>
          </div>

          <div className="space-y-6 text-ink-soft leading-relaxed">
            <p>
              I graduated with a Bachelor's degree in Information Technology from the
              Polytechnic University of the Philippines, and currently work as a Technical
              Support Specialist. Day to day, that means diagnosing connectivity issues,
              troubleshooting hardware and software problems, and helping customers
              understand fixes in plain language.
            </p>
            <p>
              Outside of support work, I build web applications — mainly with React on the
              frontend and Node.js or PHP on the backend, backed by MySQL. My capstone
              project was a full kiosk ordering system with an analytics dashboard, which is
              where most of my database and full-stack experience comes from.
            </p>
            <p>
              I'm not a senior developer, and I don't present myself as one. What I bring is
              a practical, troubleshooting mindset — the same one I use to resolve a support
              ticket — applied to writing and debugging code.
            </p>

            <div className="pt-2">
              <p className="font-mono text-xs text-ink-faint mb-3">Areas I work with</p>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="text-sm px-3 py-1.5 rounded-md border border-line text-ink-soft"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
