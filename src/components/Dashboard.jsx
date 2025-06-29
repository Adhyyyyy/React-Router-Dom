import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container">
      <div className="page">
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard! Here you can see some sample statistics.</p>
        
        <h2>Key Metrics</h2>
        <div className="stats">
          <div className="stat-card">
            <h3>Total Users</h3>
            <p>1,234</p>
          </div>
          <div className="stat-card">
            <h3>Revenue</h3>
            <p>$45,678</p>
          </div>
          <div className="stat-card">
            <h3>Orders</h3>
            <p>567</p>
          </div>
          <div className="stat-card">
            <h3>Growth</h3>
            <p>23%</p>
          </div>
        </div>
        
        <h2>Quick Actions</h2>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Link to="/" className="btn">Back to Home</Link>
          <Link to="/login" className="btn">Login</Link>
          <Link to="/signup" className="btn">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 