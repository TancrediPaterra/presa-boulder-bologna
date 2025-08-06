import styled from 'styled-components';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background);
`;

const Content = styled.div`
  text-align: center;
`;

const ErrorCode = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--foreground);
`;

const ErrorMessage = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--muted-foreground);
`;

const HomeLink = styled.a`
  color: var(--primary);
  text-decoration: underline;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--accent);
  }
`;

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Container>
      <Content>
        <ErrorCode>404</ErrorCode>
        <ErrorMessage>Oops! Pagina non trovata</ErrorMessage>
        <HomeLink href="/">Torna alla Home</HomeLink>
      </Content>
    </Container>
  );
};

export default NotFound;