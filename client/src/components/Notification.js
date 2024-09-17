import React, { useEffect, useState } from 'react';
import socket from '../utils/socket';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on('notification', (message) => {
      setNotifications(prev => [...prev, message]);
    });

    return () => socket.off('notification');
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
