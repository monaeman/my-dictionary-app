import React, { useState } from "react";
//import debounce from 'lodash/debounce';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import ListDetails from "./components/ListDetails";

export default function App() {
  const [keyWord, setKeyWord] = useState("");
  const [result, setResult] = useState([]);

  async function handleSearch(e) {
    e.preventDefault();
    const apiUrl = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/umpire?key=fa217747-adc8-4750-8d0c-044eac3c1087`;

    try {
      const response = await fetch(apiUrl);

      const resultData = await response.json();
      console.log(resultData);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  function handleClear() {
    setKeyWord("");
    setResult();
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon
          icon={faBook}
          style={{ fontSize: "40px", marginRight: "8px" }}
        />
        <h1 style={{ color: "blue", textAlign: "center", fontSize: "60px" }}>
          Dictionary
        </h1>
      </div>
      <div className="App">
        <form onSubmit={handleSearch}>
          <input value={keyWord} onChange={(e) => setKeyWord(e.target.value)} />
          <button className="button" type="button" onClick={handleSearch}>
            Search
          </button>
          <button
            disabled={!result}
            className="button"
            type="button"
            onClick={handleClear}
          >
            Clear
          </button>
        </form>
      </div>
      {result && <ListDetails result={result} />}
    </div>
  );
}
<ListDetails />;
