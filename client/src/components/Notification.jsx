import React, { useEffect, useState } from 'react';
import socket from '../utils/socket';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const handleNotification = (message) => {
      setNotifications(prev => [...prev, message]);
    };
    
    socket.on('notification', handleNotification);
    return () => socket.off('notification', handleNotification);
  }, []);

  return (
    <div>
      {notifications.map((note, index) => (
        <div key={index}>{note}</div>
      ))}
    </div>
  );
};

export default Notification;
