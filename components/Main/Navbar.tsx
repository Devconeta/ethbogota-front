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
  console.log(router.pathname);
  return (
    <div className="mt-10 mb-10 flex w-full justify-between border-green-500">
      <div className="flex items-center gap-10">
        <Link href="/">
          <span className="flex items-center">
            <img src="key.png" alt="" className="relative top-[3px] h-12 w-12" />
            <h1 className="flex text-3xl font-semibold text-black">Distribuited cloud</h1>
          </span>
        </Link>

        {wallet.connected && router.pathname !== "/app" && (
          <Link href="app">
            <button className="text-xl font-bold">Enter app</button>
          </Link>
        )}
      </div>
      <ConnectWallet />
    </div>
  );
};

export default Navbar;