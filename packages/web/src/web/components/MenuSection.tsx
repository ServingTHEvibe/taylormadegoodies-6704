const menuCategories = [
  {
    title: "POUND CAKES",
    color: "var(--accent)",
    items: [
      { name: "Sour Cream · 7Up · Lemon · Strawberry", price: "$50" },
      { name: "Rude Boi Pound Cake (Jamaican Rum)", price: "$60" },
    ],
    slices: "Slices: Small $3 · Large $6",
  },
  {
    title: "SHEET / 2-LAYER CAKES",
    color: "#D94F3D",
    items: [
      { name: "Carrot · Key Lime · Strawberry · Red Velvet", price: "$40" },
    ],
    slices: null,
  },
  {
    title: "MINI CAKES",
    color: "#B5A67A",
    items: [{ name: "Same flavors as sheet cakes", price: "$8" }],
    slices: null,
  },
  {
    title: "COOKIES",
    color: "var(--accent)",
    items: [
      { name: "Batch Cookies (assorted)", price: "from $15" },
      { name: "Logo / Custom Cookies", price: "Custom pricing" },
    ],
    slices: null,
  },
];

export default function MenuSection() {
  return (
    <section
      id="menu"
      className="graffiti-section"
      style={{ background: "var(--bg)", padding: "7rem 2rem", overflow: "hidden" }}
    >
      {/* Dark overlay to keep text legible over graffiti */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(13,13,13,0.82)", zIndex: 0, pointerEvents: "none" }} />

      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontFamily: "var(--font-script)", fontSize: "1.8rem", color: "var(--accent)", marginBottom: "0.5rem" }}>
            Our Menu
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 8vw, 90px)", letterSpacing: "0.05em", color: "var(--text)", lineHeight: 1 }}>
            GOODIES MENU
          </h2>
        </div>

        {/* Menu grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "2px" }}>
          {menuCategories.map((cat) => (
            <div
              key={cat.title}
              style={{
                background: "rgba(22,22,22,0.92)",
                backdropFilter: "blur(4px)",
                padding: "2.5rem",
                borderTop: `3px solid ${cat.color}`,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(30,30,30,0.96)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(22,22,22,0.92)")}
            >
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px, 3.5vw, 34px)", letterSpacing: "0.05em", color: cat.color, marginBottom: "1.5rem", borderBottom: `1px solid ${cat.color}40`, paddingBottom: "1rem" }}>
                {cat.title}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {cat.items.map((item) => (
                  <div key={item.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text)", lineHeight: 1.4, flex: 1 }}>
                      {item.name}
                    </span>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: cat.color, letterSpacing: "0.05em", flexShrink: 0 }}>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
              {cat.slices && (
                <p style={{ marginTop: "1rem", fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--text-muted)", fontStyle: "italic" }}>
                  {cat.slices}
                </p>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a
            href="#order"
            style={{ background: "var(--accent)", color: "#0d0d0d", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none", padding: "14px 40px", borderRadius: "100px", display: "inline-block", transition: "transform 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Place Your Order
          </a>
        </div>
      </div>
    </section>
  );
}
