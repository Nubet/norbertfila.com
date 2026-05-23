import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CVPage from './pages/CVPage/CVPage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import NotFound from './components/NotFound/NotFound'
import ContactPage from './pages/ContactPage/ContactPage'
import CookiePolicyPage from './pages/LegalPages/CookiePolicyPage'
import { Footer } from './components/Footer/Footer'
import { CookieConsentManager } from './features/cookies/CookieConsentManager'

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CVPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsentManager />
      </div>
    </Router>
  )
}

export default App
