export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#000",
      }}
    >
      {/* Full-screen background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.9,
        }}
      >
        <source src="/hero-logo.mp4" type="video/mp4" />
      </video>

      {/* Subtle vignette overlay — darkens edges so content pops */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 30%, rgba(0,0,0,0.75) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom gradient fade into next section */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "220px",
          background:
            "linear-gradient(to bottom, transparent, #0d0d0d)",
          pointerEvents: "none",
        }}
      />

      {/* Content overlay — sits on top of video */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "120px 1.5rem 3rem",
          width: "100%",
          maxWidth: "800px",
        }}
      >
        {/* Tagline badge */}
        <div
          className="hero-animate hero-delay-1"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(232,185,79,0.15)",
            border: "1px solid rgba(232,185,79,0.5)",
            borderRadius: "100px",
            padding: "6px 18px",
            marginBottom: "1.5rem",
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />
          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "var(--accent)" }}>
            Atlanta's Scratch-Made Dessert Kitchen
          </span>
        </div>

        {/* Subtitle */}
        <p
          className="hero-animate hero-delay-2"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            color: "rgba(245,240,232,0.85)",
            maxWidth: "500px",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}
        >
          Scratch-made cakes, cookies, and custom sweets — never infused. Baked fresh for every occasion.
        </p>

        {/* CTA buttons */}
        <div
          className="hero-animate hero-delay-3"
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "3rem" }}
        >
          <a
            href="#order"
            style={{
              background: "var(--accent)",
              color: "#0d0d0d",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "0.9rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "14px 38px",
              borderRadius: "100px",
              display: "inline-block",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 24px rgba(232,185,79,0.35)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 6px 32px rgba(232,185,79,0.55)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(232,185,79,0.35)"; }}
          >
            Order Now
          </a>
          <a
            href="#menu"
            style={{
              background: "rgba(245,240,232,0.1)",
              color: "var(--text)",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "0.9rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "14px 38px",
              borderRadius: "100px",
              border: "1px solid rgba(245,240,232,0.3)",
              backdropFilter: "blur(8px)",
              display: "inline-block",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(245,240,232,0.3)"; e.currentTarget.style.color = "var(--text)"; }}
          >
            View Menu
          </a>
        </div>

        {/* Pills */}
        <div
          className="hero-animate hero-delay-4"
          style={{ display: "flex", gap: "0.6rem", justifyContent: "center", flexWrap: "wrap" }}
        >
          {["Made to Order", "Scratch-Made", "Atlanta Local", "Never Infused"].map((label) => (
            <span key={label} style={{
              background: "rgba(245,240,232,0.07)",
              border: "1px solid rgba(245,240,232,0.15)",
              borderRadius: "100px",
              padding: "5px 14px",
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "1px",
              color: "rgba(245,240,232,0.65)",
            }}>
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position: "absolute", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "5px", opacity: 0.45, zIndex: 10 }}>
        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", letterSpacing: "3px", textTransform: "uppercase", color: "var(--text-muted)" }}>Scroll</span>
        <div style={{ width: 1, height: 36, background: "linear-gradient(to bottom, var(--accent), transparent)" }} />
      </div>
    </section>
  );
}
