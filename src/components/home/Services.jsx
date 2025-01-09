import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRing, 
  faBuilding, 
  faGlassCheers,
  faBirthdayCake,
  faMusic,
  faCamera
} from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const services = [
  {
    icon: faRing,
    title: 'Wedding Planning',
    description: 'Create your perfect wedding day with our comprehensive planning services.'
  },
  {
    icon: faBuilding,
    title: 'Corporate Events',
    description: 'Professional event management for conferences, seminars, and team building.'
  },
  {
    icon: faGlassCheers,
    title: 'Private Parties',
    description: 'Turn your special occasions into unforgettable celebrations.'
  },
  {
    icon: faBirthdayCake,
    title: 'Birthday Parties',
    description: 'Magical birthday celebrations for all ages.'
  },
  {
    icon: faMusic,
    title: 'Entertainment',
    description: 'Top-tier entertainment solutions for any event.'
  },
  {
    icon: faCamera,
    title: 'Event Photography',
    description: 'Capture your precious moments with professional photography.'
  }
];

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2>Our Services</h2>
        <p className="lead">Comprehensive Event Planning Solutions</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <FontAwesomeIcon icon={service.icon} className="service-icon" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;