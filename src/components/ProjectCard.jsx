import { motion } from 'framer-motion'
import { PlayCircle, ExternalLink } from 'lucide-react'
import { PALETTE } from '../data/theme'
import { GithubIcon } from './icons/BrandIcons'

const ACCENT_COLORS = {
  turquoise: PALETTE.turquoise,
  gold: PALETTE.gold,
  silver: PALETTE.silver,
}

export default function ProjectCard({ project, index, onPlay }) {
  const accent = ACCENT_COLORS[project.accent] ?? PALETTE.turquoise
  const hasVideo = Boolean(project.video?.src)

  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      style={{ '--card-accent': accent, borderColor: `${accent}40` }}
    >
      <button
        type="button"
        className="project-card__media"
        onClick={() => onPlay(project)}
        aria-label={`Play demo video for ${project.title}`}
      >
        <span className="project-card__media-glow" style={{ background: accent }} />
        <PlayCircle size={hasVideo ? 46 : 34} strokeWidth={1.5} />
        <span className="project-card__media-label">
          {hasVideo ? 'Watch demo' : 'Video coming soon'}
        </span>
      </button>

      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p className="project-card__tagline" style={{ color: accent }}>
          {project.tagline}
        </p>
        <p className="project-card__description">{project.description}</p>

        <ul className="project-card__tags">
          {project.tags.map((tag) => (
            <li key={tag} style={{ borderColor: `${accent}55`, color: accent }}>
              {tag}
            </li>
          ))}
        </ul>

        <div className="project-card__links">
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noreferrer">
              <GithubIcon size={16} /> Code
            </a>
          )}
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noreferrer">
              <ExternalLink size={16} /> Live
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
