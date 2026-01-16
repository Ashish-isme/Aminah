// src/components/sections/Steps.tsx
import Container from "../layout/container";
import IPhoneMockup from "../ui/PhoneMockup/PhoneMockup";
import stepsScreen from "../../assets/app-screen.png";

function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="card" style={{ padding: 16, display: "flex", gap: 12 }}>
      <div
        aria-hidden
        style={{
          width: 30,
          height: 30,
          borderRadius: 999,
          background: "rgba(47, 90, 85, 0.12)",
          border: "1px solid rgba(47, 90, 85, 0.25)",
          display: "grid",
          placeItems: "center",
          fontWeight: 700,
          color: "var(--brand)",
          flex: "0 0 auto",
        }}
      >
        {n}
      </div>

      <div>
        <div style={{ fontWeight: 700, color: "var(--text)" }}>{title}</div>
        <div className="small" style={{ marginTop: 4 }}>
          {text}
        </div>
      </div>
    </div>
  );
}

export default function Steps() {
  return (
    <section id="product" className="section">
      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 18,
            alignItems: "center",
          }}
        >
          {/* LEFT */}
          <div>
            <h2 className="title" style={{ fontSize: 36 }}>
              Get Clarity in 3 Easy Steps
            </h2>
            <p style={{ marginTop: 10 }}>
              Your spending, sorted and summarized in minutes.
            </p>

            <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
              <Step
                n="1"
                title="Connect or Upload"
                text="Link accounts or upload receipts — however you want."
              />
              <Step
                n="2"
                title="Haseeb Organizes It"
                text="AI + smart rules sort everything into clean categories."
              />
              <Step
                n="3"
                title="Ask. Learn. Act."
                text="Ask questions in everyday language and make confident decisions."
              />
            </div>
          </div>

          {/* RIGHT (replaces your placeholder) */}
          <div style={{ display: "grid", placeItems: "center" }}>
            <IPhoneMockup screen={stepsScreen} alt="Haseeb app screen" scale={1} />
          </div>
        </div>
      </Container>
    </section>
  );
}
