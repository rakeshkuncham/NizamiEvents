import React from 'react';
import BookingTableRow from './BookingTableRow';
import './BookingTable.css';

const BookingTable = ({ bookings, onStatusChange }) => {
  return (
    <div className="bookings-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Event Type</th>
            <th>Customer Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Number of Guests</th>
            <th>Event Date</th>
            <th>Special Requirements</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <BookingTableRow 
              key={booking.id} 
              booking={booking} 
              onStatusChange={onStatusChange} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
