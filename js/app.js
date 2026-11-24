/**
 * Main Application Orchestrator — Luxury Edition
 */

import { audioEngine } from './audio.js';
import { initDriftExperience } from './drift.js';
import { initCollection } from './collection.js';
import { initTelemetry } from './telemetry.js';
import { initConfigurator } from './configurator.js';
import { initCraftsmanship } from './craftsmanship.js';
import { initViewingForm } from './viewingForm.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 1. Ambient Cursor Spotlight Follower
  const ambientCursor = document.getElementById('ambient-cursor-light');
  if (ambientCursor) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    window.addEventListener('pointermove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function renderCursor() {
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;
      ambientCursor.style.left = `${currentX}px`;
      ambientCursor.style.top = `${currentY}px`;
      requestAnimationFrame(renderCursor);
    }
    renderCursor();
  }

  // 2. 3D Tilt Effect on Hero Car
  const heroSection = document.getElementById('hero');
  const heroCar = document.getElementById('hero-car-media');
  if (heroSection && heroCar) {
    heroSection.addEventListener('pointermove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const xNorm = (e.clientX - rect.left) / rect.width - 0.5;
      const yNorm = (e.clientY - rect.top) / rect.height - 0.5;
      const rotY = xNorm * 4; // Subtle 4deg max
      const rotX = -yNorm * 3;
      heroCar.style.transform = `scale(1.03) rotateY(${rotY}deg) rotateX(${rotX}deg)`;
    });

    heroSection.addEventListener('pointerleave', () => {
      heroCar.style.transform = 'scale(1) rotateY(0deg) rotateX(0deg)';
    });
  }

  // 3. Navigation Scroll Behaviour
  const header = document.getElementById('main-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }

    // Active Section Highlighting
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 160;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 4. Mobile Menu Drawer
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    mobileDrawer.classList.remove('translate-x-full');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileDrawer.classList.add('translate-x-full');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
  if (mobileMenuCloseBtn) mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);
  mobileNavLinks.forEach((l) => l.addEventListener('click', closeMobileMenu));

  // 5. Audio Engine Integration (Header & Hero controls)
  const soundToggleBtn = document.getElementById('header-sound-btn');
  const heroSoundBtn = document.getElementById('hero-sound-btn');
  const soundText = document.getElementById('sound-status-text');

  function handleAudioToggle() {
    const isPlaying = audioEngine.toggle();
    updateSoundUI(isPlaying);
  }

  function updateSoundUI(isPlaying) {
    if (isPlaying) {
      if (soundToggleBtn) soundToggleBtn.classList.add('sound-playing', 'text-[#D5001C]', 'border-[#D5001C]');
      if (soundText) soundText.textContent = 'SOUND ACTIVE · 9,000 RPM';
      if (heroSoundBtn) {
        heroSoundBtn.innerHTML = `<span class="pulse-indicator"></span> FLAT-SIX BOXER RUNNING`;
      }
    } else {
      if (soundToggleBtn) soundToggleBtn.classList.remove('sound-playing', 'text-[#D5001C]', 'border-[#D5001C]');
      if (soundText) soundText.textContent = 'FLAT-SIX ACOUSTICS';
      if (heroSoundBtn) {
        heroSoundBtn.innerHTML = `<i data-lucide="volume-2" class="w-4 h-4 text-[#D5001C]"></i> START FLAT-SIX ENGINE`;
        if (window.lucide) window.lucide.createIcons();
      }
    }
  }

  if (soundToggleBtn) soundToggleBtn.addEventListener('click', handleAudioToggle);
  if (heroSoundBtn) heroSoundBtn.addEventListener('click', handleAudioToggle);

  // 6. Initialize Feature Sub-Systems
  initDriftExperience();
  initCollection();
  initTelemetry();
  initConfigurator();
  initCraftsmanship();
  initViewingForm();

  // 7. Back to Top Smooth Scroll
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  console.log('Porsche Digital Atelier Experience Initialized Successfully.');
});
