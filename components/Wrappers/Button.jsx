import React from "react";

const Button = ({ className, children, onClick }) => {
  return (
    <button
      className={`flex h-10 items-center justify-center rounded-xl border-[1.5px] border-black/90 bg-white/30 px-4 text-base font-semibold text-black ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
