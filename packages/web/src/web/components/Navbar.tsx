import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#story" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Order", href: "#order" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 2rem",
        height: "68px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled
          ? "rgba(13,13,13,0.95)"
          : "rgba(13,13,13,0.4)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(232,185,79,0.15)" : "none",
        transition: "background 0.3s ease, border-bottom 0.3s ease",
      }}
    >
      {/* Logo */}
      <a href="#hero" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
        <img
          src="/logo.png"
          alt="Taylor Made Goodies"
          style={{
            height: "54px",
            width: "auto",
            objectFit: "contain",
            filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.6))",
          }}
        />
      </a>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="hidden md:flex">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              fontSize: "0.85rem",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#order"
          style={{
            background: "var(--accent)",
            color: "#0d0d0d",
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: "0.8rem",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            textDecoration: "none",
            padding: "8px 20px",
            borderRadius: "100px",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Order Now
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          padding: "4px",
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "var(--text)",
              borderRadius: "2px",
              transition: "transform 0.2s, opacity 0.2s",
              transform:
                menuOpen
                  ? i === 0
                    ? "translateY(7px) rotate(45deg)"
                    : i === 2
                    ? "translateY(-7px) rotate(-45deg)"
                    : "scaleX(0)"
                  : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }}
          />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "68px",
            left: 0,
            right: 0,
            background: "rgba(13,13,13,0.98)",
            backdropFilter: "blur(20px)",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            borderBottom: "1px solid var(--border)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                letterSpacing: "4px",
                color: "var(--text)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
