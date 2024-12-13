// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import client from './lib/client';
import { Player } from './player';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const initReactApp = () => {
  const rootElement = document.getElementById('player'); // Obtém o elemento root
  if (!rootElement) {
    console.error('Elemento "player" não encontrado no DOM!');
    return;
  }

  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Routes>
            <Route path="/" element={<Player />} />
          </Routes>
        </ApolloProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

