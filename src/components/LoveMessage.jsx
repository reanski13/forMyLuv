import { motion } from 'framer-motion'

export default function LoveMessage() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: '#FBF8F4' }}
    >
      {/* Giant decorative quote — behind content, no overflow bleed */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 select-none pointer-events-none"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(12rem, 28vw, 22rem)',
          lineHeight: 0.85,
          color: 'rgba(122,15,27,0.04)',
          userSelect: 'none',
        }}
      >
        "
      </div>

      <div className="container-narrow relative z-10 text-center">

        {/* Ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="ornament mb-8"
          style={{ color: '#9E1B25' }}
        >
          <span className="ornament-line" />
          <svg className="w-3 h-3 fill-current opacity-50" viewBox="0 0 24 24">
            <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
          </svg>
          <span className="ornament-line" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="section-label mb-5">A short birthday note for you</p>

          <h2
            className="heading-display mb-12"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', letterSpacing: '-0.01em' }}
          >
            To My Love
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          viewport={{ once: true }}
          className="prose-body"
          style={{ fontStyle: 'italic', fontSize: 'clamp(1.15rem, 2.5vw, 1.4rem)', lineHeight: 1.95 }}
        >
          Every day I'm at awe at how much you are capable of loving.
          You are the type of person who loves even if it is an inconvenience.
          You loved me when I was at my most maldita, you loved me during the bagyo,
          you took care of me when I had to take care of my entire family,
          when I'm at my lowest you know how to handle me, and so much more.
          I never thought I'd be able to experience a love like this and I just want
          to say how grateful I am that fate allowed us to cross paths.
          <br></br>   <br></br> 
          I love my life now even more that it's entangled with yours.
          And I wouldn't want it any other way.
          I promise to do my best for both of us,
          I will cherish you with all my soul,
          I will choose you every day (even when you bully me),
          I will be there for you when you are at your lowest,
          I will build my future with you,
          And I will spend every last second of my life loving you with all my heart. 

        <br></br>   <br></br> 
        I hope you'll enjoy your birthday, babyyyy:)) Just know I'm always here for you.
        Always and forever! MWAHHHH
        </motion.p>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="ornament mb-5" style={{ color: '#9E1B25' }}>
            <span className="ornament-line" />
            <svg className="w-3 h-3 fill-current opacity-40" viewBox="0 0 24 24">
              <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
            </svg>
            <span className="ornament-line" />
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              letterSpacing: '0.18em',
              color: '#9E1B25',
            }}
          >
            — Your Bibay
          </p>
        </motion.div>

      </div>
    </section>
  )
}