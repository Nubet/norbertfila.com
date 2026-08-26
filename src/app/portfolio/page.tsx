import { Metadata } from 'next'
import { Portfolio } from '@/views/Portfolio/Portfolio'

export const metadata: Metadata = {
  title: 'Portfolio | Norbert Fila',
  description: 'Zrealizowane projekty stron internetowych dla marek premium.',
}

export default function PortfolioPage() {
  return <Portfolio />
}
