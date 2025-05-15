import img from '../assets/img.jpg'

const About = () => {
    return (
      <section className="about">
        <div className="about-img">
          <img src={img} alt="About" />
        </div>
        <div className="about-content">
          <h2 className="heading">About <span>Me</span></h2>
          <h3>Full-Stack<span>Developer</span></h3>
          <p>
            I'm a passionate Full-Stack Developer with a focus on building seamless web experiences from the ground up. I specialize in both frontend and backend development, working with a modern tech stack that includes JavaScript (Node.js) and Python.
  
            On the frontend, I build dynamic, responsive user interfaces using JavaScript frameworks and libraries like React, along with HTML5, CSS3, and modern UI/UX principles to create engaging digital experiences.
  
            On the backend, I use Node.js and Python to design scalable, secure, and high-performance server-side applications. With tools like Express.js, Flask, and FastAPI, I develop RESTful APIs, integrate databases, and architect backend systems that power robust applications.
  
            From crafting intuitive UIs to engineering backend logic, I enjoy delivering full-cycle solutions that are clean, maintainable, and optimized for performance. My goal is to bridge the gap between code and user experience.
          </p>
          <a href="#experience" className="btn-2">Experience</a>
        </div>
      </section>
    )
  }
  
  export default About