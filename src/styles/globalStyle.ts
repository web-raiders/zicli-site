import { createGlobalStyle } from 'styled-components';
import { ITheme } from 'types';
import Basics from './basics';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,400&display=swap');

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
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
    color: ${({ theme }: ITheme) => theme.text};
    font-family: ${Basics.fonts.RadioCanada};
    font-size: 16px;
    line-height: 1.6;
  }

  h1, h2, h3, h4 {
    font-family: ${Basics.fonts.Display};
    color: ${({ theme }) => theme.ink};
    letter-spacing: -0.02em;
    line-height: 1.05;
    font-weight: 500;
    margin: 0;
  }

  h2 {
    letter-spacing: -0.015em;
    line-height: 1.1;
  }

  p {
    font-family: ${Basics.fonts.RadioCanada};
    color: ${({ theme }) => theme.text};
    line-height: 1.7;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.link};
    transition: ${Basics.transition};
    cursor: pointer;

    &:hover, &:focus {
      outline: 0;
    }
  }

  button {
    font-family: ${Basics.fonts.Montserrat};
  }

  ::selection {
    background: ${({ theme }) => theme.accent};
    color: #fff;
  }
`;

export default GlobalStyle;
