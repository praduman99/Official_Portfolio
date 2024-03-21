import React from 'react'
import About from './pages/About'
import Intro from './pages/Intro'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Footer from './pages/Footer'
import Blogs from './pages/Blogs'
import Navbar from './components/Navbar'
import Certificates from './pages/Certificates'

const App = () => {
  return (
  <React.Fragment>
    
    <Navbar/>
    <Intro/>
    <About/>
    <Skills/>
    <Projects/>
    <Certificates/>
    <Blogs/>
    <Footer/>
  </React.Fragment>
  )
}

export default App