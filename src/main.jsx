import React from 'react';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';  
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </StrictMode>
);
