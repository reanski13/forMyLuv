import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CounterCard = ({ value, label, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white rounded-2xl p-8 shadow-lg border-2 border-rose/20 flex flex-col items-center justify-center"
    >
      <motion.div
        key={value}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-5xl md:text-6xl font-bold text-rose mb-3"
      >
        {String(value).padStart(2, '0')}
      </motion.div>
      <p className="text-gray-600 text-sm font-medium uppercase tracking-widest">{label}</p>
    </motion.div>
  )
}

export default function Counter() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // use Philippines local time (UTC+8) for the start date
    const startDate = new Date('2025-11-06T00:00:00+08:00').getTime()

    const updateCounter = () => {
      const now = new Date().getTime()
      const distance = now - startDate

      if (distance >= 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setTime({ days, hours, minutes, seconds })
      }
    }

    updateCounter()
    const timer = setInterval(updateCounter, 1000)
    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-5xl md:text-6xl text-burgundy mb-4">
            How much
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Time has passed since we've become official
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          <CounterCard value={time.days} label="Days" index={0} />
          <CounterCard value={time.hours} label="Hours" index={1} />
          <CounterCard value={time.minutes} label="Minutes" index={2} />
          <CounterCard value={time.seconds} label="Seconds" index={3} />
        </motion.div>

        {/* Timeline */}
       
      </div>
    </section>
  )
}
