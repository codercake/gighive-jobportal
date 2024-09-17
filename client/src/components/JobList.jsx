import React, { useEffect, useState } from 'react';
import jobService from '../services/jobService';
import JobListItem from './JobListItem';
import SearchFilter from './SearchFilter';
import Navbar from './Navbar';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobData = await jobService.getAllJobs();
        if (Array.isArray(jobData)) {
          setJobs(jobData);
          setFilteredJobs(jobData);
        } else {
          console.error('Unexpected data format:', jobData);
          setJobs([]);
          setFilteredJobs([]);
        }
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
        setJobs([]);
        setFilteredJobs([]);
      }
    };

    fetchJobs();
  }, []);

  const handleFilterChange = (filters) => {
    const filtered = jobs.filter(job => {
      return (
        (filters.location ? job.location.includes(filters.location) : true) &&
        (filters.salaryRange ? job.salary >= filters.salaryRange.min && job.salary <= filters.salaryRange.max : true)
      );
    });
    setFilteredJobs(filtered);
  };

  return (
    <div>
      <Navbar />
      <SearchFilter onFilterChange={handleFilterChange} />
      <ul>
        {filteredJobs && filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <JobListItem key={job.id} job={job} />
          ))
        ) : (
          <p>No jobs available</p>
        )}
      </ul>
    </div>
  );
};

export default JobList;
