import React from 'react';
import Notification from '../components/Notifications/Notification.jsx';
import styled from 'styled-components';

const Title = styled.h1`
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const NotificationPage = () => {
  return (
    <div>
      <Title>Notifications</Title>
      <Notification />
    </div>
  );
};

export default NotificationPage;
