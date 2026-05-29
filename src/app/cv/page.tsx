import type { Metadata } from 'next'
import CVPage from '@/views/CVPage/CVPage'

export const metadata: Metadata = {
  title: 'Norbert Fila - CV / O mnie',
  description: 'Szczegółowe informacje o moim wykształceniu, doświadczeniu i umiejętnościach.',
  alternates: {
    canonical: '/cv',
  },
}

export default function CvRoutePage() {
  return <CVPage />
}
