import React from 'react';
import HomeHero from '../components/home/HomeHero';
import HomeFeatures from '../components/home/HomeFeatures';
import HomeMethod from '../components/home/HomeMethod';
import HomeMemoryLab from '../components/home/HomeMemoryLab';
import HomeChallenge from '../components/home/HomeChallenge';

function Home() {
  return (
    <div className="home-page">
      <HomeHero />
      <HomeFeatures />
      <HomeMethod />
      <HomeMemoryLab />
      <HomeChallenge />
    </div>
  );
}

export default Home;
