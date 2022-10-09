import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { MetamaskActions, MetaMaskContext } from "../context/MetamaskContext";
import { connectSnap, getSnap, shouldDisplayReconnectButton } from "../utils";

export const ConnectWallet = () => {
  const [state, dispatch] = useContext(MetaMaskContext);
  const { wallet, setWallet, fs } = useContext(UserContext);

  const WalletButton = () => {
    return <button className="rounded-xl bg-black text-blue-50"></button>;
  };

  const encryptAndUpload = () => {
    // CHANGE THIS
    const blob = new Blob([JSON.stringify({ name: "Gonza" })], {
      type: "application/json",
    });

    fs?.getRootIndex().then((index: any[]) => {
      console.log({ index });
      fs?.storeFiles(wallet.address, [new File([blob], `hisname.json`)], index); // CHANGE THIS
    });
  };

  const handleConnectClick = async () => {
    try {
      await connectSnap();
      const installedSnap = await getSnap();

      console.log(installedSnap);
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
        <img src="./flask_fox.svg" alt="flask logo" />
        <span>Install MetaMask Flask</span>
      </a>
    );
  }

  if (!state.installedSnap) {
    return (
      <button onClick={handleConnectClick} disabled={!state.isFlask}>
        <img src="./flask_fox.svg" alt="flask logo" />
        <span>Connect Wallet</span>
      </button>
    );
  }

  if (shouldDisplayReconnectButton(state.installedSnap)) {
    return (
      <>
        <button onClick={handleConnectClick} disabled={!state.installedSnap}>
          <img src="./flask_fox.svg" alt="flask logo" />
          <span>Connect Wallet</span>
        </button>

        <button onClick={encryptAndUpload}>test</button>
      </>
    );
  }

  return (
    <div>
      <span>Connected</span>
    </div>
  );
};
