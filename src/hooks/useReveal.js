import { useEffect, useRef } from 'react'

/**
 * Adds the `.is-visible` class to the returned ref's element the first time
 * it scrolls into view, triggering the `.reveal` CSS transition defined in
 * index.css. Attach the ref to any element with className="reveal".
 */
export default function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('is-visible')
        observer.unobserve(node)
      }
    }, options)

    observer.observe(node)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ref
}
