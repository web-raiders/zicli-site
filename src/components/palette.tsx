import React, { useState } from 'react';
import styled from 'styled-components';
import { Basics, Screen } from 'styles';
import { useReveal } from 'utils';

const Section = styled.section`
  padding: 140px 32px;
  background: ${({ theme }) => theme.inverse};
  color: ${({ theme }) => theme.onInverse};
  position: relative;
  overflow: hidden;
  ${Screen.largePhone`
    padding: 100px 20px;
  `};
`;

const Inner = styled.div`
  max-width: ${Basics.maxWidth};
  margin: 0 auto;
`;

const Head = styled.div<{ $revealed: boolean }>`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 60px;
  opacity: ${({ $revealed }) => ($revealed ? 1 : 0)};
  transform: translateY(${({ $revealed }) => ($revealed ? 0 : '20px')});
  transition: all 0.9s cubic-bezier(0.2, 0.8, 0.2, 1);
  ${Screen.tablet`
    flex-direction: column;
    align-items: flex-start;
  `};
`;

const Kicker = styled.div`
  font-family: ${Basics.fonts.Montserrat};
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.accent3};
  margin-bottom: 14px;
`;

const Title = styled.h2`
  font-size: clamp(36px, 5vw, 64px);
  color: ${({ theme }) => theme.onInverse};
  font-weight: 400;
  max-width: 700px;
  em { font-style: italic; color: ${({ theme }) => theme.accent3}; }
`;

const Right = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.onInverseMuted};
  max-width: 340px;
`;

const SwatchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 12px;
  ${Screen.pad`
    grid-template-columns: repeat(6, 1fr);
  `};
  ${Screen.tablet`
    grid-template-columns: repeat(4, 1fr);
  `};
  ${Screen.largePhone`
    grid-template-columns: repeat(3, 1fr);
  `};
`;

const Swatch = styled.button<{ $c: string; $active: boolean; $revealed: boolean; $delay: number }>`
  position: relative;
  aspect-ratio: 1 / 1.15;
  border-radius: 14px;
  background: ${({ $c }) => $c};
  border: ${({ $active, theme }) => ($active ? `2px solid ${theme.onInverse}` : '1px solid rgba(255,255,255,0.05)')};
  cursor: pointer;
  padding: 0;
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), border 0.2s ease;
  opacity: ${({ $revealed }) => ($revealed ? 1 : 0)};
  transform: translateY(${({ $revealed }) => ($revealed ? 0 : '16px')});
  transition-delay: ${({ $delay }) => $delay}s;

  &:hover {
    transform: translateY(-6px);
  }

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 14px;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.18);
  }
`;

const Preview = styled.div<{ $c: string; $revealed: boolean }>`
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: center;
  padding: 40px;
  border-radius: 28px;
  background: ${({ $c }) => $c};
  min-height: 280px;
  transition: background 0.6s ease;
  opacity: ${({ $revealed }) => ($revealed ? 1 : 0)};
  transform: translateY(${({ $revealed }) => ($revealed ? 0 : '24px')});

  ${Screen.tablet`
    grid-template-columns: 1fr;
  `};
`;

const PreviewText = styled.div`
  color: rgba(255,255,255,0.95);
  mix-blend-mode: difference;
`;

const PreviewName = styled.div`
  font-family: ${Basics.fonts.Display};
  font-size: 44px;
  line-height: 1;
  font-weight: 400;
`;

const PreviewCode = styled.div`
  font-family: monospace;
  font-size: 13px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-top: 10px;
  opacity: 0.85;
`;

const PreviewMeta = styled.p`
  color: rgba(255,255,255,0.95);
  mix-blend-mode: difference;
  font-size: 15px;
  line-height: 1.7;
  max-width: 440px;
`;

const ViewAllWrap = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
`;

const ViewAll = styled.button`
  background: ${({ theme }) => theme.accent3};
  color: ${({ theme }) => theme.inverse};
  border: none;
  padding: 16px 28px;
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
  &:hover { transform: translateY(-2px); }
  &:after { content: '→'; }
`;

interface ColorChip { hex: string; name: string; }

const chips: ColorChip[] = [
  { hex: '#F8F4EC', name: 'Lagos Bone' },
  { hex: '#ECE5D7', name: 'Atlantic Chalk' },
  { hex: '#D8B98F', name: 'Yaba Sand' },
  { hex: '#E0A030', name: 'Harmattan Gold' },
  { hex: '#C0502B', name: 'Owambe Clay' },
  { hex: '#8B2A1D', name: 'Sahel Brick' },
  { hex: '#5E3A23', name: 'Cocoa Earth' },
  { hex: '#15110D', name: 'Midnight Ink' },
  { hex: '#1F574F', name: 'Niger Pine' },
  { hex: '#7BB0A6', name: 'Kano Mint' },
  { hex: '#2A4F7A', name: 'Lagoon Deep' },
  { hex: '#5C7BB8', name: 'Harbour Blue' },
  { hex: '#C9D5DD', name: 'Morning Mist' },
  { hex: '#8E7CC3', name: 'Velvet Iris' },
  { hex: '#A23E5C', name: 'Hibiscus' },
  { hex: '#E27D8A', name: 'Coral Bloom' },
];

interface PaletteProps { onOpenChart: () => void; }

const Palette = ({ onOpenChart }: PaletteProps) => {
  const [active, setActive] = useState(chips[4]);
  const { ref, revealed } = useReveal<HTMLDivElement>(0.1);

  return (
    <Section id="palette">
      <Inner>
        <Head ref={ref as React.RefObject<HTMLDivElement>} $revealed={revealed}>
          <div>
            <Kicker>The Colour Chart</Kicker>
            <Title>
              A palette drawn from <em>Nigeria</em>.
            </Title>
          </div>
          <Right>
            Sixteen signature tones built from local light, landscape and
            architecture. Pick one to see it live.
          </Right>
        </Head>

        <SwatchGrid>
          {chips.map((c, i) => (
            <Swatch
              key={c.hex}
              $c={c.hex}
              $active={active.hex === c.hex}
              $revealed={revealed}
              $delay={0.05 * i}
              onClick={() => setActive(c)}
              aria-label={c.name}
            />
          ))}
        </SwatchGrid>

        <Preview $c={active.hex} $revealed={revealed}>
          <PreviewText>
            <PreviewName>{active.name}</PreviewName>
            <PreviewCode>{active.hex}</PreviewCode>
          </PreviewText>
          <PreviewMeta>
            Every Zicli colour is matched in-house and tested on site so the
            tone you choose is the tone that lands on your wall.
          </PreviewMeta>
        </Preview>

        <ViewAllWrap>
          <ViewAll onClick={onOpenChart}>View the full Colour Chart</ViewAll>
        </ViewAllWrap>
      </Inner>
    </Section>
  );
};

export default Palette;
