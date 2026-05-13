'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { AboutSection } from '@/components/sections/about-section'
import { CtaSection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import { useContent } from '@/hooks/use-content'

const ease = [0.22, 1, 0.36, 1] as const

const defaults = {
  hero: {
    eyebrow: 'À propos',
    title: 'Autodidacte, professeur, passionné.',
    description:
      "Depuis 2008, j'enseigne le piano à celles et ceux qui n'ont jamais osé. Sans solfège imposé, sans pression, avec une seule règle : prendre du plaisir.",
  },
  values: [
    {
      title: 'L\'écoute avant tout',
      description:
        "Avant de jouer une seule note, on se parle. Ce que vous aimez, ce qui vous fait peur, ce que vous voulez vraiment. Tout part de là.",
    },
    {
      title: 'La méthode sans méthode',
      description:
        "Pas de méthode rigide. J'adapte chaque cours à votre niveau, à votre piano, à votre énergie du moment. C'est ce qui change tout.",
    },
    {
      title: 'Le plaisir comme boussole',
      description:
        "Si vous ne prenez pas plaisir, on change. Le piano doit être un refuge, pas une corvée — surtout quand on commence à 50, 60 ou 70 ans.",
    },
  ],
  gallery: [
    'https://i.ibb.co/Z6FVHy7L/cours-clavier-synthetiseur.jpg',
    'https://i.ibb.co/pjLJHnKz/1911c2fa-3163-45c5-953f-ed89d12c74d0-691dfa698a477968376604.jpg',
    'https://images.unsplash.com/photo-1601312378427-822b2b41da35?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?auto=format&fit=crop&w=900&q=80',
  ],
}

function HandSquiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 24" className={className} aria-hidden fill="none">
      <path d="M2 12 Q 14 2, 26 12 T 50 12 T 74 12 T 98 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
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

export function AboutContent() {
  const { data } = useContent('about', defaults)
  const hero = data.hero ?? defaults.hero
  const values = data.values ?? defaults.values
  const gallery = data.gallery ?? defaults.gallery

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        breadcrumb="À propos"
      />

      {/* Section signature — sans le lien "Découvrir mon parcours" car on y est */}
      <AboutSection showLink={false} />

      {/* Valeurs — panel clair avec accent jaune */}
      <section className="relative overflow-hidden bg-[#FBF5DE] text-[#111] dark:bg-[#1a1815] dark:text-white">
        <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 size-[420px] rounded-full bg-[#F2C318]/30 blur-3xl dark:bg-[#F2C318]/15" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
          <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-hand text-2xl text-[#111]/80 dark:text-white/75">— Ce qui me guide</span>
                <HandSquiggle className="h-3 w-16 opacity-50" />
              </div>
              <h2 className="mt-5 max-w-2xl font-display text-[36px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[46px] lg:text-[56px]">
                Trois principes,
                <br />
                <span className="marker-yellow">une seule promesse.</span>
              </h2>
            </div>
            <p className="max-w-md text-[15px] leading-[1.7] text-[#111]/65 dark:text-white/65 sm:text-[16px]">
              Quinze ans d&apos;enseignement m&apos;ont appris que la pédagogie commence par
              l&apos;écoute. Voici les trois piliers de mon approche.
            </p>
          </div>

          <ul className="mt-14 grid gap-6 lg:grid-cols-3">
            {values.map((v: any, i: number) => {
              const isYellow = i === 1
              return (
                <motion.li
                  key={v.title || i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, ease, delay: i * 0.08 }}
                  className={`group relative rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                    isYellow
                      ? 'border-transparent bg-[#F2C318] hover:bg-[#F2C318]/90'
                      : 'border-[#111]/10 bg-white hover:border-[#F2C318]/60 dark:border-white/10 dark:bg-[#0f0f0f] dark:hover:border-[#F2C318]/60'
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className={`font-display text-3xl font-bold ${isYellow ? 'text-[#111]/30' : 'text-[#111]/20 dark:text-white/20'}`}>
                      0{i + 1}
                    </span>
                    <div className={`h-px flex-1 ${isYellow ? 'bg-[#111]/15' : 'bg-[#111]/10 dark:bg-white/15'}`} />
                  </div>
                  <h3 className={`mt-5 font-display text-[22px] font-semibold leading-tight tracking-[-0.01em] ${isYellow ? 'text-[#111]' : 'text-[#111] dark:text-white'}`}>
                    {v.title}
                  </h3>
                  <p className={`mt-3 text-[14px] leading-[1.7] ${isYellow ? 'text-[#111]/75' : 'text-[#111]/65 dark:text-white/65'}`}>
                    {v.description}
                  </p>
                </motion.li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Galerie éditoriale */}
      <section className="relative overflow-hidden bg-[#F7F5F2] text-[#111] dark:bg-[#161513] dark:text-white">
        <HandStar className="absolute right-16 top-24 size-7 -rotate-12 text-[#111] opacity-40 dark:text-white dark:opacity-30" />
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
          <div className="flex items-end justify-between gap-10">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-hand text-2xl text-[#111]/80 dark:text-white/75">— En images</span>
                <HandSquiggle className="h-3 w-16 text-[#111] opacity-50 dark:text-white" />
              </div>
              <h2 className="mt-6 font-display text-[40px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[52px] lg:text-[60px]">
                Mon <span className="marker-yellow">quotidien.</span>
              </h2>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {gallery.map((src: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                className={`relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#111]/5 ring-1 ring-[#111]/5 dark:bg-white/5 dark:ring-white/10 ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'} transition-transform duration-500 hover:rotate-0`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width:768px) 25vw, 50vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
