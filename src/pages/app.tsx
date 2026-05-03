import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle } from 'styles';
import {
  Nav,
  Hero,
  About,
  Contact,
} from 'components';

const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
`;

const App = ({ toggleTheme }: any) => {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <AppContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Zicli - {activeSection === 'home' ? 'Home' : activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</title>
        <meta name="description" content="Zicli" />
      </Helmet>
      <GlobalStyle />
      <Nav
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <Content>
        {renderContent()}
      </Content>
    </AppContainer>
  );
};

export default App;
