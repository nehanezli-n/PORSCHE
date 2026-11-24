/**
 * Porsche Digital Dashboard & Telemetry ("Read it like the dash")
 * Precision technical instrumentation inspired by the Porsche digital driver display.
 */

export const telemetryModels = {
  'gt3-rs': {
    name: 'Porsche 911 GT3 RS',
    code: 'Type 992 · Weissach Package',
    drivetrainType: 'Atmospheric Flat-6 · Rear-Wheel Drive',
    accel: '3.2',
    accelUnit: 'SECONDS',
    power: '525',
    powerUnit: 'PS (386 KW)',
    topSpeed: '296',
    speedUnit: 'KM/H',
    downforce: '860',
    downforceUnit: 'KG @ 285 KM/H',
    lateralG: '1.85',
    lateralGUnit: 'MAX LATERAL G',
    redline: '9,000',
    redlineUnit: 'RPM REDLINE',
    gaugePercent: 95,
    gearRatio: '7-Speed PDK (3.91 Final)',
    displacement: '3,996 cm³',
    tpmsFront: '31.5 PSI · 38°C',
    tpmsRear: '33.0 PSI · 42°C',
    drsActive: false
  },
  'taycan-gt': {
    name: 'Porsche Taycan Turbo GT',
    code: 'Weissach Package · All-Electric',
    drivetrainType: 'Dual PMSM Motors · All-Wheel Drive',
    accel: '2.2',
    accelUnit: 'SECONDS (WITH ATTACK MODE)',
    power: '1,108',
    powerUnit: 'PS (815 KW)',
    topSpeed: '305',
    speedUnit: 'KM/H',
    downforce: '220',
    downforceUnit: 'KG @ V-MAX',
    lateralG: '1.65',
    lateralGUnit: 'MAX LATERAL G',
    redline: '16,000',
    redlineUnit: 'MOTOR RPM',
    gaugePercent: 99,
    gearRatio: '2-Speed Rear Transaxle',
    displacement: '97.0 kWh Performance Battery Plus',
    tpmsFront: '36.0 PSI · 34°C',
    tpmsRear: '38.5 PSI · 36°C',
    drsActive: false
  },
  'carrera-gts': {
    name: 'Porsche 911 Carrera GTS',
    code: 'Type 992.2 · T-Hybrid System',
    drivetrainType: 'Boxer Turbo + E-Motor · Rear-Wheel Drive',
    accel: '3.0',
    accelUnit: 'SECONDS',
    power: '541',
    powerUnit: 'PS (398 KW)',
    topSpeed: '312',
    speedUnit: 'KM/H',
    downforce: 'Adaptive Aero Flaps',
    downforceUnit: 'ACTIVE COOLING',
    lateralG: '1.45',
    lateralGUnit: 'MAX LATERAL G',
    redline: '7,500',
    redlineUnit: 'RPM REDLINE',
    gaugePercent: 82,
    gearRatio: '8-Speed PDK with integrated e-motor',
    displacement: '3,591 cm³',
    tpmsFront: '32.0 PSI · 35°C',
    tpmsRear: '34.0 PSI · 38°C',
    drsActive: false
  }
};

export function initTelemetry() {
  const modelTabs = document.querySelectorAll('.telemetry-tab-btn');
  const dashModelTitle = document.getElementById('dash-model-title');
  const dashModelCode = document.getElementById('dash-model-code');
  const dashDrivetrain = document.getElementById('dash-drivetrain');

  const valAccel = document.getElementById('dash-val-accel');
  const unitAccel = document.getElementById('dash-unit-accel');

  const valPower = document.getElementById('dash-val-power');
  const unitPower = document.getElementById('dash-unit-power');

  const valSpeed = document.getElementById('dash-val-speed');
  const unitSpeed = document.getElementById('dash-unit-speed');

  const valDownforce = document.getElementById('dash-val-downforce');
  const unitDownforce = document.getElementById('dash-unit-downforce');

  const valLateralG = document.getElementById('dash-val-lateralg');
  const unitLateralG = document.getElementById('dash-unit-lateralg');

  const valRedline = document.getElementById('dash-val-redline');
  const unitRedline = document.getElementById('dash-unit-redline');

  const tpmsFront = document.getElementById('dash-tpms-front');
  const tpmsRear = document.getElementById('dash-tpms-rear');

  const gaugeArc = document.getElementById('dash-gauge-arc');
  const exploreBtn = document.getElementById('dash-explore-btn');
  const drsToggleBtn = document.getElementById('dash-drs-toggle');
  const drsStatusText = document.getElementById('dash-drs-status');

  const shiftLeds = document.querySelectorAll('.shift-led');

  const engineeringModal = document.getElementById('engineering-modal');
  const engModalClose = document.getElementById('eng-modal-close');
  const engBackdrop = document.getElementById('eng-modal-backdrop');

  if (!dashModelTitle) return;

  let currentModelKey = 'gt3-rs';
  let isDrsOpen = false;

  function setModel(modelKey) {
    currentModelKey = modelKey;
    const data = telemetryModels[modelKey];
    if (!data) return;

    // Smooth counter update
    animateValue(valAccel, parseFloat(valAccel.textContent) || 0, parseFloat(data.accel), 400, 1);
    animateValue(valPower, parseInt(valPower.textContent.replace(',', '')) || 0, parseInt(data.power.replace(',', '')), 400, 0);
    animateValue(valSpeed, parseInt(valSpeed.textContent) || 0, parseInt(data.topSpeed), 400, 0);

    if (dashModelTitle) dashModelTitle.textContent = data.name;
    if (dashModelCode) dashModelCode.textContent = data.code;
    if (dashDrivetrain) dashDrivetrain.textContent = data.drivetrainType;

    if (unitAccel) unitAccel.textContent = data.accelUnit;
    if (unitPower) unitPower.textContent = data.powerUnit;
    if (unitSpeed) unitSpeed.textContent = data.speedUnit;

    if (valDownforce) valDownforce.textContent = isDrsOpen ? '360' : data.downforce;
    if (unitDownforce) unitDownforce.textContent = isDrsOpen ? 'KG @ 285 KM/H (DRS OPEN)' : data.downforceUnit;

    if (valLateralG) valLateralG.textContent = data.lateralG;
    if (unitLateralG) unitLateralG.textContent = data.lateralGUnit;

    if (valRedline) valRedline.textContent = data.redline;
    if (unitRedline) unitRedline.textContent = data.redlineUnit;

    if (tpmsFront) tpmsFront.textContent = data.tpmsFront;
    if (tpmsRear) tpmsRear.textContent = data.tpmsRear;

    // Digital arc progression
    if (gaugeArc) {
      const offset = 283 - (283 * (data.gaugePercent / 100));
      gaugeArc.style.strokeDashoffset = offset;
    }

    // Animate Shift Light LEDs
    animateShiftLights(data.gaugePercent);
  }

  function animateShiftLights(percent) {
    shiftLeds.forEach((led, i) => {
      led.classList.remove('active');
      const threshold = 50 + (i * 7); // Sequence from 50% to 92%
      if (percent >= threshold) {
        setTimeout(() => {
          led.classList.add('active');
        }, i * 60);
      }
    });
  }

  function animateValue(elem, start, end, duration, decimals = 0) {
    if (!elem) return;
    const startTime = performance.now();
    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * ease;
      elem.textContent = decimals > 0 ? current.toFixed(decimals) : Math.round(current).toLocaleString();
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  }

  modelTabs.forEach((btn) => {
    btn.addEventListener('click', () => {
      modelTabs.forEach((b) => {
        b.classList.remove('active', 'border-white', 'text-white', 'bg-white/10');
        b.classList.add('border-white/10', 'text-[#A3A3A3]');
      });
      btn.classList.add('active', 'border-white', 'text-white', 'bg-white/10');
      btn.classList.remove('border-white/10', 'text-[#A3A3A3]');

      const modelKey = btn.getAttribute('data-model');
      setModel(modelKey);
    });
  });

  // DRS Wing Toggle Button
  if (drsToggleBtn) {
    drsToggleBtn.addEventListener('click', () => {
      isDrsOpen = !isDrsOpen;
      const data = telemetryModels[currentModelKey];
      if (isDrsOpen) {
        drsToggleBtn.classList.add('bg-[#D5001C]', 'text-white', 'border-[#D5001C]');
        if (drsStatusText) drsStatusText.textContent = 'DRS ACTIVE (LOW DRAG)';
        if (valDownforce) valDownforce.textContent = '360';
        if (unitDownforce) unitDownforce.textContent = 'KG @ 285 KM/H (WING FLAT)';
      } else {
        drsToggleBtn.classList.remove('bg-[#D5001C]', 'text-white', 'border-[#D5001C]');
        if (drsStatusText) drsStatusText.textContent = 'HIGH DOWNFORCE (860 KG)';
        if (valDownforce) valDownforce.textContent = data.downforce;
        if (unitDownforce) unitDownforce.textContent = data.downforceUnit;
      }
    });
  }

  // Explore engineering modal
  if (exploreBtn && engineeringModal) {
    exploreBtn.addEventListener('click', () => {
      engineeringModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  }

  function closeEngModal() {
    if (!engineeringModal) return;
    engineeringModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (engModalClose) engModalClose.addEventListener('click', closeEngModal);
  if (engBackdrop) engBackdrop.addEventListener('click', closeEngModal);

  // Initial setup with 911 GT3 RS
  setModel('gt3-rs');
}
