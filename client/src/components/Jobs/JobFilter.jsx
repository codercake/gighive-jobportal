import React, { useState } from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap; // Ensure items wrap on smaller screens

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
  flex: 1; // Allows inputs to grow equally

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
  flex-shrink: 0; // Prevent button from shrinking

  &:hover {
    background-color: #45a049;
  }
`;

const Message = styled.p`
  color: #ff0000; // Red color for error messages
  margin-top: 10px;
`;

const JobFilter = ({ onFilter }) => {
  const [filterData, setFilterData] = useState({
    jobType: '',
    location: '',
    salaryRange: '',
    searchQuery: '', 
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleFilterChange = (e) => {
    setFilterData({ ...filterData, [e.target.name]: e.target.value });
    setErrorMessage(''); 
  };

  const applyFilters = () => {
    const { location } = filterData;
    if (!location) {
      setErrorMessage('Please enter a valid location.');
      return;
    }
    setErrorMessage('');
    onFilter(filterData);
  };

  return (
    <>
      <FilterContainer>
        <Input
          type="text"
          name="searchQuery" 
          placeholder="Search jobs..."
          onChange={handleFilterChange}
        />
        <Input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleFilterChange}
        />
        <Input
          type="text"
          name="jobType"
          placeholder="Job Type"
          onChange={handleFilterChange}
        />
        <Input
          type="text"
          name="salaryRange"
          placeholder="Salary Range"
          onChange={handleFilterChange}
        />
        <FilterButton onClick={applyFilters}>Apply Filters</FilterButton>
      </FilterContainer>
      {errorMessage && <Message>{errorMessage}</Message>}
    </>
  );
};

export default JobFilter;
