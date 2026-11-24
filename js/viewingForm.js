/**
 * Porsche Private Viewing Enquiry Form Controller
 * Comprehensive client-side validation, subtle luxury loading state,
 * confirmation card with generated VIP inquiry reference, and .ics calendar download.
 */

export function initViewingForm() {
  const form = document.getElementById('private-viewing-form');
  const formContainer = document.getElementById('form-card-container');
  const successCard = document.getElementById('viewing-success-card');
  const resetBtn = document.getElementById('reset-viewing-form-btn');
  const downloadIcsBtn = document.getElementById('download-ics-btn');

  // Input elements
  const nameInput = document.getElementById('pv-name');
  const emailInput = document.getElementById('pv-email');
  const phoneInput = document.getElementById('pv-phone');
  const modelSelect = document.getElementById('pv-model');
  const centreSelect = document.getElementById('pv-centre');
  const dateInput = document.getElementById('pv-date');
  const timeSelect = document.getElementById('pv-time');
  const messageInput = document.getElementById('pv-message');
  const submitBtn = document.getElementById('pv-submit-btn');

  if (!form) return;

  // Set minimum date to today + 2 business days
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 2);
  const minDateStr = minDate.toISOString().split('T')[0];
  if (dateInput) {
    dateInput.min = minDateStr;
  }

  // Real-time error clearance on input
  [nameInput, emailInput, phoneInput, dateInput].forEach((input) => {
    if (!input) return;
    input.addEventListener('input', () => {
      input.classList.remove('error');
      const errEl = document.getElementById(`${input.id}-err`);
      if (errEl) errEl.textContent = '';
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Name validation
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      showError(nameInput, 'Please provide your full legal name.');
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, 'Please provide a valid concierge email address.');
      isValid = false;
    }

    // Phone validation (min 8 digits)
    const cleanPhone = phoneInput.value.replace(/[^0-9+]/g, '');
    if (cleanPhone.length < 8) {
      showError(phoneInput, 'Please provide a valid direct phone number.');
      isValid = false;
    }

    // Date validation
    if (!dateInput.value) {
      showError(dateInput, 'Please select your preferred private viewing date.');
      isValid = false;
    }

    if (!isValid) return;

    // Simulate luxury transmission loading state
    submitBtn.disabled = true;
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = `
      <span class="inline-block animate-spin mr-2">◷</span>
      TRANSMITTING ENQUIRY TO PORSCHE CONCIERGE...
    `;

    setTimeout(() => {
      // Generate unique VIP Reference
      const randomId = Math.floor(1000 + Math.random() * 9000);
      const referenceId = `PV-2026-POR-${randomId}`;

      // Populate Success Summary Card
      document.getElementById('success-ref-id').textContent = referenceId;
      document.getElementById('success-model').textContent = modelSelect.value;
      document.getElementById('success-centre').textContent = centreSelect.value;
      document.getElementById('success-date').textContent = formatDate(dateInput.value);
      document.getElementById('success-time').textContent = timeSelect.options[timeSelect.selectedIndex].text;
      document.getElementById('success-email').textContent = emailInput.value.trim();

      // Show Success View
      formContainer.classList.add('hidden');
      successCard.classList.remove('hidden');

      // Scroll smoothly to confirmation
      document.getElementById('private-viewing').scrollIntoView({ behavior: 'smooth' });

      // Configure .ICS Calendar invite download
      if (downloadIcsBtn) {
        downloadIcsBtn.onclick = () => {
          generateIcsFile({
            refId: referenceId,
            model: modelSelect.value,
            centre: centreSelect.value,
            date: dateInput.value,
            timeSlot: timeSelect.options[timeSelect.selectedIndex].text
          });
        };
      }
    }, 1200);
  });

  function showError(input, message) {
    input.classList.add('error');
    const errEl = document.getElementById(`${input.id}-err`);
    if (errEl) {
      errEl.textContent = message;
      errEl.className = 'text-[11px] text-[#FF4D5E] font-headline tracking-wide mt-1';
    }
  }

  function formatDate(isoStr) {
    try {
      const d = new Date(isoStr);
      return d.toLocaleDateString('en-GB', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return isoStr;
    }
  }

  // Reset form handler
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = `REQUEST A PRIVATE VIEWING <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>`;
      successCard.classList.add('hidden');
      formContainer.classList.remove('hidden');
      if (window.lucide) window.lucide.createIcons();
    });
  }

  function generateIcsFile({ refId, model, centre, date, timeSlot }) {
    const formattedDate = date.replace(/-/g, '');
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Porsche AG//Private Viewing Concierge//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:REQUEST',
      'BEGIN:VEVENT',
      `UID:${refId}@porsche.com`,
      `DTSTAMP:${formattedDate}T090000Z`,
      `DTSTART:${formattedDate}T100000Z`,
      `DTEND:${formattedDate}T120000Z`,
      `SUMMARY:Private Viewing Enquiry: ${model}`,
      `DESCRIPTION:Private viewing appointment request for ${model} at ${centre}. Reference: ${refId}. A Porsche Pro concierge will confirm exact schedule.`,
      `LOCATION:${centre}`,
      'STATUS:TENTATIVE',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `Porsche-Viewing-${refId}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

