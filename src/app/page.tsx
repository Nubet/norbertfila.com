import type { Metadata } from 'next'
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
  return <Home />
}
