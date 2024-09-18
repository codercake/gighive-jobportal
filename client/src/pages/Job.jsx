import React, { useState, useEffect } from 'react';
import JobList from '../components/JobList';
import jobService from '../services/jobService';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

const JobPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await jobService.getAllJobs();
      setJobs(data);
    };
    fetchJobs();
  }, []);

  const handleDelete = async (id) => {
    await jobService.deleteJob(id);
    setJobs(jobs.filter(job => job.id !== id));
  };

  const handleEdit = (id) => {
  };

  return (
    <Container>
      <JobList jobs={jobs} onDelete={handleDelete} onEdit={handleEdit} />
    </Container>
  );
};

export default JobPage;
