import React, { useState, useEffect } from 'react';
import JobList from '../components/JobList';
import jobService from '../services/jobService';

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
    //handle job editing
  };

  return <JobList jobs={jobs} onDelete={handleDelete} onEdit={handleEdit} />;
};

export default JobPage;
