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

const Button = styled(Link)`
  background-color: #ff6f61;
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff5a4d;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const CircularButton = styled(Link)`
  background-color: #ff6f61;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: background-color 0.3s;
  margin-left: 10px;

  &:hover {
    background-color: #ff5a4d;
  }

  @media (max-width: 768px) {
    display: none;
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
      </NavLinks>
      <div>
        <CircularButton to="/login">L</CircularButton>
        <Button to="/signup">Signup</Button>
      </div>
      <BurgerMenu>☰</BurgerMenu>
    </NavbarContainer>
  );
};

export default Navbar;
