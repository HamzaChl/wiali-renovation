import { motion, type Variants, type Transition } from 'framer-motion'
import { Link } from 'react-router-dom'

const ease: Transition = { duration: 0.6, ease: 'easeOut' }
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const fadeUp: Variants = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: ease } }

export default function Privacy() {
  return (
    <section className="min-h-screen bg-[#f8f8f6] pt-36 pb-24">
      <div className="px-[50px] max-w-3xl">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.span variants={fadeUp} className="label block mb-4">Vos données</motion.span>
          <motion.h1
            variants={fadeUp}
            className="font-bold text-[#0a0f18] tracking-tight mb-12"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Politique de confidentialité
          </motion.h1>

          <motion.div variants={stagger} className="space-y-10 text-gray-500 text-sm leading-relaxed">

            <motion.div variants={fadeUp}>
              <h2 className="text-base font-bold text-[#0a0f18] mb-3">Responsable du traitement</h2>
              <p><strong className="text-[#0a0f18]">Wiali Rénovation SRL</strong></p>
              <p>BE 1016.222.577 — Rue des Bons Enfants 19, 1120 Bruxelles</p>
              <p>Contact : <a href="mailto:aliboumazaak6@gmail.com" className="text-[#ee721a] hover:underline">aliboumazaak6@gmail.com</a></p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-base font-bold text-[#0a0f18] mb-3">Données collectées</h2>
              <p>Lorsque vous utilisez notre formulaire de contact, nous collectons les informations suivantes : nom, adresse e-mail, numéro de téléphone (facultatif) et le contenu de votre message. Ces données sont utilisées uniquement pour répondre à votre demande.</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-base font-bold text-[#0a0f18] mb-3">Finalité et base légale</h2>
              <p>Le traitement de vos données repose sur votre consentement (art. 6.1.a du RGPD) et sur notre intérêt légitime à répondre aux demandes de nos prospects et clients (art. 6.1.f du RGPD).</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-base font-bold text-[#0a0f18] mb-3">Conservation des données</h2>
              <p>Vos données sont conservées pendant une durée maximale de 3 ans à compter de notre dernier échange, sauf obligation légale contraire.</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-base font-bold text-[#0a0f18] mb-3">Vos droits</h2>
              <p>Conformément au RGPD, vous disposez des droits suivants : accès, rectification, effacement, opposition, limitation du traitement et portabilité. Pour exercer ces droits, contactez-nous à <a href="mailto:aliboumazaak6@gmail.com" className="text-[#ee721a] hover:underline">aliboumazaak6@gmail.com</a>.</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-base font-bold text-[#0a0f18] mb-3">Cookies</h2>
              <p>Ce site n'utilise pas de cookies publicitaires ni de traceurs tiers. Des cookies techniques strictement nécessaires au bon fonctionnement du site peuvent être déposés.</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-base font-bold text-[#0a0f18] mb-3">Réclamation</h2>
              <p>Vous avez le droit d'introduire une réclamation auprès de l'Autorité de protection des données belge (APD) : <a href="https://www.autoriteprotectiondonnees.be" target="_blank" rel="noopener noreferrer" className="text-[#ee721a] hover:underline">autoriteprotectiondonnees.be</a>.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="pt-4 border-t border-gray-200">
              <Link to="/" className="text-[#ee721a] hover:underline text-sm font-medium">← Retour à l'accueil</Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
