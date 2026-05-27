import type { Metadata } from 'next'
import PrivacyPolicyPage from '@/views/LegalPages/PrivacyPolicyPage'

export const metadata: Metadata = {
  title: 'Polityka Prywatnosci',
  description:
    'Zasady gromadzenia, przetwarzania i wykorzystywania danych osobowych uzytkownikow strony.',
  alternates: {
    canonical: '/privacy-policy',
  },
}

export default function PrivacyPolicyRoutePage() {
  return <PrivacyPolicyPage />
}
