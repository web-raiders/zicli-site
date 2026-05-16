import React from 'react';
import styled from 'styled-components';
import { Basics, Screen } from 'styles';

const Wrap = styled.footer`
  padding: 80px 32px 40px;
  background: ${({ theme }) => theme.inverse};
  color: ${({ theme }) => theme.onInverse};
  ${Screen.largePhone`
    padding: 64px 20px 32px;
  `};
`;

const Inner = styled.div`
  max-width: ${Basics.maxWidth};
  margin: 0 auto;
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 56px;
  border-bottom: 1px solid ${({ theme }) => theme.inverseLine};
  ${Screen.tablet`
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  `};
  ${Screen.largePhone`
    grid-template-columns: 1fr;
  `};
`;

const Brand = styled.div`
  font-family: ${Basics.fonts.Display};
  font-size: 32px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  &:before {
    content: '';
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: ${({ theme }) => theme.accent};
  }
`;

const Blurb = styled.p`
  color: ${({ theme }) => theme.onInverseMuted};
  font-size: 14px;
  line-height: 1.7;
  max-width: 320px;
`;

const Col = styled.div``;

const ColTitle = styled.div`
  font-family: ${Basics.fonts.Montserrat};
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.accent3};
  margin-bottom: 18px;
`;

const ColLink = styled.a`
  display: block;
  font-size: 14px;
  color: ${({ theme }) => theme.onInverseMuted};
  padding: 6px 0;
  cursor: pointer;
  &:hover { color: ${({ theme }) => theme.onInverse}; }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 32px;
  font-family: ${Basics.fonts.Montserrat};
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.onInverseMuted};
  gap: 16px;
  flex-wrap: wrap;
`;

const Credit = styled.a`
  color: ${({ theme }) => theme.onInverseMuted};
  &:hover { color: ${({ theme }) => theme.accent3}; }
`;

const scrollTo = (id: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Footer = () => (
  <Wrap>
    <Inner>
      <Top>
        <div>
          <Brand>Zicli</Brand>
          <Blurb>
            Zicli Synergy Limited — premium paint, restoration and Inesfly
            insecticide paint, made for Nigerian homes and businesses.
          </Blurb>
        </div>

        <Col>
          <ColTitle>Explore</ColTitle>
          <ColLink onClick={scrollTo('products')}>Products</ColLink>
          <ColLink onClick={scrollTo('why')}>Why Zicli</ColLink>
          <ColLink onClick={scrollTo('projects')}>Projects</ColLink>
          <ColLink onClick={scrollTo('palette')}>Colour Chart</ColLink>
        </Col>

        <Col>
          <ColTitle>Company</ColTitle>
          <ColLink onClick={scrollTo('contact')}>Contact</ColLink>
          <ColLink href="http://www.inesflyafrica.com.ng/" target="_blank" rel="noopener noreferrer">
            Inesfly Africa
          </ColLink>
          <ColLink href="mailto:info@ziclysynergy.com">Wholesale</ColLink>
        </Col>

        <Col>
          <ColTitle>Follow</ColTitle>
          <ColLink href="https://www.facebook.com/profile.php?id=100008470699504" target="_blank" rel="noopener noreferrer">
            Facebook
          </ColLink>
          <ColLink href="https://twitter.com/inesflynigeria" target="_blank" rel="noopener noreferrer">
            Twitter
          </ColLink>
          <ColLink href="https://ng.linkedin.com/in/inesflynigeria" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </ColLink>
        </Col>
      </Top>

      <Bottom>
        <div>© {new Date().getFullYear()} Zicli Synergy Limited</div>
        <Credit href="https://webraiders.co" target="_blank" rel="noopener noreferrer">
          By Web Raiders Studio
        </Credit>
      </Bottom>
    </Inner>
  </Wrap>
);

export default Footer;
