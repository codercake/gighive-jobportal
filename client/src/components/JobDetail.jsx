import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import jobService from '../services/jobService';
import styled, { keyframes } from 'styled-components';

// Keyframe animations for subtle effects
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bounceIn = keyframes`
  0% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// Container with fade-in effect
const JobDetailContainer = styled.div`
  padding: 30px;
  max-width: 900px;
  margin: 50px auto;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.7s ease;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const JobDetailHeader = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.primary};
  text-align: center;
  animation: ${bounceIn} 0.6s ease;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

// Section Layout
const JobSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CompanyInfo = styled.div`
  width: 65%;
  font-size: 1rem;
  color: #444;
  
  & p {
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ApplyButton = styled.button`
  padding: 15px 25px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  animation: ${fadeIn} 1s ease;

  &:hover {
    background-color: #218838;
    transform: translateY(-5px);
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    width: 100%;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: 20px;
  color: #555;
  line-height: 1.6;
`;

// Animated box for eligibility criteria
const EligibilityCriteria = styled.div`
  margin: 30px 0;
  padding: 20px;
  background-color: #f9f9f9;
  border-left: 4px solid #28a745;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  animation: ${fadeIn} 1s ease;

  h3 {
    color: ${({ theme }) => theme.primary};
    margin-bottom: 15px;
  }

  p {
    color: #666;
    line-height: 1.5;
  }
`;

const ResumeUploadLabel = styled.label`
  display: block;
  margin: 20px 0 10px;
  font-size: 1.1rem;
  color: #444;
  font-weight: bold;
`;

const ResumeUpload = styled.input`
  display: block;
  padding: 12px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
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

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      // Handle resume upload
      console.log("Resume uploaded: ", file.name);
    } else {
      alert("Please upload a valid PDF file.");
    }
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
        <ApplyButton>Apply Now</ApplyButton>
      </JobSection>
      
      <Description>{job.description}</Description>

      <EligibilityCriteria>
        <h3>Eligibility Criteria</h3>
        <p>{job.eligibilityCriteria}</p>
      </EligibilityCriteria>

      <ResumeUploadLabel>Upload Resume (PDF only):</ResumeUploadLabel>
      <ResumeUpload type="file" accept=".pdf" onChange={handleResumeUpload} />
    </JobDetailContainer>
  );
};

export default JobDetail;
