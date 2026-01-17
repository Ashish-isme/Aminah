export default function Hero() {
  return (
    <section
      id="get-started"
      className="section"
      style={{ paddingTop: 48, paddingBottom: 72 }}
    >
      <div
        className="card hero-card"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "88px 24px 64px",
          backgroundImage: "url('/src/assets/Hero_Section_Image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow:
            "0 24px 70px rgba(0,0,0,0.14), 0 8px 18px rgba(0,0,0,0.08)",
        }}
      >
        {/* Animated background glow */}
        <div aria-hidden className="hero-glow hero-glow--a" />
        <div aria-hidden className="hero-glow hero-glow--b" />

        {/* Readability overlay */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.78) 36%, rgba(255,255,255,0.28) 70%, rgba(255,255,255,0.08) 100%)",
          }}
        />

        {/* Content */}
        <div
          className="hero-inner"
          style={{
            position: "relative",
            textAlign: "center",
            maxWidth: 760,
            margin: "0 auto",
            color: "#151515",
          }}
        >
          <p className="hero-pill" style={{ marginBottom: 16 }}>
            Simple budgeting • Clear insights • Less stress
          </p>

          <h1 className="title-lg hero-title" style={{ marginBottom: 14 }}>
            Ready to feel in control <br />
            of your money again?
          </h1>

          <p className="hero-subtitle" style={{ marginBottom: 28 }}>
            Start today. In minutes you'll see your spending clearly.
          </p>

          <div
            className="hero-actions"
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a className="btn btn-primary hero-btn" href="#pricing">
              Start Now <span aria-hidden>→</span>
            </a>
            <a className="btn hero-btn-secondary" href="#features">
              See features
            </a>
          </div>

          <p className="small hero-note" style={{ marginTop: 16 }}>
            No confusion. No stress. Just clarity.
          </p>
        </div>

        {/* Styles */}
        <style>{`
          /* Entrance animation */
          .hero-inner {
            animation: heroFadeUp 700ms cubic-bezier(.2,.8,.2,1) both;
          }

          .hero-pill {
            display: inline-flex;
            padding: 8px 14px;
            border-radius: 999px;
            font-size: 13px;
            font-weight: 600;
            background: rgba(255,255,255,0.55);
            border: 1px solid rgba(0,0,0,0.08);
            backdrop-filter: blur(8px);
            animation: heroFadeUp 700ms both;
            animation-delay: 80ms;
          }

          .hero-title {
            letter-spacing: -0.02em;
            text-shadow: 0 10px 26px rgba(255,255,255,0.55);
            animation: heroFadeUp 700ms both;
            animation-delay: 160ms;
          }

          .hero-subtitle {
            font-size: 18px;
            color: rgba(30,30,30,0.9);
            animation: heroFadeUp 700ms both;
            animation-delay: 240ms;
          }

          .hero-actions {
            animation: heroFadeUp 700ms both;
            animation-delay: 320ms;
          }

          .hero-note {
            opacity: 0.85;
            animation: heroFadeUp 700ms both;
            animation-delay: 400ms;
          }

          /* Buttons */
          .hero-btn {
            position: relative;
            overflow: hidden;
            transition: transform 180ms ease;
          }

          .hero-btn:hover {
            transform: translateY(-2px);
          }

          .hero-btn::after {
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

          .hero-btn-secondary {
            background: rgba(255,255,255,0.55);
            border: 1px solid rgba(0,0,0,0.1);
            padding: 10px 14px;
            border-radius: 12px;
            font-weight: 600;
            backdrop-filter: blur(10px);
            transition: transform 180ms ease, background 180ms ease;
          }

          .hero-btn-secondary:hover {
            transform: translateY(-2px);
            background: rgba(255,255,255,0.7);
          }

          /* Glow blobs */
          .hero-glow {
            position: absolute;
            width: 520px;
            height: 520px;
            border-radius: 50%;
            filter: blur(50px);
            opacity: 0.55;
            pointer-events: none;
            mix-blend-mode: soft-light;
            animation: heroFloat 8s ease-in-out infinite;
          }

          .hero-glow--a {
            left: -180px;
            top: -220px;
            background: radial-gradient(circle, rgba(255,180,120,0.6), transparent 60%);
          }

          .hero-glow--b {
            right: -200px;
            bottom: -260px;
            background: radial-gradient(circle, rgba(120,180,255,0.6), transparent 60%);
            animation-delay: 1s;
          }

          /* Keyframes */
          @keyframes heroFadeUp {
            from { opacity: 0; transform: translateY(14px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes heroFloat {
            0%,100% { transform: translate(0,0) scale(1); }
            50% { transform: translate(16px, 20px) scale(1.03); }
          }

          @keyframes heroShimmer {
            0%,65% { opacity: 0; }
            100% { transform: translateX(60%) rotate(10deg); opacity: 0; }
          }

          @media (max-width: 720px) {
            .hero-subtitle { font-size: 16px; }
            .hero-card { padding: 72px 18px 56px !important; }
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