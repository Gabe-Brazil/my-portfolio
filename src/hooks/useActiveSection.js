import { useEffect, useRef, useState } from 'react'

// Tracks which registered section is most visible in the viewport and
// returns its id, plus a `register` ref-callback to attach to each section.
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0])
  const elementsRef = useRef(new Map())
  const observerRef = useRef(null)

  useEffect(() => {
    const ratios = new Map()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.dataset.sectionId, entry.intersectionRatio)
        })
        let bestId = null
        let bestRatio = 0
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestId = id
          }
        })
        if (bestId) setActiveId(bestId)
      },
      { threshold: [0.15, 0.3, 0.5, 0.7, 0.9] },
    )

    elementsRef.current.forEach((el) => observerRef.current.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  const register = (id) => (el) => {
    const observer = observerRef.current
    const prev = elementsRef.current.get(id)
    if (prev && observer) observer.unobserve(prev)

    if (el) {
      el.dataset.sectionId = id
      elementsRef.current.set(id, el)
      observer?.observe(el)
    } else {
      elementsRef.current.delete(id)
    }
  }

  return { activeId, register }
}
