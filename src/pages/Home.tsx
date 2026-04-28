import heroBg from '../assets/images/home.jpg'
import imgRenovation from '../assets/images/services/renovation-batiment.jpg'
import imgMenuiserie from '../assets/images/services/Menuiserie.jpg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, type Variants, type Transition } from 'framer-motion'
import {
  Buildings, Hammer, PaintBrush,
  ArrowRight, ShieldCheck, Medal, ClipboardText,
  ArrowUpRight
} from '@phosphor-icons/react'

const ease: Transition = { duration: 0.6, ease: 'easeOut' }
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const fadeUp: Variants = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: ease } }
const fadeIn: Variants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 1 } } }

const featuredServices = [
  { key: 'renovation', Icon: Buildings, badge: 'Rénovation', img: imgRenovation },
  {
    key: 'peinture', Icon: PaintBrush, badge: 'Peinture & Décoration',
    img: 'https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  { key: 'menuiserie', Icon: Hammer, badge: 'Menuiserie', img: imgMenuiserie },
]

const whyPoints = [
  { Icon: ShieldCheck, key: 'quality' as const, num: '10+', unit: 'ans' },
  { Icon: Medal, key: 'expertise' as const, num: '500+', unit: 'projets' },
  { Icon: ClipboardText, key: 'devis' as const, num: '48h', unit: 'délai' },
]

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      {/* ── HERO — full-bleed image ───────────────────────────── */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden">
        <motion.div variants={fadeIn} initial="hidden" animate="show" className="absolute inset-0">
          <img
            src={heroBg}
            alt="Rénovation intérieure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0a0f18]/55" />
        </motion.div>

        {/* Content anchored to bottom */}
        <motion.div
          className="relative z-10 px-[50px] pt-24 pb-16 w-full"
          variants={stagger} initial="hidden" animate="show"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white bg-white/10 backdrop-blur-md border border-white/25 px-4 py-2 rounded-full mb-5">
            Artisans certifiés · Depuis 2010
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-bold text-white leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}
          >
            Votre espace,<br />
            <em className="not-italic text-[#ee721a]">réinventé.</em>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-white/55 mb-10 leading-relaxed"
            style={{ fontSize: '1rem', maxWidth: '46ch' }}
          >
            Rénovation complète, menuiserie, peinture, plomberie et électricité — par des professionnels engagés pour des résultats durables.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link to="/services" className="btn-glass">
              Découvrir nos services <ArrowRight size={16} weight="bold" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── SERVICES PREVIEW ─────────────────────────────────── */}
      <section className="py-24 bg-[#f8f8f6]">
        <div className="px-[50px]">
          <motion.div
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            <div>
              <motion.span variants={fadeUp} className="label block mb-3">
                {t('servicesPreview.badge')}
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="font-bold text-[#0a0f18] tracking-tight leading-none"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
              >
                {t('servicesPreview.title')}
              </motion.h2>
            </div>
            <motion.div variants={fadeUp}>
              <Link to="/services" className="btn-outline text-sm">
                {t('servicesPreview.viewAll')} <ArrowUpRight size={15} weight="bold" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            {featuredServices.map(({ key, Icon, img, badge }) => (
              <motion.div
                key={key}
                variants={fadeUp}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-black/8 hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                {/* Image with white fade */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={img}
                    alt={t(`services.${key}.title`)}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* white gradient bleeding into card */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
                  {/* badge */}
                  <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[11px] font-semibold px-3 py-1.5 rounded-full text-gray-600 shadow-sm">
                    {badge}
                  </span>
                </div>
                {/* Text */}
                <div className="px-6 pb-7 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={15} weight="bold" className="text-[#ee721a]" />
                    <h3 className="font-bold text-[#0a0f18] text-base">{t(`services.${key}.title`)}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{t(`services.${key}.desc`)}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="px-[50px]">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          >
            <div>
              <motion.span variants={fadeUp} className="label block mb-4">{t('why.badge')}</motion.span>
              <motion.h2
                variants={fadeUp}
                className="font-bold text-[#0a0f18] leading-tight tracking-tight mb-12"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                {t('why.title')}
              </motion.h2>

              <motion.div variants={stagger} className="space-y-10">
                {whyPoints.map(({ Icon, key, num, unit }) => (
                  <motion.div key={key} variants={fadeUp} className="flex gap-6 items-start">
                    <div className="text-right min-w-[52px]">
                      <div className="text-2xl font-bold text-[#0a0f18] leading-none">{num}</div>
                      <div className="text-[10px] text-[#ee721a] font-semibold uppercase tracking-widest mt-0.5">{unit}</div>
                    </div>
                    <div className="pt-1 border-l border-gray-200 pl-6">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon size={16} weight="bold" className="text-[#ee721a]" />
                        <h3 className="font-semibold text-[#0a0f18] text-sm">{t(`why.points.${key}.title`)}</h3>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{t(`why.points.${key}.desc`)}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Overlapping images */}
            <motion.div variants={fadeIn} className="relative hidden lg:block h-[540px]">
              <div className="absolute right-0 top-0 w-[78%] h-[68%] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Intérieur rénové"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute left-0 bottom-0 w-[55%] h-[50%] overflow-hidden ring-4 ring-[#f8f8f6]">
                <img
                  src="https://images.pexels.com/photos/3637786/pexels-photo-3637786.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Artisan au travail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-[66%] right-[73%] w-12 h-12 bg-[#ee721a]" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <section className="relative min-h-[440px] flex items-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Équipe en chantier"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0f18]/80" />
        <motion.div
          className="relative z-10 px-[50px] py-20 w-full"
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white bg-white/10 backdrop-blur-md border border-white/25 px-4 py-2 mb-5">Projet en tête ?</motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-bold text-white leading-tight tracking-tight max-w-2xl mb-6"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            {t('ctaBanner.title')}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 mb-10 max-w-[44ch]" style={{ fontSize: '1.1rem' }}>
            {t('ctaBanner.subtitle')}
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link to="/contact" className="btn-gold">
              {t('ctaBanner.cta')} <ArrowRight size={16} weight="bold" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
