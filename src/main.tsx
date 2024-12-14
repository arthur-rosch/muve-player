// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import client from './lib/client';
import { PlayerWrapper } from './PlayerWrapper';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from './components';

const root = document.getElementById('player')!
ReactDOM.createRoot(root).render(
  <React.StrictMode>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<PlayerWrapper />} />
            </Routes>
          </ErrorBoundary>
        </ApolloProvider>
      </BrowserRouter>
    </React.StrictMode>
)