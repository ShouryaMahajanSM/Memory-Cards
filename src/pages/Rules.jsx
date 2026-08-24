import React from 'react';
import heroBackground from '../assets/hero-background.jpg';
import RulesHero from '../components/rules/RulesHero';
import RulesContent from '../components/rules/RulesContent';

function Rules() {
  return (
    <section className="rules-page" style={{ '--rules-image': `url(${heroBackground})` }}>
      <div className="rules-backdrop" aria-hidden="true" />

      <RulesHero />
      <RulesContent />
    </section>
  );
}

export default Rules;
