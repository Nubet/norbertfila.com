import { CaseStudy } from '@/views/CaseStudy/CaseStudy'
import { getCaseStudyById, caseStudies } from '@/data/caseStudies'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.id,
  }))
}

type ProjectPageProps = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params
  const data = getCaseStudyById(id)

  if (!data) return {}

  return {
    title: `${data.title} | Portfolio | Norbert Fila`,
    description: data.clientDescription.substring(0, 160) + '...',
    alternates: {
      canonical: `/portfolio/${id}`,
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params
  const data = getCaseStudyById(id)

  if (!data) {
    notFound()
  }

  return <CaseStudy data={data} />
}
