import Container from "../layout/container";

function FeaturePill({ text }: { text: string }) {
  return <div className="pill">{text}</div>;
}

export default function FeatureShowcase() {
  return (
    <section id="demo" className="section" style={{ paddingTop: 10 }}>
      <Container>
        <div
          className="card"
          style={{
            padding: 22,
            borderRadius: "var(--radius-lg)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.78), rgba(255,255,255,0.48))",
          }}
        >
          <div className="feature-main-grid">
            <div>
              <h2 className="title-xl">
                Money Awareness <br />
                That Feels <span style={{ color: "var(--brand)" }}>Good.</span>
              </h2>

              <p style={{ marginTop: 12, maxWidth: 520 }}>
                Track your everyday spending, understand your habits, and make smarter decisions —
                without spreadsheets, stress, or guesswork.
              </p>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
                <a className="btn btn-primary" href="#get-started">
                  Get Started — It’s Free
                </a>
                <a className="btn btn-ghost" href="#demo">
                  See Demo
                </a>
              </div>

              <div style={{ display: "grid", gap: 8, marginTop: 12 }}>
                <div className="small">✓ Built for Kuwait (KWD-first)</div>
                <div className="small">✓ Cancel anytime</div>
                <div className="small">✓ Private by design</div>
              </div>
            </div>

            <div
              className="card feature-mockup"
              style={{
                height: 420,
                borderRadius: 28,
                position: "relative",
                overflow: "hidden",
                background:
                  "radial-gradient(650px 420px at 50% 20%, rgba(47, 90, 85, 0.16), transparent 55%), rgba(255,255,255,0.55)",
              }}
            >
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 18,
                  borderRadius: 22,
                  background: "rgba(255,255,255,0.78)",
                  border: "1px solid rgba(29, 27, 22, 0.12)",
                }}
              />
              <div style={{ position: "absolute", inset: 40 }}>
                <div className="pill">Aminah Chat</div>
                <div style={{ marginTop: 14, fontWeight: 800 }}>
                  Weekly Summary
                </div>
                <div style={{ marginTop: 10 }} className="small">
                  Your biggest category this week was <b>Dining</b>. Subscriptions are stable.
                </div>
                <div style={{ marginTop: 14, display: "grid", gap: 10 }}>
                  <div className="card" style={{ padding: 12 }}>
                    <div className="small">Dining</div>
                    <div style={{ fontWeight: 750 }}>KWD 60.000</div>
                  </div>
                  <div className="card" style={{ padding: 12 }}>
                    <div className="small">Groceries</div>
                    <div style={{ fontWeight: 750 }}>KWD 42.500</div>
                  </div>
                  <div className="card" style={{ padding: 12 }}>
                    <div className="small">Subscriptions</div>
                    <div style={{ fontWeight: 750 }}>KWD 8.250</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 26 }}>
            <div className="title" style={{ fontSize: 22 }}>
              Feel good about your money.
            </div>
            <div className="small">Confidence starts with clarity.</div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 28 }}>
          <h3 className="title">
            You Don’t Track Money. You Live Well.
          </h3>
          <p style={{ marginTop: 8, maxWidth: 760, marginInline: "auto" }}>
            Most money tools make your work harder. We make your money make sense.
            Aminah turns your receipts, expenses, and habits into clarity, calm, and action.
          </p>
        </div>

        <div className="grid-3" style={{ marginTop: 18 }}>
          <div className="card" style={{ padding: 16 }}>
            <FeaturePill text="Pocket-level clarity" />
            <div style={{ marginTop: 10, fontWeight: 750 }}>Know your spending</div>
            <div className="small">Anytime, anywhere.</div>
          </div>
          <div className="card" style={{ padding: 16 }}>
            <FeaturePill text="Smart categories" />
            <div style={{ marginTop: 10, fontWeight: 750 }}>Auto organization</div>
            <div className="small">Categories that match real life.</div>
          </div>
          <div className="card" style={{ padding: 16 }}>
            <FeaturePill text="Weekly summaries" />
            <div style={{ marginTop: 10, fontWeight: 750 }}>Actionable insights</div>
            <div className="small">Small changes, big wins.</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
