import React from "react";

const Game = () => {
  // URLs and images for the games
  const gameImageUrl =
    "https://a.storyblok.com/f/239645/600x304/4a2ba3c8e9/daily-crossword.png";
  const gameUrl = "https://www.dictionary.com/e/crossword/";

  const gameImage2Url =
    "https://a.storyblok.com/f/239645/600x304/3f88d8a6ab/hurdle.png";
  const game2Url = "https://www.dictionary.com/e/crossword/";

  const gameImage3Url =
    "https://a.storyblok.com/f/239645/600x304/3d8f566b61/word-puzzle.png";
  const game3Url = "https://www.dictionary.com/games/word-puzzle";

  const gameImage4Url =
    "https://a.storyblok.com/f/239645/600x304/13cb53c0fb/word-wipe.png";
  const game4Url = "https://play.dictionary.com/games/word-wipe";

  // Styles for the game containers
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start", // Align items to the top
    padding: "50px",
  };

  const gameStyle = {
    marginRight: "20px",
  };

  return (
    <div>
      <h2 style={{ color: "blue", textAlign: "left", fontSize: "20px" }}>
        GET THAT JOB ! `
        <a
          href="https://www.thesaurus.com/e/writing/how-do-i-write-a-resume/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Your Guide To Writing A Strong Resume
        </a>
      </h2>
      <div style={containerStyle}>
        <div style={gameStyle}>
          <a href={gameUrl} target="_blank" rel="noopener noreferrer">
            <h2>Crossword</h2>
            <img
              src={gameImageUrl}
              alt="Game"
              style={{ width: "200px", height: "200px", marginTop: "20px" }}
            />
          </a>
        </div>
        <div style={gameStyle}>
          <a href={game2Url} target="_blank" rel="noopener noreferrer">
            <h2>Hurdle</h2>
            <img
              src={gameImage2Url}
              alt="Game"
              style={{ width: "200px", height: "200px", marginTop: "20px" }}
            />
          </a>
        </div>
        <div style={gameStyle}>
          <a href={game3Url} target="_blank" rel="noopener noreferrer">
            <h2>Word Puzzle</h2>
            <img
              src={gameImage3Url}
              alt="Game"
              style={{ width: "200px", height: "200px", marginTop: "20px" }}
            />
          </a>
        </div>
        <div style={gameStyle}>
          <a href={game4Url} target="_blank" rel="noopener noreferrer">
            <h2>Word Wipe</h2>
            <img
              src={gameImage4Url}
              alt="Game"
              style={{ width: "200px", height: "200px", marginTop: "20px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Game;
