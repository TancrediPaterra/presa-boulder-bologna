import styled from 'styled-components';

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

const PrimarySpan = styled.span`
  color: var(--primary);
`;

const HeaderDescription = styled.p`
  font-size: 1.25rem;
  color: var(--muted-foreground);
  max-width: 48rem;
  margin: 0 auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: var(--shadow-lg);
  padding: 2rem;
  text-align: center;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
  transform: translateY(0);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-climbing);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.25rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--foreground);
`;

const FeatureDescription = styled.p`
  color: var(--muted-foreground);
`;

const CallToActionDiv = styled.div`
  border-radius: 0.5rem;
  padding: 3rem;
  text-align: center;
  background: linear-gradient(180deg, var(--rock-light), var(--rock));
  color: white;
`;

const CTATitle = styled.h3`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const CTADescription = styled.p`
  font-size: 1.25rem;
  max-width: 42rem;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.9);
`;

const About = () => {
  const features = [
    {
      title: "Palestra Popolare",
      description:
        "Un ambiente inclusivo e accogliente dove tutti possono avvicinarsi all'arrampicata, indipendentemente dal livello di esperienza.",
      icon: "👥",
    },
    {
      title: "Comunità Attiva",
      description:
        "Fai parte di una comunità appassionata di scalatori che condividono esperienze, consigli e momenti di crescita insieme.",
      icon: "❤️",
    },
    {
      title: "Attrezzature Complete",
      description:
        "Pareti moderne con prese di ogni livello, attrezzatura di sicurezza professionale e corsi per principianti ed esperti.",
      icon: "⛰️",
    },
  ];

  return (
    <Section>
      <Container>
        <HeaderDiv>
          <Title>
            Benvenuti in <PrimarySpan>PresaB</PrimarySpan>
          </Title>
          <HeaderDescription>
            Nel cuore di Bologna, PresaB è più di una semplice palestra di
            arrampicata. È uno spazio dove la passione per la verticale incontra
            l'inclusività e la crescita personale.
          </HeaderDescription>
        </HeaderDiv>

        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>

        <CallToActionDiv>
          <CTATitle>Arrampicata per Tutti</CTATitle>
          <CTADescription>
            Che tu sia un principiante assoluto o un climber esperto, PresaB
            offre percorsi e sfide adatte al tuo livello. La nostra filosofia
            popolare rende l'arrampicata accessibile a tutti.
          </CTADescription>
        </CallToActionDiv>
      </Container>
    </Section>
  );
};

export default About;