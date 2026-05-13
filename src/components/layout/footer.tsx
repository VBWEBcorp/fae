'use client'

import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { siteConfig } from '@/lib/seo'

const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

const legalLinks = [
  { label: 'Mentions légales', to: '/mentions-legales' },
  { label: 'Confidentialité', to: '/politique-de-confidentialite' },
  { label: 'CGU', to: '/conditions-generales' },
  { label: 'Cookies', to: '/politique-cookies' },
]

function HandSquiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 24" className={className} aria-hidden fill="none">
      <path d="M2 12 Q 14 2, 26 12 T 50 12 T 74 12 T 98 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export function Footer() {
  const pathname = usePathname()
  // Strip CTA "Le piano vous attend" : uniquement sur la home
  const showCtaStrip = pathname === '/'

  return (
    <footer className="relative bg-[#0a0a0a] text-white">
      {/* Séparateur jaune en haut du footer pour bien le distinguer */}
      <div aria-hidden className="h-1 w-full bg-[#F2C318]" />
      <div aria-hidden className="pointer-events-none absolute -top-px inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F2C318]/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top — editorial CTA strip — uniquement sur la home */}
        {showCtaStrip && (
          <div className="grid items-center gap-10 border-b border-white/10 py-20 sm:py-24 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div>
              <div className="flex items-center gap-3 text-[#F2C318]">
                <span className="font-hand text-2xl">— Envie d&apos;essayer ?</span>
                <HandSquiggle className="h-3 w-16 opacity-70" />
              </div>
              <h3 className="mt-4 font-display text-[36px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[48px] lg:text-[56px]">
                Le piano vous attend.
                <br />
                <span className="text-[#F2C318]">À votre rythme.</span>
              </h3>
            </div>
            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#F2C318] px-7 py-4 text-[15px] font-semibold text-[#111] transition-transform hover:-translate-y-0.5"
            >
              Prendre contact
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        )}

        {/* Middle — columns */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-16">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex flex-col font-display text-lg font-semibold tracking-tight text-white"
            >
              <span>Raphael Raholijaona</span>
              <span className="mt-1 font-hand text-2xl font-normal text-[#F2C318]">
                Cours de piano
              </span>
            </Link>
            <p className="max-w-sm text-[14px] leading-relaxed text-white/60">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigation">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Navigation
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.to}
                    className="group inline-flex items-center gap-1 text-sm text-white/80 transition-colors hover:text-[#F2C318]"
                  >
                    <span className="relative">
                      {l.label}
                      <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[#F2C318] transition-transform duration-300 group-hover:scale-x-100" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Légal">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Légal
            </h4>
            <ul className="mt-5 space-y-3">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.to}
                    className="group inline-flex items-center gap-1 text-sm text-white/80 transition-colors hover:text-[#F2C318]"
                  >
                    <span className="relative">
                      {l.label}
                      <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[#F2C318] transition-transform duration-300 group-hover:scale-x-100" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group inline-flex items-center gap-1 text-white/80 transition-colors hover:text-[#F2C318]"
                >
                  {siteConfig.email}
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-white/80 transition-colors hover:text-[#F2C318]"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="text-white/50">
                {siteConfig.address.city} ·<br />
                Bassin genevois
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/10 py-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {siteConfig.name} · Tous droits réservés
          </p>
          <p className="font-hand text-base text-white/60">
            Fait avec amour à Annemasse.
          </p>
        </div>
      </div>
    </footer>
  )
}
