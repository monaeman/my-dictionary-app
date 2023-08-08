import React from 'react';

const Game = () => {
  const gameImageUrl = 'https://a.storyblok.com/f/239645/600x304/4a2ba3c8e9/daily-crossword.png';
  const gameUrl = 'https://www.dictionary.com/e/crossword/';

  return (
    <a href={gameUrl} target="_blank" rel="noopener noreferrer">
      <img src={gameImageUrl} alt="Game" style={{ width: "200px", height: "200px", marginTop: "20px" }} />
    </a>
  );
};

export default Game;