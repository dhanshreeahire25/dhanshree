const Projects = () => {
    return (
      <section className="projects" id="projects">
        <h2 className="heading">My <span>Projects</span></h2>
        <div className="projects-grid">
          <div className="project-card">
          
            <div className="project-info">
              <h3>PetAdopt - Application</h3>
              <p>
                Built using React Native with a responsive and user-friendly UI for both Android and iOS platforms.
                Integrated Firebase for user authentication and real-time database storage.
                Implemented features like pet listing, filtering by breed/age/location, adoption request forms, and shelter
                profiles.
                Utilized RESTful APIs to fetch and display dynamic pet data and shelter information.
                Enabled push notifications using Expo to update users on adoption status and new pet listings.
                Prioritized performance and usability to ensure smooth and intuitive user experience.
              </p>
            </div>
          </div>
          <div className="project-card">
            
            <div className="project-info">
              <h3>BioGPT - OpenAI</h3>
              <p>
                Developed BioGPT, a domain-specific adaptation of GPT for biomedical applications.
                Focused on natural language understanding and text generation in life sciences.
                Enhanced information retrieval, biomedical question answering, and literature summarization.
                Utilized domain-specific datasets (e.g., PubMed) for model training and evaluation.
                Contributed to advancing AI applications in healthcare and
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Projects