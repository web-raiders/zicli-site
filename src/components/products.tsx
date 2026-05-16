import React from 'react';
import styled from 'styled-components';
import { Basics, Screen } from 'styles';
import { useReveal } from 'utils';

const Section = styled.section`
  padding: 120px 32px;
  max-width: ${Basics.maxWidth};
  margin: 0 auto;
  ${Screen.largePhone`
    padding: 80px 20px;
  `};
`;

const Head = styled.div<{ $revealed: boolean }>`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 56px;
  opacity: ${({ $revealed }) => ($revealed ? 1 : 0)};
  transform: translateY(${({ $revealed }) => ($revealed ? 0 : '20px')});
  transition: all 0.9s cubic-bezier(0.2, 0.8, 0.2, 1);
  ${Screen.tablet`
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
  `};
`;

const HeadLeft = styled.div`
  max-width: 640px;
`;

const Kicker = styled.div`
  font-family: ${Basics.fonts.Montserrat};
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 14px;
  &:before {
    content: '— ';
    color: ${({ theme }) => theme.accent};
    margin-right: 4px;
  }
`;

const Title = styled.h2`
  font-size: clamp(36px, 5vw, 64px);
  color: ${({ theme }) => theme.ink};
  font-weight: 400;
  em { font-style: italic; color: ${({ theme }) => theme.accent}; }
`;

const HeadRight = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.muted};
  max-width: 340px;
  line-height: 1.7;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  ${Screen.tablet`
    grid-template-columns: repeat(2, 1fr);
  `};
  ${Screen.largePhone`
    grid-template-columns: 1fr;
  `};
`;

const Card = styled.div<{ $bg: string; $fg: string; $revealed: boolean; $delay: number }>`
  position: relative;
  padding: 32px 28px 28px;
  border-radius: 28px;
  background: ${({ $bg }) => $bg};
  color: ${({ $fg }) => $fg};
  min-height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  box-shadow: 0 24px 60px ${({ theme }) => theme.shadow};
  opacity: ${({ $revealed }) => ($revealed ? 1 : 0)};
  transform: translateY(${({ $revealed }) => ($revealed ? 0 : '30px')});
  transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  transition-delay: ${({ $delay }) => $delay}s;
  cursor: default;

  &:hover {
    transform: translateY(-6px);
  }

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 80% 20%, rgba(255,255,255,0.18), transparent 60%);
    pointer-events: none;
  }
`;

const Tag = styled.span`
  align-self: flex-start;
  font-family: monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.2);
  color: inherit;
  opacity: 0.9;
`;

const Name = styled.h3`
  font-size: 30px;
  color: inherit;
  margin: 18px 0 8px;
  font-weight: 500;
`;

const Desc = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: inherit;
  opacity: 0.85;
  margin-bottom: 22px;
`;

const Foot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Dot = styled.div<{ $c: string }>`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${({ $c }) => $c};
  border: 2px solid rgba(255,255,255,0.4);
`;

const DotRow = styled.div`
  display: flex;
  gap: -10px;
  & > div + div { margin-left: -10px; }
`;

const Arrow = styled.span`
  font-family: ${Basics.fonts.Montserrat};
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  opacity: 0.85;
  &:after { content: ' →'; }
`;

interface Product {
  tag: string;
  name: string;
  desc: string;
  bg: string;
  fg: string;
  swatches: string[];
}

const products: Product[] = [
  {
    tag: '01 · Interiors',
    name: 'Ink Paint',
    desc: 'Deep, saturated emulsion finishes for living rooms and statement walls — matte and silken sheens.',
    bg: '#15110D',
    fg: '#F8F4EC',
    swatches: ['#15110D', '#3D352B', '#C0502B', '#E0A030'],
  },
  {
    tag: '02 · Exteriors',
    name: 'Spray Paint',
    desc: 'Weather-grade spray finishes for facades, metal and detail work — UV-stable and quick to cure.',
    bg: '#C0502B',
    fg: '#FFF7EE',
    swatches: ['#C0502B', '#E0A030', '#F8F4EC', '#1F574F'],
  },
  {
    tag: '03 · Print & Brand',
    name: 'Digital Paint',
    desc: 'Vivid, high-coverage inks for signage, murals and custom commercial visuals.',
    bg: '#1F574F',
    fg: '#F2EBDC',
    swatches: ['#1F574F', '#7BB0A6', '#E0A030', '#F8F4EC'],
  },
  {
    tag: '04 · Health & Home',
    name: 'Inesfly Insecticide Paint',
    desc: 'World-leading insecticide-embedded paint that repels mosquitoes and pests for years — exclusively in Nigeria.',
    bg: '#E0A030',
    fg: '#15110D',
    swatches: ['#E0A030', '#C0502B', '#15110D', '#F8F4EC'],
  },
  {
    tag: '05 · Maintenance',
    name: 'Inesfly Floor Cleaner',
    desc: 'Concentrated, residue-free floor care formulated to pair with our paint and protect long-term finish.',
    bg: '#F8F4EC',
    fg: '#15110D',
    swatches: ['#F8F4EC', '#ECE5D7', '#C0502B', '#1F574F'],
  },
  {
    tag: '06 · Service',
    name: 'Painting & Restoration',
    desc: 'On-site delivery by Zicli-trained painters — residential, commercial and heritage restoration.',
    bg: '#3D352B',
    fg: '#F8F4EC',
    swatches: ['#3D352B', '#C0502B', '#E0A030', '#F8F4EC'],
  },
];

const Products = () => {
  const { ref, revealed } = useReveal<HTMLDivElement>(0.1);

  return (
    <Section id="products">
      <Head ref={ref as React.RefObject<HTMLDivElement>} $revealed={revealed}>
        <HeadLeft>
          <Kicker>What we make</Kicker>
          <Title>
            Paint, <em>perfected</em> — for every surface and season.
          </Title>
        </HeadLeft>
        <HeadRight>
          From the boldest brand walls to the quietest family rooms, our
          range gives you a finish worth showing off.
        </HeadRight>
      </Head>

      <Grid>
        {products.map((p, i) => (
          <Card
            key={p.name}
            $bg={p.bg}
            $fg={p.fg}
            $revealed={revealed}
            $delay={0.1 + i * 0.08}
          >
            <Tag>{p.tag}</Tag>
            <div>
              <Name>{p.name}</Name>
              <Desc>{p.desc}</Desc>
              <Foot>
                <DotRow>
                  {p.swatches.map((s) => <Dot key={s} $c={s} />)}
                </DotRow>
                <Arrow>Learn more</Arrow>
              </Foot>
            </div>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Products;
