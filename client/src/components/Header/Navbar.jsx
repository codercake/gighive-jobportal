import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiMenu, FiX, FiUser, FiBriefcase, FiGrid, FiBell } from 'react-icons/fi';

const NavContainer = styled.nav`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NavContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: #7C3AED;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    background: linear-gradient(135deg, #7C3AED, #3B82F6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const NavMenu = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 968px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #4B5563;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: rgba(124, 58, 237, 0.1);
    color: #7C3AED;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 968px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;
  text-align: center;

  ${props => props.primary ? `
    background: linear-gradient(135deg, #7C3AED, #3B82F6);
    color: white;
    border: none;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
    }
  ` : `
    background: transparent;
    color: #7C3AED;
    border: 2px solid #7C3AED;

    &:hover {
      background: rgba(124, 58, 237, 0.1);
    }
  `}
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #4B5563;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(124, 58, 237, 0.1);
    color: #7C3AED;
  }

  @media (max-width: 968px) {
    display: flex;
    align-items: center;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${props => props.isOpen ? '0' : '-100%'};
  width: 300px;
  height: 100vh;
  background: white;
  padding: 2rem;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
  z-index: 1001;
  overflow-y: auto;
`;

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 3rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #4B5563;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(124, 58, 237, 0.1);
    color: #7C3AED;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  z-index: 1000;
`;

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <>
      <NavContainer>
        <NavContent>
          <Logo to="/">
            <span>GigHive</span>
          </Logo>

          <NavMenu>
            <NavLink to="/jobs">
              <FiBriefcase /> Jobs
            </NavLink>
            <NavLink to="/dashboard">
              <FiGrid /> Dashboard
            </NavLink>
            {/* <NavLink to="/notifications">
              <FiBell /> Notifications
            </NavLink> */}
            <NavLink to="/profile">
              <FiUser /> Profile
            </NavLink>
          </NavMenu>

          <ActionButtons>
            <StyledLink to="/login">Sign In</StyledLink>
            <StyledLink to="/signup" primary>Begin your Journey</StyledLink>
          </ActionButtons>

          <MobileMenuButton onClick={toggleSidebar}>
            <FiMenu />
          </MobileMenuButton>
        </NavContent>
      </NavContainer>

      <Overlay isOpen={isSidebarOpen} onClick={toggleSidebar} />
      
      <Sidebar isOpen={isSidebarOpen}>
        <CloseButton onClick={toggleSidebar}>
          <FiX />
        </CloseButton>
        <SidebarContent>
          <NavLink to="/jobs" onClick={toggleSidebar}>
            <FiBriefcase /> Jobs
          </NavLink>
          <NavLink to="/dashboard" onClick={toggleSidebar}>
            <FiGrid /> Dashboard
          </NavLink>
          {/* <NavLink to="/notifications" onClick={toggleSidebar}>
            <FiBell /> Notifications
          </NavLink> */}
          <NavLink to="/profile" onClick={toggleSidebar}>
            <FiUser /> Profile
          </NavLink>
          <StyledLink to="/login" onClick={toggleSidebar}>Sign In</StyledLink>
          <StyledLink to="/signup" primary onClick={toggleSidebar}>
            Begin your Journey
          </StyledLink>
        </SidebarContent>
      </Sidebar>
    </>
  );
};

export default Navbar;
