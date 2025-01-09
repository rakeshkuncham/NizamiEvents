import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faWhatsapp, 
  faInstagram, 
  faLinkedin, 
  faTwitter, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/nizami-logo.svg';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fixed">
        <ul className="topnav">
          <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
        </ul>
      </div>

      <nav className={`navbar navbar-expand-lg navbar-light ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="NizamiEvents Logo" className="logo" />
          </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/birthday-parties">Birthday Parties</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/weddings">Weddings</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cultural-events">Cultural Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/office-fests">Office Fests</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/get-togethers">Get Togethers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/traditional-events">Traditional Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item book-now-container">
                <Link className="nav-link book-now" to="/book">Book Now</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;