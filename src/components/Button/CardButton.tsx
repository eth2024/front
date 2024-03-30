import React from "react";
export interface CardButtonProps {
  name?: string;
  innerText: string;
  src: string;
  alt: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const CardButton = (props: CardButtonProps) => {
  const { onClick, innerText, name, src, alt } = props;
  // bg - [url("/images/test.jpeg")];
  console.log(src);
  return (
    <button
      type="button"
      name={name}
      onClick={onClick}
      className={`relative h-174 w-full bg-gray-500 text-black rounded-10`}
    >
      <img src={src} alt={alt} className="w-full h-full rounded-10" />
      <span className="text-white font-bold absolute bottom-20 left-0 bg-gray-500 w-full ">
        {innerText}
      </span>
    </button>
  );
};

export default CardButton;
