'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const ease = [0.22, 1, 0.36, 1] as const

const trust = [
  { value: '2008', label: 'Premiers cours' },
  { value: '200+', label: 'Élèves accompagnés' },
  { value: '0', label: 'Solfège imposé' },
]

function HandSquiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 24" className={className} aria-hidden fill="none">
      <path
        d="M2 12 Q 14 2, 26 12 T 50 12 T 74 12 T 98 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

function HandArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" className={className} aria-hidden fill="none">
      <path d="M5 40 C 30 10, 70 10, 110 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M100 22 L 110 35 L 95 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

function HandStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden fill="none">
      <path d="M20 4 L 22 18 L 36 20 L 22 22 L 20 36 L 18 22 L 4 20 L 18 18 Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export function AboutSection({ showLink = true }: { showLink?: boolean } = {}) {
  return (
    <section className="relative overflow-hidden bg-white text-[#111] dark:bg-[#1c1c1c] dark:text-white">
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        {/* BANDEAU PHOTO en haut — composition magazine */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease }}
          className="relative aspect-[5/2] w-full overflow-hidden rounded-[2rem] bg-[#111]/5 ring-1 ring-[#111]/8 dark:bg-white/5 dark:ring-white/10 sm:aspect-[16/6]"
        >
          <Image
            src="https://i.ibb.co/Z6FVHy7L/cours-clavier-synthetiseur.jpg"
            alt="Cours de piano avec Raphael Raholijaona"
            fill
            sizes="(min-width:1024px) 1200px, 90vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

          {/* Étiquette manuscrite jaune flottante */}
          <motion.div
            initial={{ opacity: 0, y: 10, rotate: -10 }}
            whileInView={{ opacity: 1, y: 0, rotate: -6 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="absolute bottom-6 right-6 max-w-[260px] rounded-2xl bg-[#F2C318] px-5 py-3 text-[#111] shadow-[0_18px_40px_-18px_rgba(242,195,24,0.5)] sm:bottom-8 sm:right-8"
          >
            <p className="font-hand text-xl leading-tight">
              « On joue d&apos;abord,
              <br />
              on comprend ensuite. »
            </p>
          </motion.div>

          {/* Doodle étoile */}
          <HandStar className="absolute left-8 top-8 size-7 -rotate-12 text-[#F2C318]" />
        </motion.div>

        {/* CONTENU sous le bandeau — grille éditoriale 2 colonnes */}
        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          {/* Colonne gauche : titre + corps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 text-[#111]/80 dark:text-white/75">
              <span className="font-hand text-2xl">— Qui suis-je ?</span>
              <HandSquiggle className="h-3 w-16 opacity-50" />
            </div>

            <h2 className="mt-5 font-display text-[40px] font-bold leading-[1.02] tracking-[-0.035em] sm:text-[48px] lg:text-[60px]">
              Pas de conservatoire.
              <br />
              <span className="marker-yellow">Et c&apos;est tant mieux.</span>
            </h2>
          </motion.div>

          {/* Colonne droite : paragraphes + stats + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4 text-[16px] leading-[1.7] text-[#111]/75 dark:text-white/75 sm:text-[17px]">
              <p>
                Je m&apos;appelle <span className="font-semibold text-[#111] dark:text-white">Raphael Raholijaona</span>.
                Autodidacte depuis l&apos;enfance, j&apos;ai donné mon premier cours en 2008 —
                sans parcours imposé, sans solfège forcé, juste l&apos;envie de transmettre ce
                que j&apos;avais appris seul.
              </p>
              <p className="text-[#111]/60 dark:text-white/60">
                J&apos;accompagne adultes et retraités d&apos;Annemasse à Genève, en journée
                comme en soirée. Mon rôle : trouver la porte d&apos;entrée qui vous convient
                — et l&apos;ouvrir.
              </p>
            </div>

            {/* Stats inline */}
            <dl className="grid grid-cols-3 gap-6 border-t border-[#111]/10 pt-6 dark:border-white/15">
              {trust.map((t) => (
                <div key={t.label}>
                  <dt className="font-hand text-3xl text-[#111] dark:text-white sm:text-4xl">{t.value}</dt>
                  <dd className="mt-1 text-[11px] leading-snug tracking-wide text-[#111]/55 dark:text-white/55 uppercase">
                    {t.label}
                  </dd>
                </div>
              ))}
            </dl>

            {showLink && (
              <div className="flex items-center gap-4">
                <Link
                  href="/a-propos"
                  className="group inline-flex items-center gap-2 text-[15px] font-semibold text-[#111] dark:text-white"
                >
                  <span className="relative">
                    Découvrir mon parcours
                    <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left bg-[#111] transition-transform duration-300 group-hover:scale-x-110 dark:bg-white" />
                  </span>
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <HandArrow className="hidden h-8 w-14 -rotate-6 text-[#F2C318] sm:block" />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
