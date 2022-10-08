import { useState } from "react";

const Header = () => {
  const [walletAccount, setWalletAccount] = useState({
    isConnected: false,
    address: "",
    wrongNetwork: false,
  });
  const [network, setNetwork] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const account = await window.ethereum.request({ method: "eth_requestAccounts" });

        if (network == "gnosis" || network == "polygon") {
          setWalletAccount({ isConnected: true, address: account[0], wrongNetwork: false });
        } else {
          setWalletAccount({ isConnected: false, address: "", wrongNetwork: true });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getNetwork = async () => {
    const network = await browserProvider.getNetwork();

    setNetwork({ name: network.name, chainId: network.chainId });
  };

  return (
    <div className="flex flex-row justify-between px-10 pt-5">
      <h1>Web3 Storage</h1>
      <button onClick={connectWallet}>Connect Wallet</button>
    </div>
  );
};

export default Header;
