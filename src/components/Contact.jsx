import styled from "styled-components";

const Section = styled.section`
  padding: 5rem 0;
  background-color: var(--background);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const HeaderDiv = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: var(--foreground);

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const HeaderDescription = styled.p`
  font-size: 1.25rem;
  max-width: 42rem;
  margin: 0 auto;
  color: var(--muted-foreground);
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: var(--shadow-lg);
  padding: 1.5rem;
  border: 1px solid var(--border);
`;

const CardHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: ${(props) => props.color || "var(--foreground)"};
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactSection = styled.div``;

const ContactSectionTitle = styled.h4`
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  color: var(--foreground);
`;

const ContactText = styled.p`
  color: var(--muted-foreground);
`;

const ContactList = styled.ul`
  color: var(--muted-foreground);
  list-style: none;
  padding: 0;
`;

const ContactListItem = styled.li`
  margin-bottom: 0.25rem;
`;

const MapContainer = styled.div`
  padding-top: 1rem;
`;

const MapIframe = styled.iframe`
  border: 0;
  border-radius: 0.5rem;
  box-shadow: var(--shadow-sm);
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactInfoCard = styled(Card)``;

const ContactInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ContactIcon = styled.span`
  font-size: 1.25rem;
  color: var(--primary);
`;

const ContactDetails = styled.div``;

const ContactLabel = styled.p`
  font-weight: 600;
  color: var(--foreground);
  margin: 0;
`;

const ContactValue = styled.p`
  color: var(--muted-foreground);
  margin: 0;
`;

const SocialSection = styled.div`
  padding-top: 1rem;
`;

const SocialLabel = styled.p`
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--foreground);
`;

const SocialButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: 1px solid var(--border);
  background-color: transparent;
  color: var(--foreground);
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: var(--muted);
  }
`;

const CTACard = styled.div`
  border-radius: 0.5rem;
  padding: 2rem;
  text-align: center;
  color: white;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  border: none;
`;

const CTATitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const CTADescription = styled.p`
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
`;

const CTAButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1.125rem;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const Contact = () => {
  return (
    <Section>
      <Container>
        <HeaderDiv>
          <Title>Vieni a Trovarci</Title>
          <HeaderDescription>
            Siamo nel cuore di Bologna, pronti ad accoglierti nella nostra
            comunità di arrampicata.
          </HeaderDescription>
        </HeaderDiv>

        <ContentGrid>
          <Card>
            <CardHeader>
              <CardTitle color="var(--primary)">📍 Dove Siamo</CardTitle>
            </CardHeader>
            <ContactContent>
              <ContactSection>
                <ContactSectionTitle>Indirizzo</ContactSectionTitle>
                <ContactText>
                  Via dell'Arrampicata, 42
                  <br />
                  40100 Bologna, BO
                  <br />
                  Italia
                </ContactText>
              </ContactSection>

              <ContactSection>
                <ContactSectionTitle>Come Raggiungerci</ContactSectionTitle>
                <ContactList>
                  <ContactListItem>
                    • Fermata metro: Stazione Centrale (15 min a piedi)
                  </ContactListItem>
                  <ContactListItem>• Autobus: Linee 25, 30, 35</ContactListItem>
                  <ContactListItem>
                    • Parcheggio gratuito disponibile
                  </ContactListItem>
                </ContactList>
              </ContactSection>

              <MapContainer>
                <MapIframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2845.845!2d11.3426!3d44.4949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI5JzQxLjYiTiAxMcKwMjAnMzMuNCJF!5e0!3m2!1sen!2sit!4v1"
                  width="100%"
                  height="200"
                  allowFullScreen
                  loading="lazy"
                />
              </MapContainer>
            </ContactContent>
          </Card>

          <RightColumn>
            <ContactInfoCard>
              <CardHeader>
                <CardTitle color="var(--accent)">📞 Contatti</CardTitle>
              </CardHeader>
              <ContactInfoContent>
                <ContactInfoItem>
                  <ContactIcon>📞</ContactIcon>
                  <ContactDetails>
                    <ContactLabel>Telefono</ContactLabel>
                    <ContactValue>+39 051 123 4567</ContactValue>
                  </ContactDetails>
                </ContactInfoItem>

                <ContactInfoItem>
                  <ContactIcon>✉️</ContactIcon>
                  <ContactDetails>
                    <ContactLabel>Email</ContactLabel>
                    <ContactValue>info@presab.it</ContactValue>
                  </ContactDetails>
                </ContactInfoItem>

                <SocialSection>
                  <SocialLabel>Seguici sui Social</SocialLabel>
                  <SocialButtons>
                    <SocialButton>📸 Instagram</SocialButton>
                    <SocialButton>👥 Facebook</SocialButton>
                  </SocialButtons>
                </SocialSection>
              </ContactInfoContent>
            </ContactInfoCard>
          </RightColumn>
        </ContentGrid>
      </Container>
    </Section>
  );
};

export default Contact;
