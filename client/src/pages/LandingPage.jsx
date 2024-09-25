import React from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

const LandingPageContainer = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LandingPage = ({ onThemeToggle }) => (
  <LandingPageContainer>
    <Navbar onThemeToggle={onThemeToggle} />
  </LandingPageContainer>
);

export default LandingPage;
