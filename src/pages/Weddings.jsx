import React from 'react';
import EventHero from '../components/events/EventHero';
import EventBookingForm from '../components/events/EventBookingForm';
import weddingImage from '../assets/wedding-hero.jpg';

const Weddings = () => {
  return (
    <div className="event-page">
      <EventHero
        title="Wedding Planning"
        subtitle="Your dream wedding, perfectly orchestrated"
        backgroundImage={weddingImage}
      />
      <EventBookingForm eventType="Wedding" />
    </div>
  );
};

export default Weddings;