import React, { createContext, useState, useCallback } from 'react';

export const NotificationContext = createContext();
export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback((message) => {
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      { message, id: Date.now() },
    ]);
  }, []);

  const clearNotifications = () => {
    setNotifications([]);
  };

  const value = {
    notifications,
    addNotification,
    clearNotifications,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};
