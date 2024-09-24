import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import bnyMellonLogo from '../assets/bnymellon.png'; 
import boeingLogo from '../assets/boeing.png';
import zohoLogo from '../assets/zoho.png';
import amazonLogo from '../assets/amazon.png';

// Styled components
const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #f3e5f5, #e1f5fe);
  min-height: 100vh;
  color: #333;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #2e7d32;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #1e88e5;
`;

const CompaniesSection = styled.div`
  margin-top: 2rem;
  width: 100%;
  max-width: 1200px;
  text-align: center;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
    color: #d32f2f;
  }
`;

const CompanyLogo = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const AboutSection = styled.div`
  text-align: center;
  margin: 3rem 0;
  padding: 20px;
  background-color: #fafafa;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
    color: #f57c00;
  }

  p {
    max-width: 700px;
    margin: 0 auto;
    font-size: 1.2rem;
    color: #424242;
  }
`;

const TestimonialsSection = styled.div`
  text-align: center;
  margin: 3rem 0;

  h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
    color: #6a1b9a;
  }

  p {
    max-width: 700px;
    margin: 0 auto;
    font-size: 1.1rem;
    color: #424242;
  }
`;

const Testimonial = styled.div`
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50px;
    height: 50px;
    margin-right: 15px;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Duration for slide transition
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Delay between slides (in ms)
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
    <HomeWrapper>
      <Title>GIGHIVE</Title>
      <Description>Your ULTIMATE go-to portal for job opportunities!</Description>

      {/* Companies Section */}
      <CompaniesSection>
        <h2>Top Companies Hiring</h2>
        <Slider {...settings}>
          <div>
            <CompanyLogo src={bnyMellonLogo} alt="BNY Mellon" />
          </div>
          <div>
            <CompanyLogo src={boeingLogo} alt="Boeing" />
          </div>
          <div>
            <CompanyLogo src={zohoLogo} alt="Zoho" />
          </div>
          <div>
            <CompanyLogo src={amazonLogo} alt="Amazon" />
          </div>
        </Slider>
      </CompaniesSection>

      {/* About Section */}
      <AboutSection>
        <h2>About GigHive</h2>
        <p>
          GigHive is a trusted job portal that connects job seekers with top
          companies across various industries. Our mission is to simplify the
          job search process and provide a seamless experience for both
          candidates and employers.
        </p>
      </AboutSection>

      {/* Testimonials Section */}
      <TestimonialsSection>
        <h2>What Our Users Say</h2>
        <Testimonial>
          <img src="https://via.placeholder.com/50" alt="Testimonial Icon" />
          <p>"GigHive helped me land my dream job in just a few weeks!"</p>
        </Testimonial>
        <Testimonial>
          <img src="https://via.placeholder.com/50" alt="Testimonial Icon" />
          <p>"The application process was so easy and straightforward."</p>
        </Testimonial>
        <Testimonial>
          <img src="https://via.placeholder.com/50" alt="Testimonial Icon" />
          <p>"I love the variety of job listings available on GigHive."</p>
        </Testimonial>
      </TestimonialsSection>
    </HomeWrapper>
  );
};

export default Home;
