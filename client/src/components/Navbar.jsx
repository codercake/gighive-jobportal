import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.background};
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.h1`
  color: ${({ theme }) => theme.title};
  font-size: 1.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const BurgerMenu = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

const Navbar = ({ onThemeToggle }) => {
  return (
    <NavbarContainer>
      <Link to="/"><Logo>GigHive</Logo></Link>
      <NavLinks>
        <Link to="/jobs">Jobs</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <button onClick={onThemeToggle}>Theme</button>
      </NavLinks>
      <BurgerMenu>☰</BurgerMenu>
    </NavbarContainer>
  );
};

export default Navbar;
