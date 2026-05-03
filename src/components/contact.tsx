import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Basics, Screen, Decors } from 'styles';
import Socials from './socials';

const fadeSlideUp = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const lineGrow = keyframes`
  0% { width: 0; }
  100% { width: 60px; }
`;

const ContactContainer = styled.div`
  ${Decors.animate.fadeIn(4)};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  justify-content: center;
  max-width: 700px;
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
  margin-bottom: 40px;

  &::after {
    content: '';
    display: block;
    height: 2px;
    background: ${({ theme }) => theme.link};
    opacity: 0.5;
    animation: ${lineGrow} 0.8s ease 0.4s both;
  }
`;

const ContactText = styled.p`
  font-size: 18px;
  line-height: 1.8;
  margin: 0 0 48px 0;
  color: ${({ theme }) => theme.text};
  text-align: center;
  opacity: 0.85;
  max-width: 480px;
  animation: ${fadeSlideUp} 0.6s ease 0.2s both;
  ${Screen.largePhone`
    font-size: ${Basics.fontSize.small};
  `};
`;

const PrimaryAction = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 14px 36px;
  border-radius: 8px;
  font-size: 14px;
  font-family: ${Basics.fonts.Montserrat};
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.button};
  color: ${Basics.colors.white};
  margin-bottom: 60px;
  animation: ${fadeSlideUp} 0.6s ease 0.35s both;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px ${({ theme }) => theme.button}35;
    color: ${Basics.colors.white};
  }

  ${Screen.largePhone`
    padding: 12px 28px;
    font-size: 12px;
  `};
`;

const SocialsWrapper = styled.div`
  animation: ${fadeSlideUp} 0.6s ease 0.65s both;
`;

const Contact = () => (
  <ContactContainer>
    <SectionLabel>Get In Touch</SectionLabel>
    <SectionTitle>Let's talk.</SectionTitle>
    <Divider />
    <ContactText>
      Have a project in mind? We'd love to hear from you.
    </ContactText>
    <PrimaryAction href="mailto:hello@zicli.com">
      Send Us a Message
    </PrimaryAction>
    <SocialsWrapper>
      <Socials />
    </SocialsWrapper>
  </ContactContainer>
);

export default Contact;
