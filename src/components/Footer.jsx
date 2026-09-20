export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="max-w-content mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-ink-faint">
        <p>&copy; {new Date().getFullYear()} Normel Almagro.</p>
        <p className="font-mono text-xs">Built with React, Vite &amp; Tailwind CSS.</p>
      </div>
    </footer>
  )
}
