import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, type Variants, type Transition } from 'framer-motion'
import { PaperPlaneTilt, CheckCircle } from '@phosphor-icons/react'

const ease: Transition = { duration: 0.6, ease: 'easeOut' }
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const fadeUp: Variants = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: ease } }
const fadeIn: Variants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 1 } } }

const inputClass =
  'w-full bg-[#f8f8f6] border-0 border-b border-gray-200 px-0 py-3 text-sm text-[#0a0f18] placeholder:text-gray-400 focus:outline-none focus:border-[#0a0f18] transition-colors duration-200'

const labelClass = 'block text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-3'

const serviceKeys = [
  'renovation', 'menuiserie', 'peinture', 'plafonds',
  'plomberie', 'carrelage', 'debouchage', 'electricite',
]

const budgets = ['< 1 000 €', '1 000 – 5 000 €', '5 000 – 15 000 €', '15 000 – 30 000 €', '> 30 000 €']
const delais = ['Urgent (< 2 semaines)', '1 – 3 mois', '3 – 6 mois', '+ de 6 mois', 'Flexible']

export default function Devis() {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState<string[]>([])

  function toggleService(key: string) {
    setSelected(s => s.includes(key) ? s.filter(k => k !== key) : [...s, key])
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1200)
  }

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[55vh] flex flex-col justify-end overflow-hidden">
        <motion.div variants={fadeIn} initial="hidden" animate="show" className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Demande de devis"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18]/95 via-[#0a0f18]/50 to-[#0a0f18]/10" />
        </motion.div>

        <motion.div
          className="relative z-10 px-[50px] pb-14 md:pb-20 pt-36 w-full"
          variants={stagger} initial="hidden" animate="show"
        >
          <motion.span variants={fadeUp} className="label block mb-5">Gratuit · Sans engagement</motion.span>
          <motion.h1
            variants={fadeUp}
            className="font-bold text-white leading-[1.0] tracking-tight mb-4"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}
          >
            Demande de devis
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/50 max-w-[44ch]" style={{ fontSize: '1.1rem' }}>
            Remplissez ce formulaire et recevez une estimation détaillée sous 48h.
          </motion.p>
        </motion.div>
      </section>

      {/* ── FORM ─────────────────────────────────────────────── */}
      <section className="py-20 bg-[#f8f8f6]">
        <div className="px-[50px]">
          <motion.div
            className="bg-white rounded-xl p-10 max-w-4xl"
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <CheckCircle size={48} weight="thin" className="text-[#ee721a] mb-6" />
                <h3 className="text-2xl font-bold text-[#0a0f18] mb-3">Demande envoyée !</h3>
                <p className="text-gray-400 max-w-[32ch] text-sm leading-relaxed">
                  Nous analysons votre projet et vous recontactons sous 48 heures ouvrées.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">

                {/* Coordonnées */}
                <div>
                  <h2 className="text-sm font-bold text-[#0a0f18] uppercase tracking-widest mb-6 pb-3 border-b border-gray-100">
                    Vos coordonnées
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                    <div>
                      <label className={labelClass}>Nom complet</label>
                      <input type="text" required placeholder="Jean Dupont" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Téléphone</label>
                      <input type="tel" required placeholder="+32 4 00 00 00 00" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Email</label>
                      <input type="email" required placeholder="jean@exemple.be" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Adresse du chantier</label>
                      <input type="text" placeholder="Rue, ville, code postal" className={inputClass} />
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h2 className="text-sm font-bold text-[#0a0f18] uppercase tracking-widest mb-6 pb-3 border-b border-gray-100">
                    Services souhaités
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {serviceKeys.map(key => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => toggleService(key)}
                        className={`px-3 py-2.5 text-xs font-semibold rounded-lg border transition-all duration-200 text-left ${
                          selected.includes(key)
                            ? 'bg-[#0a0f18] text-white border-[#0a0f18]'
                            : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'
                        }`}
                      >
                        {t(`services.${key}.title`)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Projet */}
                <div>
                  <h2 className="text-sm font-bold text-[#0a0f18] uppercase tracking-widest mb-6 pb-3 border-b border-gray-100">
                    Votre projet
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mb-7">
                    <div>
                      <label className={labelClass}>Budget estimé</label>
                      <select className={`${inputClass} cursor-pointer bg-transparent`} defaultValue="">
                        <option value="" disabled>Sélectionner</option>
                        {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Délai souhaité</label>
                      <select className={`${inputClass} cursor-pointer bg-transparent`} defaultValue="">
                        <option value="" disabled>Sélectionner</option>
                        {delais.map(d => <option key={d} value={d}>{d}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Description du projet</label>
                    <textarea
                      required rows={5}
                      placeholder="Décrivez votre projet en détail : surface approximative, état actuel, matériaux souhaités, contraintes particulières..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-dark w-full justify-center disabled:opacity-50"
                >
                  {loading ? (
                    <span className="flex items-center gap-2.5">
                      <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Envoi en cours...
                    </span>
                  ) : (
                    <>
                      Envoyer ma demande de devis
                      <PaperPlaneTilt size={15} weight="bold" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}
