import type { Metadata } from 'next'
import ContactPage from '../../pages/ContactPage/ContactPage'

export const metadata: Metadata = {
  title: 'Kontakt i wycena',
  description:
    'Zbudujmy cos swietnego. Napisz, jakiego projektu potrzebujesz, a przygotuje propozycje.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactRoutePage() {
  return <ContactPage />
}
