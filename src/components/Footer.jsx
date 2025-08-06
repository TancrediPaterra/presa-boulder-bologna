import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--rock);
  color: white;
  padding: 3rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const BrandSection = styled.div``;

const BrandHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const BrandIcon = styled.span`
  font-size: 2rem;
  color: var(--energy);
`;

const BrandTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

const EnergySpan = styled.span`
  color: var(--energy);
`;

const BrandDescription = styled.p`
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.8);
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
`;

const LinksSection = styled.div``;

const LinksTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  list-style: none;
  padding: 0;
`;

const LinkItem = styled.li``;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--energy);
  }
`;

const ContactSection = styled.div``;

const ContactTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
`;

const ContactIcon = styled.span`
  color: var(--energy);
`;

const ContactText = styled.span`
  font-size: 0.875rem;
`;

const Separator = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const BottomText = styled.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterGrid>
          <BrandSection>
            <BrandHeader>
              <BrandIcon>⛰️</BrandIcon>
              <BrandTitle>
                Presa<EnergySpan>B</EnergySpan>
              </BrandTitle>
            </BrandHeader>
            <BrandDescription>
              La palestra di arrampicata popolare di Bologna. Un luogo dove
              passione, inclusività e crescita si incontrano.
            </BrandDescription>
            <Copyright>
              © 2024 PresaB. Tutti i diritti riservati.
            </Copyright>
          </BrandSection>

          <LinksSection>
            <LinksTitle>Collegamenti Rapidi</LinksTitle>
            <LinksList>
              <LinkItem>
                <Link href="#">Chi Siamo</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#">Orari</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#">Corsi</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#">Eventi</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#">Contatti</Link>
              </LinkItem>
            </LinksList>
          </LinksSection>

          <ContactSection>
            <ContactTitle>Contatti</ContactTitle>
            <ContactList>
              <ContactItem>
                <ContactIcon>📍</ContactIcon>
                <ContactText>Via dell'Arrampicata, 42 - Bologna</ContactText>
              </ContactItem>
              <ContactItem>
                <ContactIcon>📞</ContactIcon>
                <ContactText>+39 051 123 4567</ContactText>
              </ContactItem>
              <ContactItem>
                <ContactIcon>✉️</ContactIcon>
                <ContactText>info@presab.it</ContactText>
              </ContactItem>
            </ContactList>
          </ContactSection>
        </FooterGrid>

        <Separator>
          <BottomText>
            Realizzato con ❤️ per la comunità di arrampicata bolognese
          </BottomText>
        </Separator>
      </Container>
    </FooterContainer>
  );
};

export default Footer;