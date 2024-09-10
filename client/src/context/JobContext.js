import React, { createContext, useState } from 'react';

export const JobContext = createContext();

const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  const addJob = (newJob) => setJobs([...jobs, newJob]);
  const removeJob = (id) => setJobs(jobs.filter(job => job.id !== id));

  return (
    <JobContext.Provider value={{ jobs, addJob, removeJob }}>
      {children}
    </JobContext.Provider>
  );
};

export default JobProvider;
