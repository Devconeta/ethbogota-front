import { useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import Button from "../Wrappers/Button";
import Link from "next/link";
import { UserContext } from "../../context/userContext";
import { useRouter } from "next/router";
import { ConnectWallet } from "../ConnectButton";

const Navbar = () => {
  const { wallet } = useContext(UserContext);

  const router = useRouter();

  return (
    <div className="mt-10 mb-10 flex w-full justify-between border-green-500">
      <div className="flex items-center gap-28">
        <Link href="/">
          <span className="flex cursor-pointer items-center">
            <img src="key.png" alt="" className="relative top-[3px] h-12 w-12" />
            <h1 className="flex text-3xl font-semibold text-black">MyPFS</h1>
          </span>
        </Link>

        {wallet.connected && router.pathname !== "/app" && (
          <Link href="app">
            <button className="text-2xl font-semibold">Enter app</button>
          </Link>
        )}
      </div>
      <ConnectWallet />
    </div>
  );
};

export default Navbar;
