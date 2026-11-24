/**
 * Porsche Collection Showcase & Model Discovery Modal
 */

import { audioEngine } from './audio.js';

export const vehiclesData = [
  {
    id: 'gt3-rs',
    category: 'gt',
    categoryName: 'GT & Motorsport',
    number: '01',
    name: 'Porsche 911 GT3 RS',
    series: 'Type 992 · Atmospheric 9,000 RPM',
    tagline: 'Born on the track. Homologated for the road.',
    description: 'A street-legal thoroughbred featuring active aerodynamics with DRS, a central-radiator cooling concept derived directly from Le Mans, and a 4.0-litre naturally aspirated boxer engine revving to 9,000 RPM.',
    image: 'assets/collection-gt3rs.jpg',
    specs: {
      power: '525 PS (386 kW)',
      acceleration: '3.2 s',
      accelLabel: '0–100 km/h',
      topSpeed: '296 km/h',
      engine: '4.0-litre 6-cylinder boxer',
      transmission: '7-speed Porsche Doppelkupplung (PDK)',
      downforce: '860 kg @ 285 km/h',
      curbWeight: '1,450 kg (DIN)'
    },
    highlights: [
      'Two-stage swan-neck rear wing with Drag Reduction System (DRS)',
      'Front wheel-arch louvers and underfloor aerodynamic diffusers',
      'Double-wishbone front suspension with teardrop aerodynamic profiles',
      'Steering wheel rotary switches for PASM, PTV+, and 8-stage traction control'
    ]
  },
  {
    id: 'carrera-gts',
    category: 'sports',
    categoryName: 'Sports Cars',
    number: '02',
    name: 'Porsche 911 Carrera GTS',
    series: 'Type 992.2 · T-Hybrid Technology',
    tagline: 'The timeless icon, charged with high-voltage intelligence.',
    description: 'Introducing Porsche’s pioneering T-Hybrid system with an electrically driven turbocharger and permanent magnet synchronous e-motor integrated seamlessly into the 8-speed dual-clutch transmission.',
    image: 'assets/collection-carrera.jpg',
    specs: {
      power: '541 PS (398 kW)',
      acceleration: '3.0 s',
      accelLabel: '0–100 km/h',
      topSpeed: '312 km/h',
      engine: '3.6-litre boxer with T-Hybrid',
      transmission: '8-speed Porsche Doppelkupplung (PDK)',
      downforce: 'Aerodynamic active cooling flaps',
      curbWeight: '1,595 kg (DIN)'
    },
    highlights: [
      'Innovative 400V high-voltage lightweight traction battery (1.9 kWh)',
      'Instant electric boost without turbo lag via integrated e-turbocharger',
      'Standard rear-axle steering and Porsche Dynamic Chassis Control (PDCC)',
      'Curved 12.6-inch fully digital instrument cluster with classic 5-dial view'
    ]
  },
  {
    id: 'cayman-gt4-rs',
    category: 'gt',
    categoryName: 'GT & Motorsport',
    number: '03',
    name: 'Porsche 718 Cayman GT4 RS',
    series: 'Type 982 · Mid-Engine Architecture',
    tagline: 'Mid-engine purity. Unfiltered flat-six acoustic fury.',
    description: 'The sharpest mid-engine sports car in Porsche history. Breathing through carbon process air intakes positioned directly behind the driver and passenger side windows for an intoxicating acoustic roar.',
    image: 'assets/collection-cayman.jpg',
    specs: {
      power: '500 PS (368 kW)',
      acceleration: '3.4 s',
      accelLabel: '0–100 km/h',
      topSpeed: '315 km/h',
      engine: '4.0-litre naturally aspirated mid-boxer',
      transmission: '7-speed Porsche Doppelkupplung (PDK)',
      downforce: '25% increase over GT4',
      curbWeight: '1,415 kg (DIN)'
    },
    highlights: [
      'Engine transplanted directly from the 911 GT3 Cup racing car',
      'Air intakes located at head level for visceral acoustic resonance',
      'Carbon-fibre reinforced plastic (CFRP) bonnet, wings, and aero package',
      'Optional Weissach package with exposed carbon and titanium roll cage'
    ]
  },
  {
    id: 'taycan-turbo-gt',
    category: 'electric',
    categoryName: 'Pure Electric',
    number: '04',
    name: 'Porsche Taycan Turbo GT',
    series: 'Weissach Package · Attack Mode',
    tagline: 'Record holder at the Nürburgring Nordschleife & Laguna Seca.',
    description: 'The most powerful production Porsche of all time. Engineered with cutting-edge 900A silicon carbide pulse inverters and Attack Mode delivering up to 1,108 PS of explosive instantaneous electric torque.',
    image: 'assets/collection-taycan.jpg',
    specs: {
      power: '1,108 PS (815 kW)',
      acceleration: '2.2 s',
      accelLabel: '0–100 km/h',
      topSpeed: '305 km/h',
      engine: 'Dual Permanent Magnet Synchronous Motors',
      transmission: '2-speed rear axle transmission',
      downforce: '220 kg aerodynamic load',
      curbWeight: '2,220 kg (DIN)'
    },
    highlights: [
      'Nürburgring lap time: 7:07.55 minutes (26 seconds quicker than previous record)',
      'Attack Mode providing 120 kW extra power burst for 10 seconds',
      'Porsche Active Ride suspension with model-specific GT tuning',
      'Lightweight carbon ceramic brakes with Victory Gold calipers'
    ]
  },
  {
    id: 'panamera-turbo-ehybrid',
    category: 'saloon',
    categoryName: 'Sports Saloon & SUV',
    number: '05',
    name: 'Porsche Panamera Turbo E-Hybrid',
    series: 'Executive Grand Tourer · Active Ride',
    tagline: 'Sovereign luxury married with supercar performance.',
    description: 'A majestic grand touring sports saloon pairing an extensively updated 4.0-litre twin-turbo V8 with an electric motor and the revolutionary Porsche Active Ride suspension system.',
    image: 'assets/collection-panamera.jpg',
    specs: {
      power: '680 PS (500 kW)',
      acceleration: '3.2 s',
      accelLabel: '0–100 km/h',
      topSpeed: '315 km/h',
      engine: '4.0L V8 Twin-Turbo + E-Machine',
      transmission: '8-speed Porsche Doppelkupplung (PDK)',
      downforce: 'Adaptive 4-way rear spoiler',
      curbWeight: '2,360 kg (DIN)'
    },
    highlights: [
      'Porsche Active Ride hydraulic damper system that compensates body roll entirely',
      '25.9 kWh high-voltage battery providing up to 91 km of pure electric range',
      'Bespoke Turbonite accent details exclusive to Porsche Turbo models',
      'Rear passenger luxury suite with dual touch display consoles'
    ]
  },
  {
    id: 'cayenne-turbo-gt',
    category: 'saloon',
    categoryName: 'Sports Saloon & SUV',
    number: '06',
    name: 'Porsche Cayenne Turbo GT',
    series: 'High-Performance SUV Coupé',
    tagline: 'The undisputed master of the high-performance SUV segment.',
    description: 'Exclusively available as a Coupé, the Cayenne Turbo GT delivers racetrack-level handling, a titanium sports exhaust with central tailpipes, and an unyielding twin-turbo V8.',
    image: 'assets/collection-cayenne.jpg',
    specs: {
      power: '659 PS (485 kW)',
      acceleration: '3.3 s',
      accelLabel: '0–100 km/h',
      topSpeed: '305 km/h',
      engine: '4.0-litre Twin-Turbo V8',
      transmission: '8-speed Tiptronic S',
      downforce: 'Carbon roof spoiler with adaptive lip',
      curbWeight: '2,245 kg (DIN)'
    },
    highlights: [
      'PCCB Porsche Ceramic Composite Brakes fitted as standard',
      'Three-chamber adaptive air suspension lowered by 17 mm with bespoke kinematics',
      'Carbon roof and carbon side plates on rear spoiler to lower center of gravity',
      'Central titanium sports exhaust system with heat-resistant central silencer'
    ]
  }
];

export function initCollection() {
  const container = document.getElementById('collection-grid');
  const filterButtons = document.querySelectorAll('.filter-tab-btn');
  const modal = document.getElementById('model-detail-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalClose = document.getElementById('modal-close-btn');

  if (!container) return;

  function renderCards(filter = 'all') {
    container.innerHTML = '';
    const filtered = filter === 'all' 
      ? vehiclesData 
      : vehiclesData.filter(v => v.category === filter);

    filtered.forEach((v) => {
      const card = document.createElement('article');
      card.className = 'editorial-card group relative flex flex-col justify-between overflow-hidden cursor-pointer';
      card.setAttribute('data-id', v.id);

      card.innerHTML = `
        <div class="relative w-full aspect-[16/10] bg-[#0c0c0c] overflow-hidden">
          <img 
            src="${v.image}" 
            alt="${v.name}" 
            class="card-car-img w-full h-full object-cover object-center" 
            loading="lazy" 
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80"></div>
          
          <!-- Top Metas -->
          <div class="absolute top-5 left-5 flex items-center gap-3">
            <span class="text-xs font-mono font-bold text-white/40 tracking-widest">${v.number} //</span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 text-[9px] font-bold font-headline uppercase tracking-widest text-white/90 bg-black/60 backdrop-blur-md border border-white/10">
              <span class="pulse-indicator"></span> ${v.categoryName}
            </span>
          </div>

          <div class="absolute top-5 right-5">
            <!-- Quick Acoustic Throttle Button -->
            <button class="sound-rev-btn p-2 rounded-full bg-black/60 hover:bg-[#D5001C] text-white border border-white/10 hover:border-[#D5001C] transition-all" title="Listen to ${v.name} Acoustic Sound" data-id="${v.id}">
              <i data-lucide="volume-2" class="w-3.5 h-3.5 pointer-events-none"></i>
            </button>
          </div>
        </div>

        <div class="p-7 md:p-9 flex flex-col justify-between flex-grow bg-[#0A0A0A]">
          <div>
            <span class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D5001C] block mb-1">${v.series}</span>
            <h3 class="font-headline text-2xl md:text-3xl font-bold tracking-tight text-[#F5F5F2] group-hover:text-white transition-colors">
              ${v.name}
            </h3>
            <p class="mt-3 text-xs md:text-sm text-[#A3A3A3] line-clamp-2 leading-relaxed font-body">
              ${v.tagline}
            </p>
          </div>

          <!-- Key Technical Strip -->
          <div class="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-3 text-center">
            <div class="border-r border-white/10 pr-2">
              <span class="block text-[9px] font-headline uppercase tracking-widest text-[#666666]">0–100 KM/H</span>
              <span class="block text-lg md:text-xl font-headline font-bold text-[#F5F5F2] mt-0.5">${v.specs.acceleration}</span>
            </div>
            <div class="border-r border-white/10 px-2">
              <span class="block text-[9px] font-headline uppercase tracking-widest text-[#666666]">POWER</span>
              <span class="block text-sm md:text-base font-headline font-bold text-[#F5F5F2] mt-1">${v.specs.power.split(' ')[0]} PS</span>
            </div>
            <div class="pl-2">
              <span class="block text-[9px] font-headline uppercase tracking-widest text-[#666666]">TOP SPEED</span>
              <span class="block text-sm md:text-base font-headline font-bold text-[#F5F5F2] mt-1">${v.specs.topSpeed}</span>
            </div>
          </div>

          <div class="mt-7 pt-4 flex items-center justify-between border-t border-white/5">
            <button class="btn-link text-xs group-hover:text-white discover-btn" data-id="${v.id}">
              Discover Specification <i data-lucide="arrow-right" class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"></i>
            </button>
            <span class="text-[9px] font-mono text-[#555555] uppercase tracking-widest">Atelier Zuffenhausen</span>
          </div>
        </div>
      `;

      // Sound button event
      const soundBtn = card.querySelector('.sound-rev-btn');
      if (soundBtn) {
        soundBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          audioEngine.start();
          audioEngine.revPulse(5500);
        });
      }

      card.addEventListener('click', () => {
        openModal(v.id);
      });

      container.appendChild(card);
    });

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Filter Click Handler
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active', 'border-white', 'text-white'));
      filterButtons.forEach((b) => b.classList.add('border-white/10', 'text-[#A3A3A3]'));
      
      btn.classList.add('active', 'border-white', 'text-white');
      btn.classList.remove('border-white/10', 'text-[#A3A3A3]');
      
      const category = btn.getAttribute('data-filter');
      renderCards(category);
    });
  });

  // Modal open/close
  function openModal(vehicleId) {
    const v = vehiclesData.find((item) => item.id === vehicleId);
    if (!v || !modal) return;

    document.getElementById('modal-img').src = v.image;
    document.getElementById('modal-img').alt = v.name;
    document.getElementById('modal-badge').textContent = v.categoryName;
    document.getElementById('modal-title').textContent = v.name;
    document.getElementById('modal-series').textContent = v.series;
    document.getElementById('modal-tagline').textContent = v.tagline;
    document.getElementById('modal-description').textContent = v.description;

    document.getElementById('modal-spec-accel').textContent = v.specs.acceleration;
    document.getElementById('modal-spec-power').textContent = v.specs.power;
    document.getElementById('modal-spec-speed').textContent = v.specs.topSpeed;
    document.getElementById('modal-spec-engine').textContent = v.specs.engine;
    document.getElementById('modal-spec-trans').textContent = v.specs.transmission;
    document.getElementById('modal-spec-downforce').textContent = v.specs.downforce;

    const highlightsList = document.getElementById('modal-highlights');
    if (highlightsList) {
      highlightsList.innerHTML = v.highlights
        .map((h) => `<li class="flex items-start gap-3 text-xs text-[#A3A3A3]"><span class="text-[#D5001C] font-bold text-sm">▪</span> <span>${h}</span></li>`)
        .join('');
    }

    const bookBtn = document.getElementById('modal-book-action');
    if (bookBtn) {
      bookBtn.onclick = () => {
        closeModal();
        const select = document.getElementById('pv-model');
        if (select) select.value = v.name;
        document.getElementById('private-viewing').scrollIntoView({ behavior: 'smooth' });
      };
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // Initial render
  renderCards('all');
}
