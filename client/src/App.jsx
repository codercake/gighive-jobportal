import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';  
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Header/Navbar'; 
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

const App = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}> 
        <AuthProvider>
          <div className="flex flex-col min-h-screen relative">
            <Navbar toggleSidebar={toggleSidebar} className="fixed top-0 w-full z-50" />
            <main className="flex-grow pt-16">
              <Main />
            </main>
          </div>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
};

const Main = () => {
  const location = useLocation();

  return (
    <>
      <div className="relative z-0">
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
      </div>
      {location.pathname === '/' && (
        <Footer className="relative z-10" />
      )}
    </>
  );
};

export default App;
