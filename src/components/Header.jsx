import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import dhanresume from '../assets/Dhanshree-resume (1).pdf'

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
              <Link to="/#experience" onClick={() => setIsMobileMenuOpen(false)}>Experience</Link>
              <Link to="/#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
              <Link to="/#education" onClick={() => setIsMobileMenuOpen(false)}>Education</Link>
              <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Me</Link>
              <a href={dhanresume} download onClick={() => setIsMobileMenuOpen(false)}>Download Resume</a>
            </nav>
          )}
        </>
      ) : (
        <>
          <nav className="navbar">
            <Link to="/#home">Portfolio</Link>
            <Link to="/#experience">Experience</Link>
            <Link to="/#projects">Projects</Link>
            <Link to="/#education">Education</Link>
          </nav>
          <Link to="/#contact" className="contact">Contact Me</Link>
          <a href={dhanresume} download className="download-resume">Download Resume</a>
        </>
      )}
    </header>
  )
}

export default Header
