/**
 * Interactive Porsche Colour Configurator
 * Controls 6 bespoke Porsche paint swatches across matching Overhead and Studio Profile views
 * with smooth crossfade and zero layout shift.
 */

export const configuratorColors = [
  {
    id: 'guards-red',
    name: 'Guards Red',
    code: 'G1',
    category: 'Solid',
    hex: '#D5001C',
    description: 'The defining racing red of Porsche motorsport since the 1970s. Vibrant, uncompromising, and deeply rooted in endurance victory.',
    overhead: 'assets/configurator/overhead-guards-red.svg',
    profile: 'assets/configurator/profile-guards-red.svg'
  },
  {
    id: 'racing-yellow',
    name: 'Racing Yellow',
    code: '1S1',
    category: 'Solid',
    hex: '#FAD201',
    description: 'High-visibility racetrack intensity. A pure solid primary tone designed to slice through trackside mist with unyielding clarity.',
    overhead: 'assets/configurator/overhead-racing-yellow.svg',
    profile: 'assets/configurator/profile-racing-yellow.svg'
  },
  {
    id: 'jet-black',
    name: 'Jet Black Metallic',
    code: '2T',
    category: 'Metallic',
    hex: '#111215',
    description: 'Deep obsidian metallic paint enriched with subtle micro-crystalline flake for a commanding nocturnal presence and sculptural reflections.',
    overhead: 'assets/configurator/overhead-jet-black.svg',
    profile: 'assets/configurator/profile-jet-black.svg'
  },
  {
    id: 'carrara-white',
    name: 'Carrara White Metallic',
    code: '2Y',
    category: 'Metallic',
    hex: '#EAEAEA',
    description: 'Inspired by pristine Tuscan marble. Multi-layer metallic pearl finish highlighting every aerodynamic incision, vent, and carbon contour.',
    overhead: 'assets/configurator/overhead-carrara-white.svg',
    profile: 'assets/configurator/profile-carrara-white.svg'
  },
  {
    id: 'gentian-blue',
    name: 'Gentian Blue Metallic',
    code: '1A',
    category: 'Metallic',
    hex: '#142B4E',
    description: 'An oceanic cobalt metallic that shifts from midnight deep tones in low light to striking electric blue under direct illumination.',
    overhead: 'assets/configurator/overhead-gentian-blue.svg',
    profile: 'assets/configurator/profile-gentian-blue.svg'
  },
  {
    id: 'oak-green',
    name: 'Oak Green Metallic Neo',
    code: '8B',
    category: 'Legends / Paint to Sample',
    hex: '#1E3B2B',
    description: 'Reimagined from the historic 1970s Porsche palette. A regal forest emerald metallic carrying decades of Zuffenhausen pedigree.',
    overhead: 'assets/configurator/overhead-oak-green.svg',
    profile: 'assets/configurator/profile-oak-green.svg'
  }
];

export function initConfigurator() {
  const imageContainer = document.getElementById('configurator-viewport');
  const swatchesContainer = document.getElementById('configurator-swatches');
  const colorNameElem = document.getElementById('config-color-name');
  const colorCodeElem = document.getElementById('config-color-code');
  const colorTypeElem = document.getElementById('config-color-type');
  const colorDescElem = document.getElementById('config-color-desc');
  const viewToggleButtons = document.querySelectorAll('.config-view-btn');
  const copySpecBtn = document.getElementById('config-copy-btn');
  const bookViewingBtn = document.getElementById('config-book-btn');

  if (!imageContainer || !swatchesContainer) return;

  let activeColorId = 'guards-red';
  let activeAngle = 'overhead'; // 'overhead' or 'profile'

  // Pre-mount all images in DOM for zero-latency instant crossfade
  imageContainer.innerHTML = '';
  configuratorColors.forEach((c) => {
    // Overhead view image
    const imgOverhead = document.createElement('img');
    imgOverhead.src = c.overhead;
    imgOverhead.alt = `${c.name} - Overhead View`;
    imgOverhead.className = `configurator-view-image ${c.id === activeColorId && activeAngle === 'overhead' ? 'active' : ''}`;
    imgOverhead.id = `view-${c.id}-overhead`;
    imageContainer.appendChild(imgOverhead);

    // Profile view image
    const imgProfile = document.createElement('img');
    imgProfile.src = c.profile;
    imgProfile.alt = `${c.name} - Profile View`;
    imgProfile.className = `configurator-view-image ${c.id === activeColorId && activeAngle === 'profile' ? 'active' : ''}`;
    imgProfile.id = `view-${c.id}-profile`;
    imageContainer.appendChild(imgProfile);
  });

  // Render Swatch buttons
  swatchesContainer.innerHTML = '';
  configuratorColors.forEach((c) => {
    const btn = document.createElement('button');
    btn.className = `swatch-btn ${c.id === activeColorId ? 'active' : ''}`;
    btn.setAttribute('data-color', c.id);
    btn.setAttribute('aria-label', `Select ${c.name}`);
    btn.title = `${c.name} (${c.category})`;

    btn.innerHTML = `
      <div class="swatch-color-circle" style="background-color: ${c.hex};"></div>
    `;

    btn.addEventListener('click', () => {
      selectColor(c.id);
    });

    swatchesContainer.appendChild(btn);
  });

  function selectColor(colorId) {
    activeColorId = colorId;
    const color = configuratorColors.find((c) => c.id === colorId);
    if (!color) return;

    // Update Swatches UI
    document.querySelectorAll('.swatch-btn').forEach((b) => {
      b.classList.toggle('active', b.getAttribute('data-color') === colorId);
    });

    // Crossfade Image Viewport
    document.querySelectorAll('.configurator-view-image').forEach((img) => {
      img.classList.remove('active');
    });

    const targetImg = document.getElementById(`view-${colorId}-${activeAngle}`);
    if (targetImg) {
      targetImg.classList.add('active');
    }

    // Update Text Data
    if (colorNameElem) colorNameElem.textContent = color.name;
    if (colorCodeElem) colorCodeElem.textContent = `CODE ${color.code}`;
    if (colorTypeElem) colorTypeElem.textContent = color.category.toUpperCase();
    if (colorDescElem) colorDescElem.textContent = color.description;
  }

  // View angle toggle
  viewToggleButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      viewToggleButtons.forEach((b) => {
        b.classList.remove('active', 'border-white', 'text-white', 'bg-white/10');
        b.classList.add('border-white/10', 'text-[#A3A3A3]');
      });
      btn.classList.add('active', 'border-white', 'text-white', 'bg-white/10');
      btn.classList.remove('border-white/10', 'text-[#A3A3A3]');

      activeAngle = btn.getAttribute('data-angle');
      selectColor(activeColorId);
    });
  });

  // Copy Specification Code
  if (copySpecBtn) {
    copySpecBtn.addEventListener('click', () => {
      const color = configuratorColors.find((c) => c.id === activeColorId);
      const code = `PORSCHE-992-GT3RS-${color.code}-${color.id.toUpperCase()}-SPEC-2026`;
      navigator.clipboard.writeText(code).then(() => {
        const originalText = copySpecBtn.innerHTML;
        copySpecBtn.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5 text-green-400"></i> Code Copied`;
        if (window.lucide) window.lucide.createIcons();
        setTimeout(() => {
          copySpecBtn.innerHTML = originalText;
          if (window.lucide) window.lucide.createIcons();
        }, 2200);
      });
    });
  }

  // Pre-fill private viewing
  if (bookViewingBtn) {
    bookViewingBtn.addEventListener('click', () => {
      const color = configuratorColors.find((c) => c.id === activeColorId);
      const select = document.getElementById('pv-model');
      if (select) select.value = 'Porsche 911 GT3 RS';
      const notes = document.getElementById('pv-message');
      if (notes) {
        notes.value = `Inquiry regarding 911 GT3 RS configured in ${color.name} (Code ${color.code}, ${color.category}).`;
      }
      document.getElementById('private-viewing').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Initial selection
  selectColor('guards-red');
}

