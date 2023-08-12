import React, { useState, useEffect } from "react";
//import debounce from 'lodash/debounce';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import ListDetails from "./components/ListDetails";
import Game from "./Game";

export default function App() {
  const [keyWord, setKeyWord] = useState("");
  const [result, setResult] = useState({});

  async function handleSearch(e) {
    e.preventDefault();
    if (!keyWord.trim()) {
      console.error("Keyword is empty");
      return;
    }
    const url = `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${keyWord}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "acd083fd78msh0520d5687028325p1c832fjsn70f07468e234",
        "X-RapidAPI-Host": "dictionary-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      //console.log(result);
      setResult(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    console.log(result);
  }, []);

  function handleClear() {
    setKeyWord("");
    setResult({});
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "Highlight",
          padding: "10px",
          borderRadius: "5px",
          marginBottom: "20px",
          borderRadius: "40%",
        }}
      >
        <FontAwesomeIcon
          icon={faBook}
          style={{ fontSize: "40px", marginRight: "8px" }}
        />
        <h1
          style={{
            color: "white",
            textAlign: "left",
            fontSize: "60px",
            margin: "0",
            fontFamily: "unset",
          }}
        >
          Dictionary
        </h1>
      </div>
      <div className="App">
        <form onSubmit={handleSearch}>
          <input
            value={keyWord}
            onChange={(e) => setKeyWord(e.target.value)}
            placeholder="Enter a word"
          />
          <button className="button" type="submit">
            Search
          </button>
          <button
            disabled={!result.definition}
            className="button"
            type="button"
            onClick={handleClear}
          >
            Clear
          </button>
        </form>
      </div>
      {/* Navigation bar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          backgroundColor: "#f0f0f0", // Adding a background color
          padding: "10px 0", // Adding padding for spacing
        }}
      >
        <a
          href="#games"
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Games
        </a>
        <span style={{ margin: "0 10px" }}>|</span> {/* Adding separators */}
        <a
          href="https://www.dictionary.com/e/c/language-stories/"
          className="nav-link"
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer"
        >
          {" "}
          Language Stories
        </a>
        <span style={{ margin: "0 10px" }}>|</span>
        <a
          href="https://www.thesaurus.com/e/grammar/?adobe_mc=MCMID%3D04420543827964857500849917897764341718%7CMCORGID%3DAA9D3B6A630E2C2A0A495C40%2540AdobeOrg%7CTS%3D1691872100"
          className="nav-link"
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer"
        >
          Grammer Essentials
        </a>
        <span style={{ margin: "0 10px" }}>|</span>
        <a
          href="https://www.thesaurus.com/e/writing/?adobe_mc=MCMID%3D04420543827964857500849917897764341718%7CMCORGID%3DAA9D3B6A630E2C2A0A495C40%2540AdobeOrg%7CTS%3D1691871704"
          className="nav-link"
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Recommended for security
        >
          Writing Tips
        </a>
      </nav>
      <ListDetails result={result} />
      <Game />
    </div>
  );
}
