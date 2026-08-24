import React from 'react';
import '../../styles/components/home/HomeFeatures.css';

const features = [
  ['♧', 'Train Your Focus', 'Improve concentration and boost cognitive abilities.'],
  ['ϟ', 'Choose Your Pace', 'Pick a mode that fits your mood and challenge yourself.'],
  ['♜', 'Beat Your Best', 'Track your progress and become the memory master.'],
];

function HomeFeatures() {
  return <section className="home-features" aria-label="Memory Master benefits">
    {features.map(([icon, title, text]) => <article key={title}><div className="feature-icon">{icon}</div><div><h2>{title}</h2><p>{text}</p></div></article>)}
  </section>;
}

export default HomeFeatures;
