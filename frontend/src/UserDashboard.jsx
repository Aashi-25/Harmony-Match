import { useEffect } from 'react';

const UserDashboard = () => {
  useEffect(() => {
    document.title = 'User Dashboard - Harmony Match';
  }, []);

  return (
    <div style={{ padding: '20px', color: '#333' }}>
      <h1>User Dashboard</h1>
      <p>Welcome, User! Find your perfect roommate here.</p>
    </div>
  );
};

export default UserDashboard;