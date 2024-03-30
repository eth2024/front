import React from "react";

export interface CardProps {
  children: React.ReactNode;
  style: React.CSSProperties;
}

const Card = (props: CardProps) => {
  const { children, style } = props;

  return (
    <div style={style} className="w-full p-20 rounded-10 bg-white">
      {children}
    </div>
  );
};

export default Card;
