import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: rgba(0, 123, 255, 0.7); /* Transparent blue */
  color: #fff;
  text-align: center;
  padding: 1rem;
  position: fixed;
  width: 100%;
  bottom: 0;
  transition: background-color 0.3s ease;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 5px;
  transition: color 0.3s ease;

  &:hover {
    color: #ffeb3b;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; 2024 GigHive. All Rights Reserved.</p>
      <div>
        <FooterLink href="#">Privacy Policy</FooterLink> |
        <FooterLink href="#"> Terms of Service</FooterLink>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
