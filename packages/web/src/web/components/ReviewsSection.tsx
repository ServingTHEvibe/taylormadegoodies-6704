import { useEffect, useRef } from "react";

const reviews = [
  { quote: "Looked like a magazine cover and tasted like home.", author: "A. Johnson", stars: 5 },
  { quote: "On time, perfect design, zero crumbs left. The best cake we've ever had!", author: "D. Carter", stars: 5 },
  { quote: "Beautiful and delicious—exactly what we wanted for our special day.", author: "M. Reyes", stars: 5 },
  { quote: "She made our daughter's birthday so special. Every guest asked for the recipe!", author: "T. Williams", stars: 5 },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "3px", marginBottom: "1rem" }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "var(--accent)", fontSize: "1rem" }}>★</span>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLDivElement>(".review-card");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cards.forEach((card, i) => setTimeout(() => { card.style.opacity = "1"; card.style.transform = "translateY(0)"; }, i * 120));
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="reviews"
      className="graffiti-section"
      style={{ background: "var(--surface)", padding: "7rem 2rem", overflow: "hidden" }}
    >
      {/* Darker overlay here since surface is already lighter */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(20,20,20,0.88)", zIndex: 0, pointerEvents: "none" }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: "4rem" }}>
          <p style={{ fontFamily: "var(--font-script)", fontSize: "1.8rem", color: "var(--accent)", marginBottom: "0.5rem" }}>Real Reviews</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 8vw, 90px)", letterSpacing: "0.03em", color: "var(--text)", lineHeight: 1 }}>
            HAPPY CUSTOMERS
          </h2>
        </div>

        <div ref={containerRef} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem" }}>
          {reviews.map((review, i) => (
            <div
              key={i}
              className="review-card"
              style={{
                background: "rgba(13,13,13,0.9)",
                backdropFilter: "blur(8px)",
                border: "1px solid var(--border)",
                borderTop: "3px solid var(--accent)",
                padding: "2rem",
                opacity: 0,
                transform: "translateY(24px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              <Stars count={review.stars} />
              <p style={{ fontFamily: "var(--font-script)", fontSize: "1.25rem", color: "var(--text)", lineHeight: 1.5, marginBottom: "1.5rem" }}>
                "{review.quote}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--surface-2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: 700, color: "var(--accent)", fontFamily: "var(--font-display)", letterSpacing: "1px" }}>
                  {review.author.charAt(0)}
                </div>
                <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "1px", color: "var(--text-muted)", textTransform: "uppercase" }}>
                  — {review.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
