import MyFS from "myweb3fs";
import React, { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import { ethers } from "ethers";

interface GlobalContext {
  wallet: { address: string; connected: boolean };
  setWallet: (wallet: { address: string; connected: boolean }) => void;
  chain: { name: string; id: number };
  fs?: MyFS;
}

export const UserContext = createContext({} as GlobalContext);

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [wallet, setWallet] = useState({ address: "", connected: false });
  const [chain, setChain] = useState({ name: "", id: 0 });

  let provider;

  useEffect(() => {
    retrieveSession();
    getNetwork();
  }, []);

  if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  }

  const fs: MyFS = new MyFS(process.env.NEXT_PUBLIC_MYFS_KEY as string, provider);

  const retrieveSession = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      if (accounts[0]) {
        setWallet({ address: accounts[0], connected: true });
      } else {
        setWallet({ address: "", connected: false });
      }
    }
  };

  const getNetwork = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const actualChain = await provider.getNetwork();
      setChain({
        name: actualChain.name,
        id: actualChain.chainId,
      });
    }
  };

  return (
    <UserContext.Provider value={{ wallet, setWallet, chain, fs }}>{children}</UserContext.Provider>
  );
};
