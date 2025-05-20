import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import dhanresume from '../assets/resume.pdf'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // 1st useEffect: handle screen resizing
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 991)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // ✅ 2nd useEffect: prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto'
  }, [isMobileMenuOpen])

  const handleNavigation = (sectionId) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="header">
      <Link to="/" className="logo"><span>Dhan</span>shree</Link>

      {isMobile ? (
        <>
          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
            ☰
          </div>
          {isMobileMenuOpen && (
            <nav className="mobile-navbar">
              <a href="#experience" onClick={() => handleNavigation('experience')}>Experience</a>
              <a href="#projects" onClick={() => handleNavigation('projects')}>Projects</a>
              <a href="#education" onClick={() => handleNavigation('education')}>Education</a>
              <a href="#contact" onClick={() => handleNavigation('contact')}>Contact Me</a>
              <a href={dhanresume} download onClick={() => setIsMobileMenuOpen(false)}>Download Resume</a>
            </nav>
          )}
        </>
      ) : (
        <>
          <nav className="navbar">
            <a href="#home" onClick={() => handleNavigation('home')}>Portfolio</a>
            <a href="#experience" onClick={() => handleNavigation('experience')}>Experience</a>
            <a href="#projects" onClick={() => handleNavigation('projects')}>Projects</a>
            <a href="#education" onClick={() => handleNavigation('education')}>Education</a>
          </nav>
          <a href="#contact" className="contact" onClick={() => handleNavigation('contact')}>Contact Me</a>
          <a href={dhanresume} download className="download-resume">Download Resume</a>
        </>
      )}
    </header>
  )
}

export default Header
