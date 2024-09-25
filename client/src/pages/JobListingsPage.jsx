import React from 'react';
import JobList from '../components/JobList';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const JobListingsPage = () => {
  return (
    <PageContainer>
      <JobList />
    </PageContainer>
  );
};

export default JobListingsPage;
