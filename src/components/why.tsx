import React from 'react';
import styled from 'styled-components';
import { Basics, Screen } from 'styles';
import { useReveal } from 'utils';

const Section = styled.section`
  padding: 140px 32px;
  background: ${({ theme }) => theme.sand};
  position: relative;
  overflow: hidden;
  ${Screen.largePhone`
    padding: 100px 20px;
  `};
`;

const Inner = styled.div`
  max-width: ${Basics.maxWidth};
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Top = styled.div<{ $revealed: boolean }>`
  text-align: center;
  margin-bottom: 64px;
  opacity: ${({ $revealed }) => ($revealed ? 1 : 0)};
  transform: translateY(${({ $revealed }) => ($revealed ? 0 : '20px')});
  transition: all 0.9s cubic-bezier(0.2, 0.8, 0.2, 1);
`;

const Kicker = styled.div`
  font-family: ${Basics.fonts.Montserrat};
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 18px;
`;

const Title = styled.h2`
  font-size: clamp(36px, 5vw, 64px);
  color: ${({ theme }) => theme.ink};
  margin: 0 auto;
  max-width: 720px;
  font-weight: 400;
  em { font-style: italic; color: ${({ theme }) => theme.accent}; }
`;

const Sub = styled.p`
  font-size: 17px;
  color: ${({ theme }) => theme.muted};
  max-width: 540px;
  margin: 22px auto 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: ${({ theme }) => theme.line};
  border: 1px solid ${({ theme }) => theme.line};
  border-radius: 24px;
  overflow: hidden;
  ${Screen.tablet`
    grid-template-columns: repeat(2, 1fr);
  `};
  ${Screen.largePhone`
    grid-template-columns: 1fr;
  `};
`;

const Cell = styled.div<{ $revealed: boolean; $delay: number }>`
  background: ${({ theme }) => theme.body};
  padding: 44px 32px;
  position: relative;
  opacity: ${({ $revealed }) => ($revealed ? 1 : 0)};
  transform: translateY(${({ $revealed }) => ($revealed ? 0 : '24px')});
  transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  transition-delay: ${({ $delay }) => $delay}s;

  &:hover {
    background: ${({ theme }) => theme.surface};
  }
`;

const Num = styled.div`
  font-family: ${Basics.fonts.Display};
  font-size: 14px;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 18px;
  font-style: italic;
`;

const FeatTitle = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.ink};
  margin-bottom: 14px;
  font-weight: 500;
`;

const FeatDesc = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.muted};
  line-height: 1.7;
`;

const Brush = styled.div<{ $c: string }>`
  width: 56px;
  height: 6px;
  border-radius: 4px;
  background: ${({ $c }) => $c};
  margin-top: 22px;
  opacity: 0.8;
`;

const features = [
  { num: '01', t: 'Quality Finish', d: 'A flawless, even coat that holds its smoothness in heat and humidity.', c: '#C0502B' },
  { num: '02', t: 'Quality Paint',  d: 'Premium-grade pigments and binders engineered for serious longevity.',     c: '#15110D' },
  { num: '03', t: 'Good Spread',    d: 'High-coverage formulations — more wall, fewer coats, less waste.',          c: '#1F574F' },
  { num: '04', t: "Doesn't Chalk",  d: 'No powdery degradation. Walls stay clean and colour stays put.',            c: '#E0A030' },
  { num: '05', t: 'Colour Proof',   d: 'UV-resistant pigments hold their tone, even on west-facing facades.',       c: '#7BB0A6' },
  { num: '06', t: 'Price Friendly', d: 'Professional-grade quality at honest, locally-priced rates.',                c: '#C0502B' },
];

const Why = () => {
  const { ref, revealed } = useReveal<HTMLDivElement>(0.1);
  return (
    <Section id="why">
      <Inner>
        <Top ref={ref as React.RefObject<HTMLDivElement>} $revealed={revealed}>
          <Kicker>Why Zicli</Kicker>
          <Title>
            Six reasons our clients keep coming <em>back</em>.
          </Title>
          <Sub>
            From the Lagos sun to coastal humidity, our paint is formulated
            for the conditions our customers actually live in.
          </Sub>
        </Top>
        <Grid>
          {features.map((f, i) => (
            <Cell key={f.t} $revealed={revealed} $delay={0.1 + i * 0.06}>
              <Num>{f.num}</Num>
              <FeatTitle>{f.t}</FeatTitle>
              <FeatDesc>{f.d}</FeatDesc>
              <Brush $c={f.c} />
            </Cell>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
};

export default Why;
