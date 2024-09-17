import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaBriefcase, FaUser, FaBell, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Nav = styled.nav`
  background-color: #1e90ff;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  margin: 0 15px;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

const Icon = styled.div`
  margin-right: 8px;
`;

const Button = styled(Link)`
  background-color: #ff4500;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    background-color: #e03e00;
  }
`;

const Navbar = () => (
  <Nav>
    <NavList>
      <NavItem><NavLink to="/"><Icon><FaHome /></Icon>Home</NavLink></NavItem>
      <NavItem><NavLink to="/job-list"><Icon><FaBriefcase /></Icon>Job List</NavLink></NavItem>
      <NavItem><NavLink to="/dashboard"><Icon><FaUser /></Icon>Dashboard</NavLink></NavItem>
      <NavItem><NavLink to="/notifications"><Icon><FaBell /></Icon>Notifications</NavLink></NavItem>
      <NavItem><Button to="/login"><FaSignInAlt /> Login</Button></NavItem>
      <NavItem><Button to="/signup"><FaUserPlus /> Sign Up</Button></NavItem>
    </NavList>
  </Nav>
);

export default Navbar;
