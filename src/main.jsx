{/*import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import Game from './Game.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  
  </React.StrictMode>,
)
*/}
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Game from "./Game";
import App from "./App";
import ListDetails from "./components/ListDetails";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Game />
    <ListDetails />
   
  </StrictMode>
);
