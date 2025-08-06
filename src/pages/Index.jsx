import styled from 'styled-components';
import Hero from "@/components/Hero";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const PageContainer = styled.div`
  min-height: 100vh;
`;

const Index = () => {
  return (
    <PageContainer>
      <Hero />
      <About />
      <Schedule />
      <Contact />
      <Footer />
    </PageContainer>
  );
};

export default Index;