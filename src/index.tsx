import React from 'react';
import { createRoot } from 'react-dom/client';

import './styles/colorPalette.scss';
import './styles/fontWeight.scss';
import './styles/globals.scss';

import { App } from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
