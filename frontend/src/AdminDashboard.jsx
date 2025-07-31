import { useEffect } from 'react';

const AdminDashboard = () => {
  useEffect(() => {
    document.title = 'Admin Dashboard - Harmony Match';
  }, []);

  return (
    <div style={{ padding: '20px', color: '#333' }}>
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin! Manage users and settings here.</p>
    </div>
  );
};

export default AdminDashboard;