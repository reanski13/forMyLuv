import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PolaroidCard = ({ image, index, onRemove }) => {
  const rotation = (index % 2 === 0 ? -3 : 3) + (Math.random() * 4 - 2)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
      animate={{ opacity: 1, scale: 1, rotate: rotation }}
      exit={{ opacity: 0, scale: 0.5 }}
      whileHover={{ scale: 1.05, rotate: rotation + 5 }}
      className="relative bg-white rounded-sm shadow-xl p-3 aspect-square cursor-pointer group"
      style={{ maxWidth: '200px' }}
    >
      <div className="absolute inset-0 bg-white rounded-sm p-3">
        {image.dataUrl ? (
          <img
            src={image.dataUrl}
            alt={`Memory ${index}`}
            className="w-full h-3/4 object-cover rounded"
          />
        ) : (
          <div className="w-full h-3/4 bg-gradient-to-br from-rose/20 to-blush rounded flex items-center justify-center">
            <span className="text-rose text-sm text-center">Memory photo</span>
          </div>
        )}
        <p className="text-center text-xs text-gray-600 mt-2 font-handwriting">
          {image.caption || 'Момент'}
        </p>
      </div>

      <button
        onClick={() => onRemove(index)}
        className="absolute -top-2 -right-2 bg-rose text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
      >
        ✕
      </button>
    </motion.div>
  )
}

export default function MemoryBoard() {
  const [memories, setMemories] = useState([
          {id: 1, caption: 'Wedding photo', dataUrl: null},
    { id: 2, caption: 'Our first photo', dataUrl: null },
    { id: 3, caption: 'Happy moment', dataUrl: null },
  ])

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    files.forEach((file) => {
      const reader = new FileReader()
      reader.onload = (event) => {
        setMemories([
          ...memories,
          {
            id: Date.now() + Math.random(),
            caption: file.name.replace(/\.[^/.]+$/, ''),
            dataUrl: event.target.result,
          },
        ])
      }
      reader.readAsDataURL(file)
    })
  }

  const removeMemory = (index) => {
    setMemories(memories.filter((_, i) => i !== index))
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-cream to-blush">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-5xl md:text-6xl text-burgundy mb-4">
            Memory Board
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Add photos of our most magical moments together
          </p>
        </motion.div>

        {/* Upload area */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <label className="flex items-center justify-center gap-3 p-8 bg-white border-2 border-dashed border-rose rounded-xl cursor-pointer hover:bg-blush/30 transition-colors group">
            <div className="text-center">
              <svg
                className="w-12 h-12 text-rose mb-2 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <p className="font-medium text-gray-700">Click or drag photos</p>
              <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </motion.div>

        {/* Memory board grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12"
        >
          <AnimatePresence>
            {memories.map((memory, index) => (
              <PolaroidCard
                key={memory.id}
                image={memory}
                index={index}
                onRemove={removeMemory}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {memories.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 py-12"
          >
            <p className="text-lg">Start adding photos of your favorite moments</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
