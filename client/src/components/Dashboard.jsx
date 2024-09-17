import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <h1>Dashboard</h1>
      <div>
        <h2>Job Seekers</h2>
        <Link to="/my-applications">My Applications</Link>
      </div>
      <div>
        <h2>Employers</h2>
        <Link to="/my-listings">My Job Listings</Link>
      </div>
    </div>
  );
};

export default Dashboard;
