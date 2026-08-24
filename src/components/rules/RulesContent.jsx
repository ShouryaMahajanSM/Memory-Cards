import React from 'react';
import { Link } from 'react-router-dom';

const rules = [['01', '↗', 'Flip a card', 'Select a hidden card to reveal its symbol. Pay attention to where it appears.'], ['02', '◇', 'Find its pair', 'Choose a second card and try to match the same symbol.'], ['03', '◎', 'Use your memory', 'Even an unsuccessful turn teaches you another card position. Remember it for later.'], ['04', '★', 'Clear the board', 'Match every pair to finish the round and see your final result.']];
const tips = ['Look at the whole board before your first move.', 'Remember positions, not just the symbols.', 'Take your time when two cards look familiar.', 'Replay a mode to beat your previous score.'];

function RulesContent() {
  return <div className="rules-content">
    <div className="rules-section-title"><p className="eyebrow">The Basics</p><h2>Four rules. <span>One objective.</span></h2></div>
    <div className="rules-grid">{rules.map(([number, symbol, title, text], index) => <article className={`rule-card${index === 0 ? ' featured-rule' : ''}`} key={number}><span className="rule-number">{number}</span><div className="rule-symbol">{symbol}</div><h3>{title}</h3><p>{text}</p></article>)}</div>
    <section className="rules-tips"><div className="rules-tips-copy"><p className="eyebrow">Play Smarter</p><h2>Small habits make <span>big scores.</span></h2><p>There is no need to rush. Build a visual map of the board and let your previous turns guide the next one.</p></div><div className="tips-list">{tips.map((tip, index) => <div key={tip}><b>{String(index + 1).padStart(2, '0')}</b><span>{tip}</span></div>)}</div></section>
    <section className="rules-cta"><div><p className="eyebrow">Ready?</p><h2>Put your memory to the test.</h2><p>Choose a difficulty and see how many pairs you can clear.</p></div><Link to="/modes" className="home-primary-btn">Choose Your Mode <span>→</span></Link></section>
  </div>;
}

export default RulesContent;
