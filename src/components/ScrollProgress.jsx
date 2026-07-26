import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress({ color }) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
  })

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX, backgroundColor: color }}
    />
  )
}
