import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MetaMaskProvider } from "../context/MetamaskContext";
declare global {
  interface Window {
    ethereum?: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MetaMaskProvider>
      <Component {...pageProps} />
    </MetaMaskProvider>
  );
}

export default MyApp;
