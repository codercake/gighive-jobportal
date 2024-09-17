import React, { useState, useEffect } from 'react';
import userService from '../services/userService';
import Navbar from './Navbar';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await userService.getUserProfile();
      setUser(data);
    };
    fetchUser();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
};

export default UserProfile;
