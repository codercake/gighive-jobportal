import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const NotificationContainer = styled(motion.div)`
  position: fixed;
  top: 80px;
  right: 20px;
  width: 350px;
  z-index: 1000;
`;

const NotificationItem = styled(motion.div)`
  background: ${props => props.type === 'success' ? '#4CAF50' : 
              props.type === 'warning' ? '#FF9800' : 
              props.type === 'error' ? '#f44336' : '#2196F3'};
  color: white;
  padding: 16px;
  margin: 8px 0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Message = styled.div`
  flex-grow: 1;
  margin-right: 12px;
  
  h4 {
    margin: 0 0 4px 0;
    font-weight: 600;
  }
  
  p {
    margin: 0;
    font-size: 0.9rem;
    opacity: 0.9;
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 4px;
  opacity: 0.8;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 1;
  }
`;

const notifications = [
  {
    id: 1,
    title: 'New Job Match',
    message: 'A new job matching your skills has been posted',
    type: 'success'
  },
  {
    id: 2,
    title: 'Application Update',
    message: 'Your application status has been updated',
    type: 'info'
  }
];

const Notification = () => {
  const [activeNotifications, setActiveNotifications] = useState([]);

  useEffect(() => {
    // Simulating incoming notifications
    setActiveNotifications(notifications);
  }, []);

  const removeNotification = (id) => {
    setActiveNotifications(prev => 
      prev.filter(notification => notification.id !== id)
    );
  };

  const variants = {
    initial: { opacity: 0, x: 300 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 300 }
  };

  return (
    <NotificationContainer>
      <AnimatePresence>
        {activeNotifications.map(notification => (
          <NotificationItem
            key={notification.id}
            type={notification.type}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            layout
          >
            <Message>
              <h4>{notification.title}</h4>
              <p>{notification.message}</p>
            </Message>
            <CloseButton 
              onClick={() => removeNotification(notification.id)}
              aria-label="Close notification"
            >
              ✕
            </CloseButton>
          </NotificationItem>
        ))}
      </AnimatePresence>
    </NotificationContainer>
  );
};

export default Notification;
