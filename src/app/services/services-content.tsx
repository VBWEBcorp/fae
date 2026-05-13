'use client'

import { motion } from 'framer-motion'
import {
  CalendarClock,
  Car,
  Heart,
  HomeIcon,
  MessageCircle,
  Music,
  Phone,
  PiggyBank,
  Sparkles,
  Volume2,
} from 'lucide-react'
import Link from 'next/link'

import { PageHero } from '@/components/sections/page-hero'

const ease = [0.22, 1, 0.36, 1] as const

const principles = [
  {
    icon: Music,
    title: 'Sans solfège, jamais.',
    desc: "On joue d'abord, on comprend ensuite. La théorie n'arrive que si l'élève en ressent l'envie — et même là, elle reste un outil, jamais un passage obligé.",
  },
  {
    icon: Sparkles,
    title: 'Adaptée à votre niveau.',
    desc: "Pas de programme imposé. Vous voulez jouer Ludovico Einaudi, Bill Evans ou la BO de votre film préféré ? On part de là, ensemble.",
  },
  {
    icon: Heart,
    title: 'Bienveillante, toujours.',
    desc: "Pas de jugement, pas de pression. Le piano doit rester un plaisir — surtout quand on commence ou qu'on reprend à 50, 60 ou 70 ans.",
  },
  {
    icon: HomeIcon,
    title: 'Chez vous, jamais ailleurs.',
    desc: "Vous restez sur votre piano, dans votre espace, dans votre rythme. Je me déplace dans tout le bassin annemassien et genevois.",
  },
]

const steps = [
  {
    n: '01',
    title: 'On se parle',
    desc: "Un premier échange par téléphone, sans engagement. On parle de vos envies, de votre piano, de vos contraintes. 15 minutes suffisent.",
  },
  {
    n: '02',
    title: 'Premier cours d\'essai',
    desc: "Je viens chez vous pour un cours complet. On joue, on discute, on voit si le courant passe. Aucun engagement à la suite.",
  },
  {
    n: '03',
    title: 'On construit ensemble',
    desc: "Si on continue, on fixe un rythme qui vous va : hebdomadaire, bimensuel, à la carte. Je m'adapte à votre agenda.",
  },
  {
    n: '04',
    title: 'On joue, on progresse',
    desc: "Chaque cours est construit autour de vous : ce que vous voulez jouer, ce que vous voulez comprendre. Et toujours dans la bonne humeur.",
  },
]

const practical = [
  {
    icon: CalendarClock,
    label: 'Horaires',
    value: 'Lundi → samedi, journée et soirée. Cours adultes après 16h30.',
  },
  {
    icon: Car,
    label: 'Déplacements',
    value: "Annemasse, Genève, Gaillard, Ambilly, Vétraz-Monthoux, Étrembières, Ville-la-Grand.",
  },
  {
    icon: Volume2,
    label: 'Type de piano',
    value: "Acoustique droit, queue, numérique, clavier — peu importe. Je m'adapte à votre instrument.",
  },
  {
    icon: PiggyBank,
    label: 'Tarif',
    value: 'À partir de 45€ le cours individuel. Forfait dégressif possible. Premier échange offert.',
  },
]

const faqs = [
  {
    q: "Je n'ai jamais joué. C'est vraiment possible à mon âge ?",
    a: "Oui, et c'est même souvent plus simple qu'on ne le pense. Le cerveau adulte apprend différemment, mais il apprend très bien. La plupart de mes élèves jouent leurs premiers morceaux complets en quelques semaines.",
  },
  {
    q: "Vraiment sans solfège ? Comment ça marche ?",
    a: "On utilise des grilles d'accords, l'oreille, la mémoire visuelle, et plein d'autres outils. Le solfège n'est qu'une façon d'écrire la musique — il en existe d'autres, plus directes pour apprendre à jouer.",
  },
  {
    q: "Et si je veux jouer un morceau qui n'est pas dans votre répertoire ?",
    a: "Justement, je n'ai pas de répertoire imposé. Vous arrivez avec ce que vous aimez, on travaille dessus. Variété, jazz, pop, classique, BO de film — tout est jouable.",
  },
  {
    q: "Vous donnez des cours aux enfants ?",
    a: "Pas après 16h30 — ces créneaux sont réservés aux adultes qui finissent leur journée de travail. Pour les enfants en journée, contactez-moi : je vois selon les disponibilités.",
  },
  {
    q: "Je n'ai pas de piano. Vous en prêtez ?",
    a: "Je ne prête pas, mais je peux vous conseiller pour acheter (occasion, neuf, numérique). Un clavier 88 touches à 300€ suffit largement pour commencer.",
  },
  {
    q: "Comment se déroule le premier cours ?",
    a: "On joue dès la première minute. Vraiment. Vous repartez avec un morceau commencé, même si vous n'aviez jamais touché un piano avant.",
  },
]

function HandSquiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 24" className={className} aria-hidden fill="none">
      <path d="M2 12 Q 14 2, 26 12 T 50 12 T 74 12 T 98 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
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

export function ServicesContent() {
  return (
    <>
      <PageHero
        eyebrow="La méthode"
        title="Apprendre le piano, sans tout ce qui freine."
        description="Pas de solfège imposé, pas de programme rigide, pas de jugement. Une méthode construite en plus de 15 ans, pensée pour des adultes qui veulent prendre du plaisir."
        breadcrumb="La méthode"
      />

      {/* Les 4 principes — éditorial */}
      <section className="relative overflow-hidden bg-white text-[#111] dark:bg-[#1c1c1c] dark:text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-hand text-2xl text-[#111]/80 dark:text-white/75">— Les 4 piliers</span>
                <HandSquiggle className="h-3 w-16 text-[#111] opacity-50 dark:text-white" />
              </div>
              <h2 className="mt-6 max-w-2xl font-display text-[40px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[52px] lg:text-[64px]">
                Quatre principes,
                <br />
                <span className="marker-yellow">zéro contrainte.</span>
              </h2>
            </div>
            <p className="max-w-md text-[16px] leading-[1.7] text-[#111]/65 dark:text-white/65 sm:text-[17px]">
              Tout ce que vous lirez ci-dessous est ce que j&apos;applique réellement, chaque
              jour, avec chacun de mes élèves. Pas du marketing.
            </p>
          </div>

          <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-[#111]/8 ring-1 ring-[#111]/8 dark:bg-white/10 dark:ring-white/10 sm:grid-cols-2">
            {principles.map((p, i) => (
              <motion.li
                key={p.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, ease, delay: i * 0.05 }}
                className="group relative bg-white p-10 transition-colors duration-300 hover:bg-[#F7F5F2] dark:bg-[#1c1c1c] dark:hover:bg-[#252525] sm:p-14"
              >
                <div className="flex items-start gap-6">
                  <span className="font-hand text-3xl text-[#F2C318] sm:text-4xl">0{i + 1}</span>
                  <div className="flex-1">
                    <span className="inline-flex size-11 -rotate-3 items-center justify-center rounded-2xl bg-[#F2C318] text-[#111] ring-1 ring-[#111]/10 transition-transform duration-300 group-hover:rotate-0">
                      <p.icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="mt-5 font-display text-[22px] font-semibold leading-tight tracking-[-0.01em] sm:text-[26px]">
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-md text-[15px] leading-[1.7] text-[#111]/65 dark:text-white/65">{p.desc}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Comment ça se passe — déroulé (panel sombre) */}
      <section className="relative overflow-hidden bg-[#111] text-white">
        <div aria-hidden className="pointer-events-none absolute -top-32 -left-24 size-[420px] rounded-full bg-[#F2C318]/20 blur-3xl" />
        <HandStar className="absolute right-16 top-24 size-7 -rotate-12 text-[#F2C318]/40" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
          <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div>
              <div className="flex items-center gap-3 text-[#F2C318]">
                <span className="font-hand text-2xl">— Comment ça se passe</span>
                <HandSquiggle className="h-3 w-16 opacity-70" />
              </div>
              <h2 className="mt-5 max-w-2xl font-display text-[36px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[46px] lg:text-[56px]">
                Du premier appel
                <br />
                au <span className="text-[#F2C318]">premier morceau.</span>
              </h2>
            </div>
            <p className="max-w-md text-[15px] leading-[1.7] text-white/65 sm:text-[16px]">
              Aucun engagement, aucun forfait imposé, aucun papier à signer. On commence
              simplement par parler.
            </p>
          </div>

          <ol className="relative mt-14 grid gap-8 lg:grid-cols-4 lg:gap-6">
            <div
              aria-hidden
              className="absolute left-0 right-0 top-[88px] hidden border-t-2 border-dashed border-white/20 lg:block"
            />

            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, ease, delay: i * 0.08 }}
                className="relative"
              >
                <div className="relative z-10 flex size-16 items-center justify-center rounded-full bg-[#F2C318] font-display text-[18px] font-bold text-[#111] ring-8 ring-[#111]">
                  {s.n}
                </div>
                <h3 className="mt-6 font-display text-[20px] font-semibold leading-tight tracking-[-0.01em] text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-white/65">{s.desc}</p>
              </motion.li>
            ))}
          </ol>

          <div className="mt-14 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#F2C318] px-7 py-4 text-[15px] font-semibold text-[#111] transition-transform hover:-translate-y-0.5"
            >
              <Phone className="size-4" />
              Réserver mon premier échange
            </Link>
          </div>
        </div>
      </section>

      {/* Aspects pratiques */}
      <section className="relative overflow-hidden bg-white text-[#111] dark:bg-[#1c1c1c] dark:text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-hand text-2xl text-[#111]/80 dark:text-white/75">— Côté pratique</span>
                <HandSquiggle className="h-3 w-16 text-[#111] opacity-50 dark:text-white" />
              </div>
              <h2 className="mt-6 max-w-2xl font-display text-[40px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[52px] lg:text-[64px]">
                Tout ce qu&apos;il faut
                <br />
                <span className="marker-yellow">savoir.</span>
              </h2>
            </div>
            <p className="max-w-md font-hand text-2xl leading-snug text-[#111]/75 dark:text-white/70 sm:text-3xl">
              Pas de petites lignes.
              <br />
              Pas de pièges.
              <br />— Juste le piano.
            </p>
          </div>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2">
            {practical.map((p, i) => (
              <motion.li
                key={p.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                className="flex items-start gap-5 rounded-3xl border border-[#111]/8 bg-[#F7F5F2] p-8 transition-colors duration-300 hover:border-[#F2C318] dark:border-white/10 dark:bg-[#252525] dark:hover:border-[#F2C318]"
              >
                <span className="flex size-12 shrink-0 -rotate-3 items-center justify-center rounded-2xl bg-[#F2C318] text-[#111] ring-1 ring-[#111]/10">
                  <p.icon className="size-5" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#111]/55 dark:text-white/55">
                    {p.label}
                  </p>
                  <p className="mt-2 text-[15px] leading-[1.6] text-[#111]/80 dark:text-white/80">{p.value}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden bg-[#F7F5F2] text-[#111] dark:bg-[#161513] dark:text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="font-hand text-2xl text-[#111]/80 dark:text-white/75">— Les questions qu&apos;on me pose</span>
              <HandSquiggle className="h-3 w-16 text-[#111] opacity-50 dark:text-white" />
            </div>
            <h2 className="mt-6 font-display text-[40px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[52px] lg:text-[60px]">
              FAQ <span className="marker-yellow">honnête.</span>
            </h2>
          </div>

          <HandArrow className="mx-auto mt-10 h-12 w-20 text-[#111] opacity-50 dark:text-white" />

          <dl className="mt-12 space-y-4">
            {faqs.map((f, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, ease, delay: i * 0.04 }}
                className="group rounded-2xl border border-[#111]/10 bg-white p-6 transition-colors hover:border-[#F2C318]/60 dark:border-white/10 dark:bg-[#1c1c1c] dark:hover:border-[#F2C318]/60 sm:p-8"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-display text-[17px] font-semibold leading-snug tracking-[-0.01em] sm:text-[19px]">
                    {f.q}
                  </span>
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#F2C318]/20 text-[#111] transition-transform duration-300 group-open:rotate-45 dark:text-white">
                    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-[#111]/70 dark:text-white/70">{f.a}</p>
              </motion.details>
            ))}
          </dl>

          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <p className="font-hand text-2xl text-[#111]/70 dark:text-white/70">
              Une autre question ?
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#111] px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#111]/90 dark:bg-white dark:text-[#111] dark:hover:bg-white/90"
            >
              <MessageCircle className="size-4" />
              Posez-la moi directement
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}
