import React from 'react';
import './EventHero.css';

const EventHero = ({ title, subtitle, backgroundImage }) => {
  return (
    <div 
      className="event-hero" 
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImage})` }}
    >
      <div className="event-hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default EventHero;