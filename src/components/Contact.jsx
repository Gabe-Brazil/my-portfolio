import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { profile } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons'

export default function Contact({ register, accent, accentSoft }) {
  return (
    <section id="contact" ref={register('contact')} className="section contact">
      <motion.h2
        className="section__heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <span className="section__heading-bar" style={{ backgroundColor: accent }} />
        Let&rsquo;s Connect
      </motion.h2>

      <motion.p
        className="contact__blurb"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Open to internships, research, and collaboration at the intersection
        of computer science and economics. Reach out any time.
      </motion.p>

      <motion.div
        className="contact__links"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a
          href={`mailto:${profile.email}`}
          className="btn btn--filled"
          style={{ backgroundColor: accent, color: '#0a1638' }}
        >
          <Mail size={18} /> {profile.email}
        </a>
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          className="icon-btn"
          aria-label="GitHub"
          style={{ borderColor: `${accent}55` }}
        >
          <GithubIcon size={20} />
        </a>
        <a
          href={profile.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="icon-btn"
          aria-label="LinkedIn"
          style={{ borderColor: `${accent}55` }}
        >
          <LinkedinIcon size={20} />
        </a>
      </motion.div>

      <p className="contact__footer" style={{ color: accentSoft }}>
        &copy; {new Date().getFullYear()} Gabriel Brazil. Built with Claude Code.
      </p>
    </section>
  )
}
