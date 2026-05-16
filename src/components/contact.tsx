import React, { useState } from 'react';
import styled from 'styled-components';
import { Basics, Screen } from 'styles';
import { useReveal } from 'utils';

const Section = styled.section`
  padding: 140px 32px;
  background: ${({ theme }) => theme.sand};
  position: relative;
  overflow: hidden;
  ${Screen.largePhone`
    padding: 100px 20px;
  `};
`;

const Inner = styled.div`
  max-width: ${Basics.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 64px;
  align-items: start;
  ${Screen.tablet`
    grid-template-columns: 1fr;
    gap: 48px;
  `};
`;

const Left = styled.div<{ $revealed: boolean }>`
  opacity: ${({ $revealed }) => ($revealed ? 1 : 0)};
  transform: translateY(${({ $revealed }) => ($revealed ? 0 : '20px')});
  transition: all 0.9s cubic-bezier(0.2, 0.8, 0.2, 1);
`;

const Kicker = styled.div`
  font-family: ${Basics.fonts.Montserrat};
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 18px;
`;

const Title = styled.h2`
  font-size: clamp(40px, 5.4vw, 72px);
  color: ${({ theme }) => theme.ink};
  margin-bottom: 18px;
  font-weight: 400;
  em { font-style: italic; color: ${({ theme }) => theme.accent}; }
`;

const Sub = styled.p`
  font-size: 17px;
  color: ${({ theme }) => theme.muted};
  max-width: 480px;
  margin-bottom: 36px;
`;

const InfoBlock = styled.div`
  border-top: 1px solid ${({ theme }) => theme.line};
  padding: 20px 0;
`;

const InfoLabel = styled.div`
  font-family: ${Basics.fonts.Montserrat};
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.muted};
  margin-bottom: 6px;
`;

const InfoValue = styled.a`
  display: block;
  font-family: ${Basics.fonts.Display};
  font-size: 22px;
  color: ${({ theme }) => theme.ink};
  text-decoration: none;
  transition: color 0.2s ease;
  &:hover { color: ${({ theme }) => theme.accent}; }
`;

const InfoText = styled.div`
  font-family: ${Basics.fonts.Display};
  font-size: 22px;
  color: ${({ theme }) => theme.ink};
  line-height: 1.3;
`;

const Form = styled.form<{ $revealed: boolean }>`
  background: ${({ theme }) => theme.surface};
  border-radius: 28px;
  padding: 40px;
  box-shadow: 0 30px 80px ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  gap: 18px;
  opacity: ${({ $revealed }) => ($revealed ? 1 : 0)};
  transform: translateY(${({ $revealed }) => ($revealed ? 0 : '20px')});
  transition: all 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) 0.15s;
  ${Screen.largePhone`
    padding: 28px 22px;
  `};
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  ${Screen.largePhone`
    grid-template-columns: 1fr;
  `};
`;

const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: ${Basics.fonts.Montserrat};
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.muted};
`;

const Input = styled.input`
  padding: 14px 16px;
  border: 1px solid ${({ theme }) => theme.line};
  border-radius: 10px;
  font-family: ${Basics.fonts.RadioCanada};
  font-size: 15px;
  color: ${({ theme }) => theme.ink};
  background: ${({ theme }) => theme.body};
  outline: none;
  transition: border 0.2s ease;
  &:focus { border-color: ${({ theme }) => theme.accent}; }
`;

const Select = styled.select`
  padding: 14px 16px;
  border: 1px solid ${({ theme }) => theme.line};
  border-radius: 10px;
  font-family: ${Basics.fonts.RadioCanada};
  font-size: 15px;
  color: ${({ theme }) => theme.ink};
  background: ${({ theme }) => theme.body};
  outline: none;
  appearance: none;
  &:focus { border-color: ${({ theme }) => theme.accent}; }
`;

const Textarea = styled.textarea`
  padding: 14px 16px;
  border: 1px solid ${({ theme }) => theme.line};
  border-radius: 10px;
  font-family: ${Basics.fonts.RadioCanada};
  font-size: 15px;
  color: ${({ theme }) => theme.ink};
  background: ${({ theme }) => theme.body};
  outline: none;
  min-height: 120px;
  resize: vertical;
  &:focus { border-color: ${({ theme }) => theme.accent}; }
`;

const Submit = styled.button`
  margin-top: 8px;
  padding: 16px 22px;
  background: ${({ theme }) => theme.ink};
  color: ${({ theme }) => theme.body};
  border: none;
  border-radius: 999px;
  font-family: ${Basics.fonts.Montserrat};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  transition: ${Basics.transition};
  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.accent};
    color: #fff;
  }
  &:disabled { opacity: 0.6; cursor: default; }
`;

const Thanks = styled.div`
  padding: 32px 12px;
  text-align: center;
  font-family: ${Basics.fonts.Display};
  font-size: 22px;
  color: ${({ theme }) => theme.ink};
  font-style: italic;
`;

const Contact = () => {
  const { ref, revealed } = useReveal<HTMLDivElement>(0.1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Residential paint');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const body = new URLSearchParams({
      'form-name': 'zicli-contact',
      'bot-field': '',
      name, email, phone, interest, message,
    }).toString();
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (!res.ok) throw new Error(`Form error ${res.status}`);
      setDone(true);
    } catch (err) {
      setSubmitting(false);
      // eslint-disable-next-line no-console
      console.error('Contact submit failed', err);
      alert('Sorry, that did not send. Please call or email us instead.');
    }
  };

  return (
    <Section id="contact">
      <Inner>
        <Left ref={ref as React.RefObject<HTMLDivElement>} $revealed={revealed}>
          <Kicker>Get in touch</Kicker>
          <Title>
            Let's talk <em>colour</em>.
          </Title>
          <Sub>
            Request a free site visit, a colour consultation, or a wholesale
            quote — we usually reply within one working day.
          </Sub>

          <InfoBlock>
            <InfoLabel>Visit</InfoLabel>
            <InfoText>
              1 Zicli Road, Tipper Garage,<br />
              After Alahun Bus Stop, Ibeju-Lekki, Lagos
            </InfoText>
          </InfoBlock>

          <InfoBlock>
            <InfoLabel>Email</InfoLabel>
            <InfoValue href="mailto:info@ziclysynergy.com">
              info@ziclysynergy.com
            </InfoValue>
          </InfoBlock>

          <InfoBlock>
            <InfoLabel>Phone</InfoLabel>
            <InfoValue href="tel:+2348163283624">+234 816 328 3624</InfoValue>
            <InfoValue href="tel:+2348122188566">+234 812 218 8566</InfoValue>
          </InfoBlock>
        </Left>

        <Form
          $revealed={revealed}
          name="zicli-contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={onSubmit}
        >
          {done ? (
            <Thanks>
              Thank you — we’ve got it. Our team will be in touch shortly.
            </Thanks>
          ) : (
            <>
              <input type="hidden" name="form-name" value="zicli-contact" />
              <p hidden>
                <label>
                  Don’t fill: <input name="bot-field" />
                </label>
              </p>
              <Row>
                <Field>
                  Full name
                  <Input
                    type="text"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                  />
                </Field>
                <Field>
                  Email
                  <Input
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                  />
                </Field>
              </Row>
              <Row>
                <Field>
                  Phone
                  <Input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 …"
                  />
                </Field>
                <Field>
                  Interest
                  <Select
                    name="interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                  >
                    <option>Residential paint</option>
                    <option>Commercial project</option>
                    <option>Restoration</option>
                    <option>Inesfly insecticide paint</option>
                    <option>Wholesale / distribution</option>
                    <option>Something else</option>
                  </Select>
                </Field>
              </Row>
              <Field>
                Tell us about your project
                <Textarea
                  name="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Rooms, surfaces, timeline…"
                />
              </Field>
              <Submit type="submit" disabled={submitting}>
                {submitting ? 'Sending…' : 'Request a Quote'}
              </Submit>
            </>
          )}
        </Form>
      </Inner>
    </Section>
  );
};

export default Contact;
