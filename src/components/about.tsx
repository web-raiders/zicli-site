import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Basics, Screen, Decors } from 'styles';

const fadeSlideUp = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const lineGrow = keyframes`
  0% { width: 0; }
  100% { width: 60px; }
`;

const AboutContainer = styled.div`
  ${Decors.animate.fadeIn(4)};
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;
  padding: 160px 40px 80px;
  ${Screen.largePhone`
    padding: 140px 20px 60px;
  `};
`;

const SectionLabel = styled.span`
  font-size: 12px;
  font-family: ${Basics.fonts.Montserrat};
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.link};
  text-align: center;
  display: block;
  margin-bottom: 16px;
  animation: ${fadeSlideUp} 0.6s ease both;
`;

const SectionTitle = styled.h1`
  font-size: ${Basics.fontSize.xlarge};
  margin: 0 0 20px 0;
  color: ${({ theme }) => theme.color};
  font-weight: 700;
  text-align: center;
  letter-spacing: -0.03em;
  animation: ${fadeSlideUp} 0.6s ease 0.1s both;
  ${Screen.largeScreen`
    font-size: ${Basics.fontSize.large};
  `};
  ${Screen.largePhone`
    font-size: 32px;
  `};
`;

const Divider = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 48px;

  &::after {
    content: '';
    display: block;
    height: 2px;
    background: ${({ theme }) => theme.link};
    opacity: 0.5;
    animation: ${lineGrow} 0.8s ease 0.4s both;
  }
`;

const AboutText = styled.p`
  font-size: 18px;
  line-height: 1.85;
  margin: 0;
  color: ${({ theme }) => theme.text};
  opacity: 0.85;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  animation: ${fadeSlideUp} 0.6s ease 0.3s both;
`;

const About = () => (
  <AboutContainer>
    <SectionLabel>About</SectionLabel>
    <SectionTitle>Who we are.</SectionTitle>
    <Divider />
    <AboutText>
      Tell your story here. This is a placeholder for your about section.
      Describe your mission, your team, and what makes you different.
    </AboutText>
  </AboutContainer>
);

export default About;
