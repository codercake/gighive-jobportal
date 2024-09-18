import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center mb-4">Dashboard</h1>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card p-4 text-center">
              <h2>Job Seekers</h2>
              <Link to="/my-applications" className="btn btn-primary mt-3">My Applications</Link>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card p-4 text-center">
              <h2>Employers</h2>
              <Link to="/my-listings" className="btn btn-primary mt-3">My Job Listings</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
