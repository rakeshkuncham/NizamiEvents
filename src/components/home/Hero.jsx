import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Event Excellence with NizamiEvents</h1>
        <p>Your Premier Event Planning Partner for Unforgettable Celebrations</p>
        <div className="hero-stats">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Events Organized</p>
          </div>
          <div className="stat-item">
            <h3>300+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Event Experts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
