import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo"><span>Dhan</span>shree</Link>
      <nav className="navbar">
        <a href="#home">Portfolio</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
      </nav>
      <a href="#contact" className="contact">Contact Me</a>
      <a href="/Dhanshree-resume.pdf" download className="download-resume">Download Resume</a>
    </header>
  )
}

export default Header