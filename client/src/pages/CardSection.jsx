import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  text-align: center;
  padding: 50px 0;
  background-color: #f8f9fa;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const Card = styled.div`
  background-color: ${({ bgColor }) => bgColor || "#fff"};
  border-radius: 15px;
  padding: 30px;
  width: 200px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 10px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #777;
`;

const CardSection = () => {
  return (
    <Section>
      <Title>Find the perfect job for YOU</Title>
      <CardsWrapper>
        <Card bgColor="#fff7f4">
          <Icon>🚀</Icon>
          <CardTitle>Boost</CardTitle>
          <Description>Stand out to employers</Description>
        </Card>
        <Card bgColor="#f0faff">
          <Icon>📖</Icon>
          <CardTitle>Prep</CardTitle>
          <Description>Up your interview success rate</Description>
        </Card>
        <Card bgColor="#f5fff4">
          <Icon>🎓</Icon>
          <CardTitle>Learn</CardTitle>
          <Description>Upskill to get ahead</Description>
        </Card>
        <Card bgColor="#fff4f9">
          <Icon>👥</Icon>
          <CardTitle>Network</CardTitle>
          <Description>Grow with peers & mentors</Description>
        </Card>
      </CardsWrapper>
    </Section>
  );
};

export default CardSection;
