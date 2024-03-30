import React from "react";

export interface ButtonProps {
  style?: React.CSSProperties;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
}

const Button = (props: ButtonProps) => {
  const { style, onClick, label, disabled } = props;

  return (
    <button
      type="button"
      style={style}
      disabled={disabled}
      onClick={onClick}
      className="bg-main text-white w-full h-58 text-18 font-bold rounded-10 disabled:bg-gray-300 disabled:text-gray-500"
    >
      {label}
    </button>
  );
};

export default Button;
