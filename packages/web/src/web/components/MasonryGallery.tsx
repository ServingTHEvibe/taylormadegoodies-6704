import { useEffect, useRef } from "react";

const galleryImages = [
  "/cupcakes-frosting.png",
  "/cookies-sheet.jpg",
  "/model-cupcake.png",
  "/bundt-cake.png",
  "/rice-crispy.png",
  "/cookies-container.jpg",
  "/model-cake.png",
];

function Carousel3D({
  images,
  imageWidth = 220,
  imageHeight = 300,
  rotateSpeed = 18,
  translateZ = 380,
  borderRadius = 6,
}: {
  images: string[];
  imageWidth?: number;
  imageHeight?: number;
  rotateSpeed?: number;
  translateZ?: number;
  borderRadius?: number;
}) {
  const totalItems = images.length;
  const spreadAngle = 360 / totalItems;

  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        position: "relative",
        perspective: "1200px",
        overflow: "visible",
      }}
    >
      <style>{`
        @keyframes tmg-rotation {
          from { transform: rotateY(0deg); }
          to   { transform: rotateY(360deg); }
        }
        .tmg-carousel {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transform-style: preserve-3d;
          transform-origin: center center;
          animation: tmg-rotation ${rotateSpeed}s infinite linear;
        }
        .tmg-carousel:hover {
          animation-play-state: paused;
        }
        .tmg-carousel figure {
          position: absolute;
          margin: 0;
          top: 50%;
          left: 50%;
          transform-origin: center center;
          overflow: hidden;
          transition: transform 0.5s ease;
        }
        .tmg-carousel figure img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease, filter 0.4s ease;
          cursor: pointer;
          display: block;
        }
        .tmg-carousel figure img:hover {
          transform: scale(1.12);
          filter: brightness(1.1) saturate(1.2);
        }
      `}</style>

      <div className="tmg-carousel">
        {images.map((src, i) => {
          const angle = i * spreadAngle;
          const transform = `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${translateZ}px)`;
          return (
            <figure
              key={i}
              style={{
                width: imageWidth,
                height: imageHeight,
                transform,
                borderRadius,
                boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
                border: "1px solid rgba(232,185,79,0.15)",
              }}
            >
              <img src={src} alt={`Taylor Made Goodies ${i + 1}`} style={{ borderRadius }} />
            </figure>
          );
        })}
      </div>
    </div>
  );
}

export default function MasonryGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="gallery"
      className="graffiti-section"
      style={{ background: "var(--bg)", padding: "7rem 2rem 9rem" }}
    >
      {/* Dark overlay */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(13,13,13,0.78)", zIndex: 0, pointerEvents: "none" }} />

      <div
        ref={sectionRef}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          opacity: 0,
          transform: "translateY(30px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <div style={{ marginBottom: "5rem", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-script)", fontSize: "1.8rem", color: "var(--accent)", marginBottom: "0.5rem" }}>
            Sweet Gallery
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 8vw, 90px)",
              letterSpacing: "0.03em",
              color: "var(--text)",
              lineHeight: 1,
            }}
          >
            A VISUAL FEAST
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-muted)", marginTop: "0.75rem" }}>
            Hover to pause · rotate to explore
          </p>
        </div>

        <Carousel3D
          images={galleryImages}
          imageWidth={210}
          imageHeight={290}
          rotateSpeed={20}
          translateZ={400}
          borderRadius={6}
        />
      </div>
    </section>
  );
}
