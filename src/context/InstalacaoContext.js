import React, { createContext, useContext, useState } from 'react';

// Criação do contexto
const InstalacaoContext = createContext();

// Hook para consumir o contexto
export const useInstalacao = () => useContext(InstalacaoContext);

// Provider para envolver os componentes que precisam do contexto
export const InstalacaoProvider = ({ children }) => {
  const [instalacaoSelecionada, setInstalacaoSelecionada] = useState(null);

  return (
    <InstalacaoContext.Provider value={{ instalacaoSelecionada, setInstalacaoSelecionada }}>
      {children}
    </InstalacaoContext.Provider>
  );
};
