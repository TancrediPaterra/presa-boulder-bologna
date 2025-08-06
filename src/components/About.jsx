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
    <section className="py-20" style={{ backgroundColor: "var(--background)" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--foreground)" }}
          >
            Benvenuti in <span className="text-primary">PresaB</span>
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              maxWidth: "48rem",
              margin: "0 auto",
              color: "var(--muted-foreground)",
            }}
          >
            Nel cuore di Bologna, PresaB è più di una semplice palestra di
            arrampicata. È uno spazio dove la passione per la verticale incontra
            l'inclusività e la crescita personale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 text-center transition hover:shadow-xl"
              style={{
                border: `1px solid var(--border)`,
                transform: "translateY(0)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-5px)";
                e.target.style.boxShadow = "var(--shadow-climbing)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "var(--shadow-lg)";
              }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "var(--foreground)" }}
              >
                {feature.title}
              </h3>
              <p style={{ color: "var(--muted-foreground)" }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            borderRadius: "0.5rem",
            padding: "3rem",
            textAlign: "center",
          }}
          style={{
            background:
              "linear-gradient(180deg, var(--rock-light), var(--rock))",
            color: "white",
          }}
        >
          <h3 className="text-3xl font-bold mb-4">Arrampicata per Tutti</h3>
          <p
            style={{
              fontSize: "1.25rem",
              maxWidth: "42rem",
              margin: "0 auto",
              color: "rgba(255, 255, 255, 0.9)",
            }}
          >
            Che tu sia un principiante assoluto o un climber esperto, PresaB
            offre percorsi e sfide adatte al tuo livello. La nostra filosofia
            popolare rende l'arrampicata accessibile a tutti.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
