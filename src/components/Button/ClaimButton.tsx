import React from "react";
export interface ClaimButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const ClaimButton = (props: ClaimButtonProps) => {
  const { onClick } = props;
  return (
    <button
      name="claim"
      className="w-80 h-29 rounded-10 bg-main text-white font-bold text-14 leading-16"
      onClick={onClick}
    >
      Claim
    </button>
  );
};

export default ClaimButton;
