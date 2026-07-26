import { motion } from 'framer-motion'
import { Download, Mail, ChevronDown } from 'lucide-react'
import { profile } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
}

export default function Hero({ register, accent, accentSoft }) {
  return (
    <section id="profile" ref={register('profile')} className="section hero">
      <div className="hero__content">
        <motion.div
          className="hero__photo-wrap"
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          style={{ boxShadow: `0 0 0 3px ${accent}55, 0 20px 60px -20px ${accent}66` }}
        >
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            className="hero__photo"
          />
        </motion.div>

        <motion.p
          className="hero__eyebrow"
          initial="hidden"
          animate="show"
          custom={0.1}
          variants={fadeUp}
          style={{ color: accentSoft }}
        >
          {profile.tagline}
        </motion.p>

        <motion.h1
          className="hero__name"
          initial="hidden"
          animate="show"
          custom={0.18}
          variants={fadeUp}
        >
          {profile.name}
        </motion.h1>

        <motion.p
          className="hero__university"
          initial="hidden"
          animate="show"
          custom={0.26}
          variants={fadeUp}
        >
          {profile.university} &middot; {profile.location}
        </motion.p>

        <motion.p
          className="hero__bio"
          initial="hidden"
          animate="show"
          custom={0.34}
          variants={fadeUp}
        >
          {profile.bio}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial="hidden"
          animate="show"
          custom={0.42}
          variants={fadeUp}
        >
          <a
            href={profile.resumeUrl}
            download
            className="btn btn--filled"
            style={{ backgroundColor: accent }}
          >
            <Download size={18} strokeWidth={2} />
            Resume
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="btn btn--ghost"
            style={{ borderColor: accent, color: accent }}
          >
            <Mail size={18} strokeWidth={2} />
            Contact
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="icon-btn"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="icon-btn"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll-cue"
        style={{ color: accent }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={22} />
      </motion.div>
    </section>
  )
}
