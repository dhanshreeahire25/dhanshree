import img from '../assets/img.jpg'
const Home = () => {
  const handleHireMe = () => {
    alert('You clicked on Hire Me!')
  }

  const handleExperience = () => {
    document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="home">
      <div className="home-content">
        <h3>Hi</h3>
        <h1>I'm<span>Dhanshree<br /></span>a Full-Stack Developer</h1>
        <p>
          Ideas spark, I bring them life,<br />
          With code that cuts like a knife.<br />
          Full stack flow from start to end,<br />
          Your tech goals, I help transcend.<br />
        </p>
        <div className="btn-box">
          <button className="btn-1" onClick={handleHireMe}>Hire Me</button>
          <button className="btn-2" onClick={handleExperience}>Experience</button>
        </div>
      </div>
      <div className="img-box">
        <img src={img} alt="Profile" />
      </div>
    </section>
  )
}

export default Home