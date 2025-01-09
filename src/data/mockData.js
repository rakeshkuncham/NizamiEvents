const mockBookings = {
    pending: [
      { id: 1, eventType: 'Wedding', customerName: 'John Doe', date: '2024-02-15', status: 'pending' },
      { id: 2, eventType: 'Birthday', customerName: 'Jane Smith', date: '2024-02-20', status: 'pending' }
    ],
    active: [
      { id: 3, eventType: 'Corporate', customerName: 'Tech Corp', date: '2024-02-25', status: 'active' }
    ],
    completed: [
      { id: 4, eventType: 'Cultural', customerName: 'Cultural Society', date: '2024-01-15', status: 'completed' }
    ],
    rejected: [
      { id: 5, eventType: 'Birthday', customerName: 'Alice Brown', date: '2024-01-10', status: 'rejected' }
    ]
  };
  
  export { mockBookings };
  