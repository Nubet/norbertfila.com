import { notFound } from 'next/navigation'
import { blogPosts, getBlogPostBySlug, getRelatedBlogPosts } from '@/data/blogPosts'
import { createPageMetadata } from '@/shared/seo/metadata'
import { EditorialPage } from '@/views/Editorial/EditorialPage'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return createPageMetadata({
      title: 'Blog',
      description: 'Blog o stronach internetowych i SEO.',
      path: '/blog',
    })
  }

  return createPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: [post.targetKeyword, post.category.toLowerCase(), 'norbert fila'],
  })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedBlogPosts(post.slug).map((candidate) => ({
    title: candidate.title,
    description: candidate.excerpt,
    href: `/blog/${candidate.slug}`,
    meta: `${candidate.category} • ${candidate.readingTime}`,
  }))

  return (
    <EditorialPage
      eyebrow={post.category}
      plainTitle
      title={post.title}
      description={post.description}
      intro={post.intro}
      meta={[`Fraza: ${post.targetKeyword}`, `Publikacja: ${post.publishedAt}`, post.readingTime]}
      sections={post.sections}
      relatedPosts={relatedPosts}
      ctaTitle={post.ctaTitle}
      ctaDescription={post.ctaDescription}
      ctaLabel="Przejdź do kontaktu"
      ctaHref="/contact"
    />
  )
}
