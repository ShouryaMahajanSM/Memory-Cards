import React from 'react';
function Card({ symbol, isFlipped, isMatched, onClick }) {
  return (
    <button
      className={`memory-card ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`}
      onClick={onClick}
    >
      {isFlipped ? symbol : '?'}
    </button>
  );
}

export default Card;
