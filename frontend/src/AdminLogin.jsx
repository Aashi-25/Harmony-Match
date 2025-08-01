import { useState } from 'react';
import { toast } from 'react-toastify';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('http://localhost:8000/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Login failed');
      toast.success('Admin login successful!');
      // TODO: Redirect to admin dashboard
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #822c87 0%, #f19fc5 100%)',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    }}>
      <div style={{
        background: 'white',
        borderRadius: 20,
        boxShadow: '0 20px 40px rgba(130,44,135,0.15)',
        border: '2px solid #ed6da6',
        padding: 40,
        minWidth: 370,
        maxWidth: 400,
        width: '100%',
        textAlign: 'center',
        position: 'relative',
      }}>
        <div style={{ marginBottom: 24 }}>
          <svg width="60" height="60" viewBox="0 0 60 60" style={{ marginBottom: 10 }}>
            <circle cx="30" cy="30" r="30" fill="#822c87" />
            <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="28" fontWeight="bold" dy=".3em">A</text>
          </svg>
          <h2 style={{ color: '#822c87', fontWeight: 700, fontSize: '2rem', margin: 0 }}>Admin Login</h2>
          <p style={{ color: '#718096', margin: '8px 0 0 0', fontSize: '1rem' }}>Room Allocation Management</p>
        </div>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '15px 20px',
              border: '2px solid #ed6da6',
              borderRadius: 12,
              fontSize: '1rem',
              marginBottom: 18,
              outline: 'none',
              transition: 'all 0.3s',
            }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '15px 20px',
              border: '2px solid #ed6da6',
              borderRadius: 12,
              fontSize: '1rem',
              marginBottom: 28,
              outline: 'none',
              transition: 'all 0.3s',
            }}
            required
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: 16,
              background: '#822c87',
              color: 'white',
              border: 'none',
              borderRadius: 12,
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s',
              marginTop: 8,
              boxShadow: loading ? 'none' : '0 4px 12px rgba(130,44,135,0.15)'
            }}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
