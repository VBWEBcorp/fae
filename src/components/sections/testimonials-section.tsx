'use client'

import { motion } from 'framer-motion'
import { Play, User, UserCircle2, UserRound, type LucideIcon } from 'lucide-react'
import { useState } from 'react'

import { useContent } from '@/hooks/use-content'

type VideoTestimonial = {
  name: string
  role: string
  text: string
  videoUrl?: string
  duration?: string
}

const defaultTestimonials: VideoTestimonial[] = [
  {
    name: 'Christine, 62 ans',
    role: 'Retraitée · Annemasse',
    text: "Je rêvais d'apprendre depuis mes 20 ans. Raphael m'a fait jouer dès le premier cours, sans solfège. Une libération.",
    duration: '1:42',
  },
  {
    name: 'Jean-Marc, 58 ans',
    role: 'Cadre · Genève',
    text: "Je voulais jouer du jazz, pas du Bach. Raphael s'est adapté à mes goûts dès la première séance.",
    duration: '2:08',
  },
  {
    name: 'Florence, 49 ans',
    role: 'Médecin · Ambilly',
    text: "Le cours en fin de journée chez moi, c'est devenu mon rituel anti-stress. Et je progresse vraiment.",
    duration: '1:24',
  },
  {
    name: 'Alain, 71 ans',
    role: 'Retraité · Vétraz-Monthoux',
    text: "Aucun jugement, jamais. À mon âge je ne pensais plus jamais oser. Trois ans après, je joue Satie.",
    duration: '2:31',
  },
  {
    name: 'Sandra, 44 ans',
    role: 'Architecte · Annemasse',
    text: "Pas de gammes pendant des mois, pas de partitions imbuvables. On joue ce qu'on aime, c'est tout.",
    duration: '1:55',
  },
  {
    name: 'Patrick, 67 ans',
    role: 'Retraité · Gaillard',
    text: "Il s'adapte à mon vieux droit, à mes doigts qui ne sont plus très souples, à mon rythme. Du sur-mesure.",
    duration: '2:12',
  },
]

const defaults = {
  eyebrow: 'Témoignages vidéo',
  title: 'Ce qu\'ils en disent',
  description:
    "Adultes, retraités, débutants ou ré-débutants — ils ont franchi le pas. Voici leurs mots, en vidéo.",
  testimonials: defaultTestimonials,
}

const ease = [0.22, 1, 0.36, 1] as const

/** Trois icônes personnes en rotation pour varier le visuel des vignettes. */
const PERSON_ICONS: LucideIcon[] = [User, UserRound, UserCircle2]

function HandSquiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 24" className={className} aria-hidden fill="none">
      <path d="M2 12 Q 14 2, 26 12 T 50 12 T 74 12 T 98 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function VideoCard({ t, i }: { t: VideoTestimonial; i: number }) {
  const [, setPlaying] = useState(false)
  const rotate = i % 3 === 0 ? '-rotate-1' : i % 3 === 1 ? 'rotate-1' : 'rotate-0'
  const Icon = PERSON_ICONS[i % PERSON_ICONS.length]

  return (
    <motion.figure
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease, delay: i * 0.05 }}
      className={`group relative ${rotate} transition-transform duration-500 hover:rotate-0 hover:-translate-y-1`}
    >
      <button
        type="button"
        onClick={() => setPlaying((v) => !v)}
        className="relative block aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] bg-white text-left shadow-[0_24px_50px_-24px_rgba(17,17,17,0.25)] ring-1 ring-[#111]/8 transition-colors duration-300 hover:bg-[#FBF5DE] dark:bg-[#1c1c1c] dark:ring-white/10 dark:hover:bg-[#252220]"
        aria-label={`Lire le témoignage vidéo de ${t.name}`}
      >
        {/* Bandeau jaune décoratif en haut */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#F2C318]/40 via-[#F2C318]/15 to-transparent dark:from-[#F2C318]/25 dark:via-[#F2C318]/8"
        />

        {/* Icône personne centrée */}
        <Icon
          className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 size-32 text-[#111]/85 transition-transform duration-500 group-hover:scale-105 dark:text-white sm:size-36"
          strokeWidth={1.2}
          aria-hidden
        />

        {/* Play button overlay */}
        <span className="absolute left-1/2 top-[62%] -translate-x-1/2 flex size-14 items-center justify-center rounded-full bg-[#111] text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.4)] ring-4 ring-white/40 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#F2C318] group-hover:text-[#111] group-hover:ring-[#111]/10 dark:bg-white dark:text-[#111] dark:ring-white/20 dark:group-hover:bg-[#F2C318] dark:group-hover:ring-[#111]/15">
          <Play className="size-5 fill-current" />
        </span>

        {/* Durée */}
        {t.duration ? (
          <span className="absolute right-3 top-3 rounded-full bg-[#111] px-2 py-0.5 font-mono text-[10px] text-white dark:bg-white dark:text-[#111]">
            {t.duration}
          </span>
        ) : null}

        {/* Citation en bas */}
        <div className="absolute inset-x-0 bottom-0 border-t border-[#111]/10 bg-white p-4 dark:border-white/10 dark:bg-[#1c1c1c]">
          <p className="line-clamp-3 font-display text-[13px] leading-snug text-[#111] dark:text-white sm:text-[14px]">
            « {t.text} »
          </p>
        </div>
      </button>

      <figcaption className="mt-4 flex items-center justify-between gap-3 px-1">
        <div className="min-w-0">
          <p className="truncate font-display text-[15px] font-semibold text-[#111] dark:text-white">{t.name}</p>
          <p className="truncate text-[12px] text-[#111]/55 dark:text-white/55">{t.role}</p>
        </div>
        <span className="font-hand text-lg text-[#111]/55 dark:text-white/55">vidéo</span>
      </figcaption>
    </motion.figure>
  )
}

export function TestimonialsSection() {
  const { data } = useContent('testimonials', defaults)
  const testimonials: VideoTestimonial[] = data.testimonials ?? defaults.testimonials

  return (
    <section className="relative overflow-hidden bg-[#F7F5F2] text-[#111] dark:bg-[#161513] dark:text-white">
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3 text-[#111]/80 dark:text-white/75">
              <span className="font-hand text-2xl">— {data.eyebrow ?? defaults.eyebrow}</span>
              <HandSquiggle className="h-3 w-16 opacity-50" />
            </div>
            <h2 className="mt-5 max-w-2xl font-display text-[36px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[46px] lg:text-[56px]">
              Ce qu&apos;ils
              <br />
              en <span className="italic">disent.</span>
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-[1.7] text-[#111]/65 dark:text-white/65 sm:text-[16px]">
            {data.description ?? defaults.description}
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((t, i) => (
            <VideoCard key={`${t.name}-${i}`} t={t} i={i} />
          ))}
        </div>

        <p className="mt-12 text-center font-hand text-2xl text-[#111]/55 dark:text-white/55">
          Cliquez sur une vignette pour lancer la vidéo.
        </p>
      </div>
    </section>
  )
}
