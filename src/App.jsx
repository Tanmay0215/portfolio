import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-100">
      <Home />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div >
  )
}

export default App
