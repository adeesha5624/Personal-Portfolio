import { useState } from 'react';
import { FiLinkedin, FiMail, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nReply to: ${formData.email}`);
    window.location.href = `mailto:uvinduadeeshadpriya@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact-section flex-center">
      <div className="container contact-container">
        <h2 className="contact-overline">What's Next?</h2>
        <h3 className="contact-heading">Get In Touch</h3>
        <p className="contact-text">
          Although I'm not currently looking for any new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="contact-cards">
          <a href="https://wa.me/94769088044" target="_blank" rel="noreferrer" className="contact-card glass">
            <div className="card-icon"><FaWhatsapp /></div>
            <span>WhatsApp</span>
          </a>
          <a href="mailto:uvinduadeeshadpriya@gmail.com" className="contact-card glass">
            <div className="card-icon"><FiMail /></div>
            <span>Email Me</span>
          </a>
          <a href="https://www.linkedin.com/in/uvindu-adeesha-454815334" target="_blank" rel="noreferrer" className="contact-card glass">
            <div className="card-icon"><FiLinkedin /></div>
            <span>LinkedIn</span>
          </a>
        </div>
        
        <form className="contact-form glass" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required 
              placeholder="Your Message..."
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary submit-btn">
            <FiSend /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
