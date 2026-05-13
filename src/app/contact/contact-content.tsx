'use client'

import { motion } from 'framer-motion'
import { Clock, Mail, MapPin, Music, Phone, Send } from 'lucide-react'

import { PageHero } from '@/components/sections/page-hero'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useContent } from '@/hooks/use-content'
import { siteConfig } from '@/lib/seo'

const ease = [0.22, 1, 0.36, 1] as const

const zones = [
  'Annemasse',
  'Ambilly',
  'Gaillard',
  'Ville-la-Grand',
  'Vétraz-Monthoux',
  'Étrembières',
  'Cranves-Sales',
  'Bonne',
  'Genève',
  'Chêne-Bourg',
  'Thônex',
  'Carouge',
]

const defaults = {
  hero: {
    eyebrow: 'Prendre contact',
    title: 'On en parle ?',
    description:
      "Un appel, un mail, un formulaire — peu importe le canal. Réponse sous 24h, et premier échange toujours gratuit.",
  },
  info: {
    phone: siteConfig.phone,
    email: siteConfig.email,
  },
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

export function ContactContent() {
  const { data } = useContent('contact', defaults)
  const hero = data.hero ?? defaults.hero
  const info = data.info ?? defaults.info

  const phone = info.phone || siteConfig.phone
  const email = info.email || siteConfig.email

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        breadcrumb="Contact"
      />

      {/* Quick contact strip */}
      <section className="relative overflow-hidden bg-[#F7F5F2] text-[#111] dark:bg-[#161513] dark:text-white">
        <div className="mx-auto max-w-7xl px-6 pb-16 sm:px-6 lg:px-10">
          <div className="grid gap-4 sm:grid-cols-3">
            <motion.a
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="group flex items-start gap-4 rounded-3xl border border-[#111]/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#F2C318] hover:shadow-[0_20px_40px_-20px_rgba(17,17,17,0.18)] dark:border-white/10 dark:bg-[#1c1c1c] dark:hover:border-[#F2C318]"
            >
              <span className="flex size-12 shrink-0 -rotate-3 items-center justify-center rounded-2xl bg-[#F2C318] text-[#111] transition-transform group-hover:rotate-0">
                <Phone className="size-5" />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#111]/55 dark:text-white/55">
                  Le plus rapide
                </p>
                <p className="mt-1 font-display text-[17px] font-semibold">{phone}</p>
                <p className="mt-1 font-hand text-lg text-[#111]/65 dark:text-white/55">— Appelez, c&apos;est plus simple.</p>
              </div>
            </motion.a>

            <motion.a
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: 0.06 }}
              href={`mailto:${email}`}
              className="group flex items-start gap-4 rounded-3xl border border-[#111]/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#F2C318] hover:shadow-[0_20px_40px_-20px_rgba(17,17,17,0.18)] dark:border-white/10 dark:bg-[#1c1c1c] dark:hover:border-[#F2C318]"
            >
              <span className="flex size-12 shrink-0 -rotate-3 items-center justify-center rounded-2xl bg-[#F2C318] text-[#111] transition-transform group-hover:rotate-0">
                <Mail className="size-5" />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#111]/55 dark:text-white/55">
                  Par mail
                </p>
                <p className="mt-1 break-all font-display text-[15px] font-semibold sm:text-[16px]">
                  {email}
                </p>
                <p className="mt-1 font-hand text-lg text-[#111]/65 dark:text-white/55">— Réponse sous 24h.</p>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: 0.12 }}
              className="flex items-start gap-4 rounded-3xl border border-[#111]/10 bg-white p-7 dark:border-white/10 dark:bg-[#1c1c1c]"
            >
              <span className="flex size-12 shrink-0 -rotate-3 items-center justify-center rounded-2xl bg-[#F2C318] text-[#111]">
                <Clock className="size-5" />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#111]/55 dark:text-white/55">
                  Disponibilités
                </p>
                <p className="mt-1 font-display text-[15px] font-semibold sm:text-[16px]">
                  Lun → Sam · 9h - 21h
                </p>
                <p className="mt-1 font-hand text-lg text-[#111]/65 dark:text-white/55">— Adultes après 16h30.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form + zones */}
      <section className="relative overflow-hidden bg-white text-[#111] dark:bg-[#1c1c1c] dark:text-white">
        <HandStar className="absolute right-16 top-24 size-7 -rotate-12 text-[#111] opacity-40 dark:text-white dark:opacity-30" />
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <div className="flex items-center gap-3">
                <span className="font-hand text-2xl text-[#111]/80 dark:text-white/75">— Écrivez-moi</span>
                <HandSquiggle className="h-3 w-16 text-[#111] opacity-50 dark:text-white" />
              </div>
              <h2 className="mt-6 font-display text-[36px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[44px]">
                Quelques mots,
                <br />
                <span className="marker-yellow">je vous rappelle.</span>
              </h2>

              <form
                className="mt-10 space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstname" className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#111]/55 dark:text-white/55">
                      Prénom
                    </Label>
                    <Input
                      id="firstname"
                      name="firstname"
                      placeholder="Marie"
                      autoComplete="given-name"
                      className="h-12 rounded-2xl border-[#111]/15 bg-[#F7F5F2] focus-visible:border-[#F2C318] focus-visible:ring-[#F2C318]/40 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-white/35"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastname" className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#111]/55 dark:text-white/55">
                      Nom
                    </Label>
                    <Input
                      id="lastname"
                      name="lastname"
                      placeholder="Dupont"
                      autoComplete="family-name"
                      className="h-12 rounded-2xl border-[#111]/15 bg-[#F7F5F2] focus-visible:border-[#F2C318] focus-visible:ring-[#F2C318]/40 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-white/35"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#111]/55 dark:text-white/55">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="marie@email.fr"
                      autoComplete="email"
                      className="h-12 rounded-2xl border-[#111]/15 bg-[#F7F5F2] focus-visible:border-[#F2C318] focus-visible:ring-[#F2C318]/40 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-white/35"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#111]/55 dark:text-white/55">
                      Téléphone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="06 12 34 56 78"
                      autoComplete="tel"
                      className="h-12 rounded-2xl border-[#111]/15 bg-[#F7F5F2] focus-visible:border-[#F2C318] focus-visible:ring-[#F2C318]/40 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-white/35"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="level" className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#111]/55 dark:text-white/55">
                      Votre niveau
                    </Label>
                    <select
                      id="level"
                      name="level"
                      defaultValue=""
                      className="h-12 w-full rounded-2xl border border-[#111]/15 bg-[#F7F5F2] px-3 text-sm text-[#111] transition-colors focus:border-[#F2C318] focus:outline-none focus:ring-3 focus:ring-[#F2C318]/40 dark:border-white/15 dark:bg-white/5 dark:text-white"
                    >
                      <option value="" disabled>Choisir…</option>
                      <option value="debutant">Je débute totalement</option>
                      <option value="re-debutant">J&apos;ai déjà joué, je reprends</option>
                      <option value="intermediaire">J&apos;ai un niveau intermédiaire</option>
                      <option value="avance">Je joue déjà bien</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zone" className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#111]/55 dark:text-white/55">
                      Votre commune
                    </Label>
                    <Input
                      id="zone"
                      name="zone"
                      placeholder="Annemasse, Genève…"
                      className="h-12 rounded-2xl border-[#111]/15 bg-[#F7F5F2] focus-visible:border-[#F2C318] focus-visible:ring-[#F2C318]/40 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-white/35"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#111]/55 dark:text-white/55">
                    Quelques mots
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Vos envies, vos questions, votre piano…"
                    className="w-full rounded-2xl border border-[#111]/15 bg-[#F7F5F2] px-4 py-3 text-sm leading-relaxed text-[#111] transition-colors placeholder:text-[#111]/35 focus:border-[#F2C318] focus:outline-none focus:ring-3 focus:ring-[#F2C318]/40 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-white/35"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="group h-13 rounded-full bg-[#111] px-7 text-[15px] font-semibold text-white hover:bg-[#111]/90 dark:bg-white dark:text-[#111] dark:hover:bg-white/90"
                >
                  <Send className="mr-1 size-4 transition-transform group-hover:translate-x-0.5" />
                  Envoyer mon message
                </Button>

                <p className="font-hand text-lg text-[#111]/60 dark:text-white/60">
                  — Aucun engagement. Le premier échange est offert.
                </p>
              </form>
            </motion.div>

            {/* ZONES + map remplacée */}
            <motion.aside
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: 0.08 }}
              className="space-y-8"
            >
              <div className="rounded-3xl bg-[#F7F5F2] p-8 sm:p-10 dark:bg-white/[0.04]">
                <div className="flex items-center gap-3">
                  <span className="font-hand text-2xl text-[#111]/80 dark:text-white/75">— Où je viens</span>
                  <HandSquiggle className="h-3 w-16 text-[#111] opacity-50 dark:text-white" />
                </div>
                <h3 className="mt-4 font-display text-[26px] font-semibold leading-tight tracking-[-0.01em] sm:text-[30px]">
                  Annemasse et tout
                  <br />
                  le bassin <span className="marker-yellow">genevois.</span>
                </h3>
                <p className="mt-4 text-[14px] leading-[1.7] text-[#111]/65 dark:text-white/65">
                  Je me déplace dans un rayon d&apos;environ 20 minutes autour d&apos;Annemasse.
                  Au-delà, c&apos;est possible aussi — on en discute.
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {zones.map((z) => (
                    <li
                      key={z}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#111]/10 bg-white px-3 py-1.5 text-[12px] font-medium text-[#111]/75 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/75"
                    >
                      <MapPin className="size-3 text-[#F2C318]" />
                      {z}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl bg-[#F2C318] p-8 sm:p-10">
                <span className="inline-flex items-center gap-2 font-hand text-xl text-[#111]/80">
                  <Music className="size-4" /> Vous hésitez ?
                </span>
                <p className="mt-3 font-display text-[20px] font-semibold leading-tight tracking-[-0.01em] sm:text-[22px]">
                  Le premier cours est sans engagement.
                </p>
                <p className="mt-3 text-[14px] leading-[1.6] text-[#111]/75">
                  On joue, on discute, et vous décidez après. C&apos;est aussi simple que ça.
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </>
  )
}
