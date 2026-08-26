import { CaseStudy } from '@/views/CaseStudy/CaseStudy'
import { getCaseStudyById, caseStudies } from '@/data/caseStudies'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.id,
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const data = getCaseStudyById(params.id)

  if (!data) {
    notFound()
  }

  return <CaseStudy data={data} />
}
