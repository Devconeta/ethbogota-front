import { useState, useEffect } from "react";
import { ethers } from "ethers";

const Header = () => {
  const [walletAccount, setWalletAccount] = useState({
    isConnected: false,
    address: "",
    wrongNetwork: false,
  });
  const [network, setNetwork] = useState("");

  const browserProvider = new ethers.providers.Web3Provider(window.ethereum, "any");

  useEffect(() => {
    if (window.ethereum != null) {
      getNetwork();

      window.ethereum.on("chainChanged", () => {
        // @dev - To prevent issues and critical bugs, the best practice is to reload the page when the user changes the network
        window.location.reload();
      });

      return () => {
        window.ethereum.removeAllListeners();
      };
    }
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const account = await window.ethereum.request({ method: "eth_requestAccounts" });

        if (network == "xdai" || network == "matic") {
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

    setNetwork(network.name);
  };

  return (
    <div className="flex flex-row justify-between px-10 pt-5">
      <h1>Web3 Storage</h1>

      {walletAccount.isConnected ? (
        <div className="flex flex-col items-center justify-center">
          <p className="mr-2">{walletAccount.address}</p>
          <button className="px-4 py-2 text-white bg-blue-500 rounded-md">Disconnect</button>
        </div>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default Header;
