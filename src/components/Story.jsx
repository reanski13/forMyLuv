import { motion } from 'framer-motion'
import { useInView } from "framer-motion"

export default function Story() {
  const { ref: leftRef, inView: leftInView } = useInView({ threshold: 0.3 })
  const { ref: rightRef, inView: rightInView } = useInView({ threshold: 0.3 })

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  }

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-script text-5xl md:text-6xl text-center text-burgundy mb-20">
          Our Story
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image placeholder */}
          <motion.div
            ref={leftRef}
            variants={leftVariants}
            initial="hidden"
            animate={leftInView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="bg-white rounded-lg shadow-xl p-6 border-4 border-rose/20 aspect-square flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-24 h-24 mx-auto text-rose/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.5 1.5H5.75A4.25 4.25 0 001.5 5.75v8.5A4.25 4.25 0 005.75 18.5h8.5a4.25 4.25 0 004.25-4.25V9.5M18.5 1.5l-9 9m0 0l4 4m-4-4l-4 4" />
                </svg>
                <p className="text-rose text-lg font-medium">Your photo here</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Story text */}
          <motion.div
            ref={rightRef}
            variants={rightVariants}
            initial="hidden"
            animate={rightInView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-burgundy">How it all started</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Our story began in the most magical way. Every moment since then has been special, every glance filled with love, and every day brings us closer to our perfect future together.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-burgundy">Why we love this day</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                It's not just a date on the calendar. It was the day our hearts found each other. The day our life's most important story began. Everything changed from that moment.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <div className="flex-1 bg-blush rounded-lg p-4 text-center">
                <p className="text-burgundy font-semibold text-sm mb-1">Start Date</p>
                <p className="text-2xl font-script text-burgundy">November 6, 2025</p>
              </div>
              <div className="flex-1 bg-blush rounded-lg p-4 text-center">
                <p className="text-burgundy font-semibold text-sm mb-1">Meeting Place</p>
                <p className="text-2xl font-script text-burgundy">Moscow Region</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
