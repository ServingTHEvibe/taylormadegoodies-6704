import { useEffect, useRef } from "react";

const storyText = `My love for baking is a family tradition, passed down from my grandmothers and my mom. Growing up, I watched them create delicious treats with care and that same joy inspires me today. For me, baking isn't just about mixing ingredients — it's about bringing people together and making them smile with every bite. I pour my heart into each creation, and there's nothing I enjoy more than seeing others enjoy and celebrate with my baked goods.`;

const storyText2 = `What sets us apart? It's our unwavering commitment to using only the finest, freshest ingredients, combined with time-honored recipes. We never cut corners, and we certainly never infuse our treats with anything but pure, wholesome goodness. From our decadent cakes to our chewy cookies, each item is crafted with meticulous attention to detail, ensuring a taste that's both familiar and extraordinary. We're proud to be a part of the Atlanta community, serving up smiles one sweet treat at a time.`;

function WordReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const words = container.querySelectorAll<HTMLSpanElement>(".word-reveal-word");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          words.forEach((word, i) => setTimeout(() => word.classList.add("revealed"), delay + i * 38));
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 });
    observer.observe(container);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <p ref={containerRef} style={{ fontFamily: "var(--font-body)", fontSize: "clamp(1rem, 1.8vw, 1.15rem)", color: "rgba(245,240,232,0.88)", lineHeight: 1.85, maxWidth: "640px" }}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="word-reveal-word" style={{ marginRight: "0.3em" }}>{word}</span>
      ))}
    </p>
  );
}

export default function ScrollReveal() {
  const badgesRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = badgesRef.current;
    if (!el) return;
    const badges = el.querySelectorAll<HTMLDivElement>(".badge-item");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          badges.forEach((badge, i) => setTimeout(() => { badge.style.opacity = "1"; badge.style.transform = "translateY(0)"; }, i * 150));
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="story"
      className="graffiti-section"
      style={{ background: "var(--bg)", padding: "7rem 2rem", overflow: "hidden" }}
    >
      {/* Dark overlay */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(13,13,13,0.85)", zIndex: 0, pointerEvents: "none" }} />

      {/* Left gold accent line */}
      <div style={{ position: "absolute", left: 0, top: "10%", bottom: "10%", width: "3px", background: "linear-gradient(to bottom, transparent, var(--accent), transparent)", zIndex: 1 }} />

      <div
        style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start", position: "relative", zIndex: 1 }}
        className="story-grid"
      >
        {/* Left */}
        <div>
          <p style={{ fontFamily: "var(--font-script)", fontSize: "1.5rem", color: "var(--accent)", marginBottom: "1rem" }}>Our Story</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(56px, 9vw, 110px)", lineHeight: 0.9, letterSpacing: "0.02em", color: "var(--text)", marginBottom: "3rem" }}>
            MADE<br />WITH<br /><span style={{ color: "var(--accent)" }}>LOVE</span>
          </h2>
          <blockquote style={{ borderLeft: "3px solid var(--accent)", paddingLeft: "1.5rem", marginBottom: "2rem" }}>
            <p style={{ fontFamily: "var(--font-script)", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", color: "var(--text)", lineHeight: 1.4 }}>
              "Desserts that taste like home but look like a celebration."
            </p>
          </blockquote>
          <div ref={badgesRef} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {["Made with Love", "Finest Ingredients", "Atlanta Proud", "Happy Customers"].map((b) => (
              <div key={b} className="badge-item" style={{ display: "flex", alignItems: "center", gap: "10px", opacity: 0, transform: "translateY(12px)", transition: "opacity 0.5s ease, transform 0.5s ease" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "0.9rem", letterSpacing: "1px", color: "var(--text-muted)", textTransform: "uppercase" }}>{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — word reveal + brand photo */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", paddingTop: "1rem" }}>
          {/* Brand image */}
          <div style={{ position: "relative", overflow: "hidden", borderRadius: "4px", aspectRatio: "2/3", maxHeight: "480px" }}>
            <img
              src="/model-cake.png"
              alt="Taylor Made Goodies"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.5) 0%, transparent 60%)" }} />
          </div>
          <WordReveal text={storyText} delay={0} />
          <WordReveal text={storyText2} delay={200} />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .story-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
