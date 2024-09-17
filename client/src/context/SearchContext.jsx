import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useState({});

  const handleSearch = (params) => {
    setSearchParams(params);
    console.log('Search Params:', params);
  };

  return (
    <SearchContext.Provider value={{ searchParams, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
