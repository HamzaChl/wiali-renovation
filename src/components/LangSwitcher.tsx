import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'

const langs = [
  { code: 'fr', label: 'Français' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'en', label: 'English' },
] as const

export default function LangSwitcher() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const current = langs.find(l => l.code === i18n.language) ?? langs[0]

  function select(code: string) {
    i18n.changeLanguage(code)
    setOpen(false)
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-1">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="flex flex-col gap-1 mb-1"
          >
            {langs.filter(l => l.code !== i18n.language).map(lang => (
              <button
                key={lang.code}
                onClick={() => select(lang.code)}
                className="bg-[#0a0f18] text-white/70 hover:text-white text-[11px] font-bold uppercase tracking-widest px-4 py-2.5 rounded-lg shadow-lg shadow-black/20 hover:bg-[#1c365b] transition-all duration-200 text-left"
              >
                {lang.code}
                <span className="ml-2 text-white/30 font-normal normal-case tracking-normal text-[10px]">{lang.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(o => !o)}
        className="bg-[#0a0f18] text-white text-[11px] font-bold uppercase tracking-widest px-4 py-2.5 rounded-lg shadow-lg shadow-black/20 flex items-center gap-2 hover:bg-[#1c365b] transition-all duration-200"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#ee721a]" />
        {current.code}
      </button>
    </div>
  )
}
