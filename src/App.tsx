import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CVPage from './pages/CVPage/CVPage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import NotFound from './components/NotFound/NotFound'
import ContactPage from './pages/ContactPage/ContactPage'
import { Footer } from './components/Footer/Footer'

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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
