import React, { useState, useEffect } from 'react';
import userService from '../services/userService';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 600px;
  margin: 2rem auto; // Center the profile box
  text-align: left;
`;

const UserName = styled.h2`
  font-size: 2rem;
  color: #333;
`;

const UserEmail = styled.p`
  font-size: 1.1rem;
  color: #666;
`;

const UserRole = styled.p`
  font-size: 1.1rem;
  color: #666;
`;

const EditButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

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
    <ProfileContainer>
      <UserName>{user.name}</UserName>
      <UserEmail>Email: {user.email}</UserEmail>
      <UserRole>Role: {user.role}</UserRole>
      <EditButton>Edit Profile</EditButton>
    </ProfileContainer>
  );
};

export default UserProfile;
