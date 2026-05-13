'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

import { useContent } from '@/hooks/use-content'

const ease = [0.22, 1, 0.36, 1] as const

const defaultServices = [
  {
    title: 'Sans solfège, jamais.',
    desc: "On joue d'abord, on comprend ensuite. La théorie n'arrive que si l'élève en ressent l'envie.",
  },
  {
    title: 'Adaptée à votre niveau.',
    desc: "Débutant·e complet·ète ou pianiste curieux·se qui veut sortir du conservatoire — chaque cours est construit pour vous.",
  },
  {
    title: 'Bienveillante, toujours.',
    desc: "Pas de jugement, pas de pression. Le piano comme un plaisir, à votre rythme, dans la confiance.",
  },
  {
    title: 'Chez vous, jamais ailleurs.',
    desc: "Vous restez sur votre piano, dans votre espace. Cours en journée, en soirée, du lundi au samedi.",
  },
]

function HandSquiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 24" className={className} aria-hidden fill="none">
      <path d="M2 12 Q 14 2, 26 12 T 50 12 T 74 12 T 98 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export function ServicesPreview() {
  const { data } = useContent('services', {
    hero: { eyebrow: 'La méthode' },
    services: defaultServices,
  })

  const services = (data.services ?? defaultServices).slice(0, 4)

  return (
    <section className="relative overflow-hidden bg-[#FBF5DE] text-[#111] dark:bg-[#1a1815] dark:text-white">
      {/* Tâches jaunes décoratives en background */}
      <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 size-[360px] rounded-full bg-[#F2C318]/35 blur-3xl dark:bg-[#F2C318]/15" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-32 size-[320px] rounded-full bg-[#F2C318]/25 blur-3xl dark:bg-[#F2C318]/10" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        {/* Editorial header */}
        <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-hand text-2xl text-[#111]/80 dark:text-white/75">— La méthode</span>
              <HandSquiggle className="h-3 w-16 opacity-50" />
            </div>
            <h2 className="mt-5 max-w-2xl font-display text-[36px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[46px] lg:text-[56px]">
              Quatre principes,
              <br />
              <span className="marker-yellow">zéro contrainte.</span>
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-[1.7] text-[#111]/65 dark:text-white/65 sm:text-[16px]">
            Une approche construite en plus de 15 ans d&apos;enseignement, pensée pour celles et ceux qui veulent vraiment se faire plaisir au piano — pas passer un examen.
          </p>
        </div>

        {/* Liste éditoriale : panneaux alternés cream/jaune pour la couleur */}
        <ul className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-[#111]/10 ring-1 ring-[#111]/10 dark:bg-white/10 dark:ring-white/10 sm:grid-cols-2">
          {services.map((s: any, i: number) => {
            const isYellow = i === 1 || i === 2
            const baseBg = isYellow
              ? 'bg-[#F2C318] dark:bg-[#F2C318]'
              : 'bg-white dark:bg-[#0f0f0f]'
            const hoverBg = isYellow
              ? 'hover:bg-[#F2C318]/90'
              : 'hover:bg-[#FBF5DE] dark:hover:bg-[#1a1815]'

            return (
              <motion.li
                key={s.title || i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, ease, delay: i * 0.06 }}
                className={`group relative p-8 transition-colors duration-300 sm:p-10 ${baseBg} ${hoverBg}`}
              >
                <div className="flex items-start gap-6">
                  <span className="font-display text-[28px] font-bold text-[#111]/30 transition-colors duration-300 group-hover:text-[#111] dark:text-white/30 dark:group-hover:text-white sm:text-[32px]">
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className={`font-display text-[20px] font-semibold leading-tight tracking-[-0.01em] sm:text-[24px] ${isYellow ? 'text-[#111]' : 'text-[#111] dark:text-white'}`}>
                      {s.title}
                    </h3>
                    <p className={`mt-3 max-w-md text-[14px] leading-[1.7] ${isYellow ? 'text-[#111]/75' : 'text-[#111]/65 dark:text-white/65'}`}>
                      {s.desc || s.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            )
          })}
        </ul>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 sm:flex-row">
          <p className="font-hand text-2xl text-[#111]/70 dark:text-white/70">
            Vous voulez en savoir plus ?
          </p>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full bg-[#111] px-6 py-3 text-[14px] font-semibold text-white transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-[#111]"
          >
            Voir tous les détails
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
