import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiSearch, FiMapPin, FiBriefcase, FiDollarSign, FiFilter } from 'react-icons/fi';

const Container = styled.div`
  max-width: 1200px;
  margin: 120px auto 40px;
  padding: 0 20px;
`;

const SearchSection = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 2rem;
`;

const SearchForm = styled.form`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr auto;
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InputGroup = styled.div`
  position: relative;
  
  svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: #6B7280;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid #E5E7EB;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #7C3AED;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid #E5E7EB;
  border-radius: 12px;
  font-size: 1rem;
  appearance: none;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #7C3AED;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
  }
`;

const SearchButton = styled.button`
  background: #7C3AED;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #6D28D9;
    transform: translateY(-2px);
  }
`;

const ResultsSection = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const FiltersPanel = styled.div`
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  height: fit-content;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const FilterSection = styled.div`
  margin-bottom: 1.5rem;
  
  h3 {
    font-size: 1.1rem;
    color: #1F2937;
    margin-bottom: 1rem;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Checkbox = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4B5563;
  cursor: pointer;
  
  input {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

const JobList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const JobCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

const JobTitle = styled.h3`
  color: #1F2937;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const CompanyName = styled.h4`
  color: #7C3AED;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const JobDetails = styled.div`
  display: flex;
  gap: 1.5rem;
  color: #6B7280;
  font-size: 0.9rem;
  
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const LoadingState = styled.div`
  text-align: center;
  padding: 2rem;
  color: #6B7280;
`;

const JobSearchContainer = () => {
  const [searchParams, setSearchParams] = useState({
    keyword: '',
    location: '',
    jobType: ''
  });
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulated API call
    try {
      const results = await fetchJobs(searchParams);
      setJobs(results);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchJobs = async (params) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return [
      {
        id: 1,
        title: 'Senior React Developer',
        company: 'TechCorp',
        location: 'San Francisco, CA',
        salary: '$120k - $150k',
        type: 'Full-time'
      },
      {
        id: 2,
        title: 'Full Stack Engineer',
        company: 'StartupX',
        location: 'Remote',
        salary: '$100k - $130k',
        type: 'Full-time'
      },
      {
        id: 3,
        title: 'Frontend Developer',
        company: 'InnovateLabs',
        location: 'New York, NY',
        salary: '$90k - $120k',
        type: 'Contract'
      }
    ];
  };

  return (
    <Container>
      <SearchSection>
        <SearchForm onSubmit={handleSearch}>
          <InputGroup>
            <FiSearch />
            <Input
              type="text"
              placeholder="Job title or keyword"
              value={searchParams.keyword}
              onChange={(e) => setSearchParams({...searchParams, keyword: e.target.value})}
            />
          </InputGroup>
          
          <InputGroup>
            <FiMapPin />
            <Input
              type="text"
              placeholder="Location"
              value={searchParams.location}
              onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
            />
          </InputGroup>
          
          <InputGroup>
            <FiBriefcase />
            <Select
              value={searchParams.jobType}
              onChange={(e) => setSearchParams({...searchParams, jobType: e.target.value})}
            >
              <option value="">Job Type</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="contract">Contract</option>
              <option value="remote">Remote</option>
            </Select>
          </InputGroup>
          
          <SearchButton type="submit">
            Search Jobs
          </SearchButton>
        </SearchForm>
      </SearchSection>

      <ResultsSection>
        <FiltersPanel>
          <FilterSection>
            <h3>Experience Level</h3>
            <CheckboxGroup>
              <Checkbox>
                <input type="checkbox" /> Entry Level
              </Checkbox>
              <Checkbox>
                <input type="checkbox" /> Mid Level
              </Checkbox>
              <Checkbox>
                <input type="checkbox" /> Senior Level
              </Checkbox>
            </CheckboxGroup>
          </FilterSection>

          <FilterSection>
            <h3>Salary Range</h3>
            <CheckboxGroup>
              <Checkbox>
                <input type="checkbox" /> $0 - $50k
              </Checkbox>
              <Checkbox>
                <input type="checkbox" /> $50k - $100k
              </Checkbox>
              <Checkbox>
                <input type="checkbox" /> $100k+
              </Checkbox>
            </CheckboxGroup>
          </FilterSection>
        </FiltersPanel>

        <JobList>
          {loading ? (
            <LoadingState>Searching for opportunities...</LoadingState>
          ) : jobs.length === 0 ? (
            <LoadingState>No jobs found. Try adjusting your search.</LoadingState>
          ) : (
            jobs.map(job => (
              <JobCard key={job.id}>
                <JobTitle>{job.title}</JobTitle>
                <CompanyName>{job.company}</CompanyName>
                <JobDetails>
                  <div>
                    <FiBriefcase />
                    {job.type}
                  </div>
                  <div>
                    <FiMapPin />
                    {job.location}
                  </div>
                  <div>
                    <FiDollarSign />
                    {job.salary}
                  </div>
                </JobDetails>
              </JobCard>
            ))
          )}
        </JobList>
      </ResultsSection>
    </Container>
  );
};

export default JobSearchContainer;
