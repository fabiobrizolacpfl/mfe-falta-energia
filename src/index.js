import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FaltaEnergiaPage from './pages/FaltaEnergiaPage';
import { InstalacaoProvider } from './context/InstalacaoContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <InstalacaoProvider> 
          <FaltaEnergiaPage />
        </InstalacaoProvider>
  </React.StrictMode>
);