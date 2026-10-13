import { motion } from 'framer-motion'
import { GraduationCap, Download } from 'lucide-react'
import { education, profile } from '../data/portfolio'

export default function Education({ register, accent }) {
  return (
    <section
      id="education"
      ref={register('education')}
      className="section education"
    >
      <motion.h2
        className="section__heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <span className="section__heading-bar" style={{ backgroundColor: accent }} />
        Education
      </motion.h2>

      <div className="education__list">
        {education.map((entry, i) => (
          <motion.div
            key={entry.id}
            className="education__card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            style={{ borderColor: `${accent}44` }}
          >
            <div
              className="education__icon"
              style={{ color: accent, backgroundColor: `${accent}1a` }}
            >
              <GraduationCap size={26} />
            </div>
            <div className="education__body">
              <div className="education__row">
                <h3>{entry.school}</h3>
              </div>
              <p className="education__degree">{entry.degree}</p>
              <ul className="education__details">
                {entry.details.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.a
        href={profile.resumeUrl}
        download
        className="btn btn--filled education__resume-btn"
        style={{ backgroundColor: accent }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Download size={18} strokeWidth={2} />
        Download Full Resume
      </motion.a>
    </section>
  )
}
