import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with us for your next memorable event</p>
      </div>
      
      <div className="contact-content container">
        <div className="contact-info">
          <div className="info-section">
            <h3>Our Office</h3>
            <p>NizamiEvents Headquarters</p>
            <p>123 Event Street, Bandra West</p>
            <p>Mumbai, Maharashtra 400050</p>
          </div>
          
          <div className="info-section">
            <h3>Contact Details</h3>
            <p>Phone: +91 98765 43210</p>
            <p>Email: info@nizamievents.com</p>
            <p>WhatsApp: +91 98765 43210</p>
          </div>
          
          <div className="info-section">
            <h3>Business Hours</h3>
            <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
            <p>Sunday: 10:00 AM - 4:00 PM</p>
          </div>
        </div>
        
        <form className="contact-form">
          <h3>Send us a Message</h3>
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Phone Number" required />
          </div>
          <div className="form-group">
            <select required>
              <option value="">Select Event Type</option>
              <option value="wedding">Wedding</option>
              <option value="birthday">Birthday Party</option>
              <option value="corporate">Corporate Event</option>
              <option value="cultural">Cultural Event</option>
              <option value="social">Social Gathering</option>
            </select>
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;