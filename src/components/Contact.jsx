import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef()
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      phoneNumber: '',
      subject: '',
      message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
      const { name, value } = e.target
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }))
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      setIsSubmitting(true)
      
      try {
        // Replace these with your actual EmailJS credentials
        const templateParams = {
          from_name: formData.fullName,
          from_email: formData.email,
          phone_number: formData.phoneNumber,
          subject: formData.subject,
          message: formData.message,
        }

        await emailjs.send(
          'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
          'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
          templateParams,
          'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
        )
        
        // Clear form after successful submission
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          subject: '',
          message: ''
        })
        
        alert('Thank you for your message! I will get back to you soon.')
      } catch (error) {
        console.error('Error sending email:', error)
        alert('There was an error sending your message. Please try again.')
      } finally {
        setIsSubmitting(false)
      }
    }
  
    return (
      <section className="contact-form" id="contact">
        <h2 className="contact-me">Contact<span>Me</span></h2>
        <form ref={form} onSubmit={handleSubmit}>
          <div className="input-box">
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name" 
              required 
            />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email" 
              required 
            />
          </div>
          <div className="input-box">
            <input 
              type="number" 
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number" 
              required 
            />
            <input 
              type="text" 
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject" 
              required 
            />
          </div>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            cols="30" 
            rows="10" 
            placeholder="Your Message" 
            required
          ></textarea>
          <input 
            type="submit" 
            value={isSubmitting ? "Sending..." : "Send Message"} 
            className="btn-1" 
            disabled={isSubmitting}
          />
        </form>
      </section>
    )
  }
  
  export default Contact