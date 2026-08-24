import React from 'react';
import heroBackground from '../assets/hero-background.jpg';
import ModesContent from '../components/modes/ModesContent';

const modes = [
  { id: 'relaxed', number: '01', title: 'Relaxed', grid: '2 × 4', pairs: '4 pairs', symbol: '○', type: 'Classic' },
  { id: 'easy', number: '02', title: 'Easy', grid: '3 × 4', pairs: '6 pairs', symbol: '◇', type: 'Classic' },
  { id: 'normal', number: '03', title: 'Normal', grid: '4 × 4', pairs: '8 pairs', symbol: '✦', type: 'Classic' },
  { id: 'timed60', number: '04', title: '60 Seconds', grid: '4 × 4', pairs: '8 pairs', symbol: '◷', type: 'Timed', time: 60 },
  { id: 'timed90', number: '05', title: '90 Seconds', grid: '5 × 4', pairs: '10 pairs', symbol: '◷', type: 'Timed', time: 90 },
  { id: 'timed120', number: '06', title: '2 Minutes', grid: '6 × 6', pairs: '18 pairs', symbol: '◷', type: 'Timed', time: 120 },
];

function Modes() {
  return (
    <section className="modes-page" style={{ '--modes-image': `url(${heroBackground})` }}>
      <div className="modes-backdrop" aria-hidden="true" />

      <div className="modes-hero">
        <div>
          <p className="eyebrow">Game Modes</p>
          <h1>Find your pace.<br /><span>Test your memory.</span></h1>
          <p className="modes-lead">
            Pick a board that feels right for you, or try a timed round when you want a little more pressure.
          </p>
        </div>
      </div>

      <ModesContent modes={modes} />
    </section>
  );
}

export default Modes;
