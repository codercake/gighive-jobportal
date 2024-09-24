import React, { useState } from 'react';

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
    <div>
      <input type="text" name="location" placeholder="Location" onChange={handleFilterChange} />
      <input type="text" name="jobType" placeholder="Job Type" onChange={handleFilterChange} />
      <input type="text" name="salaryRange" placeholder="Salary Range" onChange={handleFilterChange} />
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default JobFilter;
