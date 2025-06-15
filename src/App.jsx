import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Extras from './pages/Extras'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-black">
      {/* Grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Radial gradients */}
      <div className="fixed inset-0 top-[25%]">
        <div className="hidden md:block absolute left-[10%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#00000000)]"></div>
        <div className="absolute right-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#00000000)]"></div>
        <div className="absolute left-[20%] bottom-[20%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#00000000)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-gray-100">
        <main>      <Home />
          <Projects />
          <Skills />
          <Extras />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
