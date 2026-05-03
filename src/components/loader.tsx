import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from 'styles';

const LoaderContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`;

const LoaderText = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.color};
`;

const Loader = () => (
  <>
    <GlobalStyle />
    <LoaderContainer>
      <LoaderText>Loading...</LoaderText>
    </LoaderContainer>
  </>
);

export default Loader;
