import { useContext, useEffect, useState } from "react";
import { getAddressShortcut } from "../helperFuncions";
import { ethers } from "ethers";
import { UserContext } from "../context/userContext";
import Button from "./Wrappers/Button";

const ConnectWallet = () => {
  const { wallet, setWallet, chain, setChain } = useContext(UserContext);
  const [loadingWallet, setLoadingWallet] = useState(true);

  const getNetwork = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const actualChain = await provider.getNetwork();
      setChain({
        name: actualChain.name,
        id: actualChain.chainId,
        supported: actualChain.chainId === 5,
      });
    }
  };

  // request for eth_accounts permission. (first log-in)
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWallet({ address: accounts[0], connected: true });
      } catch (error) {
        console.log("Error at connectWallet", error);
      }
    }
  };

  const disconnectWallet = async () => {
    setWallet({ address: null, connected: false });
  };

  const retrieveSession = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      if (accounts[0]) {
        const balance = await getBalance(accounts[0]);
        setWallet({ address: accounts[0], connected: true });
      } else {
        setWallet({ address: null, connected: false });
      }
      setLoadingWallet(false);
    }
  };

  // Retrieve address, if permission has been given before. (re-connect)
  // useEffect(() => {
  //   retrieveSession();
  //   getNetwork();
  // }, []);

  // useEffect(() => {
  //   if (!chain.supported) {
  //     setWallet({ address: null, connected: false, balance: null });
  //   }
  // }, [chain, setWallet]);

  // // Listen for account change and update the data.
  // // Listen for chain changes and reload the page.
  // useEffect(() => {
  //   if (window.ethereum) {
  //     window.ethereum.on("accountsChanged", () => {
  //       retrieveSession();
  //     });
  //     window.ethereum.on("chainChanged", () => {
  //       window.location.reload();
  //     });
  //     return () => {
  //       window.ethereum.removeAllListeners();
  //     };
  //   }
  // }, []);

  const switchChain = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x5" }], // Goerli
        });
      } catch (error) {
        // @dev Note: automatic networking addition can be implemented here.
        alert("Please manually add the Goerli Testnet.");
      }
    }
  };

  return (
    <>
      {/* {loadingWallet ? (
        <button className="btn--proto--opacity" disabled={true}>
          loading...
        </button>
      ) : !chain.supported ? (
        <button className="btn--proto--opacity !text-lg !text-white/50" onClick={switchChain}>
          UNSUPPORTED CHAIN
        </button>
      ) : wallet?.connected ? (
        <button
          className="btn--proto"
          onClick={disconnectWallet}
          onMouseEnter={() => {
            setHoverLogout(true);
          }}
          onMouseOut={() => {
            setHoverLogout(false);
          }}
        >
          {!hoverLogout ? (
            <span className="flex items-center">{getEthAddressShortcut(wallet?.address)}</span>
          ) : (
            "Sign out"
          )}
        </button>
      ) : ( */}
      <Button className="" onClick={connectWallet}>
        Connect wallet
      </Button>
      {/* )} */}
    </>
  );
};

export default ConnectWallet;
