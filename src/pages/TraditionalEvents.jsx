import React from 'react';
import EventHero from '../components/events/EventHero';
import EventBookingForm from '../components/events/EventBookingForm';
import traditionalImage from '../assets/traditional-hero.jpg';

const TraditionalEvents = () => {
  return (
    <div className="event-page">
      <EventHero
        title="Traditional Events"
        subtitle="Honoring heritage with elegance"
        backgroundImage={traditionalImage}
      />
      <EventBookingForm eventType="Traditional Event" />
    </div>
  );
};

export default TraditionalEvents;