import React from 'react';
import './BookingTableRow.css';

const BookingTableRow = ({ booking, onStatusChange }) => {
  // Format the date for better readability
  const formattedEventDate = new Date(booking.eventDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <tr>
      <td>{booking.id}</td>
      <td>{booking.eventType}</td>
      <td>{booking.customerName}</td>
      <td>{booking.customerPhone}</td>
      <td>{booking.customerEmail}</td>
      <td>{booking.numberOfGuests}</td>
      <td>{formattedEventDate}</td>
      <td>{booking.specialRequirements}</td>
      <td>{booking.status}</td>
      <td>
        {booking.status === 'pending' && (
          <>
            <button
              className="btn-accept"
              onClick={() => onStatusChange(booking.id, 'active')}
              aria-label="Accept booking"
            >
              Accept
            </button>
            <button
              className="btn-reject"
              onClick={() => onStatusChange(booking.id, 'rejected')}
              aria-label="Reject booking"
            >
              Reject
            </button>
          </>
        )}
        {booking.status === 'active' && (
          <button
            className="btn-complete"
            onClick={() => onStatusChange(booking.id, 'completed')}
            aria-label="Mark as completed"
          >
            Complete
          </button>
        )}
      </td>
    </tr>
  );
};

export default BookingTableRow;
