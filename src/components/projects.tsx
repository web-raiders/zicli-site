import React, { useState } from 'react';
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

const Head = styled.div<{ $revealed: boolean }>`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 48px;
  gap: 32px;
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
  color: ${({ theme }) => theme.accent};
  margin-bottom: 14px;
`;

const Title = styled.h2`
  font-size: clamp(36px, 5vw, 64px);
  color: ${({ theme }) => theme.ink};
  font-weight: 400;
  max-width: 700px;
  em { font-style: italic; color: ${({ theme }) => theme.accent}; }
`;

const Tabs = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Tab = styled.button<{ $active: boolean }>`
  background: ${({ theme, $active }) => ($active ? theme.ink : 'transparent')};
  color: ${({ theme, $active }) => ($active ? theme.body : theme.ink)};
  border: 1px solid ${({ theme, $active }) => ($active ? theme.ink : theme.line)};
  font-family: ${Basics.fonts.Montserrat};
  font-size: 12px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 600;
  padding: 12px 22px;
  border-radius: 999px;
  cursor: pointer;
  transition: ${Basics.transition};

  &:hover {
    border-color: ${({ theme }) => theme.ink};
  }
`;

const Showcase = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 24px;
  ${Screen.tablet`
    grid-template-columns: 1fr;
  `};
`;

const FeatureCard = styled.div<{ $bg: string; $revealed: boolean }>`
  border-radius: 28px;
  background: ${({ $bg }) => $bg};
  min-height: 480px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  color: #F8F4EC;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 0 30px 80px ${({ theme }) => theme.shadow};
  opacity: ${({ $revealed }) => ($revealed ? 1 : 0)};
  transform: scale(${({ $revealed }) => ($revealed ? 1 : 0.98)});
  transition: all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 30% 20%, rgba(255,255,255,0.18), transparent 55%),
      linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.45));
    pointer-events: none;
  }
`;

const FeatureInner = styled.div`
  position: relative;
  z-index: 1;
`;

const Etch = styled.div`
  display: inline-block;
  font-family: monospace;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.2);
  padding: 6px 12px;
  border-radius: 999px;
  margin-bottom: 18px;
`;

const FeatName = styled.h3`
  font-size: 38px;
  color: #fff;
  font-weight: 400;
  margin-bottom: 8px;
`;

const FeatMeta = styled.div`
  font-family: ${Basics.fonts.Montserrat};
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.85;
`;

const Side = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 24px;
  ${Screen.tablet`
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
  `};
  ${Screen.largePhone`
    grid-template-columns: 1fr;
  `};
`;

const Mini = styled.div<{ $bg: string; $revealed: boolean; $delay: number }>`
  border-radius: 24px;
  background: ${({ $bg }) => $bg};
  min-height: 228px;
  padding: 26px;
  position: relative;
  overflow: hidden;
  color: #F8F4EC;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 24px 60px ${({ theme }) => theme.shadow};
  opacity: ${({ $revealed }) => ($revealed ? 1 : 0)};
  transform: translateY(${({ $revealed }) => ($revealed ? 0 : '20px')});
  transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  transition-delay: ${({ $delay }) => $delay}s;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.5));
  }
`;

const MiniInner = styled.div`
  position: relative;
  z-index: 1;
`;

const MiniName = styled.h4`
  font-size: 22px;
  color: #fff;
  font-weight: 500;
`;

const MiniMeta = styled.div`
  font-family: ${Basics.fonts.Montserrat};
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  opacity: 0.85;
  margin-top: 6px;
`;

type Category = 'all' | 'residential' | 'commercial' | 'restoration';

interface Project {
  cat: Exclude<Category, 'all'>;
  name: string;
  meta: string;
  bg: string;
}

const projects: Project[] = [
  { cat: 'commercial',  name: 'Lekki Corporate Tower',   meta: 'Lagos · 2024 · Exterior', bg: 'linear-gradient(135deg,#15110D,#3D352B)' },
  { cat: 'residential', name: 'Banana Island Residence', meta: 'Lagos · 2024 · Interior', bg: 'linear-gradient(135deg,#C0502B,#E0A030)' },
  { cat: 'restoration', name: 'Yaba Heritage Building',  meta: 'Lagos · 2023 · Facade',    bg: 'linear-gradient(135deg,#1F574F,#7BB0A6)' },
  { cat: 'residential', name: 'Ibeju-Lekki Family Home', meta: 'Lagos · 2024 · Interior', bg: 'linear-gradient(135deg,#3D352B,#C0502B)' },
  { cat: 'commercial',  name: 'Ikeja Retail Space',      meta: 'Lagos · 2023 · Branding', bg: 'linear-gradient(135deg,#E0A030,#C0502B)' },
];

const tabs: { id: Category; label: string }[] = [
  { id: 'all',         label: 'All' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial',  label: 'Commercial' },
  { id: 'restoration', label: 'Restoration' },
];

const Projects = () => {
  const [filter, setFilter] = useState<Category>('all');
  const { ref, revealed } = useReveal<HTMLDivElement>(0.1);

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.cat === filter);
  const feature = filtered[0];
  const rest = filtered.slice(1, 3);

  return (
    <Section id="projects">
      <Head ref={ref as React.RefObject<HTMLDivElement>} $revealed={revealed}>
        <div>
          <Kicker>Selected work</Kicker>
          <Title>
            Walls we've turned into <em>landmarks</em>.
          </Title>
        </div>
        <Tabs>
          {tabs.map((t) => (
            <Tab
              key={t.id}
              $active={filter === t.id}
              onClick={() => setFilter(t.id)}
            >
              {t.label}
            </Tab>
          ))}
        </Tabs>
      </Head>

      {feature && (
        <Showcase>
          <FeatureCard $bg={feature.bg} $revealed={revealed}>
            <FeatureInner>
              <Etch>{feature.cat}</Etch>
              <FeatName>{feature.name}</FeatName>
              <FeatMeta>{feature.meta}</FeatMeta>
            </FeatureInner>
          </FeatureCard>
          <Side>
            {rest.map((p, i) => (
              <Mini key={p.name} $bg={p.bg} $revealed={revealed} $delay={0.2 + i * 0.1}>
                <MiniInner>
                  <Etch>{p.cat}</Etch>
                </MiniInner>
                <MiniInner>
                  <MiniName>{p.name}</MiniName>
                  <MiniMeta>{p.meta}</MiniMeta>
                </MiniInner>
              </Mini>
            ))}
          </Side>
        </Showcase>
      )}
    </Section>
  );
};

export default Projects;
