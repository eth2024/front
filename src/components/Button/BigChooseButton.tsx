"use client";
import React from "react";
import { Icon, IconType } from "../icon";

export interface BigChooseButtonProps {
  name?: string;
  active?: boolean;
  icon: IconType;
  innerText: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const BigChooseButton = (props: BigChooseButtonProps) => {
  const { active, onClick, innerText, name, icon } = props;

  return (
    <button
      className={`h-174 w-full bg-white text-black rounded-10 border-solid border-1 border-gray-300 ${
        active && "border-purple border-2"
      }`}
      onClick={onClick}
      name={name}
    >
      {/* inner button */}
      <div
        className={`flex flex-col w-full h-full justify-center items-center gap-10 ${
          active && "text-purple"
        }`}
      >
        <div className="w-30 h-30">
          <Icon
            name={icon}
            className={`text-black w-full h-full ${active && "text-purple"}`}
          />
        </div>
        <span className="font-bold font-18 text-center w-152 leading-22">
          {innerText}
        </span>
      </div>
    </button>
  );
};

export default BigChooseButton;
