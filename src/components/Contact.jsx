const Contact = () => {
    const handleSubmit = (e) => {
      e.preventDefault()
      // Add your form submission logic here
    }
  
    return (
      <section className="contact-form" id="contact">
        <h2 className="contact-me">Contact<span>Me</span></h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-box">
            <input type="number" placeholder="Phone Number" required />
            <input type="text" placeholder="Subject" required />
          </div>
          <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
          <input type="submit" value="Send Message" className="btn-1" />
        </form>
      </section>
    )
  }
  
  export default Contact