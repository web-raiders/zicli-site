import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle } from 'styles';
import {
  Nav,
  Hero,
  About,
  Products,
  Why,
  Projects,
  Palette,
  Testimonials,
  Shop,
  Contact,
  Footer,
  Overlay,
  ShopOverlay,
  ChartOverlay,
} from 'components';

const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
`;

const sectionIds = ['home', 'products', 'why', 'projects', 'palette', 'shop', 'contact'];

type Modal = null | 'shop' | 'chart';

const App = ({ toggleTheme }: any) => {
  const [activeSection, setActiveSection] = useState('home');
  const [modal, setModal] = useState<Modal>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting && e.intersectionRatio > 0.3) {
              setActiveSection(id);
            }
          });
        },
        { threshold: [0.3, 0.6] },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <AppContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Zicli Synergy — Premium paint for Nigerian homes & brands</title>
        <meta
          name="description"
          content="Zicli Synergy Limited — premium paint, restoration and Inesfly insecticide paint, manufactured in Lagos for Nigerian homes and businesses."
        />
        <meta name="theme-color" content="#F8F4EC" />
      </Helmet>
      <GlobalStyle />
      <Nav
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <Content>
        <Hero />
        <About />
        <Products />
        <Why />
        <Projects />
        <Palette onOpenChart={() => setModal('chart')} />
        <Testimonials />
        <Shop onOpen={() => setModal('shop')} />
        <Contact />
      </Content>
      <Footer />

      <Overlay
        open={modal === 'shop'}
        title="Zicli Shop"
        onClose={() => setModal(null)}
      >
        <ShopOverlay onClose={() => setModal(null)} />
      </Overlay>

      <Overlay
        open={modal === 'chart'}
        title="Colour Chart"
        onClose={() => setModal(null)}
      >
        <ChartOverlay />
      </Overlay>
    </AppContainer>
  );
};

export default App;
