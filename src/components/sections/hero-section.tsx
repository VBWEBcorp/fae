'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Music2, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ValuesMarquee } from '@/components/sections/values-marquee'
import { Button } from '@/components/ui/button'
import { useContent } from '@/hooks/use-content'

const ease = [0.22, 1, 0.36, 1] as const

const defaults = {
  eyebrow: 'Cours de piano · Annemasse & Genève',
  title: 'Apprendre le piano, autrement.',
  description:
    "Méthode sans solfège, adaptée à chaque élève et à chaque niveau. Pour adultes et retraités, en journée comme en soirée. Je me déplace à votre domicile.",
  button1: 'Prendre contact',
  button2: 'Découvrir la méthode',
  image: 'https://i.ibb.co/LdXnWxKh/suivre-cours-de-piano-en-ligne.png',
}

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

function HandStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden fill="none">
      <path
        d="M20 4 L 22 18 L 36 20 L 22 22 L 20 36 L 18 22 L 4 20 L 18 18 Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

function HandArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" className={className} aria-hidden fill="none">
      <path d="M5 40 C 30 10, 70 10, 110 35" stroke="#111" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M100 22 L 110 35 L 95 38" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

function YellowBlob({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 600" className={className} aria-hidden xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#F2C318"
        d="M438.2 332.8c-23.4 65-77 109.4-141 138.4-64.3 29-138.6 42.7-194.6 11.4-56.2-31.5-93.8-110-92.2-186.9 1.6-77 42.4-152.3 102.4-188 60.1-35.7 139.4-31.7 207.4 0 67.9 31.6 124.7 91 137.7 156.4 12.9 65.4-17.8 137-19.7 68.7z"
      />
    </svg>
  )
}

export function HeroSection() {
  const { data } = useContent('home', { hero: defaults })
  const hero = data.hero ?? defaults

  return (
    <section className="relative overflow-hidden bg-[#F7F5F2] text-[#111] pt-24 sm:pt-28 dark:bg-[#161513] dark:text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-10 lg:py-24 xl:gap-24">
        {/* LEFT — Editorial copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 text-[#111]/80 dark:text-white/80">
            <span className="font-hand text-2xl">— {hero.eyebrow}</span>
            <HandSquiggle className="h-3 w-16 opacity-50" />
          </div>

          <h1 className="mt-6 font-display text-[44px] font-bold leading-[1.02] tracking-[-0.035em] sm:text-[60px] lg:text-[76px]">
            Apprendre le piano,
            <br />
            <span className="relative inline-block">
              <span className="marker-yellow">autrement.</span>
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-[17px] leading-[1.7] text-[#111]/70 dark:text-white/70 sm:text-[19px]">
            {hero.description}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" className="group h-12 rounded-full bg-[#111] px-7 text-[15px] font-semibold text-white hover:bg-[#111]/90 dark:bg-white dark:text-[#111] dark:hover:bg-white/90" asChild>
              <Link href="/contact">
                {hero.button1}
                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="group h-12 rounded-full px-5 text-[15px] font-semibold text-[#111] hover:bg-[#111]/5 dark:text-white dark:hover:bg-white/5"
              asChild
            >
              <Link href="/services">
                <Music2 className="size-4" />
                {hero.button2}
              </Link>
            </Button>
          </div>

          {/* Strip stats / trust */}
          <div className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-[#111]/10 pt-6 dark:border-white/15">
            <div>
              <p className="font-hand text-3xl text-[#111] dark:text-white sm:text-4xl">17 ans</p>
              <p className="mt-1 text-[11px] leading-snug tracking-wider text-[#111]/55 dark:text-white/55 uppercase">d&apos;enseignement</p>
            </div>
            <div>
              <p className="font-hand text-3xl text-[#111] dark:text-white sm:text-4xl">200+</p>
              <p className="mt-1 text-[11px] leading-snug tracking-wider text-[#111]/55 dark:text-white/55 uppercase">élèves heureux</p>
            </div>
            <div>
              <p className="font-hand text-3xl text-[#111] dark:text-white sm:text-4xl">À 2</p>
              <p className="mt-1 text-[11px] leading-snug tracking-wider text-[#111]/55 dark:text-white/55 uppercase">pas de Genève</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Editorial composition */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[520px]"
        >
          {/* Yellow organic blob */}
          <YellowBlob className="pointer-events-none absolute -inset-6 -z-0 h-[112%] w-[112%] translate-x-2 translate-y-2" />

          {/* Doodles */}
          <HandStar className="absolute -left-4 top-8 z-20 size-7 -rotate-6 opacity-80" />
          <HandArrow className="absolute -right-2 top-14 z-20 h-12 w-20 rotate-12 opacity-80" />
          <HandSquiggle className="absolute -bottom-3 left-12 z-20 h-3 w-24 opacity-60" />
          <HandStar className="absolute top-1/3 -right-6 z-20 size-5 rotate-12 opacity-60" />

          {/* Main image */}
          <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#111]/5 shadow-[0_30px_60px_-30px_rgba(17,17,17,0.25)] ring-1 ring-[#111]/5">
            <Image
              src={hero.image ?? defaults.image}
              alt="Cours de piano avec Raphael"
              fill
              sizes="(min-width:1024px) 520px, 90vw"
              priority
              className="object-cover"
            />
          </div>

          {/* Handwritten quote tag */}
          <motion.div
            initial={{ opacity: 0, y: 10, rotate: -8 }}
            animate={{ opacity: 1, y: 0, rotate: -5 }}
            transition={{ duration: 0.7, ease, delay: 0.55 }}
            className="absolute -bottom-6 -left-4 z-30 max-w-[230px] rounded-2xl bg-white px-5 py-3 shadow-[0_18px_40px_-18px_rgba(17,17,17,0.22)] ring-1 ring-[#111]/5 sm:-left-8"
          >
            <p className="font-hand text-xl leading-tight text-[#111]">
              « On joue d&apos;abord,
              <br />
              on comprend ensuite. »
            </p>
          </motion.div>

          {/* Floating phone chip */}
          <motion.a
            href="tel:+33600000000"
            initial={{ opacity: 0, y: 10, rotate: 8 }}
            animate={{ opacity: 1, y: 0, rotate: 4 }}
            transition={{ duration: 0.7, ease, delay: 0.7 }}
            className="absolute -top-4 -right-2 z-30 inline-flex items-center gap-2 rounded-full bg-[#111] px-4 py-2 text-[12px] font-semibold text-white shadow-[0_18px_40px_-18px_rgba(17,17,17,0.4)] sm:-right-6"
          >
            <Phone className="size-3.5" /> Cours à domicile
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom marquee */}
      <div className="border-t border-[#111]/10 dark:border-white/10">
        <ValuesMarquee variant="light" />
      </div>
    </section>
  )
}
