import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--background)",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            fontSize: "2.25rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            color: "var(--foreground)",
          }}
        >
          404
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            marginBottom: "1rem",
            color: "var(--muted-foreground)",
          }}
        >
          Oops! Pagina non trovata
        </p>
        <a
          href="/"
          style={{
            color: "var(--primary)",
            textDecoration: "underline",
            transition: "color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "var(--accent)";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "var(--primary)";
          }}
        >
          Torna alla Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
