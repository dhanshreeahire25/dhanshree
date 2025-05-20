import React from 'react'

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Your University Name",
      year: "2020 - 2024",
      description: "Relevant coursework: Data Structures, Algorithms, Database Management Systems, Web Development, Machine Learning"
    },
    {
      degree: "Higher Secondary Education",
      institution: "Your School Name",
      year: "2018 - 2020",
      description: "Specialized in Science and Mathematics"
    }
  ]

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="heading">Education</h2>
        <div className="education-container">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-content">
                <h3 className="degree">{edu.degree}</h3>
                <h4 className="institution">{edu.institution}</h4>
                <p className="year">{edu.year}</p>
                <p className="description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education 