import { Suspense } from 'react'
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
  return (
    <Suspense>
      <BlogHub />
    </Suspense>
  )
}
