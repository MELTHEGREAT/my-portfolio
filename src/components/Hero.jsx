import { useState, useEffect } from 'react'
import { ArrowRight, Mail } from 'lucide-react'

const words = ['systems', 'websites', 'workflows', 'teams']

const devNodes = [
  { label: 'Frontend', detail: 'React, JavaScript' },
  { label: 'Backend', detail: 'Node.js, PHP' },
  { label: 'Database', detail: 'MySQL' },
  { label: 'IT Support', detail: 'Networking, hardware' },
]

const opsNodes = [
  { label: 'Scheduling', detail: 'Google Calendar, Sheets' },
  { label: 'Comms', detail: 'Gmail, Meta Business' },
  { label: 'Design', detail: 'Canva, file organization' },
  { label: 'Storefront ops', detail: 'Enstack, TikTok affiliate' },
]

function useWordCycle(list, interval = 2200) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % list.length)
    }, interval)
    return () => clearInterval(id)
  }, [list, interval])

  return list[index]
}

export default function Hero() {
  const word = useWordCycle(words)
  const [tab, setTab] = useState('dev')
  const nodes = tab === 'dev' ? devNodes : opsNodes

  return (
    <section id="top" className="pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="max-w-content mx-auto px-6 grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div>
          <p className="font-mono text-sm text-signal mb-5">Metro Manila, Philippines</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-[3.4rem] leading-[1.08] font-semibold text-ink tracking-tight">
            Normel Almagro builds and supports the{' '}
            <span className="relative inline-block text-signal">
              {word}
            </span>{' '}
            people rely on every day.
          </h1>
          <p className="mt-6 text-lg text-ink-soft max-w-prose leading-relaxed">
            IT graduate and Technical Support Specialist who also builds web applications —
            from React interfaces to the databases and APIs behind them. Comfortable moving
            between a support ticket and a codebase in the same afternoon.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 text-sm font-medium rounded-md
                         transition-all duration-200 hover:bg-signal hover:-translate-y-0.5 hover:shadow-lg
                         hover:shadow-signal/20"
            >
              View my work
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 border border-line px-5 py-3 text-sm font-medium rounded-md
                         text-ink transition-all duration-200 hover:border-signal hover:text-signal
                         hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Contact me
            </button>
          </div>
        </div>

        {/* Visual element: a switchable "status panel" — dev stack vs. digital ops,
            so the same card speaks to either a dev-hiring or VA-hiring reader */}
        <div className="border border-line rounded-lg bg-white/60 overflow-hidden font-mono text-sm">
          <div className="h-[3px] bg-signal/70" />
          <div className="p-5">
            <div className="flex items-center justify-between pb-4 border-b border-line">
              <div className="flex gap-1 bg-paper rounded-full p-1 -ml-1">
                <button
                  onClick={() => setTab('dev')}
                  className={`px-3 py-1 rounded-full text-xs transition-colors ${
                    tab === 'dev' ? 'bg-white shadow-sm text-ink' : 'text-ink-faint hover:text-ink-soft'
                  }`}
                >
                  dev_stack
                </button>
                <button
                  onClick={() => setTab('ops')}
                  className={`px-3 py-1 rounded-full text-xs transition-colors ${
                    tab === 'ops' ? 'bg-white shadow-sm text-ink' : 'text-ink-faint hover:text-ink-soft'
                  }`}
                >
                  digital_ops
                </button>
              </div>
              <span className="flex items-center gap-1.5 text-signal text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
                active
              </span>
            </div>
            <ul className="mt-4 space-y-3">
              {nodes.map((node, i) => (
                <li key={node.label} className="flex items-start gap-3">
                  <span className="text-signal pt-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <span className="w-px self-stretch bg-line" />
                  <div>
                    <p className="text-ink">{node.label}</p>
                    <p className="text-ink-faint text-xs mt-0.5">{node.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}