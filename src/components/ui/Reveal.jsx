/**
 * ui/Reveal — scroll-appear wrapper. Children slide up + fade in the first
 * time they enter the viewport (the site's default "appear" animation).
 *
 * Props: delay (s), y (px), as (element type), className, ...rest
 */
import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, y = 44, as = 'div', className, ...rest }) {
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
