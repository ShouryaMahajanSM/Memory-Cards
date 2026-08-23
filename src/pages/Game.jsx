import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { MODE_CONFIG, SYMBOLS } from "../data/gameModes";

function getDifficulty() {
  return window.location.pathname.split("/")[2] || "normal";
}

function createDeck(difficulty) {
  const mode = MODE_CONFIG[difficulty];
  if (!mode) return [];
  const symbols = SYMBOLS.slice(0, (mode.rows * mode.cols) / 2);
  const deck = [...symbols, ...symbols];
  for (let index = deck.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [deck[index], deck[randomIndex]] = [deck[randomIndex], deck[index]];
  }
  return deck;
}

function Game() {
  const difficulty = getDifficulty();
  const config = MODE_CONFIG[difficulty];
  const [cards, setCards] = useState(() => createDeck(difficulty));
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const totalPairs = config ? (config.rows * config.cols) / 2 : 0;
  const matches = matchedCards.length / 2;

  function startGame() {
    setCards(createDeck(difficulty));
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setGameWon(false);
  }

  function saveScore(finalMoves) {
    const score = Math.max(100, 1000 - finalMoves * 10);
    const entry = {
      id: Date.now(),
      player: localStorage.getItem("memory-master-player") || "Player",
      mode: config.label,
      time: 0,
      moves: finalMoves,
      score,
    };
    try {
      const saved = JSON.parse(
        localStorage.getItem("memory-master-leaderboard") || "[]",
      );
      localStorage.setItem(
        "memory-master-leaderboard",
        JSON.stringify(
          [...saved, entry].sort((a, b) => b.score - a.score).slice(0, 50),
        ),
      );
    } catch {}
  }

  function handleCardClick(index) {
    if (gameWon || matchedCards.includes(index) || flippedCards.includes(index))
      return;

    if (flippedCards.length === 2) {
      setFlippedCards([index]);
      return;
    }

    if (flippedCards.length === 0) {
      setFlippedCards([index]);
      return;
    }

    const firstIndex = flippedCards[0];
    const nextMoves = moves + 1;
    setMoves(nextMoves);
    if (cards[firstIndex] === cards[index]) {
      const nextMatchedCards = [...matchedCards, firstIndex, index];
      setMatchedCards(nextMatchedCards);
      setFlippedCards([]);
      if (nextMatchedCards.length === cards.length) {
        setGameWon(true);
        saveScore(nextMoves);
      }
    } else {
      setFlippedCards([firstIndex, index]);
    }
  }

  if (!config)
    return (
      <section className="page content-page">
        <div className="section-card">
          <h1>Invalid Game Mode</h1>
          <Link to="/modes" className="primary-btn">
            Back To Modes
          </Link>
        </div>
      </section>
    );

  return (
    <section className="page content-page game-page">
      <div className="section-card game-card">
        <div className="game-header">
          <div>
            <p className="eyebrow">Memory Master</p>
            <h1>{config.label}</h1>
            <p className="page-copy">
              {config.rows} × {config.cols} board · {totalPairs} pairs
            </p>
          </div>
          <Link to="/modes" className="game-back-link">
            Modes
          </Link>
        </div>
        <div className="game-stats">
          <div className="stat-box">
            <small>Mode</small>
            <strong>{config.timer ? "Practice" : "Classic"}</strong>
          </div>
          <div className="stat-box">
            <small>Moves</small>
            <strong>{moves}</strong>
          </div>
          <div className="stat-box">
            <small>Matches</small>
            <strong>
              {matches}/{totalPairs}
            </strong>
          </div>
        </div>
        <div className="game-progress">
          <span
            style={{
              width: `${totalPairs ? (matches / totalPairs) * 100 : 0}%`,
            }}
          />
        </div>
        {gameWon ? (
          <div className="win-box">
            <span className="eyebrow">Complete</span>
            <h2>Board cleared.</h2>
            <p>You finished with {moves} moves.</p>
          </div>
        ) : (
          <p className="status-text">
            Find every matching pair. If two cards do not match, click another
            card to continue.
          </p>
        )}
        <div
          className={`cards-grid cards-grid-${difficulty}`}
          style={{
            gridTemplateColumns: `repeat(${config.cols}, var(--game-card-size, 68px))`,
          }}
        >
          {cards.map((card, index) => (
            <Card
              key={`${card}-${index}`}
              symbol={card}
              isFlipped={
                flippedCards.includes(index) || matchedCards.includes(index)
              }
              isMatched={matchedCards.includes(index)}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
        <div className="button-row">
          <button className="primary-btn button-reset" onClick={startGame}>
            Restart Game
          </button>
          <Link to="/modes" className="secondary-btn">
            Change Mode
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Game;
