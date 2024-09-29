import React, { useEffect, useState } from 'react';
import { getApplications } from '../services/api';

const Applications = () => {
    const [applications, setApplications] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchApplications() {
            try {
                const data = await getApplications();
                setApplications(data);
            } catch (err) {
                setError('Failed to fetch applications');
            }
        }

        fetchApplications();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    if (!applications.length) {
        return <div>No applications found.</div>;
    }

    return (
        <div>
            <h2>My Applications</h2>
            <ul>
                {applications.map((app, index) => (
                    <li key={index}>
                        <strong>Job ID:</strong> {app.job._id} <br/>
                        <strong>Status:</strong> {app.status} <br/>
                        <strong>Applied At:</strong> {new Date(app.appliedAt).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Applications;
