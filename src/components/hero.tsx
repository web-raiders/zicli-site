import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Basics, Screen } from 'styles';

const driftIn = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const floatY = keyframes`
  0%, 100% { transform: translateY(0) rotate(var(--rot, 0deg)); }
  50%      { transform: translateY(-14px) rotate(var(--rot, 0deg)); }
`;

const pulseRing = keyframes`
  0%   { transform: scale(0.6); opacity: 0.6; }
  100% { transform: scale(1.6); opacity: 0; }
`;

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  padding: 140px 32px 80px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 60px;
  align-items: center;
  max-width: ${Basics.maxWidth};
  margin: 0 auto;
  overflow: hidden;

  ${Screen.pad`
    grid-template-columns: 1fr;
    gap: 80px;
    padding: 130px 24px 60px;
  `};
`;

const Left = styled.div`
  position: relative;
  z-index: 2;
`;

const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.line};
  border-radius: 999px;
  background: ${({ theme }) => theme.surface};
  font-family: ${Basics.fonts.Montserrat};
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.muted};
  margin-bottom: 28px;
  animation: ${driftIn} 0.9s ease both;

  &:before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.accent};
  }
`;

const Title = styled.h1`
  font-size: clamp(48px, 7vw, 92px);
  line-height: 0.98;
  margin: 0 0 24px;
  color: ${({ theme }) => theme.ink};
  font-weight: 400;
  animation: ${driftIn} 1.1s ease both 0.1s;

  em {
    font-style: italic;
    font-weight: 400;
    color: ${({ theme }) => theme.accent};
  }
`;

const Sub = styled.p`
  font-size: clamp(16px, 1.6vw, 19px);
  color: ${({ theme }) => theme.muted};
  max-width: 520px;
  line-height: 1.6;
  margin-bottom: 40px;
  animation: ${driftIn} 1.2s ease both 0.2s;
`;

const CTAs = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 56px;
  animation: ${driftIn} 1.3s ease both 0.3s;
`;

const Primary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: ${({ theme }) => theme.ink};
  color: ${({ theme }) => theme.body};
  padding: 16px 28px;
  border-radius: 999px;
  font-family: ${Basics.fonts.Montserrat};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: ${Basics.transition};
  cursor: pointer;
  box-shadow: 0 14px 30px ${({ theme }) => theme.shadow};

  &:hover {
    background: ${({ theme }) => theme.accent};
    color: #fff;
    transform: translateY(-2px);
  }

  &:after { content: '→'; font-size: 16px; transition: transform 0.3s ease; }
  &:hover:after { transform: translateX(4px); }
`;

const Ghost = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  color: ${({ theme }) => theme.ink};
  border: 1px solid ${({ theme }) => theme.line};
  padding: 16px 28px;
  border-radius: 999px;
  font-family: ${Basics.fonts.Montserrat};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: ${Basics.transition};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.surface};
    border-color: ${({ theme }) => theme.muted};
  }
`;

const Stats = styled.div`
  display: flex;
  gap: 40px;
  animation: ${driftIn} 1.4s ease both 0.4s;
  ${Screen.largePhone`
    gap: 28px;
  `};
`;

const Stat = styled.div`
  border-left: 2px solid ${({ theme }) => theme.accent};
  padding-left: 14px;
`;

const StatNum = styled.div`
  font-family: ${Basics.fonts.Display};
  font-size: 28px;
  color: ${({ theme }) => theme.ink};
  font-weight: 500;
  line-height: 1;
`;

const StatLabel = styled.div`
  font-family: ${Basics.fonts.Montserrat};
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.muted};
  margin-top: 6px;
`;

const Right = styled.div`
  position: relative;
  height: 540px;
  ${Screen.pad`
    height: 460px;
  `};
  ${Screen.largePhone`
    height: 380px;
  `};
`;

const Stage = styled.div`
  position: absolute;
  inset: 0;
`;

const Chip = styled.div<{ $color: string; $top: string; $left: string; $size: string; $rot: string; $delay: string }>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  background: ${({ $color }) => $color};
  border-radius: 22px;
  box-shadow: 0 24px 60px ${({ theme }) => theme.shadow},
    inset 0 1px 0 rgba(255,255,255,0.18);
  --rot: ${({ $rot }) => $rot};
  transform: rotate(${({ $rot }) => $rot});
  animation: ${floatY} 7s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay};

  &:before {
    content: '';
    position: absolute;
    inset: 14px;
    border-radius: 14px;
    border: 1px solid rgba(255,255,255,0.18);
  }
`;

const Disc = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, ${({ theme }) => theme.surface}, ${({ theme }) => theme.sand});
  transform: translate(-50%, -50%);
  box-shadow: 0 40px 90px ${({ theme }) => theme.shadow};
  ${Screen.pad`
    width: 280px;
    height: 280px;
  `};

  &:before, &:after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.accent}55;
    animation: ${pulseRing} 3s ease-out infinite;
  }
  &:after { animation-delay: 1.5s; }
`;

const Splat = styled.svg`
  position: absolute;
  bottom: -40px;
  right: -40px;
  width: 220px;
  height: 220px;
  opacity: 0.85;
  pointer-events: none;
`;

const Marquee = styled.div`
  grid-column: 1 / -1;
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid ${({ theme }) => theme.line};
  display: flex;
  gap: 56px;
  align-items: center;
  flex-wrap: wrap;
  font-family: ${Basics.fonts.Montserrat};
  font-size: 12px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.muted};
  animation: ${driftIn} 1.5s ease both 0.5s;
`;

const Bullet = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  &:before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.accent};
  }
`;

const Hero = () => (
  <Section id="home">
    <Left>
      <Eyebrow>Zicli Synergy · Since 2010</Eyebrow>
      <Title>
        Colour you can <em>trust</em>.<br />Finish you can feel.
      </Title>
      <Sub>
        Premium paints engineered in Lagos for Nigerian homes, businesses
        and landmark projects — and the exclusive home of Inesfly
        Insecticide Paint in Nigeria.
      </Sub>
      <CTAs>
        <Primary
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('palette')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Explore Colours
        </Primary>
        <Ghost
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Request a Quote
        </Ghost>
      </CTAs>
      <Stats>
        <Stat>
          <StatNum>15+</StatNum>
          <StatLabel>Years</StatLabel>
        </Stat>
        <Stat>
          <StatNum>200+</StatNum>
          <StatLabel>Colours</StatLabel>
        </Stat>
        <Stat>
          <StatNum>1,000+</StatNum>
          <StatLabel>Projects</StatLabel>
        </Stat>
      </Stats>
    </Left>

    <Right>
      <Stage>
        <Disc />
        <Chip $color="#C0502B" $top="4%"  $left="10%" $size="150px" $rot="-8deg" $delay="0s" />
        <Chip $color="#1F574F" $top="6%"  $left="58%" $size="170px" $rot="6deg"  $delay="0.6s" />
        <Chip $color="#E0A030" $top="46%" $left="2%"  $size="140px" $rot="10deg" $delay="1.2s" />
        <Chip $color="#15110D" $top="50%" $left="62%" $size="160px" $rot="-6deg" $delay="0.3s" />
        <Chip $color="#F8F4EC" $top="32%" $left="34%" $size="120px" $rot="2deg"  $delay="0.9s" />
        <Splat viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 10c14 18 38 12 56 30 18 19 4 42 22 60 17 18 18 42-2 56-21 14-46-4-66 4-21 8-43 26-62 8-19-19 1-44-8-65-9-21-30-39-12-58 18-19 44 3 60-7 5-3 8-12 12-18z"
            fill="#C0502B"
            opacity="0.18"
          />
        </Splat>
      </Stage>
    </Right>

    <Marquee>
      <Bullet>Inesfly Insecticide Paint</Bullet>
      <Bullet>Ink Paint</Bullet>
      <Bullet>Spray Paint</Bullet>
      <Bullet>Digital Paint</Bullet>
      <Bullet>Floor Cleaner</Bullet>
    </Marquee>
  </Section>
);

export default Hero;
