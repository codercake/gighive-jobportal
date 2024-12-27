import React, { useEffect, useState } from 'react';
import { getUserApplications } from '../../services/applicationService'; 

const Dashboard = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const data = await getUserApplications();
        setApplications(data);
      } catch (error) {
        console.error('Failed to fetch applications:', error);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div>
      <h1>Your Applications</h1>
      {applications.length === 0 ? (
        <p>You have no applications yet.</p>
      ) : (
        applications.map((application) => (
          <div key={application._id}>
            <h3>{application.job.title} - {application.status}</h3>
            <p>Applied on: {new Date(application.appliedAt).toLocaleDateString()}</p>
            <p>Qualification: {application.qualification}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;
