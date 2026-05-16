const footerLinks = {
  Menu: ["Pound Cakes", "Sheet Cakes", "Mini Cakes", "Cookies", "Custom Orders"],
  Info: ["Our Story", "Gallery", "Reviews", "FAQ", "Admin Login"],
  Order: ["Order Now", "Pickup Info", "Local Delivery", "Deposit Info", "Contact Us"],
  Social: ["Instagram", "Facebook", "TikTok", "Twitter / X"],
};

export default function Footer() {
  return (
    <footer
      className="graffiti-section"
      style={{
        borderTop: "1px solid var(--border)",
        padding: "5rem 2rem 2rem",
        position: "relative",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(8,8,8,0.88)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      {/* Full-width footer video */}
      <div style={{ position: "relative", zIndex: 1, marginBottom: "4rem", overflow: "hidden", borderRadius: "4px", maxHeight: "420px" }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", height: "420px", objectFit: "cover", display: "block", opacity: 0.85 }}
        >
          <source src="/footer-video.mp4" type="video/mp4" />
        </video>
        {/* bottom fade into footer bg */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to bottom, transparent, rgba(8,8,8,0.95))", pointerEvents: "none" }} />
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Top row — logo + cols */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr repeat(4, 1fr)",
            gap: "3rem",
            marginBottom: "4rem",
          }}
          className="footer-grid"
        >
          {/* Brand col */}
          <div>
            <img
              src="/logo.png"
              alt="Taylor Made Goodies"
              style={{
                height: "120px",
                width: "auto",
                objectFit: "contain",
                marginBottom: "0.5rem",
                display: "block",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                lineHeight: 1.7,
                maxWidth: "220px",
                marginBottom: "1.5rem",
              }}
            >
              Scratch-made cakes, cookies, and sweets. Atlanta-based, never infused.
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {["IG", "FB", "TT", "X"].map((icon) => (
                <div
                  key={icon}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.65rem",
                    letterSpacing: "1px",
                    color: "var(--text-muted)",
                    cursor: "pointer",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text-muted)";
                  }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  letterSpacing: "3px",
                  color: "var(--accent)",
                  marginBottom: "1.25rem",
                  textTransform: "uppercase",
                }}
              >
                {title}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.85rem",
                        color: "var(--text-muted)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                        display: "inline-block",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "var(--border)",
            marginBottom: "1.5rem",
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              color: "var(--text-muted)",
            }}
          >
            © 2026 Taylor Made Goodies. All Rights Reserved.
          </p>
          <p
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "1.1rem",
              color: "rgba(232,185,79,0.5)",
            }}
          >
            Baked with ♥ in Atlanta, GA
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
