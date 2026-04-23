import { useState } from 'react'
import { motion, type Variants, type Transition, AnimatePresence } from 'framer-motion'
import { X, ArrowLeft, ArrowRight } from '@phosphor-icons/react'

const ease: Transition = { duration: 0.6, ease: 'easeOut' }
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } }
const fadeUp: Variants = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: ease } }
const fadeIn: Variants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }

const modules = import.meta.glob('../assets/images/gallery/*', { eager: true, query: '?url', import: 'default' }) as Record<string, string>
const images = Object.values(modules)

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  function prev() {
    setLightbox(i => (i === null ? null : (i - 1 + images.length) % images.length))
  }
  function next() {
    setLightbox(i => (i === null ? null : (i + 1) % images.length))
  }

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[55vh] flex flex-col justify-end overflow-hidden">
        <motion.div variants={fadeIn} initial="hidden" animate="show" className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Galerie Wiali Rénovation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18]/95 via-[#0a0f18]/50 to-[#0a0f18]/10" />
        </motion.div>

        <motion.div
          className="relative z-10 px-[50px] pb-14 md:pb-20 pt-36 w-full"
          variants={stagger} initial="hidden" animate="show"
        >
          <motion.span variants={fadeUp} className="label block mb-5">Nos réalisations</motion.span>
          <motion.h1
            variants={fadeUp}
            className="font-bold text-white leading-[1.0] tracking-tight mb-4"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}
          >
            Galerie de projets
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/50 max-w-[44ch]" style={{ fontSize: '1.1rem' }}>
            Chaque photo illustre un projet réel, réalisé avec soin par notre équipe.
          </motion.p>
        </motion.div>
      </section>

      {/* ── GALLERY GRID ─────────────────────────────────────── */}
      <section className="py-20 bg-[#f8f8f6]">
        <div className="px-[50px]">
          {images.length === 0 ? (
            <div className="text-center py-32 text-gray-400 text-sm">
              Ajoutez vos photos dans <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">src/assets/images/gallery/</code>
            </div>
          ) : (
            <motion.div
              className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4"
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            >
              {images.map((src, i) => (
                <motion.div
                  key={src}
                  variants={fadeUp}
                  className="break-inside-avoid mb-4 overflow-hidden rounded-xl cursor-pointer group"
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={src}
                    alt={`Réalisation ${i + 1}`}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ── LIGHTBOX ─────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center px-4"
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 text-white/70 hover:text-white p-2"
              onClick={() => setLightbox(null)}
            >
              <X size={28} weight="bold" />
            </button>

            {/* Prev */}
            {images.length > 1 && (
              <button
                className="absolute left-4 text-white/70 hover:text-white p-3"
                onClick={e => { e.stopPropagation(); prev() }}
              >
                <ArrowLeft size={28} weight="bold" />
              </button>
            )}

            {/* Image */}
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              src={images[lightbox]}
              alt={`Réalisation ${lightbox + 1}`}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
              onClick={e => e.stopPropagation()}
            />

            {/* Next */}
            {images.length > 1 && (
              <button
                className="absolute right-4 text-white/70 hover:text-white p-3"
                onClick={e => { e.stopPropagation(); next() }}
              >
                <ArrowRight size={28} weight="bold" />
              </button>
            )}

            {/* Counter */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest">
              {lightbox + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
