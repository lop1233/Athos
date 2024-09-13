// index.tsx ou App.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // ou o caminho do seu arquivo de CSS

// Mostrar o loader até que a aplicação esteja carregada
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.display = 'none'; // Oculta o loader após o carregamento
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
