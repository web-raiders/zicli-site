import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Basics, Screen } from 'styles';

type Family = 'all' | 'neutrals' | 'earth' | 'warm' | 'green' | 'blue' | 'cool';

interface Chip { hex: string; name: string; family: Exclude<Family, 'all'>; }

const chips: Chip[] = [
  // Neutrals
  { hex: '#FFFFFF', name: 'Cloud White',     family: 'neutrals' },
  { hex: '#F8F4EC', name: 'Lagos Bone',      family: 'neutrals' },
  { hex: '#ECE5D7', name: 'Atlantic Chalk',  family: 'neutrals' },
  { hex: '#DDD3C0', name: 'Linen Drift',     family: 'neutrals' },
  { hex: '#C2BBA9', name: 'Stone Wash',      family: 'neutrals' },
  { hex: '#8C8579', name: 'Lagoon Stone',    family: 'neutrals' },
  { hex: '#5A554D', name: 'Slate Cocoa',     family: 'neutrals' },
  { hex: '#2A241D', name: 'Ironwood',        family: 'neutrals' },
  { hex: '#15110D', name: 'Midnight Ink',    family: 'neutrals' },

  // Earth
  { hex: '#EFD9B4', name: 'Cassava Cream',   family: 'earth' },
  { hex: '#D8B98F', name: 'Yaba Sand',       family: 'earth' },
  { hex: '#C09B6E', name: 'Savanna Wheat',   family: 'earth' },
  { hex: '#A87C4F', name: 'Mahogany Sun',    family: 'earth' },
  { hex: '#7E5634', name: 'Cocoa Pod',       family: 'earth' },
  { hex: '#5E3A23', name: 'Cocoa Earth',     family: 'earth' },
  { hex: '#3F2818', name: 'Burnt Bark',      family: 'earth' },

  // Warm (reds / oranges / golds)
  { hex: '#F9C28B', name: 'Peach Dusk',      family: 'warm' },
  { hex: '#F2A85C', name: 'Suya Glow',       family: 'warm' },
  { hex: '#E0A030', name: 'Harmattan Gold',  family: 'warm' },
  { hex: '#D87A2D', name: 'Mango Spice',     family: 'warm' },
  { hex: '#C0502B', name: 'Owambe Clay',     family: 'warm' },
  { hex: '#A23E5C', name: 'Hibiscus',        family: 'warm' },
  { hex: '#8B2A1D', name: 'Sahel Brick',     family: 'warm' },
  { hex: '#5C1414', name: 'Palm Wine',       family: 'warm' },
  { hex: '#E27D8A', name: 'Coral Bloom',     family: 'warm' },

  // Greens
  { hex: '#E6EFD3', name: 'Banana Leaf',     family: 'green' },
  { hex: '#BDD09D', name: 'Cassava Field',   family: 'green' },
  { hex: '#7BB0A6', name: 'Kano Mint',       family: 'green' },
  { hex: '#4A8A78', name: 'Lagos Lagoon',    family: 'green' },
  { hex: '#1F574F', name: 'Niger Pine',      family: 'green' },
  { hex: '#0F3B34', name: 'Forest Inkwell',  family: 'green' },
  { hex: '#7E8C45', name: 'Plantain Olive',  family: 'green' },

  // Blues
  { hex: '#D7E4F0', name: 'Morning Sky',     family: 'blue' },
  { hex: '#9CB6D6', name: 'Harbour Mist',    family: 'blue' },
  { hex: '#5C7BB8', name: 'Harbour Blue',    family: 'blue' },
  { hex: '#2A4F7A', name: 'Lagoon Deep',     family: 'blue' },
  { hex: '#16314F', name: 'Atlantic Ink',    family: 'blue' },
  { hex: '#0B1A2D', name: 'Midnight Tide',   family: 'blue' },
  { hex: '#5E8FA8', name: 'Indigo Drift',    family: 'blue' },

  // Cool (purples / greys / mints)
  { hex: '#C9D5DD', name: 'Morning Mist',    family: 'cool' },
  { hex: '#B5B3C8', name: 'Soft Lavender',   family: 'cool' },
  { hex: '#8E7CC3', name: 'Velvet Iris',     family: 'cool' },
  { hex: '#5E4B83', name: 'Midnight Plum',   family: 'cool' },
  { hex: '#3A2D52', name: 'Royal Mauve',     family: 'cool' },
  { hex: '#D3CFC4', name: 'Pebble Grey',     family: 'cool' },
  { hex: '#6E6A66', name: 'Granite Cool',    family: 'cool' },
];

const Top = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

const Lede = styled.p`
  font-family: ${Basics.fonts.Display};
  font-size: clamp(22px, 2.6vw, 30px);
  line-height: 1.3;
  color: ${({ theme }) => theme.ink};
  font-style: italic;
  font-weight: 400;
  margin: 0;
  max-width: 560px;
`;

const Search = styled.input`
  padding: 12px 18px;
  border: 1px solid ${({ theme }) => theme.line};
  background: ${({ theme }) => theme.surface};
  border-radius: 999px;
  font-family: ${Basics.fonts.RadioCanada};
  font-size: 14px;
  color: ${({ theme }) => theme.ink};
  width: 260px;
  outline: none;
  &:focus { border-color: ${({ theme }) => theme.accent}; }
`;

const Filters = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 28px;
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
  &:hover { border-color: ${({ theme }) => theme.ink}; }
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 32px;
  align-items: start;
  ${Screen.tablet`
    grid-template-columns: 1fr;
  `};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(78px, 1fr));
  gap: 10px;
  align-content: start;
`;

const Sw = styled.button<{ $c: string; $active: boolean }>`
  position: relative;
  aspect-ratio: 1 / 1.05;
  border-radius: 12px;
  background: ${({ $c }) => $c};
  border: none;
  cursor: pointer;
  padding: 0;
  transition: transform 0.25s ease;
  box-shadow:
    inset 0 0 0 1px rgba(0, 0, 0, 0.06),
    ${({ $active, theme }) => ($active ? `0 0 0 2px ${theme.ink}` : '0 0 0 0 transparent')};
  &:hover { transform: translateY(-3px); }
  &:after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.15);
    pointer-events: none;
  }
`;

const PreviewWrap = styled.div`
  position: sticky;
  top: 90px;
  align-self: start;
  ${Screen.tablet`
    position: static;
  `};
`;

const Preview = styled.div<{ $c: string }>`
  border-radius: 20px;
  background: ${({ $c }) => $c};
  min-height: 320px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: background 0.5s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 24px 60px ${({ theme }) => theme.shadow};

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 75% 20%, rgba(255,255,255,0.22), transparent 55%),
      radial-gradient(circle at 20% 90%, rgba(0,0,0,0.15), transparent 55%);
    pointer-events: none;
  }
`;

const PreviewMeta = styled.div`
  position: relative;
  color: rgba(255,255,255,0.95);
  mix-blend-mode: difference;
`;

const PName = styled.div`
  font-family: ${Basics.fonts.Display};
  font-size: 38px;
  line-height: 1;
  font-weight: 400;
`;

const PHex = styled.div`
  font-family: monospace;
  font-size: 13px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-top: 10px;
  opacity: 0.85;
`;

const PFam = styled.div`
  font-family: ${Basics.fonts.Montserrat};
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  margin-top: 6px;
  opacity: 0.7;
`;

const Hint = styled.div`
  color: ${({ theme }) => theme.muted};
  font-size: 13px;
  line-height: 1.6;
  margin-top: 22px;
`;

const filters: { id: Family; label: string }[] = [
  { id: 'all',      label: 'All' },
  { id: 'neutrals', label: 'Neutrals' },
  { id: 'earth',    label: 'Earth' },
  { id: 'warm',     label: 'Warm' },
  { id: 'green',    label: 'Greens' },
  { id: 'blue',     label: 'Blues' },
  { id: 'cool',     label: 'Cool' },
];

const familyLabel = (f: Family) => filters.find((x) => x.id === f)?.label ?? '';

const ChartOverlay = () => {
  const [family, setFamily] = useState<Family>('all');
  const [q, setQ] = useState('');
  const [active, setActive] = useState<Chip>(chips[18]);

  const list = useMemo(() => {
    const byFam = family === 'all' ? chips : chips.filter((c) => c.family === family);
    if (!q.trim()) return byFam;
    const k = q.trim().toLowerCase();
    return byFam.filter((c) => c.name.toLowerCase().includes(k) || c.hex.toLowerCase().includes(k));
  }, [family, q]);

  return (
    <>
      <Top>
        <Lede>
          Sixty signature Zicli tones — drawn from Nigerian light,
          landscape and craft. Pick a family, search by name, or just browse.
        </Lede>
        <Search
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search colour or hex…"
        />
      </Top>

      <Filters>
        {filters.map((f) => (
          <Pill key={f.id} $active={family === f.id} onClick={() => setFamily(f.id)}>
            {f.label}
          </Pill>
        ))}
      </Filters>

      <Layout>
        <Grid>
          {list.map((c) => (
            <Sw
              key={c.hex + c.name}
              $c={c.hex}
              $active={active.hex === c.hex && active.name === c.name}
              onClick={() => setActive(c)}
              aria-label={c.name}
              title={`${c.name} · ${c.hex}`}
            />
          ))}
          {list.length === 0 && <Hint>No colours match that search.</Hint>}
        </Grid>

        <PreviewWrap>
          <Preview $c={active.hex}>
            <PreviewMeta>
              <PFam>{familyLabel(active.family)}</PFam>
            </PreviewMeta>
            <PreviewMeta>
              <PName>{active.name}</PName>
              <PHex>{active.hex}</PHex>
            </PreviewMeta>
          </Preview>
          <Hint>
            Every Zicli colour is matched in-house and tested on site. Mention
            the name when you enquire and we’ll mix it for you.
          </Hint>
        </PreviewWrap>
      </Layout>
    </>
  );
};

export default ChartOverlay;
