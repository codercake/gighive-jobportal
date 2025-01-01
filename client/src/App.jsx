import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';  
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Header/Navbar'; 
import Sidebar from './components/Header/Sidebar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import LandingPage from './pages/LandingPage';
import Dashboard from './components/Application/Dashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Register from './pages/Register';
import Profile from './components/Profile/Profile';
import JobDetail from './components/Jobs/JobDetail';
import JobForm from './components/Jobs/JobForm';
import JobListingsPage from './pages/JobListingsPage';
import theme from './themes/default';
import './App.css';

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5001';

const App = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}> 
        <AuthProvider>
          <Navbar toggleSidebar={toggleSidebar} />
          <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
          <Main apiUrl={apiUrl} /> 
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
};
  
const Main = ({ apiUrl }) => {
  const location = useLocation();

  const fetchJobListings = async () => {
    const response = await fetch(`${apiUrl}/path`);
    const data = await response.json();
    console.log(data);
  };

  React.useEffect(() => {
    fetchJobListings();
  }, [apiUrl]); 
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/jobs" element={<JobListingsPage />} /> 
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/jobs/:id/apply" element={<JobForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {location.pathname === '/' && <Footer />}
    </>
  );
};

export default App;
