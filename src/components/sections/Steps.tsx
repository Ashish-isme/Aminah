import { useMemo } from "react";
import aminahChat from "../../assets/3-steps.png"; 

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
      {/* The Image is now a background layer. 
        It sits absolutely behind the content but spans full width.
      */}
      <div className="hw-bgLayer">
        <img
          src={aminahChat}
          alt="Haseeb AI chat interface sorting finances"
          className="hw-fullImage"
          loading="lazy"
        />
      </div>

      <div className="container hw-container-relative">
        {/* Content sits on top (z-index higher) */}
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
      </div>
    </section>
  );
}