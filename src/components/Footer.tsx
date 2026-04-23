import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Phone, EnvelopeSimple, Clock, MapPin, ArrowUpRight } from '@phosphor-icons/react'
import logo from '../assets/images/logo.png'

const navLinks = [
  { to: '/', key: 'nav.home' },
  { to: '/about', key: 'nav.about' },
  { to: '/services', key: 'nav.services' },
  { to: '/gallery', key: 'nav.gallery' },
  { to: '/contact', key: 'nav.contact' },
]

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0f1c2e]">
      <div className="px-[50px] pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <img src={logo} alt="Wiali Rénovation" className="h-10 w-auto brightness-0 invert mb-5" />
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-[28ch]">
              {t('footer.tagline')}
            </p>
            <div className="space-y-3">
              {[
                { Icon: Phone, val: '+33 6 00 00 00 00', href: 'tel:+33600000000' },
                { Icon: EnvelopeSimple, val: 'contact@wiali-renovation.fr', href: 'mailto:contact@wiali-renovation.fr' },
                { Icon: Clock, val: 'Lun – Sam : 8h – 18h', href: null },
                { Icon: MapPin, val: 'France', href: null },
              ].map(({ Icon, val, href }) => (
                <div key={val} className="flex items-center gap-2.5 text-xs text-white/40">
                  <Icon size={13} weight="bold" />
                  {href
                    ? <a href={href} className="hover:text-[#ee721a] transition-colors">{val}</a>
                    : <span>{val}</span>
                  }
                </div>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#ee721a] mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map(({ to, key }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {t(key)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/30">
          <span>{t('footer.copyright', { year })}</span>
          <span>{t('footer.legal')}</span>
        </div>
      </div>
    </footer>
  )
}
