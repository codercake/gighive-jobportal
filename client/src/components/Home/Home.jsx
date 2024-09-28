import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
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

// Redesigned Section Styling
const FeaturesSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  padding: 40px;
  background: linear-gradient(135deg, #f3e5f5, #e1f5fe); /* Subtle gradient */
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
      color: #5e35b1; /* Purple */
      margin-bottom: 15px;
    }

    p {
      font-size: 1rem;
      color: #616161; /* Grey */
    }
  }
`;

const SkillsSection = styled.div`
  text-align: center;
  margin: 4rem 0;
  padding: 30px;
  background-color: #f1f8e9; /* Soft green */
  border-radius: 15px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 2.8rem;
    color: #2e7d32; /* Green */
    margin-bottom: 2rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    font-size: 1.2rem;
    color: #424242;

    li {
      margin-bottom: 1rem;
      transition: transform 0.3s ease, color 0.3s ease;

      &:hover {
        transform: scale(1.05);
        color: #388e3c;
      }
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
    color: #455a64; /* Blue-grey */
  }
`;

const CompanyLogo = styled.img`
  width: 230px;
  height: 80px;
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
  background: linear-gradient(135deg, #f1f8e9, #fff8e1); /* Green to Yellow gradient */
  min-height: 100vh;
  color: #263238; /* Blue-grey */
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
  color: #8e24aa; /* Purple */
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
`;

const Description = styled.p`
  font-size: 1.6rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #d32f2f; /* Red */
`;

const InterviewSection = styled.div`
  text-align: center;
  margin: 4rem 0;
  padding: 30px;
  background-color: #e3f2fd; /* Light Blue */
  border-radius: 15px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 2.8rem;
    color: #0288d1; /* Blue */
    margin-bottom: 1.5rem;
  }

  img {
    max-width: 100%;
    border-radius: 15px;
    margin: 1.5rem 0;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
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
    autoplaySpeed: 3500,
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
      <Description>Your ULTIMATE go-to portal for job opportunities!</Description>
      <p>Discover opportunities with industry leaders like Amazon, Genpact, Capgemini, and Cognizant.</p>

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

      {/* Skills Section */}
      <SkillsSection>
        <h2>Top Skills in Demand</h2>
        <ul>
          {topSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </SkillsSection>

      {/* Companies Carousel */}
      <CompaniesSection>
        <h2>Top Companies</h2>
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

      {/* Interview Success */}
      <InterviewSection>
        <h2>Interview Guidance & Prep</h2>
        <img src={interviewImage} alt="Interview Prep" />
      </InterviewSection>
    </HomeWrapper>
  );
};

export default Home;
