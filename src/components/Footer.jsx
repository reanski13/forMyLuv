import { motion } from 'framer-motion'

const HeartIcon = () => (
  <svg className="fill-current" viewBox="0 0 24 24" style={{ width: '1rem', height: '1rem' }}>
    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
  </svg>
)

export default function Footer() {
  return (
    <footer
      className="section-padding text-white"
      style={{ background: '#150305' }}
    >
      {/* Top accent */}
      <div
        className="w-full h-px mb-12"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(158,27,37,0.45), transparent)' }}
      />

      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Top ornament */}
          <div
            className="ornament"
            style={{ color: '#9E1B25' }}
          >
            <span className="ornament-line" style={{ background: 'rgba(158,27,37,0.45)' }} />
            <HeartIcon />
            <span className="ornament-line" style={{ background: 'rgba(158,27,37,0.45)' }} />
          </div>

          <h3
            className="heading-display"
            style={{
              color: '#F5EFE6',
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            }}
          >
            Looking forward to our forever
          </h3>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontStyle: 'italic',
              fontSize: '1.15rem',
              color: 'rgba(196,168,130,0.6)',
            }}
          >
            
          </p>

          {/* Signature block */}
          <div
            className="pt-8 space-y-1"
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
          >
            <p
              className="section-label"
              style={{ color: 'rgba(196,168,130,0.38)', letterSpacing: '0.22em' }}
            >
              With all my love,
            </p>
            <p
              className="heading-display"
              style={{ color: '#F5EFE6', fontSize: '1.6rem' }}
            >
              Mrs. Tantay
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontStyle: 'italic',
                fontSize: '0.8rem',
                color: 'rgba(158,27,37,0.5)',
                letterSpacing: '0.1em',
              }}
            >
              (soon to be 😛)
            </p>
          </div>

          {/* Animated hearts */}
          <div className="flex justify-center gap-6 pt-2">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 2.6, delay: i * 0.28, repeat: Infinity, ease: 'easeInOut' }}
                style={{ color: '#9E1B25', display: 'inline-block' }}
              >
                <HeartIcon />
              </motion.span>
            ))}
          </div>

        </motion.div>
      </div>

      {/* Bottom accent */}
      <div
        className="w-full h-px mt-12"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(158,27,37,0.25), transparent)' }}
      />
    </footer>
  )
}