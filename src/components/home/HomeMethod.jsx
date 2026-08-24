import React from 'react';
import '../../styles/components/home/HomeMethod.css';

const steps = [
  ['01', 'Observe', 'Study the board before making quick decisions. Every revealed card gives you useful information.'],
  ['02', 'Remember', 'Keep track of positions and symbols so your next move becomes faster and more accurate.'],
  ['03', 'Match', 'Use what you remember to complete pairs with fewer mistakes and a better score.'],
];

function HomeMethod() {
  return <section className="home-section home-how-it-works">
    <div className="home-section-heading"><p className="eyebrow">The Memory Master Method</p><h2>Simple to learn. <span>Hard to master.</span></h2><p>Every round is built around three small habits that make the game fun while keeping your brain engaged.</p></div>
    <div className="home-steps">{steps.map(([number, title, text]) => <article className="home-step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
  </section>;
}

export default HomeMethod;
