import type { Metadata } from 'next'
import { BreadcrumbJsonLd } from 'next-seo'
import { createBreadcrumbItems } from '@/shared/seo/jsonLd'
import ContactPage from '@/views/ContactPage/ContactPage'

export const metadata: Metadata = {
  title: 'Porozmawiajmy o Twojej stronie internetowej',
  description:
    'Masz pomysł na stronę lub chcesz odświeżyć obecną? Napisz, a przygotuję kierunek i wstępną propozycję.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    images: [
      {
        url: '/og-image-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Porozmawiajmy o Twojej stronie internetowej - Kontakt',
      },
    ],
  },
  twitter: {
    images: ['/og-image-contact.jpg'],
  },
}

export default function ContactRoutePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={createBreadcrumbItems([
          { name: 'Start', path: '/' },
          { name: 'Kontakt', path: '/contact' },
        ])}
      />
      <ContactPage />
    </>
  )
}
