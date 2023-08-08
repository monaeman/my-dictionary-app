import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

function App() {

  const gameImageUrl = 'https://a.storyblok.com/f/239645/600x304/4a2ba3c8e9/daily-crossword.png';
  const gameUrl = 'https://www.dictionary.com/e/crossword/';

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

      <div style={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon icon={faBook} style={{ fontSize: "24px", marginRight: "8px" }} />
        <span>
        <h1 style={{ color: "blue", textAlign: "center" }}>Dictionary</h1>
        </span>
      </div>
      <a href={gameUrl} target="_blank" rel="noopener noreferrer">
        <img src={gameImageUrl} alt="Game" style={{ width: "200px", height: "200px", marginTop: "20px" }} />
      </a>
    </div>
  );
}

export default App;
