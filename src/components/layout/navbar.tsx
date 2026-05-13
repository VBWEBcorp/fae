'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Logo } from '@/components/layout/logo'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { cn } from '@/lib/utils'

type NavLink = {
  label: string
  href: string
}

const NAV_LINKS: NavLink[] = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

const ease = [0.22, 1, 0.36, 1] as const

function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Apparition subtile du fond au scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fermeture du drawer à chaque navigation
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Lock du scroll body quand le drawer est ouvert
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  // Fermeture au ESC
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b bg-white/95 backdrop-blur-xl transition-[background-color,backdrop-filter,border-color,box-shadow] duration-500 ease-out supports-[backdrop-filter]:bg-white/85 dark:bg-[#0f0f0f]/95 dark:supports-[backdrop-filter]:bg-[#0f0f0f]/85',
          scrolled
            ? 'border-[#111]/10 shadow-[0_8px_24px_-12px_rgba(17,17,17,0.12)] dark:border-white/10 dark:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)]'
            : 'border-[#111]/[0.06] shadow-[0_1px_0_0_rgba(17,17,17,0.04)] dark:border-white/[0.06]'
        )}
      >
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-6 sm:px-10 lg:h-24 lg:px-14">
          {/* GAUCHE — Logo */}
          <Logo />

          {/* CENTRE — Menu desktop */}
          <nav
            aria-label="Navigation principale"
            className="hidden items-center justify-center gap-12 lg:flex xl:gap-16"
          >
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link.href)
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'group relative font-display text-[14px] font-medium tracking-[0.01em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C318]/60 focus-visible:ring-offset-4 focus-visible:ring-offset-[#F7F5F2] dark:focus-visible:ring-offset-[#161513]',
                    active
                      ? 'text-[#111] dark:text-white'
                      : 'text-[#111]/60 hover:text-[#111] dark:text-white/60 dark:hover:text-white'
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={cn(
                      'pointer-events-none absolute -bottom-1.5 left-0 h-[1.5px] w-full origin-left bg-[#F2C318] transition-transform duration-300 ease-out',
                      active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    )}
                  />
                </Link>
              )
            })}
          </nav>

          {/* DROITE — Theme + Mobile toggle */}
          <div className="flex items-center justify-end gap-1.5">
            <ThemeToggle className="text-[#111]/70 hover:text-[#111] dark:text-white/70 dark:hover:text-white" />

            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              onClick={() => setOpen((v) => !v)}
              className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-[#111] transition-colors duration-300 hover:bg-[#111]/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C318]/60 dark:text-white dark:hover:bg-white/[0.06] lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Drawer mobile plein écran */}
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="fixed inset-0 z-40 bg-[#F7F5F2] dark:bg-[#161513] lg:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center px-6 pt-24">
              <nav
                aria-label="Navigation mobile"
                className="flex flex-col items-center gap-1"
              >
                {NAV_LINKS.map((link, i) => {
                  const active = isActive(pathname, link.href)
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, ease, delay: 0.12 + i * 0.06 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          'group block py-3 font-display text-[36px] font-semibold tracking-[-0.02em] transition-colors sm:text-[48px]',
                          active
                            ? 'text-[#111] dark:text-white'
                            : 'text-[#111]/55 hover:text-[#111] dark:text-white/55 dark:hover:text-white'
                        )}
                      >
                        <span className="relative">
                          {link.label}
                          <span
                            aria-hidden
                            className={cn(
                              'pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-[#F2C318] transition-transform duration-300 ease-out',
                              active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                            )}
                          />
                        </span>
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease, delay: 0.12 + NAV_LINKS.length * 0.06 + 0.06 }}
                className="mt-16 flex items-center gap-5"
              >
                <span className="font-hand text-lg text-[#111]/55 dark:text-white/55">
                  — Annemasse · Genève
                </span>
                <ThemeToggle className="text-[#111]/65 dark:text-white/65" />
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
