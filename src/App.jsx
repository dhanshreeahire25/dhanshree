import { useState, useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App