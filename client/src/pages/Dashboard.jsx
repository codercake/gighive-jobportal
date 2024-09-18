import React from 'react';
import Dashboard from '../components/Dashboard';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  background-color: #f4f4f9;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const DashboardPage = () => {
  return (
    <Container>
      <Title>Dashboard</Title>
      <Dashboard />
    </Container>
  );
};

export default DashboardPage;
