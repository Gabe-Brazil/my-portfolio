import { SECTIONS } from '../data/theme'

export default function SectionNav({ activeId, accent }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="section-nav" aria-label="Section navigation">
      {SECTIONS.map((section) => {
        const isActive = section.id === activeId
        return (
          <button
            key={section.id}
            type="button"
            className={`section-nav__dot${isActive ? ' is-active' : ''}`}
            style={{
              borderColor: isActive ? accent : undefined,
              color: isActive ? accent : undefined,
            }}
            onClick={() => scrollTo(section.id)}
            aria-current={isActive}
          >
            <span
              className="section-nav__bullet"
              style={{ backgroundColor: isActive ? accent : undefined }}
            />
            <span className="section-nav__label">{section.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
