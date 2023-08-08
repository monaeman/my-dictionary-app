import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignCenter, faBook } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 style={{ color: "blue", textAlign: "center" }} >Dictionary</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon icon={faBook} style={{ fontSize: "24px", marginRight: "8px" }} />
        
      </div>
    </div>
  );
}

export default App;
