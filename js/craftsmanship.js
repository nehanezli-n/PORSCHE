/**
 * Porsche Craftsmanship & Engineering Details Inspector
 */

export const craftsmanshipDetails = [
  {
    id: 'headlight',
    title: 'Matrix LED with 4-Point Signature',
    category: 'LIGHTING ARCHITECTURE',
    image: 'assets/craft-headlight.jpg',
    description: 'Each headlight contains 84 individually controlled LEDs that adjust light distribution dynamically in milliseconds without blinding oncoming traffic, framed by Porsche’s iconic four-point daytime running light signature.',
    engineeringData: '84 pixels per module · 600m active range · Camera-guided dimming'
  },
  {
    id: 'wheel',
    title: 'Center-Lock Forged Magnesium',
    category: 'UNSPRUNG ROTATING MASS',
    image: 'assets/craft-wheel.jpg',
    description: 'Directly inherited from endurance motorsport. A single central locking nut replaces traditional 5-lug bolts, enabling rapid track pit stops and shedding 8 kilograms of critical unsprung rotating mass for hyper-responsive steering feel.',
    engineeringData: '20" Front / 21" Rear · 8 kg unsprung weight saving · 600 Nm locking torque'
  },
  {
    id: 'interior',
    title: 'Race-Tex & Carbon Cockpit',
    category: 'LIGHTWEIGHT ERGONOMICS',
    image: 'assets/craft-interior.jpg',
    description: 'Lightweight full bucket seats constructed from carbon-fibre reinforced plastic (CFRP) with an exposed carbon-weave finish, trimmed in breathable non-slip Race-Tex with Guards Red contrast double-stitching.',
    engineeringData: 'CFRP shell structure · Integral thorax airbag · Race harness compatibility'
  },
  {
    id: 'steering',
    title: 'GT Sport Steering with Rotary Modes',
    category: 'DRIVER INTERACTION',
    image: 'assets/collection-carrera.jpg',
    description: 'Pure tactile command. Four dedicated rotary switches allow direct thumb adjustment of Porsche Active Suspension Management (PASM), Porsche Torque Vectoring Plus (PTV+), Traction Control (TC), and Drive Modes without taking eyes off the track apex.',
    engineeringData: '4 dedicated tactile rotary dials · Yellow 12 o’clock center band · 360 mm rim'
  },
  {
    id: 'rear-wing',
    title: 'Swan-Neck DRS Aerodynamics',
    category: 'DOWNFORCE KINEMATICS',
    image: 'assets/craft-rear.jpg',
    description: 'The monumental rear wing is mounted from above via swan-neck pylons. This leaves the delicate lower surface of the aerofoil aerodynamically clean, maximizing negative pressure suction and generating 860 kg of downforce at 285 km/h.',
    engineeringData: '860 kg downforce @ 285 km/h · Hydraulic DRS actuator · Carbon endplates'
  },
  {
    id: 'light-band',
    title: 'Continuous Seamless 3D Rear Light',
    category: 'SCULPTURAL PURITY',
    image: 'assets/hero-secondary.jpg',
    description: 'A monolithic, three-dimensional light strip spans the entire rear width of the vehicle, housing precision floating glass-look Porsche typography with microscopic light-guide optics.',
    engineeringData: 'Integrated LED light guide · 3D floating lettering · Edge-to-edge luminescence'
  }
];

export function initCraftsmanship() {
  const container = document.getElementById('craftsmanship-grid');
  if (!container) return;

  container.innerHTML = '';
  craftsmanshipDetails.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'group relative bg-[#101010] border border-white/10 overflow-hidden flex flex-col justify-between transition-all duration-400 hover:border-white/30';

    card.innerHTML = `
      <div class="relative w-full aspect-[4/3] bg-black overflow-hidden">
        <img 
          src="${item.image}" 
          alt="${item.title}" 
          class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent opacity-80"></div>
        <div class="absolute top-4 left-4">
          <span class="text-[9px] font-mono uppercase tracking-widest text-white/50 bg-black/60 px-2 py-0.5 border border-white/10">
            0${index + 1} // ${item.category}
          </span>
        </div>
      </div>

      <div class="p-6 md:p-8 flex flex-col justify-between flex-grow">
        <div>
          <h4 class="font-headline text-lg md:text-xl font-bold tracking-tight text-[#F5F5F2] group-hover:text-white transition-colors">
            ${item.title}
          </h4>
          <p class="mt-3 text-xs md:text-sm text-[#A3A3A3] leading-relaxed">
            ${item.description}
          </p>
        </div>

        <div class="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#777777]">
          <span>${item.engineeringData}</span>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

