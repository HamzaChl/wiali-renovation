import { motion, type Variants, type Transition } from 'framer-motion'
import { Link } from 'react-router-dom'

const ease: Transition = { duration: 0.6, ease: 'easeOut' }
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const fadeUp: Variants = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: ease } }

export default function Legal() {
  return (
    <section className="min-h-screen bg-[#f8f8f6] pt-36 pb-24">
      <div className="px-[50px] max-w-3xl">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.span variants={fadeUp} className="label block mb-4">Informations légales</motion.span>
          <motion.h1
            variants={fadeUp}
            className="font-bold text-[#0a0f18] tracking-tight mb-12"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Mentions légales
          </motion.h1>

          <motion.div variants={stagger} className="space-y-10 text-gray-500 text-sm leading-relaxed">

            <motion.div variants={fadeUp}>
              <h2 className="text-base font-bold text-[#0a0f18] mb-3">Éditeur du site</h2>
              <p><strong className="text-[#0a0f18]">Wiali Rénovation SRL</strong></p>
              <p>Numéro d'entreprise : BE 1016.222.577</p>
              <p>Rue des Bons Enfants 19, 1120 Bruxelles, Belgique</p>
              <p>Téléphone : <a href="tel:+32487894551" className="text-[#ee721a] hover:underline">+32 487 89 45 51</a></p>
              <p>E-mail : <a href="mailto:aliboumazaak6@gmail.com" className="text-[#ee721a] hover:underline">aliboumazaak6@gmail.com</a></p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-base font-bold text-[#0a0f18] mb-3">Hébergement</h2>
              <p>Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis.</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-base font-bold text-[#0a0f18] mb-3">Propriété intellectuelle</h2>
              <p>L'ensemble du contenu de ce site (textes, images, graphismes, logo) est la propriété exclusive de Wiali Rénovation SRL et est protégé par les lois belges et internationales relatives à la propriété intellectuelle. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-base font-bold text-[#0a0f18] mb-3">Responsabilité</h2>
              <p>Wiali Rénovation SRL s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, elle ne peut garantir l'exhaustivité ou l'absence d'erreur des informations présentées et décline toute responsabilité pour tout dommage résultant de l'utilisation de ce site.</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="text-base font-bold text-[#0a0f18] mb-3">Droit applicable</h2>
              <p>Le présent site et ses mentions légales sont soumis au droit belge. En cas de litige, les tribunaux compétents sont ceux de Bruxelles.</p>
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
