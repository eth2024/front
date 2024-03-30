"use client";
import React, { InputHTMLAttributes } from "react";

export interface InputProps {
  style?: React.CSSProperties;
  errorMessage?: string;
  placeholder?: string;
  value?: string | number | readonly string[];
  onChange?: (event: any) => void;
}

export const PLACEHOLDER_ENTER_KOREAN = "Please enter in Korean words.";

const Input = (props: InputProps) => {
  const { style, errorMessage, placeholder, onChange, value } = props;

  return (
    <div className="relative">
      <input
        style={style}
        type="text"
        value={value}
        className={`w-full h-50 p-8 border-1 border-solid rounded-10 border-gray 
        ${errorMessage && "border-red"} 
        text-black `}
        placeholder={placeholder}
        onChange={onChange}
      />
      {errorMessage && (
        <>
          <span className="text-red">{errorMessage}</span>
          <div className="w-24 h-24 absolute top-13 right-10 bg-[url('/images/input-warning.svg')] bg-center"></div>
        </>
      )}
    </div>
  );
};

export default Input;
