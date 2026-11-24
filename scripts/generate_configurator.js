const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'assets', 'configurator');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const colors = [
  {
    id: 'guards-red',
    name: 'Guards Red',
    code: 'G1',
    type: 'Solid',
    hex: '#D5001C',
    base: '#D5001C',
    light: '#F83A4A',
    dark: '#8B0010',
    specular: '#FFAEB5',
    accent: '#D5001C'
  },
  {
    id: 'racing-yellow',
    name: 'Racing Yellow',
    code: '1S1',
    type: 'Solid',
    hex: '#FAD201',
    base: '#FAD201',
    light: '#FFF066',
    dark: '#B39200',
    specular: '#FFFFB8',
    accent: '#FAD201'
  },
  {
    id: 'jet-black',
    name: 'Jet Black Metallic',
    code: '2T',
    type: 'Metallic',
    hex: '#111215',
    base: '#141518',
    light: '#2D3036',
    dark: '#08080A',
    specular: '#626875',
    accent: '#2A2C33'
  },
  {
    id: 'carrara-white',
    name: 'Carrara White Metallic',
    code: '2Y',
    type: 'Metallic',
    hex: '#EAEAEA',
    base: '#E5E7EB',
    light: '#FFFFFF',
    dark: '#9CA3AF',
    specular: '#FFFFFF',
    accent: '#E5E7EB'
  },
  {
    id: 'gentian-blue',
    name: 'Gentian Blue Metallic',
    code: '1A',
    type: 'Metallic',
    hex: '#142B4E',
    base: '#142A52',
    light: '#254E96',
    dark: '#09152B',
    specular: '#6293E3',
    accent: '#1D3B73'
  },
  {
    id: 'oak-green',
    name: 'Oak Green Metallic Neo',
    code: '8B',
    type: 'Legends / PTS',
    hex: '#1E3B2B',
    base: '#1C3829',
    light: '#2C5E43',
    dark: '#0C1B13',
    specular: '#5BAE81',
    accent: '#234934'
  }
];

function generateTopDownSVG(c) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500" width="100%" height="100%">
  <defs>
    <!-- Carbon Fiber Weave -->
    <pattern id="carbon-${c.id}" width="6" height="6" patternUnits="userSpaceOnUse">
      <rect width="6" height="6" fill="#141414"/>
      <polygon points="0,0 3,0 0,3" fill="#202020"/>
      <polygon points="3,3 6,3 3,6" fill="#202020"/>
      <polygon points="3,0 6,0 6,3" fill="#0d0d0d"/>
      <polygon points="0,3 3,3 0,6" fill="#0d0d0d"/>
    </pattern>

    <!-- Studio Floor Soft Shadow -->
    <radialGradient id="floor-shadow-${c.id}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#000000" stop-opacity="0.95"/>
      <stop offset="60%" stop-color="#000000" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>

    <!-- Studio Soft Overhead Light Box -->
    <radialGradient id="studio-light-${c.id}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.04"/>
      <stop offset="70%" stop-color="#FFFFFF" stop-opacity="0.01"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>

    <!-- Paint Shaders for Body Panels -->
    <linearGradient id="body-grad-${c.id}" x1="0%" y1="50%" x2="100%" y2="50%">
      <stop offset="0%" stop-color="${c.dark}"/>
      <stop offset="15%" stop-color="${c.base}"/>
      <stop offset="40%" stop-color="${c.light}"/>
      <stop offset="60%" stop-color="${c.base}"/>
      <stop offset="85%" stop-color="${c.dark}"/>
      <stop offset="100%" stop-color="${c.base}"/>
    </linearGradient>

    <!-- Lateral Curvature Shader -->
    <linearGradient id="lat-grad-${c.id}" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="${c.dark}"/>
      <stop offset="18%" stop-color="${c.base}"/>
      <stop offset="35%" stop-color="${c.light}"/>
      <stop offset="50%" stop-color="${c.specular}" stop-opacity="0.85"/>
      <stop offset="65%" stop-color="${c.light}"/>
      <stop offset="82%" stop-color="${c.base}"/>
      <stop offset="100%" stop-color="${c.dark}"/>
    </linearGradient>

    <!-- Glass Shader -->
    <linearGradient id="windshield-grad-${c.id}" x1="15%" y1="0%" x2="85%" y2="100%">
      <stop offset="0%" stop-color="#11161d" stop-opacity="0.95"/>
      <stop offset="40%" stop-color="#1d2a3a" stop-opacity="0.75"/>
      <stop offset="70%" stop-color="#0d131a" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#080c10" stop-opacity="0.98"/>
    </linearGradient>

    <!-- Glass Specular Highlight -->
    <linearGradient id="glass-specular-${c.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.35"/>
      <stop offset="50%" stop-color="#FFFFFF" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
    </linearGradient>

    <!-- Brake Caliper Ceramic -->
    <linearGradient id="caliper-grad-${c.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE033"/>
      <stop offset="100%" stop-color="#DDAA00"/>
    </linearGradient>

    <!-- Wheel Rim Satin Dark -->
    <radialGradient id="wheel-rim-${c.id}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#2B2B2B"/>
      <stop offset="70%" stop-color="#151515"/>
      <stop offset="100%" stop-color="#0A0A0A"/>
    </radialGradient>
  </defs>

  <!-- Studio Floor & Lighting Grid -->
  <rect width="1000" height="500" fill="#070707"/>
  <ellipse cx="500" cy="250" rx="450" ry="220" fill="url(#studio-light-${c.id})"/>

  <!-- Studio Ambient Occlusion Drop Shadow -->
  <ellipse cx="500" cy="255" rx="390" ry="135" fill="url(#floor-shadow-${c.id})" filter="blur(14px)"/>
  <ellipse cx="495" cy="252" rx="340" ry="115" fill="#000000" fill-opacity="0.9" filter="blur(8px)"/>

  <!-- CAR BODY ROOT GROUP (Horizontal Top-Down Orientation: Nose at Left, Tail at Right) -->
  <g id="porsche-overhead" transform="translate(500,250)">
    
    <!-- 1. WHEELS & TIRES -->
    <!-- Front Left Wheel -->
    <rect x="-240" y="-118" width="86" height="28" rx="6" fill="#111111" stroke="#262626" stroke-width="1.5"/>
    <rect x="-232" y="-115" width="70" height="22" rx="4" fill="url(#wheel-rim-${c.id})"/>
    <rect x="-220" y="-112" width="34" height="16" rx="2" fill="url(#caliper-grad-${c.id})"/>
    <circle cx="-197" cy="-104" r="4" fill="#C5A059"/>

    <!-- Front Right Wheel -->
    <rect x="-240" y="90" width="86" height="28" rx="6" fill="#111111" stroke="#262626" stroke-width="1.5"/>
    <rect x="-232" y="93" width="70" height="22" rx="4" fill="url(#wheel-rim-${c.id})"/>
    <rect x="-220" y="96" width="34" height="16" rx="2" fill="url(#caliper-grad-${c.id})"/>
    <circle cx="-197" cy="104" r="4" fill="#C5A059"/>

    <!-- Rear Left Wheel -->
    <rect x="175" y="-126" width="92" height="34" rx="7" fill="#111111" stroke="#262626" stroke-width="1.5"/>
    <rect x="183" y="-122" width="76" height="26" rx="4" fill="url(#wheel-rim-${c.id})"/>
    <rect x="198" y="-118" width="38" height="18" rx="2" fill="url(#caliper-grad-${c.id})"/>
    <circle cx="221" cy="-109" r="4.5" fill="#C5A059"/>

    <!-- Rear Right Wheel -->
    <rect x="175" y="92" width="92" height="34" rx="7" fill="#111111" stroke="#262626" stroke-width="1.5"/>
    <rect x="183" y="96" width="76" height="26" rx="4" fill="url(#wheel-rim-${c.id})"/>
    <rect x="198" y="100" width="38" height="18" rx="2" fill="url(#caliper-grad-${c.id})"/>
    <circle cx="221" cy="109" r="4.5" fill="#C5A059"/>

    <!-- 2. MAIN MONOCOQUE & CHASSIS CONTOURS (Exact 911 GT3 RS silhouette) -->
    <!-- Base Body Outer Shell -->
    <path d="
      M -320,0
      C -318,-35 -300,-68 -265,-88
      C -245,-99 -205,-106 -160,-102
      C -115,-98 -80,-85 -40,-84
      C 0,-83 40,-86 90,-94
      C 140,-102 180,-115 230,-115
      C 275,-115 305,-85 315,-40
      C 320,-15 320,15 315,40
      C 305,85 275,115 230,115
      C 180,115 140,102 90,94
      C 40,86 0,83 -40,84
      C -80,85 -115,98 -160,102
      C -205,106 -245,99 -265,88
      C -300,68 -318,35 -320,0 Z"
      fill="url(#lat-grad-${c.id})"
      stroke="${c.dark}"
      stroke-width="1.5"
    />

    <!-- Secondary highlight sheen across body shoulder -->
    <path d="
      M -310,-10
      C -290,-55 -250,-85 -180,-92
      C -100,-95 0,-78 120,-88
      C 200,-98 270,-95 305,-30
      C 300,-40 250,-80 180,-78
      C 80,-74 -20,-75 -120,-82
      C -200,-86 -270,-60 -310,-10 Z"
      fill="url(#body-grad-${c.id})"
      opacity="0.6"
    />
    <path d="
      M -310,10
      C -290,55 -250,85 -180,92
      C -100,95 0,78 120,88
      C 200,98 270,95 305,30
      C 300,40 250,80 180,78
      C 80,74 -20,75 -120,82
      C -200,86 -270,60 -310,10 Z"
      fill="url(#body-grad-${c.id})"
      opacity="0.6"
    />

    <!-- 3. FRONT HOOD & AERODYNAMIC EXTRACTION VENTS -->
    <!-- Front Bumper Splitter Edge -->
    <path d="M -325,-25 C -328,0 -328,0 -325,25 L -312,38 C -318,0 -318,0 -312,-38 Z" fill="url(#carbon-${c.id})" stroke="#111" stroke-width="1"/>
    <path d="M -315,0 L -270,0" stroke="#FFFFFF" stroke-opacity="0.15" stroke-width="1"/>

    <!-- Front Hood Contour Lines -->
    <path d="M -310,-32 C -270,-45 -220,-48 -150,-50 L -150,50 C -220,48 -270,45 -310,32 Z"
      fill="none" stroke="${c.dark}" stroke-width="1.5" stroke-opacity="0.8"/>

    <!-- Porsche Crest Badge at Front Center -->
    <rect x="-312" y="-3" width="6" height="6" rx="1" fill="#D5A021" stroke="#9B1C1C" stroke-width="0.6"/>

    <!-- Dual Carbon Fiber Extraction Ducts on Front Hood -->
    <g id="hood-vents">
      <path d="M -240,-16 L -200,-22 L -190,-6 L -235,-6 Z" fill="url(#carbon-${c.id})" stroke="#0A0A0A" stroke-width="1"/>
      <path d="M -240,16 L -200,22 L -190,6 L -235,6 Z" fill="url(#carbon-${c.id})" stroke="#0A0A0A" stroke-width="1"/>
      <line x1="-228" y1="-13" x2="-200" y2="-17" stroke="#000" stroke-width="1.5"/>
      <line x1="-228" y1="13" x2="-200" y2="17" stroke="#000" stroke-width="1.5"/>
    </g>

    <!-- Front Wheel Arch Louvers -->
    <g id="front-louvers" stroke="#0A0A0A" stroke-width="1.8" fill="none">
      <line x1="-235" y1="-88" x2="-215" y2="-86" stroke="url(#carbon-${c.id})" stroke-width="2.5"/>
      <line x1="-230" y1="-92" x2="-210" y2="-90" stroke="url(#carbon-${c.id})" stroke-width="2.5"/>
      <line x1="-225" y1="-96" x2="-205" y2="-94" stroke="url(#carbon-${c.id})" stroke-width="2.5"/>
      <line x1="-220" y1="-100" x2="-200" y2="-98" stroke="url(#carbon-${c.id})" stroke-width="2.5"/>
      <line x1="-235" y1="88" x2="-215" y2="86" stroke="url(#carbon-${c.id})" stroke-width="2.5"/>
      <line x1="-230" y1="92" x2="-210" y2="90" stroke="url(#carbon-${c.id})" stroke-width="2.5"/>
      <line x1="-225" y1="96" x2="-205" y2="94" stroke="url(#carbon-${c.id})" stroke-width="2.5"/>
      <line x1="-220" y1="100" x2="-200" y2="98" stroke="url(#carbon-${c.id})" stroke-width="2.5"/>
    </g>

    <!-- Matrix LED Headlights (4-point crystal projection) -->
    <g id="headlights">
      <ellipse cx="-275" cy="-58" rx="14" ry="9" fill="#1A222D" stroke="#38485C" stroke-width="1.2" transform="rotate(18, -275, -58)"/>
      <circle cx="-278" cy="-60" r="2" fill="#FFFFFF"/>
      <circle cx="-272" cy="-61" r="2" fill="#FFFFFF"/>
      <circle cx="-277" cy="-55" r="2" fill="#FFFFFF"/>
      <circle cx="-271" cy="-56" r="2" fill="#FFFFFF"/>
      <ellipse cx="-275" cy="58" rx="14" ry="9" fill="#1A222D" stroke="#38485C" stroke-width="1.2" transform="rotate(-18, -275, 58)"/>
      <circle cx="-278" cy="60" r="2" fill="#FFFFFF"/>
      <circle cx="-272" cy="61" r="2" fill="#FFFFFF"/>
      <circle cx="-277" cy="55" r="2" fill="#FFFFFF"/>
      <circle cx="-271" cy="56" r="2" fill="#FFFFFF"/>
    </g>

    <!-- 4. GREENHOUSE / COCKPIT CANOPY -->
    <path d="
      M -145,-50
      C -140,-52 -135,-52 -130,-50
      L -50,-42
      C -45,-41 -45,41 -50,42
      L -130,50
      C -135,52 -140,52 -145,50
      Z"
      fill="url(#windshield-grad-${c.id})"
      stroke="#1A1A1A"
      stroke-width="2"
    />
    <path d="M -140,-45 L -60,-38 L -75,0 L -142,-15 Z" fill="url(#glass-specular-${c.id})"/>

    <!-- Interior Glance -->
    <g id="interior-glance" opacity="0.75">
      <ellipse cx="-110" cy="-22" rx="12" ry="6" fill="none" stroke="#1F1F1F" stroke-width="2.5"/>
      <rect x="-118" y="-23" width="3" height="2" fill="${c.accent}"/>
      <rect x="-78" y="-32" width="28" height="22" rx="5" fill="#121212" stroke="#2A2A2A" stroke-width="1"/>
      <rect x="-78" y="10" width="28" height="22" rx="5" fill="#121212" stroke="#2A2A2A" stroke-width="1"/>
      <line x1="-40" y1="-30" x2="-10" y2="30" stroke="#262626" stroke-width="2.5"/>
      <line x1="-40" y1="30" x2="-10" y2="-30" stroke="#262626" stroke-width="2.5"/>
    </g>

    <!-- Carbon Fiber Lightweight Roof -->
    <g id="roof">
      <path d="
        M -46,-42
        C 0,-44 40,-44 95,-38
        C 100,-37 100,37 95,38
        C 40,44 0,44 -46,42
        Z"
        fill="url(#carbon-${c.id})"
        stroke="#111111"
        stroke-width="1.5"
      />
      <path d="M -40,-2 C 10,-3 50,-3 90,-2" stroke="#0B0B0B" stroke-width="3" fill="none"/>
      <path d="M -38,-15 C 10,-17 50,-17 88,-14" stroke="#2C2C2C" stroke-width="1" fill="none"/>
      <path d="M -38,15 C 10,17 50,17 88,14" stroke="#2C2C2C" stroke-width="1" fill="none"/>
      <rect x="40" y="-38" width="46" height="2.5" rx="1" fill="#000000"/>
      <rect x="40" y="35.5" width="46" height="2.5" rx="1" fill="#000000"/>
    </g>

    <!-- Rear Window Screen -->
    <path d="
      M 98,-37
      C 120,-34 140,-30 165,-24
      C 170,-22 170,22 165,24
      C 140,30 120,34 98,37
      Z"
      fill="url(#windshield-grad-${c.id})"
      stroke="#181818"
      stroke-width="1.5"
    />
    <path d="M 102,-32 L 155,-22 L 140,5 L 104,-10 Z" fill="url(#glass-specular-${c.id})" opacity="0.6"/>

    <!-- 5. REAR ENGINE LID & HAUNCHES -->
    <path d="
      M 166,-24
      C 190,-18 220,-10 250,-8
      L 250,8
      C 220,10 190,18 166,24
      Z"
      fill="url(#carbon-${c.id})"
      stroke="#111111"
      stroke-width="1.2"
    />
    <line x1="180" y1="-15" x2="235" y2="-7" stroke="#050505" stroke-width="1.8"/>
    <line x1="180" y1="-8" x2="235" y2="-3" stroke="#050505" stroke-width="1.8"/>
    <line x1="180" y1="0" x2="238" y2="0" stroke="#050505" stroke-width="2"/>
    <line x1="180" y1="8" x2="235" y2="3" stroke="#050505" stroke-width="1.8"/>
    <line x1="180" y1="15" x2="235" y2="7" stroke="#050505" stroke-width="1.8"/>

    <!-- Rear Fender Air Scoops -->
    <path d="M 100,-88 C 120,-90 140,-86 150,-78 L 146,-74 C 136,-80 120,-84 100,-82 Z" fill="#080808" stroke="#151515" stroke-width="1"/>
    <path d="M 100,88 C 120,90 140,86 150,78 L 146,74 C 136,80 120,84 100,82 Z" fill="#080808" stroke="#151515" stroke-width="1"/>

    <!-- Side Mirrors in Visible Carbon Fiber -->
    <ellipse cx="-80" cy="-72" rx="14" ry="6" fill="url(#carbon-${c.id})" stroke="#101010" stroke-width="1" transform="rotate(-15, -80, -72)"/>
    <ellipse cx="-80" cy="72" rx="14" ry="6" fill="url(#carbon-${c.id})" stroke="#101010" stroke-width="1" transform="rotate(15, -80, 72)"/>

    <!-- 6. MONUMENTAL SWAN-NECK REAR WING -->
    <rect x="235" y="-110" width="46" height="220" rx="6" fill="#000000" fill-opacity="0.6" filter="blur(6px)"/>
    <path d="M 205,-40 C 220,-40 240,-42 255,-44" stroke="url(#carbon-${c.id})" stroke-width="5" stroke-linecap="round" fill="none"/>
    <path d="M 205,40 C 220,40 240,42 255,44" stroke="url(#carbon-${c.id})" stroke-width="5" stroke-linecap="round" fill="none"/>
    <rect x="225" y="-4" width="28" height="8" rx="2" fill="#333333" stroke="#111111" stroke-width="1"/>
    <rect x="230" y="-2" width="12" height="4" rx="1" fill="#888888"/>

    <!-- Main Aerofoil Wing Blade in Full Carbon Fiber -->
    <path d="
      M 245,-122
      C 255,-122 265,-120 278,-115
      L 278,115
      C 265,120 255,122 245,122
      L 242,120
      C 252,118 260,114 266,110
      L 266,-110
      C 260,-114 252,-118 242,-120
      Z"
      fill="url(#carbon-${c.id})"
      stroke="#0A0A0A"
      stroke-width="1.5"
    />
    <line x1="255" y1="-115" x2="255" y2="115" stroke="#FFFFFF" stroke-opacity="0.15" stroke-width="1.5"/>

    <!-- Wing Endplates with Accent Detailing -->
    <polygon points="240,-125 282,-122 284,-118 238,-118" fill="${c.accent}" stroke="#111" stroke-width="0.8"/>
    <polygon points="240,125 282,122 284,118 238,118" fill="${c.accent}" stroke="#111" stroke-width="0.8"/>

    <!-- 7. REAR LIGHT STRIP & TITANIUM EXHAUST -->
    <path d="M 305,-42 C 315,-20 318,0 315,20 C 312,35 305,42 305,42" stroke="#D5001C" stroke-width="3" stroke-linecap="round" fill="none" filter="drop-shadow(0 0 5px rgba(213,0,28,0.8))"/>
    <text x="306" y="2" font-family="Space Grotesk, sans-serif" font-size="6" font-weight="bold" fill="#FFFFFF" fill-opacity="0.6" text-anchor="middle" letter-spacing="2">PORSCHE</text>

    <!-- Dual Central Titanium Exhaust Pipes -->
    <circle cx="318" cy="-8" r="7" fill="#151515" stroke="#404040" stroke-width="1.5"/>
    <circle cx="318" cy="-8" r="5" fill="#080808"/>
    <circle cx="318" cy="8" r="7" fill="#151515" stroke="#404040" stroke-width="1.5"/>
    <circle cx="318" cy="8" r="5" fill="#080808"/>

    <rect x="314" y="-32" width="12" height="2.5" rx="1" fill="url(#carbon-${c.id})"/>
    <rect x="314" y="30" width="12" height="2.5" rx="1" fill="url(#carbon-${c.id})"/>
  </g>

  <!-- Technical Telemetry / Dimensions Overlay -->
  <g font-family="Space Grotesk, monospace" font-size="8.5" fill="#666666" letter-spacing="1.5">
    <text x="60" y="455">PORSCHE 911 GT3 RS · OVERHEAD AERO VIEW</text>
    <text x="60" y="472">PAINT FINISH: ${c.name.toUpperCase()} (${c.type.toUpperCase()}) · CODE ${c.code}</text>
    <text x="820" y="455" text-anchor="end">LENGTH: 4,572 MM · WIDTH: 1,900 MM</text>
    <text x="820" y="472" text-anchor="end">DOWNFORCE: 860 KG @ 285 KM/H</text>

    <path d="M 40,40 L 55,40 M 40,40 L 40,55" stroke="#333333" stroke-width="1" fill="none"/>
    <path d="M 960,40 L 945,40 M 960,40 L 960,55" stroke="#333333" stroke-width="1" fill="none"/>
    <path d="M 40,460 L 55,460 M 40,460 L 40,445" stroke="#333333" stroke-width="1" fill="none"/>
    <path d="M 960,460 L 945,460 M 960,460 L 960,445" stroke="#333333" stroke-width="1" fill="none"/>
  </g>
</svg>`;
}

function generateProfileSVG(c) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500" width="100%" height="100%">
  <defs>
    <radialGradient id="p-shadow-${c.id}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#000000" stop-opacity="0.95"/>
      <stop offset="80%" stop-color="#000000" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="p-body-${c.id}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${c.light}"/>
      <stop offset="30%" stop-color="${c.base}"/>
      <stop offset="70%" stop-color="${c.base}"/>
      <stop offset="100%" stop-color="${c.dark}"/>
    </linearGradient>
    <linearGradient id="p-glass-${c.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#111827" stop-opacity="0.95"/>
      <stop offset="50%" stop-color="#1f2937" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#0b0f17" stop-opacity="0.98"/>
    </linearGradient>
    <radialGradient id="p-wheel-${c.id}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#2B2B2B"/>
      <stop offset="80%" stop-color="#121212"/>
      <stop offset="100%" stop-color="#050505"/>
    </radialGradient>
  </defs>

  <rect width="1000" height="500" fill="#070707"/>
  <line x1="50" y1="380" x2="950" y2="380" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
  <ellipse cx="500" cy="382" rx="430" ry="35" fill="url(#p-shadow-${c.id})" filter="blur(10px)"/>

  <g id="porsche-profile" transform="translate(500, 270)">
    <path d="
      M -360,70
      C -340,68 -320,60 -300,30
      C -260,-10 -210,-45 -140,-58
      C -60,-65 30,-62 110,-40
      C 180,-20 240,15 290,50
      C 320,65 340,68 350,70
      L 345,90
      C 310,95 290,95 240,95
      C 230,55 180,55 170,95
      L -140,95
      C -150,55 -200,55 -210,95
      L -355,90 Z"
      fill="url(#p-body-${c.id})"
      stroke="${c.dark}"
      stroke-width="1.5"
    />

    <path d="
      M -125,-54
      C -65,-105 20,-110 95,-75
      C 135,-55 170,-20 200,5
      L -125,-54 Z"
      fill="url(#p-glass-${c.id})"
      stroke="#1A1A1A"
      stroke-width="2"
    />
    <path d="M -130,-55 C -65,-110 20,-115 105,-78" stroke="#1F1F1F" stroke-width="4" fill="none"/>

    <path d="M 260,-40 C 275,-90 280,-110 295,-125 L 345,-115 C 330,-90 320,-50 310,20 Z" fill="#181818" stroke="#0C0C0C" stroke-width="1.5"/>
    <path d="M 265,-128 L 360,-115 L 358,-105 L 263,-118 Z" fill="${c.accent}" stroke="#111" stroke-width="1"/>

    <g transform="translate(-175, 95)">
      <circle cx="0" cy="0" r="52" fill="#0D0D0D" stroke="#262626" stroke-width="2"/>
      <circle cx="0" cy="0" r="42" fill="url(#p-wheel-${c.id})"/>
      <circle cx="0" cy="0" r="34" fill="none" stroke="#3D3D3D" stroke-width="3" stroke-dasharray="6 6"/>
      <rect x="-16" y="-26" width="12" height="20" rx="2" fill="#FFE033"/>
      <circle cx="0" cy="0" r="7" fill="#C5A059"/>
    </g>

    <g transform="translate(205, 95)">
      <circle cx="0" cy="0" r="55" fill="#0D0D0D" stroke="#262626" stroke-width="2"/>
      <circle cx="0" cy="0" r="44" fill="url(#p-wheel-${c.id})"/>
      <circle cx="0" cy="0" r="36" fill="none" stroke="#3D3D3D" stroke-width="3" stroke-dasharray="6 6"/>
      <rect x="-18" y="-28" width="12" height="22" rx="2" fill="#FFE033"/>
      <circle cx="0" cy="0" r="7" fill="#C5A059"/>
    </g>

    <rect x="-362" y="88" width="80" height="6" rx="2" fill="#161616"/>
    <rect x="-130" y="92" width="290" height="5" rx="1" fill="#161616"/>

    <text x="-80" y="84" font-family="Space Grotesk, sans-serif" font-size="14" font-weight="900" font-style="italic" fill="#FFFFFF" fill-opacity="0.2" letter-spacing="4">GT3 RS</text>

    <polygon points="-335,42 -305,25 -300,32 -330,48" fill="#E2F0FF" fill-opacity="0.85" filter="drop-shadow(0 0 6px #66A3FF)"/>
    <rect x="338" y="58" width="12" height="4" rx="1" fill="#D5001C" filter="drop-shadow(0 0 6px #D5001C)"/>
  </g>

  <g font-family="Space Grotesk, monospace" font-size="8.5" fill="#666666" letter-spacing="1.5">
    <text x="60" y="455">PORSCHE 911 GT3 RS · STUDIO PROFILE VIEW</text>
    <text x="60" y="472">FINISH: ${c.name.toUpperCase()} (${c.type.toUpperCase()})</text>
    <text x="820" y="455" text-anchor="end">AERODYNAMICS: ACTIVE DRS · 2-STAGE REAR WING</text>
    <text x="820" y="472" text-anchor="end">DRIVE: REAR-WHEEL DRIVE · 7-SPEED DUAL-CLUTCH (PDK)</text>
  </g>
</svg>`;
}

colors.forEach(c => {
  fs.writeFileSync(path.join(outDir, `overhead-${c.id}.svg`), generateTopDownSVG(c));
  fs.writeFileSync(path.join(outDir, `profile-${c.id}.svg`), generateProfileSVG(c));
  console.log('✓ Generated configurator views for', c.name);
});

