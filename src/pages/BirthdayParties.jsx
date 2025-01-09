import React from 'react';
import EventHero from '../components/events/EventHero';
import EventBookingForm from '../components/events/EventBookingForm';
import birthdayImage from '../assets/birthday-hero.jpg';

const BirthdayParties = () => {
  return (
    <div className="event-page">
      <EventHero
        title="Birthday Parties"
        subtitle="Create magical moments that last a lifetime"
        backgroundImage={birthdayImage}
      />
      <EventBookingForm eventType="Birthday Party" />
    </div>
  );
};

export default BirthdayParties;