import { useState } from "react"
import Container from "./container"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      style={{
        padding: "18px 0",
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 100, // Increased z-index so menu sits above content
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
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, zIndex: 101 }}>
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

          {/* Desktop Nav - Hidden on mobile via CSS */}
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
              // Close Icon
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              // Hamburger Icon
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