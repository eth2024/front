import React from "react";
export interface BadgeProps {
  innerText: string;
}
const Badge = (props: BadgeProps) => {
  const { innerText } = props;
  return (
    <div className="w-50 h-18 text-center rounded-10 text-gray-400 font-semibold bg-gray-100 text-12">
      {innerText}
    </div>
  );
};

export default Badge;
