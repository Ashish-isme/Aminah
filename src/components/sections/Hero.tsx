import Container from "../layout/container";

export default function Hero() {
  return (
    <section id="get-started" className="section" style={{ paddingTop: 36 }}>
      <Container>
        <div
          className="card"
          style={{
            padding: "54px 22px",
            borderRadius: "var(--radius-lg)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.75), rgba(255,255,255,0.45))",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* soft background “photo” placeholder */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(800px 420px at 80% 60%, rgba(47, 90, 85, 0.10), transparent 60%), radial-gradient(700px 420px at 15% 70%, rgba(29, 27, 22, 0.06), transparent 55%)",
              opacity: 0.9,
            }}
          />

          <div style={{ position: "relative", textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
            <h1 className="title" style={{ fontSize: 44, lineHeight: 1.08 }}>
              Ready to feel in control <br /> of your money again?
            </h1>

            <p style={{ marginTop: 12 }}>
              Start today. In minutes you’ll see your spending clearly.
            </p>

            <div style={{ marginTop: 18 }}>
              <a className="btn btn-primary" href="#pricing">
                Start Now <span aria-hidden>→</span>
              </a>
            </div>

            <p className="small" style={{ marginTop: 10 }}>
              No confusion. No stress. Just clarity.
            </p>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 36 }}>
          <h2 className="title" style={{ fontSize: 34 }}>
            Your Money, Understood.
          </h2>
          <p style={{ marginTop: 10 }}>
            Clarity changes behavior. Confidence changes life.
          </p>
        </div>
      </Container>
    </section>
  );
}
