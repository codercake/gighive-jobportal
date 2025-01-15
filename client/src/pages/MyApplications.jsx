import React, { useEffect, useState } from 'react';

const MyApplications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const token = localStorage.getItem('token'); 
        const response = await fetch('http://localhost:5000/applications/my-applications', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Attach JWT token
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch applications');
        }

        const data = await response.json();
        setApplications(data);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div>
      <h1>My Applications</h1>
      <ul>
        {applications.map((app) => (
          <li key={app._id}>
            <strong>{app.job.title}</strong> - Status: {app.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyApplications;
