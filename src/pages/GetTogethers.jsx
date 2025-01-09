import React from 'react';
import EventHero from '../components/events/EventHero';
import EventBookingForm from '../components/events/EventBookingForm';
import socialImage from '../assets/social-hero.jpg';

const GetTogethers = () => {
  return (
    <div className="event-page">
      <EventHero
        title="Get Togethers"
        subtitle="Making memories with friends and family"
        backgroundImage={socialImage}
      />
      <EventBookingForm eventType="Get Together" />
    </div>
  );
};

export default GetTogethers;