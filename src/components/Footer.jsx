import { motion } from 'framer-motion'

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <footer className="bg-burgundy text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="text-center space-y-8"
        >
          {/* Main message */}
          <motion.div variants={itemVariants}>
            <h3 className="font-script text-4xl md:text-5xl mb-4">
              Looking forward to seeing you
            </h3>
            <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto">
              at our celebration of love!
            </p>
          </motion.div>

          {/* Signature */}
          <motion.div
            variants={itemVariants}
            className="space-y-2 pt-6 border-t border-white/20"
          >
            <p className="text-white/80 text-lg">Yours,</p>
            <p className="font-script text-3xl text-white">Lemon and Lera</p>
            <p className="text-white/60 text-sm">(soon to be!)</p>
          </motion.div>

          {/* Decorative hearts */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4 pt-6"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              >
                <svg
                  className="w-8 h-8 text-rose fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom text */}
          <motion.div variants={itemVariants} className="text-white/70 text-sm pt-8">
            <p>Thank you for sharing this magical story with us ♥</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
