import { motion } from 'framer-motion'
import { useActiveSection } from './hooks/useActiveSection'
import { getSectionTheme, SECTIONS } from './data/theme'
import ScrollProgress from './components/ScrollProgress'
import SectionNav from './components/SectionNav'
import EagleScoutBadge from './components/EagleScoutBadge'
import Hero from './components/Hero'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

const SECTION_IDS = SECTIONS.map((s) => s.id)

export default function App() {
  const { activeId, register } = useActiveSection(SECTION_IDS)
  const theme = getSectionTheme(activeId)

  return (
    <>
      <motion.div
        className="theme-backdrop"
        animate={{ background: theme.bgGradient }}
        transition={{ duration: 0.9, ease: 'easeInOut' }}
      />

      <ScrollProgress color={theme.accent} />
      <SectionNav activeId={activeId} accent={theme.accent} />
      <EagleScoutBadge />

      <main className="page">
        <Hero register={register} accent={theme.accent} accentSoft={theme.accentSoft} />
        <Education
          register={register}
          accent={getSectionTheme('education').accent}
          accentSoft={getSectionTheme('education').accentSoft}
        />
        <Projects register={register} accent={getSectionTheme('projects').accent} />
        <Contact
          register={register}
          accent={getSectionTheme('contact').accent}
          accentSoft={getSectionTheme('contact').accentSoft}
        />
      </main>
    </>
  )
}
