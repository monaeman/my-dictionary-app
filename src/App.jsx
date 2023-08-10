import React, { useState } from "react";
//import debounce from 'lodash/debounce';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import ListDetails from "./components/ListDetails";

export default function App() {
  const [keyWord, setKeyWord] = useState("");
  const [result, setResult] = useState({});

  async function handleSearch(e) {
    e.preventDefault();
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
      console.log(result);
      setResult(result);
    } catch (error) {
      console.error(error);
    }
  }
  function handleClear() {
    setKeyWord("");
    setResult({});
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
      <ListDetails result={result} />
    </div>
  );
}
<ListDetails />;
