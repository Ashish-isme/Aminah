import Container from "../layout/container";

function Check({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
      <span aria-hidden style={{ marginTop: 2 }}>✓</span>
      <span className="small">{text}</span>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <Container>
        <div style={{ textAlign: "center" }}>
          <h2 className="title" style={{ fontSize: 38 }}>
            Clear Pricing That Feels Fair
          </h2>
          <p style={{ marginTop: 10 }}>Pick a plan that fits your life and your budget.</p>
        </div>

        <div className="grid-3" style={{ marginTop: 26 }}>
          {/* Starter */}
          <div className="card" style={{ padding: 18 }}>
            <div className="pill" style={{ width: "fit-content" }}>
              💡 Starter
            </div>
            <div className="title" style={{ fontSize: 28, marginTop: 12 }}>
              Free
            </div>

            <div style={{ display: "grid", gap: 10, marginTop: 14 }}>
              <Check text="Core tracking + categories" />
              <Check text="Weekly summaries" />
              <Check text="Manual receipts + insights" />
            </div>

            <div style={{ marginTop: 16 }}>
              <a className="btn btn-primary" href="#get-started" style={{ width: "100%" }}>
                Get Started
              </a>
            </div>
          </div>

          {/* Plus - Most Popular */}
          <div
            className="card"
            style={{
              padding: 18,
              outline: "3px solid var(--ring)",
              transform: "translateY(-6px)",
            }}
          >
            <div className="pill" style={{ width: "fit-content", borderColor: "rgba(47, 90, 85, 0.3)" }}>
              🧠 Most Popular
            </div>

            <div className="pill" style={{ width: "fit-content", marginTop: 10 }}>
              🌿 Plus
            </div>

            <div className="title" style={{ fontSize: 28, marginTop: 10 }}>
              5–9 KWD <span className="small">/month</span>
            </div>

            <div style={{ display: "grid", gap: 10, marginTop: 14 }}>
              <Check text="Automatic insights" />
              <Check text="Custom categories + budgets" />
              <Check text="Subscription tagging" />
            </div>

            <div style={{ marginTop: 16 }}>
              <a className="btn btn-primary" href="#get-started" style={{ width: "100%" }}>
                Start Your Trial — Free
              </a>
            </div>
          </div>

          {/* Family */}
          <div className="card" style={{ padding: 18 }}>
            <div className="pill" style={{ width: "fit-content" }}>
              🏠 Family
            </div>
            <div className="title" style={{ fontSize: 28, marginTop: 12 }}>
              10–15 KWD <span className="small">/month</span>
            </div>

            <div style={{ display: "grid", gap: 10, marginTop: 14 }}>
              <Check text="Shared household tracking" />
              <Check text="Individual + combined views" />
              <Check text="Family budget presets" />
            </div>

            <div style={{ marginTop: 16 }}>
              <a className="btn btn-primary" href="#get-started" style={{ width: "100%" }}>
                Start Your Trial — Free
              </a>
            </div>
          </div>
        </div>

        <div className="small" style={{ marginTop: 14, textAlign: "center" }}>
          ✓ 14-day guided setup included &nbsp;&nbsp;•&nbsp;&nbsp; Cancel anytime &nbsp;&nbsp;•&nbsp;&nbsp; No surprises
        </div>
      </Container>
    </section>
  );
}
