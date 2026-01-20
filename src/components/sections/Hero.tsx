export default function Hero() {
  return (
    <section
      id="get-started"
      className="section"
      style={{
        paddingTop: 0,
        paddingBottom: 0,
        height: "100vh",
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="card hero-card"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "64px 24px",
          width: "100%",
          height: "100%",
          backgroundImage: "url('/src/assets/Hero_Section_Image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 24px 70px rgba(0,0,0,0.14), 0 8px 18px rgba(0,0,0,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Animated background glow */}
        <div aria-hidden className="hero-glow hero-glow--a" />
        <div aria-hidden className="hero-glow hero-glow--b" />

        {/* Readability overlay - Balanced: Clear text center, visible image edges */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.92) 15%, rgba(255,255,255,0.82) 45%, rgba(255,255,255,0.55) 80%, rgba(255,255,255,0.2) 100%)",
          }}
        />

        {/* Content */}
        <div
          className="hero-inner"
          style={{
            position: "relative",
            textAlign: "center",
            maxWidth: 900,
            margin: "0 auto",
            color: "#151515",
            zIndex: 10,
          }}
        >
          <p className="hero-pill" style={{ marginBottom: 24 }}>
            Simple budgeting • Clear insights • Less stress
          </p>

          <h1 className="hero-title" style={{ marginBottom: 24 }}>
            Ready to feel in control <br />
            of your <span style={{ color: "var(--brand)" }}>money again?</span>
          </h1>

          <p className="hero-subtitle" style={{ marginBottom: 42 }}>
            Start today. In minutes you'll see your spending clearly.
          </p>

          <div
            className="hero-actions"
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a className="btn btn-primary hero-btn-lg" href="#pricing">
              Start Now <span aria-hidden>→</span>
            </a>
            <a className="btn hero-btn-secondary-lg" href="#features">
              See features
            </a>
          </div>

          <p className="small hero-note" style={{ marginTop: 24 }}>
            No confusion. No stress. Just clarity.
          </p>
        </div>

        {/* Styles */}
        <style>{`
          /* Typography Scaling */
          .hero-title {
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            font-size: clamp(42px, 5.5vw, 76px); 
            line-height: 1.05;
            letter-spacing: -0.03em;
            text-shadow: 0 20px 40px rgba(255,255,255,0.9);
            animation: heroFadeUp 700ms both;
            animation-delay: 160ms;
          }

          .hero-subtitle {
            font-size: clamp(18px, 2vw, 22px);
            line-height: 1.6;
            color: rgba(30,30,30,0.85);
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            animation: heroFadeUp 700ms both;
            animation-delay: 240ms;
          }

          /* Buttons */
          .hero-btn-lg {
            height: 52px;
            padding: 0 28px;
            font-size: 16px;
            font-weight: 600;
            position: relative;
            overflow: hidden;
            transition: transform 180ms ease;
          }
          .hero-btn-lg:hover {
            transform: translateY(-2px);
          }
          .hero-btn-lg::after {
            content: "";
            position: absolute;
            inset: -40%;
            background: linear-gradient(
              120deg,
              transparent 35%,
              rgba(255,255,255,0.35) 50%,
              transparent 65%
            );
            transform: translateX(-60%) rotate(10deg);
            animation: heroShimmer 3.8s ease-in-out infinite;
          }

          .hero-btn-secondary-lg {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 52px;
            padding: 0 28px;
            font-size: 16px;
            background: rgba(255,255,255,0.55);
            border: 1px solid rgba(0,0,0,0.1);
            border-radius: 999px;
            font-weight: 600;
            backdrop-filter: blur(10px);
            transition: transform 180ms ease, background 180ms ease;
            color: var(--text);
          }
          .hero-btn-secondary-lg:hover {
            transform: translateY(-2px);
            background: rgba(255,255,255,0.85);
          }

          /* Entrance animation */
          .hero-inner {
            animation: heroFadeUp 700ms cubic-bezier(.2,.8,.2,1) both;
          }

          .hero-pill {
            display: inline-flex;
            padding: 10px 18px;
            border-radius: 999px;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.02em;
            background: rgba(255,255,255,0.65);
            border: 1px solid rgba(0,0,0,0.08);
            backdrop-filter: blur(8px);
            color: var(--brand); 
            box-shadow: 0 4px 20px rgba(0,0,0,0.04);
            animation: heroFadeUp 700ms both;
            animation-delay: 80ms;
          }

          .hero-actions {
            animation: heroFadeUp 700ms both;
            animation-delay: 320ms;
          }

          .hero-note {
            opacity: 0.7;
            animation: heroFadeUp 700ms both;
            animation-delay: 400ms;
          }

          /* Glow blobs */
          .hero-glow {
            position: absolute;
            width: 600px;
            height: 600px;
            border-radius: 50%;
            filter: blur(60px);
            opacity: 0.6;
            pointer-events: none;
            mix-blend-mode: soft-light;
            animation: heroFloat 8s ease-in-out infinite;
          }

          .hero-glow--a {
            left: -10%;
            top: -20%;
            background: radial-gradient(circle, rgba(255,180,120,0.7), transparent 60%);
          }

          .hero-glow--b {
            right: -10%;
            bottom: -20%;
            background: radial-gradient(circle, rgba(120,180,255,0.7), transparent 60%);
            animation-delay: 1s;
          }

          /* Keyframes */
          @keyframes heroFadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes heroFloat {
            0%,100% { transform: translate(0,0) scale(1); }
            50% { transform: translate(20px, 30px) scale(1.05); }
          }

          @keyframes heroShimmer {
            0%,65% { opacity: 0; }
            100% { transform: translateX(60%) rotate(10deg); opacity: 0; }
          }

          @media (max-width: 768px) {
            .hero-title { font-size: 42px; }
            .hero-card { padding: 48px 18px !important; }
            .hero-btn-lg, .hero-btn-secondary-lg { height: 48px; padding: 0 20px; width: 100%; }
          }

          @media (prefers-reduced-motion: reduce) {
            * {
              animation: none !important;
              transition: none !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}