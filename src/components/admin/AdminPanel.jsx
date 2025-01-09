import React, { useState } from 'react';
import './AdminPanel.css';

const AdminPanel = () => {
  const [bookings, setBookings] = useState([
    // Sample data - replace with actual bookings
    {
      id: 1,
      eventType: 'Birthday Party',
      customerName: 'John Doe',
      date: '2024-01-20',
      guests: 50,
      status: 'pending'
    }
  ]);

  const handleStatusUpdate = (id, status) => {
    setBookings(bookings.map(booking => 
      booking.id === id ? { ...booking, status } : booking
    ));
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel - Event Bookings</h1>
      
      <table className="bookings-table">
        <thead>
          <tr>
            <th>Event Type</th>
            <th>Customer Name</th>
            <th>Date</th>
            <th>Guests</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.id}>
              <td>{booking.eventType}</td>
              <td>{booking.customerName}</td>
              <td>{booking.date}</td>
              <td>{booking.guests}</td>
              <td className={`status-${booking.status}`}>
                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
              </td>
              <td>
                <button 
                  className="action-btn confirm-btn"
                  onClick={() => handleStatusUpdate(booking.id, 'confirmed')}
                >
                  Confirm
                </button>
                <button 
                  className="action-btn cancel-btn"
                  onClick={() => handleStatusUpdate(booking.id, 'cancelled')}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;