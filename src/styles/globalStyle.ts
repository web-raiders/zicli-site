import { createGlobalStyle } from 'styled-components';
import { ITheme } from 'types';
import Basics from './basics';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,500;0,700;1,400&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Radio+Canada:wght@300;500;600;700&display=swap');

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }: ITheme) => theme.body};
    font-family: ${Basics.fonts.RadioCanada};
    font-size: 16px;
    line-height: 1.6;
  }

  h1 {
    font-family: ${Basics.fonts.Montserrat};
    color: ${({ theme }) => theme.color};
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  h2 {
    font-family: ${Basics.fonts.Montserrat};
    font-weight: 600;
    color: ${({ theme }) => theme.subtitle};
    letter-spacing: -0.01em;
    line-height: 1.2;
  }

  h3 {
    font-family: ${Basics.fonts.Montserrat};
    color: ${({ theme }) => theme.color};
    letter-spacing: -0.01em;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: ${({ theme }) => theme.link};
    position: relative;
    transition: ${Basics.transition};
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.link};
      outline: 0;
      &:after {
        width: 100%;
      }
    }
  }

  p {
    font-family: ${Basics.fonts.RadioCanada};
    color: ${({ theme }) => theme.color};
    word-spacing: 1px;
    line-height: 1.75;
  }
`;

export default GlobalStyle;
