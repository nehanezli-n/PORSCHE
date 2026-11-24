/**
 * Porsche Drift Experience Controller
 * Handles interactive GT3 RS drift angle modulation, live telemetry updates,
 * friction circle G-meter, and high-framerate water spray particle simulation on wet asphalt.
 */

import { audioEngine } from './audio.js';

export function initDriftExperience() {
  const container = document.getElementById('drift-section');
  const carWrapper = document.getElementById('drift-car-wrapper');
  const slider = document.getElementById('drift-angle-slider');
  const yawValue = document.getElementById('drift-yaw-val');
  const lateralGValue = document.getElementById('drift-lateralg-val');
  const slipAngleValue = document.getElementById('drift-slip-val');
  const throttleValue = document.getElementById('drift-throttle-val');
  const rpmValue = document.getElementById('drift-rpm-val');
  const gBall = document.getElementById('drift-g-ball');
  const canvas = document.getElementById('drift-spray-canvas');

  if (!container || !carWrapper || !canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = container.clientWidth);
  let height = (canvas.height = container.clientHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = container.clientWidth;
    height = canvas.height = container.clientHeight;
  });

  // Particle System for Water Spray and Tyre Mist
  const particles = [];
  const maxParticles = 120;

  class SprayParticle {
    constructor(originX, originY, intensity) {
      this.reset(originX, originY, intensity);
    }

    reset(originX, originY, intensity) {
      this.x = originX + (Math.random() - 0.5) * 40;
      this.y = originY + (Math.random() - 0.5) * 20;
      const angle = (Math.random() * 0.5 + 0.8) * Math.PI; // Spray backward & upward
      const speed = (Math.random() * 8 + 5) * (0.6 + intensity * 0.8);
      this.vx = Math.cos(angle) * speed;
      this.vy = -Math.sin(angle) * (speed * 0.45) - Math.random() * 2;
      this.size = Math.random() * 4 + 1.2;
      this.alpha = (Math.random() * 0.4 + 0.25) * (0.5 + intensity * 0.5);
      this.gravity = 0.14;
      this.decay = Math.random() * 0.018 + 0.012;
      this.life = 1.0;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += this.gravity;
      this.life -= this.decay;
      this.alpha = Math.max(0, this.alpha * this.life);
      this.size *= 1.028; // Expands as fine mist
    }

    draw(context) {
      if (this.alpha <= 0.01) return;
      context.beginPath();
      context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      context.fillStyle = `rgba(225, 238, 255, ${this.alpha})`;
      context.fill();
    }
  }

  // Pre-seed particles
  for (let i = 0; i < maxParticles; i++) {
    particles.push(new SprayParticle(width * 0.65, height * 0.72, 0.5));
  }

  let driftFactor = 0.65; // Normalized 0..1
  let isInView = false;

  // Scroll Observer for Cinematic Entrance
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isInView = entry.isIntersecting;
      });
    },
    { threshold: 0.15 }
  );
  observer.observe(container);

  // Scroll Parallax
  window.addEventListener('scroll', () => {
    if (!isInView) return;
    const rect = container.getBoundingClientRect();
    const progress = Math.min(Math.max((window.innerHeight - rect.top) / (window.innerHeight + rect.height), 0), 1);
    
    // Smooth translation across screen
    const translateX = (progress - 0.5) * 100;
    const rotateZ = (progress - 0.5) * -5;
    carWrapper.style.transform = `translateX(${translateX}px) rotate(${rotateZ}deg)`;
  });

  // Slider Input
  let lastRevTime = 0;
  if (slider) {
    slider.addEventListener('input', (e) => {
      driftFactor = parseFloat(e.target.value) / 100;
      updateTelemetry(driftFactor);

      // Acoustic rev pulse if audio is running and user drags slider
      const now = Date.now();
      if (now - lastRevTime > 400 && audioEngine.isPlaying) {
        lastRevTime = now;
        audioEngine.revPulse(3000 + driftFactor * 5500);
      }
    });
  }

  function updateTelemetry(factor) {
    // factor: 0 (grip entry) to 1.0 (extreme counter-steer drift)
    const yaw = (8 + factor * 37).toFixed(1);
    const lateralG = (1.05 + factor * 0.52).toFixed(2);
    const slip = (6 + factor * 26).toFixed(1);
    const throttle = Math.round(55 + factor * 42);
    const rpm = Math.round(4800 + factor * 4100);

    if (yawValue) yawValue.textContent = `+${yaw}°`;
    if (lateralGValue) lateralGValue.textContent = `${lateralG} G`;
    if (slipAngleValue) slipAngleValue.textContent = `${slip}°`;
    if (throttleValue) throttleValue.textContent = `${throttle}%`;
    if (rpmValue) rpmValue.textContent = `${rpm.toLocaleString()} RPM`;

    // Move G-Force Friction Ball
    if (gBall) {
      // 40px radius circle. Position ball with lateral and longitudinal G
      const offsetX = 40 + (factor * 32);
      const offsetY = 40 - (factor * 12);
      gBall.style.left = `${offsetX}px`;
      gBall.style.top = `${offsetY}px`;
    }

    // Visual car tilt modulation
    const carImage = document.getElementById('drift-car-image');
    if (carImage) {
      const tilt = (factor - 0.5) * 5;
      carImage.style.transform = `scale(${1 + factor * 0.03}) rotate(${tilt}deg)`;
    }
  }

  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, width, height);

    if (isInView) {
      // Rear wheel contact patch approximate position
      const carRect = carWrapper.getBoundingClientRect();
      const contRect = container.getBoundingClientRect();
      const originX = (carRect.left - contRect.left) + carRect.width * 0.72;
      const originY = (carRect.top - contRect.top) + carRect.height * 0.82;

      particles.forEach((p) => {
        p.update();
        if (p.life <= 0) {
          p.reset(originX, originY, driftFactor);
        }
        p.draw(ctx);
      });
    }

    requestAnimationFrame(animate);
  }

  animate();
  updateTelemetry(driftFactor);
}
