# Design System: Gestoría del Automotor

## 1. Visual Theme & Atmosphere

Editorial and architectural. The site feels like a high-quality printed publication — warm parchment tones, precise geometric lines, and unhurried whitespace. The aesthetic is "luxury services office": authoritative without being cold, refined without being decorative. Density is low; each element breathes. Dark sections (Process, Coverage, Contact) shift to a late-night ink atmosphere, where gold becomes the accent and paper becomes the light source.

## 2. Color Palette & Roles

- **Aged Parchment** (`#f4ecd5`) — Primary background; the "paper" the site is printed on
- **Deep Ink** (`#1f1a14`) — Primary text, primary button fill, dark section backgrounds
- **Warm Charcoal** (`#423529`) — Secondary text, subdued labels
- **Faded Sepia** (`#6b5d45`) — Tertiary text, decorative elements
- **Linen Rule** (`#c9b690`) — Dividing lines, borders, grid rules
- **Warm Tobacco** (`#b89567`) — Secondary accent, subtle highlights
- **Burnished Oak** (`#8a6d44`) — Primary interactive accent; hover states, focus rings, eyebrow numbers
- **Antique Gold** (`#c9a564`) — Used exclusively on dark backgrounds; stats, feature numbers, emphasis
- **Dark Burgundy** (`#6b2e2a`) — WhatsApp float button, services hover fill, destructive/urgent actions

## 3. Typography Rules

Three typefaces in strict hierarchy:

- **Fraunces Variable** — Display headlines only. Weight 400, optical size 144, SOFT axis 30. Used for H1, H2, large numbers. Carries all emotional weight.
- **Cormorant Garamond** — Serif body text, subheadings, descriptions, italicized emphasis. Weight 400/500. Italic variants used for poetic or editorial phrases. Creates warmth and readability.
- **DM Mono** — All UI labels: buttons, eyebrows, nav links, meta bars, stats labels. Uppercase always. Letter-spacing `--ls-normal` (0.16em) for standard, `--ls-wide` (0.22em) for section labels. Conveys precision and professionalism.

## 4. Component Stylings

### Buttons

**Primary (`.btn-primary`)**
Sharp, squared-off edges — zero border-radius. Deep Ink fill with Aged Parchment text. On hover, Burnished Oak (`#8a6d44`) slides up from below (translateY wipe). DM Mono, 13px, uppercase, 0.16em spacing. SVG icons (16px) aligned left. Focus ring: 2px Burnished Oak outline.

**Primary Inverted (`.closing .btn-primary`)**
Same geometry, reversed palette: Aged Parchment fill with Deep Ink text. Hover wipe uses Burnished Oak. Used exclusively on dark (ink) backgrounds.

**Secondary (`.btn-secondary`)**
Transparent fill, 1px Deep Ink border. Same DM Mono treatment as primary. On hover: Deep Ink floods in from below (same slide-up wipe as primary — for consistency). Aged Parchment text on hover.

**Nav CTA (`.nav-cta`)**
Compact version of primary (11px–13px, 11px–20px padding). No border-radius. Ink fill, transitions to Burnished Oak on hover. Lives in the fixed navigation bar.

**Drawer CTA (`.drawer-cta`)**
Full-width block button inside the mobile side drawer. Same ink fill. Transitions to Burnished Oak on hover.

**WhatsApp Float (`.wa-float`)**
Dark Burgundy circle (56px), pill-shaped (border-radius 50%). Fixed bottom-right. Lifts 3px on hover. Carries a subtle pulsing ring animation to draw attention without being intrusive.

### Cards / Containers

Trust cells: sharp corners, 1px Linen Rule borders forming a mosaic grid. Feature cell inverts to Deep Ink fill. Hover adds a whisper-soft warm tint (`rgba(184,149,103,0.05)`).

Services rows: full-bleed Dark Burgundy fill slides in from left (scaleX wipe) on hover. All text inverts to Aged Parchment.

### Eyebrow / Labels

Inline-flex with number + horizontal rule + text. DM Mono, 13px, `--ls-wide`. Number in Burnished Oak. Rule: 32px × 1px in Warm Charcoal at 50% opacity.

## 5. Layout Principles

Generous vertical rhythm anchored by `--section-pad-desktop: 120px`. Container max-width 1200px with `clamp(24px, 6vw, 96px)` horizontal padding — tighter on mobile (5vw). Sections separated by 1px Linen Rule borders rather than gap or color alone. Grid layouts favor asymmetry (mosaic 3×2 in Trust, 2+1 in Advisory, 4-column stats in Coverage). No decorative rounded corners anywhere — all geometry is rectilinear, referencing architectural drafting.
