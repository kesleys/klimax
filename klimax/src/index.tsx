import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

document.body.style.backgroundColor = "#222222"; /*Cor de Fundo do documento*/

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();