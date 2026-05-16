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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 80px;
  align-items: center;
  ${Screen.tablet`
    grid-template-columns: 1fr;
    gap: 48px;
  `};
`;

const Visual = styled.div<{ $revealed: boolean }>`
  position: relative;
  height: 460px;
  border-radius: 28px;
  background: linear-gradient(135deg, #C0502B 0%, #E0A030 60%, #F8F4EC 100%);
  overflow: hidden;
  box-shadow: 0 30px 80px ${({ theme }) => theme.shadow};
  opacity: ${({ $revealed }) => ($revealed ? 1 : 0)};
  transform: translateY(${({ $revealed }) => ($revealed ? 0 : '24px')});
  transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1);

  ${Screen.tablet`
    height: 360px;
  `};

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 70% 30%, rgba(255,255,255,0.35), transparent 50%),
      radial-gradient(circle at 20% 80%, rgba(0,0,0,0.18), transparent 55%);
  }
`;

const Strip = styled.div`
  position: absolute;
  bottom: 28px;
  left: 28px;
  right: 28px;
  display: flex;
  gap: 8px;
  height: 56px;
`;

const Bar = styled.div<{ $c: string; $w: string }>`
  flex: ${({ $w }) => $w};
  background: ${({ $c }) => $c};
  border-radius: 8px;
`;

const Pill = styled.div`
  position: absolute;
  top: 28px;
  left: 28px;
  font-family: monospace;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  background: rgba(21,17,13,0.7);
  color: #F8F4EC;
  padding: 8px 14px;
  border-radius: 999px;
  backdrop-filter: blur(8px);
`;

const Text = styled.div<{ $revealed: boolean }>`
  opacity: ${({ $revealed }) => ($revealed ? 1 : 0)};
  transform: translateY(${({ $revealed }) => ($revealed ? 0 : '20px')});
  transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.15s;
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
  font-size: clamp(32px, 4.4vw, 52px);
  color: ${({ theme }) => theme.ink};
  font-weight: 400;
  margin-bottom: 24px;
  em { font-style: italic; color: ${({ theme }) => theme.accent}; }
`;

const Body = styled.p`
  font-size: 17px;
  color: ${({ theme }) => theme.muted};
  line-height: 1.75;
  margin-bottom: 16px;
`;

const Bullets = styled.ul`
  list-style: none;
  padding: 0;
  margin: 32px 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
`;

const Bullet = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${Basics.fonts.Montserrat};
  font-size: 13px;
  color: ${({ theme }) => theme.ink};
  letter-spacing: 0.04em;
  &:before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.accent};
  }
`;

const About = () => {
  const { ref, revealed } = useReveal<HTMLDivElement>(0.15);
  return (
    <Section ref={ref as React.RefObject<HTMLDivElement>}>
      <Grid>
        <Visual $revealed={revealed}>
          <Pill>Zicli Lab · Lagos</Pill>
          <Strip>
            <Bar $c="#15110D" $w="2" />
            <Bar $c="#C0502B" $w="1" />
            <Bar $c="#E0A030" $w="3" />
            <Bar $c="#1F574F" $w="1" />
            <Bar $c="#F8F4EC" $w="2" />
          </Strip>
        </Visual>
        <Text $revealed={revealed}>
          <Kicker>Who we are</Kicker>
          <Title>
            A Nigerian paint house built on <em>quality</em>, made for
            climate and craft.
          </Title>
          <Body>
            Zicli Synergy Limited manufactures Zicli paints and pharmaceutical
            products, and is the exclusive Nigerian distributor of Inesfly
            Insecticide Paint and Inesfly Floor Cleaner.
          </Body>
          <Body>
            From our facility in Ibeju-Lekki, we serve homeowners, contractors
            and brands across Nigeria — pairing serious lab-grade quality with
            the warmth of a local, family-run team.
          </Body>
          <Bullets>
            <Bullet>Manufactured in Lagos</Bullet>
            <Bullet>Inesfly NG distributor</Bullet>
            <Bullet>200+ stocked colours</Bullet>
            <Bullet>On-site delivery teams</Bullet>
          </Bullets>
        </Text>
      </Grid>
    </Section>
  );
};

export default About;
