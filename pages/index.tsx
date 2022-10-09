import { useEffect, useState } from "react";

import type { NextPage } from "next";
import MainWrapper from "../components/Wrappers/MainWrapper";

const Home: NextPage = () => {
  return (
    <>
      <MainWrapper>
        <div className="h-full w-full">
          <div className="flex flex-col items-center">
            <div className="mt-10 mb-28">
              <h2 className="text-center text-5xl font-bold">Your data permanently distributed,</h2>
              <h2 className="relative bottom-[0.1rem] text-center text-5xl font-bold">
                but preserving your privacy.
              </h2>
            </div>

            <div className="w-[70%]">
              <h3 className="mb-2 text-2xl font-semibold relative">How do we ensure it?</h3>
              <p className="text-lg relative left-[0.6rem]">
                We use our own open source blockchain-agnostic SDK that employs asymetric encryption
                to protect your data and serve it directly to Web3Storage, making use of their nodes
                to pin and preserve your data across the network. Your distributed data is only
                readable and editable by you.
              </p>
            </div>
          </div>
        </div>
      </MainWrapper>
    </>
  );
};

export default Home;
