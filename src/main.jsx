import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Game from "./Game";
import App from "./App";
//import ListDetails from "./components/ListDetails";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Game />
  </StrictMode>
);
