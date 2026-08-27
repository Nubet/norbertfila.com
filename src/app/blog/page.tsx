import { blogPosts } from '@/data/blogPosts'
import { createPageMetadata } from '@/shared/seo/metadata'
import { EditorialHub } from '@/views/Editorial/EditorialPage'

export const metadata = createPageMetadata({
  title: 'Blog o stronach internetowych, SEO i konwersji',
  description:
    'Blog o stronach internetowych dla firm usługowych: SEO, landing page, architektura oferty, pozycjonowanie lokalne i decyzje zakupowe klientów.',
  path: '/blog',
  keywords: ['blog seo', 'strony internetowe łódź', 'landing page dla firm'],
})

export default function BlogPage() {
  return (
    <EditorialHub
      eyebrow="Blog"
      plainTitle
      title="Piszę o tym, co realnie wpływa na skuteczność strony firmowej."
      description="Znajdziesz tu tematy, które pomagają lepiej zrozumieć koszt strony, decyzje technologiczne, SEO lokalne i sposób prezentowania oferty usługowej."
      items={blogPosts.map((post) => ({
        title: post.title,
        description: post.excerpt,
        href: `/blog/${post.slug}`,
        meta: `${post.category} • ${post.readingTime}`,
      }))}
    />
  )
}
