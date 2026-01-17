import Container from "../layout/container";

function Testimonial({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <div className="card" style={{ padding: 18 }}>
      <div className="quote">“</div>
      <div style={{ marginTop: 8, fontWeight: 600, color: "var(--text)" }}>{quote}</div>
      <div style={{ marginTop: 12 }} className="small">
        <div style={{ fontWeight: 650, color: "var(--text)" }}>{name}</div>
        <div className="muted">{role}</div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section" style={{ paddingTop: 10 }}>
      <Container>
        <div style={{ textAlign: "center" }}>
          <h2 className="title">
            What People Are Saying
          </h2>
          <p style={{ marginTop: 10 }}>See how smart tracking saves time and stress.</p>
        </div>

        <div className="grid-3" style={{ marginTop: 22 }}>
          <Testimonial quote="I finally understand my money." name="Yasmin" role="Teacher" />
          <Testimonial quote="Seeing my spending trends changed my life." name="Khalid" role="Engineer" />
          <Testimonial quote="Aminah makes financial clarity feel good." name="Sara" role="Freelancer" />
        </div>
      </Container>
    </section>
  );
}
