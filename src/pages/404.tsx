import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle, Screen, Basics } from 'styles';
import { Nav } from 'components';

const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BodyText = styled.h2`
  margin-top: 300px;
  text-align: center;
  font-weight: 800;
  font-size: 40px;
  line-height: 80px;
  ${Screen.miniTablet`
    font-size: ${Basics.fontSize.large};
  `};
  font-family: ${Basics.fonts.RadioCanada};
  color: ${({ theme }) => theme.logo};
  ${Screen.largePhone`
    margin-top: 200px;
  `};
`;

const App = ({ toggleTheme }: any) => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <PageContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404 - Zicli</title>
      </Helmet>
      <GlobalStyle />
      <Nav
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <BodyText>
        404
      </BodyText>
    </PageContainer>
  );
};

export default App;
