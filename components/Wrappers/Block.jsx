import React from "react";

const Block = ({ children, className }) => {
  return (
    <div
      className={`w-full rounded-2xl border-[1.5px] border-black/90 bg-white/30 px-5 py-3 ${className} backdrop-blur-md`}
    >
      {children}
    </div>
  );
};

export default Block;
