import { Metadata } from 'next'
import { BreadcrumbJsonLd } from 'next-seo'
import { createBreadcrumbItems } from '@/shared/seo/jsonLd'
import { Portfolio } from '@/views/Portfolio/Portfolio'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Zrealizowane projekty stron internetowych dla marek premium.',
  alternates: {
    canonical: '/portfolio',
  },
}

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={createBreadcrumbItems([
          { name: 'Start', path: '/' },
          { name: 'Portfolio', path: '/portfolio' },
        ])}
      />
      <Portfolio />
    </>
  )
}
