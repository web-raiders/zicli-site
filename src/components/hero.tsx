import React from 'react';
import styled from 'styled-components';
import { Basics, Screen, Decors } from 'styles';
import Socials from './socials';

const HeroContainer = styled.div`
  ${Decors.animate.fadeIn(4)};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 90vh;
  justify-content: center;
  padding: 60px 40px 60px;
  margin-top: 60px;
  overflow: hidden;
  ${Screen.largePhone`
    padding: 40px 20px 40px;
    margin-top: 60px;
    min-height: 85vh;
  `};
`;

const HeroInner = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: ${Basics.fontSize.xlarge};
  margin: 0 0 20px 0;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.color};
  ${Screen.largeScreen`
    font-size: ${Basics.fontSize.large};
  `};
  ${Screen.largePhone`
    font-size: 30px;
  `};
`;

const HeroText = styled.p`
  font-size: 18px;
  line-height: 1.75;
  color: ${({ theme }) => theme.text};
  max-width: 520px;
  margin: 0 auto 36px;
  font-weight: 400;
  opacity: 0.85;
  ${Screen.largePhone`
    font-size: ${Basics.fontSize.small};
    margin-bottom: 28px;
  `};
`;

const CTAContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 50px;
  ${Screen.largePhone`
    flex-direction: column;
    gap: 15px;
    align-items: center;
  `};
`;

const PrimaryButton = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.button};
  color: ${Basics.colors.white};
  text-decoration: none;
  padding: 14px 36px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  font-family: ${Basics.fonts.Montserrat};
  letter-spacing: 0.03em;
  text-transform: uppercase;
  transition: all 0.3s ease;

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

const Hero = () => {
  return (
    <HeroContainer>
      <HeroInner>
        <Title>Zicli</Title>
        <HeroText>
          Crafting thoughtful digital experiences — products, brands, and
          ideas built with intention.
        </HeroText>
        <CTAContainer>
          <PrimaryButton href="mailto:hello@zicli.com">
            Get In Touch
          </PrimaryButton>
        </CTAContainer>
        <Socials />
      </HeroInner>
    </HeroContainer>
  );
};

export default Hero;
