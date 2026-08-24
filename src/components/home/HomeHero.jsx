import React from 'react';
import { Link } from 'react-router-dom';
import boardPreview from '../../assets/memory-board-preview.png';
import heroBackground from '../../assets/hero-background.jpg';
import '../../styles/components/home/HomeHero.css';

const stats = [
  ['3', 'Game Modes'],
  ['∞', 'Replayability'],
  ['100%', 'Focus Required'],
];

function HomeHero() {
  return (
    <section className="home-hero" style={{ '--hero-image': `url(${heroBackground})` }}>
      <div className="home-overlay" aria-hidden="true" />
      <div className="home-content">
        <div className="home-copy">
          <p className="home-kicker">Focus. Remember. Master.</p>
          <h1>Sharpen your mind.<span>Master your memory.</span></h1>
          <p className="home-description">A fun and engaging memory card game that strengthens your focus, concentration and cognitive skills.</p>
          <div className="button-row home-actions">
            <Link to="/rules" className="home-primary-btn"><span>✦</span> Start Playing</Link>
            <Link to="/rules" className="home-secondary-btn"><span>▷</span> How it works</Link>
          </div>
          <div className="home-stats">
            {stats.map(([value, label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}
          </div>
        </div>
        <div className="home-board-wrap"><img className="home-board" src={boardPreview} alt="Memory Master game board preview" /></div>
      </div>
    </section>
  );
}

export default HomeHero;
