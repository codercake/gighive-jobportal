import React from 'react';
import JobList from '../components/Jobs/JobList';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: calc(100vh - 64px); // Adjusting for navbar height
  margin-top: 64px; // Adding margin for navbar
  
  @media (max-width: 768px) {
    padding: 10px;
    margin-top: 56px; // Smaller margin for mobile
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const JobListingsPage = () => {
  return (
    <PageContainer>
      <Title>Explore Job Opportunities</Title>
      <JobList />
    </PageContainer>
  );
};

export default JobListingsPage;