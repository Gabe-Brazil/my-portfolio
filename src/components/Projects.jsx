import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/portfolio'
import ProjectCard from './ProjectCard'
import VideoModal from './VideoModal'

export default function Projects({ register, accent }) {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="projects" ref={register('projects')} className="section projects">
      <motion.h2
        className="section__heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <span className="section__heading-bar" style={{ backgroundColor: accent }} />
        Projects
      </motion.h2>
      <p className="projects__intro">
        A selection of work spanning software engineering and applied economics
        &mdash; click a project to watch a walkthrough.
      </p>

      <div className="project-grid">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            onPlay={setActiveProject}
          />
        ))}
      </div>

      <VideoModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        accent={accent}
      />
    </section>
  )
}
