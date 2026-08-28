import { blogPosts, getBlogCategories } from '@/data/blogPosts'
import { createPageMetadata } from '@/shared/seo/metadata'
import { EditorialHub } from '@/views/Editorial/EditorialPage'

export const metadata = createPageMetadata({
  title: 'Blog o stronach internetowych, SEO i konwersji',
  description:
    'Blog o stronach internetowych dla firm usługowych: SEO, landing page, architektura oferty, pozycjonowanie lokalne i decyzje zakupowe klientów.',
  path: '/blog',
  keywords: ['blog seo', 'strony internetowe łódź', 'landing page dla firm'],
})

const featuredSlugs = [
  'ile-kosztuje-strona-internetowa-w-lodzi',
  'strony-internetowe-lodz-jak-wybrac-wykonawce-dla-firmy-uslugowej',
]

type BlogPageProps = {
  searchParams: Promise<{ category?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category } = await searchParams
  const categories = getBlogCategories()
  const activeCategory = categories.includes(category ?? '') ? category : undefined
  const visiblePosts = activeCategory
    ? blogPosts.filter((post) => post.category === activeCategory)
    : blogPosts

  const featuredItems = featuredSlugs
    .map((slug) => blogPosts.find((post) => post.slug === slug))
    .filter((post): post is (typeof blogPosts)[number] => Boolean(post))
    .map((post) => ({
      title: post.displayTitle || post.title,
      description: post.excerpt,
      href: `/blog/${post.slug}`,
      meta: `${post.category} • ${post.readingTime}`,
    }))

  const categoryItems = [
    { label: 'Wszystkie', href: '/blog', active: !activeCategory },
    ...categories.map((item) => ({
      label: item,
      href: `/blog?category=${encodeURIComponent(item)}`,
      active: item === activeCategory,
    })),
  ]

  return (
    <EditorialHub
      eyebrow="Blog"
      plainTitle
      title="Piszę o tym, co realnie wpływa na skuteczność strony firmowej."
      description="Znajdziesz tu tematy, które pomagają lepiej zrozumieć koszt strony, decyzje technologiczne, SEO lokalne i sposób prezentowania oferty usługowej."
      featuredItems={activeCategory ? undefined : featuredItems}
      categories={categoryItems}
      items={visiblePosts.map((post) => ({
        title: post.displayTitle || post.title,
        description: post.excerpt,
        href: `/blog/${post.slug}`,
        meta: `${post.category} • ${post.readingTime}`,
      }))}
    />
  )
}
