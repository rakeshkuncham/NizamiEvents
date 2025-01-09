import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore'; // Firestore imports
import { db } from '../../firebase/firebase'; // Import Firestore instance
import './EventBookingForm.css';

const EventBookingForm = ({ eventType }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    requirements: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Save booking to Firestore
      await addDoc(collection(db, 'eventBookings'), {
        ...formData,
        eventType,
        createdAt: new Date()
      });
      setSuccessMessage('Booking submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        guests: '',
        requirements: ''
      });
    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form className="event-booking-form" onSubmit={handleSubmit}>
      <h3>Book Your {eventType}</h3>
      <div className="form-row">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Event Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label>Number of Guests</label>
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Special Requirements</label>
        <textarea
          name="requirements"
          value={formData.requirements}
          onChange={handleChange}
          rows="4"
        ></textarea>
      </div>
      <button type="submit" className="submit-btn">Submit Booking</button>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </form>
  );
};

export default EventBookingForm;
