import { siteConfig } from '@/shared/seo/site'

export const professionalServiceStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Norbert Fila - Tworzenie Stron Internetowych',
  url: `${siteConfig.url}/`,
  image: `${siteConfig.url}/profile/avatar.webp`,
  logo: `${siteConfig.url}/favicon-norbert-fila.svg`,
  description:
    'Projektuje i koduje autorskie strony internetowe ukierunkowane na konwersje i generowanie zysku. Tworze unikalne, w pelni responsywne strony WWW (UI/UX), ktore skutecznie zamieniaja anonimowy ruch w wartosciowe zapytania ofertowe i nowych klientow.',
  email: 'kontakt@norbertfila.com',
  sameAs: ['https://github.com/nubet', 'https://www.linkedin.com/in/norbert-fila/'],
  knowsAbout: [
    'Web Development',
    'Tworzenie stron WWW',
    'Frontend Development',
    'UI/UX Design',
    'React',
    'TypeScript',
    'SEO',
    'Landing Pages',
    'Conversion Rate Optimization',
  ],
  founder: {
    '@type': 'Person',
    name: 'Norbert Fila',
    jobTitle: 'Web Developer & Freelancer',
    sameAs: ['https://github.com/nubet', 'https://www.linkedin.com/in/norbert-fila/'],
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'PL',
  },
  priceRange: '$$',
} as const
