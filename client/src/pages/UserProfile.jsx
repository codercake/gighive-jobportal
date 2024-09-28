import React from 'react';
import UserProfile from '../components/Profile/UserProfile';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  background-color: #e8f4f8;
  text-align: center;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const UserProfilePage = () => {
  return (
    <Container>
      <Title>User Profile</Title>
      <UserProfile />
    </Container>
  );
};

export default UserProfilePage;
