import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Film } from 'lucide-react'

export default function VideoModal({ project, onClose, accent }) {
  useEffect(() => {
    if (!project) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="video-modal__backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="video-modal"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            style={{ borderColor: `${accent}55` }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} demo video`}
          >
            <button
              type="button"
              className="video-modal__close"
              onClick={onClose}
              aria-label="Close video"
            >
              <X size={20} />
            </button>

            <div className="video-modal__frame">
              {project.video?.type === 'file' && project.video.src ? (
                <video
                  src={project.video.src}
                  controls
                  autoPlay
                  className="video-modal__media"
                />
              ) : project.video?.type === 'youtube' && project.video.src ? (
                <iframe
                  src={project.video.src}
                  title={`${project.title} demo`}
                  className="video-modal__media"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="video-modal__placeholder">
                  <Film size={36} />
                  <p>Demo video coming soon</p>
                </div>
              )}
            </div>

            <div className="video-modal__info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
