import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/home/HomeChallenge.css';

function HomeChallenge() {
  return <section className="home-section home-challenge"><div><p className="eyebrow">Your Next Challenge</p><h2>Can you remember <span>every position?</span></h2><p>Start with an easier board, learn the pattern, then move up when you are ready. Your best score is the only score you need to beat.</p></div><Link to="/modes" className="home-primary-btn">Choose Your Mode <span>→</span></Link></section>;
}

export default HomeChallenge;
