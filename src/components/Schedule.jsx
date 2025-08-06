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
    <section style={{ padding: "5rem 0", backgroundColor: "var(--muted)" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--foreground)" }}
          >
            📅 Orari di Apertura
          </h2>
          <p
            style={{ fontSize: "1.25rem", maxWidth: "42rem", margin: "0 auto" }}
            style={{ color: "var(--muted-foreground)" }}
          >
            Siamo aperti ogni giorno per offrirti la migliore esperienza di
            arrampicata. Controlla i nostri orari e le attività programmate.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {scheduleInfo.map((schedule, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                borderRadius: "0.5rem",
                boxShadow: "var(--shadow-lg)",
                padding: "1.5rem",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              style={{
                border: schedule.highlight
                  ? `2px solid var(--energy)`
                  : `1px solid var(--border)`,
                backgroundColor: schedule.highlight
                  ? "rgba(255, 165, 0, 0.05)"
                  : "white",
              }}
            >
              <h3
                className="text-xl font-bold mb-4 flex items-center justify-center gap-2"
                style={{
                  color: schedule.highlight
                    ? "var(--energy)"
                    : "var(--primary)",
                }}
              >
                {schedule.highlight && "⭐"}
                {schedule.period}
                {schedule.highlight && "⭐"}
              </h3>
              <div
                className="flex items-center justify-center mb-3 text-lg font-semibold"
                style={{ color: "var(--foreground)" }}
              >
                🕒 {schedule.hours}
              </div>
              {schedule.boulderClose && (
                <div
                  className="text-sm mb-3"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Sala Boulder chiude alle {schedule.boulderClose}
                </div>
              )}
              <div
                className="text-sm"
                style={{ color: "var(--muted-foreground)" }}
              >
                {schedule.description}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div
            className="bg-white rounded-lg shadow-lg p-6"
            style={{ border: `1px solid var(--primary)` }}
          >
            <h3
              className="text-2xl font-bold flex items-center mb-6"
              style={{ color: "var(--primary)" }}
            >
              👥 Attività Disponibili
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div
                style={{
                  borderLeft: `4px solid var(--accent)`,
                  paddingLeft: "1rem",
                }}
              >
                <h4
                  className="font-semibold text-lg"
                  style={{ color: "var(--foreground)" }}
                >
                  Libera Scalata
                </h4>
                <p style={{ color: "var(--muted-foreground)" }}>
                  Arrampica in totale libertà sui nostri percorsi di diversa
                  difficoltà.
                </p>
              </div>
              <div
                style={{
                  borderLeft: `4px solid var(--energy)`,
                  paddingLeft: "1rem",
                }}
              >
                <h4
                  className="font-semibold text-lg"
                  style={{ color: "var(--foreground)" }}
                >
                  Corsi di Arrampicata
                </h4>
                <p style={{ color: "var(--muted-foreground)" }}>
                  Corsi per tutti i livelli: base, intermedio e avanzato con
                  istruttori qualificati.
                </p>
              </div>
              <div
                style={{
                  borderLeft: `4px solid var(--primary)`,
                  paddingLeft: "1rem",
                }}
              >
                <h4
                  className="font-semibold text-lg"
                  style={{ color: "var(--foreground)" }}
                >
                  Eventi Sociali
                </h4>
                <p style={{ color: "var(--muted-foreground)" }}>
                  Serate di arrampicata e competizioni interne per tutti i
                  livelli.
                </p>
              </div>
              <div
                style={{
                  borderLeft: `4px solid var(--secondary)`,
                  paddingLeft: "1rem",
                }}
              >
                <h4
                  className="font-semibold text-lg"
                  style={{ color: "var(--foreground)" }}
                >
                  Sessioni Guidate
                </h4>
                <p style={{ color: "var(--muted-foreground)" }}>
                  Sessioni con accompagnatori esperti per migliorare la tecnica.
                </p>
              </div>
            </div>
          </div>

          <div
            className="bg-white rounded-lg shadow-lg p-6"
            style={{ border: `1px solid var(--accent)` }}
          >
            <h3
              className="text-2xl font-bold flex items-center mb-6"
              style={{ color: "var(--accent)" }}
            >
              🕒 Informazioni Utili
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div>
                <h4
                  className="font-semibold text-lg mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Accesso
                </h4>
                <p style={{ color: "var(--muted-foreground)" }}>
                  Accesso libero durante gli orari di apertura. Le sessioni
                  guidate su prenotazione.
                </p>
              </div>
              <div>
                <h4
                  className="font-semibold text-lg mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Attrezzatura
                </h4>
                <p style={{ color: "var(--muted-foreground)" }}>
                  Scarpette e imbrago disponibili a noleggio. Porta solo
                  abbigliamento comodo!
                </p>
              </div>
              <div>
                <h4
                  className="font-semibold text-lg mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Primo Accesso
                </h4>
                <p style={{ color: "var(--muted-foreground)" }}>
                  Prima volta? Ti offriamo una prova gratuita con istruttore!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
