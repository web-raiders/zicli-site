import React from 'react';
import { func } from 'prop-types';
import styled from 'styled-components';
import { Screen } from 'styles';
import { Brightness } from 'components/svg';

const Toggle = ({ toggleTheme }: any) => (
    <BrightnessContainer onClick={toggleTheme} >
      <Brightness />
    </BrightnessContainer>
);

Toggle.propTypes = {
  toggleTheme: func.isRequired,
};

export default Toggle;

const BrightnessContainer = styled.button`
  position: relative;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.25s ease;

  &:hover {
    background-color: ${({ theme }) => theme.color}15;
    transform: rotate(15deg);
  }

  svg {
    fill: ${({ theme }) => theme.button};
    width: 20px;
    height: 20px;
    transition: all 0.25s ease;
    ${Screen.miniTablet`
      width: 18px;
      height: 18px;
    `};
    ${Screen.largePhone`
      width: 16px;
      height: 16px;
    `};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.button}40;
    outline-offset: 2px;
  }
`;
