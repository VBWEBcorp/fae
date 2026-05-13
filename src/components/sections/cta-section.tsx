'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Phone } from 'lucide-react'
import Link from 'next/link'

import { useContent } from '@/hooks/use-content'

const ease = [0.22, 1, 0.36, 1] as const

const defaults = {
  eyebrow: 'Premier contact',
  title: 'Et si on essayait ?',
  description:
    "Un appel, un échange. On voit ensemble si ma méthode vous correspond. Aucun engagement, juste l'envie de comprendre où vous en êtes et où vous voulez aller.",
  button: 'Réserver un premier échange',
}

function HandSquiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 24" className={className} aria-hidden fill="none">
      <path d="M2 12 Q 14 2, 26 12 T 50 12 T 74 12 T 98 12" stroke="#111" strokeWidth="2" strokeLinecap="round" fill="none" />
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

function HandStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden fill="none">
      <path d="M20 4 L 22 18 L 36 20 L 22 22 L 20 36 L 18 22 L 4 20 L 18 18 Z" stroke="#111" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export function CtaSection() {
  const { data } = useContent('home', { cta: defaults })
  const cta = data.cta ?? defaults

  return (
    <section className="relative overflow-hidden bg-[#F7F5F2] text-[#111] dark:bg-[#161513] dark:text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[#F2C318] px-8 py-16 sm:px-14 sm:py-20 lg:px-20 lg:py-24"
        >
          {/* Decorative doodles */}
          <HandStar className="absolute left-10 top-12 size-8 -rotate-12 opacity-90" />
          <HandStar className="absolute bottom-12 right-16 size-6 rotate-12 opacity-80" />
          <HandArrow className="absolute right-12 top-20 h-14 w-24 rotate-12 opacity-70" />
          <HandSquiggle className="absolute -bottom-1 left-1/3 h-3 w-32 opacity-50" />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="font-hand text-2xl text-[#111]/85">— {cta.eyebrow}</span>
              <HandSquiggle className="h-3 w-16 opacity-50" />
            </div>

            <h2 className="mt-5 font-display text-[40px] font-bold leading-[1.02] tracking-[-0.035em] sm:text-[52px] lg:text-[64px]">
              Et si on
              <br />
              <span className="italic">essayait ?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.7] text-[#111]/75 sm:text-[18px]">
              {cta.description}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#111] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#111]/90"
              >
                {cta.button}
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <a
                href="tel:+33600000000"
                className="group inline-flex items-center gap-2 rounded-full border border-[#111]/20 bg-white/40 px-6 py-3.5 text-[15px] font-semibold text-[#111] backdrop-blur-sm transition-colors hover:bg-white/70"
              >
                <Phone className="size-4" />
                Appeler directement
              </a>
            </div>

            <p className="mt-8 font-hand text-2xl text-[#111]/70">
              — Réponse sous 24h, promis.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
