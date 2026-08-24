import React, { useState } from 'react';
import { formatTime } from '../data/gameModes';

const STORAGE_KEY = 'memory-master-leaderboard';

function Leaderboard() {
  const [entries, setEntries] = useState(() => {
    try {
      const savedEntries = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(savedEntries) ? savedEntries : [];
    } catch { return []; }
  });
  const [name, setName] = useState(() => localStorage.getItem('memory-master-player') || 'Player');
  const [filter, setFilter] = useState('All');

  const modes = ['All'];
  entries.forEach((entry) => { if (!modes.includes(entry.mode)) modes.push(entry.mode); });
  const filteredEntries = filter === 'All' ? entries : entries.filter((entry) => entry.mode === filter);
  const visibleEntries = filteredEntries.slice(0, 6);
  function saveName() { const cleanName = name.trim().slice(0, 18) || 'Player'; setName(cleanName); localStorage.setItem('memory-master-player', cleanName); }
  function clearScores() { localStorage.removeItem(STORAGE_KEY); setEntries([]); }

  return <section className="leaderboard-page"><div className="leaderboard-backdrop" aria-hidden="true" /><div className="leaderboard-wrap">
    <header className="leaderboard-hero"><div><p className="eyebrow">Memory Master</p><h1>Beat your <span>best.</span></h1><p>Keep your best runs in one place and see how far your memory can take you.</p></div><div className="leaderboard-player"><label htmlFor="player-name">Player name</label><input id="player-name" value={name} maxLength={18} onChange={(event) => setName(event.target.value.slice(0, 18))} onBlur={saveName} /><small>Your name is saved on this device.</small></div></header>
    <div className="leaderboard-toolbar"><div className="leaderboard-filters">{modes.map((mode) => <button key={mode} className={filter === mode ? 'active' : ''} onClick={() => setFilter(mode)}>{mode}</button>)}</div>{entries.length > 0 && <button className="leaderboard-clear" onClick={clearScores}>Clear Scores</button>}</div>
    <section className="leaderboard-table"><div className="leaderboard-row leaderboard-head"><span>Rank</span><span>Player</span><span>Mode</span><span>Time</span><span>Moves</span><span>Score</span></div>{visibleEntries.length ? visibleEntries.map((entry, index) => <div className="leaderboard-row" key={entry.id}><span className={`rank rank-${index + 1}`}>{index + 1}</span><strong>{entry.player}</strong><span>{entry.mode}</span><span>{formatTime(entry.time)}</span><span>{entry.moves}</span><b>{entry.score}</b></div>) : <div className="leaderboard-empty"><span className="eyebrow">No scores yet</span><h2>Play a round to enter the board.</h2><p>Complete a game and your result will appear here automatically.</p></div>}</section>
    {filteredEntries.length > 6 && <p className="leaderboard-limit">Showing the top 6 results for this view.</p>}<section className="leaderboard-tip"><div><p className="eyebrow">How it works</p><h2>Play well. <span>Score higher.</span></h2></div><p>Classic games reward fewer moves and faster finishes. Timed games reward matches and the time you have left.</p></section>
  </div></section>;
}

export default Leaderboard;
