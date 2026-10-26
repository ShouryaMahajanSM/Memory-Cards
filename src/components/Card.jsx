import React from 'react';

function Card({ symbol, isFlipped, isMatched, isHinted, isDisabled, onClick }) {
  return (
    <button
      type="button"
      className={`memory-card${isFlipped ? ' flipped' : ''}${isMatched ? ' matched' : ''}${isHinted ? ' hinted' : ''}`}
      onClick={onClick}
      disabled={isMatched || isDisabled}
      aria-label={isFlipped ? `Card: ${symbol}` : 'Hidden card'}
      aria-pressed={isFlipped}
    >
      <span className="card-inner">
        <span className={`card-face ${isFlipped ? 'card-back' : 'card-front'}`} aria-hidden="true">
          {isFlipped ? symbol : '?'}
        </span>
      </span>
    </button>
  );
}

export default Card;
