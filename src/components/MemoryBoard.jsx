import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from './SectionHeader'
import firstKiss from "../assets/firstkiss.jpg";
import firstDate from "../assets/firstDate.jpg";
import firstMotmot from "../assets/firstMotmot.jpg";

/* Stable, intentional rotations — small enough to feel designed, not random */
const ROTATIONS = [-3.5, 2.5, -1.5, 4, -3, 3.5, -4.5, 1.5, -2, 5, -3.5, 2]

const DEFAULT_MEMORIES = [
  { id: 1, caption: 'Our first kiss', dataUrl: firstKiss },
  { id: 2, caption: 'Our first "date"',    dataUrl: firstDate },
  { id: 3, caption: 'First motmot',        dataUrl: firstMotmot },
]
function PushPin() {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[55%] z-20 flex flex-col items-center">
      <div
        className="w-3.5 h-3.5 rounded-full"
        style={{
          background: 'radial-gradient(circle at 35% 35%, #e8504a, #7A0F1B)',
          boxShadow: '0 2px 5px rgba(0,0,0,0.45), inset 0 1px 1px rgba(255,255,255,0.25)',
        }}
      />
      <div
        className="w-px h-2"
        style={{
          background: '#5a3a1a',
          boxShadow: '1px 0 2px rgba(0,0,0,0.25)',
        }}
      />
    </div>
  )
}

function PolaroidCard({ memory, index, onRemove }) {
  const rotation = ROTATIONS[index % ROTATIONS.length]

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.65, y: -16 }}
      animate={{ opacity: 1, scale: 1,    y: 0 }}
      exit={{ opacity: 0, scale: 0.55, transition: { duration: 0.18 } }}
      whileHover={{
        scale: 1.07,
        rotate: rotation * 0.25,
        y: -8,
        transition: { duration: 0.22, ease: 'easeOut' },
      }}
      className="relative cursor-pointer group"
      style={{
        rotate: rotation,
        width: '200px',
        flexShrink: 0,
      }}
    >
      <PushPin />

      {/* Polaroid card */}
      <div
        className="bg-white pt-2.5 px-2.5 pb-7 relative"
        style={{
          boxShadow: '0 6px 20px rgba(0,0,0,0.22), 0 2px 5px rgba(0,0,0,0.12)',
        }}
      >
        {/* Photo */}
        <div
          className="w-full overflow-hidden"
          style={{ aspectRatio: '1 / 1', background: '#DDD4C6' }}
        >
          {memory.dataUrl ? (
            <img
              src={memory.dataUrl}
              alt={memory.caption || 'Memory'}
              className="w-full h-full object-cover"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #E8DDD0, #D4C4B0)' }}
            >
              <span
                className="text-center px-2"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontStyle: 'italic',
                  fontSize: '0.7rem',
                  color: 'var(--col-text-light)',
                }}
              >
                {memory.caption}
              </span>
            </div>
          )}
        </div>

        {/* Caption */}
        <p
          className="text-center mt-1.5 leading-tight"
          style={{
            fontFamily: 'var(--font-body)',
            fontStyle: 'italic',
            fontSize: '0.72rem',
            color: 'var(--col-text-mid)',
          }}
        >
          {memory.caption}
        </p>

        {/* Remove */}
        <button
          onClick={() => onRemove(memory.id)}
          aria-label="Remove photo"
          className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity shadow"
          style={{ background: '#7A0F1B' }}
        >
          ✕
        </button>
      </div>
    </motion.div>
  )
}

export default function MemoryBoard() {
  const [memories, setMemories] = useState(DEFAULT_MEMORIES)

  const handleUpload = useCallback((e) => {
    Array.from(e.target.files).forEach((file) => {
      const reader = new FileReader()
      reader.onload = (ev) =>
        setMemories((prev) => [
          ...prev,
          {
            id: Date.now() + Math.random(),
            caption: file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
            dataUrl: ev.target.result,
          },
        ])
      reader.readAsDataURL(file)
    })
    e.target.value = ''
  }, [])

  const removeMemory = useCallback((id) => {
    setMemories((prev) => prev.filter((m) => m.id !== id))
  }, [])

  return (
    <section className="bg-[#EDE3D6]">
      {/* Header sits above the board with its own padding */}
      <div className="section-padding pb-0">
        <SectionHeader label="Some of our firsts" heading="With my Baby" />
      </div>

        {/* Cork board */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{
            background: `
              radial-gradient(ellipse at 25% 35%, #c9a56f 0%, #b89048 35%, #a67c38 65%, #c09050 100%)
            `,
            border: '14px solid #7a5a2a',
            outline: '2px solid #5a3a10',
            boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.18), 0 10px 36px rgba(0,0,0,0.18)',
            minHeight: '75vh',
            width: '100%',
          }}
        >
          {/* Cork grain overlay */}
          <div
            className="absolute inset-0 opacity-[0.18] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cellipse cx='22' cy='33' rx='9' ry='5.5' fill='none' stroke='%238B6020' stroke-width='0.6' opacity='0.6'/%3E%3Cellipse cx='75' cy='18' rx='13' ry='7' fill='none' stroke='%238B6020' stroke-width='0.6' opacity='0.5'/%3E%3Cellipse cx='52' cy='65' rx='11' ry='6' fill='none' stroke='%238B6020' stroke-width='0.6' opacity='0.7'/%3E%3Cellipse cx='90' cy='80' rx='10' ry='5.5' fill='none' stroke='%238B6020' stroke-width='0.6' opacity='0.4'/%3E%3Cellipse cx='14' cy='85' rx='8' ry='4.5' fill='none' stroke='%238B6020' stroke-width='0.6' opacity='0.6'/%3E%3Cellipse cx='105' cy='50' rx='7' ry='4' fill='none' stroke='%238B6020' stroke-width='0.6' opacity='0.5'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Board content */}
          <div className="relative p-8 md:p-12">

            {/* Add photo button */}
            <div className="flex justify-center mb-12">
              <label className="cursor-pointer">
                <div
                  className="flex items-center gap-2 px-7 py-2.5 transition-colors"
                  style={{
                    background: 'rgba(255,255,255,0.92)',
                    border: '1px solid rgba(122,15,27,0.25)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    letterSpacing: '0.14em',
                    color: '#7A0F1B',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                  }}
                >
                  <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>+</span>
                  <span>Add a Photo</span>
                </div>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* Photos — flex-wrap, centered, consistent gaps */}
            <div className="flex flex-wrap justify-center gap-x-14 gap-y-20 py-6">
              <AnimatePresence>
                {memories.map((memory, index) => (
                  <PolaroidCard
                    key={memory.id}
                    memory={memory}
                    index={index}
                    onRemove={removeMemory}
                  />
                ))}
              </AnimatePresence>
            </div>

            {memories.length === 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '1.1rem',
                }}
              >
                Pin your first memory above
              </motion.p>
            )}
          </div>
        </motion.div>
    </section>
  )
}