import Home from './pages/Home'
import Socials from './components/Socials'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100"> {/* Ensure full height and base styling */}
      <Navbar />
      <main className="flex-grow"> {/* Main content should grow to fill space */}
        {/* Sections - you might want to wrap these in a container if they don't have their own full-width backgrounds */}
        <div id="home">
          <Home />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
