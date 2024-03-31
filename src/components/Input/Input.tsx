"use client";
import React, { InputHTMLAttributes } from "react";

export interface InputProps {
  style?: React.CSSProperties;
  errorMessage?: string;
  placeholder?: string;
  value?: string | number | readonly string[];
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PLACEHOLDER_ENTER_KOREAN = "Please enter in Korean words.";

const Input = (props: InputProps) => {
  const { style, errorMessage, placeholder, onChange, value, name } = props;

  return (
    <div className="relative">
      <input
        style={style}
        name={name}
        type="text"
        value={value}
        className={`w-full h-50 p-8 border-1 border-solid rounded-10 
        ${errorMessage ? " border-red " : " border-gray-300 "} 
        text-black`}
        placeholder={placeholder}
        onChange={onChange}
        autoFocus
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
