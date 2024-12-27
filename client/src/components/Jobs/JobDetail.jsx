import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getJobById } from '../../services/jobService';
import styled from 'styled-components';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJob = async () => {
      const jobData = await getJobById(id);
      setJob(jobData);
    };
    fetchJob();
  }, [id]);

  const handleApplyClick = () => {
    navigate(`/jobs/${id}/apply`, { state: { job: job } });  // Pass job data using `state`
  };

  if (!job) return <div>Loading...</div>;

  return (
    <JobDetailContainer>
      <JobDetailHeader>{job.title}</JobDetailHeader>

      <JobSection>
        <CompanyInfo>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Salary:</strong> {job.salary}</p>
        </CompanyInfo>
        <ApplyButton onClick={handleApplyClick}>Apply Now</ApplyButton>
      </JobSection>

      <Description>{job.description}</Description>
    </JobDetailContainer>
  );
};

const JobDetailContainer = styled.div`
  padding: 30px;
  max-width: 1000px;
  margin: 0 auto;
`;

const JobDetailHeader = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 30px;
`;

const JobSection = styled.div`
  margin-bottom: 30px;
`;

const CompanyInfo = styled.div`
  font-size: 1.5rem;
  line-height: 1.8;
  margin-bottom: 15px;
`;

const ApplyButton = styled.button`
  padding: 15px 30px;
  background-color: #4b0082;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #5a00a3;
    transform: scale(1.05);
  }

  &:active {
    background-color: #3e0066;
    transform: scale(0.98);
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  line-height: 1.75;
  margin-top: 20px;
`;

export default JobDetail;
