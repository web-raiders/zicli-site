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

const Top = styled.div<{ $revealed: boolean }>`
  margin-bottom: 56px;
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
  margin-bottom: 14px;
`;

const Title = styled.h2`
  font-size: clamp(36px, 5vw, 64px);
  color: ${({ theme }) => theme.ink};
  font-weight: 400;
  max-width: 720px;
  em { font-style: italic; color: ${({ theme }) => theme.accent}; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  ${Screen.tablet`
    grid-template-columns: 1fr;
  `};
`;

const Card = styled.figure<{ $revealed: boolean; $delay: number }>`
  margin: 0;
  padding: 36px 30px;
  border: 1px solid ${({ theme }) => theme.line};
  border-radius: 24px;
  background: ${({ theme }) => theme.surface};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 320px;
  position: relative;
  opacity: ${({ $revealed }) => ($revealed ? 1 : 0)};
  transform: translateY(${({ $revealed }) => ($revealed ? 0 : '24px')});
  transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  transition-delay: ${({ $delay }) => $delay}s;

  &:hover {
    border-color: ${({ theme }) => theme.accent}55;
  }
`;

const Mark = styled.div`
  font-family: ${Basics.fonts.Display};
  font-size: 64px;
  line-height: 0.5;
  color: ${({ theme }) => theme.accent};
  font-style: italic;
  margin-bottom: 18px;
`;

const Quote = styled.blockquote`
  font-family: ${Basics.fonts.Display};
  font-size: 21px;
  line-height: 1.45;
  color: ${({ theme }) => theme.ink};
  font-weight: 400;
  margin: 0 0 22px;
`;

const Author = styled.figcaption`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Avatar = styled.div<{ $c: string }>`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: ${({ $c }) => $c};
  display: grid;
  place-items: center;
  color: #fff;
  font-family: ${Basics.fonts.Montserrat};
  font-weight: 600;
  font-size: 14px;
`;

const Who = styled.div`
  font-family: ${Basics.fonts.Montserrat};
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.ink};
`;

const Role = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.muted};
  letter-spacing: 0.05em;
`;

const quotes = [
  {
    q: 'They repainted our entire facade in two weeks — three years on, it still looks like the day they left. Worth every naira.',
    n: 'Adaeze O.',
    r: 'Homeowner · Lekki',
    c: '#C0502B',
  },
  {
    q: 'We use Zicli for every store rollout. Colour match is exact, and their on-site team is the most disciplined we have worked with.',
    n: 'Tunde A.',
    r: 'Retail Operations · Lagos',
    c: '#1F574F',
  },
  {
    q: 'Inesfly paint changed the conversation in our property. Less spraying, fewer mosquitos, and the finish is genuinely beautiful.',
    n: 'Mrs. Eze',
    r: 'Estate Manager · Ibeju-Lekki',
    c: '#E0A030',
  },
];

const Testimonials = () => {
  const { ref, revealed } = useReveal<HTMLDivElement>(0.1);
  return (
    <Section>
      <Top ref={ref as React.RefObject<HTMLDivElement>} $revealed={revealed}>
        <Kicker>Words from our clients</Kicker>
        <Title>
          Fifteen years. Thousands of walls. One <em>standard</em>.
        </Title>
      </Top>
      <Grid>
        {quotes.map((q, i) => (
          <Card key={q.n} $revealed={revealed} $delay={0.1 + i * 0.1}>
            <div>
              <Mark>"</Mark>
              <Quote>{q.q}</Quote>
            </div>
            <Author>
              <Avatar $c={q.c}>{q.n.charAt(0)}</Avatar>
              <div>
                <Who>{q.n}</Who>
                <Role>{q.r}</Role>
              </div>
            </Author>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Testimonials;
