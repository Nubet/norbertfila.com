export type CaseStudyData = {
  id: string
  title: string
  clientDescription: string
  role: string
  industry: string
  year: string
  openingImage: string
  overviewText: string
  galleryImage1: string
  galleryImage2: string
  fullPageMockup: string
  nextProjectSlug?: string
  prevProjectSlug?: string
  nextProjectName?: string
  prevProjectName?: string
}

export const caseStudies: CaseStudyData[] = [
  {
    id: 'artorius',
    title: 'Artorius',
    clientDescription: 'Artorius to firma zajmująca się zarządzaniem majątkiem, specjalizująca się w dostarczaniu spersonalizowanych strategii finansowych dla zamożnych klientów. Potrzebowali strony, która jasno zakomunikuje ich usługi, zbuduje zaufanie oraz zapewni bezszwowe doświadczenie dla użytkowników. Celem było stworzenie wyrafinowanej, profesjonalnej platformy oddającej ekspertyzę i niezawodność ich marki.',
    role: 'Design & Development',
    industry: 'Premium E-commerce',
    year: '2025',
    openingImage: '/zdj-otwierajace.jpg',
    overviewText: 'Podczas pracy nad tym projektem skupiłem się na wyeliminowaniu szumu wizualnego. Zaprojektowałem architekturę informacji od zera, łącząc rygorystyczną typografię z dużą ilością negatywnej przestrzeni. Każda interakcja została zaprogramowana tak, aby potęgować wrażenie obcowania z produktem luksusowym.',
    galleryImage1: '/mockup1.jpg',
    galleryImage2: '/mockup2.jpg',
    fullPageMockup: '/visual-projects/abc-centrum-logopedii/whole.webp',
    prevProjectSlug: 'vellum-blanc',
    prevProjectName: 'Vellum Blanc',
    nextProjectSlug: 'aura-medical',
    nextProjectName: 'Aura Medical'
  }
]

export function getCaseStudyById(id: string): CaseStudyData | undefined {
  return caseStudies.find(study => study.id === id)
}
