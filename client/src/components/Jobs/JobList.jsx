import React, { useEffect, useState } from 'react';
import jobService from '../../services/jobService';
import JobListItem from './JobListItem';
import styled from 'styled-components';
import JobFilter from './JobFilter';

// Styled Components for modern full-width container
const JobListWrapper = styled.div`
  padding: 30px;
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 25px;
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow-x: hidden;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Banner = styled.div`
  text-align: center;
  margin: 30px 0;
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: linear-gradient(to right, #00b4db, #0083b0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const JobListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const EmptyStateMessage = styled.p`
  font-size: 1.2rem;
  color: #888;
  text-align: center;
`;

// Main JobList component
const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({ jobType: '', location: '', salaryRange: '' });

  useEffect(() => {
    const fetchJobs = async () => {
      const jobData = await jobService.getAllJobs(filters); 
      setJobs(jobData);
    };
    fetchJobs();
  }, [filters]);

  return (
    <JobListWrapper>
      <Banner>Find your dream job now!</Banner>
      <JobFilter onFilter={setFilters} />

      {jobs.length === 0 ? (
        <EmptyStateMessage>No jobs found. Try adjusting the filters.</EmptyStateMessage>
      ) : (
        <JobListGrid>
          {jobs.map((job) => (
            <JobListItem key={job._id} job={job} />
          ))}
        </JobListGrid>
      )}
    </JobListWrapper>
  );
};

export default JobList;
