import { Suspense } from 'react'
import { BreadcrumbJsonLd } from 'next-seo'
import { featuredBlogSlugs, getBlogPosts } from '@/data/blog'
import { createBreadcrumbItems } from '@/shared/seo/jsonLd'
import { createPageMetadata } from '@/shared/seo/metadata'
import { BlogHub } from '@/views/Blog/BlogHub'

export const metadata = createPageMetadata({
  title: 'Blog o stronach internetowych, SEO i konwersji',
  description:
    'Blog o stronach internetowych dla firm usługowych: SEO, landing page, architektura oferty, pozycjonowanie lokalne i decyzje zakupowe klientów.',
  path: '/blog',
  keywords: ['blog seo', 'strony internetowe łódź', 'landing page dla firm'],
})

export default function BlogPage() {
  const posts = getBlogPosts()
  const featuredPosts = featuredBlogSlugs
    .map((slug) => posts.find((post) => post.slug === slug))
    .filter((post): post is (typeof posts)[number] => Boolean(post))

  return (
    <Suspense>
      <BreadcrumbJsonLd
        items={createBreadcrumbItems([
          { name: 'Start', path: '/' },
          { name: 'Blog', path: '/blog' },
        ])}
      />
      <BlogHub posts={posts} featuredPosts={featuredPosts} />
    </Suspense>
  )
}
