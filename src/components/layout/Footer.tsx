import Container from "./container";

export default function Footer() {
  return (
    <footer style={{ padding: "54px 0 36px" }}>
      <Container>
        <div className="divider" style={{ marginBottom: 28 }} />
        <div className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                aria-hidden
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 10,
                  background: "rgba(47, 90, 85, 0.12)",
                  border: "1px solid rgba(47, 90, 85, 0.25)",
                }}
              />
              <span style={{ fontWeight: 650 }}>Aminah</span>
            </div>
            <p style={{ marginTop: 10, maxWidth: 420 }}>
              The personal finance app for Kuwait. Capture, categorize, and understand your everyday spending — automatically.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
              <a className="pill" href="#" aria-label="Twitter">𝕏</a>
              <a className="pill" href="#" aria-label="LinkedIn">in</a>
              <a className="pill" href="#" aria-label="Email">✉</a>
            </div>
          </div>

          <div>
            <div className="kicker">Product</div>
            <div style={{ display: "grid", gap: 10, marginTop: 12 }} className="small">
              <a href="#product">How it works</a>
              <a href="#pricing">Pricing</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>

          <div id="company">
            <div className="kicker">Company</div>
            <div style={{ display: "grid", gap: 10, marginTop: 12 }} className="small">
              <a href="#company">Why Aminah</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#">Home</a>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 26 }} className="small muted">
          © {new Date().getFullYear()} Aminah. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
