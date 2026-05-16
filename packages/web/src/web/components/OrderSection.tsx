export default function OrderSection() {
  return (
    <section
      id="order"
      className="graffiti-section"
      style={{ background: "var(--bg)", padding: "7rem 2rem", overflow: "hidden" }}
    >
      <div style={{ position: "absolute", inset: 0, background: "rgba(13,13,13,0.84)", zIndex: 0, pointerEvents: "none" }} />

      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: "4rem", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-script)", fontSize: "1.8rem", color: "var(--accent)", marginBottom: "0.5rem" }}>Ordering & Pickup</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 8vw, 90px)", letterSpacing: "0.03em", color: "var(--text)", lineHeight: 1 }}>
            READY TO ORDER?
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
          {[
            { icon: "🕐", title: "Hours", lines: ["Tue – Sat: 10AM – 6PM", "Sun & Mon: Closed"] },
            { icon: "📍", title: "Pickup Location", lines: ["Atlanta, GA", "Address shared at order confirmation"] },
            { icon: "🚗", title: "Local Delivery", lines: ["Limited local delivery by request", "Fee applies"] },
          ].map((item) => (
            <div key={item.title} style={{ background: "rgba(22,22,22,0.92)", backdropFilter: "blur(4px)", border: "1px solid var(--border)", padding: "2rem", borderRadius: "4px" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>{item.icon}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", letterSpacing: "0.05em", color: "var(--accent)", marginBottom: "0.5rem" }}>{item.title}</h3>
              {item.lines.map((line) => (
                <p key={line} style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{line}</p>
              ))}
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", background: "rgba(22,22,22,0.92)", backdropFilter: "blur(4px)", border: "1px solid var(--border)", borderTop: "3px solid var(--accent)", padding: "3rem 2rem", marginBottom: "3rem" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-muted)", maxWidth: "500px", margin: "0 auto 2rem" }}>
            Place an order directly through our form or call us with any questions. We can't wait to bake for you!
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://taylormadegoodies.com/#order" target="_blank" rel="noopener noreferrer"
              style={{ background: "var(--accent)", color: "#0d0d0d", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none", padding: "14px 36px", borderRadius: "100px", display: "inline-block", transition: "transform 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >Order Now</a>
            <a href="tel:+14045550000"
              style={{ background: "transparent", color: "var(--text)", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.9rem", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none", padding: "14px 36px", borderRadius: "100px", border: "1px solid var(--border)", display: "inline-block", transition: "border-color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            >Call Us</a>
          </div>
        </div>

        {/* Subscribe */}
        <div style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", letterSpacing: "0.08em", color: "var(--text)", marginBottom: "0.5rem" }}>GET 10% OFF</p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>Join our list for exclusive deals & new drops. No spam—just desserts.</p>
          <form style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap" }} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="your@email.com"
              style={{ background: "rgba(22,22,22,0.92)", border: "1px solid var(--border)", borderRadius: "100px", padding: "12px 20px", fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--text)", outline: "none", width: "260px", transition: "border-color 0.2s" }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            />
            <button type="submit"
              style={{ background: "var(--accent)", color: "#0d0d0d", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "2px", textTransform: "uppercase", padding: "12px 24px", borderRadius: "100px", border: "none", cursor: "pointer", transition: "opacity 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}
