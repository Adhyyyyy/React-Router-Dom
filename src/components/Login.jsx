import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    
    // Simple validation
    if (!formData.email || !formData.password) {
      setMessage('Please fill in all fields');
      return;
    }
    
    if (!formData.email.includes('@')) {
      setMessage('Please enter a valid email address');
      return;
    }
    
    setMessage('Login successful! (This is a demo)');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="container">
      <div className="page">
        <h1>Login</h1>
        <p>Please enter your credentials to access your account.</p>
        
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          
          {message && (
            <div className={message.includes('successful') ? 'success' : 'error'}>
              {message}
            </div>
          )}
          
          <div style={{ textAlign: 'center' }}>
            <button type="submit" className="btn">Login</button>
          </div>
        </form>
        
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Link to="/" className="btn">Back to Home</Link>
          <Link to="/dashboard" className="btn">Dashboard</Link>
          <Link to="/signup" className="btn">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login; 