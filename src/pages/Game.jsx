import React, { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import { MODE_CONFIG, SYMBOLS } from "../data/gameModes";

function createDeck(mode) {
  const pairCount = (mode.rows * mode.cols) / 2;
  const cards = [
    ...SYMBOLS.slice(0, pairCount),
    ...SYMBOLS.slice(0, pairCount),
  ];
  for (let index = cards.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [cards[index], cards[randomIndex]] = [cards[randomIndex], cards[index]];
  }
  return cards;
}

function Game() {
  const [modeId, setModeId] = useState("easy");
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const mismatchLocked = useRef(false);
  const mismatchTimeout = useRef(null);
  const mode = MODE_CONFIG[modeId];
  const pairCount = (mode.rows * mode.cols) / 2;
  const movesLeft = mode.moveLimit ? Math.max(0, mode.moveLimit - moves) : null;

  useEffect(
    () => () => {
      if (mismatchTimeout.current) clearTimeout(mismatchTimeout.current);
    },
    [],
  );

  function startGame() {
    if (mismatchTimeout.current) clearTimeout(mismatchTimeout.current);
    mismatchTimeout.current = null;
    mismatchLocked.current = false;
    setCards(createDeck(mode));
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setGameStarted(true);
    setGameWon(false);
    setGameOver(false);
  }

  function chooseMode(nextMode) {
    setModeId(nextMode);
    setCards([]);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setGameStarted(false);
    setGameWon(false);
    setGameOver(false);
  }

  function handleCardClick(cardIndex) {
    if (!gameStarted || gameWon || gameOver || mismatchLocked.current) return;
    if (matchedCards.includes(cardIndex) || flippedCards.includes(cardIndex))
      return;

    if (flippedCards.length === 0) {
      setFlippedCards([cardIndex]);
      return;
    }

    const firstCardIndex = flippedCards[0];
    const nextMoveCount = moves + 1;
    setMoves(nextMoveCount);

    if (cards[firstCardIndex] === cards[cardIndex]) {
      const nextMatchedCards = [...matchedCards, firstCardIndex, cardIndex];
      setMatchedCards(nextMatchedCards);
      setFlippedCards([]);
      if (nextMatchedCards.length === cards.length) {
        setGameWon(true);
      } else if (mode.moveLimit && nextMoveCount >= mode.moveLimit) {
        setGameOver(true);
      }
      return;
    }

    setFlippedCards([firstCardIndex, cardIndex]);
    mismatchLocked.current = true;
    mismatchTimeout.current = setTimeout(() => {
      setFlippedCards([]);
      mismatchLocked.current = false;
      mismatchTimeout.current = null;
      if (mode.moveLimit && nextMoveCount >= mode.moveLimit) setGameOver(true);
    }, 850);
  }

  function returnToModeChoice() {
    setGameStarted(false);
    setCards([]);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setGameWon(false);
    setGameOver(false);
  }

  return (
    <section className="core-game page">
      <header className="core-game-heading">
        <p className="eyebrow">Member 1 · Core Game Logic</p>
        <h1>
          Memory <span>Match</span>
        </h1>
        <p className="page-copy">
          Deck creation, card selection, pair matching, move counting, and win
          detection.
        </p>
      </header>

      <section
        className="section-card game-card"
        aria-label="Memory game demonstration"
      >
        <div className="game-header">
          <div>
            <label className="mode-label" htmlFor="core-mode">
              Game mode
            </label>
            <select
              id="core-mode"
              value={modeId}
              disabled={gameStarted && !gameWon && !gameOver}
              onChange={(event) => chooseMode(event.target.value)}
            >
              {Object.entries(MODE_CONFIG).map(([id, option]) => (
                <option key={id} value={id}>
                  {option.label}
                </option>
              ))}
            </select>
            <p className="page-copy">
              {mode.rows} × {mode.cols} board · {pairCount} pairs
              {mode.moveLimit ? ` · ${mode.moveLimit}-move limit` : ""}
            </p>
          </div>
          <div className="core-game-stats" aria-live="polite">
            <span>
              Moves <b>{moves}</b>
            </span>
            <span>
              Matches{" "}
              <b>
                {matchedCards.length / 2}/{pairCount}
              </b>
            </span>
            {movesLeft !== null && (
              <span>
                Moves left <b>{movesLeft}</b>
              </span>
            )}
          </div>
        </div>

        {!gameStarted ? (
          <div className="core-game-prompt">
            <p>Choose a board and start when you’re ready.</p>
            <button className="primary-btn" type="button" onClick={startGame}>
              Start Game
            </button>
          </div>
        ) : gameWon || gameOver ? (
          <div className="core-game-result" role="status">
            <h2>{gameWon ? "You found every pair!" : "Move limit reached"}</h2>
            <p>
              {gameWon
                ? `Completed in ${moves} moves.`
                : "Try the board again and find more matches."}
            </p>
            <div className="button-row">
              <button className="primary-btn" type="button" onClick={startGame}>
                Restart Game
              </button>
              <button
                className="secondary-btn"
                type="button"
                onClick={returnToModeChoice}
              >
                Choose Another Mode
              </button>
            </div>
          </div>
        ) : (
          <>
            <p className="status-text">
              Turn over two cards to find a matching pair. Mismatched cards
              briefly lock while they turn back.
            </p>
            <div
              className="cards-grid core-cards-grid"
              style={{
                gridTemplateColumns: `repeat(${mode.cols}, minmax(0, 1fr))`,
              }}
            >
              {cards.map((symbol, index) => (
                <Card
                  key={`${symbol}-${index}`}
                  symbol={symbol}
                  isFlipped={
                    flippedCards.includes(index) || matchedCards.includes(index)
                  }
                  isMatched={matchedCards.includes(index)}
                  isDisabled={mismatchLocked.current}
                  onClick={() => handleCardClick(index)}
                />
              ))}
            </div>
            <div className="button-row core-game-controls">
              <button className="primary-btn" type="button" onClick={startGame}>
                Restart Game
              </button>
              <button
                className="secondary-btn"
                type="button"
                onClick={returnToModeChoice}
              >
                Choose Another Mode
              </button>
            </div>
          </>
        )}
      </section>
      <p className="core-demo-note">
        This copy demonstrates core matching logic. Timers, score records, and
        achievements are handled in separate member demonstrations.
      </p>
    </section>
  );
}

export default Game;
