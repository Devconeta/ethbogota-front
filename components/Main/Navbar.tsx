import { ConnectWallet } from "../ConnectButton";

const Navbar = () => {
  return (
    <div className="mt-6 mb-10 flex w-full justify-between border-green-500">
      <h1 className="flex text-3xl font-semibold text-black ">
        <img src="key.png" alt="" className="h-12 w-12"/>
        Distribuited cloud
      </h1>

      <ConnectWallet />
    </div>
  );
};

export default Navbar;
