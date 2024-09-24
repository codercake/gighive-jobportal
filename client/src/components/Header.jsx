import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: rgba(0, 123, 255, 0.7); /* Transparent blue */
  padding: 1rem;
  color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ffeb3b; /* Change color on hover */
  }
`;

const ThemeButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.1rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #ffeb3b;
    transform: scale(1.1);
  }
`;

const Header = ({ toggleTheme, isDarkMode }) => {
  return (
    <HeaderWrapper>
      <Nav>
        <Logo to="/">GigHive</Logo>
        <NavLinks>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/users/profile">Profile</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
          <ThemeButton onClick={toggleTheme}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </ThemeButton>
        </NavLinks>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
