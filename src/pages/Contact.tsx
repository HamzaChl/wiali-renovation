import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, type Variants, type Transition } from 'framer-motion'
import { Phone, EnvelopeSimple, Clock, MapPin, PaperPlaneTilt, CheckCircle } from '@phosphor-icons/react'

const ease: Transition = { duration: 0.6, ease: 'easeOut' }
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const fadeUp: Variants = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: ease } }
const fadeIn: Variants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 1 } } }

const serviceOptions = [
  'services.renovation.title', 'services.menuiserie.title', 'services.peinture.title',
  'services.plafonds.title', 'services.plomberie.title', 'services.carrelage.title',
  'services.debouchage.title', 'services.electricite.title',
]

const inputClass =
  'w-full bg-[#f8f8f6] border-0 border-b border-gray-200 px-0 py-3 text-sm text-[#0a0f18] placeholder:text-gray-400 focus:outline-none focus:border-[#0a0f18] transition-colors duration-200'

export default function Contact() {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1200)
  }

  return (
    <>
      {/* ── HERO — full-bleed image ───────────────────────────── */}
      <section className="relative min-h-[55vh] flex flex-col justify-end overflow-hidden">
        <motion.div variants={fadeIn} initial="hidden" animate="show" className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Contact Wiali Rénovation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18]/95 via-[#0a0f18]/50 to-[#0a0f18]/10" />
        </motion.div>

        <motion.div
          className="relative z-10 px-[50px] pb-16 md:pb-24 pt-40 w-full"
          variants={stagger} initial="hidden" animate="show"
        >
          <motion.span variants={fadeUp} className="label block mb-5">
            {t('contact.badge')}
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="font-bold text-white leading-[1.0] tracking-tight mb-5"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}
          >
            {t('contact.heroTitle')}
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/50 max-w-[44ch]" style={{ fontSize: '1.1rem' }}>
            {t('contact.heroSubtitle')}
          </motion.p>
        </motion.div>
      </section>

      {/* ── FORM + INFO ──────────────────────────────────────── */}
      <section className="py-20 bg-[#f8f8f6]">
        <div className="px-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Form */}
            <motion.div
              className="lg:col-span-2 bg-white p-10 rounded-xl"
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <CheckCircle size={48} weight="thin" className="text-[#ee721a] mb-6" />
                  <h3 className="text-2xl font-bold text-[#0a0f18] mb-3">Message envoyé</h3>
                  <p className="text-gray-400 max-w-[30ch] text-sm leading-relaxed">
                    Nous vous répondrons dans les 48 heures ouvrées.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">
                        {t('contact.form.name')}
                      </label>
                      <input type="text" required placeholder={t('contact.form.namePlaceholder')} className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">
                        {t('contact.form.email')}
                      </label>
                      <input type="email" required placeholder={t('contact.form.emailPlaceholder')} className={inputClass} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">
                        {t('contact.form.phone')}
                      </label>
                      <input type="tel" placeholder={t('contact.form.phonePlaceholder')} className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">
                        {t('contact.form.service')}
                      </label>
                      <select className={`${inputClass} cursor-pointer bg-transparent`} defaultValue="">
                        <option value="" disabled>{t('contact.form.servicePlaceholder')}</option>
                        {serviceOptions.map(k => (
                          <option key={k} value={k}>{t(k)}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      required rows={5}
                      placeholder={t('contact.form.messagePlaceholder')}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-dark w-full justify-center disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2.5">
                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        {t('contact.form.submitting')}
                      </span>
                    ) : (
                      <>
                        {t('contact.form.submit')}
                        <PaperPlaneTilt size={15} weight="bold" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              className="space-y-5"
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            >
              <motion.h2 variants={fadeUp} className="text-lg font-bold text-[#0a0f18] mb-6">
                {t('contact.info.title')}
              </motion.h2>

              {[
                { Icon: Phone, label: t('contact.info.phone'), value: '+33 6 00 00 00 00', href: 'tel:+33600000000' },
                { Icon: EnvelopeSimple, label: t('contact.info.email'), value: 'contact@wiali-renovation.fr', href: 'mailto:contact@wiali-renovation.fr' },
                { Icon: Clock, label: t('contact.info.hours'), value: t('contact.info.hoursValue'), href: null },
                { Icon: MapPin, label: t('contact.info.address'), value: t('contact.info.addressValue'), href: null },
              ].map(({ Icon, label, value, href }) => (
                <motion.div key={label} variants={fadeUp} className="flex gap-4 items-start py-4 border-b border-gray-100">
                  <Icon size={16} weight="bold" className="text-[#ee721a] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">{label}</div>
                    {href ? (
                      <a href={href} className="text-sm font-medium text-[#0a0f18] hover:text-[#ee721a] transition-colors">
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-[#0a0f18]">{value}</span>
                    )}
                  </div>
                </motion.div>
              ))}

              <motion.div variants={fadeUp} className="bg-[#0a0f18] p-7 mt-2 rounded-xl">
                <div className="text-4xl font-bold text-[#ee721a] tracking-tight leading-none">48h</div>
                <div className="text-white/50 text-xs mt-2 uppercase tracking-widest">Délai de réponse garanti</div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}
