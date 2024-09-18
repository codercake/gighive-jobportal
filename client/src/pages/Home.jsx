import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import JobList from '../components/JobList';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: #f5f7fa;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 5rem;
  color: #1a1a1a;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin-top: 1rem;
`;

const IllustrationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  img {
    width: 100px;
    height: 100px;
    margin: 0 1rem;
  }
`;

const BackgroundImage = styled.div`
  background-image: url('https://img.freepik.com/premium-psd/3d-new-hire-interview-illustration_380580-648.jpg');
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  z-index: -1;
  filter: blur(8px);
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
    filter: blur(6px);
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

const HomePage = ({ onThemeToggle }) => {
  return (
    <>
      <Header />
      <Container>
        <BackgroundImage />
        <Title>Welcome to GigHive!</Title>
        <JobList />
        <AboutUsSection>
          <AboutUsTitle>About Us</AboutUsTitle>
          <AboutUsText>
            At GigHive, we connect talent with opportunities in a dynamic and innovative way.
          </AboutUsText>
        </AboutUsSection>
        <IllustrationContainer>
          <img src="illustration1.png" alt="Illustration 1" />
          <img src="illustration2.png" alt="Illustration 2" />
        </IllustrationContainer>
        <Footer />
      </Container>
    </>
  );
};

export default HomePage;
