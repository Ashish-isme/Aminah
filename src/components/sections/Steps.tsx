import { useMemo } from "react";

type StepData = {
  number: number;
  title: string;
  description: string;
};

function StepItem({ number, title, description }: StepData) {
  return (
    <div className="hw-stepCard">
      <div className="hw-stepNum">
        {number}
      </div>
      <div className="hw-stepContent">
        <h3 className="hw-stepTitle">{title}</h3>
        <p className="hw-stepDesc">{description}</p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const steps: StepData[] = useMemo(
    () => [
      {
        number: 1,
        title: "Connect or Upload",
        description: "Link accounts or upload receipts – however you want.",
      },
      {
        number: 2,
        title: "Haseeb Organizes It",
        description: "AI + smart rules sort everything into clean categories.",
      },
      {
        number: 3,
        title: "Ask. Learn. Act.",
        description: "Ask Haseeb questions in everyday language.",
      },
    ],
    []
  );

  return (
    <section className="section hw-section">
      <div className="container">
        <div className="steps-grid hw-gridAlign">
          {/* Left Column: Content */}
          <div className="hw-content">
            <header className="hw-header">
              <h2 className="title hw-mainTitle">
                Get Clarity in <span className="hw-titleSerif">3 Easy Steps</span>
              </h2>
              <p className="hw-subtitle">
                Your spending, sorted and summarized in minutes.
              </p>
            </header>

            <div className="hw-stepsList">
              {steps.map((step) => (
                <StepItem key={step.number} {...step} />
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="hw-imageWrapper">
            <img
              src="src/assets/aminah-chat.png"
              alt="Haseeb AI chat interface sorting finances"
              className="hw-phoneImage"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Styles
const styles = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap');

:root {
  --brand: #2F5A55;
  --brand-2: #254842;
  --text: #1a1a1a;
  --muted: #666;
  --muted-2: #999;
  --border: #e5e5e5;
  --surface-2: rgba(255, 255, 255, 0.8);
  --shadow-soft: 0 4px 24px rgba(0, 0, 0, 0.04);
  --container: 1200px;
  --radius: 12px;
  --bg: #ffffff;
}

* { 
  box-sizing: border-box; 
  margin: 0;
  padding: 0;
}

html, body { 
  height: 100%; 
}

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  color: var(--text);
  background: #ffffff;
}

a { 
  color: inherit; 
  text-decoration: none; 
}

button { 
  font-family: inherit; 
}

h1, h2, h3 {
  margin: 0;
  letter-spacing: -0.02em;
}

p { 
  margin: 0; 
  color: var(--muted); 
  line-height: 1.65; 
}

.section {
  padding: 72px 0;
}

.title {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 38px;
  line-height: 1.1;
}

.container {
  width: 100%;
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 16px;
}

.steps-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 80px;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
}

/* --- How It Works Section --- */

.hw-section {
  background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
  overflow: visible;
  padding: 120px 0;
  position: relative;
}

/* Typography tweaks */
.hw-header {
  margin-bottom: 48px;
  text-align: left;
}

.hw-mainTitle {
  margin-bottom: 16px;
  color: #1a1a1a;
  font-size: 42px;
}

.hw-titleSerif {
  font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
  color: #2F5A55;
  font-style: italic;
  font-weight: 500;
}

.hw-subtitle {
  font-size: 18px;
  color: #666;
  max-width: 420px;
}

/* Step Cards */
.hw-stepsList {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 500px;
}

.hw-stepCard {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  padding: 24px 32px;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #f0f0f0;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04); 
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hw-stepCard:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border-color: rgba(47, 90, 85, 0.1);
}

.hw-stepNum {
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  background-color: #2F5A55;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
  margin-top: 2px;
}

.hw-stepContent {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.hw-stepTitle {
  font-size: 19px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 4px;
}

.hw-stepDesc {
  font-size: 16px;
  color: #666;
  line-height: 1.5;
}

/* Right Side Image Area */
.hw-imageWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-left: 40px;
}

.hw-phoneImage {
  width: 100%;
  max-width: 520px;
  height: auto;
  filter: drop-shadow(0 30px 60px rgba(0,0,0,0.18)); 
  transform: translateY(0);
  transition: transform 0.3s ease;
}

.hw-phoneImage:hover {
  transform: translateY(-8px);
}

/* Mobile Responsiveness */
@media (max-width: 900px) {
  .steps-grid {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .hw-section {
    padding: 80px 0;
  }

  .hw-header {
    text-align: center;
    margin-bottom: 32px;
  }

  .hw-subtitle {
    margin: 0 auto;
  }

  .hw-stepsList {
    margin: 0 auto;
    width: 100%;
  }

  .hw-stepCard {
    text-align: left;
    padding: 20px;
  }

  .hw-imageWrapper {
    padding-left: 0;
  }

  .hw-phoneImage {
    max-width: 380px;
  }

  .hw-mainTitle {
    font-size: 32px;
  }
}

@media (max-width: 600px) {
  .hw-mainTitle {
    font-size: 28px;
  }

  .hw-subtitle {
    font-size: 16px;
  }

  .hw-section {
    padding: 60px 0;
  }

  .hw-phoneImage {
    max-width: 300px;
  }
}
`;

// Inject styles
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);