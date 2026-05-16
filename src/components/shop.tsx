import React from 'react';
import styled from 'styled-components';
import { Basics, Screen } from 'styles';
import { useReveal } from 'utils';

const Section = styled.section`
  padding: 140px 32px;
  max-width: ${Basics.maxWidth};
  margin: 0 auto;
  ${Screen.largePhone`
    padding: 100px 20px;
  `};
`;

const Card = styled.div<{ $revealed: boolean }>`
  position: relative;
  border-radius: 32px;
  overflow: hidden;
  padding: 80px 64px;
  background:
    radial-gradient(circle at 80% 10%, rgba(224,160,48,0.35), transparent 55%),
    radial-gradient(circle at 10% 90%, rgba(192,80,43,0.35), transparent 55%),
    linear-gradient(135deg, #15110D 0%, #3D352B 100%);
  color: #F8F4EC;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 48px;
  align-items: center;
  box-shadow: 0 40px 90px ${({ theme }) => theme.shadow};
  opacity: ${({ $revealed }) => ($revealed ? 1 : 0)};
  transform: translateY(${({ $revealed }) => ($revealed ? 0 : '30px')});
  transition: all 1.1s cubic-bezier(0.2, 0.8, 0.2, 1);

  ${Screen.tablet`
    grid-template-columns: 1fr;
    padding: 56px 28px;
  `};
`;

const Left = styled.div`
  position: relative;
  z-index: 1;
`;

const Kicker = styled.div`
  font-family: ${Basics.fonts.Montserrat};
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #E0A030;
  margin-bottom: 18px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  &:before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #E0A030;
  }
`;

const Title = styled.h2`
  font-size: clamp(36px, 5vw, 60px);
  color: #F8F4EC;
  font-weight: 400;
  margin-bottom: 18px;
  em { font-style: italic; color: #E0A030; }
`;

const Sub = styled.p`
  font-size: 17px;
  color: rgba(248,244,236,0.78);
  max-width: 480px;
  margin-bottom: 32px;
  line-height: 1.7;
`;

const CTAs = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
`;

const Primary = styled.button`
  background: #F8F4EC;
  color: #15110D;
  border: none;
  padding: 16px 26px;
  border-radius: 999px;
  font-family: ${Basics.fonts.Montserrat};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: ${Basics.transition};
  display: inline-flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background: #E0A030;
    transform: translateY(-2px);
  }
  &:after { content: '→'; }
`;

const Ghost = styled.a`
  background: transparent;
  color: #F8F4EC;
  border: 1px solid rgba(248,244,236,0.3);
  padding: 16px 26px;
  border-radius: 999px;
  font-family: ${Basics.fonts.Montserrat};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: ${Basics.transition};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  &:hover { border-color: #F8F4EC; }
`;

const Right = styled.div`
  position: relative;
  height: 320px;
  ${Screen.largePhone`
    height: 240px;
  `};
`;

const Shelf = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 14px;
`;

const Can = styled.svg<{ $h: number; $rot: number }>`
  width: 90px;
  height: ${({ $h }) => $h}px;
  transform: rotate(${({ $rot }) => $rot}deg) translateY(0);
  filter: drop-shadow(0 18px 28px rgba(0,0,0,0.4));
  transition: transform 0.4s ease;
  &:hover { transform: rotate(${({ $rot }) => $rot}deg) translateY(-8px); }
`;

const PaintCan = ({ color, h, rot }: { color: string; h: number; rot: number }) => (
  <Can $h={h} $rot={rot} viewBox="0 0 90 140" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="45" cy="14" rx="34" ry="7" fill="#0B0805" />
    <ellipse cx="45" cy="12" rx="34" ry="7" fill="#2A241D" />
    <rect x="11" y="12" width="68" height="118" fill={color} />
    <rect x="11" y="12" width="68" height="118" fill="url(#g)" opacity="0.2" />
    <ellipse cx="45" cy="130" rx="34" ry="7" fill="rgba(0,0,0,0.4)" />
    <rect x="22" y="44" width="46" height="40" fill="#F8F4EC" opacity="0.9" />
    <rect x="22" y="44" width="46" height="12" fill={color} opacity="0.85" />
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#fff" stopOpacity="0.55" />
        <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
        <stop offset="1" stopColor="#000" stopOpacity="0.3" />
      </linearGradient>
    </defs>
  </Can>
);

const Floor = styled.div`
  position: absolute;
  bottom: -6px;
  left: 0;
  right: 0;
  height: 30px;
  background: linear-gradient(180deg, transparent, rgba(0,0,0,0.4));
  border-radius: 50%;
  filter: blur(14px);
`;

interface Props { onOpen: () => void; }

const Shop = ({ onOpen }: Props) => {
  const { ref, revealed } = useReveal<HTMLDivElement>(0.15);
  return (
    <Section id="shop">
      <Card ref={ref as React.RefObject<HTMLDivElement>} $revealed={revealed}>
        <Left>
          <Kicker>The Shop</Kicker>
          <Title>
            The full Zicli shelf — <em>at your fingertips</em>.
          </Title>
          <Sub>
            Browse our paints, sprays and care products. Pick the finish,
            check sizes, and enquire to order from our Lagos showroom or a
            dealer near you.
          </Sub>
          <CTAs>
            <Primary onClick={onOpen}>Browse the Shop</Primary>
            <Ghost
              href="https://wa.me/2348163283624"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </Ghost>
          </CTAs>
        </Left>
        <Right>
          <Floor />
          <Shelf>
            <PaintCan color="#C0502B" h={150} rot={-4} />
            <PaintCan color="#E0A030" h={180} rot={2} />
            <PaintCan color="#F8F4EC" h={140} rot={-2} />
            <PaintCan color="#1F574F" h={170} rot={3} />
            <PaintCan color="#15110D" h={155} rot={-3} />
          </Shelf>
        </Right>
      </Card>
    </Section>
  );
};

export default Shop;
