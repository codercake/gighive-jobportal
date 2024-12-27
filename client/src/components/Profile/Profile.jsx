import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../../services/userService.js';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchProfile() {
            try {
                const data = await getUserProfile();
                setProfile(data);
            } catch (err) {
                console.error('Error fetching profile:', err);
                setError('Failed to fetch profile data');
            }
        }

        fetchProfile();
    }, []);

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5">
            <h2>User Profile</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Profile Details</h5>
                            <p className="card-text"><strong>Username:</strong> {profile.username}</p>
                            <p className="card-text"><strong>Email:</strong> {profile.email}</p>
                            <p className="card-text"><strong>Role:</strong> {profile.role || 'Not Set'}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Profile Bio</h5>
                            <p className="card-text">{profile.bio || 'No bio available'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
