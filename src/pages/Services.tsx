import { useTranslation } from 'react-i18next'
import { motion, type Variants, type Transition } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Buildings, Hammer, PaintBrushHousehold, GridFour,
  PipeWrench, SquaresFour, Drop, Flashlight, ArrowRight
} from '@phosphor-icons/react'

const ease: Transition = { duration: 0.6, ease: 'easeOut' }
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const fadeUp: Variants = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: ease } }
const fadeIn: Variants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 1 } } }

const services = [
  { key: 'renovation', Icon: Buildings, img: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { key: 'menuiserie', Icon: Hammer, img: 'https://images.pexels.com/photos/3637786/pexels-photo-3637786.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { key: 'peinture', Icon: PaintBrushHousehold, img: 'https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { key: 'plafonds', Icon: GridFour, img: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { key: 'plomberie', Icon: PipeWrench, img: 'https://images.pexels.com/photos/2310904/pexels-photo-2310904.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { key: 'carrelage', Icon: SquaresFour, img: 'https://images.pexels.com/photos/4753928/pexels-photo-4753928.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { key: 'debouchage', Icon: Drop, img: 'https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { key: 'electricite', Icon: Flashlight, img: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800' },
]

export default function Services() {
  const { t } = useTranslation()

  return (
    <>
      {/* ── HERO — full-bleed image ───────────────────────────── */}
      <section className="relative min-h-[55vh] flex flex-col justify-end overflow-hidden">
        <motion.div variants={fadeIn} initial="hidden" animate="show" className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Nos services de rénovation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18]/95 via-[#0a0f18]/50 to-[#0a0f18]/10" />
        </motion.div>

        <motion.div
          className="relative z-10 px-[50px] pb-16 md:pb-24 pt-40 w-full"
          variants={stagger} initial="hidden" animate="show"
        >
          <motion.span variants={fadeUp} className="label block mb-5">
            {t('servicesPage.badge')}
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="font-bold text-white leading-[1.0] tracking-tight mb-5"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}
          >
            {t('servicesPage.heroTitle')}
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/50 max-w-[44ch]" style={{ fontSize: '1.1rem' }}>
            {t('servicesPage.heroSubtitle')}
          </motion.p>
        </motion.div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────── */}
      <section className="py-20 bg-[#f8f8f6]">
        <div className="px-[50px]">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            {services.map(({ key, Icon, img }) => (
              <motion.div
                key={key}
                variants={fadeUp}
                className="group bg-white rounded-xl overflow-hidden cursor-default hover:shadow-xl hover:shadow-black/8 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={img}
                    alt={t(`services.${key}.title`)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#0a0f18]/20 group-hover:bg-[#0a0f18]/40 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon size={16} weight="bold" className="text-[#ee721a]" />
                    <h3 className="font-bold text-[#0a0f18] text-sm">{t(`services.${key}.title`)}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{t(`services.${key}.desc`)}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-[#0a0f18] py-20">
        <motion.div
          className="px-[50px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
        >
          <div>
            <motion.span variants={fadeUp} className="label block mb-3">
              {t('servicesPage.tagline')}
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-bold text-white leading-tight tracking-tight max-w-xl"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              Un projet en tête ? Parlons-en.
            </motion.h2>
          </div>
          <motion.div variants={fadeUp} className="flex-shrink-0">
            <Link to="/contact" className="btn-gold">
              Devis gratuit <ArrowRight size={16} weight="bold" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
