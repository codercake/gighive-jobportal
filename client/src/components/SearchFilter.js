import React, { useState } from 'react';

const SearchFilter = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    jobType: '',
    location: '',
    salaryRange: ''
  });

  const handleSearch = () => {
    onSearch({ query, filters });
  };

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for jobs..."
      />
      <select onChange={(e) => setFilters({ ...filters, jobType: e.target.value })}>
        <option value="">All Job Types</option>
        <option value="full-time">Full Time</option>
        <option value="part-time">Part Time</option>
      </select>
      <input 
        type="text" 
        value={filters.location} 
        onChange={(e) => setFilters({ ...filters, location: e.target.value })} 
        placeholder="Location"
      />
      <input 
        type="text" 
        value={filters.salaryRange} 
        onChange={(e) => setFilters({ ...filters, salaryRange: e.target.value })} 
        placeholder="Salary Range"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchFilter;
