import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px; /* Set your preferred width */
  height: 100vh;
  background-color: ${({ theme }) => theme.sidebarBackground || '#f8f9fa'};
  position: fixed;
  top: 0;
  left: ${({ isVisible }) => (isVisible ? '0' : '-250px')}; /* Slide in/out */
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease-in-out; /* Transition effect */
  z-index: 100; /* Make sure it's above other elements */
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  pointer-events: ${({ isVisible }) => (isVisible ? 'auto' : 'none')}; /* Prevent interactions when hidden */
  z-index: 99; /* Behind the sidebar */
`;

const SidebarTitle = styled.h2`
  color: ${({ theme }) => theme.title || '#000'};
`;

const SidebarLink = styled(Link)`
  display: block;
  padding: 10px 0;
  color: #000;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d1c4e9; /* Light purple */
    border-radius: 5px;
  }
`;

const Sidebar = ({ isVisible, toggleSidebar }) => {
  return (
    <>
      <Overlay isVisible={isVisible} onClick={toggleSidebar} />
      <SidebarContainer isVisible={isVisible}>
        <SidebarTitle>Navigation</SidebarTitle>
        <SidebarLink to="/jobs" onClick={toggleSidebar}>Jobs</SidebarLink>
        <SidebarLink to="/dashboard" onClick={toggleSidebar}>Dashboard</SidebarLink>
        <SidebarLink to="/profile" onClick={toggleSidebar}>Profile</SidebarLink>
        <SidebarLink to="/signup" onClick={toggleSidebar}>Begin your Journey</SidebarLink>
        <SidebarLink to="/login" onClick={toggleSidebar}>Login</SidebarLink>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
