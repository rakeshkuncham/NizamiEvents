import React from 'react';
import EventHero from '../components/events/EventHero';
import EventBookingForm from '../components/events/EventBookingForm';
import corporateImage from '../assets/corporate-hero.jpg';

const OfficeFests = () => {
  return (
    <div className="event-page">
      <EventHero
        title="Office Fests"
        subtitle="Corporate celebrations that inspire"
        backgroundImage={corporateImage}
      />
      <EventBookingForm eventType="Office Fest" />
    </div>
  );
};

export default OfficeFests;