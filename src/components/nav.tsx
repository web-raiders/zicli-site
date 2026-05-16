import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Screen, Basics } from 'styles';
import { Toggle } from 'utils';

const NavWrapper = styled.div<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: ${({ $scrolled }) => ($scrolled ? '14px 20px' : '24px 20px')};
  z-index: 1000;
  pointer-events: none;
  transition: padding 0.3s ease;
`;

const NavContainer = styled.div<{ $scrolled: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 8px 8px 22px;
  border: 1px solid ${({ theme }) => theme.line};
  border-radius: 999px;
  background-color: ${({ theme, $scrolled }) =>
    $scrolled ? `${theme.body}f2` : `${theme.body}cc`};
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 10px 30px ${({ theme, $scrolled }) =>
    $scrolled ? theme.shadow : 'transparent'};
  transition: all 0.3s ease;
  pointer-events: auto;

  ${Screen.tablet`
    padding: 6px 6px 6px 14px;
  `};
`;

const Brand = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${Basics.fonts.Display};
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.ink};
  padding: 0 14px 0 0;
  margin-right: 6px;
  border-right: 1px solid ${({ theme }) => theme.line};
  display: flex;
  align-items: center;
  gap: 8px;

  &:before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ theme }) => theme.accent};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.accent}22;
  }
`;

const LinkRow = styled.div`
  display: flex;
  align-items: center;
  ${Screen.tablet`
    display: none;
  `};
`;

const NavLink = styled.button<{ $active?: boolean }>`
  background: none;
  border: none;
  font-size: 12px;
  font-family: ${Basics.fonts.Montserrat};
  color: ${({ theme, $active }) => ($active ? theme.ink : theme.muted)};
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 999px;
  transition: all 0.2s ease;
  font-weight: ${({ $active }) => ($active ? '600' : '500')};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.ink};
  }

  ${({ $active, theme }) =>
    $active &&
    `
    &:after {
      content: '';
      position: absolute;
      bottom: 4px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: ${theme.accent};
    }
  `}
`;

const CTA = styled.button`
  background: ${({ theme }) => theme.ink};
  color: ${({ theme }) => theme.body};
  border: none;
  padding: 10px 20px;
  border-radius: 999px;
  font-family: ${Basics.fonts.Montserrat};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  margin-left: 6px;
  transition: ${Basics.transition};

  &:hover {
    background: ${({ theme }) => theme.accent};
    color: #fff;
  }

  ${Screen.tablet`
    display: none;
  `};
`;

const ThemeToggleContainer = styled.div`
  margin-left: 8px;
  display: flex;
  align-items: center;
`;

const MobileToggle = styled.button`
  display: none;
  background: ${({ theme }) => theme.ink};
  color: ${({ theme }) => theme.body};
  border: none;
  border-radius: 999px;
  padding: 8px 14px;
  font-family: ${Basics.fonts.Montserrat};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  margin-left: 6px;

  ${Screen.tablet`
    display: inline-flex;
  `};
`;

const MobileSheet = styled.div<{ $open: boolean }>`
  display: none;
  ${Screen.tablet`
    display: ${({ $open }: { $open: boolean }) => ($open ? 'flex' : 'none')};
  `};
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.body};
  z-index: 999;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 100px 24px 40px;
`;

const MobileLink = styled.button`
  background: none;
  border: none;
  font-family: ${Basics.fonts.Display};
  font-size: 32px;
  color: ${({ theme }) => theme.ink};
  cursor: pointer;
  padding: 8px 0;
`;

interface NavProps {
  toggleTheme: () => void;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const links: Array<{ id: string; label: string }> = [
  { id: 'home', label: 'Home' },
  { id: 'products', label: 'Products' },
  { id: 'why', label: 'Why Zicli' },
  { id: 'projects', label: 'Projects' },
  { id: 'palette', label: 'Colours' },
  { id: 'contact', label: 'Contact' },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Nav = ({ toggleTheme, activeSection, onSectionChange }: NavProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    onSectionChange(id);
    setOpen(false);
    scrollTo(id);
  };

  return (
    <>
      <NavWrapper $scrolled={scrolled}>
        <NavContainer $scrolled={scrolled}>
          <Brand onClick={() => go('home')}>Zicli</Brand>
          <LinkRow>
            {links.slice(1).map((l) => (
              <NavLink
                key={l.id}
                $active={activeSection === l.id}
                onClick={() => go(l.id)}
              >
                {l.label}
              </NavLink>
            ))}
          </LinkRow>
          <CTA onClick={() => go('contact')}>Get a Quote</CTA>
          <ThemeToggleContainer>
            <Toggle toggleTheme={toggleTheme} />
          </ThemeToggleContainer>
          <MobileToggle onClick={() => setOpen((o) => !o)}>
            {open ? 'Close' : 'Menu'}
          </MobileToggle>
        </NavContainer>
      </NavWrapper>
      <MobileSheet $open={open}>
        {links.map((l) => (
          <MobileLink key={l.id} onClick={() => go(l.id)}>
            {l.label}
          </MobileLink>
        ))}
      </MobileSheet>
    </>
  );
};

export default Nav;
