import { motion } from 'framer-motion'

const HeartIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
  </svg>
)

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#150305]">

      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a0609] via-[#150305] to-[#0a0102]" />

      {/* Subtle vignette edge glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, #000 100%)',
        }}
      />

      {/* Top / bottom accent lines */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(158,27,37,0.5), transparent)' }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(158,27,37,0.5), transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">

        {/* Top ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="ornament mb-10"
          style={{ color: '#9E1B25' }}
        >
          <span className="ornament-line" style={{ background: 'rgba(158,27,37,0.5)' }} />
          <HeartIcon className="w-3.5 h-3.5" />
          <span className="ornament-line" style={{ background: 'rgba(158,27,37,0.5)' }} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="section-label mb-5"
          style={{ color: '#c4a882' }}
        >
          A Love Story
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="heading-display text-[#F5EFE6] mb-6"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 6.5rem)', letterSpacing: '-0.02em' }}
        >
          Rean{' '}
          <span style={{ color: '#9E1B25' }}>&amp;</span>
          {' '}Job
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="ornament my-7"
          style={{ color: '#c4a882' }}
        >
          <span className="ornament-line" style={{ background: 'rgba(196,168,130,0.35)' }} />
          <span
            className="text-sm tracking-widest"
            style={{ fontFamily: 'var(--font-body)', color: '#c4a882' }}
          >
            November 6, 2025
          </span>
          <span className="ornament-line" style={{ background: 'rgba(196,168,130,0.35)' }} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="prose-body mb-16"
          style={{
            color: 'rgba(196,168,130,0.65)',
            fontStyle: 'italic',
            fontSize: '1.15rem',
          }}
        >
          The beginning of our forever.
        </motion.p>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex flex-col items-center gap-2"
        >
          <span
            className="section-label"
            style={{ color: 'rgba(196,168,130,0.35)', letterSpacing: '0.2em' }}
          >
            Scroll down baby
          </span>
          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10"
            style={{ background: 'linear-gradient(to bottom, rgba(158,27,37,0.55), transparent)' }}
          />
        </motion.div>
      </div>
    </section>
  )
}