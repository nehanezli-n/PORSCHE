# Porsche · Performance, Refined
### Premium Luxury Automotive Web Experience

An immersive, art-directed automotive website for **Porsche**, crafted to the standards of an elite design studio and frontend engineering team.

---

## Live Local Server
The website is served locally via a zero-dependency high-performance Node.js static server:
- **Local URL:** [http://localhost:3000](http://localhost:3000)

To start the server manually:
```bash
node server.js
```

---

## Design System & Art Direction

### Palette
| Token | Value | Role |
| :--- | :--- | :--- |
| **Main Background** | `#050505` | Deep obsidian black |
| **Secondary Background** | `#101010` | Charcoal surface |
| **Elevated Surface** | `#181818` | Precision card and modal containers |
| **Main Typography** | `#F5F5F2` | Warm white for high-contrast legibility |
| **Secondary Typography**| `#A3A3A3` | Muted slate grey for descriptions |
| **Racing Accent** | `#D5001C` | Porsche Guards Red (sparingly used for active states and indicators) |
| **Hairline Dividers** | `rgba(255,255,255,0.12)` | Technical precision lines |

### Typography
- **Headlines:** `Space Grotesk` (Refined geometric sans-serif, bold, tight tracking)
- **Body:** `Manrope` (Humanist precision sans-serif for editorial readability)
- **Telemetry & Instrument Cluster:** `JetBrains Mono` (Monospaced tabular digits)

---

## Feature Sections

1. **Header & Navigation (`#main-header`)**
   - Clean typographic Porsche wordmark with Zuffenhausen origin badge.
   - Minimal links: *Models*, *Drift Experience*, *Motorsport*, *Telemetry*, *Configurator*, *Craftsmanship*, *Private Viewing*.
   - Flat-six boxer acoustic sound toggle with live graphic equalizer animation.
   - Transparent over hero; transitions to subtle dark glass (`#080808` with backdrop blur) on scroll.
   - Responsive mobile navigation drawer.

2. **Cinematic Hero Section (`#hero`)**
   - Inspired by Reference 2: dramatic low camera angle, controlled lighting, deep shadows, and spacious editorial feel.
   - Micro-badge: `PORSCHE · PERFORMANCE, REFINED`.
   - Main Headline: *"Built for the moments that stay with you."*
   - Telemetry HUD strip featuring the 911 GT3 RS.
   - Instant Flat-Six acoustic engine starter.

3. **Immersive Drift Experience (`#drift`)**
   - Full-width night track section on wet asphalt with realistic specular reflections.
   - Headline: *"Control, at the edge of everything."*
   - Interactive Drift Modulation slider allowing the user to dynamically adjust counter-steer angle (`0°` to `+48°`).
   - High-framerate HTML5 Canvas simulation for water spray and fine tyre mist connected to rear wheel contact patches.
   - Live dynamic telemetry HUD (Yaw angle, Lateral G-force, Rear slip angle, Throttle position).

4. **Porsche Collection Section (`#collection`)**
   - Editorial showcase grid (not generic ecommerce cards).
   - Filter categories: *All Models*, *GT & Motorsport*, *Pure Electric*, *Sports Saloon & SUV*.
   - 6 Verified Porsche Models:
     1. **911 GT3 RS** (525 PS, 3.2s 0–100 km/h, 4.0L Atmospheric Flat-6)
     2. **911 Carrera GTS** (541 PS, 3.0s 0–100 km/h, T-Hybrid Boxer)
     3. **718 Cayman GT4 RS** (500 PS, 3.4s 0–100 km/h, Mid-Engine 9,000 RPM)
     4. **Taycan Turbo GT** (1,108 PS, 2.2s 0–100 km/h, Silicon Carbide Attack Mode)
     5. **Panamera Turbo E-Hybrid** (680 PS, 3.2s 0–100 km/h, Porsche Active Ride)
     6. **Cayenne Turbo GT** (659 PS, 3.3s 0–100 km/h, Twin-Turbo V8)
   - Interactive *"Discover Model"* modal drawer with deep technical highlights and direct concierge booking.

5. **Motorsport Heritage Section (`#motorsport`)**
   - Genuine Porsche racing heritage (Le Mans, 24 Hours of Nürburgring, Porsche Penske 963 LMDh, 911 GT3 R). *No misleading F1 constructor claims.*
   - Headline: *"Born from the pursuit of performance."*
   - Verified stats: 19 Le Mans overall victories (all-time record), 30,000+ race victories worldwide, 9,000 RPM atmospheric redline.

6. **Performance — Dashboard-Inspired Section ("Read it like the dash") (`#telemetry`)**
   - Inspired by Reference 1: Technical digital instrument cluster with large typography and fine dividing lines.
   - Unique headline: *"Performance, in its purest numbers."*
   - Model switcher (*911 GT3 RS*, *Taycan Turbo GT*, *911 Carrera GTS*).
   - Animated SVG digital tachometer/power arc with smooth numeric interpolation.
   - Interactive *"Explore the engineering"* modal revealing the single central radiator, active DRS, and teardrop suspension aerodynamics.

7. **Interactive Porsche Colour Configurator (`#configurator`)**
   - Headline: *"A colour of your own."*
   - Top-down / overhead view of Porsche 911 GT3 RS on dark studio backdrop.
   - 6 Clickable swatches:
     1. **Guards Red** (`#D5001C` - Solid)
     2. **Racing Yellow** (`#FAD201` - Solid)
     3. **Jet Black Metallic** (`#111215` - Metallic)
     4. **Carrara White Metallic** (`#EAEAEA` - Metallic)
     5. **Gentian Blue Metallic** (`#142B4E` - Metallic)
     6. **Oak Green Metallic Neo** (`#1E3B2B` - Legends / PTS)
   - Angle view switcher: *Overhead Aero View (Top-Down)* & *Studio Profile View*.
   - Pixel-perfect consistent geometry and lighting across all colors with smooth crossfade.
   - *"Copy Specification Code"* and *"Request in This Finish"* actions.

8. **Design Details & Craftsmanship (`#craftsmanship`)**
   - Headline: *"Every detail has a purpose."*
   - 6 Close-up editorial cards:
     1. Matrix LED with 4-Point Signature
     2. Center-Lock Forged Magnesium Wheels
     3. Race-Tex & Carbon Cockpit
     4. GT Sport Steering Wheel with Rotary Modes
     5. Swan-Neck DRS Aerodynamics
     6. Continuous Seamless 3D Rear Light

9. **Private Viewing Section (`#private-viewing`)**
   - Inspired by Reference 1: *"Book a private viewing"*.
   - Headline: *"Experience Porsche, in person."*
   - Complete luxury enquiry form: Full name, Email, Phone, Preferred Model, Preferred Experience Centre, Preferred Date, Preferred Time slot, Personal notes.
   - Real-time client-side validation with elegant inline feedback.
   - Realistic concierge submission state ("Transmitting enquiry to Porsche Concierge...").
   - Confirmation card displaying generated VIP Reference (e.g., `PV-2026-POR-8491`) and a downloadable `.ics` calendar invitation file.

10. **Footer (`#footer`)**
    - Understated typography and generous spacing.
    - Official WLTP fuel and energy consumption compliance disclosure.
    - Deep links to models, motorsport, Exclusive Manufaktur atelier, and legal notices.
    - Back-to-top smooth scrolling.

---

## Technical Architecture
- **HTML5 & Vanilla ES6+ Modules:** Clean separation of concerns across modules.
- **Web Audio API Engine:** Client-side zero-latency flat-six boxer engine synthesizer.
- **Performance:** Pre-buffered SVG views, responsive image optimization, and `prefers-reduced-motion` compliance.
- **Server:** Node.js static server running at port 3000.

