import { useState } from 'react'
import { Mail, Github, Linkedin, Send } from 'lucide-react'
import useReveal from '../hooks/useReveal'

const EMAIL = 'almagronormel.12@gmail.com'
const GITHUB = 'https://github.com/MELTHEGREAT'
const LINKEDIN = 'https://linkedin.com/in/normel-almagro-7370522bb'

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-line">
      <div className="max-w-content mx-auto px-6">
        <div ref={ref} className="reveal grid md:grid-cols-2 gap-14">
          <div>
            <p className="font-mono text-xs text-ink-faint mb-3">06 — Contact</p>
            <h2 className="font-display text-3xl font-semibold text-ink tracking-tight mb-5">
              Let's talk.
            </h2>
            <p className="text-ink-soft leading-relaxed max-w-prose mb-8">
              Open to frontend, full-stack, or IT support roles. The fastest way to reach me
              is email — I check it daily.
            </p>

            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-3 text-ink-soft hover:text-signal"
                >
                  <Mail size={18} />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-ink-soft hover:text-signal"
                >
                  <Github size={18} />
                  github.com/MELTHEGREAT
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-ink-soft hover:text-signal"
                >
                  <Linkedin size={18} />
                  linkedin.com/in/normel-almagro
                </a>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border border-line rounded-md px-3.5 py-2.5 bg-white/60 text-ink placeholder:text-ink-faint focus:border-signal outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border border-line rounded-md px-3.5 py-2.5 bg-white/60 text-ink placeholder:text-ink-faint focus:border-signal outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={form.message}
                onChange={handleChange}
                className="w-full border border-line rounded-md px-3.5 py-2.5 bg-white/60 text-ink placeholder:text-ink-faint focus:border-signal outline-none resize-none"
                placeholder="What would you like to talk about?"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-2.5 text-sm font-medium rounded-md hover:bg-signal transition-colors"
            >
              <Send size={16} />
              Send message
            </button>
            <p className="text-xs text-ink-faint pt-1">
              This opens your email client with the message pre-filled — no data is stored.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
