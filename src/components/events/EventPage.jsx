import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './EventPage.css';

const EventPage = ({ title, image, description }) => {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    requirements: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we'll add logic to submit booking data to admin panel
    console.log('Booking submitted:', bookingData);
  };

  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="event-page">
      <div className="event-hero">
        <img src={image} alt={title} />
      </div>
      <div className="event-content">
        <h1>{title}</h1>
        <p>{description}</p>
        
        <form className="booking-form" onSubmit={handleSubmit}>
          <h2>Book This Event</h2>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
              value={bookingData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email Address"
              value={bookingData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder="Phone Number"
              value={bookingData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              name="date"
              className="form-control"
              value={bookingData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="guests"
              className="form-control"
              placeholder="Number of Guests"
              value={bookingData.guests}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="requirements"
              className="form-control"
              placeholder="Special Requirements"
              value={bookingData.requirements}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit Booking</button>
        </form>
      </div>
    </div>
  );
};

EventPage.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default EventPage;