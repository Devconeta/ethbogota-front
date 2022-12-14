import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { MetamaskActions, MetaMaskContext } from "../context/MetamaskContext";
import { connectSnap, getSnap, shouldDisplayReconnectButton } from "../utils";
import { getAddressShortcut } from "../helperFuncions";

export const ConnectWallet = () => {
  const [state, dispatch] = useContext(MetaMaskContext);
  const { wallet, setWallet, fs } = useContext(UserContext);

  const WalletContainer = ({ children, className, onClick, disabled }) => {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={`flex items-center justify-center rounded-xl bg-black px-4 py-3 font-semibold text-blue-50 ${className}`}
      >
        {children}
      </button>
    );
  };

  const handleConnectClick = async () => {
    try {
      await connectSnap();
      const installedSnap = await getSnap();
      dispatch({
        type: MetamaskActions.SetInstalled,
        payload: installedSnap,
      });

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setWallet({ address: accounts[0], connected: true });
    } catch (e) {
      console.error(e);
      dispatch({ type: MetamaskActions.SetError, payload: e });
      setWallet({ address: "", connected: false });
    }
  };

  if (!state.isFlask) {
    return (
      <a href="https://metamask.io/flask/" target="_blank" rel="noreferrer">
        <WalletContainer className="">
          <img src="./flask_fox.svg" alt="flask logo" className="mr-2 h-7 w-7" />
          <span>Get MetaMask Flask</span>
        </WalletContainer>
      </a>
    );
  }

  if (!state.installedSnap) {
    return (
      <WalletContainer onClick={handleConnectClick} disabled={!state.isFlask}>
        <img src="./flask_fox.svg" alt="flask logo" className="mr-2 h-7 w-7" />
        <span>Install our Snap</span>
      </WalletContainer>
    );
  }

  if (shouldDisplayReconnectButton(state.installedSnap)) {
    return (
      <>
        <WalletContainer onClick={handleConnectClick} disabled={!state.installedSnap}>
          <img src="./flask_fox.svg" alt="flask logo" className="mr-2 h-7 w-7" />
          <span>{wallet.connected ? "Connected" : "Connect Wallet"}</span>
        </WalletContainer>
      </>
    );
  }

  return (
    <div>
      <span>Connected</span>
    </div>
  );
};
