import React from 'react';
import EventHero from '../components/events/EventHero';
import EventBookingForm from '../components/events/EventBookingForm';
import culturalImage from '../assets/cultural-hero.jpg';

const CulturalEvents = () => {
  return (
    <div className="event-page">
      <EventHero
        title="Cultural Events"
        subtitle="Celebrating traditions with modern excellence"
        backgroundImage={culturalImage}
      />
      <EventBookingForm eventType="Cultural Event" />
    </div>
  );
};

export default CulturalEvents;