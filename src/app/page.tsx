import type { Metadata } from 'next'
import Script from 'next/script'
import { professionalServiceStructuredData } from '@/shared/seo/structuredData'
import Home from '@/views/Home/Home'

export const metadata: Metadata = {
  title: 'Norbert Fila - Web Developer dla Biznesu',
  description:
    'Projektuje i tworze strony internetowe, ktore zdobywaja klientow. Polaczenie pasji programistycznej z biznesowym podejsciem.',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <>
      <Script
        id="professional-service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceStructuredData) }}
      />
      <Home />
    </>
  )
}
