import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled, { keyframes } from 'styled-components';
import bnyMellonLogo from '../../assets/bnymellon.png'; 
import goldmanSachsLogo from '../../assets/goldmansachs.png';  
import ibmLogo from '../../assets/ibm.png';
import boeingLogo from  '../../assets/boeing.png';
import amazonLogo from '../../assets/amazon.png';
import genpactLogo from '../../assets/genpact.png'; 
import capgeminiLogo from '../../assets/capgemini.png'; 
import cognizantLogo from '../../assets/cognizant.png';
import boostImage from '../../assets/boost.png';  
import learnImage from '../../assets/learn.png';  
import networkImage from '../../assets/network.png'; 
import interviewImage from '../../assets/interview.png'; 

//Animation for Title
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const FeaturesSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  padding: 40px;
  background: linear-gradient(135deg, #e1bee7, #d1c4e9); /* Light Purple Gradient */
  border-radius: 20px;

  .feature-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 15px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
    padding: 30px;
    width: 240px;
    margin: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }

    img {
      width: 70px;
      height: 70px;
      margin-bottom: 20px;
    }

    h3 {
      font-size: 1.4rem;
      color: #6a1b9a; /* Dark Purple */
      margin-bottom: 15px;
    }

    p {
      font-size: 1rem;
      color: #616161; /* Grey */
    }
  }
`;

const CompaniesSection = styled.div`
  margin-top: 4rem;
  width: 100%;
  max-width: 1200px;
  text-align: center;

  h2 {
    margin-bottom: 2rem;
    font-size: 2.8rem;
    color: #4a148c; /* Dark Purple */
  }
`;

const CompanyLogo = styled.img`
  width: 230px; /* Equal width */
  height: 80px; /* Equal height */
  display: block;
  object-fit: contain;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.12);
  }
`;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: linear-gradient(135deg, #e1bee7, #ffffff); /* Light Purple to White */
  min-height: 100vh;
  color: #263238; /* Blue-grey */
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
  color: #8e24aa; /* Purple */
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
  animation: ${fadeIn} 1s ease forwards; /* Added animation */
  
  span {
    color: #f57f17; /* Orange color for 'ultimate' */
  }
`;

const Description = styled.p`
  font-size: 1.6rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #d32f2f; /* Red */
`;

const Home = ({ theme }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800, 
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <HomeWrapper theme={theme}>
      <Title>Your <span>ultimate</span> go-to portal for job opportunities!</Title>
      <Description>Discover opportunities with industry leaders like Amazon, Genpact, Capgemini, and Cognizant.</Description>

      {/* Features Section */}
      <FeaturesSection>
        <div className="feature-card">
          <img src={boostImage} alt="Boost" />
          <h3>Boost</h3>
          <p>Stand out to employers</p>
        </div>
        <div className="feature-card">
          <img src={learnImage} alt="Learn" />
          <h3>Learn</h3>
          <p>Upskill to get ahead</p>
        </div>
        <div className="feature-card">
          <img src={networkImage} alt="Network" />
          <h3>Network</h3>
          <p>Grow with peers & mentors</p>
        </div>
        <div className="feature-card">
         <img src={interviewImage} alt="Interview" />
          <h3>Interview Success</h3>
          <p>Up your interview success rate</p>
        </div>
      </FeaturesSection>

      {/* Companies Carousel */}
      <CompaniesSection>
        <h2>Top Companies Hiring</h2>
        <Slider {...settings}>
          <CompanyLogo src={bnyMellonLogo} alt="BNY Mellon" />
          <CompanyLogo src={goldmanSachsLogo} alt="Goldman Sachs" />
          <CompanyLogo src={ibmLogo} alt="IBM" />
          <CompanyLogo src={boeingLogo} alt="Boeing" />
          <CompanyLogo src={amazonLogo} alt="Amazon" />
          <CompanyLogo src={genpactLogo} alt="Genpact" />
          <CompanyLogo src={capgeminiLogo} alt="Capgemini" />
          <CompanyLogo src={cognizantLogo} alt="Cognizant" />
        </Slider>
      </CompaniesSection>
    </HomeWrapper>
  );
};

export default Home;
