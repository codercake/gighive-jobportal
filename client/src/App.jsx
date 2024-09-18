import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotificationProvider } from './context/NotificationContext';
import LandingPage from './pages/LandingPage';
import Job from './pages/Job';
import UserProfile from './pages/UserProfile';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth'; 
import SignUp from './pages/SignUp'; 
import Login from './pages/Login'; 
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 0.3s ease, color 0.3s ease;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
  
  h1, h2, p {
    margin: 0;
    padding: 0;
  }
`;

const lightTheme = {
  background: '#ffffff',
  text: '#333333',
  aboutBg: '#f4f4f9',
  title: '#333333',
  buttonBg: '#333333',
  buttonText: '#ffffff',
};

const darkTheme = {
  background: '#333333',
  text: '#ffffff',
  aboutBg: '#444444',
  title: '#ffffff',
  buttonBg: '#ffffff',
  buttonText: '#333333',
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <NotificationProvider>
          <Routes>
            <Route path="/" element={<LandingPage onThemeToggle={handleThemeToggle} />} />
            <Route path="/jobs" element={<Job />} />
            <Route path="/jobs/:id" element={<Job />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </NotificationProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
