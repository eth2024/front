"use client";
import React from "react";
export interface SmallChooseButtonProps {
  id?: string;
  dataKey?: string;
  active?: boolean;
  innerText: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SmallChooseButton = (props: SmallChooseButtonProps) => {
  const { active, onClick, innerText, id, dataKey } = props;

  return (
    <button
      className={`h-120 w-full bg-white text-black rounded-10 border-solid border-1 border-gray-300 ${
        active && "border-main border-2"
      }`}
      onClick={onClick}
      id={id}
      data-key={dataKey}
    >
      {/* inner button */}
      <div
        className={`flex flex-col w-full h-full justify-center items-center gap-10 ${
          active && "text-main"
        }`}
      >
        <span className="font-bold font-18 text-center w-152 leading-22">
          {innerText}
        </span>
      </div>
    </button>
  );
};

export default SmallChooseButton;
