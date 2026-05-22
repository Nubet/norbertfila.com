import Projects from '../../components/Projects/Projects.tsx'
import Hero from '../../components/Hero/Hero'
import Career from '../../components/Career/Career'
import Education from '../../components/Education/Education'
import Skills from '../../components/Skills/Skills'
import ContactConsole from '../../components/Inspiration/ContactConsole.tsx'
import Footer from '../../components/Footer/Footer'
import { useEffect } from 'react'
import { setSeo } from '../../utils/seo'

export default function CVPage() {
  useEffect(() => {
    setSeo({
      title: 'Norbert Fila - CV / O mnie',
      description:
        'Szczegółowe informacje o moim wykształceniu, doświadczeniu i umiejętnościach twardych.',
      canonicalUrl: 'https://norbertfila.com/portfolio/cv',
    })
  }, [])

  return (
    <div className="neo-brutalist-theme">
      <div className="page">
        <Hero />
        <Projects />
        <Career />
        <Education />
        <Skills />
        <ContactConsole />
        <Footer />
      </div>
    </div>
  )
}
