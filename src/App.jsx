import Home from './pages/Home'
import Socials from './components/Socials'
import Projects from './pages/Projects'

const App = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <Home />
      <Socials />
      <Projects />
    </div>
  )
}

export default App
