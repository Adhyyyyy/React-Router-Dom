import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <div className="page">
        <h1> React Router Demo</h1>
        
        
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/dashboard" className="btn"> Dashboard</Link>
          <Link to="/login" className="btn"> Login</Link>
          <Link to="/signup" className="btn"> Sign Up</Link>
        </div>
        

      </div>
    </div>
  );
};

export default Home; 