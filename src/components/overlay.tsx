import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Basics, Screen } from 'styles';

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.inverse}cc;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 2000;
  animation: ${fadeIn} 0.4s ease both;
  overflow-y: auto;
`;

const Sheet = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 60px auto;
  background: ${({ theme }) => theme.body};
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 60px 120px rgba(0, 0, 0, 0.45);
  animation: ${slideUp} 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) both;

  ${Screen.tablet`
    margin: 20px;
    border-radius: 20px;
  `};
`;

const Bar = styled.div`
  position: sticky;
  top: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 32px;
  background: ${({ theme }) => theme.body}f2;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.line};

  ${Screen.largePhone`
    padding: 16px 18px;
  `};
`;

const Title = styled.div`
  font-family: ${Basics.fonts.Display};
  font-size: 24px;
  color: ${({ theme }) => theme.ink};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;

  &:before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ theme }) => theme.accent};
  }
`;

const Close = styled.button`
  background: ${({ theme }) => theme.ink};
  color: ${({ theme }) => theme.body};
  border: none;
  border-radius: 999px;
  padding: 10px 18px;
  font-family: ${Basics.fonts.Montserrat};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  cursor: pointer;
  transition: ${Basics.transition};
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: ${({ theme }) => theme.accent};
    color: #fff;
  }

  &:after { content: '×'; font-size: 18px; line-height: 0; }
`;

const Body = styled.div`
  padding: 40px 36px 56px;
  ${Screen.largePhone`
    padding: 28px 20px 40px;
  `};
`;

interface OverlayProps {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Overlay = ({ open, title, onClose, children }: OverlayProps) => {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <Backdrop onClick={onClose}>
      <Sheet onClick={(e) => e.stopPropagation()}>
        <Bar>
          <Title>{title}</Title>
          <Close onClick={onClose}>Close</Close>
        </Bar>
        <Body>{children}</Body>
      </Sheet>
    </Backdrop>
  );
};

export default Overlay;
