import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    "id": '',
    "nome": '',
    "status": '',
    "cep": '',
    "codigo": '',
    "endereco": '',
    "complemento": '',
    "cidade": '',
    "estado": ''
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
