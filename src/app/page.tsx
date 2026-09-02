import type { Metadata } from 'next'
import { LocalBusinessJsonLd } from 'next-seo'
import { featuredBlogSlugs, getBlogPosts } from '@/data/blog'
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
  const blogPosts = getBlogPosts()
  const featuredBlogPosts = featuredBlogSlugs
    .map((slug) => blogPosts.find((post) => post.slug === slug))
    .filter((post): post is (typeof blogPosts)[number] => Boolean(post))

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
      <Home featuredBlogPosts={featuredBlogPosts} />
    </>
  )
}
