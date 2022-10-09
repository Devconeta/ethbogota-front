import React from "react";
import Head from "next/head";
import Banner from "../Main/Banner";
import Navbar from "../Main/Navbar";

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

      <Banner />
      <div className="flex h-full w-full justify-center bg-gradient">
        <div className="container mx-10 h-full border-red-500">
          <Navbar />
          <div className="h-full">{children}</div>
        </div>
      </div>
    </>
  );
};

export default MainWrapper;
