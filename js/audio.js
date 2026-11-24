/**
 * Porsche Flat-Six Engine Sound Synthesizer (Web Audio API)
 * Generates an authentic flat-six boxer acoustic note with zero external dependencies.
 */

class PorscheAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.rpm = 900; // Idle RPM
    this.targetRpm = 900;
    this.masterGain = null;
    this.oscillators = [];
    this.filter = null;
    this.noiseNode = null;
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AudioContext();

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);

    // Filter to simulate exhaust manifold resonance
    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.setValueAtTime(280, this.ctx.currentTime);
    this.filter.Q.setValueAtTime(3.5, this.ctx.currentTime);
    this.filter.connect(this.masterGain);

    // Flat-Six 3-pulse firing order oscillators
    // Fundamental firing frequency = RPM / 60 * (6 / 2) = RPM * 0.05
    const freqs = [1, 2, 3, 0.5];
    const gains = [0.35, 0.22, 0.12, 0.28];

    this.oscillators = freqs.map((multiplier, idx) => {
      const osc = this.ctx.createOscillator();
      osc.type = idx === 0 ? 'sawtooth' : 'triangle';
      
      const g = this.ctx.createGain();
      g.gain.setValueAtTime(gains[idx], this.ctx.currentTime);

      osc.connect(g);
      g.connect(this.filter);
      osc.start();
      return { osc, multiplier, gain: g };
    });

    this.updateFrequencies(this.rpm);
  }

  updateFrequencies(rpm) {
    if (!this.ctx) return;
    const baseFreq = Math.max(30, (rpm / 60) * 3); // 3 firing pulses per revolution
    const t = this.ctx.currentTime;
    
    this.oscillators.forEach(({ osc, multiplier }) => {
      osc.frequency.setTargetAtTime(baseFreq * multiplier, t, 0.08);
    });

    // Modulate filter cutoff with engine speed
    const cutoff = Math.min(3200, 220 + (rpm / 9000) * 1800);
    this.filter.frequency.setTargetAtTime(cutoff, t, 0.08);
  }

  toggle() {
    if (!this.ctx) {
      this.init();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      this.stop();
    } else {
      this.start();
    }
    return this.isPlaying;
  }

  start() {
    if (!this.ctx) this.init();
    this.isPlaying = true;
    const t = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(t);
    this.masterGain.gain.setTargetAtTime(0.22, t, 0.15);
    this.revPulse(3800); // Startup throttle flare
  }

  stop() {
    if (!this.ctx) return;
    this.isPlaying = false;
    const t = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(t);
    this.masterGain.gain.setTargetAtTime(0, t, 0.2);
  }

  revPulse(targetRpm = 4500) {
    if (!this.isPlaying || !this.ctx) return;
    this.updateFrequencies(targetRpm);
    setTimeout(() => {
      if (this.isPlaying) {
        this.updateFrequencies(1100);
      }
    }, 600);
  }
}

export const audioEngine = new PorscheAudioEngine();

