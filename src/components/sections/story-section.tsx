'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { useContent } from '@/hooks/use-content'

const ease = [0.22, 1, 0.36, 1] as const

const defaults = {
  eyebrow: 'L\'histoire',
  title: 'Autodidacte depuis l\'enfance, professeur depuis 2008.',
  paragraph1:
    "Je n'ai jamais mis les pieds dans un conservatoire. J'ai appris seul, en écoutant, en imitant, en cherchant. C'est cette liberté que j'ai voulu transmettre quand j'ai donné mon premier cours en 2008 — sans solfège, sans parcours imposé, juste l'envie de jouer.",
  paragraph2:
    "Aujourd'hui, j'accompagne adultes et retraités d'Annemasse à Genève. Chacun avec son piano, son histoire, ses goûts. Mon rôle : trouver la porte d'entrée qui vous convient, et l'ouvrir.",
  image: 'https://images.unsplash.com/photo-1601312378427-822b2b41da35?auto=format&fit=crop&w=1200&q=80',
}

export function StorySection() {
  const { data } = useContent('home', { story: defaults })
  const story = data.story ?? defaults

  return (
    <section className="border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
            className="max-w-xl"
          >
            <span className="inline-block font-display text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              {story.eyebrow}
            </span>

            <h2 className="mt-5 font-display text-balance text-[32px] leading-[1.08] tracking-[-0.02em] text-foreground sm:text-[40px] lg:text-[48px]">
              {story.title}
            </h2>

            <div className="mt-7 space-y-5">
              <p className="text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                {story.paragraph1}
              </p>
              <p className="text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                {story.paragraph2}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/a-propos"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground"
              >
                <span className="border-b border-foreground/60 pb-0.5 transition-colors duration-300 group-hover:border-foreground">
                  En savoir plus sur moi
                </span>
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border/60 pt-8">
              <div>
                <dt className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">Depuis</dt>
                <dd className="mt-1 font-display text-2xl font-semibold tracking-tight text-foreground">2008</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">Élèves</dt>
                <dd className="mt-1 font-display text-2xl font-semibold tracking-tight text-foreground">200+</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">Cursus</dt>
                <dd className="mt-1 font-display text-2xl font-semibold tracking-tight text-foreground">Aucun</dd>
              </div>
            </dl>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="relative"
          >
            {/* Forme jaune décalée derrière l'image */}
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/70 rotate-3"
            />
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, ease }}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)] ring-1 ring-foreground/5"
            >
              <Image
                src={story.image}
                alt=""
                fill
                sizes="(min-width:768px) 45vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
