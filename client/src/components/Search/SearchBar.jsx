import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const SearchInput = styled.input`
  padding: 1rem;
  width: 400px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
`;

const SearchButton = styled.button`
  padding: 1rem 2rem;
  margin-left: 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    background-color: #555;
  }
`;

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchInput placeholder="Job Title, Keywords..." />
      <SearchButton>Search Job</SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
