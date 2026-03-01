import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const DOW   = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
const MONTH_NAMES = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
]

const BIRTHDAY = { month: 2, day: 2, year: 2006 } // March = 2 (0-indexed)

function daysInMonth(m, y)  { return new Date(y, m + 1, 0).getDate() }
function firstDay(m, y)     { return new Date(y, m, 1).getDay() }

function buildCells(month, year) {
  const total = daysInMonth(month, year)
  const start = firstDay(month, year)
  const cells = Array(start).fill(null).concat(Array.from({ length: total }, (_, i) => i + 1))
  while (cells.length % 7 !== 0) cells.push(null)
  return cells
}

function NavArrow({ dir, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === 'prev' ? 'Previous month' : 'Next month'}
      className="p-2 transition-opacity hover:opacity-60"
      style={{ color: '#7A0F1B' }}
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round"
          d={dir === 'prev' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} />
      </svg>
    </button>
  )
}

export default function CalendarSection() {
  const [cur, setCur] = useState({ month: BIRTHDAY.month, year: BIRTHDAY.year })

  const prev = () => setCur(({ month: m, year: y }) =>
    m === 0 ? { month: 11, year: y - 1 } : { month: m - 1, year: y })
  const next = () => setCur(({ month: m, year: y }) =>
    m === 11 ? { month: 0, year: y + 1 } : { month: m + 1, year: y })

  const isBday = (day) =>
    cur.month === BIRTHDAY.month &&
    cur.year  === BIRTHDAY.year  &&
    day       === BIRTHDAY.day

  const cells = buildCells(cur.month, cur.year)

  return (
    <section className="section-padding bg-[#F5EFE6]">
      <div className="container">

        <SectionHeader
          label="I hope you had a great time because..."
          heading="It's your special day!"
          sub="March 2, 2006 "
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          viewport={{ once: true }}
          className="mx-auto"
          style={{ maxWidth: '26rem' }}
        >
          <div
            className="bg-white overflow-hidden"
            style={{
              border: '1px solid var(--col-border)',
              boxShadow: '0 10px 40px rgba(122,15,27,0.07)',
            }}
          >
            {/* Month / year header */}
            <div
              className="flex items-center justify-between px-6 py-5"
              style={{ borderBottom: '1px solid var(--col-border)' }}
            >
              <NavArrow dir="prev" onClick={prev} />
              <div className="text-center">
                <p
                  className="heading-display"
                  style={{ fontSize: '1.25rem' }}
                >
                  {MONTH_NAMES[cur.month]}
                </p>
                <p
                  className="section-label mt-0.5"
                  style={{ color: 'var(--col-text-light)', letterSpacing: '0.22em' }}
                >
                  {cur.year}
                </p>
              </div>
              <NavArrow dir="next" onClick={next} />
            </div>

            {/* Day-of-week row */}
            <div
              className="grid grid-cols-7 py-3"
              style={{ borderBottom: '1px solid var(--col-border)' }}
            >
              {DOW.map((d) => (
                <div
                  key={d}
                  className="text-center section-label"
                  style={{ color: 'var(--col-text-light)', fontSize: '0.6rem', letterSpacing: '0.12em' }}
                >
                  {d}
                </div>
              ))}
            </div>

            {/* Day cells */}
            <div className="grid grid-cols-7 p-3 gap-y-1">
              {cells.map((day, i) => (
                <div
                  key={i}
                  className="relative flex flex-col items-center justify-center aspect-square"
                  style={{
                    borderRadius: '2px',
                    background: isBday(day) ? '#F5EFE6' : 'transparent',
                  }}
                >
                  {day && (
                    <>
                      {isBday(day) && (
                        <span
                          className="absolute top-1 left-1/2 -translate-x-1/2 leading-none"
                          style={{ color: '#9E1B25', fontSize: '0.55rem' }}
                          title="Birthday"
                        >
                          ♥
                        </span>
                      )}
                      <span
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.9rem',
                          color: isBday(day) ? '#7A0F1B' : 'var(--col-text-mid)',
                          fontWeight: isBday(day) ? 600 : 400,
                          marginTop: isBday(day) ? '0.6rem' : 0,
                        }}
                      >
                        {day}
                      </span>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div
              className="flex items-center justify-center gap-2 py-4"
              style={{ borderTop: '1px solid var(--col-border)' }}
            >
              <span style={{ color: '#9E1B25', fontSize: '0.8rem' }}>♥</span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.78rem',
                  color: 'var(--col-text-light)',
                  letterSpacing: '0.06em',
                }}
              >
                
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}