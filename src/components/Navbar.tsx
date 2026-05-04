import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { List, X } from '@phosphor-icons/react'
import logo from '../assets/images/logo.png'

const links = [
  { to: '/', key: 'nav.home' },
  { to: '/about', key: 'nav.about' },
  { to: '/services', key: 'nav.services' },
  { to: '/gallery', key: 'nav.gallery' },
  { to: '/contact', key: 'nav.contact' },
]

export default function Navbar() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-sm shadow-black/8' : ''
        }`}
      >
        <div className="px-[50px] flex items-center justify-between py-4">
          {/* Logo — toujours en couleur */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Wiali Rénovation" className="h-11 w-auto" />
          </Link>

          {/* Desktop — liens + CTA à droite */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {links.map(({ to, key }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors duration-200 relative group ${
                        isActive ? 'text-[#0a0f18]' : 'text-gray-400 hover:text-[#0a0f18]'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {t(key)}
                        <span
                          className={`absolute -bottom-1 left-0 h-[1.5px] bg-[#ee721a] transition-all duration-300 ${
                            isActive ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            <Link
              to="/devis"
              className="inline-flex items-center gap-2 bg-[#1c365b] text-white px-5 py-2.5 text-xs font-semibold tracking-widest uppercase rounded-lg hover:bg-[#0f1c2e] transition-colors duration-200"
            >
              Devis gratuit
            </Link>
          </div>

          {/* Burger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-1.5 text-[#0a0f18]"
            aria-label="Menu"
          >
            <List size={24} weight="bold" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-[#0a0f18] flex flex-col">
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <img src={logo} alt="Wiali Rénovation" className="h-9 w-auto brightness-0 invert" />
            <button onClick={() => setOpen(false)} className="text-white p-1.5">
              <X size={24} weight="bold" />
            </button>
          </div>
          <nav className="flex flex-col px-6 pt-8 gap-1">
            {links.map(({ to, key }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-3xl font-bold py-4 border-b border-white/10 transition-colors ${
                    isActive ? 'text-[#ee721a]' : 'text-white/80 hover:text-white'
                  }`
                }
              >
                {t(key)}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-8 bg-[#ee721a] text-white text-center py-3.5 text-sm font-semibold tracking-widest uppercase"
            >
              Demander un devis
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
