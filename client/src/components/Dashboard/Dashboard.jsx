import React, { useEffect, useState } from 'react';
import { getUserApplications } from '../../services/userService'; 
import './Dashboard.css'; 

const Dashboard = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await getUserApplications(); 
                setApplications(response.data); 
            } catch (err) {
                setError('Failed to fetch applications');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchApplications();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="dashboard">
            <h2>Your Applications</h2>
            {applications.length === 0 ? (
                <p>You have not applied for any jobs yet.</p>
            ) : (
                <table className="applications-table">
                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>Company</th>
                            <th>Status</th>
                            <th>Applied On</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((application) => (
                            <tr key={application._id}>
                                <td>{application.jobTitle}</td>
                                <td>{application.company}</td>
                                <td>{application.status}</td>
                                <td>{new Date(application.appliedOn).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Dashboard;
