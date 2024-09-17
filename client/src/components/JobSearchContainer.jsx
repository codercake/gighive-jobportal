import React from 'react';
import SearchFilter from './SearchFilter';

const JobSearchContainer = () => {
  const handleSearch = (searchParams) => {
    console.log('Search Params:', searchParams);
  };

  return (
    <div>
      <SearchFilter onSearch={handleSearch} />
    </div>
  );
};

export default JobSearchContainer;
