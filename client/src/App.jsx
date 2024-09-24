import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LandingPage from './pages/LandingPage';
import JobListingsPage from './pages/JobListingsPage'; // Updated import
import JobDetail from './components/JobDetail';
import JobForm from './components/JobForm';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UserProfilePage from './pages/UserProfilePage';
import DashboardPage from './pages/DashboardPage';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding-top: 4rem; /* To prevent content from going under the header */
    padding-bottom: 4rem; /* To prevent content from going under the footer */
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.5s ease, color 0.5s ease; /* Smooth transition for theme change */
  }
`;

const lightTheme = {
  background: '#ffffff',
  text: '#333333',
};

const darkTheme = {
  background: '#333333',
  text: '#ffffff',
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <Router>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <AuthProvider>
          <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <Main />
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
};

const Main = () => {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/jobs" element={<JobListingsPage />} /> {/* Updated route */}
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/users/profile" element={<UserProfilePage />} />
        <Route path="/create-job" element={<JobForm />} /> 
      </Routes>
      {location.pathname === '/' && <Footer />}
    </>
  );
};

export default App;
