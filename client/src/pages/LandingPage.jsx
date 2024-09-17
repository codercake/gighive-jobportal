import React from 'react';
import JobList from '../components/JobList';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const BackgroundImage = styled.div`
  background-image: url('https://img.freepik.com/premium-psd/3d-new-hire-interview-illustration_380580-648.jpg');
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50vh; /* Covers half of the viewport height */
  z-index: -1;
  filter: blur(8px); /* Apply blur effect */
  transition: transform 0.5s ease;
  
  &:hover {
    transform: scale(1.05);
    filter: blur(6px); /* Reduce blur on hover for better focus effect */
  }
`;

const AboutUsSection = styled.section`
  padding: 2rem;
  background-color: ${({ theme }) => theme.aboutBg};
  text-align: center;
  margin-top: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const AboutUsTitle = styled.h1`
  color: ${({ theme }) => theme.title};
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const AboutUsText = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  line-height: 1.5;
`;

const ThemeToggleButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 2.5rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
`;

const HomePage = ({ onThemeToggle }) => {
  return (
    <Container>
      <BackgroundImage />
      <Title>Welcome to GigHive!</Title>
      <JobList />
      <AboutUsSection>
        <AboutUsTitle>About Us</AboutUsTitle>
        <AboutUsText>
          At GigHive, we connect talent with opportunities in a dynamic and innovative way. Our platform provides a streamlined experience for both job seekers and employers, fostering a community of growth and success.
        </AboutUsText>
      </AboutUsSection>
      <ThemeToggleButton onClick={onThemeToggle}>
        Toggle Theme
      </ThemeToggleButton>
    </Container>
  );
};

export default HomePage;
