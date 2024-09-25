import React, { useState } from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  padding: 12px;
  border: none;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f0f8ff;
  color: #333;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    background-color: #ffffff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

const FilterButton = styled.button`
  padding: 12px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #45a049;
  }
`;

const JobFilter = ({ onFilter }) => {
  const [filterData, setFilterData] = useState({
    jobType: '',
    location: '',
    salaryRange: '',
  });

  const handleFilterChange = (e) => {
    setFilterData({ ...filterData, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    onFilter(filterData);
  };

  return (
    <FilterContainer>
      <Input type="text" name="location" placeholder="Location" onChange={handleFilterChange} />
      <Input type="text" name="jobType" placeholder="Job Type" onChange={handleFilterChange} />
      <Input type="text" name="salaryRange" placeholder="Salary Range" onChange={handleFilterChange} />
      <FilterButton onClick={applyFilters}>Apply Filters</FilterButton>
    </FilterContainer>
  );
};

export default JobFilter;
