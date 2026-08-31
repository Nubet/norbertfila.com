import { siteConfig } from '@/shared/seo/site'

export const absoluteUrl = (path: string) =>
  path === '/' ? siteConfig.url : `${siteConfig.url}${path}`

export const organizationJsonLd = {
  '@type': 'Organization' as const,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/favicon-norbert-fila.svg`,
  sameAs: ['https://github.com/nubet', 'https://www.linkedin.com/in/norbert-fila/'],
}

export const personJsonLd = {
  '@type': 'Person' as const,
  name: 'Norbert Fila',
  url: `${siteConfig.url}/about`,
  image: `${siteConfig.url}/profile/avatar.webp`,
  description:
    'Web developer i freelancer tworzacy strony internetowe ukierunkowane na konwersje, widocznosc i szybkie dzialanie.',
  sameAs: organizationJsonLd.sameAs,
}

export const professionalServiceJsonLd = {
  type: 'ProfessionalService',
  name: 'Norbert Fila - Tworzenie Stron Internetowych',
  url: absoluteUrl('/'),
  image: `${siteConfig.url}/profile/avatar.webp`,
  description:
    'Projektuje i koduje autorskie strony internetowe ukierunkowane na konwersje i generowanie zapytan ofertowych.',
  email: 'kontakt@norbertfila.com',
  sameAs: organizationJsonLd.sameAs,
  address: {
    '@type': 'PostalAddress' as const,
    addressCountry: 'PL',
  },
  areaServed: ['PL'],
  priceRange: '$$',
}

export const defaultArticleImage = `${siteConfig.url}/og/og-img.webp`

export const createBreadcrumbItems = (items: Array<{ name: string; path: string }>) =>
  items.map(({ name, path }, index) => ({
    position: index + 1,
    name,
    item: absoluteUrl(path),
  }))
