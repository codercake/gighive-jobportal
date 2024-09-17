import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotificationProvider } from './context/NotificationContext';
import HomePage from './pages/HomePage';
import JobPage from './pages/JobPage';
import UserProfilePage from './pages/UserProfilePage';
import DashboardPage from './pages/Dashboard';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <Router>
        <NotificationProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/jobs" element={<JobPage />} />
            <Route path="/jobs/:id" element={<JobPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </NotificationProvider>
    </Router>
  );
};

export default App;
