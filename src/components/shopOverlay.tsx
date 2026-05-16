import React, { useState } from 'react';
import styled from 'styled-components';
import { Basics, Screen } from 'styles';

const Intro = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 32px;
  align-items: end;
  margin-bottom: 36px;
  ${Screen.tablet`
    grid-template-columns: 1fr;
  `};
`;

const Lede = styled.p`
  font-family: ${Basics.fonts.Display};
  font-size: clamp(22px, 2.6vw, 30px);
  line-height: 1.3;
  color: ${({ theme }) => theme.ink};
  font-style: italic;
  font-weight: 400;
  margin: 0;
`;

const Hint = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.muted};
  max-width: 360px;
`;

const Filters = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.line};
`;

const Pill = styled.button<{ $active: boolean }>`
  background: ${({ theme, $active }) => ($active ? theme.ink : 'transparent')};
  color: ${({ theme, $active }) => ($active ? theme.body : theme.ink)};
  border: 1px solid ${({ theme, $active }) => ($active ? theme.ink : theme.line)};
  padding: 10px 18px;
  border-radius: 999px;
  font-family: ${Basics.fonts.Montserrat};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  cursor: pointer;
  transition: ${Basics.transition};

  &:hover {
    border-color: ${({ theme }) => theme.ink};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  ${Screen.pad`
    grid-template-columns: repeat(2, 1fr);
  `};
  ${Screen.largePhone`
    grid-template-columns: 1fr;
  `};
`;

const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.line};
  border-radius: 22px;
  background: ${({ theme }) => theme.surface};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 56px ${({ theme }) => theme.shadow};
  }
`;

const Visual = styled.div<{ $bg: string }>`
  position: relative;
  height: 220px;
  background: ${({ $bg }) => $bg};
  display: grid;
  place-items: center;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 70% 25%, rgba(255,255,255,0.22), transparent 60%);
    pointer-events: none;
  }
`;

const Can = styled.svg`
  width: 130px;
  height: 160px;
  filter: drop-shadow(0 18px 30px rgba(0,0,0,0.35));
`;

const Tag = styled.span`
  position: absolute;
  top: 16px;
  left: 16px;
  font-family: monospace;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  background: rgba(0,0,0,0.32);
  color: #F8F4EC;
  padding: 6px 10px;
  border-radius: 999px;
  backdrop-filter: blur(6px);
`;

const Info = styled.div`
  padding: 22px 22px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

const TopLine = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
`;

const Name = styled.h3`
  font-size: 20px;
  color: ${({ theme }) => theme.ink};
  font-weight: 500;
  margin: 0;
`;

const Price = styled.div`
  font-family: ${Basics.fonts.Montserrat};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.accent};
  white-space: nowrap;
`;

const Desc = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.muted};
  line-height: 1.6;
  margin: 0;
`;

const Variants = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;

const Variant = styled.span`
  font-family: ${Basics.fonts.Montserrat};
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 4px 9px;
  border: 1px solid ${({ theme }) => theme.line};
  border-radius: 999px;
  color: ${({ theme }) => theme.muted};
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 6px;
`;

const Enquire = styled.button`
  flex: 1;
  background: ${({ theme }) => theme.ink};
  color: ${({ theme }) => theme.body};
  border: none;
  padding: 12px 16px;
  border-radius: 999px;
  font-family: ${Basics.fonts.Montserrat};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  cursor: pointer;
  transition: ${Basics.transition};
  &:hover { background: ${({ theme }) => theme.accent}; color: #fff; }
`;

const Whats = styled.a`
  background: transparent;
  color: ${({ theme }) => theme.ink};
  border: 1px solid ${({ theme }) => theme.line};
  padding: 12px 16px;
  border-radius: 999px;
  font-family: ${Basics.fonts.Montserrat};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  &:hover { border-color: ${({ theme }) => theme.ink}; }
`;

const PaintCan = ({ color }: { color: string }) => (
  <Can viewBox="0 0 130 160" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="65" cy="22" rx="48" ry="10" fill="#15110D" opacity="0.85" />
    <ellipse cx="65" cy="20" rx="48" ry="10" fill="#2A241D" />
    <ellipse cx="65" cy="18" rx="48" ry="10" fill="#3D352B" />
    <rect x="17" y="18" width="96" height="120" fill={color} />
    <rect x="17" y="18" width="96" height="120" fill="url(#shine)" opacity="0.18" />
    <ellipse cx="65" cy="138" rx="48" ry="10" fill="rgba(0,0,0,0.35)" />
    <rect x="35" y="58" width="60" height="46" fill="#F8F4EC" opacity="0.92" />
    <rect x="35" y="58" width="60" height="14" fill={color} opacity="0.9" />
    <path d="M 10 18 Q 14 6 26 12" stroke="#15110D" strokeWidth="3" fill="none" />
    <path d="M 120 18 Q 116 6 104 12" stroke="#15110D" strokeWidth="3" fill="none" />
    <defs>
      <linearGradient id="shine" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#fff" stopOpacity="0.6" />
        <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
        <stop offset="1" stopColor="#000" stopOpacity="0.3" />
      </linearGradient>
    </defs>
  </Can>
);

type Cat = 'all' | 'ink' | 'spray' | 'digital' | 'inesfly' | 'care';

interface Product {
  cat: Exclude<Cat, 'all'>;
  tag: string;
  name: string;
  desc: string;
  price: string;
  variants: string[];
  color: string;
  bg: string;
}

const products: Product[] = [
  { cat: 'ink',     tag: 'Ink Matte',     name: 'Zicli Velvet Matte', desc: 'Smooth matte emulsion for living areas. Wipeable, low-odour.',          price: 'From ₦12,500', variants: ['4L', '20L', 'Matte'], color: '#3D352B', bg: 'linear-gradient(135deg,#15110D,#3D352B)' },
  { cat: 'ink',     tag: 'Ink Satin',     name: 'Zicli Silk Satin',   desc: 'Subtle sheen for hallways and feature walls. Easy to clean.',           price: 'From ₦14,000', variants: ['4L', '20L', 'Satin'], color: '#C0502B', bg: 'linear-gradient(135deg,#C0502B,#E0A030)' },
  { cat: 'spray',   tag: 'Spray',         name: 'Zicli Spray Exterior', desc: 'Weather-grade aerosol for metal, wood and detail work.',              price: 'From ₦4,500',  variants: ['400ml', 'Gloss', 'Matte'], color: '#1F574F', bg: 'linear-gradient(135deg,#1F574F,#7BB0A6)' },
  { cat: 'spray',   tag: 'Spray',         name: 'Zicli Spray Auto',     desc: 'High-build automotive finish. UV-stable, fast-curing.',               price: 'From ₦5,200',  variants: ['400ml', 'Metallic'], color: '#15110D', bg: 'linear-gradient(135deg,#3D352B,#15110D)' },
  { cat: 'digital', tag: 'Digital',       name: 'Zicli Digital Ink',    desc: 'Vivid pigment for signage, murals and large-format brand walls.',     price: 'From ₦8,000',  variants: ['1L', '5L', '10L'], color: '#E0A030', bg: 'linear-gradient(135deg,#E0A030,#C0502B)' },
  { cat: 'inesfly', tag: 'Inesfly',       name: 'Inesfly Insecticide Paint', desc: 'WHO-recognised insecticide paint. Repels mosquitoes for years.',  price: 'From ₦22,000', variants: ['4L', '20L', 'White'], color: '#F8F4EC', bg: 'linear-gradient(135deg,#E0A030,#F8F4EC)' },
  { cat: 'inesfly', tag: 'Inesfly',       name: 'Inesfly Tintable Base',     desc: 'White base, tintable to any Zicli colour. Same insecticide power.', price: 'From ₦24,500', variants: ['4L', '20L'],         color: '#ECE5D7', bg: 'linear-gradient(135deg,#7BB0A6,#F8F4EC)' },
  { cat: 'care',    tag: 'Floor Care',    name: 'Inesfly Floor Cleaner', desc: 'Concentrated, residue-free cleaner. Pairs with our paint and tiles.', price: 'From ₦6,000',  variants: ['1L', '5L'],          color: '#7BB0A6', bg: 'linear-gradient(135deg,#1F574F,#7BB0A6)' },
  { cat: 'care',    tag: 'Maintenance',   name: 'Zicli Wall Wash',        desc: 'Gentle wall cleaner that protects matte and silk finishes.',        price: 'From ₦4,800',  variants: ['1L', '5L'],          color: '#5C7BB8', bg: 'linear-gradient(135deg,#2A4F7A,#5C7BB8)' },
];

const filters: { id: Cat; label: string }[] = [
  { id: 'all',     label: 'All Products' },
  { id: 'ink',     label: 'Ink Paint' },
  { id: 'spray',   label: 'Spray Paint' },
  { id: 'digital', label: 'Digital' },
  { id: 'inesfly', label: 'Inesfly' },
  { id: 'care',    label: 'Care' },
];

const waMsg = (name: string) =>
  `https://wa.me/2348163283624?text=${encodeURIComponent(`Hi Zicli, I'd like to enquire about "${name}".`)}`;

interface Props { onClose: () => void; }

const ShopOverlay = ({ onClose }: Props) => {
  const [cat, setCat] = useState<Cat>('all');
  const list = cat === 'all' ? products : products.filter((p) => p.cat === cat);

  const toContact = () => {
    onClose();
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 350);
  };

  return (
    <>
      <Intro>
        <Lede>
          Browse the Zicli shelf — paints, sprays and care products available
          through our Lagos showroom and trusted dealers.
        </Lede>
        <Hint>
          Prices are indicative and vary by sheen and finish. Tap “Enquire” to
          get a final quote and arrange delivery.
        </Hint>
      </Intro>

      <Filters>
        {filters.map((f) => (
          <Pill key={f.id} $active={cat === f.id} onClick={() => setCat(f.id)}>
            {f.label}
          </Pill>
        ))}
      </Filters>

      <Grid>
        {list.map((p) => (
          <Card key={p.name}>
            <Visual $bg={p.bg}>
              <Tag>{p.tag}</Tag>
              <PaintCan color={p.color} />
            </Visual>
            <Info>
              <TopLine>
                <Name>{p.name}</Name>
                <Price>{p.price}</Price>
              </TopLine>
              <Desc>{p.desc}</Desc>
              <Variants>
                {p.variants.map((v) => <Variant key={v}>{v}</Variant>)}
              </Variants>
              <Actions>
                <Enquire onClick={toContact}>Enquire</Enquire>
                <Whats href={waMsg(p.name)} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </Whats>
              </Actions>
            </Info>
          </Card>
        ))}
      </Grid>
    </>
  );
};

export default ShopOverlay;
