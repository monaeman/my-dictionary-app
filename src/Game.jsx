import React from 'react';

const Game = () => {
  const gameImageUrl = 'https://a.storyblok.com/f/239645/600x304/4a2ba3c8e9/daily-crossword.png';
  const gameUrl = 'https://www.dictionary.com/e/crossword/';

  return (
    <div>
      <a href={gameUrl} target="_blank" rel="noopener noreferrer">
        <h2>Crossword</h2>
        <img src={gameImageUrl} alt="Game" style={{ width: "200px", height: "200px", marginTop: "20px" }} />
      </a>
<h3> Get that job </h3>     
<a href="https://www.thesaurus.com/e/writing/how-do-i-write-a-resume/" target="_blank" rel="noopener noreferrer">
        Your Guide To Writing A Strong Resume
      </a>


      
    </div>
  );
};

export default Game;
