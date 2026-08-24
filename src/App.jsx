import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Modes from './pages/Modes';


function App() {
  const isGamePage = window.location.pathname.startsWith('/game/');
  const isLeaderboardPage = window.location.pathname === '/leaderboard';

  return (
    <>
      <Navbar />
      <main className="app-shell">
        <Routes>
          <Route path="/modes" element ={<Modes />} />
        </Routes>
      </main>
      {!isGamePage && !isLeaderboardPage && <Footer />}
    </>
  );
}

export default App;
