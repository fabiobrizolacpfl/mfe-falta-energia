import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FaltaEnergiaPage from './pages/FaltaEnergiaPage';
import { UserProvider } from './context/UserContext'; // Corrigido de InstalacaoProvider para UserProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <UserProvider> 
          <FaltaEnergiaPage />
        </UserProvider>
  </React.StrictMode>
);