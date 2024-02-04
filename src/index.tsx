import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { CharactersContext } from "./_hooks/Context";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <CharactersContext>
      <App />
    </CharactersContext>
  </BrowserRouter>
);
