// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import client from './lib/client';
import { Player } from './player';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = document.getElementById('player')!
ReactDOM.createRoot(root).render(
  <React.StrictMode>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Routes>
            <Route path="/" element={<Player />} />
          </Routes>
        </ApolloProvider>
      </BrowserRouter>
    </React.StrictMode>
)