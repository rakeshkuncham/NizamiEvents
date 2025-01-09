import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><Link to="/services/weddings">Weddings</Link></li>
              <li><Link to="/services/corporate">Corporate Events</Link></li>
              <li><Link to="/services/parties">Private Parties</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>NizamiEvents</p>
            <p>123 Event Street</p>
            <p>Mumbai, India</p>
            <p>Phone: +91 123 456 7890</p>
            <p>Email: info@nizamievents.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 NizamiEvents • All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;