import type { Metadata } from 'next'
import CookiePolicyPage from '../../pages/LegalPages/CookiePolicyPage'

export const metadata: Metadata = {
  title: 'Polityka Cookies',
  description: 'Informacje o plikach cookies wykorzystywanych na stronie norbertfila.com.',
  alternates: {
    canonical: '/cookie-policy',
  },
}

export default function CookiePolicyRoutePage() {
  return <CookiePolicyPage />
}
