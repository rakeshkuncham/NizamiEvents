import React from 'react';

const DashboardNav = ({ activeTab, setActiveTab, bookings }) => {
  return (
    <nav className="dashboard-nav">
      <button
        className={activeTab === 'pending' ? 'active' : ''}
        onClick={() => setActiveTab('pending')}
      >
        Pending ({bookings.pending.length})
      </button>
      <button
        className={activeTab === 'active' ? 'active' : ''}
        onClick={() => setActiveTab('active')}
      >
        Active ({bookings.active.length})
      </button>
      <button
        className={activeTab === 'completed' ? 'active' : ''}
        onClick={() => setActiveTab('completed')}
      >
        Completed ({bookings.completed.length})
      </button>
      <button
        className={activeTab === 'rejected' ? 'active' : ''}
        onClick={() => setActiveTab('rejected')}
      >
        Rejected ({bookings.rejected.length})
      </button>
    </nav>
  );
};

export default DashboardNav;
