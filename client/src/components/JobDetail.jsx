import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import jobService from '../services/jobService';
import styled from 'styled-components';

const JobDetailContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      const jobData = await jobService.getJobById(id);
      setJob(jobData);
    };
    fetchJob();
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <JobDetailContainer>
      <h1>{job.title}</h1>
      <p>Company: {job.company}</p>
      <p>Description: {job.description}</p>
      <p>Location: {job.location}</p>
      <p>Salary: {job.salary}</p>
    </JobDetailContainer>
  );
};

export default JobDetail;
