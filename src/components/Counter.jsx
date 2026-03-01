import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const UNITS = [
  { key: 'days',    label: 'Days' },
  { key: 'hours',   label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
]

function CounterCard({ value, label, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.09 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Corner brackets */}
      {[
        'top-0 left-0 border-t border-l -translate-x-1 -translate-y-1',
        'top-0 right-0 border-t border-r translate-x-1 -translate-y-1',
        'bottom-0 left-0 border-b border-l -translate-x-1 translate-y-1',
        'bottom-0 right-0 border-b border-r translate-x-1 translate-y-1',
      ].map((cls, i) => (
        <span
          key={i}
          className={`absolute w-3 h-3 ${cls}`}
          style={{ borderColor: 'rgba(158,27,37,0.28)' }}
        />
      ))}

      <div
        className="text-center py-9 px-4"
        style={{
          background: '#FBF8F4',
          border: '1px solid var(--col-border)',
        }}
      >
        <motion.span
          key={value}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="block heading-display mb-2"
          style={{ fontSize: 'clamp(2.4rem, 5.5vw, 3.5rem)', color: '#7A0F1B' }}
        >
          {String(value).padStart(2, '0')}
        </motion.span>
        <span
          className="section-label"
          style={{ color: 'var(--col-text-light)' }}
        >
          {label}
        </span>
      </div>
    </motion.div>
  )
}

export default function Counter() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const start = new Date('2025-11-06T00:00:00+08:00').getTime()
    const tick = () => {
      const d = Date.now() - start
      if (d >= 0) setTime({
        days:    Math.floor(d / 86400000),
        hours:   Math.floor((d % 86400000) / 3600000),
        minutes: Math.floor((d % 3600000)  / 60000),
        seconds: Math.floor((d % 60000)    / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="section-padding bg-[#F5EFE6]">
      <div className="container">
        <SectionHeader label="Together since" heading="Our Time Together" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {UNITS.map(({ key, label }, i) => (
            <CounterCard key={key} value={time[key]} label={label} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}