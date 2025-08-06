const Contact = () => {
  return (
    <section className="py-20" style={{ backgroundColor: "var(--background)" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--foreground)" }}
          >
            Vieni a Trovarci
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: "var(--muted-foreground)" }}
          >
            Siamo nel cuore di Bologna, pronti ad accoglierti nella nostra
            comunità di arrampicata.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className="bg-white rounded-lg shadow-lg p-6"
            style={{ border: `1px solid var(--border)` }}
          >
            <div className="mb-6">
              <h3
                className="text-2xl font-bold flex items-center mb-4"
                style={{ color: "var(--primary)" }}
              >
                📍 Dove Siamo
              </h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4
                  className="font-semibold text-lg mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Indirizzo
                </h4>
                <p style={{ color: "var(--muted-foreground)" }}>
                  Via dell'Arrampicata, 42
                  <br />
                  40100 Bologna, BO
                  <br />
                  Italia
                </p>
              </div>

              <div>
                <h4
                  className="font-semibold text-lg mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Come Raggiungerci
                </h4>
                <ul style={{ color: "var(--muted-foreground)" }}>
                  <li style={{ marginBottom: "0.25rem" }}>
                    • Fermata metro: Stazione Centrale (15 min a piedi)
                  </li>
                  <li style={{ marginBottom: "0.25rem" }}>
                    • Autobus: Linee 25, 30, 35
                  </li>
                  <li style={{ marginBottom: "0.25rem" }}>
                    • Parcheggio gratuito disponibile
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2845.845!2d11.3426!3d44.4949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI5JzQxLjYiTiAxMcKwMjAnMzMuNCJF!5e0!3m2!1sen!2sit!4v1"
                  width="100%"
                  height="200"
                  style={{
                    border: 0,
                    borderRadius: "0.5rem",
                    boxShadow: "var(--shadow-sm)",
                  }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div
              className="bg-white rounded-lg shadow-lg p-6"
              style={{ border: `1px solid var(--border)` }}
            >
              <div className="mb-6">
                <h3
                  className="text-2xl font-bold flex items-center mb-4"
                  style={{ color: "var(--accent)" }}
                >
                  📞 Contatti
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl" style={{ color: "var(--primary)" }}>
                    📞
                  </span>
                  <div>
                    <p
                      className="font-semibold"
                      style={{ color: "var(--foreground)" }}
                    >
                      Telefono
                    </p>
                    <p style={{ color: "var(--muted-foreground)" }}>
                      +39 051 123 4567
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xl" style={{ color: "var(--primary)" }}>
                    ✉️
                  </span>
                  <div>
                    <p
                      className="font-semibold"
                      style={{ color: "var(--foreground)" }}
                    >
                      Email
                    </p>
                    <p style={{ color: "var(--muted-foreground)" }}>
                      info@presab.it
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <p
                    className="font-semibold mb-2"
                    style={{ color: "var(--foreground)" }}
                  >
                    Seguici sui Social
                  </p>
                  <div className="flex gap-4">
                    <button
                      style={{
                        padding: "0.5rem 1rem",
                        borderRadius: "0.375rem",
                        border: `1px solid var(--border)`,
                        backgroundColor: "transparent",
                        color: "var(--foreground)",
                        transition: "background-color 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "var(--muted)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "transparent";
                      }}
                    >
                      📸 Instagram
                    </button>
                    <button
                      style={{
                        padding: "0.5rem 1rem",
                        borderRadius: "0.375rem",
                        border: `1px solid var(--border)`,
                        backgroundColor: "transparent",
                        color: "var(--foreground)",
                        transition: "background-color 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "var(--muted)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "transparent";
                      }}
                    >
                      👥 Facebook
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="rounded-lg p-8 text-center text-white"
              style={{
                background:
                  "linear-gradient(135deg, var(--primary), var(--accent))",
                border: "none",
              }}
            >
              <h3 className="text-2xl font-bold mb-4">
                Pronto per la Prima Scalata?
              </h3>
              <p className="mb-6" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
                Prenota la tua prova gratuita e scopri il mondo dell'arrampicata
                con noi!
              </p>
              <button
                className="px-6 py-3 rounded-lg border transition text-white"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  fontSize: "1.125rem",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                }}
              >
                Prenota Ora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
