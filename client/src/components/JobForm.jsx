import React, { useState } from 'react';
import jobService from '../services/jobService';
import styled from 'styled-components';

const JobFormContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const JobForm = ({ isEdit, existingJob }) => {
  const [jobData, setJobData] = useState({
    title: existingJob?.title || '',
    company: existingJob?.company || '',
    description: existingJob?.description || '',
    location: existingJob?.location || '',
    salary: existingJob?.salary || '',
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEdit) {
      await jobService.updateJob(existingJob.id, jobData);
    } else {
      await jobService.createJob(jobData);
    }
  };

  return (
    <JobFormContainer>
      <h1>{isEdit ? 'Edit Job Listing' : 'Create Job Listing'}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Job Title" value={jobData.title} onChange={handleChange} required />
        <input type="text" name="company" placeholder="Company" value={jobData.company} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={jobData.description} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" value={jobData.location} onChange={handleChange} required />
        <input type="text" name="salary" placeholder="Salary" value={jobData.salary} onChange={handleChange} required />
        <button type="submit">{isEdit ? 'Update Job' : 'Create Job'}</button>
      </form>
    </JobFormContainer>
  );
};

export default JobForm;
