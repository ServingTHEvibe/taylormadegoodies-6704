# Design Direction — Taylor Made Goodies

## Brand Identity
- **Name:** Taylor Made Goodies
- **Tagline:** Baked Fresh. Taylor Made.
- **Vibe:** Urban Atlanta street culture meets artisan dessert kitchen. Bold, raw, celebratory.
- **Voice:** Real, personal, community-first. "Scratch-made, never infused."

## Color Palette
```
--bg:         #0d0d0d   (near-black background)
--surface:    #161616   (card surfaces)
--surface-2:  #1e1e1e   (elevated surfaces)
--accent:     #E8B94F   (warm gold — primary CTA, highlights)
--accent-2:   #D94F3D   (hot red — secondary CTA / energy)
--text:       #F5F0E8   (warm white)
--text-muted: #9A9080   (muted warm gray)
--border:     #2a2a2a   (subtle borders)
```

## Typography
- **Display:** 'Bebas Neue' (Google) — hero headlines, section titles, all-caps bold impact
- **Script:** 'Caveat' (Google) — handwritten feel for quotes, taglines
- **Body:** 'DM Sans' (Google) — clean, modern, easy to read
- Import via Google Fonts in index.html

## Layout Principles
- Dark background throughout (no white sections)
- Graffiti-style hero: full viewport, bold oversized type, semi-transparent text layers
- Urban texture: rough edges, bold type, high contrast
- Masonry gallery: 3-column staggered grid, images zoom-in on scroll
- Floating side nav: right-edge pill buttons, gold on hover
- Generous spacing, intentional whitespace in body sections

## Sections
1. **Navbar** — sticky, translucent dark, logo + links
2. **Hero** — full-screen dark with graffiti wall effect, oversized headline, pills, CTA
3. **Menu Preview** — dark bg, product categories with price callouts
4. **Our Story** — scroll-reveal word-by-word, quote pull, personal tone
5. **Sweet Gallery** — masonry 3-col image grid with hover zoom
6. **Reviews** — dark cards, testimonials
7. **Footer** — 5-col dark footer, contact, hours, socials, subscribe

## Motion
- Hero: stagger fade-in on load (headline → subtitle → pills → CTA)
- ScrollReveal: word-by-word blur + translateY on story section (Intersection Observer)
- Masonry: GSAP ScrollTrigger scale from 0.9 to 1.0 as images enter viewport
- FloatingNav: CSS transition expand on hover
