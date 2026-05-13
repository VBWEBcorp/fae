'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Home } from 'lucide-react'
import Link from 'next/link'

const ease = [0.22, 1, 0.36, 1] as const

type PageHeroProps = {
  eyebrow: string
  title: string
  description?: string
  image?: string
  breadcrumb: string
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

export function PageHero({ eyebrow, title, description, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#F7F5F2] text-[#111] pt-24 sm:pt-28 dark:bg-[#161513] dark:text-white">
      {/* Subtle yellow glow top-right */}
      <div aria-hidden className="pointer-events-none absolute -top-32 -right-24 size-[420px] rounded-full bg-[#F2C318]/40 blur-3xl dark:bg-[#F2C318]/20" />
      <HandStar className="absolute right-16 top-32 size-7 -rotate-12 text-[#111]/40 dark:text-white/30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#111]/55 dark:text-white/55">
            <li className="flex items-center gap-1.5">
              <Link
                href="/"
                className="flex items-center gap-1 transition-colors hover:text-[#111] dark:hover:text-white"
              >
                <Home className="size-3" aria-hidden />
                <span>Accueil</span>
              </Link>
            </li>
            <li className="flex items-center gap-1.5">
              <ChevronRight className="size-3 text-[#111]/30 dark:text-white/30" aria-hidden />
              <span aria-current="page" className="font-medium text-[#111]/80 dark:text-white/80">
                {breadcrumb}
              </span>
            </li>
          </ol>
        </nav>

        {/* Content */}
        <div className="pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 text-[#111]/80 dark:text-white/80">
              <span className="font-hand text-2xl">— {eyebrow}</span>
              <HandSquiggle className="h-3 w-16 opacity-50" />
            </div>

            <h1 className="mt-5 font-display text-[40px] font-bold leading-[1.02] tracking-[-0.035em] sm:text-[52px] lg:text-[64px]">
              {title}
            </h1>

            {description && (
              <p className="mt-6 max-w-2xl text-[16px] leading-[1.7] text-[#111]/70 dark:text-white/70 sm:text-[18px]">
                {description}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
