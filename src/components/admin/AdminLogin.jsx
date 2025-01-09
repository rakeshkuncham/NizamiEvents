import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'; // Make sure this CSS file is correctly imported

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Correct credentials check (username: admin, password: admin123)
    if (username === 'admin' && password === 'admin123') {
      // Save to localStorage upon successful login
      localStorage.setItem('adminAuth', 'true');
      navigate('/admin/dashboard'); // Navigate to the admin dashboard
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="admin-login">
      <div className="login-card">
        <h1 className="login-header">NizamEvents</h1>  {/* Added Name */}
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
