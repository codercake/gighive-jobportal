import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import paymentIcon1 from '../../assets/payment1.png'; 
import paymentIcon2 from '../../assets/payment2.png';
import paymentIcon3 from '../../assets/payment3.png';

const FooterWrapper = styled.footer`
  background: linear-gradient(135deg, #1e0b36 0%, #2a1454 100%);
  color: #fff;
  padding: 4rem 2rem 2rem;
  position: relative;
  width: 100%;
  z-index: 1;
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 1.5rem;
  
  span {
    background: linear-gradient(135deg, #7C3AED, #3B82F6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const FooterColumn = styled.div`
  h4 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 40px;
      height: 3px;
      background: linear-gradient(135deg, #7C3AED, #3B82F6);
      border-radius: 2px;
    }
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 0.8rem;
    }

    a {
      color: #fff;
      text-decoration: none;
      transition: all 0.3s ease;
      display: inline-block;

      &:hover {
        color: #7C3AED;
        transform: translateX(5px);
      }
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;

  a {
    color: #fff;
    font-size: 1.5rem;
    background: rgba(255, 255, 255, 0.1);
    padding: 0.8rem;
    border-radius: 50%;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: #7C3AED;
      transform: translateY(-5px);
    }
  }
`;

const PaymentSection = styled.div`
  margin-top: 2rem;

  h4 {
    margin-bottom: 1rem;
  }
`;

const PaymentIcons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  img {
    height: 35px;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 3rem;
  margin-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterColumn>
          <Logo>
            <span>GigHive</span>
          </Logo>
          <SocialIcons>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <RiTwitterXFill />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </SocialIcons>
        </FooterColumn>

        <FooterColumn>
          <h4>For Candidates</h4>
          <ul>
            <li><a href="/overview">Overview</a></li>
            <li><a href="/startup-jobs">Startup Jobs</a></li>
            <li><a href="/web3-jobs">Web3 Jobs</a></li>
            <li><a href="/featured">Featured</a></li>
            <li><a href="/salary-calculator">Salary Calculator</a></li>
          </ul>
        </FooterColumn>

        <FooterColumn>
          <h4>For Recruiters</h4>
          <ul>
            <li><a href="/recruit-overview">Overview</a></li>
            <li><a href="/recruit-pro">Recruit Pro</a></li>
            <li><a href="/curated">Curated</a></li>
            <li><a href="/hire-developers">Hire Developers</a></li>
            <li><a href="/pricing">Pricing</a></li>
          </ul>
        </FooterColumn>

        <FooterColumn>
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/help">Help</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/terms-risks">Terms & Risks</a></li>
            <li><a href="/privacy-cookies">Privacy & Cookies</a></li>
          </ul>
          <PaymentSection>
            <h4>Payment Methods</h4>
            <PaymentIcons>
              <img src={paymentIcon1} alt="Payment Method 1" />
              <img src={paymentIcon2} alt="Payment Method 2" />
              <img src={paymentIcon3} alt="Payment Method 3" />
            </PaymentIcons>
          </PaymentSection>
        </FooterColumn>
      </FooterContent>

      <Copyright>
        &copy; {new Date().getFullYear()} GigHive. All Rights Reserved.
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;
