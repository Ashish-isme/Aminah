import Container from "../layout/container";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import profileImg from "../../assets/Profile_sample.jpg";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
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
      { quote: "I finally understand my money.", name: "Yasmin", role: "Teacher", avatar: profileImg },
      { quote: "Seeing my spending trends changed my life.", name: "Khalid", role: "Engineer", avatar: profileImg },
      { quote: "Aminah makes financial clarity feel good.", name: "Sara", role: "Freelancer", avatar: profileImg },
      { quote: "It helped me plan without stress.", name: "Haseeb", role: "Product Designer", avatar: profileImg },
      { quote: "The weekly overview is everything.", name: "Noor", role: "Student", avatar: profileImg },
      { quote: "I save more without feeling restricted.", name: "Omar", role: "Consultant", avatar: profileImg },
    ],
    []
  );

  // ✅ responsive perSlide (mobile+tablet: 2, desktop: 3)
  const getPerSlide = () => (window.matchMedia("(max-width: 900px)").matches ? 2 : 3);

  const [perSlide, setPerSlide] = useState<number>(() => {
    // during SSR this may run without window; if SSR, default to 3
    if (typeof window === "undefined") return 3;
    return getPerSlide();
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const handler = () => setPerSlide(getPerSlide());

    handler();
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  const slideCount = Math.ceil(testimonials.length / perSlide);

  const slides = useMemo(
    () =>
      Array.from({ length: slideCount }, (_, s) =>
        testimonials.slice(s * perSlide, s * perSlide + perSlide)
      ),
    [testimonials, slideCount, perSlide]
  );

  // keep currentSlide valid when perSlide changes
  useEffect(() => {
    setCurrentSlide((s) => Math.min(s, Math.max(0, slideCount - 1)));
  }, [slideCount]);

  const next = () => setCurrentSlide((s) => (s + 1) % slideCount);
  const prev = () => setCurrentSlide((s) => (s - 1 + slideCount) % slideCount);

  return (
    <section id="testimonials" className="t-section">
      <Container>
        <header className="t-header">
          <h2 className="title t-title">
            What People Are <span className="t-highlight">Saying</span>
          </h2>
          <p className="t-subtitle">See how smart tracking saves time and stress.</p>
        </header>

        <div className="t-shell" aria-roledescription="carousel">
          <div className="t-viewport">
            <div className="t-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
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

          <button type="button" className="t-arrow t-arrowLeft" onClick={prev} aria-label="Previous testimonials">
            <ChevronLeft size={20} />
          </button>

          <button type="button" className="t-arrow t-arrowRight" onClick={next} aria-label="Next testimonials">
            <ChevronRight size={20} />
          </button>

          <div className="t-dots" aria-label="Testimonial slides">
            {Array.from({ length: slideCount }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`t-dot ${idx === currentSlide ? "isActive" : ""}`}
                onClick={() => setCurrentSlide(idx)}
                aria-current={idx === currentSlide ? "true" : "false"}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
