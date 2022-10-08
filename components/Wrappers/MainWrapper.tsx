import React from "react";
import Head from "next/head";

interface MainWrapperProps {
  children: React.ReactNode;
}

const MainWrapper = ({ children }: MainWrapperProps) => {
  return (
    <>
      <Head>
        <title>Web3 Storage</title>
        <meta name="description" content="Project for ETHBogota Hackathon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>{children}</div>
    </>
  );
};

export default MainWrapper;
