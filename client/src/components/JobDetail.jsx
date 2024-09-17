import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import jobService from '../services/jobService';
import Navbar from './Navbar';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      const data = await jobService.getJobById(id);
      setJob(data);
    };
    fetchJob();
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <h1>{job.title}</h1>
      <p>{job.company}</p>
      <p>{job.description}</p>
      <p>Qualifications: {job.qualifications}</p>
      <p>Responsibilities: {job.responsibilities}</p>
      <p>Salary: {job.salary}</p>
      <p>Location: {job.location}</p>
    </div>
  );
};

export default JobDetail;
