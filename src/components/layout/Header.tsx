import Container from "./container";

export default function Header() {
  return (
    <header style={{ padding: "18px 0" }}>
      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 14,
          }}
        >
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

          <nav
            className="small"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              color: "var(--muted)",
            }}
          >
            <a href="#product">Product</a>
            <a href="#pricing">Pricing</a>
            <a href="#company">Company</a>
            <span className="divider" style={{ width: 1, height: 18 }} />
            <a href="#demo" className="btn btn-ghost" style={{ height: 36, padding: "0 12px" }}>
              See Demo
            </a>
            <a
              href="#get-started"
              className="btn btn-primary"
              style={{ height: 36, padding: "0 12px" }}
            >
              Get Some — It’s Free
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
