import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MetaMaskProvider } from "../context/MetamaskContext";
import { UserContextProvider } from "../context/userContext";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
    }
  }, [firstRender]);

  return !firstRender ? (
    <MetaMaskProvider>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </MetaMaskProvider>
  ) : (
    <></>
  );
}

export default MyApp;
