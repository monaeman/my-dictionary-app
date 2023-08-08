import React, { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import Game from './Game'; 

function App() {
  const [word, setWord] = useState('');
  const [data, setData] = useState(null);

  const fetchDictionaryData = async () => {
    if (word.trim() === '') {
      setData(null);
      return;
    }

    const url = `https://lexicala1.p.rapidapi.com/search-entries?text=${word}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'acd083fd78msh0520d5687028325p1c832fjsn70f07468e234',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      // Check if the data structure has the expected properties
      if (result.entries && result.entries[0] && result.entries[0].senses) {
        setData(result);
      } else {
        setData(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const delayedFetchDictionaryData = debounce(fetchDictionaryData, 1000);

  useEffect(() => {
    delayedFetchDictionaryData();
  }, [word]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon icon={faBook} style={{ fontSize: "40px", marginRight: "8px" }} />
        <h1 style={{ color: "blue", textAlign: "center" , fontSize: "60px"}}>Dictionary</h1>
      </div>
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          fetchDictionaryData();
        }}
      >
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Enter a word"
        />
        <button style={{ background: "red" }} type="submit">Search</button>
      </form>
      {data && (
        <div>
          <h2>Definitions:</h2>
          <ul>
            {data.entries[0].senses.map((sense, index) => (
              <li key={index}>{sense.definition.text}</li>
            ))}
          </ul>
        </div>
      )}
      <Game /> 
    </div>
  );
}

export default App;
