import type { Metadata } from 'next'
import { LocalBusinessJsonLd } from 'next-seo'
import { professionalServiceJsonLd } from '@/shared/seo/jsonLd'
import Home from '@/views/Home/Home'

export const metadata: Metadata = {
  description:
    'Projektuję i tworzę strony internetowe, które zdobywają klientów. Połączenie pasji programistycznej z biznesowym podejściem.',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd
        scriptId="professional-service-jsonld"
        type={professionalServiceJsonLd.type}
        name={professionalServiceJsonLd.name}
        url={professionalServiceJsonLd.url}
        image={professionalServiceJsonLd.image}
        description={professionalServiceJsonLd.description}
        email={professionalServiceJsonLd.email}
        sameAs={professionalServiceJsonLd.sameAs}
        address={professionalServiceJsonLd.address}
        areaServed={professionalServiceJsonLd.areaServed}
        priceRange={professionalServiceJsonLd.priceRange}
      />
      <Home />
    </>
  )
}
