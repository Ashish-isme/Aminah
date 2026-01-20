import Container from "../layout/container";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import profileImg from "../../assets/Profile_sample.jpg";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

function TestimonialCard({
  quote,
  name,
  role,
  avatar,
  onClick,
}: Testimonial & { onClick?: () => void }) {
  return (
    <article className="t-card" onClick={onClick} style={{ cursor: onClick ? "pointer" : "default" }}>
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
      { quote: "I save more without feeling restricted.", name: "Omar", role: "Consultant", avatar: profileImg},
    ],
    []
  );

  // 3 per slide desktop, 2 per slide <=900px
  const getPerSlide = () => (typeof window !== "undefined" && window.matchMedia("(max-width: 900px)").matches ? 2 : 3);

  const [perSlide, setPerSlide] = useState<number>(() => (typeof window === "undefined" ? 3 : getPerSlide()));
  const [currentSlide, setCurrentSlide] = useState(0);

  // autoplay pause state
  const [isInteracting, setIsInteracting] = useState(false);

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
    [testimonials, perSlide, slideCount]
  );

  useEffect(() => {
    // keep index valid if perSlide changes
    setCurrentSlide((s) => Math.min(s, Math.max(0, slideCount - 1)));
  }, [slideCount]);

  const next = () => setCurrentSlide((s) => (s + 1) % slideCount);
  const prev = () => setCurrentSlide((s) => (s - 1 + slideCount) % slideCount);

  // ✅ Autoplay (every 4s). Pauses while interacting.
  useEffect(() => {
    if (isInteracting) return;
    const id = window.setInterval(() => next(), 4000);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInteracting, slideCount]);

  // ✅ Swipe handling (touch/pointer)
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);
  const isSwiping = useRef(false);

  const onPointerDown = (e: React.PointerEvent) => {
    // only handle primary touch/pen/mouse
    startX.current = e.clientX;
    startY.current = e.clientY;
    isSwiping.current = false;
    setIsInteracting(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (startX.current == null || startY.current == null) return;

    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;

    // begin swipe only if horizontal intent
    if (!isSwiping.current) {
      if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) {
        isSwiping.current = true;
      } else if (Math.abs(dy) > 10) {
        // user is scrolling vertically; stop interfering
        startX.current = null;
        startY.current = null;
        setIsInteracting(false);
      }
    }
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current == null) {
      setIsInteracting(false);
      return;
    }

    const dx = e.clientX - startX.current;

    // swipe threshold
    const threshold = 50;

    if (isSwiping.current) {
      if (dx <= -threshold) next();
      if (dx >= threshold) prev();
    }

    startX.current = null;
    startY.current = null;
    isSwiping.current = false;

    // resume autoplay shortly after interaction
    window.setTimeout(() => setIsInteracting(false), 800);
  };

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
          <div
            className="t-viewport"
            // Important: allows horizontal swipe without breaking vertical scroll
            style={{ touchAction: "pan-y" }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <div
              className="t-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((group, idx) => (
                <div className="t-slide" key={idx} aria-hidden={idx !== currentSlide}>
                  <div className="t-grid">
                    {group.map((t, i) => (
                      <TestimonialCard
                        key={`${t.name}-${i}`}
                        {...t}
                        onClick={() => {
                          // clicking any card moves to next slide
                          setIsInteracting(true);
                          next();
                          window.setTimeout(() => setIsInteracting(false), 800);
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* arrows (hidden on mobile by your CSS) */}
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
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
