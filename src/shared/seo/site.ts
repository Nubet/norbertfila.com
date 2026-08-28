export const siteConfig = {
  name: 'Norbert Fila',
  url: 'https://norbertfila.com',
  title: 'Norbert Fila - Web Developer dla Biznesu',
  description:
    "Tworzę strony internetowe i landing page'e, które zamieniają ruch w zapytania. Zobacz portfolio i zacznijmy współpracę.",
  locale: 'pl_PL',
} as const

export const staticIndexedRoutes = [
  '/',
  '/about',
  '/portfolio',
  '/contact',
  '/projects',
  '/blog',
  '/privacy-policy',
  '/cookie-policy',
] as const
