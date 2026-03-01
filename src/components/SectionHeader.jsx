import { motion } from 'framer-motion'

/**
 * SectionHeader — reusable, consistent heading block used by every section.
 * Props:
 *   label   — small uppercase label above the heading
 *   heading — main display heading text
 *   sub     — optional subline beneath heading (string)
 */
export default function SectionHeader({ label, heading, sub }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      {label && (
        <p className="section-label mb-4">{label}</p>
      )}

      <h2
        className="heading-display"
        style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
      >
        {heading}
      </h2>

      {/* Ornament */}
      <div className="ornament mt-6">
        <span className="ornament-line" />
        <svg
          className="w-3 h-3 fill-current opacity-50"
          style={{ color: '#9E1B25' }}
          viewBox="0 0 24 24"
        >
          <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
        </svg>
        <span className="ornament-line" />
      </div>

      {sub && (
        <p
          className="prose-body mt-5 mx-auto"
          style={{ maxWidth: '36rem', fontStyle: 'italic', fontSize: '1.1rem' }}
        >
          {sub}
        </p>
      )}
    </motion.div>
  )
}