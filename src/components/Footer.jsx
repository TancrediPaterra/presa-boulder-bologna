const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "var(--rock)",
        color: "white",
        padding: "3rem 0",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span style={{ fontSize: "2rem", color: "var(--energy)" }}>
                ⛰️
              </span>
              <h3 className="text-2xl font-bold">
                Presa<span style={{ color: "var(--energy)" }}>B</span>
              </h3>
            </div>
            <p className="mb-4" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
              La palestra di arrampicata popolare di Bologna. Un luogo dove
              passione, inclusività e crescita si incontrano.
            </p>
            <p
              className="text-sm"
              style={{ color: "rgba(255, 255, 255, 0.6)" }}
            >
              © 2024 PresaB. Tutti i diritti riservati.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Collegamenti Rapidi</h4>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <li>
                <a
                  href="#"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--energy)")}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                  }
                >
                  Chi Siamo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--energy)")}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                  }
                >
                  Orari
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--energy)")}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                  }
                >
                  Corsi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--energy)")}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                  }
                >
                  Eventi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--energy)")}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                  }
                >
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <div
                className="flex items-center gap-2"
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                <span style={{ color: "var(--energy)" }}>📍</span>
                <span className="text-sm">
                  Via dell'Arrampicata, 42 - Bologna
                </span>
              </div>
              <div
                className="flex items-center gap-2"
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                <span style={{ color: "var(--energy)" }}>📞</span>
                <span className="text-sm">+39 051 123 4567</span>
              </div>
              <div
                className="flex items-center gap-2"
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                <span style={{ color: "var(--energy)" }}>✉️</span>
                <span className="text-sm">info@presab.it</span>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "2rem",
            paddingTop: "2rem",
            textAlign: "center",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <p className="text-sm" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
            Realizzato con ❤️ per la comunità di arrampicata bolognese
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
