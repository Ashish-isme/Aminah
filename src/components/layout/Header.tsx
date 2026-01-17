import { useState } from "react"
import Container from "./container"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      style={{
        padding: "12px 0", // Slightly reduced vertical padding to accommodate larger logo
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 100,
        backgroundColor: "rgba(255, 255, 255, 0.45)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
        transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 14,
          }}
        >
          {/* Logo Section */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, zIndex: 101 }}>
            <img
              src="/src/assets/logo.png" /* Ensure logo.png is in your public folder */
              alt="Aminah Logo"
              style={{
                width: 48,  /* Increased from 28px to 48px */
                height: 48, /* Increased from 28px to 48px */
                borderRadius: 12,
                objectFit: "cover",
              }}
            />
            <span style={{ fontWeight: 550, fontSize: "22px", color: "var(--brand)" }}>Aminah</span>
          </div>

          {/* Desktop Nav */}
          <nav className="nav-desktop small">
            <a href="#product">Product</a>
            <a href="#pricing">Pricing</a>
            <a href="#company">Company</a>

            <span
              aria-hidden
              className="divider"
              style={{ width: 1, height: 18 }}
            />

            <a
              href="#demo"
              className="btn btn-ghost"
              style={{
                height: 36,
                padding: "0 12px",
              }}
            >
              See Demo
            </a>

            <a
              href="#get-started"
              className="btn btn-primary"
              style={{
                height: 36,
                padding: "0 12px",
              }}
            >
              Get Some — It's Free
            </a>
          </nav>

          {/* Mobile Toggle Button */}
          <button
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <Container>
          <nav className="mobile-nav">
            <a href="#product" onClick={() => setIsOpen(false)}>Product</a>
            <a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a>
            <a href="#company" onClick={() => setIsOpen(false)}>Company</a>
            
            <div className="mobile-actions">
              <a href="#demo" className="btn btn-ghost" onClick={() => setIsOpen(false)}>
                See Demo
              </a>
              <a href="#get-started" className="btn btn-primary" onClick={() => setIsOpen(false)}>
                Get Started
              </a>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  )
}