import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.background || '#ffffff'};
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.h1`
  color: ${({ theme }) => theme.title || '#000'};
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

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px; /* Add some space between the buttons */
`;

const Button = styled(Link)`
  background-color: #d1c4e9; /* Light purple */
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b39ddb; /* Darker light purple */
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const CircularButton = styled(Link)`
  background-color: #d1c4e9; /* Light purple */
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
    background-color: #b39ddb; /* Darker light purple */
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  color: #000; /* Default link color */
  text-decoration: none; /* Remove underline */
  
  &:hover {
    text-decoration: underline; /* Optional: underline on hover */
  }
`;

const Navbar = ({ toggleSidebar }) => {
  return (
    <NavbarContainer>
      <Link to="/"><Logo>GigHive</Logo></Link>
      <NavLinks>
        <StyledLink to="/jobs">Jobs</StyledLink>
        <StyledLink to="/dashboard">Dashboard</StyledLink>
        <StyledLink to="/profile">Profile</StyledLink>
      </NavLinks>
      <ButtonContainer>
        <CircularButton to="/login">Login</CircularButton>
        <Button to="/signup">Begin your Journey</Button>
      </ButtonContainer>
      <BurgerMenu onClick={toggleSidebar}>☰</BurgerMenu>
    </NavbarContainer>
  );
};

export default Navbar;
