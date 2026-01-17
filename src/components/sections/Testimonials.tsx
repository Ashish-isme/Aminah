import Container from "../layout/container";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string; // image path/url
};

function TestimonialCard({ quote, name, role, avatar }: Testimonial) {
  return (
    <article className="t-card">
      <div className="t-cardInner">
        <div className="t-avatarWrap">
          <img className="t-avatar" src={avatar} alt={`${name} portrait`} />
        </div>

        <div className="t-quoteMark" aria-hidden="true">
          “
        </div>

        <p className="t-quote">“{quote}”</p>

        <div className="t-person">
          <div className="t-name">{name}</div>
          <div className="t-role">{role}</div>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const testimonials: Testimonial[] = useMemo(
    () => [
      {
        quote: "I finally understand my money.",
        name: "Yasmin",
        role: "Teacher",
        avatar: "/images/testimonials/yasmin.jpg",
      },
      {
        quote: "Seeing my spending trends changed my life.",
        name: "Khalid",
        role: "Engineer",
        avatar: "/images/testimonials/khalid.jpg",
      },
      {
        quote: "Aminah makes financial clarity feel good.",
        name: "Sara",
        role: "Freelancer",
        avatar: "/images/testimonials/sara.jpg",
      },
      {
        quote: "It helped me plan without stress.",
        name: "Haseeb",
        role: "Product Designer",
        avatar: "/images/testimonials/haseeb.jpg",
      },
      {
        quote: "The weekly overview is everything.",
        name: "Noor",
        role: "Student",
        avatar: "/images/testimonials/noor.jpg",
      },
      {
        quote: "I save more without feeling restricted.",
        name: "Omar",
        role: "Consultant",
        avatar: "/images/testimonials/omar.jpg",
      },
    ],
    []
  );

  const perSlide = 3;
  const slideCount = Math.ceil(testimonials.length / perSlide);

  const slides = Array.from({ length: slideCount }, (_, s) =>
    testimonials.slice(s * perSlide, s * perSlide + perSlide)
  );

  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => setCurrentSlide((s) => (s + 1) % slideCount);
  const prev = () => setCurrentSlide((s) => (s - 1 + slideCount) % slideCount);

  return (
    <section id="testimonials" className="t-section">
      <Container>
        <header className="t-header">
          <h2 className="title t-title">What People Are Saying</h2>
          <p className="t-subtitle">See how smart tracking saves time and stress.</p>
        </header>

        <div className="t-shell" aria-roledescription="carousel">
          <div className="t-viewport">
            <div
              className="t-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((group, idx) => (
                <div className="t-slide" key={idx} aria-hidden={idx !== currentSlide}>
                  <div className="t-grid">
                    {group.map((t, i) => (
                      <TestimonialCard key={`${t.name}-${i}`} {...t} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="t-arrow t-arrowLeft"
            onClick={prev}
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            className="t-arrow t-arrowRight"
            onClick={next}
            aria-label="Next testimonials"
          >
            <ChevronRight size={20} />
          </button>

          <div className="t-dots" aria-label="Testimonial slides">
            {Array.from({ length: slideCount }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`t-dot ${idx === currentSlide ? "isActive" : ""}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={idx === currentSlide ? "true" : "false"}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
