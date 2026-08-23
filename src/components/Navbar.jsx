import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="brand" aria-label="Memory Master home">
        <span className="brand-mark">♧</span><span>Memory <b>Master</b></span>
      </NavLink>
      <nav className="nav-links" aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/rules">Rules</NavLink>
        <NavLink to="/modes">Modes</NavLink>
        <NavLink to="/leaderboard">Leaderboard</NavLink>
      </nav>
    </header>
  );
}
export default Navbar;
