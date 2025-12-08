import React from 'react';

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>Let's connect and discuss opportunities!</p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong> <a href="mailto:your.email@example.com">your.email@example.com</a>
              </div>
              <div className="contact-item">
                <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a>
              </div>
              <div className="contact-item">
                <strong>GitHub:</strong> <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
