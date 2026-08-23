import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Game from './pages/Game';
import Support from './pages/Support';

function App() {
  const isGamePage = window.location.pathname.startsWith('/game/');

  return (
    <>
      <Navbar />

      <main className="app-shell">
        <Routes>
          {/* Game */}
          <Route path="/" element={<Game />} />

          {/* Game with difficulty */}
          <Route path="/game/:difficulty" element={<Game />} />

          {/* Support */}
          <Route path="/support" element={<Support />} />
        </Routes>
      </main>

      {!isGamePage && <Footer />}
    </>
  );
}

export default App;