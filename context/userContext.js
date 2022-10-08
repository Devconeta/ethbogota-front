import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [wallet, setWallet] = useState({ address: null, connected: false });
  const [chain, setChain] = useState({ name: null, id: null });

  return (
    <UserContext.Provider value={{ wallet, setWallet, chain, setChain }}>
      {children}
    </UserContext.Provider>
  );
};
