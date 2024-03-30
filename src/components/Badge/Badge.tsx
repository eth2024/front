import React from "react";
export interface BadgeProps {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
const Badge = (props: BadgeProps) => {
  const { label, onClick } = props;
  return (
    <div
      className="w-50 h-18 text-center rounded-10 text-gray-400 font-semibold bg-gray-100 text-12"
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default Badge;
