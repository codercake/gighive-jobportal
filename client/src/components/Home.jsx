import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import bnyMellonLogo from '../assets/bnymellon.png'; 
import goldmanSachsLogo from '../assets/goldmansachs.png';  
import ibmLogo from '../assets/ibm.png';
import boeingLogo from  '../assets/boeing.png';
import amazonLogo from '../assets/amazon.png';
import genpactLogo from '../assets/genpact.png'; 
import capgeminiLogo from '../assets/capgemini.png'; 
import cognizantLogo from '../assets/cognizant.png';
import boostImage from '../assets/boost.png';  
import learnImage from '../assets/learn.png';  
import networkImage from '../assets/network.png'; 
import interviewImage from '../assets/interview.png'; // Import the Interview image

// New UI section style
const FeaturesSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  padding: 20px;
  background-color: #f0f4c3; /* Light green background */
  border-radius: 15px;

  .feature-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    padding: 20px;
    width: 220px;
    margin: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    }

    img {
      width: 60px;
      height: 60px;
      margin-bottom: 15px;
    }

    h3 {
      font-size: 1.3rem;
      color: #388e3c; /* Dark green */
      margin-bottom: 10px;
    }

    p {
      font-size: 0.9rem;
      color: #757575; /* Grey */
    }
  }
`;

const SkillsSection = styled.div`
  text-align: center;
  margin: 3rem 0;
  padding: 20px;
  background-color: #e3f2fd; /* Light Blue */
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  animation: fadeIn 1s ease;

  h2 {
    font-size: 2.5rem;
    color: #0d47a1; /* Dark Blue */
    margin-bottom: 1.5rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    font-size: 1.2rem;
    color: #424242;

    li {
      margin-bottom: 0.8rem;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;

// New Interview Section
const InterviewSection = styled.div`
  text-align: center;
  margin: 3rem 0;
  padding: 20px;
  background-color: #e3f2fd; /* Light Blue */
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  animation: fadeIn 1s ease;

  h2 {
    margin-bottom: 1rem;
    font-size: 2.5rem;
    color: #0d47a1; /* Dark Blue */
  }

  img {
    max-width: 100%;
    border-radius: 10px;
    margin: 1rem 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background: linear-gradient(135deg, #e1bee7, #ffccbc); /* Lavender to Peach */
  min-height: 100vh;
  color: #4a148c; /* Dark Purple */

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: #6a1b9a; /* Deep Purple */
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #c2185b; /* Pink */
`;

const CompaniesSection = styled.div`
  margin-top: 2rem;
  width: 100%;
  max-width: 1200px;
  text-align: center;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
    color: #6d4c41; /* Brown */
  }
`;

const CompanyLogo = styled.img`
  width: 250px;
  height: 80px;
  display: block;
  object-fit: contain;
  margin: 0 auto; 
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const Home = ({ theme }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, 
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
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

  const topSkills = [
    "Generative AI Specialists", "Data Entry Specialists", "Video Editors", "Data Analyst", 
    "Shopify Developer", "Ruby on Rails Developer", "Android Developer", "Bookkeeper", 
    "Content Writer", "Copywriter", "Data Scientist", "Front-End Developer", "Game Developer", 
    "Graphic Designer", "iOS Developer", "Java Developer", "JavaScript Developer", "Logo Designer", 
    "Mobile App Developer", "PHP Developer", "Python Developer", "Resume Writer", "SEO Expert", 
    "Social Media Manager", "Software Developer", "Software Engineer", "Technical Writer", 
    "UI Designer", "UX Designer", "Virtual Assistant", "Web Designer", "WordPress Developer"
  ];

  return (
    <HomeWrapper theme={theme}>
      <Title>GIGHIVE</Title>
      <Description>Your ULTIMATE go-to portal for job opportunities!</Description>
      <p>Discover opportunities with industry leaders like Amazon, Genpact, Capgemini, and Cognizant.</p>

      {/* New UI Section */}
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

      {/* Companies Section */}
      <CompaniesSection>
        <h2>Top Companies Hiring</h2>
        <Slider {...settings}>
          <div>
            <CompanyLogo src={bnyMellonLogo} alt="BNY Mellon" />
          </div>
          <div>
            <CompanyLogo src={goldmanSachsLogo} alt="Goldman Sachs" />
          </div>
          <div>
            <CompanyLogo src={ibmLogo} alt="IBM" />
          </div>
          <div>
            <CompanyLogo src={boeingLogo} alt="Boeing" />
          </div>
          <div>
            <CompanyLogo src={amazonLogo} alt="Amazon" />
          </div>
          <div>
            <CompanyLogo src={genpactLogo} alt="Genpact" />
          </div>
          <div>
            <CompanyLogo src={capgeminiLogo} alt="Capgemini" />
          </div>
          <div>
            <CompanyLogo src={cognizantLogo} alt="Cognizant" />
          </div>
        </Slider>
      </CompaniesSection>

      {/* Skills Section */}
      <SkillsSection>
        <h2>Top Skills Trending in India</h2>
        <ul>
          {topSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </SkillsSection>

      {/* Interview Section */}
      <InterviewSection>
        <h2>Get Ready for Your Interview</h2>
        <img src={interviewImage} alt="Interview Success" />
        <p>Explore resources to help you succeed in your next interview!</p>
      </InterviewSection>
    </HomeWrapper>
  );
};

export default Home;
