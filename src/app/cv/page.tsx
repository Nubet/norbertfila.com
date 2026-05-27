import type { Metadata } from 'next'
import CVPage from '../../pages/CVPage/CVPage'

export const metadata: Metadata = {
  title: 'Norbert Fila - CV / O mnie',
  description: 'Szczegolowe informacje o moim wyksztalceniu, doswiadczeniu i umiejetnosciach.',
  alternates: {
    canonical: '/cv',
  },
}

export default function CvRoutePage() {
  return <CVPage />
}
