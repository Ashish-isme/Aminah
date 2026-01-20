import { useMemo } from "react";
// Ensure you point this to the "clean" version (Image 2)
import aminahChat from "../../assets/aminah-chat.png"; 

type StepData = {
  number: number;
  title: string;
  description: string;
};

function StepItem({ number, title, description }: StepData) {
  return (
    <div className="hw-stepCard">
      <div className="hw-stepNumWrapper">
        <div className="hw-stepNum">{number}</div>
        {/* The connector line below the number */}
        <div className="hw-connector" />
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
        description: "Link accounts or upload receipts instantly—however you prefer.",
      },
      {
        number: 2,
        title: "Haseeb Organizes It",
        description: "AI + smart rules automatically sort everything into clean categories.",
      },
      {
        number: 3,
        title: "Ask. Learn. Act.",
        description: "Chat with Haseeb in everyday language to get clarity on your spending.",
      },
    ],
    []
  );

  return (
    <section className="section hw-section">
      <div className="container">
        <div className="hw-grid">
          {/* Left Column: Content */}
          <div className="hw-content">
            <header className="hw-header">
              <div className="pill mb-4">How it works</div>
              <h2 className="title hw-mainTitle">
                Get clarity in <span className="hw-titleSerif">3 easy steps</span>
              </h2>
              <p className="hw-subtitle">
                Your spending, sorted and summarized in minutes—so you can focus on what matters.
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
            <div className="hw-blob" /> {/* Decorative background blob */}
            <img
              src={aminahChat}
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