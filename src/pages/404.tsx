import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle, Basics } from 'styles';
import { Nav, Footer } from 'components';

const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Stage = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 160px 24px 80px;
  text-align: center;
`;

const Big = styled.div`
  font-family: ${Basics.fonts.Display};
  font-size: clamp(120px, 22vw, 240px);
  line-height: 1;
  color: ${({ theme }) => theme.ink};
  font-style: italic;
  font-weight: 400;
  span { color: ${({ theme }) => theme.accent}; }
`;

const Tag = styled.p`
  font-family: ${Basics.fonts.Montserrat};
  font-size: 12px;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.muted};
  margin-top: 16px;
`;

const Back = styled.a`
  display: inline-block;
  margin-top: 36px;
  padding: 14px 26px;
  border-radius: 999px;
  background: ${({ theme }) => theme.ink};
  color: ${({ theme }) => theme.body};
  font-family: ${Basics.fonts.Montserrat};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  &:hover { background: ${({ theme }) => theme.accent}; color: #fff; }
`;

const App = ({ toggleTheme }: any) => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <PageContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404 — Zicli Synergy</title>
      </Helmet>
      <GlobalStyle />
      <Nav
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <Stage>
        <Big>4<span>0</span>4</Big>
        <Tag>This wall doesn't exist — yet.</Tag>
        <Back href="/">Back to Home</Back>
      </Stage>
      <Footer />
    </PageContainer>
  );
};

export default App;
