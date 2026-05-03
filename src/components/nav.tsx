import React from 'react';
import styled from 'styled-components';
import { Screen, Basics } from 'styles';
import { Toggle } from 'utils';

const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 28px 20px;
  z-index: 1000;
  pointer-events: none;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 8px;
  border: 1px solid ${({ theme }) => theme.color}18;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.body}ee;
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
  pointer-events: auto;
  ${Screen.largePhone`
    padding: 8px 6px;
  `};
`;

const NavLink = styled.button<{ active?: boolean }>`
  background: none;
  border: none;
  font-size: 13px;
  font-family: ${Basics.fonts.Montserrat};
  color: ${({ theme, active }) => active ? theme.link : theme.text};
  cursor: pointer;
  padding: 8px 20px;
  border-radius: 6px;
  transition: all 0.2s ease;
  font-weight: ${({ active }) => active ? '600' : '500'};
  letter-spacing: 0.04em;
  text-transform: uppercase;

  &:hover {
    color: ${({ theme }) => theme.link};
    background-color: ${({ theme }) => theme.color}08;
  }

  ${Screen.largePhone`
    font-size: 11px;
    padding: 6px 14px;
  `};
`;

const ThemeToggleContainer = styled.div`
  margin-left: 12px;
  ${Screen.largePhone`
    margin-left: 6px;
  `};
`;

interface NavProps {
  toggleTheme: () => void;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Nav = ({ toggleTheme, activeSection, onSectionChange }: NavProps) => (
    <NavWrapper>
        <NavContainer>
            <NavLink
              active={activeSection === 'home'}
              onClick={() => onSectionChange('home')}
            >
              Home
            </NavLink>
            <NavLink
              active={activeSection === 'about'}
              onClick={() => onSectionChange('about')}
            >
              About
            </NavLink>
            <NavLink
              active={activeSection === 'contact'}
              onClick={() => onSectionChange('contact')}
            >
              Contact
            </NavLink>
            <ThemeToggleContainer>
                <Toggle toggleTheme={toggleTheme} />
            </ThemeToggleContainer>
        </NavContainer>
    </NavWrapper>
);

export default Nav;
