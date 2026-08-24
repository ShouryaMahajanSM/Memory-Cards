import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/home/HomeMemoryLab.css';

const habits = [
  ['01', 'Pause before you flip', 'Take a second to look at the board instead of rushing into the next card.'],
  ['02', 'Build small patterns', 'Remember cards in groups or rows. Smaller patterns are easier to recall.'],
  ['03', 'Try a timed round', 'When classic mode feels easy, test your focus with a short countdown.'],
];

function HomeMemoryLab() {
  return <section className="home-section home-memory-lab">
    <div className="home-section-heading"><p className="eyebrow">Memory Lab</p><h2>Small habits. <span>Better matches.</span></h2><p>Use these simple habits during a round to stay focused, make fewer mistakes, and improve your score naturally.</p></div>
    <div className="home-lab-grid">{habits.map(([number, title, text], index) => <article className={`home-lab-card${index === 2 ? ' home-lab-highlight' : ''}`} key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p>{index === 2 && <Link to="/game/timed60" className="home-text-link">Try 60 Seconds <span>→</span></Link>}</article>)}</div>
  </section>;
}

export default HomeMemoryLab;
