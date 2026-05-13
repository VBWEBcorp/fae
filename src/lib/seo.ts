export const siteConfig = {
  name: 'Raphael Raholijaona',
  url: 'https://www.raphael-piano.fr',
  locale: 'fr_FR',
  description:
    'Cours de piano à domicile à Annemasse et dans le bassin genevois. Méthode adaptative, sans solfège, bienveillante — pensée pour les adultes et retraités. Par Raphael Raholijaona, professeur autodidacte depuis 2008.',
  ogImage: 'https://www.raphael-piano.fr/og.png',
  twitterHandle: '@raphaelpiano',
  themeColor: '#facc15',
  phone: '+33 6 00 00 00 00',
  email: 'raphael@raphael-piano.fr',
  address: {
    street: 'Annemasse',
    city: 'Annemasse',
    postalCode: '74100',
    country: 'FR',
  },
} as const

export type SeoMeta = {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  noindex?: boolean
  jsonLd?: Record<string, unknown>
}

export function buildTitle(page?: string) {
  if (!page) return siteConfig.name
  return `${page} - ${siteConfig.name}`
}

export const routes = [
  '/',
  '/a-propos',
  '/services',
  '/contact',
  '/mentions-legales',
  '/politique-de-confidentialite',
  '/conditions-generales',
  '/politique-cookies',
] as const
