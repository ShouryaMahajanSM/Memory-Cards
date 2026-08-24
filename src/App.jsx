import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rules from './pages/Rules';
import Modes from './pages/Modes';
import Game from './pages/Game';
import Support from './pages/Support';
import Leaderboard from './pages/Leaderboard';

function App() {
  const isGamePage = window.location.pathname.startsWith('/game/');
  const isLeaderboardPage = window.location.pathname === '/leaderboard';

  return (
    <>
      <Navbar />
      <main className="app-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/modes" element={<Modes />} />
          <Route path="/game/:difficulty" element={<Game key={window.location.pathname} />} />
          <Route path="/support" element={<Support />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </main>
      {!isGamePage && !isLeaderboardPage && <Footer />}
    </>
  );
}

export default App;
