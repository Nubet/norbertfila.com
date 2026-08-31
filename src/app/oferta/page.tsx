import type { Metadata } from 'next'
import { BreadcrumbJsonLd } from 'next-seo'
import { createBreadcrumbItems } from '@/shared/seo/jsonLd'
import { Offer } from '@/views/Offer/Offer'

export const metadata: Metadata = {
  title: 'Oferta',
  description:
    "Projektowanie i tworzenie stron internetowych, landing page'ów, integracji oraz doradztwo techniczne dla marek usługowych.",
  alternates: {
    canonical: '/oferta',
  },
}

export default function OfferPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={createBreadcrumbItems([
          { name: 'Start', path: '/' },
          { name: 'Oferta', path: '/oferta' },
        ])}
      />
      <Offer />
    </>
  )
}
