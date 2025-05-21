import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import TrailingCursor from './components/TrailingCursor'

const App = () => {
  return (
    <Router>
      {/* <TrailingCursor /> */}
      <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
        <Navbar />
        <main>
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
    </Router>
  )
}

export default App
