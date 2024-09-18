import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const JobCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const JobListItem = ({ job }) => (
  <JobCard>
    <h2>{job.title}</h2>
    <p>{job.company}</p>
    <Link to={`/jobs/${job.id}`}>View Details</Link>
  </JobCard>
);

export default JobListItem;
