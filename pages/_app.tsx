import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserContextProvider } from "../context/userContext";
declare global {
  interface Window {
    ethereum?: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp;
