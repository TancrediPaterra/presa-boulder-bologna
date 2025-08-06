import styled from "styled-components";

const Section = styled.section`
  padding: 5rem 0;
  background-color: var(--muted);
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

const ScheduleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ScheduleCard = styled.div`
  background-color: ${(props) =>
    props.highlight ? "rgba(255, 165, 0, 0.05)" : "white"};
  border-radius: 0.5rem;
  box-shadow: var(--shadow-lg);
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: ${(props) =>
    props.highlight ? "2px solid var(--energy)" : "1px solid var(--border)"};

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-climbing);
  }
`;

const ScheduleTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => (props.highlight ? "var(--energy)" : "var(--primary)")};
`;

const ScheduleHours = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--foreground);
`;

const ScheduleBoulderClose = styled.div`
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
  color: var(--muted-foreground);
`;

const ScheduleDescription = styled.div`
  font-size: 0.875rem;
  color: var(--muted-foreground);
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const InfoCard = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: var(--shadow-lg);
  padding: 1.5rem;
  border: 1px solid ${(props) => props.borderColor || "var(--border)"};
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  color: ${(props) => props.color || "var(--foreground)"};
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InfoItem = styled.div`
  border-left: 4px solid ${(props) => props.borderColor};
  padding-left: 1rem;
`;

const InfoItemTitle = styled.h4`
  font-weight: 600;
  font-size: 1.125rem;
  color: var(--foreground);
  margin-bottom: 0.5rem;
`;

const InfoItemDescription = styled.p`
  color: var(--muted-foreground);
`;

const Schedule = () => {
  const scheduleInfo = [
    {
      period: "1-19 Settembre",
      hours: "10:00 - 24:00",
      boulderClose: "22:00",
      description: "Orari estesi pre-inaugurazione",
      highlight: false,
    },
    {
      period: "20 Settembre",
      hours: "INAUGURAZIONE",
      boulderClose: "",
      description: "Giornata speciale di inaugurazione",
      highlight: true,
    },
    {
      period: "21-30 Settembre",
      hours: "14:00 - 23:00",
      boulderClose: "22:00",
      description: "Nuovi orari post-inaugurazione",
      highlight: false,
    },
  ];

  return (
    <Section>
      <Container>
        <HeaderDiv>
          <Title>📅 Orari di Apertura</Title>
          <HeaderDescription>
            Siamo aperti ogni giorno per offrirti la migliore esperienza di
            arrampicata. Controlla i nostri orari e le attività programmate.
          </HeaderDescription>
        </HeaderDiv>

        <ScheduleGrid>
          {scheduleInfo.map((schedule, index) => (
            <ScheduleCard key={index} highlight={schedule.highlight}>
              <ScheduleTitle highlight={schedule.highlight}>
                {schedule.highlight && "⭐"}
                {schedule.period}
                {schedule.highlight && "⭐"}
              </ScheduleTitle>
              <ScheduleHours>🕒 {schedule.hours}</ScheduleHours>
              {schedule.boulderClose && (
                <ScheduleBoulderClose>
                  Sala Boulder chiude alle {schedule.boulderClose}
                </ScheduleBoulderClose>
              )}
              <ScheduleDescription>{schedule.description}</ScheduleDescription>
            </ScheduleCard>
          ))}
        </ScheduleGrid>

        <InfoGrid>
          <InfoCard borderColor="var(--primary)">
            <InfoTitle color="var(--primary)">
              👥 Attività Disponibili
            </InfoTitle>
            <InfoContent>
              <InfoItem borderColor="var(--accent)">
                <InfoItemTitle>Libera Scalata</InfoItemTitle>
                <InfoItemDescription>
                  Arrampica in totale libertà sui nostri percorsi di diversa
                  difficoltà.
                </InfoItemDescription>
              </InfoItem>
              <InfoItem borderColor="var(--energy)">
                <InfoItemTitle>Corsi di Arrampicata</InfoItemTitle>
                <InfoItemDescription>
                  Corsi per tutti i livelli: base, intermedio e avanzato con
                  istruttori qualificati.
                </InfoItemDescription>
              </InfoItem>
              <InfoItem borderColor="var(--primary)">
                <InfoItemTitle>Eventi Sociali</InfoItemTitle>
                <InfoItemDescription>
                  Serate di arrampicata e competizioni interne per tutti i
                  livelli.
                </InfoItemDescription>
              </InfoItem>
              <InfoItem borderColor="var(--secondary)">
                <InfoItemTitle>Sessioni Guidate</InfoItemTitle>
                <InfoItemDescription>
                  Sessioni con accompagnatori esperti per migliorare la tecnica.
                </InfoItemDescription>
              </InfoItem>
            </InfoContent>
          </InfoCard>

          <InfoCard borderColor="var(--accent)">
            <InfoTitle color="var(--accent)">🕒 Informazioni Utili</InfoTitle>
            <InfoContent>
              <div>
                <InfoItemTitle>Accesso</InfoItemTitle>
                <InfoItemDescription>
                  Accesso libero durante gli orari di apertura. Le sessioni
                  guidate su prenotazione.
                </InfoItemDescription>
              </div>
              <div>
                <InfoItemTitle>Attrezzatura</InfoItemTitle>
                <InfoItemDescription>
                  Scarpette e imbrago disponibili a noleggio. Porta solo
                  abbigliamento comodo!
                </InfoItemDescription>
              </div>
            </InfoContent>
          </InfoCard>
        </InfoGrid>
      </Container>
    </Section>
  );
};

export default Schedule;
