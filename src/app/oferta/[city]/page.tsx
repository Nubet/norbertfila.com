import { BreadcrumbJsonLd } from 'next-seo'
import { notFound } from 'next/navigation'
import { getBlogPostBySlug } from '@/data/blog'
import { getLocalOfferPageBySlug, localOfferPages } from '@/data/localOfferPages'
import { absoluteUrl, createBreadcrumbItems } from '@/shared/seo/jsonLd'
import { createPageMetadata } from '@/shared/seo/metadata'
import { siteConfig } from '@/shared/seo/site'
import { LocalOfferPage } from '@/views/LocalOfferPage/LocalOfferPage'

export function generateStaticParams() {
  return localOfferPages.map((page) => ({ city: page.slug }))
}

type LocalOfferRouteProps = {
  params: Promise<{ city: string }>
}

export async function generateMetadata({ params }: LocalOfferRouteProps) {
  const { city } = await params
  const page = getLocalOfferPageBySlug(city)

  if (!page) {
    return createPageMetadata({
      title: 'Oferta',
      description: 'Projektowanie i tworzenie stron internetowych dla firm uslugowych.',
      path: '/oferta',
    })
  }

  return createPageMetadata({
    title: page.title,
    description: page.description,
    path: `/oferta/${page.slug}`,
    keywords: [
      `strony internetowe ${page.city}`,
      `tworzenie stron ${page.city}`,
      `projektowanie stron ${page.city}`,
      'lokalne seo',
      'norbert fila',
    ],
  })
}

export default async function LocalOfferRoute({ params }: LocalOfferRouteProps) {
  const { city } = await params
  const page = getLocalOfferPageBySlug(city)

  if (!page) {
    notFound()
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.title,
    description: page.description,
    serviceType: 'Projektowanie i tworzenie stron internetowych',
    areaServed: [page.city, 'Województwo łódzkie', 'Polska'],
    provider: {
      '@type': 'Person',
      name: siteConfig.name,
      url: absoluteUrl('/about'),
    },
    url: absoluteUrl(`/oferta/${page.slug}`),
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const relatedPosts = page.relatedPostSlugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter((post): post is NonNullable<typeof post> => Boolean(post))

  return (
    <>
      <BreadcrumbJsonLd
        items={createBreadcrumbItems([
          { name: 'Start', path: '/' },
          { name: 'Oferta', path: '/oferta' },
          { name: page.city, path: `/oferta/${page.slug}` },
        ])}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <LocalOfferPage page={page} relatedPosts={relatedPosts} />
    </>
  )
}
