import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 5rem;
  text-align: center;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  padding: 4rem;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 1rem;
`;

const Dashboard = () => {
  return (
    <Container>
      <div className="row">
        <div className="col-md-6 mb-4">
          <Card>
            <h2>Job Seekers</h2>
            <Link to="/my-applications" className="btn btn-primary mt-3">My Applications</Link>
            <Link to="/job-recommendations" className="btn btn-secondary mt-3">Job Recommendations</Link>
            <Link to="/profile" className="btn btn-secondary mt-3">Edit Profile</Link>
            <Link to="/job-alerts" className="btn btn-secondary mt-3">Job Alerts</Link>
          </Card>
        </div>
        <div className="col-md-6 mb-4">
          <Card>
            <h2>Employers</h2>
            <Link to="/my-listings" className="btn btn-primary mt-3">My Job Listings</Link>
            <Link to="/create-job" className="btn btn-secondary mt-3">Post a New Job</Link>
            <Link to="/applicant-reviews" className="btn btn-secondary mt-3">Applicant Reviews</Link>
            <Link to="/company-profile" className="btn btn-secondary mt-3">Company Profile</Link>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
