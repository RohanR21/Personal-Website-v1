import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Projects from "./Components/Projects.jsx";
import Contact from "./Components/Contact.jsx";

function App() {


  return (
    <div className='bg-gray-800'>
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default App
