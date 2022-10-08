import React from "react";

const Button = ({ className, children, onClick }) => {
  return (
    <button
      className={`rounded-xl border-[1.5px] border-black/90 bg-white px-2 py-1 text-base font-semibold text-black ${className} flex items-center justify-center`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
