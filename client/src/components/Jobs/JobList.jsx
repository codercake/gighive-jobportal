import React, { useEffect, useState } from 'react';
import { getAllJobs } from '../../services/jobService';  
import JobListItem from './JobListItem';
import styled from 'styled-components';
import JobFilter from './JobFilter';

const JobListContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Banner = styled.div`
  text-align: center;
  margin: 20px 0;
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({ jobType: '', location: '', salaryRange: '' });

  useEffect(() => {
    const fetchJobs = async () => {
      const jobData = await getAllJobs(filters);  
      setJobs(jobData);
    };
    fetchJobs();
  }, [filters]);

  return (
    <JobListContainer>
      <Banner>Find your dream job now!</Banner>
      <JobFilter onFilter={setFilters} />
      {jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        jobs.map(job => (
          <JobListItem key={job._id} job={job} />
        ))
      )}
    </JobListContainer>
  );
};

export default JobList;
