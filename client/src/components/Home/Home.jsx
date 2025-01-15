import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled, { keyframes } from 'styled-components';

//company logos
import bnyMellonLogo from '../../assets/bnymellon.png';
import goldmanSachsLogo from '../../assets/goldmansachs.png';
import ibmLogo from '../../assets/ibm.png';
import boeingLogo from '../../assets/boeing.png';
import amazonLogo from '../../assets/amazon.png';
import genpactLogo from '../../assets/genpact.png';
import capgeminiLogo from '../../assets/capgemini.png';
import cognizantLogo from '../../assets/cognizant.png';

//feature images
import boostImage from '../../assets/boost.png';
import learnImage from '../../assets/learn.png';
import networkImage from '../../assets/network.png';
import interviewImage from '../../assets/interview.png';

//animations
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const AnimatedNumber = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    let startTimestamp = null;
    const animate = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    if (inView) {
      requestAnimationFrame(animate);
    }
  }, [end, duration, inView]);

  return <span ref={ref}>{count}{suffix}</span>;
};

//styled Components
const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 40px 40px;
  background: linear-gradient(135deg, #e1bee7, #ffffff);
  min-height: 100vh;
  color: #263238;
`;

const HeroSection = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  animation: ${fadeIn} 1s ease forwards;
`;

const Title = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 2rem;
  color: #8e24aa;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
  line-height: 1.2;
  
  span {
    color: #f57f17;
    background: linear-gradient(120deg, #f57f17, #ff9800);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #d32f2f;
  max-width: 800px;
  line-height: 1.4;
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 40px 0;
  padding: 20px;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 2.5rem;
    color: #7c3aed;
    margin-bottom: 0.5rem;
  }

  p {
    color: #4b5563;
    font-size: 1.1rem;
  }
`;

const FeaturesSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin: 50px 0;
  padding: 40px;
  width: 100%;
  max-width: 1400px;
  background: linear-gradient(135deg, #e1bee7, #d1c4e9);
  border-radius: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .feature-card {
    background: white;
    border-radius: 15px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }

    img {
      width: 80px;
      height: 80px;
      margin-bottom: 20px;
    }

    h3 {
      font-size: 1.6rem;
      color: #6a1b9a;
      margin-bottom: 15px;
    }

    p {
      font-size: 1.1rem;
      color: #616161;
      line-height: 1.4;
    }
  }
`;

const CTAButton = styled.button`
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 50px;
  border: none;
  background: linear-gradient(135deg, #7c3aed, #3b82f6);
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: 2rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(124, 58, 237, 0.4);
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
    color: #4a148c;
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
      <HeroSection>
        <Title>Your <span>ultimate</span> go-to portal for job opportunities! 👩‍💻</Title>
        <Description>
          Connect with industry leaders and unlock your career potential with personalized job matches.
        </Description>
        <CTAButton>Get Started Today</CTAButton>
      </HeroSection>

      <StatsSection>
        <StatCard>
          <h3><AnimatedNumber end={500} suffix="+" /></h3>
          <p>Companies Hiring</p>
        </StatCard>
        <StatCard>
          <h3><AnimatedNumber end={10} suffix="k+" /></h3>
          <p>Active Jobs</p>
        </StatCard>
        <StatCard>
          <h3><AnimatedNumber end={50} suffix="k+" /></h3>
          <p>Successful Placements</p>
        </StatCard>
        <StatCard>
          <h3><AnimatedNumber end={95} suffix="%" /></h3>
          <p>Success Rate</p>
        </StatCard>
      </StatsSection>

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

      <CompaniesSection>
        <h2>Top Companies Hiring</h2>
        <Slider {...settings}>
          <div><CompanyLogo src={bnyMellonLogo} alt="BNY Mellon" /></div>
          <div><CompanyLogo src={goldmanSachsLogo} alt="Goldman Sachs" /></div>
          <div><CompanyLogo src={ibmLogo} alt="IBM" /></div>
          <div><CompanyLogo src={boeingLogo} alt="Boeing" /></div>
          <div><CompanyLogo src={amazonLogo} alt="Amazon" /></div>
          <div><CompanyLogo src={genpactLogo} alt="Genpact" /></div>
          <div><CompanyLogo src={capgeminiLogo} alt="Capgemini" /></div>
          <div><CompanyLogo src={cognizantLogo} alt="Cognizant" /></div>
        </Slider>
      </CompaniesSection>
    </HomeWrapper>
  );
};

export default Home;
