import { useTranslation } from 'react-i18next'
import { motion, type Variants, type Transition } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Handshake, Target, Clock, Lightbulb, ArrowRight } from '@phosphor-icons/react'
import imgRenovation from '../assets/images/services/renovation-batiment.jpg'

const ease: Transition = { duration: 0.6, ease: 'easeOut' }
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const fadeUp: Variants = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: ease } }
const fadeIn: Variants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 1 } } }

const values = [
  { key: 'trust' as const, Icon: Handshake },
  { key: 'precision' as const, Icon: Target },
  { key: 'respect' as const, Icon: Clock },
  { key: 'innovation' as const, Icon: Lightbulb },
]

export default function About() {
  const { t } = useTranslation()

  return (
    <>
      {/* ── HERO — full-bleed image ───────────────────────────── */}
      <section className="relative min-h-[55vh] flex flex-col justify-end overflow-hidden">
        <motion.div variants={fadeIn} initial="hidden" animate="show" className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Équipe Wiali Rénovation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18]/95 via-[#0a0f18]/50 to-[#0a0f18]/10" />
        </motion.div>

        <motion.div
          className="relative z-10 px-[50px] pb-16 md:pb-24 pt-40 w-full"
          variants={stagger} initial="hidden" animate="show"
        >
          <motion.span variants={fadeUp} className="label block mb-5">
            {t('about.badge')}
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="font-bold text-white leading-[1.0] tracking-tight mb-5"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}
          >
            {t('about.heroTitle')}
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/50 max-w-[44ch]" style={{ fontSize: '1.1rem' }}>
            {t('about.heroSubtitle')}
          </motion.p>
        </motion.div>
      </section>

      {/* ── STORY ────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f8f8f6]">
        <div className="px-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              className="relative"
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn}
            >
              <div className="aspect-[4/5] overflow-hidden rounded-xl">
                <img
                  src={imgRenovation}
                  alt="Réalisation Wiali"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-[#0a0f18] px-7 py-5 hidden lg:block">
                <div className="text-4xl font-bold text-[#ee721a] leading-none">10+</div>
                <div className="text-white/50 text-xs mt-1.5 uppercase tracking-widest">ans d'expérience</div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            >
              <motion.span variants={fadeUp} className="label block mb-4">
                {t('about.storyTitle')}
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="font-bold text-[#0a0f18] leading-tight tracking-tight mb-8"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}
              >
                Une équipe dédiée à votre satisfaction
              </motion.h2>
              <motion.div variants={stagger} className="space-y-4 text-gray-500 leading-relaxed text-[0.95rem]">
                <motion.p variants={fadeUp}>{t('about.story1')}</motion.p>
                <motion.p variants={fadeUp}>{t('about.story2')}</motion.p>
                <motion.p variants={fadeUp}>{t('about.story3')}</motion.p>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-10">
                <Link to="/contact" className="btn-dark">
                  Démarrer un projet <ArrowRight size={16} weight="bold" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="px-[50px]">
          <motion.div
            className="mb-14"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            <motion.span variants={fadeUp} className="label block mb-4">
              {t('about.valuesTitle')}
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-bold text-[#0a0f18] leading-tight tracking-tight max-w-xl"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}
            >
              Ce qui nous définit au quotidien
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            {values.map(({ key, Icon }, idx) => (
              <motion.div key={key} variants={fadeUp} className="cursor-default group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] font-semibold text-gray-300 tabular-nums">
                    0{idx + 1}
                  </span>
                  <div className="h-px flex-1 bg-gray-100 group-hover:bg-[#ee721a] transition-colors duration-300" />
                  <Icon size={18} weight="bold" className="text-[#ee721a]" />
                </div>
                <h3 className="font-bold text-[#0a0f18] mb-2">{t(`about.values.${key}.title`)}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t(`about.values.${key}.desc`)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Rénovation salle de bain"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0f18]/80" />
        <motion.div
          className="relative z-10 px-[50px] py-24 w-full"
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="font-bold text-white leading-tight tracking-tight max-w-2xl mb-8"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            Donnez vie à votre projet de rénovation.
          </motion.h2>
          <motion.div variants={fadeUp}>
            <Link to="/contact" className="btn-gold">
              Demander un devis <ArrowRight size={16} weight="bold" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
