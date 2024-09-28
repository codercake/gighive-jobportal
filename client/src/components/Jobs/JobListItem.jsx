import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const JobCard = styled.div`
  padding: 25px;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  transition: transform 0.3s, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const JobTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const JobCompany = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 15px;
`;

const JobLocation = styled.p`
  font-size: 1rem;
  color: #888;
  margin-bottom: 15px;
`;

const JobSalary = styled.p`
  font-size: 1rem;
  color: #444;
  font-weight: bold;
  margin-bottom: 20px;
`;

const JobLinkWrapper = styled.div`
  text-align: center;
`;

const JobLink = styled(Link)`
  display: inline-block;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  padding: 10px 20px;
  border-radius: 25px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const JobListItem = ({ job }) => {
  return (
    <JobCard>
      <JobTitle>{job.title}</JobTitle>
      <JobCompany>{job.company}</JobCompany>
      <JobLocation>📍 {job.location}</JobLocation>
      <JobSalary>💼 Salary: {job.salary}</JobSalary>
      <JobLinkWrapper>
        <JobLink to={`/jobs/${job._id}`}>View Details</JobLink>
      </JobLinkWrapper>
    </JobCard>
  );
};

export default JobListItem;
