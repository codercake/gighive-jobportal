import React, { useEffect, useState } from 'react';
import jobService from '../services/jobService';
import JobListItem from './JobListItem';
import styled from 'styled-components';

const JobListContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const jobData = await jobService.getAllJobs();
      setJobs(jobData);
    };
    fetchJobs();
  }, []);

  return (
    <JobListContainer>
      {jobs.map(job => (
        <JobListItem key={job.id} job={job} />
      ))}
    </JobListContainer>
  );
};

export default JobList;
