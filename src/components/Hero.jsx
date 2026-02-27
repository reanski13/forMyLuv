import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-rose to-blush overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full opacity-10 blur-3xl"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-2xl"
      >
        {/* Main title */}
        <motion.h1
          variants={itemVariants}
          className="font-script text-6xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg"
        >
          Rean + Job
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="font-script text-4xl md:text-5xl text-white mb-8 drop-shadow-md"
        >
          = love
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed drop-shadow"
        >
          Our love story began on November 6, 2025. Scroll down baby:))
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <svg
            className="w-8 h-8 text-white drop-shadow"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
