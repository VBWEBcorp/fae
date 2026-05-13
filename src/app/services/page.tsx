import type { Metadata } from 'next'

import { ServicesContent } from './services-content'
import {
  breadcrumbJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Méthode de piano sans solfège, adaptée à chaque élève. Cours à domicile à Annemasse et dans le bassin genevois — adultes, retraités, débutants ou ré-débutants.'

const services = [
  { title: 'Sans solfège, jamais', desc: "On joue d'abord, on comprend ensuite. La théorie n'arrive que si l'élève en ressent l'envie." },
  { title: 'Méthode adaptative', desc: 'Chaque cours est construit pour vous, à votre niveau, sur les morceaux qui vous parlent.' },
  { title: 'Pédagogie bienveillante', desc: 'Pas de jugement, pas de pression. Le piano comme un plaisir, dans la confiance.' },
  { title: 'Cours à domicile', desc: 'Je me déplace chez vous, sur votre piano. Annemasse, Genève et tout le bassin lémanique.' },
]

export const metadata: Metadata = {
  title: 'La méthode',
  description,
  alternates: { canonical: '/services' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('La méthode', description, '/services'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'La méthode', path: '/services' },
    ]),
    ...services.map((s) => serviceJsonLd(s.title, s.desc, '/services')),
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesContent />
    </>
  )
}
