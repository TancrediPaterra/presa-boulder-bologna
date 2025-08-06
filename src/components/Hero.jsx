import styled from 'styled-components';
import heroImage from "@/assets/hero-climbing.jpg";

const HeroContainer = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const BackgroundImageDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ContentDiv = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  color: white;
  max-width: 56rem;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  animation: float 3s ease-in-out infinite;
  
  @media (min-width: 640px) {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
  
  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const EnergySpan = styled.span`
  color: var(--energy);
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  margin-bottom: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
  
  @media (min-width: 640px) {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.625;
  
  @media (min-width: 640px) {
    font-size: 1.125rem;
    margin-bottom: 2rem;
  }
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.7);
  animation: bounce 1s infinite;
  
  @keyframes bounce {
    0%, 100% {
      transform: translateX(-50%) translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateX(-50%);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
`;

const ScrollBox = styled.div`
  width: 1.5rem;
  height: 2.5rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 9999px;
  display: flex;
  justify-content: center;
`;

const ScrollDot = styled.div`
  width: 0.25rem;
  height: 0.75rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 9999px;
  margin-top: 0.5rem;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  
  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <BackgroundImageDiv>
        <Overlay />
      </BackgroundImageDiv>
      
      <ContentDiv>
        <Title>
          Presa<EnergySpan>B</EnergySpan>
        </Title>
        <Subtitle>
          La Palestra di Arrampicata Popolare di Bologna
        </Subtitle>
        <Description>
          Scopri l'arrampicata in un ambiente accogliente e inclusivo. 
          Per tutti i livelli, dalla prima volta agli esperti scalatori.
        </Description>
      </ContentDiv>
      
      <ScrollIndicator>
        <ScrollBox>
          <ScrollDot />
        </ScrollBox>
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default Hero;