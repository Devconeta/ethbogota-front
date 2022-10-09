import React from "react";
import { Loading } from "@nextui-org/react";

const Loader = ({ state }) => {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-20 flex !h-screen !w-screen items-center justify-center bg-gray-700/80 backdrop-blur-[2px]">
      <div className="flex flex-col gap-6">
        <p className="text-3xl text-white">{state}</p>
        <Loading type="points" size="xl" color="white"></Loading>
      </div>
    </div>
  );
};

export default Loader;
