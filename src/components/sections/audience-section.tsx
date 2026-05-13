'use client'

import { motion } from 'framer-motion'
import {
  Briefcase,
  Coffee,
  Heart,
  RotateCcw,
  Sparkles,
  Sun,
} from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

const profiles = [
  {
    icon: Sparkles,
    title: 'Le grand débutant',
    desc: "Vous n'avez jamais touché un piano et vous rêvez d'essayer. C'est l'occasion idéale — pas besoin de prérequis, on part de zéro.",
  },
  {
    icon: RotateCcw,
    title: 'Le re-débutant',
    desc: "Vous avez fait du piano enfant et vous voulez vous y remettre, sans la pression du conservatoire qui vous a fait arrêter.",
  },
  {
    icon: Coffee,
    title: 'Le retraité curieux',
    desc: "Vous avez enfin le temps. On apprend à votre rythme, dans la bonne humeur, sur des morceaux qui vous parlent vraiment.",
  },
  {
    icon: Briefcase,
    title: "L'actif débordé",
    desc: "Cadre, médecin, indépendant — vous voulez un sas en fin de journée. Cours en soirée chez vous, sans déplacement.",
  },
  {
    icon: Heart,
    title: "L'amateur de progrès",
    desc: "Vous jouez déjà mais vous bloquez. On dépasse les plateaux ensemble, sans gammes à n'en plus finir.",
  },
  {
    icon: Sun,
    title: "Le pianiste du dimanche",
    desc: "Vous voulez juste jouer pour vous, sans objectif d'examen. Le piano comme plaisir pur — c'est exactement ça.",
  },
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

export function AudienceSection() {
  return (
    <section className="relative overflow-hidden bg-[#0f0f0f] text-white">
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3 text-white/70">
              <span className="font-hand text-2xl">— À qui je m&apos;adresse</span>
              <HandSquiggle className="h-3 w-16 opacity-60" />
            </div>
            <h2 className="mt-5 max-w-2xl font-display text-[36px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[46px] lg:text-[56px]">
              Tous les profils,
              <br />
              <span className="italic text-[#F2C318]">sauf un.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[15px] leading-[1.7] text-white/65 sm:text-[16px]">
              Je n&apos;enseigne pas aux enfants après 16h30 — pas par principe, simplement parce
              que c&apos;est le créneau réservé aux adultes qui sortent du travail. En dehors de ça,
              il n&apos;y a aucun profil-type.
            </p>
            <p className="mt-4 font-hand text-2xl text-white/75">
              Si vous voulez jouer, vous avez votre place.
            </p>
          </div>
        </div>

        <HandArrow className="absolute right-12 top-44 hidden h-14 w-24 rotate-12 text-white/30 lg:block" />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {profiles.map((p, i) => (
            <motion.li
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease, delay: i * 0.06 }}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-2xl font-bold text-white/25 transition-colors duration-300 group-hover:text-white/55">
                  0{i + 1}
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <span className="mt-6 inline-flex size-11 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] text-white/85 transition-colors duration-300 group-hover:border-white/40">
                <p.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-[20px] font-semibold leading-tight tracking-[-0.01em] text-white">
                {p.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.7] text-white/60">{p.desc}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
