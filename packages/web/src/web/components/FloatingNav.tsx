import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#hero", icon: "⌂" },
  { label: "Menu", href: "#menu", icon: "☰" },
  { label: "Story", href: "#story", icon: "♥" },
  { label: "Gallery", href: "#gallery", icon: "◈" },
  { label: "Reviews", href: "#reviews", icon: "★" },
  { label: "Order", href: "#order", icon: "→" },
];

export default function FloatingNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);

      // Determine active section
      const sections = navItems.map((n) => n.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        right: "1.5rem",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 99,
        display: "flex",
        flexDirection: "column",
        gap: "6px",
      }}
      className="hidden md:flex"
    >
      {navItems.map((item) => {
        const isActive = active === item.href.replace("#", "");
        return (
          <a
            key={item.href}
            href={item.href}
            title={item.label}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "8px",
              textDecoration: "none",
              overflow: "hidden",
            }}
          >
            {/* Label — slides in on hover */}
            <span
              className="nav-label"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "0.7rem",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: isActive ? "#0d0d0d" : "var(--text-muted)",
                background: isActive ? "var(--accent)" : "rgba(13,13,13,0.85)",
                padding: "4px 10px",
                borderRadius: "100px 0 0 100px",
                whiteSpace: "nowrap",
                opacity: 0,
                transform: "translateX(20px)",
                transition: "opacity 0.25s ease, transform 0.25s ease",
                pointerEvents: "none",
              }}
            >
              {item.label}
            </span>

            {/* Dot */}
            <div
              style={{
                width: isActive ? 12 : 8,
                height: isActive ? 12 : 8,
                borderRadius: "50%",
                background: isActive ? "var(--accent)" : "rgba(245,240,232,0.25)",
                border: isActive
                  ? "2px solid var(--accent)"
                  : "1px solid rgba(245,240,232,0.2)",
                transition: "all 0.25s ease",
                flexShrink: 0,
              }}
            />
          </a>
        );
      })}

      <style>{`
        .hidden.md\\:flex a:hover .nav-label,
        .hidden.md\\:flex a:focus .nav-label {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
        @media (min-width: 768px) {
          .hidden.md\\:flex {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
}
