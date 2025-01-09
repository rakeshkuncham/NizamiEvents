import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from './DashboardHeader';
import DashboardNav from './DashboardNav';
import BookingTable from './BookingTable';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import './Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [bookings, setBookings] = useState({
    pending: [],
    active: [],
    completed: [],
    rejected: [],
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'eventBookings'));
        const fetchedBookings = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            eventType: data.eventType,
            customerName: data.name, // Map the name field
            customerPhone: data.phone, // Map the phone field
            customerEmail: data.email, // Map the email field
            numberOfGuests: data.guests, // Map the guests field
            specialRequirements: data.requirements, // Map the requirements field
            eventDate: data.date, // Map the date field
            status: 'pending', // Default status if not provided
          };
        });

        const groupedBookings = fetchedBookings.reduce(
          (acc, booking) => {
            acc[booking.status].push(booking);
            return acc;
          },
          { pending: [], active: [], completed: [], rejected: [] }
        );

        setBookings(groupedBookings);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin/login');
  };

  const handleStatusChange = (bookingId, newStatus) => {
    setBookings(prev => {
      const currentStatus = Object.keys(prev).find(status =>
        prev[status].some(b => b.id === bookingId)
      );
      const updatedBooking = prev[currentStatus].find(b => b.id === bookingId);

      return {
        ...prev,
        [currentStatus]: prev[currentStatus].filter(b => b.id !== bookingId),
        [newStatus]: [...prev[newStatus], { ...updatedBooking, status: newStatus }],
      };
    });
  };

  return (
    <div className="admin-dashboard">
      <DashboardHeader />
      <DashboardNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        bookings={bookings}
      />
      <BookingTable
        bookings={bookings[activeTab]}
        onStatusChange={handleStatusChange}
      />
      <div className="logout-btn-container">
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
