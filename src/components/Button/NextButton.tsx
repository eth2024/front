import React from "react";
import { Icon } from "../icon";

export interface NextButtonProps {
  style?: React.CSSProperties;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const NextButton = (props: NextButtonProps) => {
  const { style, onClick, disabled } = props;
  // <Icon name='Warning' className="text-red" />
  return (
    <button
      style={style}
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="bg-purple w-full h-58 text-18 font-bold rounded-10 disabled:bg-gray-300 disabled:text-gray-500"
    >
      Next
    </button>
  );
};

export default NextButton;
