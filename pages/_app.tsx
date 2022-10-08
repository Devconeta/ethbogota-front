import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MetaMaskProvider } from "../context/MetamaskContext";
import { UserContextProvider } from "../context/userContext";
declare global {
  interface Window {
    ethereum?: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MetaMaskProvider>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </MetaMaskProvider>

  );
}

export default MyApp;
