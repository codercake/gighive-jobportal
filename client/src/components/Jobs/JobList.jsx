import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { jobService } from '../../services/api';
import JobListItem from './JobListItem';
import JobFilter from './JobFilter';
import { toast } from 'react-toastify';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    jobType: '',
    location: '',
    salaryRange: '',
    searchQuery: ''
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const jobData = await jobService.getAllJobs(filters);
        setJobs(jobData);
      } catch (error) {
        toast.error('Failed to fetch jobs');
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchJobs, 300);
    return () => clearTimeout(debounceTimer);
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50"> {/* Added padding-top and min-height */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Dream Job
          </h1>
          <p className="text-xl text-gray-600">
            Discover opportunities that match your skills and aspirations
          </p>
        </div>

        <JobFilter onFilter={handleFilterChange} />

        <AnimatePresence>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
          ) : jobs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <p className="text-xl text-gray-600">
                No jobs found matching your criteria
              </p>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {jobs.map(job => (
                <JobListItem key={job._id} job={job} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default JobList;
