import Container from "../layout/container";
import { Check as CheckIcon, Sparkles, Users, Leaf } from "lucide-react";

function Feature({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
      <CheckIcon size={16} style={{ marginTop: 2, opacity: 0.8 }} />
      <span className="small" style={{ lineHeight: 1.55 }}>
        {text}
      </span>
    </div>
  );
}

function PlanIcon({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span
      aria-hidden
      style={{
        width: 34,
        height: 34,
        borderRadius: 999,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid rgba(29, 27, 22, 0.10)",
        background: "rgba(255,255,255,0.55)",
      }}
    >
      {children}
    </span>
  );
}

function Price({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 24,
        fontWeight: 600,
        letterSpacing: "-0.02em",
        lineHeight: 1.1,
        marginTop: 14,
      }}
    >
      {children}
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <Container>
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <div className="kicker" style={{ color: "var(--brand)" }}>Pricing</div>
          <h2 className="title" style={{ marginTop: 10 }}>
            Clear <span style={{ color: "var(--brand)" }}>Pricing</span> That Feels Fair
          </h2>
          <p style={{ marginTop: 10 }}>
            Pick a plan that fits your life and your budget.
          </p>
        </div>

        {/* Cards row */}
        <div
          className="pricing-row"
          style={{
            display: "flex",
            gap: 16,
            marginTop: 28,
            alignItems: "stretch",
          }}
        >
          {/* Starter */}
          <div
            className="card"
            style={{
              flex: 1,
              padding: 22,
              background: "rgba(255,255,255,0.62)",
              borderRadius: 12,
              animation: 'slideUp 0.6s ease-out',
              minHeight: 380,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <PlanIcon>
                <Sparkles size={18} />
              </PlanIcon>
              <div>
                <div style={{ fontWeight: 600, letterSpacing: "-0.01em", color: "var(--brand)" }}>
                  Starter
                </div>
                <div className="small" style={{ marginTop: 2 }}>
                  Get clarity fast
                </div>
              </div>
            </div>

            <Price>Free</Price>

            <div className="divider" style={{ marginTop: 16, marginBottom: 14 }} />

            <div style={{ display: "grid", gap: 10 }}>
              <Feature text="Core tracking + categories" />
              <Feature text="Weekly summaries" />
              <Feature text="Manual receipts + insights" />
            </div>

            <div style={{ marginTop: 18 }}>
              <a className="btn btn-ghost" href="#get-started" style={{ width: "100%" }}>
                Get Started
              </a>
            </div>
          </div>

          {/* Plus - Most Popular */}
          <div
            className="card"
            style={{
              flex: 1,
              padding: 22,
              background: "rgba(255,255,255,0.62)",
              borderRadius: 12,
              animation: 'slideUp 0.6s ease-out',
              minHeight: 380,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -10,
                right: -10,
                background: "var(--brand)",
                color: "white",
                padding: "4px 8px",
                fontSize: 12,
                fontWeight: 600,
                borderRadius: "4px 0 4px 0",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              Best Value
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 12 }}>
              <PlanIcon>
                <Leaf size={18} />
              </PlanIcon>
              <div>
                <div style={{ fontWeight: 600, letterSpacing: "-0.01em", color: "var(--brand)" }}>
                  Plus
                </div>
                <div className="small" style={{ marginTop: 2 }}>
                  Best balance of automation
                </div>
              </div>
            </div>

            <Price>
              5–9 KWD <span className="small">/month</span>
            </Price>

            <div className="divider" style={{ marginTop: 16, marginBottom: 14 }} />

            <div style={{ display: "grid", gap: 10 }}>
              <Feature text="Automatic insights" />
              <Feature text="Custom categories + budgets" />
              <Feature text="Subscription tagging" />
            </div>

            <div style={{ marginTop: 18 }}>
              <a className="btn btn-ghost" href="#get-started" style={{ width: "100%" }}>
                Start Your Trial — Free
              </a>
            </div>
          </div>

          {/* Family */}
          <div
            className="card"
            style={{
              flex: 1,
              padding: 22,
              background: "rgba(255,255,255,0.62)",
              borderRadius: 12,
              animation: 'slideUp 0.6s ease-out',
              minHeight: 380,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <PlanIcon>
                <Users size={18} />
              </PlanIcon>
              <div>
                <div style={{ fontWeight: 600, letterSpacing: "-0.01em", color: "var(--brand)" }}>
                  Family
                </div>
                <div className="small" style={{ marginTop: 2 }}>
                  For households
                </div>
              </div>
            </div>

            <Price>
              10–15 KWD <span className="small">/month</span>
            </Price>

            <div className="divider" style={{ marginTop: 16, marginBottom: 14 }} />

            <div style={{ display: "grid", gap: 10 }}>
              <Feature text="Shared household tracking" />
              <Feature text="Individual + combined views" />
              <Feature text="Family budget presets" />
            </div>

            <div style={{ marginTop: 18 }}>
              <a className="btn btn-ghost" href="#get-started" style={{ width: "100%" }}>
                Start Your Trial — Free
              </a>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div
          className="small"
          style={{
            marginTop: 16,
            textAlign: "center",
            opacity: 0.85,
          }}
        >
          14-day guided setup included &nbsp;&nbsp;•&nbsp;&nbsp; Cancel anytime
          &nbsp;&nbsp;•&nbsp;&nbsp; No surprises
        </div>

        {/* Responsive (inline so you don’t need new CSS files) */}
        <style>{`
          @media (max-width: 920px) {
            #pricing .pricing-row {
              flex-direction: column;
            }
          }
          @keyframes slideUp {
            from {
              transform: translateY(20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          .btn:hover {
            background-color: var(--brand) !important;
            color: white !important;
          }
          .card {
            transition: all 0.3s ease;
          }
          .card:hover {
            background: rgba(37, 199, 83, 0.1);
            box-shadow: 0 0 15px rgba(37, 199, 83, 0.3);
            transform: translateY(-5px) scale(1.02);
          }
        `}</style>
      </Container>
    </section>
  );
}
