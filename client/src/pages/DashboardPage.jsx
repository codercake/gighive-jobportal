import React from 'react';
import Dashboard from '../components/Dashboard/Dashboard.jsx';
import styled from 'styled-components';

const Title = styled.h1`
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const DashboardPage = () => {
  return (
    <div>
      <Title>Dashboard</Title>
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
