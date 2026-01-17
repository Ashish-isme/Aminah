export default function Hero() {
  return (
    <section
      id="get-started"
      className="section"
      style={{ paddingTop: 48, paddingBottom: 72 }}
    >
      <div
        className="card"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "78px 24px 56px",
          backgroundImage: "url('/src/assets/Hero_Section_Image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
          {/* Overlay for readability */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.50), rgba(0,0,0,0.28))",
            }}
          />
          {/* White overlay */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, transparent 100%)",
            }}
          />

          {/* Content */}
          <div
            style={{
              position: "relative",
              textAlign: "center",
              maxWidth: 760,
              margin: "0 auto",
              color: "#fff",
            }}
          >
            <h1
              className="title-lg"
              style={{
                marginBottom: 16,
                textShadow: "0 8px 22px rgba(0,0,0,0.35)",
              }}
            >
              Ready to feel in control <br />
              of your money again?
            </h1>

            <p
              style={{
                fontSize: 18,
                opacity: 0.92,
                marginBottom: 26,
                textShadow: "0 6px 16px rgba(0,0,0,0.28)",
              }}
            >
              Start today. In minutes you’ll see your spending clearly.
            </p>

            <a className="btn btn-primary" href="#pricing">
              Start Now <span aria-hidden>→</span>
            </a>

            <p className="small" style={{ marginTop: 14, opacity: 0.88 }}>
              No confusion. No stress. Just clarity.
            </p>

            {/* Secondary part - integrated (no longer feels separate) */}
            <div
              style={{
                marginTop: 44,
                paddingTop: 22,
                borderTop: "1px solid rgba(255,255,255,0.18)",
                maxWidth: 820,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <h2
                className="title"
                style={{
                  fontSize: 30,
                  marginBottom: 8,
                  textShadow: "0 8px 20px rgba(0,0,0,0.30)",
                }}
              >
                Your Money, Understood.
              </h2>

              <p style={{ marginTop: 0, opacity: 0.9 }}>
                Clarity changes behavior. Confidence changes life.
              </p>

              {/* Optional mini value props row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                  gap: 14,
                  marginTop: 18,
                }}
              >
                {[
                  { title: "See it clearly", text: "Know where money goes." },
                  { title: "Fix leaks fast", text: "Spot waste in minutes." },
                  { title: "Feel confident", text: "Decide without stress." },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      padding: "14px 12px",
                      borderRadius: "var(--radius-lg)",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    <div style={{ fontWeight: 700, marginBottom: 6 }}>
                      {item.title}
                    </div>
                    <div style={{ opacity: 0.88, fontSize: 14 }}>
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Responsive fallback: stack on small screens */}
              <style>{`
                @media (max-width: 720px) {
                  .card [data-grid='benefits'] {
                    grid-template-columns: 1fr !important;
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
  
    </section>
  );
}
